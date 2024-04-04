import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

function App() {
  function handleSave() {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        // let file = dataURLtoFile(
        //   'data:image/jpg;base64,' + asset.base64, //if your bas64 include <data:image/png;base64,> rmove this from parameter
        //   'test.jpg',
        // );
        const body = new FormData();
        const t = {
          uri: 'file:///' + asset?.uri?.split('file:/').join(''),
          name: 'Sign.jpg',
          type: 'image/jpeg',
        };
        // console.log(t);
        body.append('files', t);
        body.append('randomString', 'jhgfghjkkjhgf');
        fetch('http://172.16.10.193:5072/FileUpload/upload', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: body,
        })
          .then(res => res.json())
          .then(data => console.log('dsdfgh', data))
          .catch(err => console.log('err', err));
      }
    });
  }
  return (
    <View>
      <TouchableHighlight onPress={handleSave}>
        <Text>Press</Text>
      </TouchableHighlight>
    </View>
  );
}

export default App;
