import { Link } from "react-router-dom";
import {Button, Container, InputGroup, Form} from 'react-bootstrap';
import { useState } from "react";
import "../App.css";
import video from "./test.mp4"
import io from 'socket.io-client';
import { GiHorseHead } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { keys } from "localforage";


const Root = () =>  {
  let [name, setName] = useState('');
  let [showError, setShowError] = useState(false)
  const socket = io.connect('http://127.0.0.1:5004')
  const navigate = useNavigate();

  socket.on("addPlayerResult", (arg) => returnNameResult(arg));

  function returnNameResult(arg){
    if(Object.keys(arg).includes(name)){
      // successful add!
      navigate(`/board/${name}`)
    }else{
      // oh no!
      setShowError(true)
    }
  }

  return(
   <> 
      <video className="video-background" width="400px" loop muted autoPlay>
        <source src={video} type="video/mp4"/>        browser doesnt support video tag
      </video>

      <div className="ms-5 landing-wrapper flex">
        <h1 className="header-text">Welcome to Horses</h1>
        <h3 className="secondary-text">The best way to play a classic board game... *IF* your friends all live across the country.</h3>
        {/* <Button variant="success"><Link to={`board`} style={{color: 'white'}}>Go to Board</Link></Button> */}

        <h1 className="landing-text">Lets Play Some Horses</h1>
        <h4 className="secondary-text">Enter your name and lets play:</h4>
        <div className="data-entry">
          <InputGroup className="w-75 me-3 bg-dark text-white">
              <InputGroup.Text id="basic-addon1" className="bg-dark text-white">Name:</InputGroup.Text>
              <Form.Control
              placeholder="John Smith"
              aria-label="Game Name"
              aria-describedby="basic-addon1"
              className="bg-dark text-white"
              onChange={(val) => setName(val.target.value)}
              />
          </InputGroup>
          <Button variant="success" onClick={() => socket.emit("addPlayer", name)}>Let's Ride <GiHorseHead /> </Button>
        </div>
        {showError ? <p className="text-danger ms-2 mt-1">Error, try again. Maybe with a new name.</p> : null}
      </div>
    </>
  )
}

export default Root;