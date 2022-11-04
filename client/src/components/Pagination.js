import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 100px;
`;

const PageButton = styled.button`
  background-color: #fff;
  color: rgb(59, 64, 69);
  width: 24px;
  height: 27px;
  border-radius: 3px;
  border: 1px solid rgb(214, 217, 220);
  font-size: 13px;

  margin-right: 4px;
  cursor: pointer;

  ${(p) =>
    p.isActive &&
    css`
      background-color: rgb(244, 130, 37);
      border: 1px solid transparent;
      color: #fff;
    `}
`;

const Pagination = ({
  selectedPage,
  setSelectedPage,
  totalElements,
  pageSize,
}) => {
  const totalPageNumber = Math.ceil(totalElements / pageSize);

  const handlePageButtonClick = (newPageNumber) => {
    setSelectedPage(newPageNumber);
  };

  return (
    <Wrapper>
      {Array(totalPageNumber)
        .fill(null)
        .map((_, index) => (
          <PageButton
            key={index}
            onClick={() => handlePageButtonClick(index + 1)}
            isActive={index + 1 === selectedPage}
          >
            {index + 1}
          </PageButton>
        ))}
    </Wrapper>
  );
};

export default Pagination;
