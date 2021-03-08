import React from "react";
import styled from "styled-components";
import { TopFive } from "../components";

export default {
  title: "TopFive",
  component: TopFive,
};

const mockTopFive = [
  {
    name: "Bruce Pizza",
    number: 22,
    position: 1,
  },
  {
    name: "Brent Eckert",
    number: 37,
    position: 4,
  },
  {
    name: "Ken Roczen",
    number: 94,
    position: 5,
  },
  {
    name: "Eli Tomac",
    number: 1,
    position: 3,
  },
  {
    name: "Justin Barcia",
    number: 51,
    position: 2,
  },
];

export const DesktopTopFive = () => {
  return <TopFive riders={mockTopFive} />;
};

const MobileContainer = styled.div`
  width: 350px;
`;

export const MobileTopFive = () => {
  return (
    <MobileContainer>
      <TopFive riders={mockTopFive} />
    </MobileContainer>
  );
};
