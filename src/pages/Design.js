import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Pages.css';


export default class Home extends Component {
  render() {
    return (
      <div className='intro'>
        <h1>DESIGN</h1>
        <p>These are the the design documents for this website.</p>

        <div className='list'>
           <Link to='/WframesSguides'>Wireframes & Styleguide</Link>
           <Link to='/Reflections'>Reflections on UI & UX</Link>
           <Link to='/Changes'>Changes</Link>
        </div>
      </div>
    )
  }
}