import axios from "axios";

const getApi=async()=>{
    try {
        const response=await axios.get('https://www.boredapi.com/api/activity');
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}
getApi()
const fetchApi=async()=>{
    try {
        const response=await axios.get('https://www.boredapi.com/api/activity');
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}
fetchApi()