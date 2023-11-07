import { API_URL } from "../lib/Enviroments";

export const getAllJobs = async () =>{
    const response = await fetch(`${API_URL}/job`)
    const data = await response.json()
    return {data}
}