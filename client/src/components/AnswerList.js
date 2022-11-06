import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AnswerEditor from './AnswerEditor';
import AnswerItem from './AnswerItem';

const AnswersWrapper = styled.div`
  padding: 24px 0;
`;

const AnswerList = ({ questionId }) => {
  const [answers, setAnswers] = useState([]);
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
