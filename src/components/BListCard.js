/** @jsxImportSource @emotion/react */
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

export default function BListCard() {
  return (
    <div>
      <div css={[cardStyle, yWrapper]} /* Outest */>
        <div
          css={cardHeader}
          style={{ backgroundColor: 'white', h2: { color: '#324376' } }}
        >
          <h2 style={{ fontSize: 24 }}>List of Guests</h2>
        </div>
        <div css={[cardBody, yWrapper]} style={{ backgroundColor: '#324376' }}>
          <h2>enter guest details here</h2>

          <div css={ySpacer} />
          <div css={hr} />
          <div css={ySpacer} />
        </div>
      </div>
    </div>
  );
}
