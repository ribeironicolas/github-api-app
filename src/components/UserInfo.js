import React from 'react'
import PropType from 'prop-types'
const UserInfo = ({ userinfo }) => {
  return (
    <div className='user-info'>
        <img src={userinfo.photo} alt="avatar" />

        <h1 className='username'>
          <a target={'_blank'} href={`https://github.com/${userinfo.login}`} rel="noreferrer">{userinfo.username}</a>
        </h1>

        <ul className="repos-info">
            <li>Repositórios: {userinfo.repos}</li>
            <li>Seguidores: {userinfo.followers}</li>
            <li>Seguindo: {userinfo.following}</li>
        </ul>
    </div>
  )

  UserInfo.propTypes = {
    userinfo: PropType.shape({
      username: PropType.string.isRequired,
      photo: PropType.string.isRequired,
      login: PropType.string.isRequired,
      repos: PropType.number.isRequired,
      followers: PropType.number.isRequired,
      following: PropType.number.isRequired
    })
  }
}

export default UserInfo