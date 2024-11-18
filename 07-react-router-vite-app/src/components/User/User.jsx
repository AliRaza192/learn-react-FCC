import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()

  return (
    <div className='bg-orange-300 text-black text-center text-2xl'>
      User: {userId} 
    </div>
  )
}

export default User
