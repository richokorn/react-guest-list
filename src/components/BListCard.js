/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import {
  deleteAllGuests,
  deleteGuestById,
  updateAttendanceById,
} from './CRUDfunctions';
import {
  cardBody,
  cardHeader,
  cardStyle,
  deleteGuest,
  deleteGuests,
  hr,
  sorterStyle,
  xSpacer,
  xWrapper,
  ySpacer,
  yWrapper,
} from './emotionCSS';
import { useWindowDimensions } from './useWindowDimensions';

const attendanceStyle = css`
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
  justify-content: center;
  border-radius: 0.25em;
`;

export default function BListCard(props) {
  // This we need to control a number of stylings.
  const { innerWidth } = useWindowDimensions();

  // console log the attending guests
  const [attendingGuestsToggle, setAttendingGuestsToggle] = useState(false);
  const [notAttendingGuestsToggle, setNotAttendingGuestsToggle] =
    useState(false);
  let attendingGuests = [];
  let notAttendingGuests = [];
  let variableToMap = [];

  if (props.allGuests) {
    attendingGuests = props.allGuests.filter(
      (guest) => guest.attending === true,
    );
    notAttendingGuests = props.allGuests.filter(
      (guest) => guest.attending === false,
    );
  }

  if (attendingGuestsToggle && !notAttendingGuestsToggle) {
    variableToMap = attendingGuests;
  } else if (!attendingGuestsToggle && notAttendingGuestsToggle) {
    variableToMap = notAttendingGuests;
  } else if (attendingGuestsToggle && notAttendingGuestsToggle) {
    variableToMap = props.allGuests;
  } else {
    variableToMap = props.allGuests;
  }

  // We want to map the list of guests as li elements, with some nice styling

  let listItems;

  if (props.allGuests) {
    listItems = variableToMap.map((guest) => (
      <li
        key={guest.id}
        css={yWrapper}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div css={xWrapper}>
          <div style={{ width: '2em' }}>
            <input
              title={`Click to mark ${guest.firstName} ${guest.lastName} as ${
                !guest.attending ? 'attending' : 'not attending'
              }`}
              aria-label={`Click to mark ${guest.firstName} ${
                guest.lastName
              } as ${!guest.attending ? 'attending' : 'not attending'}`}
              style={{
                margin: 0,
              }}
              type="checkbox"
              checked={guest.attending}
              onChange={async (event) => {
                const updatedGuest = await updateAttendanceById(
                  guest.id,
                  event.target.checked,
                );
                props.setAllGuests(
                  props.allGuests.map((g) =>
                    g.id === updatedGuest.id ? updatedGuest : g,
                  ),
                );
              }}
            />
          </div>
          <div
            css={attendanceStyle}
            style={
              guest.attending
                ? {
                    border: innerWidth > 700 ? '2px solid white' : null,
                    color: 'white',
                    fontWeight: 'bold',
                    minWidth: innerWidth > 700 ? 'min-content' : 'auto',
                    width: innerWidth > 700 ? '15%' : 'auto',
                  }
                : {
                    border: innerWidth > 700 ? '2px solid red' : null,
                    color: 'red',
                    fontWeight: 'bold',
                    minWidth: innerWidth > 700 ? 'min-content' : 'auto',
                    width: innerWidth > 700 ? '15%' : 'auto',
                  }
            }
          >
            {' '}
            {innerWidth > 718
              ? guest.attending
                ? 'Attending'
                : 'Not Attending'
              : null}
          </div>
          <div
            style={{
              display: 'flex',
              flex: 'auto',
              alignItems: 'center',
              paddingLeft: innerWidth > 700 ? null : '2%',
              marginRight: '2%',
              borderRadius: innerWidth > 700 ? null : '0.25em',
              border:
                innerWidth < 700
                  ? guest.attending
                    ? '2px solid white'
                    : '2px solid red'
                  : null,
              overflow: 'wrap',
            }}
          >
            {guest.firstName} {guest.lastName}
          </div>
          <div style={{ minWidth: 'auto' }}>
            <button
              style={{
                minWidth: '2em',
                paddingLeft: innerWidth > 700 ? '0.5em' : null,
                paddingRight: innerWidth > 700 ? '0.5em' : null,
              }}
              aria-label={`Remove ${guest.firstName} ${guest.lastName}`}
              title={`Remove ${guest.firstName} ${guest.lastName}`}
              css={deleteGuest}
              onClick={async () => {
                await deleteGuestById(guest.id);
                props.setAllGuests(
                  props.allGuests.filter((g) => g.id !== guest.id),
                );
              }}
            >
              {innerWidth > 700 ? 'Remove' : '❌'}
            </button>
          </div>
        </div>
        <div css={[ySpacer, hr]} />
      </li>
    ));
  }

  if (!props.allGuests) {
    return (
      <div>
        <div css={[cardStyle, yWrapper]} /* Outest */>
          <div
            css={cardHeader}
            style={{ backgroundColor: 'white', h2: { color: '#324376' } }}
          >
            <h2 style={{ fontSize: 24 }}>List of Guests</h2>
          </div>
          <div
            css={[cardBody, yWrapper]}
            style={{ backgroundColor: '#324376' }}
          >
            <em>
              {innerWidth > 700 ? 'Click' : 'Tap'} checkbox to toggle attendance
            </em>
            <div css={[hr, ySpacer]} />
            <em>Loading...</em>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div css={[cardStyle, yWrapper]} /* Outest */>
        <div
          css={[cardHeader, xWrapper]}
          style={{ backgroundColor: 'white', h2: { color: '#324376' } }}
        >
          <h2 style={{ fontSize: 24 }}>List of Guests</h2>
          <button
            css={deleteGuests}
            style={{ height: '100%' }}
            onClick={async () => {
              await deleteAllGuests();
              props.setAllGuests([]);
            }}
          >
            {innerWidth > 700 ? 'Delete All' : '❌ All'}
          </button>
        </div>
      </div>
      <div css={[cardBody, yWrapper]} style={{ backgroundColor: '#324376' }}>
        <div css={xWrapper} style={{ display: 'space-between' }}>
          <div css={yWrapper}>
            <div css={[xWrapper, sorterStyle]}>
              <label htmlFor="attendingGuestsToggle">Sort by Attending</label>
              <div css={xSpacer} />
              <input
                id="attendingGuestsToggle"
                type="checkbox"
                checked={attendingGuestsToggle}
                onChange={(event) => {
                  setAttendingGuestsToggle(event.target.checked);
                  if (notAttendingGuestsToggle) {
                    setNotAttendingGuestsToggle(false);
                  }
                }}
              />
            </div>
            <div css={[xWrapper, sorterStyle]}>
              <label htmlFor="notAttendingGuestsToggle">
                Sort by Not Attending
              </label>
              <div css={xSpacer} />
              <input
                id="notAttendingGuestsToggle"
                type="checkbox"
                checked={notAttendingGuestsToggle}
                onChange={(event) => {
                  setNotAttendingGuestsToggle(event.target.checked);
                  if (attendingGuestsToggle) {
                    setAttendingGuestsToggle(false);
                  }
                }}
              />
            </div>
          </div>
          <em>
            {innerWidth > 700 ? 'Click ' : 'Tap'} guest checkbox to toggle
            attendance
          </em>
        </div>
        <div css={[hr, ySpacer]} />
        {listItems.length === 0 ? (
          <em>No Guests</em>
        ) : (
          <ul style={{ margin: 0 }}>{listItems}</ul>
        )}
      </div>
    </div>
  );
}
