(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[445],{6639:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(n(5697));var r=s(n(7294)),o="/Users/cedric/Code/react-responsive-masonry/src/Masonry/index.js";function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=function(e){var t,n;function s(){return e.apply(this,arguments)||this}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=s.prototype;return a.getColumns=function(){var e=this.props,t=e.children,n=e.columnsCount,o=Array.from({length:n},(function(){return[]}));return r.default.Children.forEach(t,(function(e,t){o[t%n].push(e)})),o},a.renderColumn=function(e){var t=this,n=this.props.gutter;return e.map((function(e,s){return r.default.createElement("div",{key:s,style:{marginTop:s>0?n:void 0},__self:t,__source:{fileName:o,lineNumber:19,columnNumber:7}},e)}))},a.renderColumns=function(){var e=this,t=this.props.gutter;return this.getColumns().map((function(n,s){return r.default.createElement("div",{key:s,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,marginLeft:s>0?t:void 0},__self:e,__source:{fileName:o,lineNumber:28,columnNumber:7}},e.renderColumn(n))}))},a.render=function(){var e=this.props,t=e.className,n=e.style;return r.default.createElement("div",{style:l({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%"},n),className:t,__self:this,__source:{fileName:o,lineNumber:48,columnNumber:7}},this.renderColumns())},s}(r.default.Component);a.propTypes={},a.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var u=a;t.default=u},5058:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;(o=n(5697))&&o.__esModule;var o,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n(7294));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}var a=function(){return"undefined"==typeof window?null:window.innerWidth},u=function(e){var t,n,r,o,l,u=e.columnsCountBreakPoints,i=e.children,c=e.className,f=e.style,d=(t=(0,s.useState)(a()),n=t[0],r=t[1],o="undefined"!=typeof window,l=(0,s.useCallback)((function(){r(a())}),[]),(0,s.useEffect)((function(){if(o)return window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}}),[o,l]),n),m=(0,s.useMemo)((function(){var e=Object.keys(u).sort((function(e,t){return e-t})),t=e.length>0?u[e[0]]:1;return e.forEach((function(e){e<d&&(t=u[e])})),t}),[d,u]);return s.default.createElement("div",{className:c,style:f,__self:undefined,__source:{fileName:"/Users/cedric/Code/react-responsive-masonry/src/ResponsiveMasonry/index.js",lineNumber:56,columnNumber:5}},s.default.Children.map(i,(function(e,t){return s.default.cloneElement(e,{key:t,columnsCount:m})})))};u.propTypes={},u.defaultProps={columnsCountBreakPoints:{350:1,750:2,900:3},className:null,style:null};var i=u;t.default=i},4697:function(e,t,n){"use strict";Object.defineProperty(t,"GD",{enumerable:!0,get:function(){return o.default}}),t.ZP=void 0;var r=s(n(6639)),o=s(n(5058));function s(e){return e&&e.__esModule?e:{default:e}}var l=r.default;t.ZP=l},7203:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(8227),s=n(5444),l=n(410),a=n(4697),u=n(3751);t.default=function(){var e=(0,s.useStaticQuery)("3137364414");return r.createElement(o.Z,null,r.createElement(u.Z,{title:"Designs"}),r.createElement("div",{className:"min-h-screen"},r.createElement("div",{className:"text-9xl text-red-600 mt-5"},"Designs!"),r.createElement("p",{className:"pt-5"},"Here are some the designs I made while taking a Graphics Design Course @ Berehana Selam Printing Technology college. All of the desings are made using Adobe Photoshop,Illustrator and InDesign. Most of them are magazine cover,flyers,banners, rollups and postcards"),r.createElement("p",{className:"pt-5 text-blue-800 text-2xl  font-semibold"},"Photoshop Designs"),r.createElement("div",{className:"pt-5"},r.createElement(a.GD,{columnsCountBreakPoints:{350:1,750:2,900:3}},r.createElement(a.ZP,null,e.allDesignsJson.nodes[0].graphics_designs.map((function(e,t){var n=e.childImageSharp;return r.createElement("div",{key:t,className:"flex p-2  rounded-lg"},r.createElement(l.G,{key:t,className:"px-8 py-6 rounded-lg hover:shadow-2xl duration-300 cursor-pointer",image:n.gatsbyImageData,alt:"Rz-Design"}))}))))),r.createElement("p",{className:"pt-5 text-yellow-800 text-2xl  font-semibold"},"Illustrator Designs"),r.createElement("div",{className:"text-5xl text-center font-extrabold text-gray-500 p-10 "},"Coming Soon!"),r.createElement("p",{className:"pt-5 text-red-800 text-2xl  font-semibold"},"Indesign Designs"),r.createElement("div",{className:"text-5xl text-center font-extrabold text-gray-500 p-10 "},"Coming Soon!")))}}}]);
//# sourceMappingURL=component---src-pages-designs-js-673a3aa516047d3a4606.js.map