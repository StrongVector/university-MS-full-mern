// importing libraries
import { useState } from "react";
import axios from "axios";

// function for creating more complaints
function CreateComplaint() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [POC, setPOC] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const complaint = {
            title: title,
            description: description,
            POC: POC,
            lat: lat,
            lon: lon
        };

        // create complaint in database
        axios.post('http://localhost:4000/api/complaint', complaint)
            .then(
                // alert dialog so user knows that the create method ran without a hitch
                alert('Your complaint has been uploaded! Thank you')
            )
            .catch();
    }

    return (
        <div>
            <center>
                <h2>Report a thing to fix!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title of problem you're reporting: </label>
                        <input type="text"
                            placeholder="Title of problem"
                            className="form-control"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Describe in detail the problem you're reporting: </label>
                        <textarea type="text"
                            placeholder="Describe the problem"
                            className="form-control"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Please provide the Latitude and Longitude Coordinates : </label>
                        <input type="text"
                            placeholder="Latitude"
                            className="form-control"
                            value={lat}
                            onChange={(e) => { setLat(e.target.value) }}
                        />

                        <input type="text"
                            placeholder="Longtitude"
                            className="form-control"
                            value={lon}
                            onChange={(e) => { setLon(e.target.value) }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Please input your contact details : </label>
                        <input type="text"
                            placeholder="your contact details"
                            className="form-control"
                            value={POC}
                            onChange={(e) => { setPOC(e.target.value) }}
                        />
                    </div>
                    <div>
                        <input type="submit"
                            value="Submit report for council to investigate">
                        </input>
                    </div>
                </form>
            </center>
        </div>
    );

}
export default CreateComplaint;