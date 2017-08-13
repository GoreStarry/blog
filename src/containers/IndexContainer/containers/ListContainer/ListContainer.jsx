import React, { PureComponent, PropTypes } from 'react';
import TweenMax from "gsap/TweenMax";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import './ListContainer.scss';

const maxListPerPage = 8;

class ListContainer extends PureComponent {
  state = {
    nowPage: 1,
    nowList: false,
    maxPage: 1
  }

  componentDidMount() {
    this._initList(this.props.listType)
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.listType !== this.props.listType) {
      this._initList(nextProps.listType)
    }
  }

  _scrollTo = (dom) => {
    TweenMax.to(window, 1, {
      scrollTo: dom
    })
  }


  _initList = (type) => {
    const nowList = this.props.postData.filter((data) => {
      return data.tag.indexOf(type) !== -1;
    });
    this.setState({
      nowList,
      maxPage: Math.ceil(nowList.length / maxListPerPage)
    }, () => {
      this._scrollTo('.stage')
    });
  }

  _changePage = (page) => {
    this.setState({
      nowPage: page
    });
  }

  render() {
    const {maxPage, nowList} = this.state;
    const {dataJsFrontMatter, listType} = this.props;
    const inbookHeight = window.innerHeight * 0.85;
    return (
      <div className="stage">
        <div id="twohand">
          <a className="ahand" id="aup">
            <div className="hand" id="handup"> ▲ </div>
          </a>
          <a className="ahand" href="#">
            <div className="hand"> TOP </div>
          </a>
          <a className="ahand" id="adown">
            <div className="hand" id="handdown"> ▼ </div>
          </a>
        </div>
        { nowList && nowList.map((post, index) => {
            return (
              <div id={ `pg${index}` } key={ `post${index}` }>
                <div
                  className="inbook"
                  style={ { height: inbookHeight } }
                  id={ index }>
                  <img src={ require("../../components/StoreHouse/images/adbook4.png") } alt=""></img>
                  <h1>{ post.title }</h1>
                  <h2>123</h2>
                  <p>
                    123
                  </p> <a href="">（繼續閱讀）</a>
                </div>
              </div>
            )
          }) }
        <div className="pagen" id="9">
          { Array.apply(null, Array(maxPage)).map((data, index) => {
              return <input
                       type="button"
                       value={ index + 1 }
                       key={ `btnPage${index+1}` }
                       className="naveee"
                       onClick={ () => this._changePage(index + 1) } />
            }) }
        </div>
      </div>
      );
  }
}

ListContainer.propTypes = {
  postData: PropTypes.array,
  listType: PropTypes.any,
};

export default ListContainer;
