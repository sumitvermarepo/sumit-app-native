import React, { Component } from 'react'
import styled from 'styled-components'

import { Input, Button } from 'galio-framework';

const Container = styled.View`
padding: 10px;
`;

const UserLogoDiv = styled.View`
display: flex;
align-items: center;
margin-top: 30px;
margin-bottom: 50px;
`;

const SubmitButton = styled.View`
display: flex;
align-items: center;
margin-top: 10px;
`;

const CreateAccount = styled.Text`
text-align: center;
font-size: 18px;
margin-top: 7px;
text-decoration: underline;
`;

export class Login extends Component {

    render() {
        return (
            <Container>
                <UserLogoDiv>
                    <Button onlyIcon icon="user" iconFamily="antdesign" iconSize={110} color="tomato" iconColor="#fff" style={{ width: 130, height: 130 }} />
                </UserLogoDiv>
                <Input
                    color='black'
                    style={{ borderColor: 'tomato' }}
                    placeholder="Username."
                    right
                    rounded
                    icon="user"
                    family="antdesign"
                    iconSize={20}
                    iconColor="tomato"
                />
                <Input
                    color='black'
                    style={{ borderColor: 'tomato' }}
                    placeholder="Password."
                    right
                    rounded
                    password
                    icon="eye"
                    family="antdesign"
                    iconSize={20}
                    iconColor="tomato"
                />
                <SubmitButton>
                    <Button round uppercase color="error" onPress={() => this.props.navigation.navigate("friendlist")}>Login</Button>
                </SubmitButton>
                <CreateAccount onPress={() => this.props.navigation.navigate("signup")}>Create a new account?</CreateAccount>
            </Container>
        )
    }
}

export default Login
