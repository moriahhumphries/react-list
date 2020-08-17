import React from "react";

const Joke = (props) => {
    return (
        <div style={{border: "1px solid black", marginBottom: "5px"}}>
            <p>Question: {props.joke.question}</p>
            <p style={{display: !props.joke.punchline && "none"}}>Punchline: {props.joke.punchline}</p>
        </div>
    )
}

export default Joke;