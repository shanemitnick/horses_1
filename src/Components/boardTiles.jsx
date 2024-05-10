import BoardColumn from "./boardColumn";

export default function BoardTiles(props){


    let boardView = Object.keys(props.goalScore).map((horse) => {

      return(
        <div key={horse} id={horse}>
          <BoardColumn  number={horse}
                        moneyOwed={props.moneyView[horse]}
                        currentPos={props.currentGame[horse]}
                        deadPosition={props.currentGame[horse]}
                        goal={props.goalScore[horse]} 
                        winningHorse={props.winningHorse}
                        diceTotal={props.diceTotal}/>
        </div>
      )
    });


    return(
        <div className="w-100">
        {boardView}
        </div>
    );
}