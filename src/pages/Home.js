import React, { Component } from 'react'
import Post from '../components/Post';
import '../styles/Pages.css';

export default class Home extends Component {
  render() {
    return (
      <div className='intro'>
        <h1>HOME</h1>
        <Post/>
      </div>
    )
  }
}
