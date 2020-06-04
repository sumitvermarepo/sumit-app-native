import * as Animatable from 'react-native-animatable';
import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setUserDetail } from '../../action/users';
import { userData } from '../../constant';
import Card from './Card';
import { setSelectedUserDetailAction } from '../../action/selectedUser';

const Container = styled.View`
padding: 10px;
`;

const ModalBody = styled(Animatable.View)`
width: 60%;
height: 250px;
background-color: #ccc;
position: absolute;
margin-left: 50px;
margin-top: 20px;
z-index: 999;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`;

const ModalImage = styled.Image`
width: 100%;
height: 250px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`;

const ImageName = styled.Text`
position: absolute;
z-index: 99999;
margin-left: 10px;
font-size: 20px;
color: #fff;
font-weight: bold;
`;

const ModalShadow = styled.TouchableOpacity`
width: 120%;
height: 160%;
background: rgba(70, 60, 49, 0.4);
position: absolute;
z-index: 9;
`;

export class FriendList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showmadal: false,
            imageIndex: 1,
            imageName: '',
        }
    }
    componentDidMount = () => {
        const { setUserData } = this.props
        setUserData(userData)
    }

    hideModal = (e) => {
        e.stopPropagation()
        this.setState({ showmadal: false })
    }
    showModal = (index, name) => {
        this.setState({ showmadal: true, imageIndex: index, imageName: name })
    }

    render() {
        const { userDetail, setSelectedUserDetail } = this.props
        const { showmadal, imageIndex, imageName } = this.state
        return (
            <Container>
                {!!showmadal && userDetail &&
                    <ModalShadow onPress={(e) => this.hideModal(e)} >
                        <ModalBody animation="flipInY"  >
                            <ImageName>{imageName} </ImageName>
                            <ModalImage source={{ uri: userDetail[imageIndex].image }} />
                        </ModalBody>
                    </ModalShadow>
                }
                {!!userDetail && userDetail.map((detail, index) => {
                    return <Card
                        {...this.props}
                        key={index}
                        image={detail.image}
                        name={detail.name}
                        message={detail.message}
                        showModal={() => this.showModal(index, detail.name)}
                        setSelectedUserDetail={data => setSelectedUserDetail({ name: detail.name, image: detail.image, index })}
                    />
                })
                }
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    userDetail: state.users.userDetails
})

const mapDispatchToProps = dispatch => ({
    setUserData: data => dispatch(setUserDetail(data)),
    setSelectedUserDetail: data => dispatch(setSelectedUserDetailAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
