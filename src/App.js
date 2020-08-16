import React, {Component} from 'react';
import './App.css';
import MyApp from './Components/MyApp';
import MyInfo from "./Components/MyInfo";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import FooterSection from "./Components/FooterSection";

class App extends Component {
    render() {

        return (
            <div>
                <Navbar />
                <MainContent />
                <FooterSection />
            </div>
        );
    };
}

export default App;
