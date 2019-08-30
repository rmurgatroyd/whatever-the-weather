import React, {Component} from 'react';

class Weather extends Component {


render(){
  return(
    <div className="weather-comp">

      {this.props.country && this.props.city && <h2>{this.props.city}, {this.props.country}</h2>}
      <div className="weather-details">
    <div className="weather-visual">
      {this.props.general && <img className="weather-image" src={require('./img/' + this.props.general.toLowerCase() + '.png')} alt={this.props.general} />}
    </div>
    <div className="weather-writing">
      {this.props.temperature && <p className="weather-title">Temperature: {this.props.temperature}&deg;C</p>}
      {this.props.wind && <p className="weather-title">Wind speed: {this.props.wind}m/s</p>}
      {this.props.description && <p className="weather-title">Conditions: {this.props.description}</p>}
    </div>
</div>
      {this.props.error && <p className="weather-title">{this.props.error}</p>}
    </div>
  )
}
}
export default Weather
