import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './IndexContainer.scss'

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
                <div id="housebase">
                  <div id="mmm"></div>
                  <div className="mark" id="S">
                    星
                  </div>
                  <div className="mark" id="M">
                    山
                  </div>
                  <div className="mark" id="B">
                    書
                  </div>
                  <div className="mark" id="D">
                    電
                  </div>
                  <div className="house" id="up1"></div>
                  <div className="house" id="up2"></div>
                  <div className="house" id="up3"></div>
                  <div className="house" id="up4"></div>
                  <div className="house" id="downleft">
                    <div className="ad" id="adb">
                      <p className="had">
                        Books
                      </p>
                      <div id="adbm">
                        <img id="adbmi" src="image/adbook4.png" />
                      </div>
                    </div>
                    <div className="ad" id="adm">
                      <p className="had">
                        Movie
                      </p>
                    </div>
                  </div>
                  <div className="house" id="downright">
                    <div className="glass" id="Rglass"></div>
                  </div>
                </div>
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
                  <a id="pg1">
                    <div className="inbook" id="1"></div>
                  </a>
                  <a id="pg2">
                    <div className="inbook" id="2"></div>
                  </a>
                  <a id="pg3">
                    <div className="inbook" id="3"></div>
                  </a>
                  <a id="pg4">
                    <div className="inbook" id="4"></div>
                  </a>
                  <a id="pg5">
                    <div className="inbook" id="5"></div>
                  </a>
                  <a id="pg6">
                    <div className="inbook" id="6"></div>
                  </a>
                  <a id="pg7">
                    <div className="inbook" id="7"></div>
                  </a>
                  <a id="pg8">
                    <div className="inbook" id="8"></div>
                  </a>
                  <a id="pg9">
                    <div className="pagen" id="9"></div>
                  </a>
                </div>
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

IndexContainer.propTypes = {}

IndexContainer.defaultProps = {}

export default IndexContainer
