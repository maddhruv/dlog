import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import jwt from 'jsonwebtoken'

function New (props) {
  const [title, setTitle] = useState(null)
  const [author, setAuthor] = useState(null)
  const [blog, setBlog] = useState(null)

  function handleTitleChange (e) {
    setTitle(e.target.value)
  }

  function handleAuthorChange (e) {
    setAuthor(e.target.value)
  }

  function handleBlogChange (e) {
    setBlog(e.target.value)
  }

  function handleSubmit (e) {
    window.location.href = jwt.sign({
      title,
      author,
      blog,
      date: Date.now()
    }, 'dlog')
  }

  return (
    <div className='App'>
      <Header />
      <main>
        <div className='container'>
          <input
            className='input'
            name='title'
            placeholder='Title'
            id='title'
            value={title}
            onChange={handleTitleChange}
          />
          <input
            className='input'
            name='author'
            placeholder='Author'
            id='author'
            value={author}
            onChange={handleAuthorChange}
          />
          <textarea
            className='input'
            name='blog'
            placeholder='Blog'
            id='blog'
            value={blog}
            onChange={handleBlogChange}
            rows='6'
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default New
