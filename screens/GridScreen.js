import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Dimensions, ScrollView } from 'react-native';
import store from '../src/client';
import { connect } from 'react-redux';


class GridScreen extends Component {
  static navigationOptions = {
    title: 'GridView',
  };

  componentWillMount() {
    this.setState({ 
      snaps: store.getState().snaps
    });
  }



  render() {
    return (
      <View style={{height: Dimensions.get('window').height}}>
        <ScrollView>
          <View style={styles.imageList}>
            {this.props.snaps.map(i => {
              return (
                <View style={styles.image}>
                  <Image
                    style={styles.image}
                    source={{uri: i}}
                  />
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }


}
  function mapStateToProps(state) {
    return {
      snaps: state.snaps
    }
  }



export default connect(mapStateToProps)(GridScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'yellow',  
     alignSelf: "flex-start",
     alignItems: 'center',
     justifyContent: 'center',
     marginBottom: 20
  },
  imageList: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    backgroundColor: 'black'
  }
});
