webpackJsonp([0x486811019d936800,0x36dfee11ec260a00],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/GoreStarry/Documents/web/blog/gatsby-starry-mooks/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/GoreStarry/Documents/web/blog/gatsby-starry-mooks/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/GoreStarry/Documents/web/blog/gatsby-starry-mooks/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/GoreStarry/Documents/web/blog/gatsby-starry-mooks/node_modules/babel-preset-env/lib/index.js","/Users/GoreStarry/Documents/web/blog/gatsby-starry-mooks/node_modules/babel-preset-stage-0/lib/index.js","/Users/GoreStarry/Documents/web/blog/gatsby-starry-mooks/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s=r("./node_modules/react/react.js"),a=o(s),l=r("./src/layouts/index.jsx"),u=o(l),i=r("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),d=o(i);t.default=function(e){return a.default.createElement(u.default,n({},e,d.default))},e.exports=t.default},"./gatsby-config.js":function(e,t){(function(t){"use strict";e.exports={pathPrefix:"/blog",siteMetadata:{title:"Gatsby Default Starter"},plugins:[{resolve:"gatsby-source-filesystem",options:{name:"pages",path:t+"/src/pages/"}},"gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-postcss-sass",options:{postCssPlugins:[]}},"gatsby-transformer-javascript-static-exports","gatsby-transformer-remark"]}}).call(t,"/")},"./src/layouts/index.jsx":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r("./node_modules/react/react.js"),i=o(u),d=r("./node_modules/prop-types/index.js"),c=o(d),p=r("./node_modules/gatsby-link/index.js"),f=o(p),b=r("./node_modules/react-helmet/lib/Helmet.js"),m=o(b),y=r("./gatsby-config.js"),g=o(y),j=g.default.pathPrefix+"/",h=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",null,this.props.location.pathname===j?i.default.createElement("div",null,i.default.createElement(m.default,{title:"Gatsby Default Starter",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),this.props.children()):i.default.createElement("div",null,i.default.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.default.createElement("h1",{style:{margin:0}},i.default.createElement(f.default,{to:"/",style:{color:"white",textDecoration:"none"}}," Gore Starry ")))),i.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},this.props.children())))}}]),t}(i.default.Component);h.propTypes={children:c.default.func},t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-jsx-a02fbd780d004298ec16.js.map