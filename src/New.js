import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import jwt from 'jsonwebtoken'

function New (props) {
  const title = useFormInput(null)
  const author = useFormInput(null)
  const blog = useFormInput(null)

  function handleSubmit (e) {
    window.location.href = jwt.sign({
      title: title.value,
      author: author.value,
      blog: blog.value,
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
            {...title}
          />
          <input
            className='input'
            name='author'
            placeholder='Author'
            id='author'
            {...author}
          />
          <textarea
            className='input'
            name='blog'
            placeholder='Blog'
            id='blog'
            {...blog}
            rows='6'
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function useFormInput (initialValue) {
  const [value, setValue] = useState(initialValue)

  function handleChange (e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}

export default New
