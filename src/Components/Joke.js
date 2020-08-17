import React from "react";

const Joke = (props) => {
    return (
        <div>
            <p style={{display: !props.question && "none", border: "1px solid black", marginBottom: "5px"}}>Question: {props.question}</p>
            <p style={{display: !props.punchLine && "none", border: "1px solid black", marginBottom: "5px"}}>Punchline: {props.punchLine}</p>
        </div>
    )
}

export default Joke;