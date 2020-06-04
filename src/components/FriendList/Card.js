import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components'


const Container = styled.View`
display: flex;
flex-direction: row;
margin-bottom: 15px;
`;

const ProfileImage = styled.Image`
width: 55px;
height: 55px;
border-radius: 50px;
`;

const UserBasicDetails = styled.TouchableOpacity`
margin-left: 10px;
display: flex;
justify-content: center;
width: 80%;
padding-right: 10px;
padding-bottom: 10px;
`;

const UserName = styled.Text`
font-size: 18px;
font-weight: bold;
`;

const Message = styled.Text`
font-size: 16px;
color: grey;
font-weight: bold;
`;


export default function Card(props) {


    const { image, message, name, setSelectedUserDetail } = props
    return (
        <Container>
            <TouchableOpacity onPress={() => props.showModal()}>
                <ProfileImage source={{ uri: image }} />
            </TouchableOpacity>
            <UserBasicDetails style={styles.container} onPress={() => {
                setSelectedUserDetail()
                props.navigation.navigate("chatList")
            }} >
                <UserName >{name} </UserName>
                <Message>{message}</Message>
            </UserBasicDetails>
        </Container >
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'tomato',
        borderBottomWidth: 0.5,
    },
});

