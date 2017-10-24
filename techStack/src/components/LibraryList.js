import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const listData = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = listData.cloneWithRows(this.props.stateAsProp);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props);  // returns the array
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}


//  function takes global state object from in
//  redux store, maps properties off the state object to
//  provide them as props to the library list component
const mapStateToProps = state => {
  return { stateAsProp: state.libraries };
};

//  call the function connect() when connect is called it calls another
//  function, we call that function with the library list
export default connect(mapStateToProps)(LibraryList);
