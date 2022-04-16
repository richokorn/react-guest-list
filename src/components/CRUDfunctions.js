// API functions
export const baseURL = 'https://api-guest-list.herokuapp.com';

// Getting all guests (aka GET /guests)
export async function getAllGuests() {
  const response = await fetch(`${baseURL}/guests`);
  const allGuests = await response.json();
  return allGuests;
}

// Get A Single Guest By ID
export async function getSingleGuest(id) {
  const response = await fetch(`${baseURL}/guests/${id}`);
  const singleGuest = await response.json();
  return singleGuest;
}

// Update A Single Guest By ID
export async function updateAttendanceById(id, attending) {
  const response = await fetch(`${baseURL}/guests/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: attending }),
  });
  const updatedGuest = await response.json();
  return updatedGuest;
}

// Delete A Single Guest By ID
export async function deleteGuestById(id) {
  const response = await fetch(`${baseURL}/guests/${id}`, {
    method: 'DELETE',
  });
  const deletedGuest = await response.json();
  return deletedGuest;
}

// Delete All Guests By Id Using Array Length
export async function deleteAllGuests() {
  console.log("deleteAllGuests() fired");
  const allGuests = await getAllGuests();
  console.log("CRUDfunctions deleteAllGuests await getAllGuests(): ", allGuests);
  const allGuestsLength = allGuests.length;
  console.log("CRUDfunctions deleteAllGuests allGuestsLength: ", allGuestsLength);
  for (let i = 0; i < allGuestsLength; i++) {
    await deleteGuestById(allGuests[i].id);
  }
}
