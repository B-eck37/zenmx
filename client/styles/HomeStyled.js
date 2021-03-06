import styled from "styled-components";

export default styled.div`
  margin: 0;
  width: 100vw;
  overflow: hidden;
  height: calc(100vh - 128px);
  margin-top: 128px;

  main {
    margin-top: 128px;
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .marquee {
    position: relative;
    padding: 0 32px;
    display: flex;
    align-items: center;
    height: 100px;
  }

  .animation-container {
    height: 100%;
    width: 450%;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    animation: scroll 75s linear infinite;
    color: ${({ currentMode }) => (currentMode ? "#282828" : "#fff")};

    > span {
      width: 300px;
      font-size: 36px;
      font-family: Arial, serif;
    }
  }

  @keyframes scroll {
    0% {
      left: 100%;
    }
    100% {
      left: -450%;
    }
  }

  .fast-lap {
    height: 65px;
    width: 350px;
    max-width: 350px;
    padding-right: 8px;
    margin-right: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ currentMode }) =>
      currentMode ? "#fff" : "#282828"};
    color: ${({ currentMode }) => (currentMode ? "#282828" : "#fff")};
    border: ${({ currentMode }) => (currentMode ? "#282828" : "aqua")} solid 1px;
  }

  .rider-image {
    background-color: #000;
    height: 100%;
    width: 65px;
  }

  footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer img {
    margin-left: 0.5rem;
  }

  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 800px;
    margin-top: 3rem;
  }

  .card {
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  .card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .logo {
    height: 1em;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
    .animation-container {
      width: 2000%;
      animation: scrollPhone 50s linear infinite;
    }
  }

  @keyframes scrollPhone {
    0% {
      left: 100%;
    }
    100% {
      left: -2000%;
    }
  }
`;
