import React, { Component } from 'react'
import '../styles/Post.css';

const postone = 'https://cdn.britannica.com/43/95543-050-FF65A490/Martin-Luther-King-Jr-speech-I-Have-Aug-28-1963.jpg';
const posttwo = 'https://www.hollywoodreporter.com/wp-content/uploads/2018/11/jfk-makingofthepresident1960tv_08-photofest-h_2018.jpg?w=1296&h=730&crop=1';
const postthree = 'https://i.discogs.com/kdPYopka7qZwcyl4LQxCAQV9DM90wBhrm-wENYhyazI/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MDc1/MTEtMTU2MTM2ODgx/OC05NDE4LmpwZWc.jpeg';
const postfour = 'https://songbook1.files.wordpress.com/2016/04/frank-sinatra-with-count-basie-orch-1964-by-john-dominis-1a.jpg';
const postfive = 'https://t2.genius.com/unsafe/798x0/https%3A%2F%2Fimages.genius.com%2F1a5e9183169bb70366f9c0e1be9a8042.1000x1000x1.jpg';
const postsix = 'https://cdn.britannica.com/20/187920-050-0425AFBB/Frank-Sinatra-1947.jpg';
const postseven = 'https://www.posteremporium.com/media/catalog/product/cache/6eaa364575089817f32fa4ebdb946095/1/6/161023.jpg';
const posteight = 'https://marinakanavaki.files.wordpress.com/2020/12/frank-sinatra-at-the-sands.jpg';
const postnine = 'https://irs.www.warnerbros.com/gallery-v2-jpeg/dont_make_waves_photo1.jpg';
const postten = 'https://nypost.com/wp-content/uploads/sites/2/2018/11/181117-sharon-tate-dress.jpg?resize=878,585&quality=75&strip=all';
const posteleven = 'https://i2-prod.mirror.co.uk/incoming/article5115314.ece/ALTERNATES/n310p/Charles-Manson.jpg';
const posttwelve = 'https://www.eastbaytimes.com/wp-content/uploads/2017/11/tate_016.jpg?w=620';
const postthirteen = 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*uCtJIPxJYqoRKe4hI7VW_Q.jpeg';

export default class Post extends Component {
    render() {
      return (
       <div>

       <div className='post'>
        <h1 className='profile'>MLK</h1>
        <p className='name'>Martin Luther King Jr.</p>
        <img className='image' src={postone}/>
        <p className='caption'><strong>MLK&nbsp;</strong>I Have A Dream...</p>
        <p className='date'>28 August 1963 - Lincoln Memorial, Washington D.C.</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>POTUS</h1>
        <p className='name'>John F. Kennedy</p>
        <img className='image' src={posttwo}/>
        <p className='caption'><strong>POTUS&nbsp;</strong>Gonna be in Dallas tomorrow, See You There!</p>
        <p className='date'>21 November 1963</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>The_Beatles</h1>
        <p className='name'>TheBeatlesUSOfficial</p>
        <img className='image' src={postthree}/>
        <p className='caption'><strong>The_Beatles&nbsp;</strong>The Beatles... Now in the US!</p>
        <p className='date'>10 January 1964</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>Ol'BlueEyes</h1>
        <p className='name'>Frank Sinatra</p>
        <img className='image' src={postfour}/>
        <p className='caption'><strong>Ol'BlueEyes&nbsp;</strong>Back with Basie! It Might As Well Be Swing! Check it out...</p>
        <p className='date'>22 August 1964</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>The_Beatles</h1>
        <p className='name'>TheBeatlesUSOfficial</p>
        <img className='image' src={postfive}/>
        <p className='caption'><strong>The_Beatles&nbsp;</strong>George says this is our best album, whaddya think?</p>
        <p className='date'>3 December 1965</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>Ol'BlueEyes</h1>
        <p className='name'>Frank Sinatra</p>
        <img className='image' src={postsix}/>
        <p className='caption'><strong>Ol'BlueEyes&nbsp;</strong>TBT 1947... Who'd have thunk it, huh?</p>
        <p className='date'>12 December 1965</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>ManWithNoName</h1>
        <p className='name'>Clint Eastwood</p>
        <img className='image' src={postseven}/>
        <p className='caption'><strong>ManWithNoName&nbsp;</strong>They'll remember this one...</p>
        <p className='date'>23 December 1966</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>Ol'BlueEyes</h1>
        <p className='name'>Frank Sinatra</p>
        <img className='image' src={posteight}/>
        <p className='caption'><strong>Ol'BlueEyes&nbsp;</strong>Word to the wise, when you're at The Sands, drink, but don't eat the food. Yeesh!</p>
        <p className='date'>24 December 1966 - The Sands, Las Vegas Nevada</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>SharonTate</h1>
        <p className='name'>Sharon Marie Tate</p>
        <img className='image' src={postnine}/>
        <p className='caption'><strong>SharonTate&nbsp;</strong>Don't Make Waves! Out Now!</p>
        <p className='date'>20 June 1967</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>SharonTateP</h1>
        <p className='name'>Sharon Marie Tate Polanski</p>
        <img className='image' src={postten}/>
        <p className='caption'><strong>SharonTateP&nbsp;</strong><em>Mrs.</em>Sharon Marie Tate Polanski</p>
        <p className='date'>20 January 1968</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>familyMan</h1>
        <p className='name'>Charles Manson</p>
        <img className='image' src={posteleven}/>
        <p className='caption'><strong>familyMan&nbsp;</strong>Helter Skelter!</p>
        <p className='date'>8 August 1969</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>SharonTateP</h1>
        <p className='name'>Sharon Marie Tate Polanski</p>
        <img className='image' src={posttwelve}/>
        <p className='caption'><strong>SharonTateP&nbsp;</strong>Throwback! Looking forward to a quiet night with friends...</p>
        <p className='date'>9 August 1969</p>
       </div> 

       <div className='post'>
        <h1 className='profile'>WoodStockOfficial</h1>
        <p className='name'>The Woodstock Experience</p>
        <img className='image' src={postthirteen}/>
        <p className='caption'><strong>WoodStockOfficial&nbsp;</strong>You shoulda been there!!!</p>
        <p className='date'>20 August 1969</p>
       </div> 

       </div>
      )
    }
  }
  