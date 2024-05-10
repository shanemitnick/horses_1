import { Container } from "react-bootstrap"
import "./PlayerHands.css"
import { GiCard2Clubs, GiCard3Clubs, GiCard4Clubs, GiCard5Clubs, GiCard6Clubs, GiCard7Clubs, GiCard8Clubs, GiCard9Clubs, GiCard10Clubs, GiCardJackClubs, GiCardQueenClubs,
            GiCard2Diamonds, GiCard3Diamonds, GiCard4Diamonds, GiCard5Diamonds, GiCard6Diamonds, GiCard7Diamonds, GiCard8Diamonds, GiCard9Diamonds, GiCard10Diamonds, GiCardJackDiamonds, GiCardQueenDiamonds,
            GiCard2Spades, GiCard3Spades, GiCard4Spades, GiCard5Spades, GiCard6Spades, GiCard7Spades, GiCard8Spades, GiCard9Spades, GiCard10Spades, GiCardJackSpades, GiCardQueenSpades,
            GiCard2Hearts, GiCard3Hearts, GiCard4Hearts, GiCard5Hearts, GiCard6Hearts, GiCard7Hearts, GiCard8Hearts, GiCard9Hearts, GiCard10Hearts, GiCardJackHearts, GiCardQueenHearts
        } from "react-icons/gi";
export default function PlayerHands(props){

    function getPlayerCardIcon(card){
        ["H2", "D2", "S2", "C2","H3", "D3", "S3", "C3", "H4", "D4", "S4", "C4","H5", "D5", "S5", "C5", "H6", "D6", "S6", "C6", "H7", "D7", "S7", "C7", "H8", "D8", "S8", "C8", "H9", "D9", "S9", "C9", "H10", "DT", "ST", "CT", "HJ", "DJ", "SJ", "CJ", "HQ", "DQ", "SQ", "CQ"]
        let iconMap = {
            'C2': (<GiCard2Clubs color="white" size="60px"/>),
            'C3': (<GiCard3Clubs color="white" size="60px"/>),
            'C4': (<GiCard4Clubs color="white" size="60px"/>),
            'C5': (<GiCard5Clubs color="white" size="60px"/>),
            'C6': (<GiCard6Clubs color="white" size="60px"/>),
            'C7': (<GiCard7Clubs color="white" size="60px"/>),
            'C8': (<GiCard8Clubs color="white" size="60px"/>),
            'C9': (<GiCard9Clubs color="white" size="60px"/>),
            'C10': (<GiCard10Clubs color="white" size="60px"/>),
            'CJ': (<GiCardJackClubs color="white" size="60px"/>),
            'CQ': (<GiCardQueenClubs color="white" size="60px"/>),
            'D2': (<GiCard2Diamonds color="red" size="60px"/>),
            'D3': (<GiCard3Diamonds color="red" size="60px"/>),
            'D4': (<GiCard4Diamonds color="red" size="60px"/>),
            'D5': (<GiCard5Diamonds color="red" size="60px"/>),
            'D6': (<GiCard6Diamonds color="red" size="60px"/>),
            'D7': (<GiCard7Diamonds color="red" size="60px"/>),
            'D8': (<GiCard8Diamonds color="red" size="60px"/>),
            'D9': (<GiCard9Diamonds color="red" size="60px"/>),
            'D10': (<GiCard10Diamonds color="red" size="60px"/>),
            'DJ': (<GiCardJackDiamonds color="red" size="60px"/>),
            'DQ': (<GiCardQueenDiamonds color="red" size="60px"/>),
            'H2': (<GiCard2Hearts color="red" size="60px"/>),
            'H3': (<GiCard3Hearts color="red" size="60px"/>),
            'H4': (<GiCard4Hearts color="red" size="60px"/>),
            'H5': (<GiCard5Hearts color="red" size="60px"/>),
            'H6': (<GiCard6Hearts color="red" size="60px"/>),
            'H7': (<GiCard7Hearts color="red" size="60px"/>),
            'H8': (<GiCard8Hearts color="red" size="60px"/>),
            'H9': (<GiCard9Hearts color="red" size="60px"/>),
            'H10': (<GiCard10Hearts color="red" size="60px"/>),
            'HJ': (<GiCardJackHearts color="red" size="60px"/>),
            'HQ': (<GiCardQueenHearts color="red" size="60px"/>),
            'S2': (<GiCard2Spades color="white" size="60px"/>),
            'S3': (<GiCard3Spades color="white" size="60px"/>),
            'S4': (<GiCard4Spades color="white" size="60px"/>),
            'S5': (<GiCard5Spades color="white" size="60px"/>),
            'S6': (<GiCard6Spades color="white" size="60px"/>),
            'S7': (<GiCard7Spades color="white" size="60px"/>),
            'S8': (<GiCard8Spades color="white" size="60px"/>),
            'S9': (<GiCard9Spades color="white" size="60px"/>),
            'S10': (<GiCard10Spades color="white" size="60px"/>),
            'SJ': (<GiCardJackSpades color="white" size="60px"/>),
            'SQ': (<GiCardQueenSpades color="white" size="60px"/>),
        }

        return iconMap[card];
    }

    function getAllPlayerCards(player) {

        let cards = props.players[player].map((card) => {
            return (
                getPlayerCardIcon(card)
            );
        });

        return(
            <div>
                {cards}
            </div>
        )
    }

    let playerSquares = Object.keys(props.players).map((player) => {
        return(<Container key={player} className="d-flex flex-column align-items-center overflow-scroll" style={{maxHeight: "130px", overflow: "scroll", flexWrap: "nowrap"}}>
                    <h3 className="text-white">{player}</h3>
                    {getAllPlayerCards(player)}
                </Container>
        );
    })
    return (
        <Container  className="ms-0 border border-secondary align-items-start d-flex flex-row">
            {playerSquares}
        </Container>
    )
}