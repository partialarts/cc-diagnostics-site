import Airtable from "airtable";
const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: apiKey,
});

const base = Airtable.base("appCfHeiwqePN27kL");

export default base;