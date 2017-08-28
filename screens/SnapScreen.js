import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CameraRoll } from 'react-native';
// import { CameraView } from './src/components/CameraView';
// import { ImagePickerRoll } from './src/components/ImagePickerRoll';
import { Camera, Permissions } from 'expo';
import store from '../src/client';

export default class SnapScreen extends Component {
  state = {
    hasCameraPermission: null,
    cameraRollUri: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
  };

  snap = async() => {

  if (this.camera) {
    let result;
    await this.camera.takePictureAsync().then(data => result = data)
      .catch(err => console.log(err));
    let saveResult = await CameraRoll.saveToCameraRoll(result, 'photo');
    store.dispatch({ type: "ADD_IMG", imageUri: saveResult});
    this.setState({ cameraRollUri: saveResult });
  }
}

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={this.snap.bind(this)}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Capture!{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
