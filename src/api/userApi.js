import axios from "axios";

export const userLogin = (formData) => {
    return new Promise(async(resolve,reject)=>{
        try {
            const result = await axios.post("http://localhost:5050/v1/user/login", formData) 
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