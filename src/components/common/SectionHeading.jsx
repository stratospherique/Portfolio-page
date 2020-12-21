import React from "react";
import styled from "styled-components";

const SectionHeadingContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-items: flex-start;

  & > h2 {
    color: red;
  }
`;

const SectionHeading = ({ text }) => (
  <SectionHeadingContainer>
    <h2>
      {text}
    </h2>
  </SectionHeadingContainer>
);

export default SectionHeading;