import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Posts.css';

export default class Essay extends Component {
  render() {
    return (
      <div>
     <div className='content'>
     <h1>Independant Reflection - Artifical Intelligence & Art</h1>
     <p>
     Picture a man sitting in front of a typewriter. His fingers flash across the letters, and the machine chugs out a steady stream of bestselling novels. In between chapters he snorts a line (completely anecdotal) then returns to the work of art. He does this for years, and goes on to become one of the most prolific storytellers of all time. His name is Stephen King.
     </p>
     <p>
     Picture a man before a canvas. His hand guides each stroke. And each stroke enraptures generations. His work lives on, as paint, permanently dried on to the social canvas. Iconic. Always remembered, and never forgotten. His work lives on. His name is Leonardo Da Vinci.
     </p>
     <p>
     Picture a woman in a music studio. She’s recording music. The Great American Songbook sits before her, and she belts out each record as if it were her last. Such is her attention to detail. A cleaner, smoother sound never was recorded. Maybe never will be. Her name is Ella Fitzgerald.
     </p>
     <p>
     These are just a few examples of timeless art. There are many more, and do not think too much of my omission of more recent artists; I have an inclination to the older stuff. (It’s not pretentious if you actually like it, right?) The point I’m getting to is…
     </p>
     <p>
     …what happens when you remove these people from the equation. What happens when you firmly remove the captains hands from the helm of the ship. And replace it with something else. Something more consistent perhaps, but less human.
     </p>
     <p>
     AI assisted art creation is more then a possibility. A reality in some small cases. Still too novel, to really be taken seriously, but it is something I’ve been thinking about. As a student in an… artsy degree, this spells possible doom for my future job security. “Oh Mr. Seedat we’ve had to let you go… the robots so much better, and it doesn’t even take smoke breaks!”.
     </p>
     <p>
     My preferred art form is literature. How do I write? I read a lot. I take in everything I hear in an anecdotal capacity. Somewhere along the line, two distinct elements come together to make an idea, and I write. Everything I know, first/second/third hand knowledge, is used to create a narrative.
     </p>
     <p>
     AI, is perhaps, not much different when it comes to the creation of a narrative. It, like me has a database of information, which it can then use to create a narrative, if that is what you ask it to do. My database is actually smaller. (Not that size matters…)
     </p>
     <p>
     So what’s the difference? I’m human? Is that it? Yes. That’s all it needs to be. No system could ever hope to replicate the depth of emotion that a human can evoke. Perhaps it can be more sophisticated, make less mistakes, work cheaper, but… it can never be human. And art is human. 
     </p>
     </div>
     <div className='list'>
           <Link to='/Rationale'>Previous</Link>
           <Link to='/IndieResearch'>Next</Link>
    </div>
      </div>
    )
  }
}
