import Airtable from "airtable";
const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: apiKey,
});

const base = Airtable.base(baseId);

export default base;