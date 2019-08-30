import React, {Component} from 'react';
import './App.css';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';





class App extends Component{

state={
  country: undefined,
  city: undefined,
  temperature: undefined,
  wind: undefined,
  general: undefined,
  description: undefined,
  error: undefined,
}

      getWeather = async (e) => {

        const city = e.target.elements.city.value;

        const country = e.target.elements.country.value;

        e.preventDefault()

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=57ea0d4cc7747ad668ea4b46648d638f`);

        const response = await api_call.json();

        console.log(response);

        if (city&&country){
        this.setState({
          city: response.name,
          country: response.sys.country,
          temperature: response.main.temp,
          wind: response.wind.speed,
          general: response.weather[0].main,
          description: response.weather[0].description,
          error: ""
        })}else{
          this.setState({
          error: "Please enter a location..."
          })

        }
            }

  render(){




    return(
      <div>
        <div className="wrapper">
        <div className="title-container">
      <Titles />
        </div>
        <div className="weather-container">

      <Form loadWeather={this.getWeather} />

      <Weather
        country= {this.state.country}
        city= {this.state.city}
        temperature= {this.state.temperature}
        wind= {this.state.wind}
        description= {this.state.description}
        general= {this.state.general}
        error= {this.state.error}
       />

     </div>
   </div>
    </div>
    )
  }
}

export default App
