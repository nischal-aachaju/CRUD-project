import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Createpost = () => {

  const eventHandle = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios.post("http://localhost:3000/create-post", formData)
      .then((res) => {
        console.log(res.data.message);

      })
  }
  return (
    <div className='h-screen w-full flex justify-center items-center gap-3 flex-col '>
      <Link className="bg-green-600 rounded ml-4   px-2 py-1" to="/">Home </Link>
      <form onSubmit={eventHandle} className='bg-gray-300 w-80%  h-140 flex  flex-col px-20 py-20 gap-10 rounded ' >
        <h1 className='inline-block  w-full py-2  text-center mt-4 text-3xl font-serif font-black '>Create post</h1>
        <label className=' text-2xl capitalize'>upload image:</label>
        <input className='bg-white/70 w-fit border border-black rounded px-3 py-1 text-blue-500' type="file" accept='image/*' name='image' />
        <input className='bg-white/70 border rounded px-3 py-1 text-xl' type="text" name='caption' required placeholder='caption' />
        <button type='submit' className=' bg-green-500 rounded w-fit py-2 px-3 text-white'>Submit</button>
      </form>


    </div>
  )
}

export default Createpost
