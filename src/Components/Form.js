import React from "react";

const Form = (props) => {
    return (
        <div>
            <form>
                <input type="text"
                       value={props.data.firstName}
                       name="firstName"
                       placeholder="First Name"
                       onChange={props.handleChange}/>
                <br/>
                <input type="text"
                       value={props.data.lastName}
                       name="lastName"
                       placeholder="Last Name"
                       onChange={props.handleChange}/>
                <br/>
                <input type="text"
                       value={props.data.age}
                       name="age"
                       placeholder="Age"
                       onChange={props.handleChange}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <label>
                    <input type="radio"
                           name="gender"
                           value="male"
                           checked={props.data.gender === "male"}
                           onChange={props.handleChange}
                    /> Male
                </label>
                <br/>
                <label>
                    <input type="radio"
                           name="gender"
                           value="female"
                           checked={props.data.gender === "female"}
                           onChange={props.handleChange}
                    /> Female
                </label>
                <br/>
                <br/>
                <label>Destination: </label>
                <select value={props.data.destination}
                        onChange={props.handleChange}
                        name="destination">
                    <option value="">Select</option>
                    <option value="utah">Utah</option>
                    <option value="washington">Washington</option>
                    <option value="california">California</option>
                </select>
                <br/>
                <br/>
                <label>Dietary Restrictions:</label>
                <input type="checkbox"
                       name="isVegan"
                       onChange={props.handleChange}
                       checked={props.data.isVegan}
                />Vegan?

                <input type="checkbox"
                       name="isKosher"
                       onChange={props.handleChange}
                       checked={props.data.isKosher}
                />Kosher?

                <input type="checkbox"
                       name="isGlutenFree"
                       onChange={props.handleChange}
                       checked={props.data.isGlutenFree}
                />Gluten Free?
                <br/>
                <br/>
                <button>Submit</button>
            </form>

            <hr/>
            <h1>Entered information: </h1>
            <h2>Your name: {props.data.firstName} {props.data.lastName}</h2>
            <h2>Your age: {props.data.age}</h2>
            <h2>Your gender: {props.data.gender}</h2>
            <h2>Your destination: {props.data.destination}</h2>
            <h2>Your dietary restrictions:</h2>
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Gluten Free: {props.data.isGlutenFree ? "Yes" : "No"}</p>
        </div>
    )
}

export default Form;