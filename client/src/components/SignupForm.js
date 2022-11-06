import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SingupFormContainer = styled.div`
  width: 300.4px;
  height: 730.2px;
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: #babfc4 0px 5px 12px;
  margin: 25px 10px 30px 10px;

  a {
    text-decoration: none;
    color: #0a95ff;
  }
`;
const DefaultSignupForm = styled.form`
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

  .password_valid {
    font-weight: 300;
    font-size: 12px;
    margin-top: 0px;
  }

  .error {
    color: red;
  }

  .robot_input {
    margin: 5px;
  }
  .check_input {
    margin: 15px 5px 5px 5px;
    height: 100%;
  }

  .description {
    font-size: 11px;
    display: flex;
    justify-content: center;
    width: 260px;
  }

  .form_footer {
    font-size: 12px;
    font-weight: 300;
  }
`;

const Input = styled.input`
  width: 240px;
  height: 20.5px;
  display: block;
  margin: 3px;
  padding: 10px;
  border: 1px solid #babfc4;
  border-radius: 5px;
  :focus {
    outline: 1px solid #6bbbf7;
    box-shadow: #d7e5f2 0px 0px 0px 5px;
    border: none;
  }
`;
const NameInput = styled(Input)``;
const EmailInput = styled(Input)``;
const PasswordInput = styled(Input)`
  margin-bottom: 15px;
`;

const SignupBtn = styled.button`
  width: 260px;
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

const RobotCheckContainer = styled.div`
  width: 255px;
  height: 166px;
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RobotCheck = styled.div`
  width: 160px;
  height: 144px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: #babfc4 0px 5px 12px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recaptcha_container {
    margin-top: 20px;
    margin-left: 10px;
    width: 111px;
  }

  .robot_input {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  span {
    font-size: 10px;
  }
`;

const FooterMessage = styled.span`
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  font-weight: 300;
  a {
    text-decoration: none;
    color: #0a95ff;
  }
`;
const SignupForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const url = `${process.env.REACT_APP_SIGNUP}`;
  const robotCheckMessage = "I'm not a robot";
  const navigate = useNavigate();
  const onValid = (e) => {
    const User = {
      name: e.name,
      userEmail: e.userEmail,
      userPassword: e.userPassword,
    };

    axios
      .post(url, User)
      .then((res) => {
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      })
      .catch((err) => {
        err.response.status === 409
          ? alert('가입되어 있는 이메일입니다.')
          : console.log(err);
      });
  };

  return (
    <>
      <SingupFormContainer>
        <DefaultSignupForm onSubmit={handleSubmit(onValid)}>
          <span>Display Name </span>
          <NameInput
            {...register('name', { required: true })}
            placeholder="Name"
          ></NameInput>
          <span>Email </span>
          <EmailInput
            type="email"
            {...register('userEmail', {
              required: true,
            })}
            placeholder="Email"
          ></EmailInput>
          <span>Password </span>
          <PasswordInput
            type="password"
            {...register('userPassword', {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,24}$/,
                message: '비밀번호는 영문, 특수문자, 숫자를 포함해야 합니다.',
              },
              minLength: {
                value: 8,
                message: '비밀번호는 8자 이상이여야 합니다.',
              },
            })}
            placeholder="Password"
          ></PasswordInput>
          <span className="password_valid error">
            {errors?.userPassword?.message}
          </span>
          <span className="password_valid">
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </span>
          <RobotCheckContainer>
            <RobotCheck>
              <div>
                <input className="robot_input" type="checkbox" />
                {robotCheckMessage}
              </div>

              <div className="recaptcha_container">
                <img
                  width="24"
                  alt="스크린샷 2022-09-06 오전 1 02 45"
                  src="https://user-images.githubusercontent.com/104320234/188497360-1a703ed8-3d90-4b89-951c-c571e013f705.png"
                />
                <span className="recaptcha">reCAPTCHA</span>
              </div>
              <div>
                <a
                  href="https://policies.google.com/privacy?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Privacy</span>
                </a>
                -
                <a
                  href="https://policies.google.com/terms?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Terms</span>
                </a>
              </div>
            </RobotCheck>
          </RobotCheckContainer>
          <div className="description">
            <input className="check_input small" type="checkbox" />
            <p>
              Opt-in to receive occasional product updates, user research
              invitations, company announcements, and digests.
            </p>
          </div>

          <SignupBtn as="input" type="submit" value="Sign up"></SignupBtn>
          <span className="form_footer">
            By clicking “Sign up”, you agree to our{' '}
            <a
              href="https://stackoverflow.com/legal/terms-of-service/public"
              target="_blank"
              rel="noreferrer"
            >
              terms of service,
            </a>{' '}
            <a
              href="https://stackoverflow.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              privacy policy
            </a>{' '}
            and{' '}
            <a
              href="https://stackoverflow.com/legal/cookie-policy"
              target="_blank"
              rel="noreferrer"
            >
              cookie policy
            </a>
          </span>
        </DefaultSignupForm>
      </SingupFormContainer>
      <FooterMessage>
        Already have an account? <a href="/login">Log in</a>
      </FooterMessage>
    </>
  );
};

export default SignupForm;
