(this.webpackJsonpcodeMaster=this.webpackJsonpcodeMaster||[]).push([[5],{101:function(e,t,n){},102:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),l=n(30),r=n(31),i=n(33),s=n(32),m=n(34),u=n(55),d=(n(60),n(40)),h=n.n(d),p=n(100),g=n(11),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.list,n=e.collapse,a=e.active,c=e.changeActive;return o.a.createElement("div",{className:"sideNavContent ".concat(n?"sideNavhidden":"sideNavshow")},t.slice(1).map((function(e){return o.a.createElement("div",{class:"sideNavItem"},o.a.createElement("div",Object(p.a)({className:"sideNavItemMain"},"className",a==e.name?"active":"inactive"),o.a.createElement(g.b,{to:e.path,onClick:function(){return c(e.name)}},e.name),o.a.createElement("span",null," > ")),e.content&&o.a.createElement("ul",{className:"sideNavList"},e.content.map((function(e){return o.a.createElement("li",{className:a==e.name?"active":"inactive"}," ",o.a.createElement(g.b,{to:e.path,onClick:function(){return c(e.name)}},e.name)," ")}))))})),o.a.createElement("hr",null))}}]),t}(a.Component),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={active:"Getting Started",collapse:!1},n.handleClickOutside=function(e){window.innerWidth<=900&&n.refs.sideNav&&!n.refs.sideNav.contains(e.target)&&n.setState({collapse:!0})},n.changeActive=function(e){n.setState({active:e})},n.handleCollapse=function(){n.setState((function(e){return{collapse:!e.collapse}}))},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this.props.list;return o.a.createElement("div",{className:"sideNav",ref:"sideNav"},o.a.createElement("div",{class:"collapseIcon",onClick:this.handleCollapse},o.a.createElement(h.a,{fontSize:"large"})),o.a.createElement(v,{list:e,collapse:this.state.collapse,active:this.state.active,changeActive:this.changeActive}))}}]),t}(a.Component),f=n(54),b=(n(101),n(102),n(314)),A=n(310),C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.content;return o.a.createElement("div",{className:"docsExample"},o.a.createElement("h3",null,"Example"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row content"},o.a.createElement("div",{className:"codeContainer  col-12 col-md-7"},o.a.createElement("pre",null,o.a.createElement(b.a,{language:"htmlbars",style:A.a},e))),o.a.createElement("div",{className:"codeShow col-12 col-md-5 ",dangerouslySetInnerHTML:{__html:e}}))))}}]),t}(a.Component),y=n(311),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.detail;return o.a.createElement("div",{className:"DocsContent"},o.a.createElement("h2",null," ",t),o.a.createElement("div",{class:"content"},n.map((function(e,t){return"textContent"==e.type?e.intoHtml?o.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.content}}):o.a.createElement("p",null,e.content):"listContent"==e.type?o.a.createElement("ul",{key:t},e.content.map((function(e,n){return o.a.createElement("li",{key:"".concat(t,"_").concat(n)},e)}))):"exampleContent"==e.type?o.a.createElement(C,{content:e.content}):o.a.createElement("code",{key:t,className:"codeContent"},o.a.createElement("pre",null,o.a.createElement(b.a,{language:"htmlbars",style:y.a},e.content)))}))),o.a.createElement("hr",null))}}]),t}(a.Component),j=(n(297),[{title:"Table of Content",detail:[{type:"listContent",content:["HTML","CSS","Javascript","Bootstrap","Git","React","Redux"]}]},{title:"Introduction",detail:[{type:"textContent",intoHtml:!1,content:"In here, we mostly cover about front-end for web development.            for starting the amazing journey of web development. you must need to know about HTML and how             to style it using CSS. Moreover, we are gonna learn about Javascript to             make the website more dynamic"},{type:"textContent",intoHtml:!1,content:"Nowadays, there are several libraries built                 for web developer to ease our way, for instance, Bootstrap, that is well known for the easiness of building                responsive web. We also cover ReactJs that is mostly use by big company like Facebook, Netflix, Slack, Udemy, and many more.                 Along with redux for the state management system."}]},{title:"Let' start our journey",detail:[{type:"textContent",intoHtml:!1,content:""}]}]),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"frontEnd"},o.a.createElement("h2",null," FrontEnd "),j.map((function(e,t){return o.a.createElement(O,{key:t,title:e.title,detail:e.detail})})))}}]),t}(a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null," BackEnd "))}}]),t}(a.Component),B=(n(298),[{title:"What is CodeMaster?",detail:[{type:"textContent",intoHtml:!0,content:"<mark>CodeMaster</mark> is a developer site with tutorials and reference to                 several programming topics such as web development, machine learning, Data structure and algorithm, Database, DevOps                 , covering most aspect of geeks stuff for beginner that want to start their jouurney and for expert                 that want to broaden their knowledge "},{type:"textContent",content:"<mark>CodeMaster</mark> is built by a university student during his second year in                 Nanyang Technology University"}]},{title:"Easy Learning",detail:[{type:"textContent",intoHtml:!0,content:"<mark>CodeMaster</mark> provide full reference to important syntax and how to use them"},{type:"textContent",intoHtml:!0,content:"<mark>CodeMaster</mark> uses simple code example to further explain of the code itself"},{type:"textContent",intoHtml:!0,content:"<mark>CodeMaster</mark> starts from basic level and move all the way to master reference"}]},{title:"Want to Contribute?",detail:[{type:"textContent",intoHtml:!0,content:"For now, <mark>CodeMaster</mark> is free. So you can take full advantage of it.                 if you have something else in mind that want to be included in <mark>CodeMaster</mark>, you can go contribute                 to our open source project in github."}]},{title:"Start Learning Now",detail:[{type:"textContent",intoHtml:!0,content:"Start learning now and become a <mark>Master</mark>"}]}]),G=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"gettingStarted"},o.a.createElement("h2",null,"Getting Started"),B.map((function(e,t){return o.a.createElement(O,{key:t,title:e.title,detail:e.detail})})))}}]),t}(a.Component),N=[{title:"What is HTML?",detail:[{type:"textContent",intoHtml:!1,content:"HTML or Hypertext Markup Language is a templating language.                 Take note that HTML is not a programming language because there is no logic flow here.                 HTML element tell browser how to display the content."},{type:"textContent",intoHtml:!1,content:"HTML elements are displayed by tags."}]},{title:"HTML Element Tags",detail:[{type:"textContent",intoHtml:!1,content:"there are two way of representing Tags:"},{type:"listContent",content:["Starts by open tag <TagName> and close by end tag </TagName>, ex: <p>....</p>, <div>....</div>","single tag by <TagName/>, ex: <hr/>, <br/>"]}]},{title:"HTML Structure",detail:[{type:"textContent",intoHtml:!1,content:"Basic Structure of HTML: "},{type:"codeContent",content:"<!DOCTYPE html>\n<html>   \n    <head>      \n        <title> Title </title>    \n    </head>\n    <body>\n        content goes here\n    </body>\n</html>"},{type:"textContent",intoHtml:!0,content:"<b>Description:</b> "},{type:"listContent",content:["The <!DOCTYPE html>  declaration defines this document to be HTML5","The <html> element is the root element of an HTML page","The <head> element contains meta information about the document","The <title> element specifies a title for the document","The <body> element contains the visible page content"]}]},{title:"HTML Heading and Paragraph",detail:[{type:"listContent",content:["<h1> to <h6> used for heading where h1 is the most important and h6 is the least important ","<p> used to declare a paragraph"]},{type:"exampleContent",content:"<!DOCTYPE html>\n<html>\n    <body>\n        \n    <h1>My First Heading</h1>\n    <h2>My Second Heading</h2>\n    <h3>My Third Heading</h3>\n    <p>My first paragraph.</p>\n        \n    </body>\n</html>"}]},{title:"HTML Images",detail:[{type:"listContent",content:['<img src="<imageSourceFIlE>" alt="<alternate Name if Image does not work>" width=<width> height=<height>']},{type:"exampleContent",content:'<img src="https://beeimg.com/images/h26180623163.jpg" \n    alt="dog picture" \n    width=150 \n    height=150\n/>'}]},{title:"Attributes",detail:[{type:"textContent",content:""}]}],S=(n(299),[{name:"redirect",path:"/docs",exact:!0,hidden:!0,render:function(){return o.a.createElement(c.a,{to:"/docs/GettingStarted"})}},{name:"Getting Started",path:"/docs/GettingStarted",exact:!0,component:G},{name:"Front-End Track",path:"/docs/frontEnd/",exact:!0,component:k,content:[{name:"HTML",path:"/docs/frontEnd/HTML",exact:!0,component:function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"frontEnd-html"},o.a.createElement("h2",null,"HTML"),N.map((function(e,t){return o.a.createElement(O,{key:t,title:e.title,detail:e.detail})})))}}]),t}(a.Component)},{name:"CSS",path:"/docs/frontEnd/CSS",exact:!0,component:function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"CSS"))}}]),t}(a.Component)}]},{name:"Back-End Track",path:"/docs/backEnd",exact:!0,component:w}]),H=(n(300),n(53),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"docs"},o.a.createElement(u.a,{backgroundColor:"rgba(108,108,108,1)"}),o.a.createElement(E,{list:S}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"rightContent"},o.a.createElement(c.d,null,S.map((function(e){return o.a.createElement(c.b,Object.assign({key:e.path},e))})),S.map((function(e){return e.content&&e.content.map((function(e){return o.a.createElement(c.b,Object.assign({key:e.path},e))}))}))))),o.a.createElement(f.a,null))}}]),t}(a.Component));var M=Object(c.g)((function(){return o.a.createElement(c.d,null,o.a.createElement(c.b,{path:"/docs",component:H}))}));t.default=M},36:function(e,t){e.exports="data:image/png;base64,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"},42:function(e,t,n){"use strict";var a=n(30),o=n(31),c=n(33),l=n(32),r=n(34),i=n(0),s=n.n(i),m=n(11),u=n(37),d=(n(48),function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"collapsableNav"},s.a.createElement("div",{className:"collapseContentContainer"},s.a.createElement("div",{className:"collapseContent "+this.props.collapseClass},s.a.createElement("ul",null,[{title:"Home",path:"/",smoothScroll:{isTrue:!1},isLink:!1},{title:"Get Started",path:"/",smoothScroll:{isTrue:!0,to:"subscription"},isLink:!1},{title:"Docs",path:"/docs",smoothScroll:{isTrue:!1},isLink:!1},{title:"Github",link:"https://github.com/Andreas-Sujono/codeMaster",smoothScroll:{isTrue:!1},isLink:!0},{title:"Contact",path:"/",smoothScroll:{isTrue:!0,to:"footer"},isLink:!1}].map((function(e){return s.a.createElement("li",{className:"collapseIndividual"},e.smoothScroll.isTrue?s.a.createElement(u.Link,{activeClass:"active",to:e.smoothScroll.to,spy:!0,smooth:!0,offset:-40,duration:500},e.title):e.isLink?s.a.createElement("a",{href:e.link,target:"_blank"},e.title):s.a.createElement(m.b,{to:e.path},e.title))}))))))}}]),t}(i.Component));t.a=d},43:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";var a=n(0),o=n.n(a),c=(n(52),n(36)),l=n.n(c),r=function(e){return o.a.createElement("div",{className:"footer",id:"footer"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{className:"logoLeft col-md-2 col-12"},o.a.createElement("img",{src:l.a})),o.a.createElement("div",{className:"section1 col-md-4 col-12"},o.a.createElement("h2",null," Services "),o.a.createElement("div",{class:"contentSection1"},o.a.createElement("ul",null,o.a.createElement("li",null,"Front end"),o.a.createElement("li",null,"Back end"),o.a.createElement("li",null,"Machine Learning"),o.a.createElement("li",null,"Computer Science Basic"),o.a.createElement("li",null,"Mobile")))),o.a.createElement("div",{className:"section2 col-md-3 col-12"},o.a.createElement("h2",null," Community "),o.a.createElement("div",{class:"contentSection2"},o.a.createElement("ul",null,o.a.createElement("li",null,"Github")))),o.a.createElement("div",{className:"section3 col-md-3 col-12"},o.a.createElement("h2",null," Contact "),o.a.createElement("div",{class:"contentSection3"},o.a.createElement("ul",null,o.a.createElement("li",null,"email: andr0075@e.ntu.edu.sg"))))))};t.a=r},55:function(e,t,n){"use strict";var a=n(30),o=n(31),c=n(33),l=n(32),r=n(34),i=n(0),s=n.n(i),m=n(11),u=(n(43),n(36)),d=n.n(u),h=n(40),p=n.n(h),g=n(42),v=n(37),E=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={collapse:!0,collapseClass:"hidden"},n.handleCollapse=function(){console.log("clicked"),n.setState((function(e){return{collapse:!e.collapse,collapseClass:"hidden"==e.collapseClass?"show":"hidden"}}))},n}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={backgroundColor:this.props.backgroundColor};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"topNav fluid-container row",style:e},s.a.createElement("div",{class:"leftContent col-4"},s.a.createElement("img",{src:d.a})),s.a.createElement("div",{class:"rightContent col"},s.a.createElement("ul",null,[{title:"Home",path:"/",smoothScroll:{isTrue:!1},isLink:!1},{title:"Get Started",path:"/",smoothScroll:{isTrue:!0,to:"subscription"},isLink:!1},{title:"Docs",path:"/docs",smoothScroll:{isTrue:!1},isLink:!1},{title:"Github",link:"https://github.com/Andreas-Sujono/codeMaster",smoothScroll:{isTrue:!1},isLink:!0},{title:"Contact",path:"/",smoothScroll:{isTrue:!0,to:"footer"},isLink:!1}].map((function(e){return s.a.createElement("li",{className:"collapseIndividual"},e.smoothScroll.isTrue?s.a.createElement(v.Link,{activeClass:"active",to:e.smoothScroll.to,spy:!0,smooth:!0,offset:-40,duration:500},e.title):e.isLink?s.a.createElement("a",{href:e.link,target:"_blank"},e.title):s.a.createElement(m.b,{to:e.path},e.title))})))),s.a.createElement("div",{class:"collapsableIcon col"},s.a.createElement("div",{class:"collapseIcon",onClick:this.handleCollapse}," ",s.a.createElement(p.a,{fontSize:"large",onClick:this.props.handleCollapse})," "))),s.a.createElement(g.a,{collapse:this.state.collapse,collapseClass:this.state.collapseClass}))}}]),t}(i.Component);t.a=E},60:function(e,t,n){}}]);
//# sourceMappingURL=5.3c2b9443.chunk.js.map