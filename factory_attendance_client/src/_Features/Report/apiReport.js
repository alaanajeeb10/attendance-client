import {backURL} from "../../vars.jsx";
const section = "ATT";
// Get Monthly Attendance Report
async function GetReport(worker_id, month, year) {
    let url=`${backURL}/${section}/Report?worker_id=${worker_id}&month=${month}&year=${year}`;
    const response = await fetch(url,{        method: 'GET',
        headers: {
            'accept': 'application/json'
        },
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error(`Request failed. Status: ${response.status}`);
    }    return await response.json();
}
export{ GetReport }
