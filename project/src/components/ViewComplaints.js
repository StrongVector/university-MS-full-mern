// importing libraries
import { useEffect, useState } from "react";
import axios from "axios";
import Complaints from "./Complaints";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Popup from 'reactjs-popup';

// This is the function to view book items
function ViewComplaints() {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            axios.get('http://localhost:4000/api/complaints')
                .then(
                    (response) => {
                        setData(response.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        }, []
    );

    const Reload = (e) => {
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <div>
            <h2>These are live issues & complaints from residents!</h2>
            <MDBRow className='w-100'>
                <Complaints myBooks={data} ReloadData={Reload}></Complaints>
            </MDBRow>
        </div>
    );

}
export default ViewComplaints;