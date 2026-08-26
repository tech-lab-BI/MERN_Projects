const API_URL = import.meta.env.VITE_API_URL;

export function getAllData(){
    fetch(`${API_URL}/`).then(() => {
        console.log("Call successful.");
    })
}