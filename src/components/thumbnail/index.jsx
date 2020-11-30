
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  defautPoster,
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  poster8,
  poster9
} from '../../assets';

class Thumbnail extends React.Component {

  render() {
    return (
      <React.Fragment>
        <LazyLoadImage
          style={{"marginTop": "15px"}}
          alt={"missingPoster"}
          height={"272px"}
          src={this.mapPosters()}
          width={"182px"} 
        />
        <div style={{color:"white","marginTop": "24px", "maxWidth": "172px"}}
          className="mb-2">
          {this.props.image.name}
        </div>
      </React.Fragment>
    );
  }

  mapPosters = () => {
    switch(this.props.image["poster-image"]) {
        case "poster1.jpg" : 
          return poster1;
        case "poster2.jpg":
          return poster2;
        case  "poster3.jpg":
          return poster3;
        case  "poster4.jpg":
          return poster4;
        case  "poster5.jpg":
          return poster5;
        case "poster6.jpg":
          return poster6;
        case "poster7.jpg":
          return poster7;
        case "poster8.jpg":
          return poster8;
        case "poster9.jpg":
          return  poster9;
        default:
          return defautPoster;

    }
  }
}

export default Thumbnail;