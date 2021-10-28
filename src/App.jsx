import React from 'react';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import PlantasticNavbar from "components/nav/navbar/PlantasticNavbar";
import {someOtherArray} from "constants/PlantConstants";
import PlantasticContainer from "components/main/PlantasticContainer";

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      userFullName: '',
      plantName: '',
      someSelectField: '333',
      fertilizingFrequency: someOtherArray[someOtherArray.length - 1].value
    };
  }

  inputOnBlur = (event) => {
    const {currentTarget} = event;
    const {value, name} = currentTarget;
    this.setState({[name]: value.trim()});
  };

  inputOnChange = (event) => {
    const {currentTarget} = event;
    const {value, name} = currentTarget;
    this.setState({[name]: value});

  };

  delayFetch(ms, func) {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
  }

  render() {
    const {
      fertilizingFrequency,
      plantName,
      someSelectField,
      userFullName,
    } = this.state;

    return (
            <Router>
              <PlantasticNavbar
                      plantName={plantName}
                      inputOnChange={this.inputOnChange}
                      userFullName={userFullName.trim()} // .trim() wycina białe znaki z przodu oraz z tyłu stringa
              />
              <PlantasticContainer
                      delayFetch={this.delayFetch}
                      someSelectField={someSelectField}
                      fertilizingFrequency={fertilizingFrequency}
                      inputOnChange={this.inputOnChange}
                      plantName={plantName}
                      userFullName={userFullName}
                      inputOnBlur={this.inputOnBlur}
              />
            </Router>
    )
  }
}


export default App;
