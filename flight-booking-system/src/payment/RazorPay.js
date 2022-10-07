import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RazorPay() {

    const { id } = useParams();
    const [amount, setAmount] = useState(id);
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {

        e.preventDefault();
        if (amount === "") {
            alert("please enter amount");
        }
        else {
            var options = {
                key: "rzp_test_yIyl72VKQCFZt7",
                key_secret: "xHn8zaaVO0mGWAVKreYrxoqL",
                amount: amount * 100,
                currency: "INR",
                name: "FLIGHT_BOOKING_SYSTEM",
                description: "for payment",
                handler: function (response) {
                    // alert(response.razorpay_payment_id);
                    alert("Payment successfull!!!!")
                    navigate('/checkin/add/:id')

                },
                prefill: {
                    name: "",
                    email: "arpithans1101@gmail.com",
                    contact: "7892553169"
                },
                notes: {
                    address: "Razorpay corporate office"
                },
                theme: {
                    color: "white"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }





    return (
        <body>
            <div className="container-addbk">
                <div>
                    <h2 className="h2-adbk">Payment</h2><hr></hr>
                </div>

                <div className="container">
                    <div><b>Amount:</b>
                        <label>

                            <input type="text" placeholder="Enter Amount" name="amount" value={amount} onChange={e => setAmount(id)} disabled/>

                        </label>

                    </div><br></br>
                </div>
                <div>
                    <button className="btn btn-success" onClick={handleSubmit}>
                        PAY</button>&nbsp;
                </div>

                <div style={{ float: "right" }}>
                    <button onClick={() => navigate('/checkin/add/:id')} className="btn btn-sm btn-warning">Next</button>
                </div>

                <div style={{ float: "left" }}>
                    <button onClick={() => navigate(-1)} className="btn btn-sm btn-warning">Back</button>
                </div>

            </div>
        </body>






    )

}
export default RazorPay;