/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import ATopCard from './components/ATopCard';
import BListCard from './components/BListCard';
import { baseURL, getAllGuests } from './components/CRUDfunctions';
import { appleWrapper, ySpacer, yWrapper } from './components/emotionCSS';

export default function App() {
  const [allGuests, setAllGuests] = useState();

  // addGuest in a useCallback Hook using firstName and lastName
  const addGuest = useCallback(
    async (firstName, lastName) => {
      const response = await fetch(`${baseURL}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
      });
      const data = await response.json();
      setAllGuests([...allGuests, data]);
    },
    [allGuests],
  );

  // get list of guests from api
  useEffect(() => {
    async function fetchAllGuests() {
      const updatedAllGuests = await getAllGuests();

      console.log('useEffectLoopCheck');

      updatedAllGuests.length === 0
        ? setAllGuests([])
        : setAllGuests(updatedAllGuests);
    }
    fetchAllGuests().catch((error) =>
      console.log('CRUDfunctions.js fetchAllGuests().catch((error): ', error),
    );
  }, []);

  return (
    <div>
      <div css={[yWrapper, appleWrapper]}>
        <div css={ySpacer} />
        <div css={ySpacer} />
        <ATopCard addGuest={addGuest} setAllGuests={setAllGuests} />
        <div css={ySpacer} />
        <div css={ySpacer} />
        <BListCard allGuests={allGuests} setAllGuests={setAllGuests} />
        <div css={ySpacer} />
        <div css={ySpacer} />
      </div>
    </div>
  );
}
