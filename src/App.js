/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const mainHeading = css`
  text-align: center;
  font-weight: bold;
  color: skyblue;
`;

function App() {
  return (
    <div className="App">
      <h1 css={mainHeading}>Boilerplate FTW</h1>
    </div>
  );
}

export default App;
