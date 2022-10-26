import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const headerHeight = 50;
const SideWrapper = styled.aside`
  margin-top: ${headerHeight + 24}px;
  width: 300px;
  min-height: 400px;
  color: #525960;
  position: fixed;
  right: 0;
  top: 0;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid #feedae;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 6px -1px;
  @media screen and (max-width: 980px) {
    display: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #fdf7e2;
  }
  li {
    padding: 12px 0 0;
    &:last-of-type {
      padding-bottom: 12px;
    }
    margin: 0 16px;
    display: flex;
    &.title {
      margin: 0;
      margin-top: 12px;
      padding: 12px;
      background-color: #fbf3d5;
      border: 1px solid #feedae;
      border-left: 0;
      border-right: 0;
      &:first-of-type {
        border-top: 0;
        margin: 0;
      }
    }
    > div {
      margin-right: 8px;
    }
  }
  a {
    color: #3b4045;
    text-decoration: none;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.5;
  }
`;
const Sidebar = () => {
  return (
    <SideWrapper>
      <ul>
        <li className="title">The Overflow Blog</li>
        <li>
          <div>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <a href="#!">
            How hardware and software can maximize your flow states
          </a>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <a href="#!">
            A flight simulator for developers to practice real world challenges
            and...
          </a>
        </li>
        <li className="title">Featured on Meta</li>
        <li>
          <div>
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <a href="#!">The 2022 Community-a-thon has begun!</a>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <a href="#!">Mobile app infrastructure being decommissioned</a>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faStackOverflow} />
          </div>
          <a href="#!">Staging Ground Workflow: Canned Comments</a>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faStackOverflow} />
          </div>
          <a href="#!">The [script] tag is being burninated</a>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faStackOverflow} />
          </div>
          <a href="#!">Ask Wizard Test Graduation</a>
        </li>
      </ul>
    </SideWrapper>
  );
};

export default Sidebar;
