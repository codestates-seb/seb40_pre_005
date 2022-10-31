import Footer from './Footer';
import Header from './Header';
import Nav, { headerHeight } from './Nav';
import Sidebar from './Sidebar';
import Question from './Question';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1264px;
  margin: 0 auto;
  min-height: 100vh;

  > div:nth-of-type(1) {
    border-left: 1px solid #d6d9dc;
    width: 100%;
    min-width: 746px;
  }
  .mainContents {
    max-width: 1100px;
    margin-top: ${headerHeight}px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Nav />
        <div className="mainContents">
          <Question />
          <Sidebar />
        </div>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default Home;
