import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Pages.css';
 

export default class Home extends Component {
  render() {
    return (
      <div className='intro'>
        <h1>THEORY</h1>
        <p>These are the the blogs posts for this website.</p>

        <div className='list'>
           <Link to='/Essay'>Essay</Link>
           <Link to='/PrepWork'>Prepatory Work for Webart</Link>
           <Link to='/Rationale'>Rationale for Webart (+New Rationale!)</Link>
           <Link to='/IndieReflection'>Independant Reflection - AI & Art</Link>
           <Link to='/IndieResearch'>Independant Resarch - History & Art</Link>
        </div>
      </div>
    )
  }
}