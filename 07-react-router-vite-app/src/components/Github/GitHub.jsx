// import React, { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

    

function GitHub() {

  const data = useLoaderData()

  // const [data, setData] = React.useState([])
  //   useEffect(() => {
  //       fetch('https://api.github.com/users/AliRaza192')
  //       .then((response) => response.json())
  //       .then(data => {
  //           console.log(data)
  //           setData(data)
  //       })
  //   }, [])

  return (
    <div className='bg-gray-400 py-4 text-black text-center text-2xl'>
    GitHub Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} /> 
  </div>
  )
}

export default GitHub


export const githubInfo = async () => {

  const response = await fetch('https://api.github.com/users/AliRaza192')
  return response.json()
}