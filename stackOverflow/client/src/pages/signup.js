import styled from 'styled-components';
import Header from '../components/Header';
import { useForm } from 'react-hook-form';
import { SocialButtons } from '../components/SocialButton';
import SignupInfo from '../components/SignupInfo';
import SignupForm from '../components/SignupForm';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1070px;
`;

const SignupContainer = styled.div``;

const Signup = () => {
  const { register, watch, handleSubmit } = useForm();
  const onValid = (e) => {
    console.log(e);
  };
  return (
    <>
      <Header />
      <Container>
        <SignupInfo />
        <SignupContainer>
          <SocialButtons />
          <SignupForm />
        </SignupContainer>
      </Container>
    </>
  );
};

export default Signup;
