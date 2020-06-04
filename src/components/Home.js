import React from 'react';
import { Button, } from 'galio-framework'
import styled from 'styled-components'

const Container = styled.View`
height: 100%;
background-color: #fce4ec;
width: 100%;
`;

const LogoDiv = styled.View`
width: 100%;
display: flex;
align-items: center;
`;

const AppIcon = styled.Image`
width: 200px;
height: 200px;
margin-top: 70px;
`;

const LogoText = styled.Text`
font-size: 27px;
color: #e53935;
`;

const ButtonContainer = styled.View`
position: absolute;
left: 20px;
right: 20px;
bottom: 160px;
`;

const SignupButton = styled(Button)`
margin-bottom: 15px;
`;

const LoginButton = styled(Button)``;

export default function Home(props) {
    return (
        <Container>
            <LogoDiv>
                <AppIcon source={{ uri: 'https://i.pinimg.com/originals/4f/01/49/4f0149647a160a47217615866f5469c4.png' }} />
                <LogoText>Instagram</LogoText>
            </LogoDiv>

            <ButtonContainer>
                <SignupButton round uppercase color="error" onPress={() => props.navigation.navigate("signup")}>
                    Create a new account
                </SignupButton>
                <LoginButton round uppercase color="#3f51b5" onPress={() => props.navigation.navigate("login")}>
                    LogIN
                </LoginButton>
            </ButtonContainer>
        </Container>
    );
}