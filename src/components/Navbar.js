import React, { Component } from 'react'
import Logo from '../assets/Logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import HandymanIcon from '@mui/icons-material/Handyman';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import HomeIcon from '@mui/icons-material/Home';
import PaletteIcon from '@mui/icons-material/Palette';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
            <img src={Logo}/>
            <Link to='/'><HomeIcon/>Home</Link>
            <Link to='/blogs'> <CollectionsBookmarkIcon/>Theory</Link>
            <Link to='/design'><HandymanIcon/>Design</Link>
            <Link to='/webart'><PaletteIcon/>Webart</Link>
      </div>
    )
  }
}
