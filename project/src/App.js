// import libraries
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/CreateComplaint';
import Read from './components/read';
import EditComplaint from './components/EditComplaint';

function App() {
  return (
    <Header></Header>
    );
}

export default App;
