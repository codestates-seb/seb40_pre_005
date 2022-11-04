import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Writer from '../components/Writer';

const AnswersWrapper = styled.div`
  padding: 24px 0;
`;

const Answer = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #d6d9dc;
`;

const AnswerList = ({ id }) => {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:3001/answer?questions_id=${id}`)
          .then((res) => {
            setAnswers(res.data);
          });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  }, []);
  return (
    <AnswersWrapper>
      {answers
        ? answers.map((answer) => {
            const { answer_id, ans_content, user_id } = answer;
            return (
              // eslint-disable-next-line react/jsx-key
              <Answer>
                <div key={answer_id}>
                  <h2>Answers</h2>
                  <div>{ans_content}</div>
                </div>
                <Writer props={user_id} />
              </Answer>
            );
          })
        : null}
    </AnswersWrapper>
  );
};

export default AnswerList;
