import React from 'react';
import Thumbnail from "../thumbnail"

class List extends React.Component {

  render() {
    return (
      <div className="flex flex-wrap -mx-2" style={{height:'100%'}}>
      {this.updateItems()}
      </div>
    );
  }

  updateItems=() => {
    return this.props.list.map((content,index) => {
      return (
      <div className=" listItem w-1/3 sm:w-1/3  lg:w-1/4 xl:w-1/6 mb-4 pb-30 px-2" key={index}>
        <Thumbnail image={content}/>
      </div>
      )
    })
  }
}

export default List;