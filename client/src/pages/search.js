import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ContentWrapper } from '../components/Home';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import QuestionItem from '../components/QuestionItem';
import styled from 'styled-components';
import {
  Head,
  Title,
  ToolBox,
  QuestionList,
  QuestionAmount,
  LeftestButton,
  MiddleButton,
  RightestButton,
  AskQuestionButton,
} from './question';
import { getQuestionList } from '../api/requestor';
import Pagination from '../components/Pagination';

const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  background-color: white;
`;

const ResultInfo = styled.div`
  width: 100%;
  font-size: 12px;
`;

const SearchPage = () => {
  const [questions, setQuestions] = useState([]);
  const [pageInfo, setPageInfo] = useState();
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageSize, setPageSize] = useState(1000);
  const location = useLocation();
  const searchTitle = location.search.slice(3);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getQuestionList({
  //         page: selectedPage,
  //         size: pageSize,
  //       });
  //       console.log('pageinfo', data.pageInfo);
  //       setPageInfo(data.pageInfo);
  //       setQuestions(data.data);
  //       console.log('data', data);
  //     };

  //     fetchData();
  //   }, [selectedPage, pageSize]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestionList({
        page: selectedPage,
        size: pageSize,
      });

      setPageInfo(data.pageInfo);
      setQuestions(data.data);
    };

    fetchData();
  }, [selectedPage, pageSize]);

  const filteredQuestion = questions.filter((e) =>
    e.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <>
      <Header />
      <ContentWrapper>
        <Nav />
        <div className="mainContents">
          <Wrapper>
            <Head>
              <Title>Search Results</Title>
              <AskQuestionButton>Ask Question</AskQuestionButton>
            </Head>
            <ResultInfo>Results for {searchTitle}</ResultInfo>
            <ToolBox>
              <QuestionAmount>{filteredQuestion.length} results</QuestionAmount>
              <LeftestButton>Relevance</LeftestButton>
              <MiddleButton>Newest</MiddleButton>
              <RightestButton>More</RightestButton>
            </ToolBox>
            <QuestionList>
              {filteredQuestion.map((question) => (
                <QuestionItem key={question.questionId} question={question} />
              ))}
            </QuestionList>
            <Pagination
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              totalElements={pageInfo?.totalElements || 0}
              pageSize={pageSize}
            />
          </Wrapper>
          <Sidebar />
        </div>
      </ContentWrapper>
      <Footer />;
    </>
  );
};

export default SearchPage;
