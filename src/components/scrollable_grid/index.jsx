import React from 'react';
import List from '../list';
import first from '../../data/CONTENTLISTINGPAGE-PAGE1.json';
import { filterByValue } from '../../store/reducer'
import store from '../../store/store'

class ScrollableGrid extends React.Component {

  constructor(){
    super()
    this.state = {
      height: window.innerHeight,
      activeIndex: 1,
      items:[]
    }
  }

  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && this.state.activeIndex < 3) {
      this.setState((prev) => {
        return {
          activeIndex: prev.activeIndex + 1,
        };
      }, () => {
        this.updateScreenData()
      });
    }
  }

  updateScreenData() {
    if(this.state.activeIndex > 3) {
      return
    } else {
      const nextPage =  require(`../../data/CONTENTLISTINGPAGE-PAGE${this.state.activeIndex}.json`);
      const nextItems = nextPage.page["content-items"].content;
      this.setState({
        items:  [...this.state.items, ...nextItems]
      })
    }
  }

  filterItems = (value) => {
    if (value) {
      store.dispatch(filterByValue(this.state, value))
      const result = store.getState()
      console.log("Result ", result)
      this.setState({
        items: result.filteredItems
      })
    } else {
      this.setState({
        items: first.page["content-items"].content,
        activeIndex: 1
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      items: first.page["content-items"].content
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="grid-wrapper">
        <div style={{position: 'relative', top: '100px', margin: '0 10px'}}>
          <List list={this.state.items}/>
        </div>
      </div>
    );
  }
}

export default ScrollableGrid;