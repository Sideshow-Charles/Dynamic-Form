Payload Mapping: Implemented a transformation layer in onFinish to convert the UI-centric personKey (ID + Name) back into the numeric person_id required by the SubmitItem interface.
Validation: Implemented custom validators for the Age field to ensure data integrity within the 1–120 range, alongside standard regex-based email validation
