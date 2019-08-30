import React, {Component} from 'react';

class Form extends Component {
  render(){
      return(
    <form className="form-container" onSubmit={this.props.loadWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>What's the Weather?</button>
    </form>
  )
}
}

export default Form
