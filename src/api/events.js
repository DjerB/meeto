import axios from 'axios';

const apiUrl = "<YOUR API URL COMES HERE>";

export const getEvents = () => axios.get(apiUrl + "/events");

export const updateEvent = (data) => axios.post(apiUrl + "/attend", { params: data, headers: {"Access-Control-Allow-Origin": "*"} });