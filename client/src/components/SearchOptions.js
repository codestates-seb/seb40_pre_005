import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  width: 750px;
  position: absolute;
  border-radius: 10px;
  top: 45px;
  background-color: white;
  font-family: monospace;
  font-size: 15px;
`;

const HintContainer = styled.div`
  width: 100%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5px;
  column-gap: 5px;
  padding: 10px;
`;

const HintSpan = styled.span`
  margin-right: 5px;
`;

const ExplanationSpan = styled.span`
  color: var(--black-400);
`;

const options = [
  { hint: '[tag]', explanation: 'search within a tag', id: 1 },
  { hint: 'answers:0', explanation: 'unanswered questions', id: 2 },
  { hint: 'user:1234', explanation: 'search by author', id: 3 },
  { hint: 'score:3', explanation: 'posts with a 3+ score', id: 4 },
  { hint: '"words here"', explanation: 'exact phrase', id: 5 },
  { hint: 'is:question', explanation: 'type of post', id: 6 },
  { hint: 'collective:"Name"', explanation: 'collective content', id: 7 },
  { hint: 'isaccepted:yes', explanation: 'search within status', id: 8 },
];

const Hint = ({ hint, explanation }) => {
  return (
    <div>
      <HintSpan>{hint}</HintSpan>
      <ExplanationSpan>{explanation}</ExplanationSpan>
    </div>
  );
};

const SearchOptions = () => {
  return (
    <OptionContainer>
      <HintContainer>
        {options.map((e) => {
          return <Hint key={e.id} hint={e.hint} explanation={e.explanation} />;
        })}
      </HintContainer>
    </OptionContainer>
  );
};

export default SearchOptions;
