import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";

export function Complaints(props) {
    const options = ["Seen", "Working on this task", "Finished this task"];
    const [trainerArray, setTrainerArray] = useState([]);

    return props.myBooks.map(
        (complaint) => {
            return (
                <MDBCol className='{book._id}'>
                    <iframe width="425" height="350" src={"http://www.openstreetmap.org/export/embed.html?bbox=" + complaint.lon + "%2C" + complaint.lat + "%2C" + complaint.lon + "%2C" + complaint.lat + "&marker=" + complaint.lat + "%2C" + complaint.lon + "&layers=ND"}></iframe>
                    <div>
                        <table>
                            <tbody>


                                <tr>
                                    <td><b>Id :</b></td>
                                    <td><i>{complaint._id}</i></td>
                                </tr>

                                <tr>
                                    <td><b>Title of task : </b></td>
                                    <td><i>{complaint.title}</i></td>
                                </tr>

                                <tr>
                                    <td><b>Description</b></td>
                                    <td>{complaint.description}</td>
                                </tr>

                                <tr>
                                    <td><b>Status</b></td>
                                    <td><i>{complaint.status}</i></td>
                                </tr>

                                <tr>
                                    <td><b>POC</b></td>
                                    <td><a href="tel:{complaint.POC}">{complaint.POC}</a></td>
                                </tr>

                                <tr>
                                    <td>Coordinates (Latitude) : </td>
                                    <td>{complaint.lat}</td>
                                </tr>


                                <tr>
                                    <td>Coordinates (Longitude) : </td>
                                    <td>{complaint.lon}</td>
                                </tr>

                                <tr>
                                    <td>Directions to site : </td>
                                    <td><a href={"http://maps.google.co.uk/maps?q=" + complaint.lat + "," + complaint.lon} target="_blank">Direct me to this site</a></td>
                                </tr>

                                <tr>
                                    <td>Change state of task : </td>
                                    <td>
                                        <Link to={'/EditComplaint/' + complaint._id} className='btn btn-warning'>Update / Edit Status</Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td><b>Delete Complaint</b></td>
                                    <td><Button onClick={(e) => {
                                        e.preventDefault();
                                        axios.delete('http://localhost:4000/api/book/' + complaint._id)
                                            .then(() => {
                                                window.location.reload();
                                                console.log('need to reload now')
                                                // res.
                                            })
                                            .catch((error) => {
                                                console.log("can't delete: " + error);
                                            });
                                    }} variant="danger" size="lg">
                                        Delete this entry
                                    </Button></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </MDBCol>

            );
        }
    )
};
export default Complaints;