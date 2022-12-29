import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import Axios from 'axios';
import * as React from 'react';
import './style.scss';
import { Button, Col, Form, Image, InputGroup, Row } from 'react-bootstrap';

function AccountPage() {
    const [inforUser, setInforUser] = React.useState({});

    const user = useSelector(selectUser);
    //console.log(user.userId)
    React.useEffect(() => {
        Axios.get(`http://localhost:2345/api/user/info/${user.userId}`)
            .then((res) => {
                setInforUser(res.data);

                console.log(inforUser.avatar);
            })
            .catch((err) => console.log(err));
    }, []);

    const [showSetting, setShowSetting] = React.useState(false);
    const [isEditingPro5, setIsEditingPro5] = React.useState(false);

    /* Info */
    const [username, setUsername] = React.useState(null);
    const [phoneNumber, setPhoneNumber] = React.useState(null);
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [avatar, setAvatar] = React.useState(null);

    const clickRef = React.useRef(null);
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (clickRef.current && !clickRef.current.contains(event.target)) {
                setShowSetting(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSetting]);
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (username === '' || phoneNumber === '') {
            setValidated(false);
        }
        setValidated(true);
    };

    return (
        <div className="container text-center position-relative">
            <div className="position-absolute end-0  top-0">
                <div className="dropdown" ref={clickRef}>
                    <button
                        className={'btn btn-info w-100 text-bg-dark' + (showSetting ? ' active' : '')}
                        onClick={() => {
                            setShowSetting(!showSetting);
                            if (isEditingPro5) {
                                setIsEditingPro5(false);
                                // clear form
                                setUsername(null);
                                setPhoneNumber(null);
                            }
                        }}
                    >
                        {showSetting ? (
                            isEditingPro5 ? (
                                <i className="fas fa-times"></i>
                            ) : (
                                <i className="fas fa-cog"></i>
                            )
                        ) : isEditingPro5 ? (
                            <i className="fas fa-times"></i>
                        ) : (
                            <i className="fas fa-cog"></i>
                        )}
                    </button>
                    <div>
                        {showSetting && !isEditingPro5 && (
                            <div className="setting">
                                <div
                                    className="setting_item"
                                    onClick={() => {
                                        setShowSetting(false);
                                        setIsEditingPro5(true);
                                    }}
                                >
                                    <div>Edit profile</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <br />
            <div className="row justify-content-center h-100">
                <h1>PROFILE PAGE</h1>
            </div>

            {/* <img src={inforUser.avatar} alt="#" style={{width:'30%'}}/> */}
            {/* <h1>{inforUser.email}</h1>
            <img src={inforUser.avatar} alt="harry potter" style={{ width: '400px', }}/> */}
            <br />
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="wrapper">
                        <div className="row no-gutters">
                            {!isEditingPro5 ? (
                                <div className="user-wrap w-100 p-lg-5 p-4 rounded-5">
                                    <img className="avar rounded-circle" src={inforUser.avatar} alt="#" />
                                    <h3>{inforUser.username}</h3>
                                    <p className="title">
                                        {inforUser.firstName} {inforUser.lastName}
                                    </p>
                                    <p className="mail">{inforUser.email}</p>
                                    <p className="phone">{inforUser.phoneNumber}</p>
                                </div>
                            ) : (
                                <div className=" w-100 p-lg-5 p-4 rounded-5">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="First name"
                                                    defaultValue={inforUser.username || ''}
                                                    value={username}
                                                    onChange={(e) => {
                                                        setUsername(e.target.value);
                                                    }}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Username is required
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                <Form.Label>Frist name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="First name"
                                                    defaultValue={inforUser.firstName || ''}
                                                    value={firstName}
                                                    onChange={(e) => {
                                                        setFirstName(e.target.value);
                                                    }}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Firstname is required
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Last name"
                                                    defaultValue={inforUser.lastName || ''}
                                                    value={lastName}
                                                    onChange={(e) => {
                                                        setLastName(e.target.value);
                                                    }}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Firstname is required
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="6" controlId="validationCustom05">
                                                <Form.Label>Phone number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Phone number"
                                                    required
                                                    defaultValue={inforUser.phoneNumber || ''}
                                                    onChange={(e) => {
                                                        setPhoneNumber(e.target.value);
                                                    }}
                                                    value={phoneNumber}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Phone number is required
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Email"
                                                    required
                                                    defaultValue={inforUser.email || ''}
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                    }}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Email is required
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                                <Form.Label>Avatar</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Avatar link"
                                                    defaultValue={inforUser.avatar || ''}
                                                    required
                                                    onChange={(e) => {
                                                        setAvatar(e.target.value);
                                                    }}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Avatar link is required
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Image
                                                src={avatar && avatar?.length > 0 ? avatar : inforUser.avatar}
                                                alt="harry potter"
                                                style={{ width: '400px' }}
                                            />
                                        </Row>
                                        <Button className="btn btn-info" type="submit">
                                            <div className="btn-text">Update</div>
                                        </Button>
                                    </Form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
