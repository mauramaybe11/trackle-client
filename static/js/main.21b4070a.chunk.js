(this["webpackJsonptrackle-client"]=this["webpackJsonptrackle-client"]||[]).push([[0],{118:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(32),c=s.n(r),o=(s(88),s(62)),i=s(17),l=s(18),d=s(22),u=s(21),j=s(12),h=s(122),b=s(2),m=s(3),g=s(0),O=["user","component","render"],x=function(e){var t=e.user,s=e.component,n=e.render,a=Object(m.a)(e,O);return t&&n?Object(g.jsx)(j.b,Object(b.a)(Object(b.a)({},a),{},{render:n})):Object(g.jsx)(j.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return t?Object(g.jsx)(s,Object(b.a)({},e)):Object(g.jsx)(j.a,{to:"/"})}}))},p=s(70),f=(s(97),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,s=e.heading,n=e.message,a=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){a(r)}),300),Object(g.jsx)(p.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(p.a.Heading,{children:s}),Object(g.jsx)("p",{className:"alert-body",children:n})]})})}}]),s}(a.a.Component)),v=s(83),w=s(50),y=s(10),C=Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(y.c,{style:{fontSize:"15px",color:"#ffebcd",textDecoration:"none"},to:"/create-log",className:"nav-link",children:" Create Wordle Log "}),Object(g.jsx)(y.c,{style:{fontSize:"15px",color:"#ffebcd",textDecoration:"none"},to:"/logs",className:"nav-link",children:" See My Words "}),Object(g.jsx)(y.c,{style:{fontSize:"15px",color:"#ffebcd",textDecoration:"none"},to:"/alllogs",className:"nav-link",children:" See All Wordles "}),Object(g.jsx)(y.c,{style:{fontSize:"15px",color:"#ffebcd",textDecoration:"none"},to:"/change-password",className:"nav-link",children:" Change Password "}),Object(g.jsx)(y.c,{style:{fontSize:"15px",color:"#ffebcd",textDecoration:"none"},to:"/sign-out",className:"nav-link",children:" Sign Out "})]}),S=Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(y.c,{style:{fontSize:"15px",color:"#ffebcd",textDecoration:"none"},to:"/sign-up",className:"nav-link",children:" Sign Up "}),Object(g.jsx)(y.c,{style:{fontSize:"15px",color:"#ffebcd",textDecoration:"none"},to:"/sign-in",className:"nav-link",children:" Sign In "})]}),A=Object(g.jsx)(n.Fragment,{children:Object(g.jsx)(y.c,{style:{fontSize:"15px",color:"#ffebcd",textDecoration:"none"},exact:!0,to:"/",className:"nav-link",children:" Home "})}),k=function(e){var t=e.user;return Object(g.jsxs)(w.a,{className:"nav-bar",expand:"md",children:[Object(g.jsx)(w.a.Brand,{children:Object(g.jsx)(y.b,{to:"/",style:{fontSize:"20px",color:"#ffebcd",textDecoration:"none"},children:"Trackle"})}),Object(g.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(v.a,{style:{fontSize:"15px",textDecoration:"none"},className:"ml-auto",children:[A,t?C:S," ",t&&Object(g.jsxs)("span",{className:"welcome",children:["  Wordle you going to do, ",t.email,"    "]})]})})]})},N=s(7),D="https://tracklemay.herokuapp.com",T="http://localhost:8000",U="localhost"===window.location.hostname?T:D,P=s(15),G=s.n(P),L=function(e){return G()({url:U+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},E=s(6),W=s(31),I=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(N.a)({},e.target.name,e.target.value))},n.onSignUp=function(e){e.preventDefault();var t,s=n.props,a=s.msgAlert,r=s.history,c=s.setUser;(t=n.state,G()({method:"POST",url:U+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return L(n.state)})).then((function(e){return c(e.data.user)})).then((function(){return a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){n.setState({email:"",password:"",passwordConfirmation:""}),a({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},n.state={email:"",password:"",passwordConfirmation:""},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.email,s=e.password,n=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("img",{className:"slug-sign-up",src:"https://i.imgur.com/KQplegT.png"}),Object(g.jsxs)(E.a,{className:"sign-up-form-header",onSubmit:this.onSignUp,children:[Object(g.jsxs)(E.a.Group,{controlId:"email",children:[Object(g.jsx)(E.a.Label,{children:"Email address"}),Object(g.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"password",children:[Object(g.jsx)(E.a.Label,{children:"Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"password",value:s,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(E.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(E.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(W.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),s}(n.Component),z=Object(j.f)(I),F=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(N.a)({},e.target.name,e.target.value))},n.onSignIn=function(e){e.preventDefault();var t=n.props,s=t.msgAlert,a=t.history,r=t.setUser;L(n.state).then((function(e){return r(e.data.user)})).then((function(){return s({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return a.push("/hello")})).catch((function(e){n.setState({email:"",password:""}),s({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},n.state={email:"",password:""},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.email,s=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{className:"sign-in-title",children:"Sign In"}),Object(g.jsxs)(E.a,{className:"sign-in-form",onSubmit:this.onSignIn,children:[Object(g.jsxs)(E.a.Group,{controlId:"email",children:[Object(g.jsx)(E.a.Label,{children:"Email address"}),Object(g.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"password",children:[Object(g.jsx)(E.a.Label,{children:"Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"password",value:s,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(W.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),s}(n.Component),q=Object(j.f)(F),_=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,s=e.history,n=e.clearUser;(function(e){return G()({url:U+"/sign-out/",method:"DELETE",headers:{Authorization:"Token ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return s.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),s}(n.Component),H=Object(j.f)(_),B=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(N.a)({},e.target.name,e.target.value))},n.onChangePassword=function(e){e.preventDefault();var t=n.props,s=t.msgAlert,a=t.history,r=t.user;(function(e,t){return G()({url:U+"/change-pw/",method:"PATCH",headers:{Authorization:"Token ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(n.state,r).then((function(){return s({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){n.setState({oldPassword:"",newPassword:""}),s({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},n.state={oldPassword:"",newPassword:""},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,s=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(E.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(E.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(E.a.Label,{children:"Old password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(E.a.Label,{children:"New Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"newPassword",value:s,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)("br",{}),Object(g.jsx)(W.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),s}(n.Component),Y=Object(j.f)(B),M=s(8),J=function(e){var t=e.user,s=e.msgAlert,a=Object(n.useState)({game:"wordle",word:"",guesses:"",date_guessed:""}),r=Object(M.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(null),l=Object(M.a)(i,2),d=l[0],u=l[1],h=function(e){e.persist(),o((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(N.a)({},e.target.name,e.target.value))}))};return d?Object(g.jsx)(j.a,{to:"/logs/".concat(d)}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{className:"slug-log",src:"https://i.imgur.com/yZMRobl.png"}),Object(g.jsxs)(E.a,{className:"edit",onSubmit:function(e){e.preventDefault(),G()({url:"".concat(U,"/logs/"),method:"POST",headers:{Authorization:"Token ".concat(t.token)},data:{log:c}}).then((function(e){return u(e.data.log.id)})).then((function(){return s({heading:"Log Success",message:"Nice wordle log!",variant:"success"})})).catch((function(e){s({heading:"Oops",message:"Upload fail:"+e.message,variant:"danger"})}))},children:[Object(g.jsxs)(E.a.Group,{children:[Object(g.jsx)(E.a.Label,{children:"Word"}),Object(g.jsx)(E.a.Control,{required:!0,value:c.word,name:"word",onChange:h})]}),Object(g.jsxs)(E.a.Group,{children:[Object(g.jsx)(E.a.Label,{children:"Number of Guesses"}),Object(g.jsxs)(E.a.Select,{required:!0,name:"guesses",value:c.guesses,onChange:h,children:[Object(g.jsx)("option",{value:"Enter Selection",children:"Choose from Drop Down"}),Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"}),Object(g.jsx)("option",{value:"6",children:"6"})]})]}),Object(g.jsxs)(E.a.Group,{children:[Object(g.jsx)(E.a.Label,{children:"Date Guessed"}),Object(g.jsx)(E.a.Control,{required:!0,name:"date_guessed",value:c.date_guessed,type:"date",onChange:h})]}),Object(g.jsx)("br",{}),Object(g.jsx)(W.a,{variant:"primary",type:"submit",children:"Submit"})]})]})};var R=function(e){var t,s=e.user,a=e.msgAlert,r=Object(n.useState)([]),c=Object(M.a)(r,2),o=c[0],i=c[1],l=Object(n.useState)(null),d=Object(M.a)(l,2),u=d[0],j=d[1];return Object(n.useEffect)((function(){G()({url:"".concat(U,"/logs/"),method:"GET",headers:{Authorization:"Token ".concat(s.token)}}).then((function(e){i(e.data.logs);var t=0;e.data.logs.forEach((function(e){t+=e.guesses}));var s=t/e.data.logs.length;j(s)})).then((function(){a({heading:"Your Wordles",message:"Nice Games!",variant:"success"})})).catch((function(e){a({heading:"Oops",message:"Index error: "+e.message,variant:"danger"})}))}),[]),o&&(t=o.map((function(e){return Object(g.jsxs)("div",{style:{justifyContent:"center",textAlign:"center"},className:"index",children:[Object(g.jsxs)("h1",{children:["Word: ",e.word]}),Object(g.jsxs)("p",{children:["Guesses ",e.guesses]}),Object(g.jsxs)("p",{children:["Date Word Guessed ",e.date_guessed]}),Object(g.jsxs)("p",{children:["Log Created:",e.created_at.substring(0,10)]}),Object(g.jsxs)("p",{children:["Log Updated:",e.updated_at.substring(0,10)]}),Object(g.jsx)(y.b,{to:"/logs/".concat(e.id),children:Object(g.jsx)(W.a,{className:"btn btn-primary",children:"Select Word"})})]},e.id)}))),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{style:{textAlign:"center",fontSize:"80px"},children:"Trackle"}),Object(g.jsxs)("h4",{style:{textAlign:"center"},children:["Your Guessing Average: ",u]}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(g.jsx)("ul",{style:{display:"flex",flexDirection:"column-reverse",gap:"50px"},children:t})})]})};var V=function(e){var t,s=e.user,a=e.msgAlert,r=Object(n.useState)([]),c=Object(M.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){G()({url:"".concat(U,"/logsall/"),method:"GET",headers:{Authorization:"Token ".concat(s.token)}}).then((function(e){i(e.data.logs)})).then((function(){a({heading:"Everyone's Wordles",message:"Check those Words out!",variant:"success"})})).catch((function(e){a({heading:"Oops",message:"Index error: "+e.message,variant:"danger"})}))}),[]),o&&(t=o.map((function(e){return Object(g.jsxs)("div",{className:"index-all",style:{justifyContent:"center",textAlign:"center"},children:[Object(g.jsx)("h1",{children:e.word}),Object(g.jsxs)("p",{children:["Guesses ",e.guesses]}),Object(g.jsxs)("p",{children:["Date Word Guessed ",e.date_guessed]}),Object(g.jsxs)("p",{children:["User: ",s.email]})]},e.id)}))),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{style:{textAlign:"center",fontSize:"80px"},children:"Trackle"}),Object(g.jsx)("div",{style:{display:"flex",justifyContent:"center",textAlign:"center"},children:Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{className:"slug-index",src:"https://i.imgur.com/b9Iq9f8.png"}),Object(g.jsx)("ul",{style:{display:"flex",flexDirection:"column-reverse",gap:"50px"},children:t})]})})]})},X=s(121);var K=Object(j.f)((function(e){var t=e.user,s=e.match,a=e.msgAlert,r=Object(n.useState)(null),c=Object(M.a)(r,2),o=c[0],i=c[1],l=Object(n.useState)(!1),d=Object(M.a)(l,2),u=d[0],h=d[1],b=Object(n.useState)(!1),m=Object(M.a)(b,2),O=m[0],x=m[1],p=function(){return x(!1)};return Object(n.useEffect)((function(){G()({url:"".concat(U,"/logs/").concat(s.params.id),method:"GET",headers:{Authorization:"Token ".concat(t.token)}}).then((function(e){i(e.data.log)})).catch((function(e){a({heading:"Oops",message:"Index error: "+e.message,variant:"danger"})}))}),[]),o?u?Object(g.jsx)(j.a,{to:{pathname:"/logs",state:{msg:"You successfully deleted your Wordle log"}}}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"show",style:{justifyContent:"center",textAlign:"center"},children:[Object(g.jsx)("h1",{children:"Your Wordle Log"}),Object(g.jsxs)("h2",{children:["Word: ",o.word]}),Object(g.jsxs)("p",{children:["Number of Guesses:",o.guesses]}),Object(g.jsxs)("p",{children:["Date Word Was Guessed:",o.date_guessed]}),Object(g.jsxs)("p",{children:["Log Created:",o.created_at.substring(0,10)]}),Object(g.jsxs)("p",{children:["Log Updated:",o.updated_at.substring(0,10)]}),Object(g.jsx)(W.a,{variant:"primary",style:{marginLeft:"5px"},onClick:function(){return x(!0)},children:"Delete Wordle Log"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(y.b,{to:"/logs/"+s.params.id+"/edit",children:Object(g.jsx)(W.a,{style:{marginLeft:"5px"},children:"Edit Wordle Log"})}),Object(g.jsxs)(X.a,{show:O,onHide:p,children:[Object(g.jsx)(X.a.Header,{className:"modal-delete",closeButton:!0,children:Object(g.jsx)(X.a.Title,{className:"modal-delete",children:"Delete Post"})}),Object(g.jsx)(X.a.Body,{className:"modal-delete",children:"Are you sure you want to delete?"}),Object(g.jsxs)(X.a.Footer,{className:"modal-delete",children:[Object(g.jsx)(W.a,{variant:"secondary",onClick:p,children:"Close"}),Object(g.jsx)(W.a,{variant:"primary",onClick:function(){G()({url:"".concat(U,"/logs/").concat(s.params.id),method:"DELETE",headers:{Authorization:"Token ".concat(t.token)}}).then((function(){return h(!0)})).then((function(){a({heading:"Deleted",message:"Tracked Wordle Deleted",variant:"success"})})).catch((function(e){a({heading:"It's not going anywhere!",message:"Delete error: "+e.message,variant:"danger"})}))},children:"Delete"})]})]})]})}):Object(g.jsx)("p",{children:"Loading..."})}));var Q=Object(j.f)((function(e){var t=e.user,s=e.match,a=e.msgAlert,r=Object(n.useState)({game:"wordle",word:"",guesses:"",date_guessed:""}),c=Object(M.a)(r,2),o=c[0],i=c[1],l=Object(n.useState)(!1),d=Object(M.a)(l,2),u=d[0],h=d[1];Object(n.useEffect)((function(){G()({url:"".concat(U,"/logs/").concat(s.params.id),method:"GET",headers:{Authorization:"Token ".concat(t.token)}}).then((function(e){i(e.data.log)}))}),[]);var m=function(e){e.persist(),i((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(N.a)({},e.target.name,e.target.value))}))};return o?u?Object(g.jsx)(j.a,{to:{pathname:"/logs",state:{msg:"You successfully updated your Meme"}}}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(E.a,{className:"edit",onSubmit:function(e){e.preventDefault(),G()({url:"".concat(U,"/logs/").concat(s.params.id,"/"),method:"PATCH",data:{log:o},headers:{Authorization:"Token ".concat(t.token)}}).then((function(){return h(!0)})).catch((function(e){a({heading:"Oops",message:"Update error: "+e.message,variant:"danger"})}))},children:[Object(g.jsxs)(E.a.Group,{children:[Object(g.jsx)(E.a.Label,{children:"Word"}),Object(g.jsx)(E.a.Control,{required:!0,defaultValue:o.word,name:"word",onChange:m})]}),Object(g.jsxs)(E.a.Group,{children:[Object(g.jsx)(E.a.Label,{children:"Number of Guesses"}),Object(g.jsxs)(E.a.Select,{required:!0,name:"guesses",value:o.guesses,onChange:m,children:[Object(g.jsx)("option",{value:"Enter Selection",children:"Choose from Drop Down"}),Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"}),Object(g.jsx)("option",{value:"6",children:"6"})]})]}),Object(g.jsxs)(E.a.Group,{children:[Object(g.jsx)(E.a.Label,{children:"Date Guessed"}),Object(g.jsx)(E.a.Control,{required:!0,name:"date_guessed",defaultValue:o.date_guessed,type:"date",onChange:m})]}),Object(g.jsx)(W.a,{variant:"primary",type:"submit",children:"Submit"})]})}):Object(g.jsx)("p",{children:"Loading..."})}));var Z=function(){var e=Object(n.useState)(!1),t=Object(M.a)(e,2),s=t[0],a=t[1],r=function(){return a(!1)};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{style:{textAlign:"center"},children:[Object(g.jsx)("h1",{className:"title",children:"Trackle"}),Object(g.jsx)(W.a,{className:"modal-home-button",onClick:function(){return a(!0)},children:"What even is Trackle?"}),Object(g.jsxs)(X.a,{show:s,onHide:r,children:[Object(g.jsx)(X.a.Header,{className:"modal-home",closeButton:!0,children:Object(g.jsx)(X.a.Title,{className:"modal-home-header",children:"Trackle is a Wordle Tracking App"})}),Object(g.jsx)(X.a.Body,{className:"modal-home",children:"Trackle allows for you to track your everyday wordle score. You can view the average number of guesses that it takes for you to guess your words. "}),Object(g.jsx)(X.a.Footer,{className:"modal-home",children:Object(g.jsx)(W.a,{variant:"secondary",onClick:r,children:"Close"})})]}),Object(g.jsx)("img",{className:"slug",src:"https://i.imgur.com/6SsXfBk.png"})]})})};var $=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{style:{textAlign:"center"},children:Object(g.jsx)("img",{className:"slug",src:"https://i.imgur.com/X4smAya.png"})})})},ee=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).setUser=function(e){return n.setState({user:e})},n.clearUser=function(){return n.setState({user:null})},n.deleteAlert=function(e){n.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},n.msgAlert=function(e){var t=e.heading,s=e.message,a=e.variant,r=Object(h.a)();n.setState((function(e){return{msgAlerts:[].concat(Object(o.a)(e.msgAlerts),[{heading:t,message:s,variant:a,id:r}])}}))},n.state={user:null,msgAlerts:[]},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.msgAlerts,a=t.user;return Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(k,{user:a}),s.map((function(t){return Object(g.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(g.jsx)(Z,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(j.b,{path:"/sign-up",render:function(){return Object(g.jsx)(z,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(j.b,{path:"/sign-in",render:function(){return Object(g.jsx)(q,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(x,{user:a,path:"/hello",render:function(){return Object(g.jsx)($,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(g.jsx)(x,{user:a,path:"/sign-out",render:function(){return Object(g.jsx)(H,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(g.jsx)(x,{user:a,path:"/change-password",render:function(){return Object(g.jsx)(Y,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(x,{user:a,path:"/create-log",render:function(){return Object(g.jsx)(J,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(g.jsx)(x,{exact:!0,user:a,path:"/logs",render:function(){return Object(g.jsx)(R,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(g.jsx)(x,{user:a,path:"/alllogs",render:function(){return Object(g.jsx)(V,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(g.jsx)(x,{user:a,path:"/logs/:id",render:function(){return Object(g.jsx)(K,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(g.jsx)(x,{user:a,path:"/logs/:id/edit",render:function(){return Object(g.jsx)(Q,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}})]})]})}}]),s}(n.Component),te=Object(g.jsx)(y.a,{basename:"/trackle-client",children:Object(g.jsx)(ee,{})});c.a.render(te,document.getElementById("root"))},88:function(e,t,s){},97:function(e,t,s){}},[[118,1,2]]]);
//# sourceMappingURL=main.21b4070a.chunk.js.map