(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){e.exports=t.p+"static/media/office-1.c2d37603.jpg"},104:function(e,a,t){e.exports=t.p+"static/media/office-2.5f4d1fad.jpg"},105:function(e,a,t){e.exports=t.p+"static/media/shop-2.79d35e42.jpg"},106:function(e,a,t){e.exports=t.p+"static/media/shop-3.deca3e79.jpg"},107:function(e,a,t){e.exports=t.p+"static/media/shop-4.afeeafe4.jpg"},108:function(e,a,t){e.exports=t.p+"static/media/shop-5.0ac66f11.jpg"},109:function(e,a,t){var n={"./anthony.jpg":110,"./peter.jpg":111,"./ricky.jpg":112};function l(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=109},110:function(e,a,t){e.exports=t.p+"static/media/anthony.adab8c7f.jpg"},111:function(e,a,t){e.exports=t.p+"static/media/peter.caf5c7ed.jpg"},112:function(e,a,t){e.exports=t.p+"static/media/ricky.451bf495.jpg"},113:function(e,a,t){e.exports=t.p+"static/media/about-banner.0ef0cbfe.jpg"},114:function(e,a,t){e.exports=t.p+"static/media/contact-banner.e8488387.jpg"},115:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),c=t.n(r),i=t(12),s=t(13),m=t(15),o=t(14),u=t(16),d=t(11),E=t(8),p=t(3),g=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-md py-3",id:"main-nav"},l.a.createElement(p.HashLink,{to:"/",className:"navbar-brand ml-md-5"},l.a.createElement("img",{src:t(55),alt:"PM Autoworks",style:{height:"auto",maxHeight:"30px",width:"auto",maxWidth:"100%"},className:"rounded img-thumbnail fadeIn"})),l.a.createElement("button",{className:"navbar-toggler custom-toggler collapsed fadeIn",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"navbar-collapse collapse",id:"navbarCollapse"},l.a.createElement("ul",{className:"navbar-nav ml-auto mr-md-5 fadeIn"},l.a.createElement("li",{className:"nav-item dropdown px-2"},l.a.createElement(p.HashLink,{to:"/services",className:"nav-link dropdown-toggle text-warning",role:"button","data-toggle":"dropdown"},"Services"),l.a.createElement("div",{className:"dropdown-menu animate slideIn bg-dark mt-0"},l.a.createElement(p.HashLink,{to:"/services",className:"dropdown-item text-warning"},"Maintenance"),l.a.createElement(p.HashLink,{to:"/services#repairs",className:"dropdown-item text-warning"},"Repairs"),l.a.createElement(p.HashLink,{to:"/services#diagnostics",className:"dropdown-item text-warning"},"Diagnostics"),l.a.createElement(p.HashLink,{to:"/services#performance",className:"dropdown-item text-warning"},"Performance"))),l.a.createElement("li",{className:"nav-item dropdown px-2"},l.a.createElement(p.HashLink,{to:"/about",className:"nav-link dropdown-toggle text-warning",role:"button","data-toggle":"dropdown"},"About Us"),l.a.createElement("div",{className:"dropdown-menu animate slideIn bg-dark mt-0"},l.a.createElement(p.HashLink,{to:"/about",className:"dropdown-item text-warning"},"About The Shop"),l.a.createElement(p.HashLink,{to:"/about#team",className:"dropdown-item text-warning"},"Meet The Team"))),l.a.createElement("li",{className:"nav-item px-2"},l.a.createElement(p.HashLink,{to:"/contact",className:"nav-link btn btn-outline-warning text-warning px-2"},"Contact Us")))))}}]),a}(n.Component),f=t(24),h=t.n(f),b=t(41),v=t(10),w={yelpAPI:"2-3_6Okqjx6StxxiXhyUyS1abYV-gimKn80053UEzcGqFbrA4ohp2fz-j6mjg_wDD9bn66i-FHIPigvcMOHwoHZ8K3_pC9A1l6Ehf3G7YxB-tgCTrm7FwXSGjDkQXXYx",mapAPI:"AIzaSyASJQccFMAOaxqi_gx0tftXIK8uC6O0WX0"},N=t(42),k=t.n(N),x=t(43),y=t.n(x),S=function(e){for(var a=e.review,t=a.text,r=a.url,c=a.rating,i=a.user,s=i.image_url,m=i.name,o="",u=0;u<c;u++)o+='<i className="fas fa-star text-warning" />';return l.a.createElement(n.Fragment,null,c>=4&&l.a.createElement("div",{className:"col-md-4 mx-auto"},l.a.createElement("div",{className:"card mb-3"},l.a.createElement("div",{className:"card-body text-center px-2"},l.a.createElement("img",{src:s,alt:"",className:"img-fluid rounded-circle w-50 mb-3"}),l.a.createElement("h2",null,m),l.a.createElement("span",null,y()(o)),l.a.createElement("p",null,t),l.a.createElement("a",{href:r,className:"btn btn-warning d-block",target:"_blank",rel:"noopener noreferrer"},"".concat(m.split(" ")[0],"'s Full Review"))))))},j=function(){return l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"spinner-border text-warning  mb-5",role:"status",style:{height:"3rem",width:"3rem"}},l.a.createElement("span",{className:"sr-only"},"Loading...")))},M=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),r=a[0],c=a[1],i=Object(n.useState)(!0),s=Object(v.a)(i,2),m=s[0],o=s[1],u=function(){var e=Object(b.a)(h.a.mark(function e(){var a,t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"Bearer ".concat(w.yelpAPI)}},e.prev=3,e.next=6,k.a.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/pm-autoworks-subaru-specialist-san-jose-8/reviews",a);case 6:t=e.sent,c(t.data.reviews),o(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),o(!1),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[3,11]])}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){u()},[]),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{src:t(86),alt:""}),l.a.createElement("div",{className:"centered"},l.a.createElement("h2",{className:"display-2 fadeIn"},l.a.createElement("strong",null,"PM Autoworks")))),l.a.createElement("section",{id:"landing-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 mx-auto "},l.a.createElement("div",{className:"container text-center py-3"},l.a.createElement("h1",null,"Subaru Specialists"),l.a.createElement("p",null,"Established in 2016, PM Autoworks is a professional repair/performance shop specializing in Subaru vehicles. With over a decade of experience with Subaru, our ASE Certified technicians have the knowledge to help you maintain your vehicle in great shape for the road.")))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-lg-3 mb-2 text-center"},l.a.createElement(p.HashLink,{to:"/services"},l.a.createElement("i",{className:"circle-icon fas fa-car fa-3x"})),l.a.createElement("h3",null,"Maintenance"),l.a.createElement("img",{src:t(87),alt:"",className:"img-fluid rounded mb-3",style:{maxHeight:"180px"}})),l.a.createElement("div",{className:"col-md-6 col-lg-3 mb-2 text-center"},l.a.createElement(p.HashLink,{to:"/services#repairs"},l.a.createElement("i",{className:"circle-icon fas fa-tools fa-3x"})),l.a.createElement("h3",null,"Repairs"),l.a.createElement("img",{src:t(88),alt:"",className:"img-fluid rounded mb-3",style:{maxHeight:"180px"}})),l.a.createElement("div",{className:"col-md-6 col-lg-3 mb-2 text-center"},l.a.createElement(p.HashLink,{to:"/services#diagnostics"},l.a.createElement("i",{className:"circle-icon fas fa-cogs fa-3x"})),l.a.createElement("h3",null,"Diagnostics"),l.a.createElement("img",{src:t(89),alt:"",className:"img-fluid rounded mb-3",style:{maxHeight:"180px"}})),l.a.createElement("div",{className:"col-md-6 col-lg-3 mb-2 text-center"},l.a.createElement(p.HashLink,{to:"/services#performance"},l.a.createElement("i",{className:"circle-icon fas fa-fire-alt fa-3x"})),l.a.createElement("h3",null,"Performance"),l.a.createElement("img",{src:t(90),alt:"",className:"img-fluid rounded mb-3",style:{maxHeight:"180px"}}))))),l.a.createElement("section",{id:"warranty"},l.a.createElement("div",{className:"dark-overlay"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"container py-5"},l.a.createElement("h2",null,"One-year / 12,000-Mile Warranty"),l.a.createElement("p",{className:"d-none d-md-block"},"We believe that auto care should be a hassle-free experience. We have built trusted customer relationships based on PM Autoworks' reliability and professional service. And because we know that quality parts and services are important to you, we stand behind them with our guarantees.")))))),l.a.createElement("section",{id:"yelp"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-center py-5"},l.a.createElement("h3",null,"Our Clients ",l.a.createElement("i",null,"Trust")," Us"),l.a.createElement("p",null,"We understand that"," ",l.a.createElement("i",null,l.a.createElement("strong",null,"trust"))," ","is a difficult thing to build and easily lost. Which is why we take pride in our craftsmanship and building strong"," ",l.a.createElement("i",null,l.a.createElement("strong",null,"relationships"))," ","with our clients. See what others are saying about us on"," ",l.a.createElement("a",{href:"https://www.yelp.com/biz/pm-autoworks-subaru-specialist-san-jose-8",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"text-dark"},l.a.createElement("strong",null,"Yelp ",l.a.createElement("i",{className:"fab fa-yelp"})))),"."),l.a.createElement("img",{src:t(91),alt:"2017-yelp",className:"img-fluid"}))),m?l.a.createElement(j,null):l.a.createElement("div",{className:"row py-5",id:"authors"},r.map(function(e){return l.a.createElement(S,{review:e,key:e.id})})))),l.a.createElement("section",{id:"booking"},l.a.createElement("div",{className:"dark-overlay"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col p-5"},l.a.createElement("h3",null,"Schedule Your Appointment Now"),l.a.createElement(p.HashLink,{to:"/contact"},l.a.createElement("button",{className:"btn btn-warning btn-lg",type:"button"},"Contact Us"))))))))},A=function(){return l.a.createElement("div",{className:"card border-warning sticky-top"},l.a.createElement("div",{className:"card-header bg-dark text-warning"},l.a.createElement("a",{href:"#main-nav",className:"text-warning"},l.a.createElement("h3",null,"Services"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("a",{href:"#maintenance",className:"text-dark p-2"},"Maintenance"),l.a.createElement("a",{href:"#repairs",className:"text-dark p-2"},"Repairs"),l.a.createElement("a",{href:"#diagnostics",className:"text-dark p-2"},"Diagnostics"),l.a.createElement("a",{href:"#performance",className:"text-dark p-2"},"Performance"),l.a.createElement(d.Link,{to:"/contact",className:"btn btn-warning p-2"},"Contact Us"))))},C=function(){return l.a.createElement("section",{id:"maintenance",className:"mb-3"},l.a.createElement("div",{className:"card border-warning"},l.a.createElement("div",{className:"card-header bg-dark text-warning"},l.a.createElement("h3",null,"Scheduled Maintenance")),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,"Routine vehicle maintenance can help you avoid unpredictable roadside breakdowns, reduce costly repairs, and keep your vehicle lasting longer."),l.a.createElement("p",null,"More importantly, routine maintenance helps keep your vehicle"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"safe"))," ","for you and all of your passengers. Because of this, we at PM Autoworks provide exemplary factory maintenance services at reasonable rates."),l.a.createElement("p",null,l.a.createElement("strong",null,"Subaru vehicles up to model year 2014 use the following schedule:")),l.a.createElement("ul",null,l.a.createElement("li",null,"Engine Oil Service (3,750 Miles) \u2013 Some models"),l.a.createElement("li",null,"Minor Service (7,500 Miles)"),l.a.createElement("li",null,"Intermediate Service (15,000 Miles)"),l.a.createElement("li",null,"Major Service (30,000 Miles)"),l.a.createElement("li",null,"Timing Belt Service (105,000 Miles)")),l.a.createElement("p",null,l.a.createElement("strong",null,"Subaru vehicles 2015 and newer use the following schedule:")),l.a.createElement("ul",null,l.a.createElement("li",null,"Minor Service (6,000 Miles)"),l.a.createElement("li",null,"Intermediate Service (12,000 Miles)"),l.a.createElement("li",null,"Major Service (30,000 Miles)"),l.a.createElement("li",null,"Timing Belt Service (105,000 Miles) \u2013 STI models only")))))},P=function(){return l.a.createElement("section",{id:"repairs",className:"mb-3"},l.a.createElement("div",{className:"card border-warning"},l.a.createElement("div",{className:"card-header bg-dark text-warning"},l.a.createElement("h3",null,"Repairs")),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,"With over 10 years of experience in working with Subaru, our ASE Certified Technicians provide top quality repair services at an affordable cost."),l.a.createElement("h4",null,"Engine Repair"),l.a.createElement("ul",null,l.a.createElement("li",null,"Complete engine rebuild or replacement"),l.a.createElement("li",null,"Engine cylinder head gaskets"),l.a.createElement("li",null,"Engine fluid leaks (oil or coolant)"),l.a.createElement("li",null,"Repair any mechanical failure such as bearings, pulleys, bent valves, etc"),l.a.createElement("li",null,"Engine cooling system"),l.a.createElement("li",null,"Turbo chargers"),l.a.createElement("li",null,"Exhaust systems"),l.a.createElement("li",null,"Starting & charging")),l.a.createElement("h4",null,"Drivetrain"),l.a.createElement("ul",null,l.a.createElement("li",null,"Transmission Rebuilds"),l.a.createElement("li",null,"Clutch replacement"),l.a.createElement("li",null,"Driveshaft"),l.a.createElement("li",null,"Differential"),l.a.createElement("li",null,"Oil leaks")),l.a.createElement("h4",null,"Chassis"),l.a.createElement("ul",null,l.a.createElement("li",null,"Brakes"),l.a.createElement("li",null,"Suspension"),l.a.createElement("li",null,"Steering")))))},O=function(){return l.a.createElement("section",{id:"diagnostics",className:"mb-3"},l.a.createElement("div",{className:"card border-warning"},l.a.createElement("div",{className:"card-header bg-dark text-warning"},l.a.createElement("h3",null,"Diagnostics")),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,"Is your vehicle running bad or stalling? Is your check engine light on? The issue could be as simple as a loose gas cap or as complex as internal engine repair. Either way, PM Autoworks can help. Pairing up state of the art equipment with our professional certified technicians, gives us the ability to diagnose the concern and determine what repairs are needed to get you safely back on the road."),l.a.createElement("h4",null,"Warning Lights"),l.a.createElement("ul",null,l.a.createElement("li",null,"Check Engine"),l.a.createElement("li",null,"Oil level"),l.a.createElement("li",null,"Oil pressure"),l.a.createElement("li",null,"Cruise Control"),l.a.createElement("li",null,"AT Temp"),l.a.createElement("li",null,"VDC"),l.a.createElement("li",null,"Trac Off"),l.a.createElement("li",null,"Traction Control"),l.a.createElement("li",null,"Tire pressure (TPMS)"),l.a.createElement("li",null,"Air Bag")),l.a.createElement("h4",null,"Engine"),l.a.createElement("ul",null,l.a.createElement("li",null,"Engine performance and drivability"),l.a.createElement("li",null,"Abnormal engine noises"),l.a.createElement("li",null,"Oil consumption"),l.a.createElement("li",null,"Compression and leak-down testing"),l.a.createElement("li",null,"Misfires")),l.a.createElement("h4",null,"Cooling System"),l.a.createElement("ul",null,l.a.createElement("li",null,"Overheating"),l.a.createElement("li",null,"Coolant leaks"),l.a.createElement("li",null,"Coolant consumption"),l.a.createElement("li",null,"Coolant contamination"),l.a.createElement("li",null,"Radiator fan operation")),l.a.createElement("h4",null,"Electrical and Accessories"),l.a.createElement("ul",null,l.a.createElement("li",null,"Power windows,\xa0locks,\xa0mirrors, and seats"),l.a.createElement("li",null,"Heated seats"),l.a.createElement("li",null,"Sunroofs / moonroofs"),l.a.createElement("li",null,"Electric parking brakes"),l.a.createElement("li",null,"Cruise control")),l.a.createElement("h4",null,"Starting and Charging"),l.a.createElement("ul",null,l.a.createElement("li",null,"Slow starting"),l.a.createElement("li",null,"No starting"),l.a.createElement("li",null,"Battery failures"),l.a.createElement("li",null,"Charging trouble"),l.a.createElement("li",null,"Parasitic loads that drain your battery")),l.a.createElement("h4",null,"Transmission, Drivetrain, and Differential"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u201cAT Temp\u201d light on or flashing"),l.a.createElement("li",null,"Binding/shuddering when turning"),l.a.createElement("li",null,"Groaning, whining, or clicking noises"),l.a.createElement("li",null,"Delayed or harsh shifting")))))},T=function(){return l.a.createElement("section",{id:"performance",className:"mb-3"},l.a.createElement("div",{className:"card border-warning"},l.a.createElement("div",{className:"card-header bg-dark text-warning"},l.a.createElement("h3",null,"Performance Upgrades")),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",null,"Engine Upgrades"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Stage 1 Power Package"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("em",null,"Intake")))),l.a.createElement("li",null,l.a.createElement("strong",null,"Stage 2 Power Package"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("em",null,"Intake, Turboback Exhaust")))),l.a.createElement("li",null,l.a.createElement("strong",null,"Stage 3 Power Package"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("em",null,"Intake, Turboback Exhaust, Fuel System"))))),l.a.createElement("h4",null,"Suspension Upgrades"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Stage 1 Suspension package"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("em",null,"Lowering springs, Strut bars")))),l.a.createElement("li",null,l.a.createElement("strong",null,"Stage 2 Suspension package"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("em",null,"Full Coilovers, Strut bars")))),l.a.createElement("li",null,l.a.createElement("strong",null,"Stage 3 Suspension package"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("em",null,"Full Coilovers, Strut bars, Sway bars and bushings"))))),l.a.createElement("h4",null,"Brake Upgrades"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Stage 1 Brake package"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("em",null,"Upgraded pads, Drilled and Slotted rotors")))),l.a.createElement("li",null,l.a.createElement("strong",null,"Stage 2 Brake package"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("em",null,"Upgraded pads, Drilled and Slotted rotors, Stainless steel brake lines"))))))))},I=function(){return l.a.createElement("div",{style:{background:"#000000"}},l.a.createElement("div",{className:"image-container mb-3"},l.a.createElement("img",{src:t(92),alt:""}),l.a.createElement("div",{className:"centered"},l.a.createElement("h2",{className:"display-2 fadeIn"},l.a.createElement("strong",null,"Services")))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 d-none d-md-block"},l.a.createElement(A,null)),l.a.createElement("div",{className:"col-md-9 px-0"},l.a.createElement(C,null),l.a.createElement(P,null),l.a.createElement(O,null),l.a.createElement(T,null)))))},H=function(){return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mx-auto"},l.a.createElement("h3",null,"About The Shop"),l.a.createElement("p",null,"Established in 2017, PM Autoworks was founded by family members that shared an affinity for cars ever since childhood. Our roots come from working on cold concrete slabs in our home garages (some of our"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"best memories"))," ","come from late night wrenching with"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"friends and family")),"). We eventually made our way into independent shops and dealerships where we mastered our craft."),l.a.createElement("figure",{className:"figure"},l.a.createElement("img",{src:t(93),alt:"",className:"fig-image img-fluid rounded"}),l.a.createElement("figcaption",{className:"figure-caption"},"Our initial opening in 2016 with just one lift at the time.")),l.a.createElement("p",null,"Through the wonderful connections we've made and with great support from our peers,"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"our dreams came true"))," ","when we opened the doors to PM Autoworks in the heart of San Jose. Now, we can express our passion through our clients and the cars that you all bring in."))))},q=t(44),L=(t(102),function(){var e=Object(n.useState)(0),a=Object(v.a)(e,2),r=a[0],c=a[1],i=Object(n.useState)(!1),s=Object(v.a)(i,2),m=s[0],o=s[1],u=[[t(103),"Reception desk area"],[t(104),"Lounge area with snacks and mini-fridge"],[t(105),"Three 4-post lifts full as usual"],[t(106),"Entrance to the shop"],[t(107),"Ricky hard at work"],[t(108),"Peter preparing for a track day"]],d=u.map(function(e,a){return l.a.createElement("div",{className:"col-sm-6 col-lg-4",key:a},l.a.createElement("img",{src:e[0],alt:"",className:"img-fluid p-2",onClick:function(){return function(e){o(!0),c(e)}(a)}}))});return l.a.createElement("section",{id:"gallery"},l.a.createElement("div",{className:"row"},d),m&&l.a.createElement(q.a,{mainSrc:u[r][0],nextSrc:u[(r+1)%u.length][0],prevSrc:u[(r+u.length-1)%u.length][0],onCloseRequest:function(){return o(!1)},onMovePrevRequest:function(){return c((r+u.length-1)%u.length)},onMoveNextRequest:function(){return c((r+1)%u.length)},imageCaption:u[r][1]}))}),D=function(e){var a=e.founderName,n=e.title,r=e.about,c=e.avatar;return l.a.createElement("div",{className:"col-md-4 mx-auto"},l.a.createElement("div",{className:"card mb-3"},l.a.createElement("div",{className:"card-body text-center px-2"},l.a.createElement("img",{src:t(109)("./".concat(c)),alt:"",className:"img-fluid rounded-circle w-50 mb-3"}),l.a.createElement("h3",null,a),l.a.createElement("h5",{className:"text-muted"},n),l.a.createElement("p",null,r))))},B=function(){var e=[{name:"Peter Bon",title:"Founder",about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam, sunt nostrum vel fugit nesciunt voluptas! Excepturi natus praesentium porro, consequuntur quae cupiditate, fugiat magni nemo fuga commodi provident quas!",avatar:"peter.jpg"},{name:"Ricky Hogan",title:"Founder",about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam, sunt nostrum vel fugit nesciunt voluptas! Excepturi natus praesentium porro, consequuntur quae cupiditate, fugiat magni nemo fuga commodi provident quas!",avatar:"ricky.jpg"},{name:"Anthony Heng",title:"Founder",about:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam, sunt nostrum vel fugit nesciunt voluptas! Excepturi natus praesentium porro, consequuntur quae cupiditate, fugiat magni nemo fuga commodi provident quas!",avatar:"anthony.jpg"}].map(function(e,a){var t=e.name,n=e.title,r=e.about,c=e.avatar;return l.a.createElement(D,{founderName:t,title:n,about:r,avatar:c,key:a})});return l.a.createElement("section",{id:"team"},l.a.createElement("div",{className:"row my-3"},l.a.createElement("div",{className:"col-md-12 mx-auto"},l.a.createElement("h3",null,"Meet The Team"),l.a.createElement("p",null,"PM Autoworks was founded by family members sharing the same passion and supported by friends. Meet our founders."))),l.a.createElement("div",{className:"row py-2"},e))},U=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"image-container mb-3"},l.a.createElement("img",{src:t(113),alt:""}),l.a.createElement("div",{className:"centered"},l.a.createElement("h2",{className:"display-2 text-white fadeIn",style:{fontSize:"48px",textDecoration:"underline #ffc107"}},l.a.createElement("strong",null,"About Us")))),l.a.createElement("div",{className:"container"},l.a.createElement(H,null),l.a.createElement(L,null),l.a.createElement(B,null)))},F=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h3",null,"Address"),l.a.createElement("p",null,"PM Autoworks",l.a.createElement("br",null),"226 Phelan Ave Ste D",l.a.createElement("br",null),"San Jose CA 95112"),l.a.createElement("h3",null,"Hours"),l.a.createElement("p",null,"Monday - Friday",l.a.createElement("br",null),"9:00AM - 7:00PM",l.a.createElement("br",null),"Saturday - Sunday",l.a.createElement("br",null),"Closed"),l.a.createElement("h3",null,"Contact"),l.a.createElement("a",{href:"tel:1-408-332-1024",className:"text-dark"},"Call/Text: 408-332-1024"),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:powermotive.autoworks@gmail.com",className:"text-dark"},"Email: powermotive.autoworks@gmail.com"),l.a.createElement("h3",{className:"mt-3"},"Social Media"),l.a.createElement("span",null,l.a.createElement("a",{href:"https://www.yelp.com/biz/pm-autoworks-subaru-specialist-san-jose-8",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-yelp fa-2x p-2 text-dark"})),l.a.createElement("a",{href:"https://www.facebook.com/pmautoworks/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook-f fa-2x p-2 text-dark"})),l.a.createElement("a",{href:"https://www.instagram.com/pmautoworks/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-instagram fa-2x p-2 text-dark"})),l.a.createElement("a",{href:"https://www.youtube.com/channel/UClk2wEZ8TBgXkPnIuImkhiQ",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-youtube fa-2x p-2 text-dark"})),l.a.createElement("a",{href:"tel:1-408-332-1024"},l.a.createElement("i",{className:"fas fa-phone fa-2x p-2 text-dark"})),l.a.createElement("a",{href:"mailto:powermotive.autoworks@gmail.com",className:"text-light"},l.a.createElement("i",{className:"far fa-envelope fa-2x p-2 text-dark"}))))},_=function(){Object(n.useEffect)(function(){e()});var e=function(){t("https://maps.googleapis.com/maps/api/js?key=".concat(w.mapAPI,"&callback=initMap")),window.initMap=a},a=function(){var e={lat:37.3121774,lng:-121.868332},a=new window.google.maps.Map(document.getElementById("map"),{center:e,zoom:17});new window.google.maps.Marker({position:e,map:a,title:"PM Autoworks"}).addListener("click",function(){return window.open("https://www.google.com/maps/place/PM+Autoworks+Subaru+Specialist/@37.3121774,-121.868332,17z/data=!4m12!1m6!3m5!1s0x808e33236795199f:0xad89a70479f3d012!2sPM+Autoworks+Subaru+Specialist!8m2!3d37.3121774!4d-121.8661433!3m4!1s0x808e33236795199f:0xad89a70479f3d012!8m2!3d37.3121774!4d-121.8661433","_blank")})},t=function(e){var a=window.document.getElementsByTagName("script")[0],t=window.document.createElement("script");t.src=e,t.async=!0,t.defer=!0,a.parentNode.insertBefore(t,a)};return l.a.createElement("div",{id:"map",style:{height:"50vh"}})},R=function(){return l.a.createElement("section",{id:"contact-form"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mx-auto py-3"},l.a.createElement("div",{className:"card border-warning p-4"},l.a.createElement("h3",{className:"text-center"},"Send Us A Message"),l.a.createElement("p",{className:"text-center lead"},"Have any questions? Fill out the form and we'll get back to you as soon as possible."),l.a.createElement("form",{action:"https://formspree.io/dmai90@yahoo.com",method:"POST"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"firstName",placeholder:"*First Name",required:!0}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"lastName",placeholder:"Last Name"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"*Email",required:!0}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"phone",placeholder:"Phone Number"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"message",id:"text",cols:"30",rows:"5",className:"form-control",placeholder:"*Enter message here...",required:!0}),l.a.createElement("small",{className:"text-muted"},"* indicates required fields")))),l.a.createElement("button",{className:"btn btn-warning",type:"submit"},"Send Message")))))))},z=function(){return l.a.createElement("div",{style:{background:"#000000"}},l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{src:t(114),alt:""}),l.a.createElement("div",{className:"centered"},l.a.createElement("h2",{className:"display-2 fadeIn"},l.a.createElement("strong",null,"Contact Us")))),l.a.createElement("section",{id:"contact-info"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card border-warning my-3"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row my-3"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(F,null)),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(_,null))))))),l.a.createElement(R,null))},W=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"container p-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 text-light"},l.a.createElement("p",null,"PM Autoworks",l.a.createElement("br",null),"226 Phelan Ave Ste D",l.a.createElement("br",null),"San Jose CA 95112")),l.a.createElement("div",{className:"col-md-4 text-light"},l.a.createElement("p",null,"Monday - Friday",l.a.createElement("br",null),"9:00AM - 7:00PM",l.a.createElement("br",null),"Saturday - Sunday",l.a.createElement("br",null),"Closed")),l.a.createElement("div",{className:"col-md-4 text-light"},l.a.createElement("p",{className:"mb-0"},l.a.createElement("a",{href:"tel:1-408-332-1024",className:"text-light"},"408-332-1024"),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:powermotive.autoworks@gmail.com",className:"text-light"},"powermotive.autoworks@gmail.com")),l.a.createElement("span",null,l.a.createElement("a",{href:"https://www.yelp.com/biz/pm-autoworks-subaru-specialist-san-jose-8",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-yelp fa-2x p-2 text-warning"})),l.a.createElement("a",{href:"https://www.facebook.com/pmautoworks/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-facebook-f fa-2x p-2 text-warning"})),l.a.createElement("a",{href:"https://www.instagram.com/pmautoworks/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-instagram fa-2x p-2 text-warning"})),l.a.createElement("a",{href:"https://www.youtube.com/channel/UClk2wEZ8TBgXkPnIuImkhiQ",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-youtube fa-2x p-2 text-warning"})),l.a.createElement("a",{href:"tel:1-408-332-1024"},l.a.createElement("i",{className:"fas fa-phone fa-2x p-2 text-warning"})),l.a.createElement("a",{href:"mailto:powermotive.autoworks@gmail.com",className:"text-light"},l.a.createElement("i",{className:"far fa-envelope fa-2x p-2 text-warning"})))))))},X=(t(115),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.BrowserRouter,{basename:"/pm-autoworks"},l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(E.g,null,l.a.createElement(E.d,{exact:!0,path:"/",component:M}),l.a.createElement(E.d,{exact:!0,path:"/services",component:I}),l.a.createElement(E.d,{exact:!0,path:"/about",component:U}),l.a.createElement(E.d,{exact:!0,path:"/contact",component:z})),l.a.createElement(W,null)))}}]),a}(n.Component));c.a.render(l.a.createElement(X,null),document.getElementById("root"))},46:function(e,a,t){e.exports=t(116)},55:function(e,a,t){e.exports=t.p+"static/media/pm-logo.3fccd1fb.png"},86:function(e,a,t){e.exports=t.p+"static/media/landing-banner.02e972d7.png"},87:function(e,a,t){e.exports=t.p+"static/media/maintenance.f67e1811.jpg"},88:function(e,a,t){e.exports=t.p+"static/media/repair.acb37bf2.jpg"},89:function(e,a,t){e.exports=t.p+"static/media/diagnostics.7f447639.jpg"},90:function(e,a,t){e.exports=t.p+"static/media/performance.459409ce.jpg"},91:function(e,a,t){e.exports=t.p+"static/media/yelp.e46381e6.jpg"},92:function(e,a,t){e.exports=t.p+"static/media/services.c3ae952e.jpg"},93:function(e,a,t){e.exports=t.p+"static/media/shop-1.fcb51523.jpg"}},[[46,1,2]]]);
//# sourceMappingURL=main.e3e175bf.chunk.js.map