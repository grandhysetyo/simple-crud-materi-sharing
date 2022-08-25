import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0      
    }
    this.handleClick = this.handleClick.bind(this)
  }

  //Event Handling
  handleClick(){
    this.setState({
      count: this.state.count + 1
    })
  }

  //Lifecycle
  componentDidMount() {
    console.log('Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Did Update');
  }
  
  render() {
    console.log('state',this.state.count);    
    return (
      <div>
        <p>Title: {this.props.title}</p>
        <p>Nilai State: {this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
export default ClassComponent;