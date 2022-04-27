import axios from 'axios'

export const getAllTickets = () => {
    return new Promise(async (resolve,reject)=>{
        try{
            const result = axios.get(
                'http://localhost:5050/v1/ticket',
                {headers:{
                    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlbXBAYWJjLmNvbSIsImlhdCI6MTY1MDk5NDU5NywiZXhwIjoxNjUxMDgwOTk3fQ.qLpd3aqksOq04ge2KPpwQkdub6nyq2vIdVWDMVZ0s1s`
                }}
            )
            resolve(result)
        } catch(error) {
            reject(error)
        }
    })
}