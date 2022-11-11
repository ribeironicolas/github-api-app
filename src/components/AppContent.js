import React from 'react'
import Actions from './Actions'
import Repos from './Repos'
import Search from './Search'
import UserInfo from './UserInfo'
import PropTypes from 'prop-types'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => {
  return (
    <div className="app">
        <Search isDisabled={isFetching} handleSearch={handleSearch}/>
        {isFetching && <div className='loading'>Carregando...</div>}
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}
  
        {!!repos.length && 
          <Repos  
            className={'repos'} 
            title="Repositórios:"
            repos={repos}/> }
  
        {!!starred.length &&
          <Repos 
            className={'starred'} 
            title="Favoritos:"
            repos={starred}/> }
  
      </div>
  )

  AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired,
  }
}

export default AppContent