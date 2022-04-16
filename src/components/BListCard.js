/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { deleteGuestById, updateAttendanceById } from './CRUDfunctions';
import {
  cardBody,
  cardHeader,
  cardStyle,
  deleteGuest,
  hr,
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
  // we want to map the list of guests as li elements, with some nice styling

  const { innerHeight, innerWidth } = useWindowDimensions();

  const listItems = props.allGuests.map((guest) => (
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
                  minWidth: innerWidth > 700 ? 'min-content' : 'auto',
                  width: innerWidth > 700 ? '15%' : 'auto',
                }
              : {
                  border: innerWidth > 700 ? '2px solid red' : null,
                  color: 'red',
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
          <em>
            {innerWidth > 700 ? 'Click' : 'Tap'} checkbox to toggle attendance
          </em>
          <div css={[hr, ySpacer]} />
          {!props.allGuests ? (
            <div>
              <em>Loading...</em>
            </div>
          ) : (
            <ul style={{ margin: 0, alignItems: 'center' }}>
              {listItems.length ? listItems : 'No Guests'}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
