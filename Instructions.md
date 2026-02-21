# Frontend Assessment Instructions

## Overview
Build the "People Configuration" form in [src/components/PeopleConfigForm.tsx](src/components/PeopleConfigForm.tsx). The UI is already built, so your work is focused on completing the TODOs that wire up behavior, validation, and payload construction.

## What to build
- A multi-select to choose people (data from `useMockPeople`).
- For each selected person, render a section with fields:
  - Name (pre-filled with the selected person's name)
  - Age
  - Email
- A submit button that sends a payload using `useMockSubmit`.

## Requirements
- Use the provided hooks:
  - `useMockPeople()` to load people
  - `useMockSubmit()` to submit the payload
- Use Ant Design components: `Form`, `Select`, `Input`, `Button`, `Spin`, `message`.
- Validate form inputs:
  - Name: required
  - Age: required, numeric, between 1 and 120
  - Email: required, valid email format
- Disable the submit button when no people are selected.
- Build the submit payload as an array of `SubmitItem` objects:
  - `person_id`: the numeric id from the selected person
  - `name`, `age`, `email`: from the per-person fields
- Show success/error feedback using `message` based on the `useMockSubmit` response.
- Do not modify the mock hooks in [src/hooks](src/hooks).

## Local setup
1. Install dependencies:
   - `pnpm install`
2. Start the dev server:
   - `pnpm dev`

## Deliverable
- A working implementation of the People Configuration form that satisfies the requirements above.
