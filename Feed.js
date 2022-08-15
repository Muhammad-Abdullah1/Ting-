import React from 'react';
import './Feed.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Feed = () => {

  const [getimg,setgetimg]=useState([])
  const [loading,setloading]=useState(false)
  const UploadImage = (e) => {
    const token = localStorage.getItem('auth')
    const files = e.target.files[0]
    const formdata = new FormData()
    formdata.append('imageUrl', files)
    axios('http://34.125.201.35:8000/api/addFeed', {
      method: "POST",
      data: formdata,
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
     
    }).then((response) => {
      if(response.data){
     alert("image uploaded successfully")
      loading?setloading(false):setloading(true)
    }
    else{
     alert("Image type is not valid")
    }
    })
.catch((error)=>{
  console.log(error.toJson())
})
  }
  const GetImage = async() => {
    const token = localStorage.getItem('auth')
   const response= await axios('http://34.125.201.35:8000/api/Feeds', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
     
    })
    const result=await response.data;
    setgetimg(result.data)
  }
  useEffect(()=>{
    GetImage();
  },[loading])
  const deleteImage=async(id)=>{
    const token=localStorage.getItem('auth')
    const response=await axios('http://34.125.201.35:8000/api/deleteFeed/'+id,{
      
    method:"DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
    })
    .then((response)=>{
      alert("Image deleted successfully")
      loading?setloading(false):setloading(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
    
      <div className="d-flex justify-content-end">
    
    <input type='file' className='icon-align' onChange={UploadImage} name="imageUrl" />
   
      </div>
      

   
      <div className="d-flex justify-content-center">
        
        <h2 className='feed text-center'>Feed</h2>
        
      </div>
      
      <div className='container'>
       
              <div className="row">
              {
         getimg&& getimg.map((el)=>{
            return(
          <div className="col-lg-3 col-md-6 col-sm-12 mb-1"> 
          <i class="bi bi-trash3-fill icon-align d-flex justify-content-end p-1" onClick={()=>deleteImage(el.id)} />
          <img src={el.imageUrl} className="w-100 img-fluid "/>
          </div>
        
            )
          })
        }
        </div>

      </div>
    </>

  )
}


export default Feed