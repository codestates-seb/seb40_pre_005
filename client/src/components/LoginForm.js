import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/store';

const Container = styled.div`
  .help {
    display: flex;
    justify-content: space-around;
    width: 280px;
    font-size: 13px;
    padding: 10px;
    margin-top: 20px;
  }

  a {
    text-decoration: none;
    color: #0a95ff;
  }
`;
const LoginContainer = styled.div`
  width: 288.4px;
  height: 254.2px;
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: #babfc4 0px 5px 12px;
  margin: 25px 10px 10px 10px;
`;

const DefaultLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  line-height: 17px;

  span {
    width: 250px;
    text-align: left;
    margin: 10px;
    font-weight: 500;
    font-size: 15px;
    justify-content: flex-start;
  }
`;
const Input = styled.input`
  width: 240px;
  height: 20.5px;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #babfc4;
  border-radius: 5px;
  :focus {
    outline: 1px solid #6bbbf7;
    box-shadow: #d7e5f2 0px 0px 0px 5px;
    border: none;
  }
`;
const EmailInput = styled(Input)``;
const PasswordInput = styled(Input)`
  margin-bottom: 15px;
`;
const LoginBtn = styled.button`
  width: 240px;
  height: 37.8px;
  padding: 10.4px;
  margin: 4px 0px;
  border-radius: 5px;
  border: solid rgb(186, 191, 196);
  background-color: #4ca8ff;
  border-width: 1px;
  padding: 0.8em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 13px;
  color: #fff;

  :hover {
    cursor: pointer;
  }
`;

const LoginForm = () => {
  const { register, watch, handleSubmit } = useForm();
  const [user, setUser] = useState({
    userEmail: '',
    userPassword: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  const onValid = (data) => {
    const User = {
      userEmail: data.userEmail,
      userPassword: data.userPassword,
    };
    const url = `${process.env.REACT_APP_LOGIN}`;
    setUser(User);

    axios
      .post(url, User)
      .then((res) => {
        console.log('res', res.data.name);
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        User.userId = res.data.userId;
        User.userName = res.data.name;
        User.userAccessToken = res.data.accessToken;
        User.userRefreshToken = res.data.refreshToken;
        localStorage.setItem('user', JSON.stringify(User));
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        dispatch(loginUser(User));
        navigate('/');
      })
      .catch((err) => {
        err.response.status === 409
          ? alert('아이디와 비밀번호를 확인해주십시오.')
          : console.log(err);
      });
  };
  const helpMessage = "Don't have an account?";

  return (
    <Container>
      <LoginContainer>
        <DefaultLoginForm onSubmit={handleSubmit(onValid)}>
          <span>Email </span>
          <EmailInput
            {...register('userEmail', { required: true })}
            placeholder="Email"
          ></EmailInput>
          <span>Password </span>
          <PasswordInput
            {...register('userPassword', { required: true })}
            placeholder="Password"
            type="password"
          ></PasswordInput>
          <LoginBtn as="input" type="submit" value="Log in"></LoginBtn>
        </DefaultLoginForm>
      </LoginContainer>
      <div className="help">
        <span>{helpMessage}</span>
        <a href="/signup">Sign up</a>
      </div>
    </Container>
  );
};

export default LoginForm;
