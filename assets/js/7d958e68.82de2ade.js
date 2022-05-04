"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[89463],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:2},s="Quickstart",p={unversionedId:"quickstart",id:"version-0.5.x/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Get the roomName for the meeting and the participant's authToken from our backend APIs (read more about our server APIs here), and pass them as props to Dyte's DyteMeeting React Native component.",source:"@site/react-native_versioned_docs/version-0.5.x/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/react-native/0.5.x/quickstart",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.5.x/quickstart.mdx",tags:[],version:"0.5.x",lastUpdatedBy:"Amogh Lele",lastUpdatedAt:1651649682,formattedLastUpdatedAt:"5/4/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.5.2/mainSidebar",previous:{title:"Installation",permalink:"/react-native/0.5.x/installation"},next:{title:"Basic Usage",permalink:"/react-native/0.5.x/usage"}},u=[],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"Get the ",(0,a.kt)("inlineCode",{parentName:"p"},"roomName")," for the meeting and the participant's ",(0,a.kt)("inlineCode",{parentName:"p"},"authToken")," from our backend APIs (read more about our server APIs ",(0,a.kt)("a",{parentName:"p",href:"/api/"},"here"),"), and pass them as props to Dyte's ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," React Native component."),(0,a.kt)("p",null,"You can initialize a meeting in your React Native app, using this component, like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { DyteMeeting } from "@dytesdk/mobile";\n\nfunction App() {\n  return (\n    <DyteMeeting\n      onInit={(meeting) => {}}\n      clientId={`orgId || clientId`}\n      meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`,\n      }}\n    />\n  );\n}\n\nexport default App;\n')))}m.isMDXComponent=!0}}]);