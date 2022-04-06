"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[69986],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=r,g=f["".concat(s,".").concat(m)]||f[m]||d[m]||o;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return f},default:function(){return g}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=n(55064),l=n(58215),s=["components"],u={sidebar_position:2},c="Quickstart",d={unversionedId:"quickstart",id:"version-1.12/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Get the roomName for the meeting and the participant's authToken from our backend APIs (read more about our server APIs here), and pass them to Dyte's client SDK.",source:"@site/ios_versioned_docs/version-1.12/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/ios/1.12/quickstart",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-1.12/quickstart.mdx",tags:[],version:"1.12",lastUpdatedBy:"vi_mi",lastUpdatedAt:1649252694,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-1.12/mainSidebar",previous:{title:"Installation",permalink:"/ios/1.12/installation"},next:{title:"Basic Usage",permalink:"/ios/1.12/usage"}},f=[{value:"Programatically",id:"programatically",children:[]},{value:"Using Storyboard",id:"using-storyboard",children:[]}],m={toc:f};function g(e){var t=e.components,u=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Get the ",(0,o.kt)("inlineCode",{parentName:"p"},"roomName")," for the meeting and the participant's ",(0,o.kt)("inlineCode",{parentName:"p"},"authToken")," from our backend APIs (read more about our server APIs ",(0,o.kt)("a",{parentName:"p",href:"/api/"},"here"),"), and pass them to Dyte's client SDK."),(0,o.kt)("p",null,"There are 2 ways to manage a meeting view:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Programatically"),(0,o.kt)("li",{parentName:"ol"},"Using Storyboard")),(0,o.kt)("h2",{id:"programatically"},"Programatically"),(0,o.kt)(a.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport DyteSdk;\n\nclass ViewController: UIViewController {\n    @IBOutlet weak var videoButton: UIButton?\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        // Do any additional setup after loading the view.\n    }\n\n    @IBAction func joinMeeting(_ sender: Any) {\n        let  config = DyteMeetingConfig();\n        meetingConfig.roomName = "YOUR_ROOM_NAME";\n        meetingConfig.authToken = "YOUR_AUTH_TOKEN";\n        meetingConfig.width = self.view.frame.size.width\n        meetingConfig.height = self.view.frame.size.height\n        let dyteView = DyteMeetingView(frame: CGRect(x: 0, y: 0, width: self.view.bounds.size.width, height:self.view.bounds.size.height ))\n        self.view.addSubview(dyteView)\n        dyteView.join(config);\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import "ViewController.h"\n@import DyteSdk;\n\n@interface ViewController ()\n\n@end\n\n@implementation ViewController\n\n- (void)viewDidLoad {\n    [super viewDidLoad];\n    // Do any additional setup after loading the view.\n}\n\n- (IBAction)joinMeeting:(UIButton *)sender {\n    DyteMeetingConfig *meetingConfig = [[DyteMeetingConfig alloc] init];\n    meetingConfig.roomName = @"YOUR_ROOM_NAME";\n    meetingConfig.authToken = @"YOUR_AUTH_TOKEN";\n    meetingConfig.width = self.view.frame.size.width;\n    meetingConfig.height = self.view.frame.size.height;\n    DyteMeetingView *dyteView = [[DyteMeetingView alloc] initWithFrame:CGRectMake(0.0, 0.0, meetingConfig.width, meetingConfig.height)];\n    [self.view addSubview:dyteView];\n    [dyteView join:meetingConfig];\n}\n\n@end\n')))),(0,o.kt)("h2",{id:"using-storyboard"},"Using Storyboard"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a View in Storyboard and set it's custom class to ",(0,o.kt)("inlineCode",{parentName:"li"},"DyteMeetingView"),". Similar to above example, if you want to use ",(0,o.kt)("inlineCode",{parentName:"li"},"tag"),", you can set that too in Storyboard.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"xcode-screenshot-showing-storyboard-setup",src:n(35874).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Reference the view in your code and initiate the meeting.")),(0,o.kt)(a.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport DyteSdk;\n\nclass ViewController: UIViewController {\n    @IBOutlet weak var videoButton: UIButton?\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        // Do any additional setup after loading the view.\n\n        let  config = DyteMeetingConfig();\n        meetingConfig.roomName = "YOUR_ROOM_NAME";\n        meetingConfig.authToken = "YOUR_AUTH_TOKEN";\n        let dyteView = self.view as DyteMeetingView\n        meetingConfig.width = self.view.frame.size.width\n        meetingConfig.height = self.view.frame.size.height\n        dyteView.join(config)\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import "ViewController.h"\n@import DyteSdk;\n\n@interface ViewController ()\n\n@end\n\n@implementation ViewController\n\n- (void)viewDidLoad {\n    [super viewDidLoad];\n    // Do any additional setup after loading the view.\n\n    DyteMeetingConfig *meetingConfig = [[DyteMeetingConfig alloc] init];\n    meetingConfig.roomName = @"YOUR_ROOM_NAME";\n    meetingConfig.authToken = @"YOUR_AUTH_TOKEN";\n    DyteMeetingView *dyteView = (DyteMeetingView *) self.view;\n    meetingConfig.width = self.view.frame.size.width;\n    meetingConfig.height = self.view.frame.size.height;\n    [dyteView join:meetingConfig];\n}\n\n@end\n')))))}g.isMDXComponent=!0},58215:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(67294),r=n(79443);var o=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,c=e.values,d=e.groupId,f=e.className,m=i.Children.toArray(e.children),g=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),p=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),y=v.tabGroupChoices,w=v.setTabGroupChoices,h=(0,i.useState)(p),b=h[0],k=h[1],C=[];if(null!=d){var O=y[d];null!=O&&O!==b&&g.some((function(e){return e.value===O}))&&k(O)}var D=function(e){var t=e.currentTarget,n=C.indexOf(t),i=g[n].value;k(i),null!=d&&(w(d,i),setTimeout((function(){var e,n,i,r,o,a,l,u;(e=t.getBoundingClientRect(),n=e.top,i=e.left,r=e.bottom,o=e.right,a=window,l=a.innerHeight,u=a.innerWidth,n>=0&&o<=u&&r<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=C.indexOf(e.target)+1;n=C[i]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":r},f)},g.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,a.default)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:N,onFocus:D,onClick:D},null!=n?n:t)}))),n?(0,i.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var i=(0,n(67294).createContext)(void 0);t.Z=i},86010:function(e,t,n){function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.r(t),n.d(t,{default:function(){return r}})},35874:function(e,t,n){t.Z=n.p+"assets/images/ios-setup-4e05106d2933e92cfaac387752ad62bb.png"}}]);