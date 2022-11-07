import axios from 'axios';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useDispatch, useSelector } from 'react-redux';

const AnswerEditorWrapper = styled.div`
  /* border-top: 1px solid #d6d9dc; */
  padding: 24px 0;
  .button {
    margin-top: 24px;
  }
  .toastui-editor-main {
    background-color: white;
  }
`;
const AnswerEditor = ({ questionId }) => {
  const [answer, setAnswer] = useState([]);
  const userInfo = useSelector((state) => state.user);
  // const token = localStorage.getItem('accessToken');
  const token = useSelector((state) => state.user.userAccessToken);
  console.log(token);
  axios.defaults.headers.common['Authorization'] = token;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      body: answer,
      questionId,
      userId: userInfo.userId,
    };
    const fetchData = async () => {
      try {
        const url = `${process.env.REACT_APP_ANSWER}`;
        await axios.post(url, data, {
          headers: {
            Authorization: token,
          },
        });
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
  };

  return (
    <>
      <AnswerEditorWrapper className="answerEditor">
        <h2>Your Answer</h2>
        <form onSubmit={handleSubmit}>
          <Editor
            initialValue=" "
            height="300px"
            initialEditType="markdown"
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
            ]}
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
