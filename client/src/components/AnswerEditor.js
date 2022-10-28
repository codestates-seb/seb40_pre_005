import styled from 'styled-components';
const AnswerEditorWrapper = styled.div`
  border-top: 1px solid #d6d9dc;
  padding: 24px 0;
  textarea {
    width: 100%;
    height: 200px;
    margin-bottom: 24px;
  }
`;
const AnswerEditor = () => {
  return (
    <>
      <AnswerEditorWrapper className="answerEditor">
        <h2>Your Answer</h2>
        <textarea />
        <button className="button">Post Your Answer</button>
      </AnswerEditorWrapper>
    </>
  );
};

export default AnswerEditor;
