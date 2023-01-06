import React, { useState } from 'react'
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import Articles from './Articles'
import LoginForm from './LoginForm'
import Message from './Message'
import ArticleForm from './ArticleForm'
import Spinner from './Spinner'
import axios from 'axios'
import { axiosWithAuth } from '../axios'

const articlesUrl = 'http://localhost:9000/api/articles'
const loginUrl = 'http://localhost:9000/api/login'

export default function App() {
  // ✨ MVP can be achieved with these states
  const [message, setMessage] = useState('')
  const [articles, setArticles] = useState([])
  const [currentArticleId, setCurrentArticleId] = useState()
  const [spinnerOn, setSpinnerOn] = useState(false)

  // ✨ Research `useNavigate` in React Router v.6
  const navigate = useNavigate()
  const redirectToLogin = () => {navigate('/')}
  const redirectToArticles = () => {navigate('/articles')}

  const logout = () => {
    localStorage.removeItem('token')
    setMessage('Goodbye!')
    redirectToLogin();
    setArticles([])
    // ✨ implement
    // If a token is in local storage it should be removed,
    // and a message saying "Goodbye!" should be set in its proper state.
    // In any case, we should redirect the browser back to the login screen,
    // using the helper above.
  }

  const login = ({ username, password }) => {
    const credentials = {
      username: username,
      password: password
    }
    setSpinnerOn(true)
    axios.post(loginUrl,credentials)
      .then(({data}) => {
        setMessage(data.message)
        localStorage.setItem('token', data.token)
        redirectToArticles()
        setSpinnerOn(false)
      })
      .catch((err) => {
        console.log(err)
        setMessage('error: please try again')
        setSpinnerOn(false)
      })

  }

  const getArticles = (mess) => {
    setSpinnerOn(true)
    axiosWithAuth().get(articlesUrl)
      .then(({data}) => {
        if(!mess){
          setMessage(data.message)
        }
        setArticles(data.articles)
        setSpinnerOn(false)
      })
    // ✨ implement
    // We should flush the message state, turn on the spinner
    // and launch an authenticated request to the proper endpoint.
    // On success, we should set the articles in their proper state and
    // put the server success message in its proper state.
    // If something goes wrong, check the status of the response:
    // if it's a 401 the token might have gone bad, and we should redirect to login.
    // Don't forget to turn off the spinner!
  }

  const postArticle = article => {
    const mess = true
    // ✨ implement
    // The flow is very similar to the `getArticles` function.
    // You'll know what to do! Use log statements or breakpoints
    // to inspect the response from the server.
    setSpinnerOn(true)
    return axiosWithAuth().post(articlesUrl, article)
      .then(({data})  => {
        getArticles(mess);
        setMessage(data.message)
        setSpinnerOn(false)
      })
      .catch(err => {
        setSpinnerOn(false)
        console.error(err)
      })
  }

  const updateArticle = ({article_id, article}) => {
    const mess = true
    // ✨ implement
    // You got this!
    setSpinnerOn(true)
    return axiosWithAuth().put(`${articlesUrl}/${article_id}`, article)
      .then(({data}) => {
        getArticles(mess);
        setMessage(data.message)
        setCurrentArticleId()
        setSpinnerOn(false)
      })
      .catch(err => {
        setSpinnerOn(false)
        console.error(err)
      })

  }

  const deleteArticle = article_id => {
    const mess = true
    // ✨ implement
    setSpinnerOn(true)
    return axiosWithAuth().delete(`${articlesUrl}/${article_id}`)
      .then(({data}) => {
        getArticles(mess);
        setMessage(data.message)
        setSpinnerOn(false)
      })
      .catch(err => {
        console.error(err)
        setSpinnerOn(false)
      })
  }
  return (
    // ✨ fix the JSX: `Spinner`, `Message`, `LoginForm`, `ArticleForm` and `Articles` expect props ❗
    <>
      <Spinner on={spinnerOn}/>
      <Message message={message}/>
      <button id="logout" onClick={logout}>Logout from app</button>
      <div id="wrapper" style={{ opacity: spinnerOn ? "0.25" : "1" }}> {/* <-- do not change this line */}
        <h1>Advanced Web Applications</h1>
        <nav>
          <NavLink id="loginScreen" to="/">Login</NavLink>
          <NavLink id="articlesScreen" to="/articles">Articles</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<LoginForm login={login}/>} />
          <Route path="articles" element={
            <>
              <ArticleForm currentArticleId={currentArticleId}
                  articles={articles}
                  setCurrentArticleId={setCurrentArticleId}
                  updateArticle={updateArticle}
                  postArticle={postArticle}/>
              <Articles articles={articles} getArticles={getArticles} setCurrentArticleId={setCurrentArticleId} deleteArticle={deleteArticle}/>
            </>
          } />
        </Routes>
        <footer>Bloom Institute of Technology 2022</footer>
      </div>
    </>
  )
}
