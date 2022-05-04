"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[3482],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,h=c["".concat(p,".").concat(g)]||c[g]||s[g]||l;return t?i.createElement(h,o(o({ref:n},d),{},{components:t})):i.createElement(h,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var u=2;u<l;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},20359:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var i=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],r={sidebar_position:5},p="Plugins",u={unversionedId:"plugins",id:"plugins",isDocsHomePage:!1,title:"Plugins",description:"You may create, manage, and host your own custom plugins with the help of the dyte plugins subcommand.",source:"@site/docs/cli/plugins.mdx",sourceDirName:".",slug:"/plugins",permalink:"/cli/plugins",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mySidebar",previous:{title:"Recordings",permalink:"/cli/recording"},next:{title:"Webhooks",permalink:"/cli/webhooks"}},d=[{value:"Overview",id:"overview",children:[]},{value:"TL;DR",id:"tldr",children:[]},{value:"Usage",id:"usage",children:[{value:"Creating a plugin",id:"creating-a-plugin",children:[]},{value:"Listing your plugins",id:"listing-your-plugins",children:[]},{value:"Viewing plugin details",id:"viewing-plugin-details",children:[]},{value:"Deleting a plugin",id:"deleting-a-plugin",children:[]},{value:"Updating a plugin",id:"updating-a-plugin",children:[]}]},{value:"Releasing plugins",id:"releasing-plugins",children:[{value:"Packaging a plugin",id:"packaging-a-plugin",children:[]},{value:"Publishing a plugin",id:"publishing-a-plugin",children:[]},{value:"Unpublishing a plugin",id:"unpublishing-a-plugin",children:[]}]},{value:"Versioning",id:"versioning",children:[{value:"List",id:"list",children:[]},{value:"Delete",id:"delete",children:[]},{value:"Change latest",id:"change-latest",children:[]}]}],s={toc:d};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"plugins"},"Plugins"),(0,l.kt)("p",null,"You may create, manage, and host your own custom plugins with the help of the ",(0,l.kt)("inlineCode",{parentName:"p"},"dyte plugins")," subcommand."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"You can publish plugins for your organization on Dyte. We manage only the client-side code for plugins, the backend for a plugin (if any) ",(0,l.kt)("strong",{parentName:"p"},"will not")," be hosted by Dyte. Therefore, server-side templating is not supported in plugins."),(0,l.kt)("p",null,"Every functional Dyte plugin requires a configuration file, which is named ",(0,l.kt)("inlineCode",{parentName:"p"},"dyte-config.json")," by default. This contains details about the plugin such as the ",(0,l.kt)("inlineCode",{parentName:"p"},"pluginId"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"description"),", etc. This file is auto-generated upon running the ",(0,l.kt)("inlineCode",{parentName:"p"},"dyte plugins create")," command, which is explained in detail later. You can know more about the ",(0,l.kt)("inlineCode",{parentName:"p"},"dyte-config.json")," file in the description for the ",(0,l.kt)("inlineCode",{parentName:"p"},"publish")," subcommand."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("p",null,"n order to create and publish a plugin, you need to do the following."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte plugins create"),", and enter the details. This should create a ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte-config.json")," file."),(0,l.kt)("li",{parentName:"ol"},"Copy the ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte-config.json")," into the folder containing the ",(0,l.kt)("inlineCode",{parentName:"li"},"index.html")," file of your plugin. If you're using a frontend library like React, this would be the build folder."),(0,l.kt)("li",{parentName:"ol"},"Change your directory to the folder containing the ",(0,l.kt)("inlineCode",{parentName:"li"},"index.html")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte-config.json")," files."),(0,l.kt)("li",{parentName:"ol"},"Modify the ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte-config.json")," file to update the version and the files that will be included and excluded while generating the plugin archive."),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte plugins publish -l")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte plugins publish --latest")," to upload and serve your plugin on Dyte.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"creating-a-plugin"},"Creating a plugin"),(0,l.kt)("p",null,"You can use the following subcommand to create a new Dyte plugin. This sends an API request to register a new plugin under your organization. Additionally, it creates a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"dyte-config.json"),", which is essential for the plugin to function properly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins create\n")),(0,l.kt)("h3",{id:"listing-your-plugins"},"Listing your plugins"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"list | ls")," subcommand can be used to list the names and IDs of all plugins that were created by your organization."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins ls\n")),(0,l.kt)("h3",{id:"viewing-plugin-details"},"Viewing plugin details"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"describe")," subcommand logs the details of a plugin. The ",(0,l.kt)("inlineCode",{parentName:"p"},"pluginId")," is required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins describe -p <plugin id>\n")),(0,l.kt)("h3",{id:"deleting-a-plugin"},"Deleting a plugin"),(0,l.kt)("p",null,"With the help of the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete | rm")," subcommand, you can delete an existing plugin. The ",(0,l.kt)("inlineCode",{parentName:"p"},"pluginId")," is required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins rm -p <plugin id>\n")),(0,l.kt)("h3",{id:"updating-a-plugin"},"Updating a plugin"),(0,l.kt)("p",null,"To update the details of a plugin, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"update")," subcommand. The ",(0,l.kt)("inlineCode",{parentName:"p"},"pluginId")," is required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins update -p <plugin id>\n")),(0,l.kt)("h2",{id:"releasing-plugins"},"Releasing plugins"),(0,l.kt)("h3",{id:"packaging-a-plugin"},"Packaging a plugin"),(0,l.kt)("p",null,"In order to publish a plugin, a ",(0,l.kt)("inlineCode",{parentName:"p"},".dyt")," archive is created with all the client-side source code and the ",(0,l.kt)("inlineCode",{parentName:"p"},"dyte-config.json")," file. This file is required by the ",(0,l.kt)("inlineCode",{parentName:"p"},"publish")," subcommand, which also internally generates this archive. You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"pack")," command if you just want to generate the archive, but do not want to publish it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins pack\n")),(0,l.kt)("h3",{id:"publishing-a-plugin"},"Publishing a plugin"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"publish")," subcommand handles publishing a plugin on Dyte. You must run this command in the directory where the ",(0,l.kt)("inlineCode",{parentName:"p"},"dyte-config.json")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," files of your plugin are present. In the ",(0,l.kt)("inlineCode",{parentName:"p"},"dyte-config.json"),", you can also describe the files you want to include in and exclude from the archive. In order to publish a plugin, you must follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Copy the ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte-config.json")," (which was created by the ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte plugins create")," command) into the folder containing your ",(0,l.kt)("inlineCode",{parentName:"li"},"index.html")," file. In case you're using a frontend library like React, you must copy ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte-config.json")," into the ",(0,l.kt)("inlineCode",{parentName:"li"},"build")," folder."),(0,l.kt)("li",{parentName:"ol"},"Update the plugin version in ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte-config.json"),"."),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"dyte plugins publish -l"),".")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"-l")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--latest")," option is ",(0,l.kt)("strong",{parentName:"p"},"required")," if you want your plugin's new version to be deployed. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"-l")," option is absent, the new version of the plugin will be saved in our storage bucket, but it will not be served. In that case, an older version (if any) will be served. You may not use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-l")," option if you want to upload your code to the storage bucket but you do not want to serve it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins publish -l\n")),(0,l.kt)("h3",{id:"unpublishing-a-plugin"},"Unpublishing a plugin"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"unpublish")," subcommand can be used if you want do not want your plugin to show up on the Dyte plugins panel. The ",(0,l.kt)("inlineCode",{parentName:"p"},"pluginId")," is required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins unpublish\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Note that the plugin and its code will not be deleted, it will just not show up on the panel (and thus become unusable)."))),(0,l.kt)("h2",{id:"versioning"},"Versioning"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," subcommand has 3 subcommands of its own. The ",(0,l.kt)("inlineCode",{parentName:"p"},"pluginId")," is required for each of these subcommands."),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"version list")," can be used to list all versions of your Dyte plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins version list\n")),(0,l.kt)("h3",{id:"delete"},"Delete"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"version delete")," can be used to delete a particular version of your Dyte plugin. This accepts the version you want to delete with the help of the ",(0,l.kt)("inlineCode",{parentName:"p"},"-v")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins version delete -v <version>\n")),(0,l.kt)("h3",{id:"change-latest"},"Change latest"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"version change-latest")," can be used to change the version of your plugin that is served. This accepts the version you want to serve with the help of the ",(0,l.kt)("inlineCode",{parentName:"p"},"-v")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dyte plugins version change-latest -v <version>\n")))}c.isMDXComponent=!0}}]);