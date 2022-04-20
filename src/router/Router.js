import { Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from '../components/errorPage/ErrorPage'
import RepoDetails from '../components/repoDetails/RepoDetails'
import RepoList from '../components/repoList/RepoList'
import RepoSearch from '../components/repoSearch/RepoSearch'

const Router = () => {

    return(
        <Routes>
          <Route path='/' element={<Navigate to="/repo-list" replace/>}/>
          <Route path='/repo-list' element={<RepoList/>}/>
          <Route path='/repo-search' element={<RepoSearch/>}/>
          <Route path='/repo-details' element={<RepoDetails/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )
}
export default Router