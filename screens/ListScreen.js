import React, { Component } from 'react';
import { FlatList, StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import store from '../src/client';
import { connect } from 'react-redux';



class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Links',
  };

    

  componentWillMount() {

    this.setState({ snaps: store.getState().snaps});
  }

  render() {
    return (
      <View>
        <Text>
          { this.props.snaps }

        
        </Text>
      </View>
    );
  }

}
  function mapStateToProps(state) {
    return {
      snaps: state.snaps
    }
  }



export default connect(mapStateToProps)(LinksScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  }
});
 


  // testAdd = () => {
  //   console.log(store.getState().snaps);
  //   store.dispatch({ type: "ADD_IMG", imageUri: 'Hey this is working!'});
  //   console.log(store.dispatch({ type: "GET_IMGS" }));
  // }
    

  // render() {
  //   return (
  //     // <ListView 
  //     //   style={styles.container}
  //     // >
  //     <View>
  //       <TouchableOpacity onPress={this.testAdd.bind(this)}>
  //         <Text> let's see </Text>
  //       </TouchableOpacity>
  //     </View>
  //     // </ListView>
  //   );
  // }
