import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const AnswerEditorWrapper = styled.div`
  /* border-top: 1px solid #d6d9dc; */
  padding: 24px 0;
  textarea {
    width: 100%;
    height: 200px;
    margin-bottom: 24px;
  }
`;
const AnswerEditor = ({ questionId, answers, setAnswers }) => {
  const [answer, setAnswer] = useState([]);

  const onChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      // eslint-disable-next-line no-const-assign, no-undef
      questionId: 2,
      body: answer,
    };
    const fetchData = async () => {
      try {
        // const url = `${process.env.REACT_APP_ANSWER}`;
        const url = `http://localhost:3001/answer`;
        await axios.post(url, data);
        window.location.reload();
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  };

  return (
    <>
      <AnswerEditorWrapper className="answerEditor">
        <h2>Your Answer</h2>
        <form onSubmit={handleSubmit}>
          <textarea onChange={onChange} />
          <button className="button">Post Your Answer</button>
        </form>
      </AnswerEditorWrapper>
    </>
  );
};

export default AnswerEditor;
