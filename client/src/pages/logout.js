import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/store';

const LogoutContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoutInfo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 21px;
  line-height: 30px;
  width: 526px;
  height: 54px;
  margin: 10px;
`;

const LogoutOption = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;

  background-color: #fff;
  margin-left: 23%;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: #babfc4 0px 5px 12px;
  flex-direction: column;
`;

const Domaindiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: 0.5px solid grey;
`;
const DomainLink = styled.a`
  text-decoration: none;
  color: #0a95ff;
  margin: 5px;
`;

const Inputdiv = styled.div`
  display: flex;
  margin: 0px 3px 10px 25px;
`;

const DomainSpan = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;

  .Icon {
    margin: 2px;
  }

  .page {
    margin-left: 5px;
  }

  span {
    font-size: 12px;
    margin: 5px;
  }
`;

const BtnContainer = styled.div`
  margin: 0px 0px 0px 15px;
`;

const LogoutBtn = styled.button`
  width: 70px;
  height: 33px;
  border-radius: 5px;
  text-decoration: none;
  background: #fff;
  border: 1px solid #0995ff;
  margin: 5px;
  opacity: 0.75;
  color: #2c5877;
  padding: 8px 10px 8px 10px;
  font-size: 12px;

  &:hover {
    background-color: #b3d3ea;
  }
`;

const CancelBtn = styled.button`
  width: 70px;
  height: 33px;
  border-radius: 5px;
  text-decoration: none;
  background: #fff;
  border: 1px solid #0995ff;
  margin: 5px;
  opacity: 0.75;
  color: #2c5877;
  padding: 8px 10px 8px 10px;
  font-size: 12px;

  &:hover {
    background-color: #b3d3ea;
  }
`;

const Wariningdiv = styled.div`
  margin: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 17px;
`;
const Logout = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(clearUser(user));
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };
  return (
    <LogoutContainer>
      <div>
        <LogoutInfo>
          Clicking “Log out” will log you out of the following domains on this
          device:
        </LogoutInfo>
        <LogoutOption>
          <Domaindiv>
            <DomainLink href="https://askubuntu.com/">
              <DomainSpan>
                <div className="Icon">
                  <Icon icon="simple-icons:askubuntu" color="#E76524" />
                </div>
                <div className="page">askubuntu.com</div>
              </DomainSpan>
            </DomainLink>
            <DomainLink href="https://mathoverflow.net/">
              <DomainSpan>
                <div className="Icon">
                  <Icon icon="academicons:mathoverflow" color="#333221" />
                </div>
                <div className="page">mathoverflow.net</div>
              </DomainSpan>
            </DomainLink>
            <DomainLink href="https://serverfault.com/">
              <DomainSpan>
                <div className="Icon">
                  <Icon icon="simple-icons:serverfault" color="#333221" />
                </div>
                <div className="page">serverfault.com</div>
              </DomainSpan>
            </DomainLink>
            <DomainLink href="https://stackapps.com/">
              <DomainSpan>
                <div className="Icon">
                  <Icon icon="ant-design:setting-twotone" color="#333221" />
                </div>
                <div className="page">stackapps.com</div>
              </DomainSpan>
            </DomainLink>
            <DomainLink href="https://stackexchange.com/">
              <DomainSpan>
                <div className="Icon">
                  <Icon icon="cib:stackexchange" color="#333221" />
                </div>
                <div className="page">stackexchange.com</div>
              </DomainSpan>
            </DomainLink>
            <DomainLink href="stackoverflow.com">
              <DomainSpan>
                <div className="Icon">
                  <Icon icon="logos:stackoverflow-icon" />
                </div>
                <div className="page">stackoverflow.com</div>
              </DomainSpan>
            </DomainLink>
            <DomainLink href="superuser.com">
              <DomainSpan>
                <div className="Icon">
                  <Icon icon="cib:superuser" color="#333221" />
                </div>
                <div className="page">superuser.com</div>
              </DomainSpan>
            </DomainLink>
          </Domaindiv>
          <Inputdiv>
            <DomainSpan>
              <input type="checkbox" />
              <span>Log out all devices</span>
            </DomainSpan>
          </Inputdiv>
          <BtnContainer>
            <Link to="/">
              <LogoutBtn onClick={onClick}>Log out</LogoutBtn>
            </Link>

            <Link to="/">
              <CancelBtn>Cancel</CancelBtn>
            </Link>
          </BtnContainer>
          <Wariningdiv>
            <p>
              If you’re on a shared computer, remember to log out of your Open
              ID provider (Facebook, Google, Stack Exchange, etc.) as well.
            </p>
          </Wariningdiv>
        </LogoutOption>
      </div>
    </LogoutContainer>
  );
};

export default Logout;
