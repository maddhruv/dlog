import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import jwt from 'jsonwebtoken'

function Blog (props) {
  const [title, setTitle] = useState(null)
  const [author, setAuthor] = useState(null)
  const [blog, setBlog] = useState(null)
  const [date, setDate] = useState(null)

  useEffect(() => {
    const { title, author, blog, date } = jwt.decode(props.match.params.hash, 'dlog')
    setTitle(title)
    setAuthor(author)
    setBlog(blog)
    setDate(date)
  })

  function copy () {
    const el = document.createElement('textarea')
    el.value = window.location.href
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    alert('Copied URL to the clipboard')
    document.body.removeChild(el)
  }

  return (
    <div className='App'>
      <Header />
      <main>
        <div className='card'>
          {
            title ? <>
              <h5 id='share' onClick={copy}>Share</h5>
              <h2 id='title'>{title}</h2>
              <h4 id='author'>{author}</h4>
              <p>{blog}</p>
              </> : <>
                <h3> 😣 OOPs! The blog was not found</h3>
              </>
          }
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Blog
