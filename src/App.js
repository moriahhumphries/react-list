import React, {Component} from 'react';
import './App.css';
import Checkboxes from "./Components/Checkboxes";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import FooterSection from "./Components/FooterSection";


class App extends Component {
    render() {

        return (
            <div>
                <Navbar/>
                <MainContent/>
                <div>
                    <Checkboxes/>
                </div>
                <FooterSection/>
            </div>
        );
    };
}

export default App;
