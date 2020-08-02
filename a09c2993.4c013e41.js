(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(9),r=(a(0),a(155)),o={id:"introduction",title:"Introduction"},s={id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Overview",source:"@site/docs/introduction.md",permalink:"/docs/introduction",editUrl:"https://github.com/winget-run/docs/tree/master/docs/introduction.md",sidebar:"packageApi",next:{title:"Versioning",permalink:"/docs/versioning"}},c=[{value:"Overview",id:"overview",children:[{value:"General",id:"general",children:[]},{value:"Routes",id:"routes",children:[]}]},{value:"Features",id:"features",children:[]},{value:"Often overlooked info",id:"often-overlooked-info",children:[{value:"Undocumented routes",id:"undocumented-routes",children:[]},{value:"Reading the schema",id:"reading-the-schema",children:[]},{value:"URI parameters",id:"uri-parameters",children:[]},{value:"HTTP standards",id:"http-standards",children:[]},{value:"Errors and no data",id:"errors-and-no-data",children:[]},{value:"Pagination",id:"pagination",children:[]},{value:"Ordering and sorting",id:"ordering-and-sorting",children:[]},{value:"Dates",id:"dates",children:[]},{value:"Case sensitivity",id:"case-sensitivity",children:[]},{value:"Package vs manifest",id:"package-vs-manifest",children:[]},{value:"API abuse",id:"api-abuse",children:[]},{value:"FBK",id:"fbk",children:[]}]},{value:"Contributing",id:"contributing",children:[]}],l={rightToc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"This developer-oriented guide outlines the major features and use-cases behind our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://winget.run"}),"winget.run")," REST API. Our major goal for this API has been to empower developers in fetching Winget package data without having to interacting with the GitHub API, possibly running into rate-limits."),Object(r.b)("p",null,"This guide is divided into multiple sections:"),Object(r.b)("h3",{id:"general"},"General"),Object(r.b)("p",null,"This part of the guide outlines generic API information that is required in order to gain access to our data;"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/versioning"}),"Versioning")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/authentication"}),"Authentication")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ratelimiting"}),"Ratelimiting"))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Authentication and ratelimiting in particular may not work properly in API v2 pre-stable release."))),Object(r.b)("h3",{id:"routes"},"Routes"),Object(r.b)("p",null,"This part of the documentation discusses, in detail, the different endpoints available to developers;"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/packages"}),"Packages")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/search"}),"Search")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/stats"}),"Stats")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/manifests"}),"Manifests"))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#package-vs-manifest"}),"Packages")," are cut-down versions of manifest with extra info used by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://winget.run"}),"winget.run"),"."))),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("p",null,"Our API provides a number of features for developers working with Winget packages. In order to display up-to-date package info, we monitor the Winget GitHub repo and sync our data every 30 minutes."),Object(r.b)("p",null,"The following data can be accessed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Raw unmodified manifests"),Object(r.b)("li",{parentName:"ul"},"Cut-down manifests with extra data for use on ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://winget.run"}),"winget.run")),Object(r.b)("li",{parentName:"ul"},"API usage statistics")),Object(r.b)("p",null,"Additionally, we offer the ability to search through all published packages using key-words, bringing back the most relevant results."),Object(r.b)("h2",{id:"often-overlooked-info"},"Often overlooked info"),Object(r.b)("p",null,"This section describes small differences that appear between different REST APIs. While these are not need-to-know things per se, being aware of them will make any developer's life much easier."),Object(r.b)("h3",{id:"undocumented-routes"},"Undocumented routes"),Object(r.b)("p",null,"There are multiple API routes which appear in the production source code but may not be listed here. These routes usually require a specific token and are reserved for the developers' use. If any route is undocumented, it should be considered non-public and unstable and can change at any time. This is still the case even if the route in question appears under a stable API version in the source code."),Object(r.b)("h3",{id:"reading-the-schema"},"Reading the schema"),Object(r.b)("p",null,"Schemas for API responses use two types of formatting; The major data returned from routes is usually given as typescript interfaces, with any non-standard data types explained either explained where they appear or in the 'types' section below. The response schemas themselves are in yaml format and may reference the typescript interfaces."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Despite different schema formatting in the docs, in reality, all responses are returned as application/json."))),Object(r.b)("p",null,"The schema below indicates that on a successful response, the API will return a 200 response with the body being the following json:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Example": [\n    {\n      "Id": "id",\n      "Name": "example"\n    },\n    ...\n  ]\n}\n')),Object(r.b)("h4",{id:"example-schema"},"Example schema"),Object(r.b)("p",null,"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Id: string;\nName: string;\n")),Object(r.b)("h4",{id:"successful-response"},"Successful response"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"Code: 200\nBody:\n  Example: Example[]\n")),Object(r.b)("h3",{id:"uri-parameters"},"URI parameters"),Object(r.b)("p",null,"I was supposed to put something here but I forgot what it was. Ill get to it later\u2122\ufe0f."),Object(r.b)("h3",{id:"http-standards"},"HTTP standards"),Object(r.b)("p",null,"The following http codes can be returned from the API:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"200"),Object(r.b)("li",{parentName:"ul"},"400"),Object(r.b)("li",{parentName:"ul"},"401/403"),Object(r.b)("li",{parentName:"ul"},"404"),Object(r.b)("li",{parentName:"ul"},"500")),Object(r.b)("p",null,"Any 500 reponses should be considered issues on our end and should be reported as bugs on our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/winget-run/api"}),"GitHub repo"),"."),Object(r.b)("p",null,"All responses returned from the API which contain data, return a reponse with an application/json body."),Object(r.b)("h3",{id:"errors-and-no-data"},"Errors and no data"),Object(r.b)("p",null,"Any routes which would return a single datum (not an array) will return a 404, eg. /v2/packages/Microsoft/NonExistentPackage. In contrast, any routes which would return multiple data (an array) will return a 200 and an empty array, eg. /v2/packages/Microsoft."),Object(r.b)("h3",{id:"pagination"},"Pagination"),Object(r.b)("p",null,"Routes which return an array in their response are generally paginated and will be marked as such in these docs. Any paginated route can accept the 'take' and 'page' query parameters. Take represents the number of documents per page, while page represents the page number (starting from 0 ofc) to return documents for."),Object(r.b)("h3",{id:"ordering-and-sorting"},"Ordering and sorting"),Object(r.b)("p",null,"Results for all paginated routes can be sorted and ordered by mulitple fields which depend on the data being requested."),Object(r.b)("h4",{id:"sorting"},"Sorting"),Object(r.b)("p",null,"Sorting can be specified by including a 'sort' query parameter. Since this differs based on the data, allowed fields will be specified along with route-specific docs."),Object(r.b)("h4",{id:"ordering"},"Ordering"),Object(r.b)("p",null,"Ordering is always the same regardless of data; 1 for ascending and -1 for descending and can be specified by setting the 'order' query parameter. The default is always ascending."),Object(r.b)("h4",{id:"take"},"Take"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Min: 1"),Object(r.b)("li",{parentName:"ul"},"Max: 24"),Object(r.b)("li",{parentName:"ul"},"Default: 12")),Object(r.b)("h4",{id:"page"},"Page"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Min: 0"),Object(r.b)("li",{parentName:"ul"},"Default: 0")),Object(r.b)("h3",{id:"dates"},"Dates"),Object(r.b)("p",null,"Any field typed as 'Date' in the API returns an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO 8601")," encoded date as a string."),Object(r.b)("h3",{id:"case-sensitivity"},"Case sensitivity"),Object(r.b)("p",null,"All data passed to and returned from the API is case sensitive. This is reflected in the API response schemas for each route."),Object(r.b)("h3",{id:"package-vs-manifest"},"Package vs manifest"),Object(r.b)("p",null,"Manifests are raw data taken from the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/winget-pkgs"}),"Winget GitHub repo")," and dumped into our database. Packages are our way of representing this data in a way that is more usable for our purposes, such as browsing and searching for packages, as well as being optimised for our database usage. While there is an manifest for each 'winget package' version, there is only a single package which encompasses and lists all the versions for a particular 'winget package'."),Object(r.b)("h3",{id:"api-abuse"},"API abuse"),Object(r.b)("p",null,"There are a few things which we would ask you to not do with our API:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Hitting the rate-limits an excessive amount of time"),Object(r.b)("li",{parentName:"ul"},"Scraping manifest data (you can use the GitHub API for that instead)")),Object(r.b)("h3",{id:"fbk"},"FBK"),Object(r.b)("p",null,"Will you be my wife?"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Alco was involved, only a single human was harmed (mentally and emotionally) while making these docs."))),Object(r.b)("h2",{id:"contributing"},"Contributing"),Object(r.b)("p",null,"As you can probably imagine, this project requires a lot of work and many a developer has lost their sanity already. If you want to help us out you can do so in a multitude of ways. If you think you can help by doing any of the following or in some other way, please contact us or report any bugs/ideas on our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/winget-run/docs"}),"GitHub repo"),";"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Helping with development (devops, backend, frontend, design)."),Object(r.b)("li",{parentName:"ul"},"Helping advertise out site. ",Object(r.b)("em",{parentName:"li"},"<--- we're exceedingly bad at this!")),Object(r.b)("li",{parentName:"ul"},"Helping do mundane stuff (like writing docs)."),Object(r.b)("li",{parentName:"ul"},"Reporting bugs and inconsistencies such as missing packages."),Object(r.b)("li",{parentName:"ul"},"Giving us ideas for how to make our site/API better."),Object(r.b)("li",{parentName:"ul"},"Supporting us via ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://ko-fi.com/wingetdotrun"}),"monetary donation")," (servers are expensive).")))}b.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,h=d["".concat(o,".").concat(p)]||d[p]||u[p]||r;return a?i.a.createElement(h,s(s({ref:t},l),{},{components:a})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);