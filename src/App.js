import React, {Component} from 'react';
import './App.css';
import TodoList from "./Components/TodoList";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import FooterSection from "./Components/FooterSection";
import Clock from "./Components/Clock";
import ContactCard from "./Components/ContactCard";
import Joke from "./Components/Joke";


class App extends Component {
    render() {

        return (
            <div className="todo-list">
                <Navbar/>
                <MainContent/>
                <Clock/>
                <TodoList/>
                <TodoList/>
                <TodoList/>
                <TodoList/>
                <div className="contacts">
                    {/*<ContactCard name="Name"*/}
                    {/*             imgUrl="http://placekitten.com/300/300"*/}
                    {/*             phone="555-5555"*/}
                    {/*             email="cat@cats.com"/>*/}

                    <ContactCard
                        contact={{
                            name: "Cat",
                            imgUrl: "http://placekitten.com/300/300",
                            phone: "555-5555",
                            email: "catemail@emailrealcats.com"
                        }}/>
                </div>

                <div>
                    <Joke joke={{
                        question: "Why does the cat say meow?",
                        punchline: "It's cold meow-tside"
                    }}/>
                    <Joke joke={{
                        question: "What is black and white and read all over?",
                        punchline: "The newspaper"
                    }}/>
                    <Joke joke={{
                        question: "Knock Knock?",
                        punchline: "*steps on punchline*"
                    }}/>
                    <Joke joke={{
                        question: "Knock Knock?"
                    }}/>
                </div>
            </div>
        );
    };
}

export default App;
