import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Posts.css';

export default class Essay extends Component {
  render() {
    return (
      <div>

     <div className='content'>
     <h1>Prepatory Work for Webart</h1>
     <p>
     My proposed Internet Artwork will take on the form of an Instagram feed… from the Sixties. A combination of art and history (or rather, the telling of history in a narrative form), the feed will include posts from important socio-cultural icons in the 1960’s. As well as the time period, I will also be focusing on America, during this time, simply because it is a period, and place in history that I am interested in.
     </p>
     <p>
     The preparatory work for this IA, as you can imagine, was quite practical. It is in essence a “very” contemporary museum. The icons, as I’ve mentioned would be of some cultural significance. Posters would include, but are not limited to, Frank Sinatra, The Beatles, Sharon Tate, Charles Manson, and much more. These icons would be “posting” images, and this is what the feedback will consist of. So Frank Sinatra may post a photo of himself, dapper as per usual, with a slick caption, in the style of contemporary “city boys.”  Each icon would thus be able to tell their own history, through their posts,  in an attempt to show not only their story, but their personality as well. And that’s where I come in. I have sourced the appropriate images, as well as conducted research to really get a grasp on these personalities… personalities. To do this, I will also use my narrative skills, to form a story of sorts.
     </p>
     <p>
     Aside from research on the icons, I also had to do research on the history of the Sixties. But as I am already interested in this period, this was not exactly work.
     </p>
     <p>
     As for the more technical  prep, the website has been laid out in a style reminiscent of Instagram when used on a laptop/computer. The feed section would be simple enough to do, with a database housing all the images, then using React.js I could simply call each image as I need.
     </p>
     </div>
     <div className='list'>
           <Link to='/Essay'>Previous</Link>
           <Link to='/Rationale'>Next</Link>
        </div>
      </div>
      
    )
  }
}
