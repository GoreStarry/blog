import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from './IndexContainer.scss'

import StoreHouse from './components/StoreHouse/StoreHouse.jsx';
import ListContainer from './containers/ListContainer/ListContainer.jsx';

class IndexContainer extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="IndexContainer">
        <div id="light">
          <div id="fblikepo">
            <div
              className="fb-like-box"
              data-href="https://www.facebook.com/StarryMooks?ref=hl&amp;ref_type=bookmark"
              data-colorscheme="dark"
              data-show-faces="false"
              data-header="false"
              data-stream="false"
              data-show-border="false"></div>
          </div>
          <StoreHouse/>
          <ListContainer {...this.props} />
          <div id="ground">
            <div id="tip">
              ⇪請點選上方看板⇪
            </div>
            <div id="imform">
              Copyright © 2014 Project.Thrill-t3 All rights reserved.
            </div>
            <div className="nav" id="navbook">
              <ul>
                <li id="booktop">
                  BOOK：
                </li>
                <li id="bnew">
                  NEW!!
                </li>
                <li id="novel">
                  NOVEL
                </li>
                <li id="comic">
                  COMIC
                </li>
                <a href="#pg1"></a>
              </ul>
            </div>
            <div className="nav" id="navmovie">
              <ul>
                <li id="movietop">
                  MOVIE：
                </li>
                <li id="mnew">
                  NEW!!
                </li>
                <li id="movie">
                  MOVIE
                </li>
                <li id="TV">
                  TV
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

IndexContainer.propTypes = {
  dataRemark: PropTypes.array,
  dataJsFrontMatter: PropTypes.array,
}

IndexContainer.defaultProps = {}

export default IndexContainer
