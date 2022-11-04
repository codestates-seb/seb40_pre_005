/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Writer from '../components/Writer';
import AnswerEditor from './AnswerEditor';
import AnswerItem from './AnswerItem';

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
  //READ(GET)
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3001/answer?questionId=${questionId}`;
      try {
        await axios.get(url).then((res) => {
          setAnswers(res.data);
        });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  }, [questionId]);
  return (
    <AnswersWrapper>
      {answers
        ? answers.map((answer) => {
            return (
              <>
                <AnswerItem key={answer.answerId} answer={answer} />
              </>
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
