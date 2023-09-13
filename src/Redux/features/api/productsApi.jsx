import axios from "../../utilis/axios.config"


export const getProduct = async()=>{
   const data = await  axios.get('/computer');
  //  console.log('check',data);
    return data.data
}
export const postProduct = async(postData)=>{
  console.log('ki hlolo',postData);
  await axios.post('/computer',postData);
   
  
}
export const deleteProduct = async(id)=>{
  console.log('ki hlolo',id);
  await axios.delete(`/computer/${id}`);
   
  
}