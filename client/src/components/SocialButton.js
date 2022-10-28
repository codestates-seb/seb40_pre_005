import styled from 'styled-components';
import FacebookIcon from '../assets/img/facebook_logo.svg';
import GithubIcon from '../assets/img/github_logo.svg';
import GoogleIcon from '../assets/img/google_logo.svg';

const SocialContainer = styled.div`
  .social_login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social_logo {
    margin: 5px;
  }
`;
export const SocialLoginBtn = styled.button`
  width: 288px;
  height: 37.8px;
  padding: 10.4px;
  border-radius: 5px;
  border: solid rgb(186, 191, 196);
  border-width: 1px;
  padding: 0.8em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 13px;

  &:hover {
    cursor: pointer;
  }
`;

export const GoogleLoginBtn = styled(SocialLoginBtn)`
  background-color: white;
  :hover {
    background-color: rgb(248, 249, 249);
  }
`;
export const GitHubLoginBtn = styled(SocialLoginBtn)`
  background-color: rgb(47, 52, 55);
  :hover {
    background-color: rgb(35, 39, 41);
  }
  color: white;
`;
export const FacebookLoginBtn = styled(SocialLoginBtn)`
  background-color: rgb(56, 84, 153);
  :hover {
    background-color: rgb(54, 60, 121);
  }
  color: white;
`;

export const SocialButtons = () => {
  return (
    <SocialContainer>
      <div className="social_login">
        <GoogleLoginBtn>
          <img className="social_logo" src={GoogleIcon} alt="google_logo" />
          Log in with Google
        </GoogleLoginBtn>
      </div>
      <div className="social_login">
        <GitHubLoginBtn>
          <img className="social_logo" src={GithubIcon} alt="github_logo" />
          Log in with Github
        </GitHubLoginBtn>
      </div>
      <div className="social_login">
        <FacebookLoginBtn>
          <img className="social_logo" src={FacebookIcon} alt="facebook_icon" />
          Log in with Facebook
        </FacebookLoginBtn>
      </div>
    </SocialContainer>
  );
};
