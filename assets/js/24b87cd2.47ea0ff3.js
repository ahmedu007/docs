"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[52892],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),g=r,N=c["".concat(d,".").concat(g)]||c[g]||m[g]||l;return n?a.createElement(N,i(i({ref:e},p),{},{components:n})):a.createElement(N,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93557:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:8},d="DyteUIConfig",u={unversionedId:"reference/dyte-ui-config",id:"version-1.23/reference/dyte-ui-config",isDocsHomePage:!1,title:"DyteUIConfig",description:"| Property name                   | Data type           | Required | Use                                                                                                                            |",source:"@site/ios_versioned_docs/version-1.23/reference/dyte-ui-config.mdx",sourceDirName:"reference",slug:"/reference/dyte-ui-config",permalink:"/ios/1.23/reference/dyte-ui-config",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-1.23/reference/dyte-ui-config.mdx",tags:[],version:"1.23",lastUpdatedBy:"Amogh Lele",lastUpdatedAt:1651649682,formattedLastUpdatedAt:"5/4/2022",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"version-1.23/mainSidebar",previous:{title:"DyteMeetingViewDelegate",permalink:"/ios/1.23/reference/dyte-meeting-events"}},p=[],m={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dyteuiconfig"},"DyteUIConfig"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Use"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controlBar"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should the control bar (at the bottom of the meeting) be visible to the participant? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controlBarElements"),(0,l.kt)("td",{parentName:"tr",align:null},"NSDictionary"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Object containing element list from control bar to be able to customize what all controls should be visible to the participant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controlBarElements.share"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should the button to invite other participants to the meeting be visible? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controlBarElements.chat"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should the button to open in-meeting chat be visible? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controlBarElements.polls"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should the button to display in-meeting polls be visible? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controlBarElements.participants"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should the button to display participant list be visible? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controlBarElements.plugins"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should the button to activate plugins in a meeting be visible? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should the header bar be visible to the participant? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerElements"),(0,l.kt)("td",{parentName:"tr",align:null},"NSDictionary"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Object containing element list from header to be able to customize what all should be visible to the participant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerElements.logo"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should a logo be visible in the meeting? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerElements.title"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should a title be visible in the meeting? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerElements.participantCount"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should the participant count be visible in the meeting? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerElements.clock"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Should a timer be visible in the meeting? Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logo"),(0,l.kt)("td",{parentName:"tr",align:null},"NSString (url)"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Publicly accessible link to the logo that needs to be shown in the meeting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colors"),(0,l.kt)("td",{parentName:"tr",align:null},"NSDictionary"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Object containing color values to be used as the theme for the meeting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colors.primary"),(0,l.kt)("td",{parentName:"tr",align:null},"NSString (hexColor)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the primary elements like participant name box. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"'#2160FD'"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colors.secondary"),(0,l.kt)("td",{parentName:"tr",align:null},"NSString (hexColor)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the secondary elements like control bar, control buttons, hover. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"'#262626'"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colors.textPrimary"),(0,l.kt)("td",{parentName:"tr",align:null},"NSString (hexColor)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the text elements. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"'#EEEEEE'"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colors.videoBackground"),(0,l.kt)("td",{parentName:"tr",align:null},"NSString (hexColor)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Color behind the video when the video is turned off. Default: ",(0,l.kt)("inlineCode",{parentName:"td"},"'#1A1A1A'"),".")))))}c.isMDXComponent=!0}}]);