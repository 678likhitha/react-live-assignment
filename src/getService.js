import axios from "axios";
export const GetProfessionalSkills = () =>{
    return axios.get("https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json")
}
export const getHobbies = () => {
    return axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json')
}
export const getFavSubject = () => {
    return axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json')
}
export const getvirtualconnects = () => {
    return axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsEthicalCodeResponse.json')
}