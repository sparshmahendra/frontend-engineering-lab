# Modal — Beginner

## Goal

Build a simple modal component using basic React concepts.

The goal is to understand how a modal works before introducing reusable component patterns, accessibility, portals, or advanced architecture.

---

## Scenario

You are building a simple settings page.

When the user clicks a button, a modal should appear containing some information.

The user should be able to close the modal using a close button.

---

## Requirements

Build a modal that can:

- Open when the user clicks a button.
- Close when the user clicks the close button.
- Display a title.
- Display content.
- Display a backdrop behind the modal.
- Center the modal on the screen.
- Use a dialog element or dialog role for the modal.

---

## Constraints

For this exercise:

- Use React state.
- Use basic JSX.
- Use basic CSS.
- Do not use a component library.
- Do not use a modal/dialog library.
- Do not use React portals.
- Do not implement advanced accessibility behavior yet.
- Do not use external state-management libraries.

The goal is to understand the fundamentals.

---

## Expected Behavior

Initial state:

    [ Open Settings ]

After clicking the button:

    ┌──────────────────────────────┐
    │ Settings                 X   │
    │                              │
    │ This is the settings modal.  │
    │                              │
    └──────────────────────────────┘

Clicking `X` closes the modal.

---

## What You Should Learn

By completing this exercise you should understand:

- React state
- Conditional rendering
- Event handling
- Component rendering
- Basic component structure
- Basic CSS positioning

---

## Tasks

### Task 1

Create a state variable that represents whether the modal is open.

### Task 2

Create a button that opens the modal.

### Task 3

Render the modal only when it is open.

### Task 4

Add a close button.

### Task 5

Add a backdrop.

### Task 6

Style the modal so that it appears centered on the screen.

---

## Hints

Try solving the exercise without looking at the solution first.

Hint 1:

You need state that can represent:

    open
    closed

Hint 2:

Think about conditional rendering.

Hint 3:

The close button should update the same piece of state that controls whether the modal is visible.

---

## Definition of Done

The exercise is complete when:

- [ ] The modal starts closed.
- [ ] Clicking the open button opens it.
- [ ] The modal displays the expected content.
- [ ] Clicking the close button closes it.
- [ ] A backdrop appears behind it.
- [ ] The modal is centered.
- [ ] No external UI libraries are used.
- [ ] The modal has basic dialog semantics.

---

## What This Version Deliberately Does NOT Solve

This beginner implementation intentionally does not solve:

- Keyboard navigation
- Escape-to-close
- Focus management
- Focus restoration
- Screen-reader behavior
- Portals
- Body scroll locking
- Controlled/uncontrolled APIs
- Compound components
- Advanced animations
- SSR considerations
- Advanced testing

Those problems will appear in later stages.

---

## Next Stage

Once this implementation works, continue to:

**Intermediate → Modal**
