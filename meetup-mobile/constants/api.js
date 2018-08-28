export const fetchMeetups = ()=>{
    return fetch("http://localhost:8964/api/meetups")
    .then(res => res.json());
}