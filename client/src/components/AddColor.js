// import React, { useState, useEffect} from 'react'
// import { axiosWithAuth } from '../components/utils/axiosWithAuth'

// const initialFriendValue = {
//     name: '',
//     age: '',
//     email: ''
// }


// const FriendsList = () => {

//  const [friends, setFriends] = useState([])
//  const [newFriend, setNewFriend] = useState(initialFriendValue)

// useEffect(() => {
//     axiosWithAuth()
//     .get('/api/friends')
//     .then(res => {
//         setFriends(res.data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }, [])

// const handleChange = (e) => {
//   setNewFriend({
//       ...newFriend,
//       [e.target.name]: e.target.value
//   })
// }

// const handleSubmit = (e) => {
//     e.preventDefault()
//     axiosWithAuth()
//       .post(`/api/friends/, newFriend`)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });

// return (
//     <>
// {friends.map(friends => (
//     <div>
//     <p>Name: {friends.name}</p>
// <p> Age: {friends.age}</p>
// <p>Email: {friends.email}</p>
// <p>{friends.id}</p>
// </div>
// ))}
// <form onSubmit={handleSubmit}>
//     <input
//     type='text'
//     name='name'
//     value={newFriend.name}
//     onChange={handleChange}
//     />
// <input type="submit" />
// </form>
//     </>
// )
// }
// }

// export default FriendsList