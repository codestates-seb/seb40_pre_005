import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ModalContaincer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  background-color: #fff;
  width: 180px;
  top: 7%;
  right: 8%;
  box-shadow: #babfc4 0px 5px 12px;
  border-radius: 15px;
  height: 125px;
  position: fixed;
`;

const ImgContainer = styled.div`
  margin: 10px;
`;
const textContainer = styled.div`
  margin: 20px;
`;
const Modal = ({ modalClose }) => {
  const userInfo = useSelector((state) => state.user);
  return (
    <ModalContaincer>
      <ImgContainer>
        <img src={process.env.PUBLIC_URL + '/profile.png'} alt="profile" />
      </ImgContainer>
      <textContainer>{userInfo.userName}</textContainer>
      <textContainer>{userInfo.userEmail}</textContainer>
    </ModalContaincer>
  );
};

export default Modal;
