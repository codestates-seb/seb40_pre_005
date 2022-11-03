import styled from 'styled-components';
import Writer from '../components/Writer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSyncExternalStore } from 'react';

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
  const { id, body, userId } = answer;
  //DELETE
  const handleDelete = () => {
    console.log(id, body);
    const url = `http://localhost:3001/answer/${id}`;
    const fetchData = async () => {
      try {
        await axios.delete(url).then(() => {
          console.log(id, body);
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
    console.log(id);
    setIsEdit(!isEdit);
  };
  const onChange = (e) => {
    setEditText(e.target.value);
  };
  // useEffect(() => {
  //   // const url = REACT_APP_ANSWER + ${answerId};
  //   const url = `https://localhost:3001/answer?id=${id}`;
  //   const data = {
  //     id,
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
  // }, [answerId, editText, isEdit]);
  return (
    <>
      {answer ? (
        <Answer id={id}>
          <div>
            <h2>Answers</h2>
            <div onChange={onChange}>{body}</div>
          </div>
          <Writer props={userId} />
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
