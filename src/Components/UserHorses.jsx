import { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import "./UserHorses.css";

const UserHorses = (args) => {

    let {username, players} = {...args};

    function determineIfHighlighted(number){
        let found = false;
        if(players[username]){
            found = players[username].find(card => card.includes(String(number)));
        }
        return found || false;
    }

    return(
        <div className="wrapper">
            <h1 className={`horseNumber ${determineIfHighlighted("2") ? "userCard" : ""}`}>2</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("3") ? "userCard" : ""}`}>3</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("4") ? "userCard" : ""}`}>4</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("5") ? "userCard" : ""}`}>5</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("6") ? "userCard" : ""}`}>6</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("7") ? "userCard" : ""}`}>7</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("8") ? "userCard" : ""}`}>8</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("9") ? "userCard" : ""}`}>9</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("10") ? "userCard" : ""}`}>10</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("J") ? "userCard" : ""}`}>11</h1>
            <h1 className={`horseNumber ${determineIfHighlighted("Q") ? "userCard" : ""}`}>12</h1>
        </div>
    )
}

export default UserHorses;