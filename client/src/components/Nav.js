import styled from 'styled-components';

const headerHeight = 50; //header에 가리지 않기 위한 최소한의 높이

const NavWrapper = styled.nav`
  > ul {
    margin-top: ${headerHeight}px;
    list-style: none;
    padding: 0;
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>Home</li>
        <li>Public</li>
        <li>Public</li>
        <li>Public</li>
        <li>Public</li>
        <li>Public</li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
