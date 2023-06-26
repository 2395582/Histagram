import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Posts.css';
import Wireframes from '../assets/wframe.png';
import Wireframes2 from '../assets/wframe2.png';
import Wireframes3 from '../assets/wframe3.png';

export default class Essay extends Component {
  render() {
    return (
      <div>

     <div className='content'>
     <h1>Wireframes & Styleguides</h1>
      <p>
      My goal for this website was to create a version of Instagram, which portrays historical icons, as modern-day social media users. My aesthetic, is very much tied into this, with the site mirroring a clean, ergonomic style of Instagram, when viewed on a larger screen.
      </p>
      <p>
      The rationale for this clean, minimal, possibly bare style, is because the main draw of the website is the feed. There is where the color will be, and there is where I want the users attention to be. Ideally once I populate the feed, it will take on a quality reminiscent of Instagram’s “mindless scroll”. For this to work, there needs to be minimal distractions in the periphery, and so I stuck to this minimal style.
      </p>
      <p>
      The navigation bar has been placed on the left hand side, in further emulation of Instagram. My logo, is also placed in the same position as the original website which serves as my inspiration. The navbar is constant, and remains on the left side across all pages, allowing ease of navigation.
      </p>
      <p>
      The icons used in the navbar are also emulating Instagram. Simple black icons, attached to lettered links, which guide the user across the website. The links across the site, space out on hover. I did this, because of the somewhat academic nature of the site. It is a site which “teaches” history for all intents and purposes, and thus these links broaden because clicking on them “broaden” your horizons. A bit of a stretch I know, but I like the effect. (“S-T-R-E-T-C-H”, Get it?)
      </p>
      <p>
      The color palette is a simple black and white, because, as I’ve said I want no distractions from the main feed. The font is: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, which grants the site a simple modern feel, and is also reminiscent of (you guessed it) Instagram. (Though Instagram uses its own, Instagram Sans)
      </p>
      <p>
      The blog post are laid out simply enough, in the centre of the screen, with font set to “larger” to make it more legible. Longer posts are broken up into sections to make it easier to read.
      </p>
      <p>
      I considered making the site a bit fancier, and maybe more exciting to look at, but decided against it. My rationale for this decision, is as follows:
      </p>
      <p>
      The feed is the most important, as we have concluded. While it could be argued that I make the other pages more interesting, it is ultimately unnecessary as this would have nothing to do with my artwork, and would just be superficial changes, made for changes sake. If, upon further reflection, and feedback from you, I am tempted to change this, I will. Attached are the wireframes for each type of page that can be found on the site.
      </p>
     
     
     <img className='wframe' src={Wireframes}/>
     <img className='wframe' src={Wireframes2}/>
     <img className='wframe' src={Wireframes3}/>


     </div>
     <div className='list'>
           <Link to='/Reflections'>Next</Link>
        </div>
      </div>
    )
  }
}
