/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Writer from '../components/Writer';
import AnswerEditor from './AnswerEditor';

const AnswersWrapper = styled.div`
  padding: 24px 0;
`;

const Answer = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #d6d9dc;
  .handleBtns {
    span {
      margin: 4px;
      color: #6a737c;
      font-size: 13px;
      cursor: pointer;
    }
  }
`;

const AnswerList = ({ questionId }) => {
  const [answers, setAnswers] = useState([]);
  //READ(GET)
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:3001/answer?question_id=${questionId}`)
          .then((res) => {
            setAnswers(res.data);
          });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  }, []);
  //DELETE
  const handleDelete = (e) => {
    const fetchData = async () => {
      try {
        //await axios.delete(`http://localhost:3001/answer?id=${id}`).then(() => {
        // window.location.reload();
        //});
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  };
  return (
    <AnswersWrapper>
      {answers
        ? answers.map((answer) => {
            const { answerId, userId, body } = answer;
            return (
              // eslint-disable-next-line react/jsx-key
              <Answer>
                <div key={answerId}>
                  <h2>Answers</h2>
                  <div>{body}</div>
                </div>
                <Writer props={userId} />
                <div className="handleBtns">
                  <span>edit</span>
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <span onClick={handleDelete}>delete</span>
                </div>
              </Answer>
            );
          })
        : null}
      <AnswerEditor
        questionId={questionId}
        answers={answers}
        setAnswers={setAnswers}
      />
    </AnswersWrapper>
  );
};

export default AnswerList;
