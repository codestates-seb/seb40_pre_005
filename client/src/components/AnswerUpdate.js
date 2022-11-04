import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #0a95ff;
  padding: 0.8em;
  border-radius: 5px;
  color: white;
  border: 1px solid transparent;
  white-space: nowrap;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #0074cc;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 24px;
`;
const AnswerUpdate = ({ setIsEdit, isEdit, body, answerId }) => {
  const [editText, setEditText] = useState();

  // UPDATE
  const onChange = (e) => {
    setEditText(e.target.value);
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
        });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  };
  return (
    <>
      <Textarea value={editText ? editText : body} onChange={onChange} />
      <Button onClick={handleEditBtn}>Save Edits</Button>
    </>
  );
};

export default AnswerUpdate;
