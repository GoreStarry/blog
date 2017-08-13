import React, { PureComponent, PropTypes } from 'react';

import './StoreHouse.scss';

class StoreHouse extends PureComponent {
  render() {
    return (
      <div id="housebase" style={ { height: window.innerHeight } }>
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
              <img id="adbmi" src={ require("./images/adbook4.png") } />
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
      );
  }
}

StoreHouse.propTypes = {

};

export default StoreHouse;
