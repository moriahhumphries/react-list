import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isGlutenFree: false

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        // Can wrap string in square brackets
        type === "checkbox" ?
            this.setState({[name]: checked}) : this.setState({[name]: value})


    }

    render() {

        return (
            <div>
                <form>
                    <input type="text"
                           value={this.state.firstName}
                           name="firstName"
                           placeholder="First Name"
                           onChange={this.handleChange}/>
                    <br/>
                    <input type="text"
                           value={this.state.lastName}
                           name="lastName"
                           placeholder="Last Name"
                           onChange={this.handleChange}/>
                    <br/>
                    <input type="text"
                           value={this.state.age}
                           name="age"
                           placeholder="Age"
                           onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <label>
                        <input type="radio"
                               name="gender"
                               value="male"
                               checked={this.state.gender === "male"}
                               onChange={this.handleChange}
                        /> Male
                    </label>
                    <br/>
                    <label>
                        <input type="radio"
                               name="gender"
                               value="female"
                               checked={this.state.gender === "female"}
                               onChange={this.handleChange}
                        /> Female
                    </label>
                    <br/>
                    <br/>
                    <label>Destination: </label>
                    <select value={this.state.destination}
                            onChange={this.handleChange}
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
                           onChange={this.handleChange}
                           checked={this.state.isVegan}
                    />Vegan?

                    <input type="checkbox"
                           name="isKosher"
                           onChange={this.handleChange}
                           checked={this.state.isKosher}
                    />Kosher?

                    <input type="checkbox"
                           name="isGlutenFree"
                           onChange={this.handleChange}
                           checked={this.state.isGlutenFree}
                    />Gluten Free?
                    <br/>
                    <br/>
                    <button>Submit</button>
                </form>

                <hr/>
                <h1>Entered information: </h1>
                <h2>Your name: {this.state.firstName} {this.state.lastName}</h2>
                <h2>Your age: {this.state.age}</h2>
                <h2>Your gender: {this.state.gender}</h2>
                <h2>Your destination: {this.state.destination}</h2>
                <h2>Your dietary restrictions:</h2>
                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>Gluten Free: {this.state.isGlutenFree ? "Yes" : "No"}</p>


            </div>
        )
    }
}

export default App

// {/*<form>*/}
//                 {/*    <input type="text"*/}
//                 {/*           value={this.state.firstName}*/}
//                 {/*           name="firstName" placeholder="First Name"*/}
//                 {/*           onChange={this.handleChange}/>*/}
//                 {/*    <br/>*/}
//                 {/*    <br/>*/}
//                 {/*    <input type="text"*/}
//                 {/*           value={this.state.lastName}*/}
//                 {/*           name="lastName"*/}
//                 {/*           placeholder="First Name"*/}
//                 {/*           onChange={this.handleChange}/>*/}
//                 {/*    <br/>*/}
//                 {/*    <br/>*/}
//                 {/*    <textarea value={"Default Value"}*/}
//                 {/*              onChange={this.handleChange}/>*/}
//                 {/*    <br/>*/}
//                 {/*    <br/>*/}
//                 {/*    <label>*/}
//                 {/*        <input type="checkbox"*/}
//                 {/*               name="isFriendly"*/}
//                 {/*               checked={this.state.isFriendly}*/}
//                 {/*               onChange={this.handleChange}*/}
//                 {/*        /> Is Friendly?*/}
//                 {/*    </label>*/}
//                 {/*    <br/>*/}
//                 {/*    <br/> <label>*/}
//                 {/*    <input type="radio"*/}
//                 {/*           name="gender"*/}
//                 {/*           value="male"*/}
//                 {/*           checked={this.state.gender === "male"}*/}
//                 {/*           onChange={this.handleChange}*/}
//                 {/*    /> Male*/}
//                 {/*</label>*/}
//                 {/*    <br/>*/}
//                 {/*    <br/>*/}
//                 {/*    <label>*/}
//                 {/*        <input type="radio"*/}
//                 {/*               name="gender"*/}
//                 {/*               value="female"*/}
//                 {/*               checked={this.state.gender === "female"}*/}
//                 {/*               onChange={this.handleChange}*/}
//                 {/*        /> Female*/}
//                 {/*    </label>*/}
//                 {/*    <br/>*/}
//                 {/*    <br/>*/}
//                 {/*    <label>Favorite Color: </label>*/}
//                 {/*        <select value={this.state.favColor}*/}
//                 {/*                onChange={this.handleChange}*/}
//                 {/*                name="favColor">*/}
//                 {/*            <option value="blue">Blue</option>*/}
//                 {/*            <option value="green">Green</option>*/}
//                 {/*            <option value="red">Red</option>*/}
//                 {/*        </select>*/}
//
//                 {/*    <br />*/}
//                 {/*    <br />*/}
//
//                 {/*    <h1>{this.state.firstName} {this.state.lastName}</h1>*/}
//                 {/*    <h2>You are a {this.state.gender}</h2>*/}
//                 {/*    <h2>Your favorite color is {this.state.favColor}</h2>*/}
//                 {/*    <br />*/}
//                 {/*    <button>Submit</button>*/}
//                 {/*</form>
// constructor() {
//     super()
//     this.state = {
//         todos: todosData,
//     }
//
//     // Bind handlers
//     this.handleEvent = this.handleEvent.bind(this)
// }
//
// // Will need to bind
// handleEvent (id) {
//     console.log("Clicked", id)
//     this.setState(prevState => {
//         const updatedTodos = prevState.todos.map(todo => {
//             if (todo.id === id) {
//                 todo.completed = !todo.completed
//             }
//             return todo
//         })
//         return {
//             todos: updatedTodos
//         }
//     })
// }
//
// render() {
//
//     const allTodo = this.state.todos.map(list => <TodoList key={list.id} list={list} handleEvent={this.handleEvent}/>)
//     return (
//         <div className="main-div">
//             <div className="todo-list">
//                 {allTodo}
//             </div>
//         </div>
//     );
// };
// }

// let loginStatus;
// if (this.state.isLoggedIn === true) {
//     loginStatus = "In."
// } else {
//     loginStatus = "Out."
// }
//
// <h1>Is state important? {this.state.answer}</h1>
// <h1>{this.state.name}</h1>
// <h1>{this.state.age} years old</h1>
// <h1>You are currently logged: {loginStatus}</h1>
// const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question=
//     {joke.question} punchLine={joke.punchLine}/>)
//
// // const allProducts = productsData.map(product => <Product key={product.id} name=
// //     {product.name} price={product.price} description={product.description} />)
//
// const allProducts = productsData.map(item => <Product key={item.id} product={item}/>)
//
//                     <div className="contacts">
//                     {/*<ContactCard name="Name"*/}
//                     {/*             imgUrl="http://placekitten.com/300/300"*/}
//                     {/*             phone="555-5555"*/}
//                     {/*             email="cat@cats.com"/>*/}
//
//                     <ContactCard
//                         contact={{
//                             name: "Cat",
//                             imgUrl: "http://placekitten.com/300/300",
//                             phone: "555-5555",
//                             email: "catemail@emailrealcats.com"
//                         }}/>
//                 </div>
//                 {jokeComponents}
//                 <div>
//                     <Joke joke={{
//                         question: "Why does the cat say meow?",
//                         punchline: "It's cold meow-tside"
//                     }}/>
//                     <Joke joke={{
//                         question: "What is black and white and read all over?",
//                         punchline: "The newspaper"
//                     }}/>
//                     <Joke joke={{
//                         question: "Knock Knock?",
//                         punchline: "*steps on punchline*"
//                     }}/>
//                     <Joke joke={{
//                         question: "Knock Knock?"
//                     }}/>
//                 </div>
//             </div>
//     </div>
