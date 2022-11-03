import styled from 'styled-components';
import Writer from '../components/Writer';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
const AnswerItem = ({ answer }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState();
  console.log(answer.answerId, answer.body, answer.userId);
  //DELETE
  const handleDelete = () => {
    const url = `http://localhost:3001/answer?id=${answer?.answerId}`;
    const fetchData = async () => {
      try {
        await axios.delete(url).then(() => {
          window.location.reload();
        });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  };
  // UPDATE
  const handleEditBtn = () => {
    setIsEdit(!isEdit);
  };
  // const onChange = (e) => {
  //   setEditText(e.target.value);
  // };
  // useEffect(() => {
  //   // const url = REACT_APP_ANSWER + ${answerId};
  //   const url = `https://localhost:3001/answer?id=${answerId}`;
  //   const data = {
  //     answerId,
  //     answerStatus: 'ANSWER_NOT_EXIST',
  //     body: editText,
  //   };
  //   const fetchData = async () => {
  //     try {
  //       await axios.patch(url, data).then((res) => {
  //         console.log(res);
  //       });
  //     } catch (err) {
  //       console.log('error', err);
  //     }
  //   };
  //   fetchData();
  // }, [isEdit]);
  return (
    <>
      {answer ? (
        <Answer id={answer.answerId}>
          <div>
            <h2>Answers</h2>
            <div>{answer.body}</div>
          </div>
          <Writer props={answer.userId} />
          <div className="handleBtns">
            <button onClick={handleEditBtn}>edit</button>
            <button onClick={handleDelete}>delete</button>
          </div>
        </Answer>
      ) : null}
    </>
  );
};

export default AnswerItem;
