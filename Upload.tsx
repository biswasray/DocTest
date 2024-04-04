import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F4F7FF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f7ff',
    paddingVertical: 10,
  },
  headerText: {
    fontFamily: 'Libre Franklin',
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: '2%',
    marginTop: '2%',

    alignSelf: 'center',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    gap: 40,
    paddingBottom: '4%',
  },
  button1: {
    backgroundColor: '#f5f7ff',
    fontSize: 16,
    borderRadius: 20,
    width: '40%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4461a6',
    shadowColor: 'transparent',
  },
  button2: {
    backgroundColor: 'red',
    fontSize: 16,
    borderRadius: 20,
    width: '40%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'transparent',
    shadowColor: 'transparent',
  },
  buttonText1: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Libre Franklin',
    fontWeight: '500',
    height: '100%',
  },
  buttonText2: {
    color: '#f5f7ff',
    fontSize: 16,
    fontFamily: 'Libre Franklin',
    fontWeight: '500',
    height: '100%',
  },
  noteText: {
    color: 'blue',
    fontSize: 14,
    fontFamily: 'Libre Franklin',
    textAlign: 'center',
    marginVertical: 2,
    fontWeight: '500',
  },
  noteContainer: {
    width: '100%',
    marginVertical: '1%',
  },
  imageUploadArea: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#ebeffa',
    position: 'relative',
    marginRight: '8%',
  },
  cameraIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  topRightCornerPhoto: {
    position: 'absolute',
    top: '5%',
    right: '5%',
    height: '24%',
    width: '24%',
    borderRadius: 28,
    backgroundColor: '#7d7d7d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRightCornerSignature: {
    position: 'absolute',
    top: '15%',
    right: '5%',
    height: '70%',
    width: '21%',
    borderRadius: 28,
    backgroundColor: '#7d7d7d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  signatureUploadArea: {
    width: '55%',
    aspectRatio: 140 / 42,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#ebeffa',
    position: 'relative',
  },
  signaturePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  dimensionsText: {
    fontSize: 16,
    color: '#000000',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginVertical: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#8a8888',
    marginVertical: '2%',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    alignItems: 'center',
    width: '100%',
  },
  saveAndNextButton: {
    backgroundColor: '#8a8888',
    fontSize: 16,
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'transparent',
    shadowColor: 'transparent',
  },
  back: {
    backgroundColor: '#f5f7ff',
    fontSize: 16,
    borderRadius: 10,
    width: '28%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4461a6',
    shadowColor: 'transparent',
  },
  navButtonText1: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'Libre Franklin',
    fontWeight: '500',
    height: '100%',
  },
  navButtonText2: {
    fontFamily: 'Libre Franklin',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    height: '100%',
    marginHorizontal: 5,
  },
  imageWidthText: {
    fontFamily: 'Libre Franklin',
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    width: '80%',
    marginTop: 5,
  },
  imageHeightText: {
    fontFamily: 'Libre Franklin',
    fontSize: 16,
    color: '#000000',
    position: 'absolute',
    left: '1%',
    top: '60%',
    transform: [{translateX: -50}, {translateY: -50}, {rotate: '-90deg'}],
  },
  signatureWidthText: {
    fontFamily: 'Libre Franklin',
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    width: '60%',
    marginTop: 5,
  },
  signatureHeightText: {
    fontFamily: 'Libre Franklin',
    fontSize: 16,
    color: '#000000',
    position: 'absolute',
    left: '2%',
    top: '72%',
    transform: [{translateX: -50}, {translateY: -50}, {rotate: '-90deg'}],
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: '1%',
  },
  signatureContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20,
  },
});

interface ImageUploadState {
  photoUri?: string;
  signatureUri?: string;
}

const UploadProfileDocs: React.FC = () => {
  const [imageUpload, setImageUpload] = useState<ImageUploadState>({});
  const [modalVisible, setModalVisible] = useState({
    visible: false,
    isInstructionsModal: false,
  });

  const handleAPIUpload = (imageUri: string, type: 'photo' | 'signature') => {
    const advertisementId = 6;
    const formData = new FormData();
    const formFileKey = type === 'photo' ? 'PhotoFormFile' : 'SignFormFile';
    formData.append(formFileKey, {
      uri: imageUri,
      name: `${type}.jpg`,
      type: 'image/jpeg',
    });
    console.log('jhgf', {
      uri: imageUri,
      name: `${type}.jpg`,
      type: 'image/jpeg',
    });
    formData.append('AdvertisementId', advertisementId);
    // dispatch(ProfileUploadDocFetching(formData));
  };

  const handleUploadImage = (type: 'photo' | 'signature') => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        if (asset.fileSize !== undefined && asset.uri) {
          //   if (!isValidImageSize(asset.fileSize)) {
          //     Alert.alert('Error', 'Image size should be between 30KB to 70KB.');
          //     return;
          //   }
          if (asset.type !== 'image/jpeg' && asset.type !== 'image/jpg') {
            Alert.alert('Error', 'Only JPEG images are supported.');
            return;
          }
          handleAPIUpload(asset.uri, type);
          setImageUpload(prevState => ({
            ...prevState,
            [`${type}Uri`]: asset.uri,
          }));
        } else {
          console.log('File size is undefined or URI is missing');
        }
      }
    });
  };

  //   const handleModalComponent = (isInstructionsModal: boolean) => {
  //     if (isInstructionsModal) {
  //       return <Specification />;
  //     } else {
  //       return <SamplePhoto />;
  //     }
  //   };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.buttonGroup}>
          <AppActionButton
            buttonText="Sample Photo"
            style={styles.button1}
            onPress={() => {
              setModalVisible({
                visible: true,
                isInstructionsModal: false,
              });
            }}
            textStyle={styles.buttonText1}
          />
          <AppActionButton
            buttonText="Specifications"
            style={styles.button2}
            onPress={() => {
              setModalVisible({visible: true, isInstructionsModal: true});
            }}
            textStyle={styles.buttonText2}
          />
        </View>
        <Text style={styles.headerText}>Upload Profile Image</Text>
        <View style={styles.divider} />
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>
            Note*: Max image size should be between 30KB to 70KB.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageUploadArea}>
            {imageUpload.photoUri ? (
              <>
                <Image
                  source={{uri: imageUpload.photoUri}}
                  style={styles.imagePreview}
                />
                <TouchableOpacity
                  style={styles.topRightCornerPhoto}
                  onPress={() => handleUploadImage('photo')}>
                  <AppIcon
                    family={'FontAwesome'}
                    size={20}
                    name={'camera'}
                    color={BaseColor.white}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.topRightCornerPhoto}
                onPress={() => handleUploadImage('photo')}>
                <AppIcon
                  family={'FontAwesome'}
                  size={20}
                  name={'camera'}
                  color={BaseColor.white}
                />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.imageWidthText}>240px</Text>
          <Text style={styles.imageHeightText}>320px</Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.headerText}>Upload Signature</Text>
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>
            Note*: Max image size should be between 30KB to 70KB.
          </Text>
        </View>
        <View style={styles.signatureContainer}>
          <View style={styles.signatureUploadArea}>
            {imageUpload.signatureUri ? (
              <>
                <Image
                  source={{uri: imageUpload.signatureUri}}
                  style={styles.signaturePreview}
                />
                <TouchableOpacity
                  style={styles.topRightCornerSignature}
                  onPress={() => handleUploadImage('signature')}>
                  <AppIcon
                    family={'FontAwesome'}
                    size={20}
                    name={'camera'}
                    color={BaseColor.white}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.topRightCornerSignature}
                onPress={() => handleUploadImage('signature')}>
                <AppIcon
                  family={'FontAwesome'}
                  size={20}
                  name={'camera'}
                  color={BaseColor.white}
                />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.signatureWidthText}>140px</Text>
          <Text style={styles.signatureHeightText}>60px</Text>
        </View>
        <View style={styles.navigation}>
          <AppActionButton
            buttonText={'Save & Next'}
            style={styles.saveAndNextButton}
            onPress={() => {}}
            textStyle={styles.navButtonText2}
            rightIcon={'arrow-right'}
            iconColor={ThemeColor.white}
            iconFamily={IconFamily.Feather}
          />
        </View>
      </View>

      <AppModal
        isVisible={modalVisible.visible}
        children={handleModalComponent(modalVisible.isInstructionsModal)}
        closeModal={() =>
          setModalVisible({visible: false, isInstructionsModal: false})
        }
      />
    </View>
  );
};

export default UploadProfileDocs;
