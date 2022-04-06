"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[90906],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(55064),u=n(58215),c=["components"],l={sidebar_position:2},s="Quickstart",p={unversionedId:"quickstart",id:"version-0.19.x/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Get the roomName for the meeting and the participant's authToken from our backend APIs (read more about our server APIs here), and pass them as props to Dyte's DyteMeeting React component.",source:"@site/react_versioned_docs/version-0.19.x/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/react/0.19.x/quickstart",editUrl:"https://github.com/dyte-in/docs/tree/main/react_versioned_docs/version-0.19.x/quickstart.mdx",tags:[],version:"0.19.x",lastUpdatedBy:"vi_mi",lastUpdatedAt:1649252694,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.19.x/mainSidebar",previous:{title:"Installation",permalink:"/react/0.19.x/installation"},next:{title:"Basic Usage",permalink:"/react/0.19.x/usage"}},m=[],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Get the ",(0,o.kt)("inlineCode",{parentName:"p"},"roomName")," for the meeting and the participant's ",(0,o.kt)("inlineCode",{parentName:"p"},"authToken")," from our backend APIs (read more about our server APIs ",(0,o.kt)("a",{parentName:"p",href:"/api/"},"here"),"), and pass them as props to Dyte's ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," React component."),(0,o.kt)("p",null,"You can initialize a meeting in your React app, using this component, like below."),(0,o.kt)(i.Z,{groupId:"node-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { DyteMeeting } from "dyte-client";\n\nfunction App() {\n  return (\n    <div className="App">\n      <DyteMeeting\n        onInit={(meeting) => {}}\n        clientId={`orgId || clientId`}\n        meetingConfig={{\n          roomName: `roomName`,\n          authToken: `authToken`,\n        }}\n      />\n    </div>\n  );\n}\n\nexport default App;\n'))),(0,o.kt)(u.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DyteMeeting, Meeting } from "dyte-client";\n\nfunction App() {\n  return (\n    <div className="App">\n      <DyteMeeting\n        onInit={(meeting: Meeting) => {}}\n        clientId={`orgId || clientId`}\n        meetingConfig={{\n          roomName: `roomName`,\n          authToken: `authToken`,\n        }}\n      />\n    </div>\n  );\n}\n\nexport default App;\n')))))}f.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),u="tabItem_1uMI",c="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,a=e.block,l=e.defaultValue,s=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=l?l:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),b=g.tabGroupChoices,y=g.setTabGroupChoices,h=(0,r.useState)(v),k=h[0],x=h[1],O=[];if(null!=p){var N=b[p];null!=N&&N!==k&&f.some((function(e){return e.value===N}))&&x(N)}var w=function(e){var t=e.currentTarget,n=O.indexOf(t),r=f[n].value;x(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,a,o,i,u,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,u=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.default)("tabs__item",u,{"tabs__item--active":k===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{default:function(){return a}})}}]);