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
const AnswerEditor = () => {
  let { id } = useParams();
  const [answer, setAnswer] = useState([]);
  const bind = {
    answer,
    onchange: (e) => setAnswer(e.target.value),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      answer_id: 1,
      question_id: id,
      user_id: 1,
      ans_content: answer,
      ans_reg_date: Date(),
    };
    axios(`http://localhost:3001/data?questions_id=${id}`, {
      method: 'post',
      responseType: 'type',
      body: data,
    })
      .then(() => {
        setAnswer([...answer, data]);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <AnswerEditorWrapper className="answerEditor">
        <h2>Your Answer</h2>
        <textarea />
        <button className="button" onSubmit={handleSubmit}>
          Post Your Answer
        </button>
      </AnswerEditorWrapper>
    </>
  );
};

export default AnswerEditor;
