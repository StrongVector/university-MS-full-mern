import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// function for editing book
export default function Edit() {
    let { id } = useParams();

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/book/' + id)
                .then((response) => {
                    setTitle(response.data.title);
                    setCover(response.data.cover);
                    setAuthor(response.data.author);
                })
                .catch(
                    (error) => {
                        console.log(error);
                    }
                );
        }, []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const book = {
            title: title,
            cover: cover,
            author: author
        }

        axios.put('http://localhost:4000/api/book/' + id, book)
            .then((res) => {
                navigate('/read');
            })
            .catch(
                (error) => {
                    console.log(error)
                });
    }
    return (
        <div>
            <h2>Hello from Edit component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                        value="Edit Book">
                    </input>
                </div>
            </form>

        </div>
    );
}