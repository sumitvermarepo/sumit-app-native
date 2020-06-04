import React, { Component } from 'react'
import styled from 'styled-components'
import { Input, Button } from 'galio-framework';
import { connect } from 'react-redux'
import { sendUserDataForRegister } from '../../action/signUp';

const Container = styled.View`
padding: 10px;
height: 100%;
background-color: white;
`;

const NameSection1 = styled.View`
display: flex;
flex-direction: row;
`;

const FirstName = styled(Input)`
width: 94%;
`;

const LastName = styled(Input)`
width: 94%;
background-color: #fff;
`;

const PhoneNumber = styled(Input)``;

const Heading = styled.Image`
width: 100%;
height: 250px;
margin-top: -90px;
`;

const UserName = styled(Input)``;

const Email = styled(Input)``;

const Password = styled(Input)``;

const SubmitButton = styled(Button)``;

const SubmitDiv = styled.View`
margin-top: 10px;
display: flex;
align-items: center;
`;

const CreateAccount = styled.Text`
text-align: center;
font-size: 18px;
margin-top: 7px;
text-decoration: underline;
`;

export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            phoneNumber: '',
            error: undefined
        }
    }

    handleValidationForm = () => {
        const { firstName, lastName, email, userName, password, phoneNumber } = this.state

        var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;

        if (firstName === '' || undefined) return this.setState({ error: "please enter first name" })
        if (email === '' || !re.test(email)) return this.setState({ error: "Invalid Email address" })
        if (phoneNumber === '' || phoneNumber.length > 10 || phoneNumber.length < 10) return this.setState({ error: "phone number must be 10 character" })
        if (password === '') return this.setState({ error: "password not be null" })
        if (userName === '') return this.setState({ error: 'username not be null' })
        return this.setState({ error: undefined })
    }

    handleSignUpForm = async () => {
        const { error, firstName, lastName, email, userName, password, phoneNumber } = this.state
        const { sendUserDataForRegister } = this.props
        // this.handleValidationForm()

            await sendUserDataForRegister({
                firstName,
                lastName,
                email,
                userName,
                password,
                phoneNumber
            })
    }

    render() {
        return (
            <Container>
                <Heading source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYhssIxjS5hzWS3DUyx5GbUBhemE1GC3wpta7yN2YwbcSukHpP&usqp=CAU' }} />
                <NameSection1>
                    <FirstName
                        color='black'
                        style={{ borderColor: 'tomato' }}
                        placeholder="First Name"
                        right
                        rounded
                        family="antdesign"
                        color="#9c27b0"
                        onChangeText={value => this.setState({ firstName: value })}
                    />
                    <LastName
                        color='black'
                        style={{ borderColor: 'tomato' }}
                        placeholder="Last Name"
                        right
                        rounded
                        family="antdesign"
                        color="#9c27b0"
                        onChangeText={value => this.setState({ lastName: value })}
                    />
                </NameSection1>
                <Email
                    color='black'
                    style={{ borderColor: 'tomato' }}
                    placeholder="Email address"
                    icon="mail"
                    right
                    rounded
                    family="antdesign"
                    iconSize={22}
                    iconColor="tomato"
                    color="#9c27b0"
                    onChangeText={value => this.setState({ email: value })}
                />
                <UserName
                    color='black'
                    style={{ borderColor: 'tomato' }}
                    placeholder="Username"
                    icon="user"
                    right
                    rounded
                    family="antdesign"
                    iconSize={22}
                    iconColor="tomato"
                    color="#9c27b0"
                    onChangeText={value => this.setState({ userName: value })}
                />
                <Password
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
                    color="#9c27b0"
                    onChangeText={value => this.setState({ password: value })}
                />
                <PhoneNumber
                    color='black'
                    style={{ borderColor: 'tomato' }}
                    placeholder="Phone-Number"
                    icon="phone"
                    right
                    rounded
                    family="antdesign"
                    iconSize={22}
                    iconColor="tomato"
                    type="decimal-pad"
                    color="#9c27b0"
                    onChangeText={value => this.setState({ phoneNumber: value })}
                />
                <SubmitDiv>
                    <SubmitButton
                        round
                        uppercase
                        icon="users"
                        color="error"
                        onPress={() => this.handleSignUpForm()}
                    >
                        Register
                    </SubmitButton>
                </SubmitDiv>
                <CreateAccount onPress={() => this.props.navigation.navigate("login")}>Log in to Existing Account</CreateAccount>
            </Container>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    sendUserDataForRegister: signUpDetail => dispatch(sendUserDataForRegister(signUpDetail))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
