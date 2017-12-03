import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

  //this.onInputChange = this.onInputChange.bind(this); //on peut mettre ça ici ou bien appeler {this.onInputChange.bind(this)}
  this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    //console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.term);
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render() {
    return(
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
          placeholder="get a five day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
          />
          <span className="input-group-btn">
            <button
            type="submit"
            className="btn btn-secondary">Submit</button>
          </span>
        </form>
      )
  }
}

//pour lier les actions à ce container
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch); // ainsi l'action fetchWeather est envoyée aux reducers
}

export default connect(null, mapDispatchToProps)(SearchBar); //on a donc maintenant acces à this.props.fetchWeather
