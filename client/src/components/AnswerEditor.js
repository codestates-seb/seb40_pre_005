import axios from 'axios';
import { useState, useRef } from 'react';
import styled from 'styled-components';
// import MarkdownEditor from './MarkdownEditor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const AnswerEditorWrapper = styled.div`
  /* border-top: 1px solid #d6d9dc; */
  padding: 24px 0;
  .button {
    margin-top: 24px;
  }
`;
const AnswerEditor = ({ questionId, answers, setAnswers }) => {
  const [answer, setAnswer] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      // eslint-disable-next-line no-const-assign, no-undef
      questionId,
      body: answer,
    };
    const fetchData = async () => {
      try {
        // const url = `${process.env.REACT_APP_ANSWER}`;
        const url = `http://localhost:3001/answer`;
        await axios.post(url, data);
        window.location.reload();
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  };
  const editorRef = useRef();
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    setAnswer(data);
    console.log(data);
  };

  return (
    <>
      <AnswerEditorWrapper className="answerEditor">
        <h2>Your Answer</h2>
        <form onSubmit={handleSubmit}>
          <Editor
            initialValue="hello"
            height="200px"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={editorRef}
            onChange={onChange}
          />
          <button className="button">Post Your Answer</button>
        </form>
      </AnswerEditorWrapper>
    </>
  );
};

export default AnswerEditor;
