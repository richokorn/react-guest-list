/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import {
  cardBody,
  cardHeader,
  cardStyle,
  hr,
  xSpacer,
  xWrapper,
  ySpacer,
  yWrapper,
} from './emotionCSS';

export default function ATopCard() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div css={[yWrapper, cardStyle]} /* Outest */>
        <div
          css={cardHeader}
          style={{ backgroundColor: 'white', h2: { color: '#41579A' } }}
        >
          <h2>React Guest List</h2>
        </div>
        <div css={[cardBody, yWrapper]} style={{ backgroundColor: '#41579A' }}>
          <h2>enter guest details here</h2>
          <div css={ySpacer} />
          <div css={xWrapper} style={{ width: '100%' }}>
            <div css={[yWrapper, xSpacer]}>
              <label htmlFor="attending">Attending?</label>
              <div css={ySpacer} />
              <input
                value={isChecked}
                type="checkbox"
                id="attending"
                onChange={(event) => {
                  setIsChecked(event.target.checked);
                }}
              />
            </div>
            <div css={yWrapper} style={{ width: 'fit-content' }}>
              <label htmlFor="firstName">First Name</label>
              <div css={ySpacer} />
              <input id="firstName" placeholder="First Name" />
            </div>
            <div css={yWrapper} style={{ width: 'fit-content' }}>
              <label htmlFor="lastName">Last Name</label>
              <div css={ySpacer} />
              <input id="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div css={ySpacer} />
          <div css={hr} />
          <div css={ySpacer} />
        </div>
      </div>
    </div>
  );
}
