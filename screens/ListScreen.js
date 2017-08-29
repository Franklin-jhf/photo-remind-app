import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Dimensions, ScrollView } from 'react-native';
import store from '../src/client';
import { connect } from 'react-redux';
// const { width } = Dimensions.get('window');

// const calcTileDimensions = (deviceWidth, tpr) => {
//   const margin = deviceWidth / (tpr * 10);
//   const size = (deviceWidth - margin * (tpr * 2)) / tpr;
//   return { size, margin };
// }

// const Item = ({size, margin, img}) => {
//   <View style={[styles.item, {width: size, height: size, marginHorizontal: margin}]}>
//     <Image 
//       style={styles.image}
//       source={{uri: img}}
//     />
//   </View>
// };

class ListScreen extends Component {
  static navigationOptions = {
    title: 'Links',
  };

  componentWillMount() {
    this.setState({ 
      snaps: store.getState().snaps
    });
  }



  render() {
    return (
      <View>
        <Text>
          {this.props.snaps}
          hi 
        </Text>
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
    )
  }


  // render() {
  //   return (
  //     <ScrollView style={styles.scrollContainer}>
  //       <View style={styles.container}>
  //         {this.props.snaps.map(i => {
  //           <View style={styles.box}>
  //             <Image
  //               style={styles.image}
  //               source={i}
  //             />
  //             <Text>
  //               {this.props.snaps}
  //             </Text>
  //           </View>
  //         })}
  //       </View>
  //     </ScrollView>
  //   );
  // }


  // render() {
  //   const tileDimensions = calcTileDimensions(width, 2);
  //   const tiles = { this.props.snaps }
  //   return (
  //     <View style={styles.imageList}>
  //       {tiles.map(i => Item({...tileDimensions, img: i}))}
  //       <Image 
  //         style={styles.image}
  //         source={tiles[1]}
  //       />
  //     </View>
  //   );
  // }

}
  function mapStateToProps(state) {
    return {
      snaps: state.snaps
    }
  }



export default connect(mapStateToProps)(ListScreen);


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
    flexWrap: 'wrap',
    marginTop: 30
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  }
});
 
  // render() {
  //   const tileDimensions = calcTileDimensions(width, 2);
  //   const tiles = { this.props.snaps }
  //   return (
  //     <View>
  //       <Text>
  //         { this.props.snaps }
  //       </Text>
  //       <Image
  //         style={styles.image}
  //         source={{uri: this.props.link}}
  //       />
  //     </View>
  //   );
  // }


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
