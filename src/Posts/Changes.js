import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Posts.css';

export default class Essay extends Component {
  render() {
    return (
      <div>
     <div className='content'>
     <h1>Changes</h1>
      <p>
      Here I would like to discuss the changes I have made to the website since the first iteration.
      </p>
      <p>
      Firstly, I changed the alignment of the blogs posts. I had this aligned in the center, because I believed it was easier to read, but after reading the feedback I received, I realized that this was not the case. The inverse, in fact, is true. Thus, the change to left aligned, which I believe looks much better, and offers a much more conventional reading experience.
      </p>
      <p>
      The second change I made, was to the links. Where previously, the links leading to the blog posts were just black text, now they are underlined, a conventional sign of links. While previously the only indication that these titles were links, was the fact that they ‘stretched’ on hover, I think the underline is a subtle enough indication that these are in fact hyperlinks. Subtle, because I wanted it to be in keeping with the simplistic theme of the website.
      </p>
      <p>
      Also included in the feedback, was the point that I failed to have navigation between the blogs. This was due to an oversight on my part, and so (sufficiently chagrined) I solved the issue.
      </p>
      <p>
      As per the question of why I don’t have a footer, this is simply because I wanted the website to be an imitation of Instagram. And as Instagram has an ‘endless scroll’ with no footer, I thought this would work best for my website as well. I decided to keep the no footer look throughout, to keep the simplistic vibe seamless.
      </p>
     </div>
     <div className='list'>
           <Link to='/Reflections'>Previous</Link>
    </div>
      </div>
    )
  }
}
