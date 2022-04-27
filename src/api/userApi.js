import axios from "axios";

const rootUrl = "http://localhost:5050/v1/user";
const loginUrl = rootUrl+"/login"
const userProfileUrl = rootUrl

export const userLogin = (formData) => {
    return new Promise(async(resolve,reject)=>{
        try {
            const result = await axios.post(loginUrl, formData) 
            resolve(result.data)
            /**
             * Access JWT in session Storage
             * Refresh JWT in local Storage
             */

            if(result.data.status === 'success'){
                localStorage.setItem('crm-refreshJWT', JSON.stringify({refrshJWT: result.data.refreshJWT}))
                sessionStorage.setItem('accesssJWT',result.data.accessJWT)
            }
        } catch (error) {
            reject(error)
        }
    })
}

export const fetchUserProfile = () => {
    return new Promise(async(resolve,reject)=>{
        try {
            const accessToken = sessionStorage.getItem('accesssJWT')
            if(!accessToken){
                reject('No access token')
            }
            const result = await axios.get(userProfileUrl,{
                headers: {
                    'Authorization': accessToken
                }
            }) 
            resolve(result.data)
        } catch (error) {
            reject(error)
        }
    })
}

export const userLogout = async () => {
        try {
            const accessToken = sessionStorage.getItem('accesssJWT')
            await axios.delete(rootUrl+'/logout',{
                headers: {
                    'Authorization': accessToken
                }
            }) 
            resolve(result.data)
        } catch (error) {
            reject(error)
        }
    
}