import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PT from 'prop-types';

export default function Articles({ articles, getArticles, deleteArticle, setCurrentArticleId, currentArticleId}) {
  const token = localStorage.getItem('token');

  // Ensure token validation
  if (!token || token === 'undefined' || token === '') {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    if (token) {
      getArticles();
    }
  }, [token]);

  console.log (articles);

  return (
    <div className="articles">
      <h2>Articles</h2>
      {articles.length === 0 ? (
        <p>No articles yet</p>
      ) : (
        articles.map((art) => (
          <div key={art.article_id} className="article">
            <h3>{art.title}</h3>
            <p>{art.text}</p>
            <p>Topic: {art.topic}</p>
            <button onClick={() => setCurrentArticleId(art.article_id)}>Edit</button>
            <button onClick={() => deleteArticle(art.article_id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}


Articles.propTypes = {
  articles: PT.arrayOf(PT.shape({
    article_id: PT.number.isRequired,
    title: PT.string.isRequired,
    text: PT.string.isRequired,
    topic: PT.string.isRequired,
  })).isRequired,
  getArticles: PT.func.isRequired,
  deleteArticle: PT.func.isRequired,
  setCurrentArticleId: PT.func.isRequired,
  currentArticleId: PT.number,
};
