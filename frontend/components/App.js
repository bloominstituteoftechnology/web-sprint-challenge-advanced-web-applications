import React, { useState } from 'react'
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import Articles from './Articles'
import LoginForm from './LoginForm'
import Message from './Message'
import ArticleForm from './ArticleForm'
import Spinner from './Spinner'
import axios from 'axios';

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
  const redirectToLogin = () => { navigate ('/');

   }
  const redirectToArticles = () => { 
   navigate ('/articles');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setMessage('Goodbye!');
    redirectToLogin();
  };
   
  const login = ({ username, password }) => {
    setMessage ('');
    setSpinnerOn(true);

    axios.post (loginUrl, {username, password })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        setMessage('Login successful!');
        redirectToArticles();
        getArticles()
      })
      .catch (() => {
        setMessage ('Login failed. Please check your credentials.');
      })
      .finally(() => {
        setSpinnerOn(false);
      })
  }

  const getArticles = () => {
    setMessage(''); // Clear any previous messages
    setSpinnerOn(true); // Show the spinner while fetching articles
    const token = localStorage.getItem('token'); // Retrieve the token from local storage
  
    axios.get(articlesUrl, {
      headers: { Authorization: token }, // Pass the token in the Authorization header
    })
      .then((response) => {
        // Log the response to debug its structure
        console.log('Response data:', response.data);
        setArticles(response.data.articles); // Use the array directly
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
        if (error.response?.status === 401) {
          setMessage('Session expired. Please log in again.');
          redirectToLogin();
        } else {
          setMessage('Failed to retrieve articles. Please try again.');
        }
      })
      .finally(() => {
        setSpinnerOn(false); // Hide the spinner after the request is complete
      });
  };
  

  const postArticle = article => {
    setMessage(''); // Clear any previous messages
    setSpinnerOn(true); // Show the spinner while making the request
  
    const token = localStorage.getItem('token'); // Retrieve the token
  
    axios.post(articlesUrl, article, {
      headers: { Authorization: token } // Pass the token in the Authorization header
    })
      .then(response => {
        console.log ("postresponse",response);
        setArticles([...articles, response.data.article]); // Add the new article to the state
        setMessage(response.data.message); // Set a success message
       
      })
      .catch (() => {
        setMessage('Failed to add article. Please try again.'); // Set an error message
      })
      .finally(() => {
        setSpinnerOn(false); // Hide the spinner after the request is complete
      });
  };
  

  const updateArticle = ({ article_id, article }) => {
    setMessage(''); // Clear any previous messages
    setSpinnerOn(true); // Show the spinner while making the request
  
    const token = localStorage.getItem('token'); // Retrieve the token
  
    axios.put(`${articlesUrl}/${article_id}`, article, {
      headers: { Authorization: token } // Pass the token in the Authorization header
    })
      .then(response => {
        setArticles(articles.map(art => 
          art.article_id === article_id ? response.data.article : art // Replace updated article
        ));
        setMessage(response.data.message); // Set a success message
      })
      .catch(()=> {
        setMessage('Failed to update article. Please try again.'); // Set an error message
      })
      .finally(() => {
        setSpinnerOn(false); // Hide the spinner after the request is complete
      });
  };
  

  const deleteArticle = article_id => {
    setMessage(''); // Clear any previous messages
    setSpinnerOn(true); // Show the spinner while making the request
  
    const token = localStorage.getItem('token'); // Retrieve the token
  
    axios.delete(`${articlesUrl}/${article_id}`, {
      headers: { Authorization: token } // Pass the token in the Authorization header
    })
      .then((response) => {
        setArticles(articles.filter(art => art.article_id !== article_id)); // Remove the deleted article
        setMessage(response.data.message); // Set a success message
      })
      .catch(() => {
        setMessage('Failed to delete article. Please try again.'); // Set an error message
      })
      .finally(() => {
        setSpinnerOn(false); // Hide the spinner after the request is complete
      });
  };
  

  return (
    <>
      <Spinner on={spinnerOn} />
      <Message message={message} />
      <button id="logout" onClick={logout}>Logout from app</button>
      <div id="wrapper" style={{ opacity: spinnerOn ? "0.25" : "1" }}>
        <h1>Advanced Web Applications</h1>
        <nav>
          <NavLink id="loginScreen" to="/">Login</NavLink>
          <NavLink id="articlesScreen" to="/articles">Articles</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<LoginForm login={login} />} />
          <Route path="articles" element={
            <>
              <ArticleForm
                currentArticle = {articles.find(art=> art.article_id == currentArticleId)}
                postArticle={postArticle}
                updateArticle={updateArticle}
                setCurrentArticleId={setCurrentArticleId}
              />
              <Articles
                articles={articles}
                getArticles={getArticles} 
                deleteArticle={deleteArticle}
                setCurrentArticleId={setCurrentArticleId}
                currentArticleId={currentArticleId}
              />
            </>
          } />
        </Routes>
        <footer>Bloom Institute of Technology 2024</footer>
      </div>
    </>
  );
}
