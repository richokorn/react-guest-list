/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import {
  addGuest,
  cardBody,
  cardHeader,
  cardStyle,
  hr,
  xSpacer,
  xWrapper,
  ySpacer,
  yWrapper,
} from './emotionCSS';
import { useWindowDimensions } from './useWindowDimensions';

// Create a useWindowDimensions hook:

export default function ATopCard(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameFieldWarning, setFirstNameFieldWarning] = useState(false);
  const [lastNameFieldWarning, setLastNameFieldWarning] = useState(false);
  const { innerWidth } = useWindowDimensions();

  // Abstract the addGuest function to a separate function so we can call it with an onClick and onKeyPress

  async function addTheGuest() {
    if (firstName === '' || lastName === '') {
      if (firstName === '') {
        setFirstNameFieldWarning(true);
      }
      if (lastName === '') {
        setLastNameFieldWarning(true);
      }
    } else {
      await props.addGuest(firstName, lastName);
      setFirstName('');
      setLastName('');
    }
  }

  async function onKeyPressed(e) {
    if (e.key === 'Enter') {
      await addTheGuest();
      document.getElementById('firstName').focus();
    }
  }

  return (
    <div>
      <div css={[yWrapper, cardStyle]} /* Outest */>
        <div
          css={[cardHeader, xWrapper]}
          style={{
            display: 'space-between',
            backgroundColor: 'white',
            h2: { color: '#41579A' },
          }}
        >
          <h2>React Guest List</h2>
        </div>
        <div css={[cardBody, yWrapper]} style={{ backgroundColor: '#41579A' }}>
          <div css={xWrapper} style={{ display: 'space-between' }}>
            <h2>enter guest details here</h2>
            <em>
              You can also hit <strong>Enter</strong> to Add Guest
            </em>
          </div>
          <div css={[hr, ySpacer]} />
          <div
            css={xWrapper}
            style={{ width: '100%', justifyContent: 'space-between' }}
          >
            <div css={yWrapper} style={{ flex: 'auto' }}>
              <label htmlFor="firstName">First name</label>
              <input
                disabled={!props.allGuests}
                style={
                  firstNameFieldWarning
                    ? { outline: 'none', boxShadow: '0px 0px 3px 3px red' }
                    : null
                }
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                onFocusCapture={() => {
                  setFirstNameFieldWarning(false);
                }}
                onKeyDown={onKeyPressed}
              />
            </div>
            <div css={innerWidth > 699 ? xSpacer : null} />
            <div css={yWrapper} style={{ flex: 'auto' }}>
              <label htmlFor="lastName">Last name</label>
              <input
                disabled={!props.allGuests}
                style={
                  lastNameFieldWarning
                    ? { outline: 'none', boxShadow: '0px 0px 3px 3px red' }
                    : null
                }
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                onFocusCapture={() => {
                  setLastNameFieldWarning(false);
                }}
                onKeyDown={onKeyPressed}
              />
            </div>
          </div>
          <div css={[hr, ySpacer]} />
          <button
            css={addGuest}
            onClick={async () => {
              await addTheGuest();
            }}
            // onKeyDown={async (event) => {
            //   await handleKeyDown(event);
            // }}
          >
            Add Guest
          </button>
        </div>
      </div>
    </div>
  );
}
