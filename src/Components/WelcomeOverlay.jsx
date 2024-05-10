import { useState } from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import io from 'socket.io-client';

export default function WelcomeOverlay(props){
    
    let [name, setName] = useState("");

    

    return (
            <Modal  size="lg" show={props.show} onHide={() => props.onHide()} variant="dark">
                <Modal.Header className="bg-dark text-white" closeButton>
                    <Modal.Title>Welcome to (online) horses</Modal.Title>
                </Modal.Header>

                <Modal.Body className="bg-dark text-white">
                    Enter your name to join the game! Only enter your name once.
                    <InputGroup className="mb-3 bg-dark text-white">
                        <InputGroup.Text id="basic-addon1" className="bg-dark text-white">Name:</InputGroup.Text>
                        <Form.Control
                        placeholder="John Smith"
                        aria-label="Game Name"
                        aria-describedby="basic-addon1"
                        className="bg-dark text-white"
                        onChange={(val) => setName(val.target.value)}
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer className="bg-dark text-white">
                    <Button onClick={() => props.addPlayer(name)} disabled={name == ""}>Join Game</Button>
                    <Button onClick={() => props.onHide()}>Just Watch</Button>
                </Modal.Footer>
            </Modal>
    )
}