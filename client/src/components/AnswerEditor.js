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
const AnswerEditor = ({ id, answers, setAnswers }) => {
  const [answer, setAnswer] = useState([]);

  const onChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      // eslint-disable-next-line no-const-assign
      id,
      question_id: id,
      user_id: 'user',
      ans_content: answer,
      ans_reg_date: new Date()
        .toISOString()
        .replace('T', ' ')
        .replace(/\..*/, ''),
    };
    const fetchData = async () => {
      try {
        await axios.post(`http://localhost:3001/answer`, data);
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
