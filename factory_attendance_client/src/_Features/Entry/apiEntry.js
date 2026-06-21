import {backURL} from "../../vars.jsx";
const section = "ATT";

async function AddEntry(formData) {
    let url=`${backURL}/${section}/Entry`;
    const strToSend = JSON.stringify(formData);
    const response = await fetch(url, {
        method: 'POST',
        headers: {'accept': 'application/json','Content-Type': 'application/json'},
        body: strToSend,
        credentials: 'include'
    });
    if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
    return response.json();
}
export{ AddEntry }
