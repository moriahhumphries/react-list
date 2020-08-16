import React, {Component} from 'react';
import './App.css';
import MyApp from './Components/MyApp';
import MyInfo from "./Components/MyInfo";

class App extends Component {
    render() {

        return (
            <div>
                <MyApp/>
                <MyInfo/>
            </div>
        );
    };
}

export default App;
