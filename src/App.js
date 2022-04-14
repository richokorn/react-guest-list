/** @jsxImportSource @emotion/react */
import ATopCard from './components/ATopCard';
import BListCard from './components/BListCard';
import { appleWrapper, ySpacer, yWrapper } from './components/emotionCSS';

export default function App() {
  // API functions
  const baseURL = 'https://guest-list-for-react.herokuapp.com/';

  // Create New Guest
  async function addGuest(firstName, lastName) {
    const response = await fetch(`${baseURL}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName }),
    });
    const createdGuest = await response.json();
    return createdGuest;
  }
  // Get All Guests
  async function getAllGuests() {
    const response = await fetch(`${baseURL}/guests`);
    const allGuests = await response.json();
    return allGuests;
  }

  // Get A Single Guest By ID
  async function getSingleGuest(id) {
    const response = await fetch(`${baseURL}/guests/${id}`);
    const singleGuest = await response.json();
    return singleGuest;
  }

  // Update A Single Guest By ID
  async function updateSingleGuest(id, attending) {
    const response = await fetch(`${baseURL}/guests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending }),
    });
    const updatedGuest = await response.json();
    return updatedGuest;
  }

  // Delete A Single Guest By ID
  async function deleteSingleGuest(id) {
    const response = await fetch(`${baseURL}/guests/${id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    return deletedGuest;
  }

  return (
    <div>
      <div css={[yWrapper, appleWrapper]}>
        <div css={ySpacer} />
        <div css={ySpacer} />
        <ATopCard />
        <div css={ySpacer} />
        <div css={ySpacer} />
        <BListCard />
      </div>
    </div>
  );
}
