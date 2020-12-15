import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { CgArrowLongRight } from 'react-icons/cg';

import { HOME } from '../constants/routes';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    background-color: #F7F7F7;

    &>div {
        padding: 0 35%;
        width: 30%;

        @media(max-width: 1200px) {
            padding: 0 25%;
            width: 50%;
        }

        @media(max-width: 800px) {
            padding: 0 15%;
            width: 70%;
        }

        @media(max-width: 600px) {
            padding: 0 10%;
            width: 80%;
        }
    }
    
`;

const Main = styled.div`
    padding: 10% 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const FormContainer = styled.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
`;

const Meeto = styled.span`
    cursor: pointer;
    font-family: 'Work Sans', sans-serif;
    color: #20252D;
    font-weight: 700;
    font-size: 1.7em;
    display: flex;
    justify-content: center;
    margin-bottom: 10%;

    span span {
        color: #1E3CD1;
    }
`;

const Connection = styled.div`
    color: #20252D;
    font-weight: 700;
    font-size: 1.9em;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1em;

    span span {
        color: #1E3CD1;
    }

    .dash {
        margin-top: 15px;
        height: 5px;
        width: 1em;
        background-color: #20252D;
    }
`;

const Form = styled.div`
    margin-top: 2em;
    height: 70%;

    .form-item {
        display: flex;
        flex-direction: column;

        span {
            font-weight: 800;
            font-family: 'Montserrat', sans-serif;
            font-size: 1em;
            color: #20252D;
            margin-bottom: 10px;
        }

        input {
            height: 3em;
            border: 1px solid #C6C6C6;
            border-radius: 10px;
            padding: 0 1.5em;
            font-size: 1em;
        }

        margin-bottom: 15px;
    }

    .forgot-password {
        display: flex;
        justify-content: flex-end;
        span {
            color: #20252D;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }

    .button {
        border: none;
        width: 100%;
        font-size: 1em;
        margin-top: 3em;
        background: #1E3CD1 0% 0% no-repeat padding-box;
        border-radius: 11px;
        padding: 1.4em;
        display: flex;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-weight: 800;
    }

    .signup {
        margin-top: 2em;
        display: flex;
        justify-content: space-around;
        
        .dont {
            color: #20252D;
            font-weight: 400;
            font-family: 'Montserrat', sans-serif;
        }
        
        div {
            display: flex;
            align-items: center;

            .arrow {
                color: #1E3CD1;
                width: 2em;
            }

            span {
                color: #1E3CD1;
                font-weight: 600;
            }
        }
    }
`;

const TopRightCircle = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
    border: 10px solid #1E3CD1;
    border-radius: 50%;
    width: 20vw;
    height: 20vw;
`;

const BottomLeftCircle = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    transform: translate(-50%, 50%);
    border: 10px solid #1E3CD1;
    border-radius: 50%;
    width: 20vw;
    height: 20vw;
`;

const Login = ({ history }) => {
    return (
        <Container>
            <div>
                <TopRightCircle />
                <BottomLeftCircle />
                <Main>
                    <Meeto onClick={() => history.push(HOME)}>
                        <span>meet <span>o</span></span>
                    </Meeto>
                    <FormContainer>
                        <Connection>
                            <span>Connexi<span>o</span>n</span>
                            <div className="dash"></div>
                        </Connection>
                        <Form>
                            <div className="form-item">
                                <span>E-mail</span>
                                <input />
                            </div>
                            <div className="form-item">
                                <span>Password</span>
                                <input />
                            </div>
                            <div className="forgot-password">
                                <span>Forgot you password?</span>
                            </div>
                            <button className="button">
                                <span>CONNEXION</span>
                            </button>
                            <div className="signup">
                                <span className="dont">Don't have an account</span>
                                <div>
                                    <CgArrowLongRight className="arrow" />
                                    <span>Sign up</span>
                                </div>
                            </div>
                        </Form>
                    </FormContainer>
                </Main>
            </div>
        </Container>
    );
}

export default withRouter(Login);