import axios from 'axios';
export const axiosLoginAuth = () => {
   const token = localStorage.getItem('token');
   return axios.create({
       headers: {
           'Content-Type': 'application/json',
           'Authorization': ${token},
       },
   });
};