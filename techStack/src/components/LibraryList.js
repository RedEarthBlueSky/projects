import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);  // returns the array
    return;
  }
}


//  function takes global state object, the application state from inside
//  redux store, map it and take some properties off the state object and
//  provide them as props to the library list component

const mapStateToProps = state => {
  return { stateDataAsProp: state.libraries };
};

//  call the function connect() when connect is called it calls another
//  function, we call that function with the library list
export default connect(mapStateToProps)(LibraryList);
