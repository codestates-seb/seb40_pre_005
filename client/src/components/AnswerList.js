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
    button {
      border: none;
      margin: 4px;
      color: #6a737c;
      font-size: 13px;
      cursor: pointer;
    }
  }
`;

const AnswerList = ({ questionId }) => {
  const [answers, setAnswers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState();
  const [answerId, setAnswerId] = useState();
  //READ(GET)
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3001/answer?question_id=${questionId}`;
      try {
        await axios.get(url).then((res) => {
          setAnswers(res.data);
          setAnswerId(res.data[0].answerId);
          // console.log(res.data[0].id);
        });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  }, []);
  //DELETE
  const handleDelete = () => {
    const url = `http://localhost:3001/answer?id=${answerId}`;
    const fetchData = async () => {
      try {
        await axios.delete(url).then(() => {
          window.location.reload();
        });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  };
  // UPDATE
  const handleEditBtn = () => {
    setIsEdit(!isEdit);
  };
  const onChange = (e) => {
    setEditText(e.target.value);
  };
  useEffect(() => {
    // const url = REACT_APP_ANSWER + ${answerId};
    const url = `https://localhost:3001/answer?id=${answerId}`;
    const data = {
      answerId,
      answerStatus: 'ANSWER_NOT_EXIST',
      body: editText,
    };
    const fetchData = async () => {
      try {
        await axios.patch(url, data).then((res) => {
          console.log(res);
        });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  }, [isEdit]);
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
                  {isEdit ? (
                    <input value={editText} onChange={onChange} />
                  ) : (
                    <div>{editText}</div>
                  )}
                </div>
                <Writer props={userId} />
                <div className="handleBtns">
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <button onClick={handleEditBtn}>edit</button>
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <button onClick={handleDelete}>delete</button>
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
