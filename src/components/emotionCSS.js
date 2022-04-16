/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Building Blocks

export const xWrapper = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  /* align-items: center; */
`;

export const yWrapper = css`
  display: flex;
  flex-direction: column;

  /* justify-content: space-between; */
`;

export const xSpacer = css`
  margin-left: 0.5em;
  margin-right: 0.5em;
  // shorthand: https://developer.mozilla.org/en-US/docs/Web/CSS/flex
`;

export const ySpacer = css`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const hr = css`
  /* border: 0; */
  height: 1px;
  background-color: white;
`;

export const appleWrapper = css`
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  max-width: 1080px;
`;

// ATopCard + BListCard
export const cardStyle = css`
  display: flex;
  position: relative;
  justify-content: left;

  border-radius: 24px;
  background-color: #00000000;
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.9);
`;

export const cardHeader = css`
  display: flex;
  padding: 1em 1em;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  border-radius: 24px 24px 0 0;
  box-shadow: 0px 3px 2px -1px #00000044;
  z-index: 999;

  h2 {
    margin: auto 0;
    font-size: 36px;
    background-color: white;
    color: #41579a;
  }
`;

export const cardBody = css`
  display: flex;
  padding: 1em 1em;
  border-radius: 0 0 24px 24px;
  color: white;
`;

export const addGuest = css`
  transition: 0.1s ease-in-out;

  &:hover {
    color: #034b03;
    border: 2px solid #034b03;
    background: white;
  }

  &,
  &:active {
    color: white;
    border: 2px solid white;
    background: #034b03;
  }
`;

export const deleteGuest = css`
  transition: 0.1s ease-in-out;
  min-width: 20%;

  &:hover {
    color: #911f21;
    border: 2px solid #911f21;
    background: white;
  }

  &,
  &:active {
    color: white;
    border: 2px solid white;
    background: #911f21;
  }
`;

export const sorterStyle = css`
  display: flex;
  flex-flow: row nowrap;

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 0;
    padding: 0;
  }

  input[type='checkbox'] {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 1em;
    height: 1em;
    border: 0;
  }
`;
