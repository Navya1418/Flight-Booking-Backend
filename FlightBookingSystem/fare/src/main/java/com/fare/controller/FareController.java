package com.fare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fare.entity.Fare;
import com.fare.service.FareService;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import java.util.List;

@RestController
@RequestMapping("/fare")
@CrossOrigin(origins = "http://localhost:3000")
public class FareController {

	@Autowired
	private FareService fareService;
	
	@PostMapping("/save")
	public ResponseEntity<Fare> addFare(@RequestBody Fare fare) {
		Fare newFare = fareService.saveFare(fare);

		ResponseEntity<Fare> responseEntity = new ResponseEntity<>(newFare, HttpStatus.OK);
		return responseEntity;

	}
	
	@HystrixCommand(fallbackMethod = "handleFetchFareById")
	@GetMapping("/find/{fareId}")
	public ResponseEntity<Object> fetchFareById(@PathVariable("fareId") int fareId) {
		ResponseEntity<Object> responseEntity = null;
		Fare fare = fareService.getFareById(fareId);
		responseEntity = new ResponseEntity<Object>(fare, HttpStatus.OK);
		return responseEntity;
	}
	public ResponseEntity<Object> handleFetchFareById(@PathVariable("fareId") int fareId) {
		ResponseEntity<Object> responseEntity = null;
		Fare fare = fareService.getFareById(fareId);
		responseEntity = new ResponseEntity<Object>(fare, HttpStatus.OK);
		return responseEntity;
	}
	
	@PutMapping("/modify")
	public ResponseEntity<Fare> modifyFare(@RequestBody Fare fare) {
		Fare modifiedFare=fareService.modifyFare(fare);
		ResponseEntity<Fare> responseEntity = new ResponseEntity<>(modifiedFare, HttpStatus.OK);
		return responseEntity;
	}
	
	@DeleteMapping("delete/{fId}")
	public ResponseEntity<String> removeFare(@PathVariable("fId") int fareId) {

		fareService.deleteFare(fareId);
		return new ResponseEntity<>("Fare removed Successfully.", HttpStatus.OK);
	}

	@GetMapping("/getallfares")
	public List<Fare> fetchAllFares() {
		List<Fare> fareList = fareService.getAllFares();
		return fareList;

	}
	@GetMapping("/{farePrice}")
	public ResponseEntity<Object> fetchFareByPrice(@PathVariable("farePrice") double farePrice) {
			ResponseEntity<Object> responseEntity = null;
			Fare fare = fareService.getFareByPrice(farePrice);

			responseEntity=new ResponseEntity<>(fare,HttpStatus.OK);
			return  responseEntity;
		}
	}

