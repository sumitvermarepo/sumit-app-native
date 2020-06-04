import React, { Component } from 'react'
import styled from 'styled-components';
import { View } from 'react-native'

const Header = styled.View`
position: absolute;
margin-top: -86px;
z-index: 999;
height: 85px;;
width: 100%;
background-color: tomato;
padding: 20px 0px 0px 20px;
`;

const UserName = styled.Text`
font-size: 18px;
margin-left: 8px;
margin-top: 10px;
color: #fff;
font-weight: bold;
`;

const UserImage = styled.Image`
width: 40px;
height: 40px;
border-radius: 50px;
margin-top: 15px;
margin-left: 10px;
`;

const UserBasicDetail = styled.View`
display: flex;
flex-direction: row;
`;

const IconImage = styled.Image`
width: 20px;
height: 20px;
margin-top: 26px;
margin-left: -5px;
`;

const UserStatus = styled.Text`
margin-left: 10px;
color: #fff;
font-size: 13px;
`;

export class ChatListHeader extends Component {

    render() {
        const { selectedUserDetail } = this.props
        const { name, image } = selectedUserDetail
        return (
            <Header>
                <UserBasicDetail>
                    <View>
                        <IconImage source={{ uri: 'https://lh3.googleusercontent.com/proxy/AzKLZS2dfWjKHOlsH7sa2PBqzMPKMsDTGtdgHNSyjpkR4h_SYUD8lNc3dmWQHm1sp9_f7s7EorjbM77H4-PCbmy1qQbKFpJc' }} />
                    </View>
                    <UserImage source={{ uri: image }} />
                    <View>
                        <UserName>{name} </UserName>
                        <UserStatus>Online</UserStatus>
                    </View>
                </UserBasicDetail>
            </Header>
        )
    }
}

export default ChatListHeader
