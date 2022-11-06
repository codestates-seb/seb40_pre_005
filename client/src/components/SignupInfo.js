import styled from 'styled-components';
const IntroduceContainer = styled.div`
  width: 500px;
  font-size: 15px;
  margin-top: -120px;

  .top {
    font-size: 27px;
    margin: 10px 10px 20px 14px;
  }
  .bottom {
    font-size: 13px;
    color: #778088;
    margin: 10px 10px 10px 20px;
  }
  a {
    text-decoration: none;
    color: #0a95ff;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const IntroduceText = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  img {
    margin: 10px;
  }
`;

const SignupInfo = () => {
  return (
    <IntroduceContainer>
      <IntroduceText className="top">
        Join the StackOverflow community
      </IntroduceText>
      <IntroduceText className="middle">
        <img
          width="24"
          alt="스크린샷 2022-09-03 오후 8 49 23"
          src="https://user-images.githubusercontent.com/104320234/188269169-bf7b987f-e597-46cd-a8e7-c227efde5679.png"
        />
        <span>Get unstuck — ask a question</span>
      </IntroduceText>
      <IntroduceText className="middle">
        <img
          width="24"
          alt="스크린샷 2022-09-03 오후 8 49 56"
          src="https://user-images.githubusercontent.com/104320234/188269240-b38cf6ed-34c3-43eb-b63c-51d9619ade19.png"
        />
        <span>Unlock new privileges like voting and commenting</span>
      </IntroduceText>
      <IntroduceText className="middle">
        <img
          width="27"
          alt="스크린샷 2022-09-03 오후 8 50 14"
          src="https://user-images.githubusercontent.com/104320234/188269297-ff59ed55-4627-49f3-a001-9e480ff2bc7d.png"
        />
        <span>Save your favorite tags, filters, and jobs</span>
      </IntroduceText>
      <IntroduceText className="middle">
        <img
          width="23"
          alt="스크린샷 2022-09-03 오후 8 50 42"
          src="https://user-images.githubusercontent.com/104320234/188269328-d049a0e0-6514-4ea6-b207-d5f58d02e943.png"
        />
        <span>Earn reputation and badges</span>
      </IntroduceText>
      <IntroduceText className="bottom">
        <span>
          Collaborate and share knowledge with a private group for FREE.
        </span>
      </IntroduceText>
      <IntroduceText className="bottom">
        <span>
          <a
            href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up"
            target="_blank"
            rel="noreferrer"
          >
            Get Stack Overflow for Teams free for up to 50 users.
          </a>
        </span>
      </IntroduceText>
    </IntroduceContainer>
  );
};

export default SignupInfo;
