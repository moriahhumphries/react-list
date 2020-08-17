import React from "react";

const Clock = () => {
    const date = new window.Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "Morning.";
    } else if (hours >=12 && hours < 17) {
        timeOfDay = "Afternoon.";
    } else {
        timeOfDay = "Night.";
    }

    const styles = {
        color: "purple"
    }

    return (
        <h1 style={styles}>Good {timeOfDay}</h1>
    )
}

export default Clock;