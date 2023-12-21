import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
import { useState } from "react";

export function Books(props) {
    const options = ["Seen", "Working on this task", "Finished this task"];
    const [myValue, setMyValue] = useState(options[0]);

    return props.myBooks.map(
        (book) => {
            return (
                <MDBCol className='{book._id}'>
                    <iframe width="425" height="350" src={"http://www.openstreetmap.org/export/embed.html?bbox=" + book.lon + "%2C" + book.lat + "%2C" + book.lon + "%2C" + book.lat + "&marker=" + book.lat + "%2C" + book.lon + "&layers=ND"}></iframe>
                    <div>
                        <table>
                            <tbody>


                                <tr>
                                    <td><b>Id :</b></td>
                                    <td><i>{book._id}</i></td>
                                </tr>

                                <tr>
                                    <td><b>Title of task : </b></td>
                                    <td><i>{book.title}</i></td>
                                </tr>

                                <tr>
                                    <td><b>Description</b></td>
                                    <td>{book.description}</td>
                                </tr>

                                <tr>
                                    <td><b>Status</b></td>
                                    <td><i>---</i></td>
                                </tr>

                                <tr>
                                    <td><b>POC</b></td>
                                    <td><a href="tel:{book.POC}">{book.POC}</a></td>
                                </tr>

                                <tr>
                                    <td>Coordinates (Latitude) : </td>
                                    <td>{book.lat}</td>
                                </tr>


                                <tr>
                                    <td>Coordinates (Longitude) : </td>
                                    <td>{book.lon}</td>
                                </tr>

                                <tr>
                                    <td>Directions to site : </td>
                                    <td><a href={"http://maps.google.co.uk/maps?q=" + book.lat + "," + book.lon} target="_blank">Direct me to this site</a></td>
                                </tr>

                                <tr>
                                    <td>Change state of task : </td>
                                    <td>
                                        <DropdownButton id="dropdown-basic-button" title="Dropdown button" onChange={(e) => setMyValue(e.target.value)}
                                            defaultValue={myValue}>
                                            {options.map((option, idx) => (
                                                <Dropdown.Item key={idx}>{option}</Dropdown.Item>
                                            ))}
                                        </DropdownButton>
                                    </td>
                                </tr>

                                <tr>
                                    <td><b>Delete Complaint</b></td>
                                    <td><Button onClick={(e) => {
                                        e.preventDefault();
                                        axios.delete('http://localhost:4000/api/book/' + book._id)
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
export default Books;
