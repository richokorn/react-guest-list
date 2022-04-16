Create a guest list app using React that allows for:

- [x] Adding a guest using separate first name and last name fields
  - [x] The first name input needs to have a related label containing `First name`
  - [x] The last name input needs to have a related label containing `Last name`
  - [x] After a guest is created, both fields need to be cleared again
  - [x] Newly created guests should be set as **not attending** by default
  - [ ] Each guest (all content and form fields) should be contained inside a div element with the attribute `data-test-id="guest"`
- [ ] Deleting a guest with a button that has **either**:
  - [x] Contain the text `Remove`
  - [x] Have an `aria-label` attribute which starts with `Remove` (eg. `Remove <first name> <last name>`)
- [x] Setting a guest as "attending" by clicking on a checkbox
  - [x] The checkbox needs to have an `aria-label` which contains the text `attending` (eg. `<first name> <last name> attending status`) - the text can be uppercase or lowercase
  - [x] On the first click of the attending checkbox, the guest needs to be set to attending (the checkbox needs to be checked)
  - [x] On the second click of the attending checkbox, the guest needs to be set to not attending (the checkbox needs to be unchecked)
- [x] Set up [this API](https://github.com/upleveled/express-guest-list-api-memory-data-store) and read the docs to understand how you can use it to store and retrieve data:
  - [x] Save any changes to the API
  - [x] Load the guest list from this API
- [x] While the guest list is first loaded from the API (on page load):
  - [x] Show a loading message containing the text `Loading...`
  - [x] Disable the form fields

The default view should show all guests in the list.

Some features are similar to [this example](https://todomvc.com/examples/react/#/) - check this out to see how the app should generally behave.

## Stretch TODOs

- [x] Button to delete all attending guests
- [x] Filters:
  - [x] Filter to show only non-attending guests
  - [x] Filter to show only attending guests
  - [x] Button to reset filters to again show all of the guests

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: Netlify deployed website
- [ ] Link to CodeSandbox in comment below
- [ ] [Drone bot](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-git-github/#writing-commit-messages))
