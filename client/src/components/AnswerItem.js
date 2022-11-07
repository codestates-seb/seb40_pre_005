import styled from 'styled-components';
import Writer from '../components/Writer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AnswerUpdate from './AnswerUpdate';
import { Viewer } from '@toast-ui/react-editor';

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
  const token = localStorage.getItem('accessToken');
  const [isEdit, setIsEdit] = useState(false);
  const { answerId, body, userId } = answer;
  //DELETE
  const handleDelete = () => {
    if (!token) {
      alert('로그인해주세요');
      return;
    }
    const url = `${process.env.REACT_APP_ANSWER}/${answerId}`;
    const fetchData = async () => {
      try {
        await axios
          .delete(url, {
            headers: {
              Authorization: token,
            },
          })
          .then(() => {
            window.location.reload();
          });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  };
  const handleEditBtn = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      {answer ? (
        <Answer>
          <div>
            <h2>Answers</h2>
            {isEdit ? (
              <AnswerUpdate
                body={body}
                setIsEdit={setIsEdit}
                isEdit={isEdit}
                answerId={answerId}
              />
            ) : (
              <Viewer initialValue={body} />
            )}
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
