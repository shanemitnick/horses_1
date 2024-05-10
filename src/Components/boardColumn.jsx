/* eslint-disable react/prop-types */

import { Col, Table, Row } from "react-bootstrap";
import { FaHorseHead  } from 'react-icons/fa';
import "./boardColumn.css"
export default function BoardColumn(props) {
  let columns = [];
  let deadColumns = [];

  deadColumns = [...Array(4).keys()].map((currentRow => {
      if(currentRow === props.deadPosition + 4){
        return(<div key={currentRow*-1} className={`text-center me-2 rounded border bg-warning d-flex align-items-center justify-content-center ${props.number == props.diceTotal ? "selectedPiece" : ""}`} 
                   style={{width: "100px", height: "50px", background: props.diceTotal == props.number}}> 
                      ${props.moneyOwed}    <FaHorseHead/>
                </div>);
      } else {
        return(<div key={currentRow*-1} className={`rounded bg-secondary me-2 align-items-stretch selectedPice ${props.number == props.diceTotal ? "selectedPiece" : ""}`} 
                                        style={{width: "100px", height: "50px"}}>  </div>);
      }
    }));



  columns = [...Array(props.goal - 1).keys()].map((currentRow) => {
      if(props.currentPos === currentRow + 1){
        return(
          <Col key={currentRow} className="rounded bg-secondary me-2 text-center flex-grow d-flex align-items-center justify-content-center selectedPiece" style={{height:"50px"}}> 
                    <FaHorseHead />
          </Col>
        )
      } else {
        return(
        <Col key={currentRow} className={`rounded bg-secondary me-2 flex-grow ${props.number == props.diceTotal ? "selectedPiece" : ""}`} style={{height:"50px"}}></Col>
        )
      }
    })

  return(
    <Table className="d-flex flex-row">      
        {deadColumns} 
       <div style={{width: "60px"}} className="ms-2 text-white d-flex justify-content-start align-items-center">{props.number}</div>
       <Row id="4/10" className="bg-dark  d-flex flex-row w-100 flex-grow align-content-stretch">
        {columns}
        </Row>
    </Table>  )
}