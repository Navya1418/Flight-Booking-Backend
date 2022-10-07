import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCheckin } from "../store/actions/CheckinAction";

function DeleteCheckin() {
    const checkin = useSelector(state => state.checkinReducer.checkin);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteHandler = () => {
        dispatch(deleteCheckin(id));
    }
    useEffect(deleteHandler, []);

    

    return (

        <div className='container-fluid'>
            {
                checkin !== null &&
                alert("Checkin deleted")
            }



        </div >

    )
}


export default DeleteCheckin;