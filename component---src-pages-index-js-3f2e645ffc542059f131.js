(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(237),o=(a(77),a(54),a(35),a(75)),l=a.n(o),c=a(493),s=a(323),u=(a(437),a(502)),d=a(503),p=function(e){var t=e.field,a=l()(e,["field"]);return r.a.createElement(u.a,Object.assign({},t,a))},m=Object(c.c)({mapPropsToValues:function(e){return{tel:e.tel||""}},validationSchema:s.object().shape({tel:s.string().matches(/^[1-9]{2,3}[0-9]{2,3}[0-9]{4,5}[0-9]{4,5}$/,"Numero de telefone invalido")}),handleSubmit:function(e){var t=e.tel;window.open("https://wa.me/"+t)}})(function(e){var t=e.errors,a=e.touched,n=e.values;return r.a.createElement(c.b,null,r.a.createElement("div",{style:{padding:"5px"}},r.a.createElement("p",{style:{color:"gray"}},"Digite o n° ( Ex.:55 11 97718-5120 )"),r.a.createElement(c.a,{size:"huge",name:"tel",type:"tel",component:p,placeholder:"5511977185120"}),t.tel&&a.tel&&r.a.createElement("p",{style:{color:"red"}},t.tel)),r.a.createElement(d.a.Group,{size:"big"},r.a.createElement(d.a,{positive:!0,type:"submit",disabled:t.tel||!n.tel},"Chamar"),r.a.createElement(d.a.Or,null),r.a.createElement(d.a,{disabled:t.tel||!n.tel,onClink:function(){navigator.share({Title:"Share",url:"https://wa.me/"+n.tel})}},"Compartilhe o Link")))}),g=a(209);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(g.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h3",null,"Inicie uma conversa no",r.a.createElement("br",null)," WhatsApp Agora"),r.a.createElement(m,null))}},178:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=(a(32),a(179),r.a.createContext({})),c=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},179:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},206:function(e){e.exports={data:{site:{siteMetadata:{title:"Chama no Zap"}}}}},207:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(56),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},208:function(e,t,a){e.exports=a.p+"static/whatsapp-icon-d70726b9a64235a3775070428244f52c.png"},209:function(e,t,a){"use strict";var n=a(210),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(242),s=a.n(c),u=a(178);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.a,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"pt-br",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var p="1025518380"},210:function(e){e.exports={data:{site:{siteMetadata:{title:"Chama no Zap",description:"Inicie uma conversa no whatapp sem salvar o numero da pessoa.",author:"@alexandrer_stos"}}}}},237:function(e,t,a){"use strict";var n=a(206),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(178),s=a(208),u=a.n(s),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center",color:"white"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement("img",{src:u.a,alt:"",width:"40"})," ",t)))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var p=d,m=(a(240),a(241),function(e){var t=e.children;return i.a.createElement(c.a,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0,height:"100%"}},i.a.createElement("main",{style:{textAlign:"center"}},t),i.a.createElement("footer",{style:{textAlign:"center",marginTop:"14px"}},"© ",(new Date).getFullYear(),", Developer by"," ",i.a.createElement("a",{href:"https://github.com/AlexandreRStos"},"Alexandre Ramos"))))},data:n})});m.propTypes={children:l.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-3f2e645ffc542059f131.js.map