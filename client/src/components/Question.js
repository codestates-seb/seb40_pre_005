import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestionList } from '../api/requestor';
import QuestionItem from './QuestionItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const headerHeight = 50 + 3; //header에 가리지 않기 위한 최소한의 높이
const footerHeight = 322;

const NavReplace = styled.div`
  height: calc(100vh - ${footerHeight}px);
  position: sticky;
  width: 164px;
`;

const QuestionWrapper = styled.div`
  width: 100%;
  padding: 24px;
  background-color: white;
`;

const Head = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 27px;
  font-weight: 400;
  margin: 0;
`;

const AskQuestionButton = styled.button`
  margin-left: auto; //Head의 Top Questions와 Ask Question 버튼 위치 정렬
  color: white;
  background-color: #0a95ff;
  border: none;
  border-radius: 3px;
  padding: 10.4px;
  cursor: pointer;
  height: 35px;

  font-size: 13px;
  border: 1px solid #0a95ff;

  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
`;

const ToolBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  button {
    &:hover {
      background-color: rgb(248, 249, 249);
    }
  }
`;

const QuestionAmount = styled.div`
  font-size: 17px;
`;

const LeftestButton = styled.button`
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid #6a737c;
  background-color: #e3e6e8;
  color: #3b4045;
  padding: 9.6px;
  cursor: pointer;
  font-size: 12px;
  margin-left: auto;
`;

const MiddleButton = styled.button`
  border: 1px solid #6a737c;
  border-left: none;
  background-color: white;
  color: #6a737c;
  padding: 9.6px;
  cursor: pointer;
  font-size: 12px;
`;

const RightestButton = styled.button`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 1px solid #6a737c;
  border-left: none;
  background-color: white;
  color: #6a737c;
  padding: 9.6px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 16px;
`;

const FilterButton = styled.button`
  border-radius: 3px;
  border: 1px solid rgb(122, 167, 199);
  background-color: #e1ecf4;
  color: #39739d;
  padding: 9.6px;
  cursor: pointer;
  font-size: 12px;
`;

const QuestionList = styled.div`
  border-top: 1px solid #d6d9dc;
`;

function Question() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestionList();

      setQuestions(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <QuestionWrapper>
        <Head>
          <Title>All Questions</Title>
          <AskQuestionButton>Ask Question</AskQuestionButton>
        </Head>
        <ToolBox>
          <QuestionAmount>23,149,033 questions</QuestionAmount>
          <LeftestButton>Newest</LeftestButton>
          <MiddleButton>Active</MiddleButton>
          <MiddleButton>Bountied</MiddleButton>
          <MiddleButton>Unanswered</MiddleButton>
          <RightestButton>More</RightestButton>
          <FilterButton>
            <FontAwesomeIcon icon={faBars} />
            <span> Filter</span>
          </FilterButton>
        </ToolBox>
        <QuestionList>
          {questions.map((question) => (
            <QuestionItem key={question.questions_id} question={question} />
          ))}
        </QuestionList>
      </QuestionWrapper>
    </>
  );
}

export default Question;
