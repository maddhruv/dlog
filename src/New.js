import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import jwt from 'jsonwebtoken'

class New extends Component {
  constructor () {
    super()
    this.state = {
      title: null,
      author: null,
      blog: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit () {
    window.location.href = jwt.sign({
      title: this.state.title,
      author: this.state.author,
      blog: this.state.blog,
      date: Date.now()
    }, 'dlog')
  }

  render () {
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
              onChange={this.handleChange}
            />
            <input
              className='input'
              name='author'
              placeholder='Author'
              id='author'
              onChange={this.handleChange}
            />
            <textarea
              className='input'
              name='blog'
              placeholder='Blog'
              id='blog'
              onChange={this.handleChange}
              rows='6'
            />
            <button onClick={this.submit}>Submit</button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default New
