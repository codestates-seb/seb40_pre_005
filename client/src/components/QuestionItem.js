import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const getRandomInteger = (max) => {
  return Math.floor(Math.random() * max);
};

const QuestionItem = ({ question }) => {
  return (
    <QuestionContainer>
      <QuestionStat>
        <span>{getRandomInteger(300)} likes</span>
        <span style={{ color: '#6a737c' }}>{getRandomInteger(30)} answers</span>
        <span style={{ color: '#6a737c' }}>{question.view} views</span>
      </QuestionStat>
      <QuestionPreview>
        <Link to={`/questions/${question.questionId}`}>
          <h3 className="main-title">{question.title}</h3>
        </Link>
        <div className="main-body">{question.body}</div>
      </QuestionPreview>
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 16px;

  border-bottom: 1px solid #d6d9dc;
`;

const QuestionStat = styled.div`
  //좋아요, 답변수, 조회수
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 0.5rem;
  font-size: 0.8rem;
  text-align: right;
`;

const QuestionPreview = styled.div`
  padding: 0 0 0 30px;
  .main-title {
    margin-top: 10px;
    color: #0074cc;
    font-size: 16px;
    font-weight: normal;

    //'질문제목...'1줄로 줄이기
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; // 원하는 라인수
    -webkit-box-orient: vertical;

    &:hover {
      color: #0a95ff;
    }
  }
  .main-body {
    color: #3b4045;
    font-size: 12px;

    //'내용...'2줄로 줄이기
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export default QuestionItem;
