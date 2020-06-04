import * as Animatable from 'react-native-animatable';
import React, { Component } from 'react'
import styled from 'styled-components'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const Container = styled(Animatable.View)`
position: absolute;
bottom: 60px;
padding: 5px;
background-color: pink;
border-radius: 10px;
right: 80px;
display: flex;
flex-direction: row;
`;

const CameraIcon = styled.Image`
width: 40px;
height: 40px;
margin-left: 10px;
`;

const GalleryIcon = styled.Image`
width: 40px;
height: 40px;
`;

const GalleryPickerDiv = styled.TouchableOpacity`

`;

const CameraPickerDiv = styled.TouchableOpacity`

`;

export class CameraPopup extends Component {

    getPermissionAsync = async () => {
        // if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        } else {
            this._pickImage()
        }
        // }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });
        console.log("your result=====>", result)
    }

    _pickCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 6],
            quality: 1
        });
        console.log("your result=====>", result)
    }

    render() {
        return (
            <Container animation="flipInY" easing="ease-in-out-cubic">
                <GalleryPickerDiv onPress={() => this.getPermissionAsync()}>
                    <GalleryIcon source={{ uri: 'https://cdn2.iconfinder.com/data/icons/everything-in-office/65/icon_Ai-09-512.png' }} />
                </GalleryPickerDiv>
                <CameraPickerDiv onPress={() => this._pickCamera()}>
                    <CameraIcon source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Antu_folder-camera.svg/1024px-Antu_folder-camera.svg.png' }} />
                </CameraPickerDiv>
            </Container>
        )
    }
}

export default CameraPopup
