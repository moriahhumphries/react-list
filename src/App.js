import React, {Component} from 'react';
import './App.css';
import TodoList from "./Components/TodoList";
import Navbar from "./Components/Navbar";
import todosData from "./todosData";


class App extends Component {
    // built in method, initializes values, requires call to Super
    constructor() {
        super()
        this.state = {
            answer: "Yes",
            name: "Moriah",
            age: 32,
            isLoggedIn: true
        }

    }

    render() {

        const allTodo = todosData.map(item => <TodoList key={item.id} list={item}/>)
        let loginStatus;
        if (this.state.isLoggedIn === true) {
            loginStatus = "In."
        } else {
            loginStatus = "Out."
        }

        return (
            <div className="main-div">
                <div className="todo-list">
                    <h1>Is state important? {this.state.answer}</h1>
                    <h1>{this.state.name}</h1>
                    <h1>{this.state.age} years old</h1>
                    <h1>You are currently logged: {loginStatus}</h1>
                    {allTodo}
                </div>
            </div>

        );
    };
}


export default App;

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
