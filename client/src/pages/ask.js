import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { postQuestion } from '../api/requestor';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Wrapper = styled.div`
  padding: 24px;
  padding-top: 100px;
`;

const PageTitle = styled.div`
  font-size: 27px;
`;

const HelpBox = styled.div``;

const HelpTitle = styled.div``;

const HelpText = styled.div``;

const InputBox = styled.div``;

const InputLabel = styled.div``;

const InputDesc = styled.div``;

const TitleInput = styled.input``;

const BodyTextArea = styled.textarea``;

const ButtonsRow = styled.div``;

const SubmitButton = styled.button``;

function Ask({ mode }) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (mode === 'EDIT') {
      // id를 가지고 이 질문의 정보를 가져와야 한다
      // 가져와서 title, body를 setTitle(), setBody() 로 state에 넣는다.
    }
  }, [mode]);

  const handleSubmitButtonClick = async () => {
    if (!title) {
      alert('제목을 입력하세요');

      return;
    }

    if (!body) {
      alert('본문을 입력하세요');

      return;
    }

    postQuestion({
      title,
      body,
      userId: 0,
    });
  };

  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyTextAreaChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <PageTitle>Ask a public question</PageTitle>
        <HelpBox>
          <HelpTitle>들어가며..</HelpTitle>
          <HelpText>이렇게 저렇게 작성하세요.</HelpText>
        </HelpBox>
        <InputBox>
          <InputLabel>Title</InputLabel>
          <InputDesc>제목입니다</InputDesc>
          <TitleInput
            placeholder="최소공배수란 무엇인가요?"
            onChange={handleTitleInputChange}
          />
        </InputBox>
        <InputBox>
          <InputLabel>What are the details of your problem?</InputLabel>
          <InputDesc>asfsdfsd</InputDesc>
          <BodyTextArea onChange={handleBodyTextAreaChange} />
        </InputBox>
        <ButtonsRow>
          <SubmitButton onClick={handleSubmitButtonClick}>Submit</SubmitButton>
        </ButtonsRow>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Ask;
