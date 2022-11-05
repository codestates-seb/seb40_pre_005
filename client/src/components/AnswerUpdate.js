import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #0a95ff;
  padding: 0.8em;
  border-radius: 5px;
  color: white;
  border: 1px solid transparent;
  white-space: nowrap;
  font-size: 13px;
  margin-top: 24px;
  cursor: pointer;
  &:hover {
    background-color: #0074cc;
  }
`;

const AnswerUpdate = ({ setIsEdit, isEdit, body, answerId }) => {
  const [editText, setEditText] = useState();
  const editorRef = useRef();

  // UPDATE
  const htmlString = body;
  useEffect(() => {
    editorRef.current?.getInstance().setHTML(htmlString);
  }, [htmlString]);
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    setEditText(data);
  };
  const handleEditBtn = () => {
    // const url = REACT_APP_ANSWER + ${answerId};
    const url = `http://localhost:3001/answer/${answerId}`;
    const data = {
      id: answerId,
      answerStatus: 'ANSWER_NOT_EXIST',
      body: editText,
    };
    const fetchData = async () => {
      try {
        await axios.patch(url, data).then((res) => {
          console.log(res);
          setIsEdit(false);
          window.location.reload();
        });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  };

  return (
    <>
      <Editor
        ref={editorRef}
        initialEditType="wysiwyg"
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
        ]}
        onChange={onChange}
      />
      <Button onClick={handleEditBtn}>Save Edits</Button>
    </>
  );
};

export default AnswerUpdate;
