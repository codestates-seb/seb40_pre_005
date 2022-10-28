import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export const headerHeight = 50 + 3; //header에 가리지 않기 위한 최소한의 높이
const footerHeight = 322;

const NavWrapper = styled.nav`
  font-size: 13px;
  color: #525960;
  height: calc(100vh - ${footerHeight}px);
  position: sticky;
  top: 0;
  > div {
    width: 164px;
  }
  ul {
    &:not(.subNav) {
      width: 164px;
      padding-top: ${headerHeight + 14}px;
      > li > a {
        padding-left: 8px;
      }
    }
    list-style: none;
    padding: 0;
  }
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    height: 26px;
    padding: 4px;
    display: flex;
    align-items: center;
    &:active {
      font-weight: 700;
      color: #0c0d0e;
      border-right: 3px solid #f48225;
      background-color: #f1f2f3;
    }
    &:hover {
      color: #0c0d0e;
    }
  }
  .subNav {
    li {
      &:first-of-type {
        margin: 16px 0 4px 8px;
        color: #6a737c;
        font-size: 11px;
      }
      &:nth-of-type(2) {
        a {
          padding-left: 8px;
        }
      }
    }
    a {
      padding-left: 30px;
    }
    span {
      padding-left: 4px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <div>
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <ul className="subNav">
              <li>PUBLIC</li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faEarthAmericas} size={'lg'} />
                  <span>Questions</span>
                </a>
              </li>
              <li>
                <a href="#!">Tags</a>
              </li>
              <li>
                <a href="#!">Users</a>
              </li>
              <li>
                <a href="#!">Companies</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </NavWrapper>
  );
};

export default Nav;
