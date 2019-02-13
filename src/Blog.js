import React from 'react';
import Header from './Header';
import Footer from './Footer';
import jwt from 'jsonwebtoken';

class Blog extends React.Component {
  constructor () {
    super()
    this.state = {
      title: null,
      author: null,
      blog: null,
      date: null
    }
    this.copy = this.copy.bind(this)
  }

  copy () {
    const el = document.createElement('textarea')
    el.value = window.location.href
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    alert('Copied URL to the clipboard')
    document.body.removeChild(el)
  }

  componentWillMount () {
    this.setState(jwt.decode(this.props.match.params.hash, 'dlog'))
  }

  render () {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="card">
            {
              this.state.title ? <>
                <h5 id="share" onClick={this.copy}>Share</h5>
                <h2 id="title">{this.state.title}</h2>
                <h4 id="author">{this.state.author}</h4>
                <p>{this.state.blog}</p>
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
}

export default Blog