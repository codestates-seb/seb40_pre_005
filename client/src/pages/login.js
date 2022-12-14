import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import stack_logo_svg from '../assets/img/stack_logo.png';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import { SocialButtons } from '../components/SocialButton';

const Wrapper = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  .social_login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social_logo {
    margin: 5px;
  }
  .stack_logo {
    width: 32px;
    height: 37px;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
    margin-bottom: 10px;
  }
`;

const LoginContainer = styled.div`
  justify-content: center;
`;
const FormContainer = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <LoginContainer>
          <div className="social_login">
            <img
              className="stack_logo"
              src={stack_logo_svg}
              alt="stack_logo"
            ></img>
          </div>
          <SocialButtons />
          <LoginForm />
        </LoginContainer>
      </Wrapper>
    </>
  );
};

export default Login;
