import styled from 'styled-components';
import Writer from '../components/Writer';

const AnswerWrapper = styled.div`
  padding: 24px 0;
`;

const Answer = () => {
  return (
    <AnswerWrapper>
      <div>
        <h2>Answers</h2>
        <div>blablabla</div>
      </div>
      <Writer />
    </AnswerWrapper>
  );
};

export default Answer;
