/** @format */

import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import { View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import ChatListHeader from "./ChatListHeader";
import { setUserMessage } from "../../action/message";
import { StyleSheet, FlatList } from "react-native";
import CameraPopup from "./CameraPopup";
import io from "socket.io-client";

const Container = styled.View``;

const Footer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ChatInput = styled.TextInput`
  width: 80%;
  background-color: #fff;
  margin-left: 6px;
  border-radius: 50px;
  border: 1px solid tomato;
  padding-left: 40px;
  padding-right: 53px;
  height: 50px;
`;

const ChatIconImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

const ChatIconImageDiv = styled.TouchableOpacity`
  position: absolute;
  left: 21px;
  top: 10px;
  width: 30px;
  height: 30px;
  z-index: 9;
`;

const CameraIconDiv = styled.TouchableOpacity`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 17%;
  margin-top: 3px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: tomato;
  border-radius: 50px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmitIconImage = styled.Image`
  width: 34px;
  height: 34px;
`;

const ChatListBody = styled.View`
  width: 100%;
  height: 77%;
`;

const UserText = styled.Text`
font-size: 18px;
font-weight: bold;
color: ${(props) => (!!props.check ? "black" : "white")}
background-color: ${(props) => (!!props.check ? "#ccc" : "tomato")};
padding: 8px;
border-radius: 20px;
max-width: 72%;
flex-wrap: wrap;
`;

const UserMessageView = styled.View`
  display: flex;
  margin: 5px;
  align-items: ${(props) => (!!props.check ? "flex-start" : "flex-end")};
`;

const CameraIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

let socket = '';

export class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempMessage: "",
      showCameraPopup: false,
    };
    
  }

  componentDidMount = async () => {
    socket = io("http://localhost:8999/");
    socket.on("connect", () => console.log("Connection"));
    socket.on("FromAPI", data => {
      console.log("DATA=======> ", data);
      // setResponse(data);
    });
    this.setState({ scrollToBottom: true });
    setTimeout(() => this.downButtonHandler(), 2000);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props && prevState !== this.state) {
      this.downButtonHandler();
    }
  };

  handleMessage = () => {
    const { setUserMessage } = this.props;
    const { tempMessage } = this.state;
    const tempArray = ["true", "false"];
    const randomNumber = Math.floor(Math.random() * 2);
    // console.log("ehlo", this.socket.emit("chat message", tempMessage));
    socket.emit("message", tempMessage);
    setUserMessage({ message: tempMessage, type: tempArray[randomNumber] });
    this.setState({ tempMessage: "", scrollToBottom: true });
    this.downButtonHandler();
  };

  downButtonHandler = () => {
    this.ListView_Ref.scrollToEnd({ animated: true });
  };

  render() {
    const { selectedUserDetail, userMessage } = this.props;
    const { tempMessage, showCameraPopup } = this.state;
    return (
      <Container>
        <ChatListHeader selectedUserDetail={selectedUserDetail} />
        <KeyboardAvoidingView behavior="height">
          <ChatListBody style={styles.container}>
            <FlatList
              data={userMessage}
              keyExtractor={(item, index) => index.toString()}
              ref={(ref) => {
                this.ListView_Ref = ref;
              }}
              renderItem={({ item, index }) => (
                <UserMessageView key={index} check={item.type === "true"}>
                  <UserText
                    check={item.type === "true"}
                    checkLastElement={userMessage.length - 1 === index}
                  >
                    {item.message}
                  </UserText>
                </UserMessageView>
              )}
            />
          </ChatListBody>

          <Footer>
            <ChatIconImageDiv>
              <ChatIconImage
                source={{
                  uri:
                    "https://www.pngitem.com/pimgs/m/0-9669_happy-emoji-png-high-quality-image-transparent-background.png",
                }}
              />
            </ChatIconImageDiv>
            <ChatInput
              placeholder="Type a message"
              underlineColor="white"
              multiline={true}
              value={tempMessage}
              onChangeText={(text) => this.setState({ tempMessage: text })}
            />
            {!!showCameraPopup && <CameraPopup />}

            <CameraIconDiv
              onPress={() =>
                this.setState({ showCameraPopup: !showCameraPopup })
              }
            >
              <CameraIcon
                source={{
                  uri:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Antu_folder-camera.svg/1024px-Antu_folder-camera.svg.png",
                }}
              />
            </CameraIconDiv>
            <SubmitButton onPress={() => this.handleMessage()}>
              <SubmitIconImage
                source={{
                  uri: "https://img.icons8.com/color/48/000000/filled-sent.png",
                }}
              />
            </SubmitButton>
          </Footer>
          <View style={{ height: 200 }} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
});

const mapStateToProps = (state) => ({
  selectedUserDetail: state.selectedUser.selectedUserDetail,
  userMessage: state.userMessage.userMessages,
});

const mapDispatchToProps = (dispatch) => ({
  setUserMessage: (data) => dispatch(setUserMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
