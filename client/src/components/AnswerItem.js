import styled from 'styled-components';
import Writer from '../components/Writer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AnswerEditor from './AnswerEditor';
import AnswerUpdate from './AnswerUpdate';

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
  const handleEditBtn = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      {answer ? (
        <Answer id={id}>
          <div>
            <h2>Answers</h2>
            {isEdit ? (
              <AnswerUpdate
                body={body}
                setIsEdit={setIsEdit}
                isEdit={isEdit}
                answerId={id}
              />
            ) : (
              <div>{body}</div>
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
