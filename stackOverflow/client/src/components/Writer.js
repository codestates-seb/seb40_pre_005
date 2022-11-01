import styled from 'styled-components';
const WriterWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
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
`;
const Writer = () => {
  return (
    <WriterWrapper className="writer">
      <div>
        <div className="avatar"></div>
        <div className="username">username</div>
      </div>
    </WriterWrapper>
  );
};
export default Writer;
