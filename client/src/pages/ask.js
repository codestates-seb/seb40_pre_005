/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  getSpecificQuestion,
  postQuestion,
  updateQuestion,
} from '../api/requestor';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Wrapper = styled.div`
  padding: 24px;
  padding-top: 100px;
  padding-bottom: 80px;

  max-width: 850px;
`;

const PageTitle = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 60px;
`;

const HelpBox = styled.div`
  border: 1px solid rgb(174, 201, 230);
  border-radius: 1px;

  background: rgb(237, 244, 250);
  padding: 24px;

  margin-bottom: 16px;
`;

const HelpTitle = styled.div`
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 12px;
`;

const HelpText = styled.div`
  font-size: 15px;

  a {
    color: rgb(10, 149, 255);
  }
`;

const InputBox = styled.div`
  padding: 24px;
  border: 1px solid rgb(227, 229, 231);
  background: #fff;

  margin-bottom: 16px;
`;

const InputLabel = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 2px;
`;

const InputDesc = styled.div`
  font-size: 13px;
  line-height: 17px;
  margin-bottom: 4px;
`;

const TitleInput = styled.input`
  border: 1px solid rgb(186, 191, 196);
  border-radius: 2px;
  padding: 8px 9px;
  width: 100%;
  box-sizing: border-box;
  font-size: 13px;
`;

const BodyTextArea = styled.textarea`
  border: 1px solid rgb(186, 191, 196);
  border-radius: 2px;
  padding: 8px 9px;
  width: 100%;
  box-sizing: border-box;
  font-size: 13px;

  min-height: 200px;
`;

const ButtonsRow = styled.div``;

const SubmitButton = styled.button`
  color: white;
  background-color: #0a95ff;
  border: none;
  border-radius: 3px;
  padding: 10.4px;
  cursor: pointer;
  height: 35px;

  font-size: 13px;
  border: 1px solid #0a95ff;

  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
`;

function Ask({ mode }) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    if (mode === 'EDIT') {
      // id??? ????????? ??? ????????? ????????? ???????????? ??????
      const fetchData = async () => {
        const data = await getSpecificQuestion({
          questionId: id,
          page: 1,
          size: 5,
        });

        // ???????????? title, body??? setTitle(), setBody() ??? state??? ?????????.
        setTitle(data.data.title);
        setBody(data.data.body);
      };

      fetchData();
    }
  }, [mode, id]);

  const handleSubmitButtonClick = async () => {
    if (!title) {
      alert('????????? ???????????????');

      return;
    }

    if (!body) {
      alert('????????? ???????????????');

      return;
    }

    try {
      await postQuestion({
        title,
        body,
        userId: userInfo?.userId,
      });

      window.location.href = '/';
    } catch (error) {
      alert('????????? ??????????????????.');
    }
  };

  const handleUpdateButtonClick = () => {
    if (!title) {
      alert('????????? ???????????????');

      return;
    }

    if (!body) {
      alert('????????? ???????????????');

      return;
    }

    try {
      updateQuestion({
        questionId: id,
        title,
        body,
      });

      window.location.href = '/';
    } catch (error) {
      alert('????????? ??????????????????.');
    }
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
          <HelpTitle>Writing a good question</HelpTitle>
          <HelpText>
            You???re ready to <a>ask</a> a <a>programming-related question</a> and
            this form will help guide you through the process. Looking to ask a
            non-programming question? See <a>the topics here</a> to find a
            relevant site.
            <br />
            <br />
            <strong>Steps</strong>
            <br />
            <ul style={{ fontSize: 13 }}>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>
                Add ???tags??? which help surface your question to members of the
                community.
              </li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </HelpText>
        </HelpBox>
        <InputBox>
          <InputLabel>Title</InputLabel>
          <InputDesc>
            Be specific and imagine you???re asking a question to another person.
          </InputDesc>
          <TitleInput
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            onChange={handleTitleInputChange}
            value={title}
          />
        </InputBox>
        <InputBox>
          <InputLabel>Body</InputLabel>
          <InputDesc>
            The body of your question contains your problem details and results.
            Minimum 30 characters.
          </InputDesc>
          <BodyTextArea onChange={handleBodyTextAreaChange} value={body} />
        </InputBox>
        <ButtonsRow>
          {mode === 'EDIT' ? (
            <SubmitButton onClick={handleUpdateButtonClick}>
              Update
            </SubmitButton>
          ) : (
            <SubmitButton onClick={handleSubmitButtonClick}>
              Submit
            </SubmitButton>
          )}
        </ButtonsRow>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Ask;
