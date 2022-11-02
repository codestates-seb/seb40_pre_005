import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav, { headerHeight } from '../components/Nav';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import AnswerEditor from '../components/AnswerEditor';
import Writer from '../components/Writer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AnswerList from '../components/AnswerList';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1264px;
  margin: 0 auto;
  min-height: 100vh;
  font-size: 13px;
  a {
    text-decoration: none;
  }
  .wrapper {
    margin-top: ${headerHeight}px;
    border-left: 1px solid #d6d9dc;
    width: 100%;
    h1 {
      line-height: 1.35;
      font-weight: normal;
      margin: 0;
    }
    .content {
      max-width: 1100px;
      padding: 24px;
      .header {
        width: 100%;
        border-bottom: 1px solid #d6d9dc;
        .title {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          div {
            margin-left: 12px;
          }
        }
        .detail {
          display: flex;
          flex-direction: row;
          div {
            margin: 8px 16px 8px 0;
            span {
              margin-right: 4px;
            }
          }
        }
      }
      .contentBody {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .mainbar {
          width: 100%;
          max-width: 728px;
          font-size: 15px;
          .post {
            padding-right: 16px;
          }
        }
      }
    }
  }
  .button {
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
  }
  h2 {
    font-weight: 400;
    font-size: 19px;
  }
`;

const Detail = () => {
  let { id } = useParams();
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    const url = `http://localhost:3001/data?questions_id=${id}`;
    const fetchData = async () => {
      try {
        await axios.get(url).then((res) => {
          setQuestion(res.data[0]);
        });
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchData();
  }, []);
  //
  // const question = useSelector((state) => {
  //   return state.question.value;
  // });
  // const dispatch = useDispatch();
  return (
    <>
      (
      <Header />
      <Container>
        <Nav />
        <div className="wrapper">
          <div className="content">
            <div className="header">
              <div className="title">
                {<h1>{question?.title}</h1>}
                <div>
                  <button href="#!" className="button">
                    Ask Question
                  </button>
                </div>
              </div>
              <div className="detail">
                <div>
                  <span>Asked</span>
                  {question?.reg_date}
                </div>
                <div>
                  <span>Modified</span>
                  며칠전
                </div>
                <div>
                  <span>Viewed</span>
                  {question?.hit}
                </div>
              </div>
            </div>
            <div className="contentBody">
              <div className="mainbar">
                <div className="post">
                  <p>{question?.que_content}</p>
                </div>
                <Writer props={question?.user_id} />
                <AnswerList id={id} />
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </Container>
      <Footer />)
    </>
  );
};

export default Detail;
