import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AnswerEditor from './AnswerEditor';
import AnswerItem from './AnswerItem';

const AnswersWrapper = styled.div`
  padding: 24px 0;
`;

const AnswerList = ({ questionId, questionInfo }) => {
  const [answers, setAnswers] = useState(null);
  useEffect(() => {
    if (questionInfo) {
      setAnswers(questionInfo.answers?.data);
    }
  }, [questionInfo]);
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
      <AnswerEditor questionId={questionId} />
    </AnswersWrapper>
  );
};

export default AnswerList;
