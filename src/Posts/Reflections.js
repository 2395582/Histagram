import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Posts.css';

export default class Essay extends Component {
  render() {
    return (
      <div>

       <div className='content'>

       <h1>UI & UX Reflection</h1>
       <h2>Clarity & Familiarity</h2>
       <p>
       There is clear and consistent communication with the user, setting up expectations of behavior. Every page is labeled, and links are consistently provided to allow the user to navigate the website with ease. 
       </p>
       <h2>Control & Navigation</h2>
       <p>
       Pages are titled and the elements which control navigation are visually responsive. Links are responsive on hover, letting a user know that it is a link. Through styling, these responses are heightened and thus provide increased control to the user, which can be used to navigate the website with ease.
       </p>
       <h2>
       Information Hierarchy
       </h2>
       <p>
       The page layout takes advantage of negative space, and consolidates the content in certain sections of the screen. The negative space reinforces this.
The colors used are highly contrasting making text legible. Info hierarchy is created with the used of varying font sizes for headings, subheadings, and main content.

       </p>
       <h2>
       Accessibility
       </h2>
       <p>
       The color contrast, font, font size, and negative space all create a reading experience which is streamlined and simple. The color of the font is visible on the contrasting background. The size is neither too big, nor too small, and thus can be read with ease. Negative space consolidates the main content in a section (usually the center) of the screen, which again is easy on the eyes.
       </p>
       <h2>
       Overall Reflection
       </h2>
       <p>
       The document is structured logically. There is equivalent alternative text supplied for all images, and semantic markup is good. The simplistic, minimal design makes the website extra legible. Navigation is a breeze thanks to constant sidebar navigation, which allows the user to access any page, at any time. Links are attached to icons in the navbar, which assist in navigation as well. 
The post pages are incredibly legible, almost like reading a book. There are no unnecessary distractions from the main content, and the sidebar is easy enough to ignore when perusing the main content. 
As an advantage of the minimalistic design, the website very user friendly.

       </p>
       </div>
       <div className='list'>
           <Link to='/WframesSguides'>Previous</Link>
           <Link to='/Changes'>Next</Link>
        </div>
      </div>
    )
  }
}
