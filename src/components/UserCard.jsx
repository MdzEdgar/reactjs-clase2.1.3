import React from 'react'

const UserCard = ({user, getRandomUser}) => {
  return (
    <article className='userCard'>
      <h1 className='userCard__fullName'>{user?.name.title} {user?.name.first} {user?.name.last}</h1>
      <div className='userCard__img'>
        <img src={user?.picture.large} alt="" />
      </div>
      <ul className='userCard__info'>
        <li><b>Age:</b> {user?.dob.age}</li>
        <li><b>Phone:</b> {user?.cell}</li>
        <li><b>Email:</b> {user?.email}</li>
        <li><b>Location: </b>{user?.location.city}, {user?.location.city}, {user?.location.state}, {user?.location.postcode}, {user?.location.country}</li>
      </ul>
      <button onClick={getRandomUser} className='userCard__btn'>New User</button>
    </article>
  )
}

export default UserCard