import React, {Component} from 'react';
import './App.css';
import TodoList from "./Components/TodoList";
import Navbar from "./Components/Navbar";
import todosData from "./todosData";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }


    render() {
        const text = this.state.loading ? "Loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App

//
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
