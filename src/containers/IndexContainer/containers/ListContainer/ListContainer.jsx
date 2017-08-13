import React, { PureComponent, PropTypes } from 'react';
import './ListContainer.scss';

class ListContainer extends PureComponent {
  render() {
    console.log(this.props.dataJsFrontMatter);
    const {dataJsFrontMatter} = this.props;
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
        { dataJsFrontMatter.map((post, index) => {
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
        <div id="pg1">
          <div
            className="inbook"
            style={ { height: window.innerHeight * 0.85 } }
            id="1">
            <img src={ require("../../components/StoreHouse/images/adbook4.png") } alt=""></img>
            <h1>TEst</h1>
            <h2>123</h2>
            <p>
              123
            </p> <a href="">（繼續閱讀）</a>
          </div>
        </div>
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
      );
  }
}

ListContainer.propTypes = {
  dataRemark: PropTypes.array,
  dataJsFrontMatter: PropTypes.array,
};

export default ListContainer;
