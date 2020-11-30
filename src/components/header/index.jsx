import React from 'react';
import Navbg from '../../assets/nav_bar.png'
import BackAsset from '../../assets/Back.png'
import SearchAsset from '../../assets/search.png'
import initialLoad from '../../data/CONTENTLISTINGPAGE-PAGE1.json';
import { ToastContainer, toast } from 'react-toastify';


import './index.css';
import 'react-toastify/dist/ReactToastify.css';

class Header extends React.Component {
  
  showToast = () => {
    toast("No back action");
  }

  render() {
    return (
        <div className="navigationBar" style={{backgroundImage: `url(${Navbg})`}}>
          <div>
            <img 
            className="backButton" 
            src={BackAsset} 
            alt="back" 
            onClick={this.showToast}
            style ={{width: '30px',position: 'absolute',left:'10px',top:'20px'}}></img>
          </div>
          <div>
            <img className="searchButton" 
            src={SearchAsset} 
            alt="search" 
            onClick={this.props.searchHandler}
            style ={{width: '30px',position: 'absolute',right:'10px',top:'20px',zIndex:999}}></img>
          </div>
          <div className="title">
           {initialLoad.page.title}
          </div>
          <ToastContainer />
        </div>
    );
  }

  componentDidMount() {
  }
}

export default Header;