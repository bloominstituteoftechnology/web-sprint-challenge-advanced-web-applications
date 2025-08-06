import React, { useEffect, useState } from 'react'
import PT from 'prop-types'

const initialFormValues = { title: '', text: '', topic: '' }

export default function ArticleForm(props) {
  const [values, setValues] = useState(initialFormValues)
  const { postArticle, updateArticle, setCurrentArticleId, currentArticle } = props;
  // ✨ where are my props? Destructure them here

  useEffect(() => {
    if (currentArticle) {
      setValues({
        title: currentArticle.title,
        text: currentArticle.text,
        topic: currentArticle.topic,
      });
    } else {
      setValues(initialFormValues);
    }
  }, [currentArticle]);

  const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    if (currentArticle) {
      updateArticle({
        article_id: currentArticle.article_id, article: values });
      } else {
        postArticle(values);
      }
      setValues(initialFormValues);
      setCurrentArticleId();
    };

  const isDisabled = () => {
    // Assuming `values` contains the form data as an object, e.g.,
    // { title: "some text", body: "some content" }
    if (!values.title || !values.text || !values.topic) {
      // If either title or body is empty, disable the form
      return true;
    }
    
    // All inputs have values; enable the form
    return false;
  };
  

  return (
    // ✨ fix the JSX: make the heading display either "Edit" or "Create"
    // and replace Function.prototype with the correct function
    <form id="form" onSubmit={onSubmit}>
      <h2>{currentArticle ? "Edit Article" : "Create Article"}</h2>

      <input
        maxLength={50}
        onChange={onChange}
        value={values.title}
        placeholder="Enter title"
        id="title"
      />
      <textarea
        maxLength={200}
        onChange={onChange}
        value={values.text}
        placeholder="Enter text"
        id="text"
      />
      <select onChange={onChange} id="topic" value={values.topic}>
        <option value="">-- Select topic --</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Node">Node</option>
      </select>
      <div className="button-group">
        <button disabled={isDisabled()} id="submitArticle">Submit</button>
        <button onClick={ () => setCurrentArticleId(null)}>Cancel edit</button>
      </div>
    </form>
  )
}

// 🔥 No touchy: ArticleForm expects the following props exactly:
ArticleForm.propTypes = {
  postArticle: PT.func.isRequired,
  updateArticle: PT.func.isRequired,
  setCurrentArticleId: PT.func.isRequired,
  currentArticle: PT.shape({ // can be null or undefined, meaning "create" mode (as opposed to "update")
    article_id: PT.number.isRequired,
    title: PT.string.isRequired,
    text: PT.string.isRequired,
    topic: PT.string.isRequired,
  })
}
