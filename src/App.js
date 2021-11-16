import React, {Component} from 'react';
import Header from "./Component/Header";
import Users from "./Component/Users";
import FormFill from "./Component/FormFill";
import './App.css';

class App extends Component {
    render() {
      return (
          <div className="App">
              <Header />
              <Users />
            <FormFill />
          </div>
      )
    }
}


export default App;
