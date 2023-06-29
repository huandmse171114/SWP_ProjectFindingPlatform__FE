import axios from "axios";

const request = axios.create({
    baseURL: "https://swpprojectfindingplatformbe-production.up.railway.app/api/",
    
})

export const get = async (url, options = {}) => {
    const response = await request.get(url, options);
    return response.data;
}

export default request;