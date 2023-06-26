import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Posts.css';

export default class Essay extends Component {
  render() {
    return (
      <div>

      <div className='content'>
      <h1>Independant Resarch - History & Art</h1>
       <p>History and Art. Two separate entities which form large parts of our culture. </p>
      <p>History, tells us the story of where we come from, be it from the viewpoint of a particular racial, or religious group, or even from a more broader all-encompassing perspective of mankind on the whole. If we are curious about our origins, we turn to history. If we want to make arguments against a decision today, we turn to why it failed yesterday. There are various reasons to look back. It is a system of learning inherent in us as humans. As Cat Stevens (the best musician ever, Aka Yusuf Islam) once said: “The past is what we jump off… the future is what we jump to.”</p>
      <p>
      And the past, or history, offers us just this; a platform, from which we can leap anew,  motivated to right past wrongs, and fix old broken things. Again, this could be on the grand scale of humanity as a whole, or one singular individual. Fact remains, history is important.
      </p>
      <p>
      Art is also important, despite what the more… analytically minded would claim. Art, in my view, has always been about capturing something of the human essence, and putting it on display, so something may be garnered from the artwork. Great literature (like the kind written by Hemingway) shows a person a scenario from which important advice can be garnered. It’s not specific; “Don’t tie fish to boat, cause shark will eat it.” It’s deeper, more sophisticated then that. Art shows you an overarching path, an other worldly phenomenon, in the hope that you can relate it to your life, and live it a little better from then on out. Or so I’ve always believed.
      </p>
      <p>
      Having come to the conclusion that both these entities, History and Art are of utmost importance to how we live as human beings, we can now turn to the possible correlations between the two.
      </p>
      <p>
      In a 2016 article in <em>The Harvard Gazette</em> , titled: <em>The link between art and history</em>  Jennifer Doody, a Harvard correspondent, wrote about just such a correlation. It was an attempt to “design and teach classes that incorporate the museums’ art with classroom curriculum.” (Doody, 2016). Some of these designs included new depictions of historical events, which were very well received by the students. It created a new experience of learning history, granting students the opportunity to see how things really were, way back when, instead of reading about it in a lengthy textbook entry.
      </p>
      <p>
      In essence, the exercise sought to teach history in a new, exciting manner. Through art. And not just for the pure novelty of it. But because it makes sense. It is a method of teaching that enhances understanding. It also, incorporates both history and art, so you know I approve.
      </p>
      <p>
      The concept of telling history through art, is by no means a new one. In 1969 A.R. Louche wrote in a journal titled “History & Theory” that: “Narrative as it is used by historians is not merely an incidental, stylistic feature of the historian's craft, but essential to historical explanation. “
      </p>
      <p>
      This, referring to the tendency of writing our history, as if it were a novel, as if it were a… work of art. Louche goes on to say that this method, although it may be waived away as “stylish” is incredibly important in the historians line of work, that is, deducing history, and presenting it to the public.
      </p>
      <p>
      In the aforementioned examples, the lines between history and art have been blurred. As I plan to blur them on this website. History, told through art. Art, embracing history as a muse. They both (history & art) have the same intention; to act as repositories of knowledge, both eager to guide the wayward soul.
      </p>
      </div>
      <div className='list'>
           <Link to='/IndieReflection'>Previous</Link>
        </div>

      </div>
    )
  }
}
