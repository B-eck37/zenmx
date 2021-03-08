import styled from "styled-components";

export default styled.div`
  .podium-container {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .five {
      grid-row: 5;
      grid-column: 1;
      background-color: teal;
    }

    .four {
      grid-row: 4 / span 2;
      grid-column: 2;
      background-color: tomato;
    }

    .three {
      grid-row: 3 / span 3;
      grid-column: 3;
      background-color: purple;
    }

    .two {
      grid-row: 2 / span 4;
      grid-column: 4;
      background-color: limegreen;
    }

    .one {
      grid-row: 1 / span 5;
      grid-column: 5;
      background-color: hotpink;
    }
  }
  .podium-container {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .five {
      grid-row: 5;
      grid-column: 1;
      background-color: teal;
    }

    .four {
      grid-row: 4 / span 2;
      grid-column: 2;
      background-color: tomato;
    }

    .three {
      grid-row: 3 / span 3;
      grid-column: 3;
      background-color: purple;
    }

    .two {
      grid-row: 2 / span 4;
      grid-column: 4;
      background-color: limegreen;
    }

    .one {
      grid-row: 1 / span 5;
      grid-column: 5;
      background-color: hotpink;
    }
  }
`;
