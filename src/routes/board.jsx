import { useState, useEffect } from "react"
import { Button, InputGroup, Form } from "react-bootstrap";
import io from 'socket.io-client';
import GameOverModal from "../Components/gameoverModal";
const socket = io.connect('http://127.0.0.1:5004')
import PlayerHands from "../Components/PlayerHands";
import BoardContainer from "../Components/boardContainer.jsx";
import { useParams } from 'react-router-dom';
import UserHorses from '../Components/UserHorses';

const Board = (args) => {

  const {admin} = {...args}
  const { username } = useParams();

  let [test] = useState(0);
  let [dice1, setDice1] = useState(1);
  let [dice2, setDice2] = useState(1);
  let [deadHorses, setDeadHorses] = useState([]);
  let [moneyView, setMoneyView] = useState([]);
  let [players, setPlayers] = useState({});
  let [newPlayer, setNewPlayer] = useState("");
  let [gameOver, setGameOver] = useState(false);
  let [winningHorse, setWinningHorse ] = useState();
  let [winningPlayers, setWinningPlayers] = useState([]);
  let [goalScore, setGoalScore] = useState({});
  let [currentGame, setCurrentGame] = useState({});
  // let [showWelcomeModal, setShowWelcomeModal] = useState(true)

  useEffect(() => {
    handleGetGameView();
  }, [])

  useEffect(() =>{ 
    socket.emit();
    socket.on("hello", (arg)=> {
      console.log("WOAH" , arg);
    })

    socket.on('rollDiceResult', (arg) => rollDice(arg));
    socket.on('killHorseResult', (arg) => killHorse(arg));
    socket.on('resetGameResult', (arg) => resetGame(arg));
    socket.on('gameViewResult', (arg) => getGameView(arg));
    socket.on('moneyViewResult', (arg) => getMoneyView(arg));
    socket.on('addPlayerResult', (arg) => addPlayer(arg));
    socket.on('dealCardsResult', (arg) => dealCards(arg))
  }, [dice1, dice2]);

  function getGameView(arg){
    setDice1(arg.dice1);
    setDice2(arg.dice2);
    setGoalScore(arg.goalScore);
    setCurrentGame(arg.game);
    setMoneyView(arg.moneyView);
    setPlayers(arg.players);
  }

  function getMoneyView(arg){
    console.log("MONEY VIEW!", arg);
  }

  function rollDice(arg){
    // console.log(arg);
    setDice1(arg.dice1);
    setDice2(arg.dice2);
    setGoalScore(arg.goalScore);
    setCurrentGame(arg.game);
    setMoneyView(arg.moneyView);
    setPlayers(arg.players);

    if(arg.result !== -1){
      setGameOver(true);
      setWinningHorse(arg.result.card);
      setWinningPlayers(arg.result.winningPlayers);
    }
  }

  function killHorse(arg){
    setDeadHorses(arg.newDeadHorses);
    setCurrentGame(arg.gameView);
    setGoalScore(arg.goalScore);
    setMoneyView(arg.moneyView);
  }

  function addPlayer(arg){
    setPlayers(arg);
  }

  function resetGame(arg){
    // console.log("Reset game result", arg);
    setDice1(1);
    setDice2(1);
    setDeadHorses(arg.deadHorses);
    setCurrentGame(arg.gameView);
  }

  function dealCards(arg){
    console.log(arg);
  }

  function handleRollDice(){
    socket.emit("rollDice");
  }

  function handleKillHorse(){
    socket.emit('killHorse');
  }

  function handleResetGame(){
    socket.emit('resetGame');
  }

  function handleGetGameView(){
    socket.emit('getGameView');
  }

  function handleGetMoneyView(){
    socket.emit("getMoneyView");
  }

  function handleAddPlayer(){
    socket.emit("addPlayer", newPlayer);
  }

  function handleDealCards(){
    socket.emit("dealCards");
  }

  return(
    <div className="bg-dark" style={{height: "100vh", padding: "5%"}}>
      {gameOver ? 
         <GameOverModal show={gameOver} 
                        closeModal={() => setGameOver(false)}
                        players={players}
                        winningHorse={winningHorse}
                        winningPlayers={winningPlayers}
                        moneyView={moneyView}/>
      : null}
      <h1 className="text-secondary">Welcome to the board.</h1>
      {/* <WelcomeOverlay show={showWelcomeModal}
                      onHide={() => setShowWelcomeModal(false)}
                      addPlayer={(name) => addNewPlayer(name)}/> */}

      {admin ? 
      <>
            <Button className="me-2" onClick={() => handleGetGameView()}>Get Game View</Button>
            <Button className="me-2" onClick={() => handleKillHorse()}>Kill Horse</Button>
            <Button className="me-2" onClick={() => handleResetGame()}>Reset Game</Button>
            <Button className="me-2" onClick={() => handleGetMoneyView()}>Get Money View</Button>
            <Button className="me-2" onClick={() => handleDealCards()}>Deal Cards</Button>
            <InputGroup className="mb-3 w-25 border mt-2" style={{outline: "none"}}>
                <Button variant="primary" onClick={() => handleAddPlayer()}>
                  Add Player
                </Button>
                <Form.Control  onChange={(e) => setNewPlayer(e.target.value)}/>
            </InputGroup> 
            </>: null
    }



      <PlayerHands  players={players}/>
      
      <BoardContainer currentGame={currentGame}
                      winningHorse={winningHorse}
                      deadHorses={deadHorses}
                      goalScore={goalScore}
                      moneyView={moneyView}
                      dice1={dice1}
                      dice2={dice2}
                      rollDice={handleRollDice}/>
      {/* <Controls /> */}

      <UserHorses  username={username}
                   players={players}/>

    </div>


  )
}

export default Board;