import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav, { headerHeight } from '../components/Nav';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
  a {
    text-decoration: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1264px;
  margin: 0 auto;
  min-height: 100vh;
  font-size: 13px;
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
  .writer {
    display: flex;
    justify-content: end;
    > div {
      display: flex;
      background-color: #daeaf8;
      align-items: center;
      width: 150px;
      border-radius: 5px;
      padding: 0.8em;
      .avatar {
        width: 30px;
        height: 30px;
        background-color: #0074cc;
        border-radius: 20%;
      }
      .username {
        padding-left: 8px;
      }
    }
  }
  h2 {
    font-weight: 400;
    font-size: 19px;
  }
  textarea {
    width: 100%;
    height: 200px;
    margin-bottom: 24px;
  }
  .answer {
    padding: 24px 0;
  }
  .answerEditor {
    border-top: 1px solid #d6d9dc;
    padding: 24px 0;
  }
`;

const Detail = () => {
  return (
    <>
      <Header />
      <Container>
        <Nav />
        <div className="wrapper">
          <div className="content">
            <div className="header">
              <div className="title">
                <h1>
                  How to match a Array in JS to a Dictionary and Return the
                  values as output?
                </h1>
                <div>
                  <button href="#!" className="button">
                    Ask Question
                  </button>
                </div>
              </div>
              <div className="detail">
                <div>
                  <span>Asked</span>
                  며칠전
                </div>
                <div>
                  <span>Modified</span>
                  며칠전
                </div>
                <div>
                  <span>Viewed</span>
                  몇명
                </div>
              </div>
            </div>
            <div className="contentBody">
              <div className="mainbar">
                <div className="post">
                  <p>I have the following Array in JavaScript:</p>
                  <p>roles = [1, 3 , 4, 6]</p>
                  <p>I want to Match it with a dictionary for example :</p>
                  <p>
                    role_dict = [1: Owner, 2: System Admin, 3: Developer, 4:
                    Viewer, 5: Tester, 6: Engineer]
                  </p>
                  <p>and return the following output:</p>
                  <p>[Owner, Developer, Viewer, Engineer]</p>
                </div>
                <div className="writer">
                  <div>
                    <div className="avatar"></div>
                    <div className="username">username</div>
                  </div>
                </div>
                {/* Answer.js로 분리 */}
                <div className="answer">
                  <div>
                    <h2>Answers</h2>
                    <div>blablabla</div>
                  </div>
                  <div className="writer">
                    <div>
                      <div className="avatar"></div>
                      <div className="username">username</div>
                    </div>
                  </div>
                </div>
                {/* AnswerEditor.js로 분리 */}
                <div className="answerEditor">
                  <h2>Your Answer</h2>
                  <textarea></textarea>
                  <button className="button">Post Your Answer</button>
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Detail;
