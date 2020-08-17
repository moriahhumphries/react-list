import React from "react";

const ContactCard = (props) => {
    return (
        <div>
            <div className="contact-card">
                <h3>{props.contact.name}</h3>
                <img src={props.contact.imgUrl} />
                <p>{props.contact.phone}</p>
                <p>{props.contact.email}</p>
            </div>
        </div>
    )
}

export default ContactCard;