function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/t//":function(e,t,n){"use strict";n.r(t),n.d(t,"ConfigurationInformationModule",(function(){return p}));var r,a,o,i,c=n("tyNb"),u=n("fXoL"),s=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"canDeactivate",value:function(e){return!e.canDeactivate||e.canDeactivate()}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275prov=u.Kb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),l=n("wbf8"),f=n("kt0X"),d=[{path:"",component:(a=function(){function e(t){_classCallCheck(this,e),this.store$=t,this.items=[{name:"Subcaracteristicas",path:"/group-1/sub-feature"},{name:"Metricas",path:"/group-1/metric"}]}return _createClass(e,[{key:"ngOnInit",value:function(){this.store$.dispatch(Object(l.m)({items:this.items}))}},{key:"canDeactivate",value:function(){return this.store$.dispatch(Object(l.l)()),!0}},{key:"ngOnDestroy",value:function(){}}]),e}(),a.\u0275fac=function(e){return new(e||a)(u.Ob(f.h))},a.\u0275cmp=u.Ib({type:a,selectors:[["app-configuration-information-component"]],decls:1,vars:0,template:function(e,t){1&e&&u.Pb(0,"router-outlet")},directives:[c.m],encapsulation:2}),a),canDeactivate:[s],data:{breadcrumb:"Info. General"},children:[{path:"",redirectTo:"sub-feature",pathMatch:"prefix"},{path:"feature",loadChildren:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"ftB7")).then((function(e){return e.InformationEstablishmentModule}))},data:{breadcrumb:"Info. de Sede"}},{path:"sub-feature",loadChildren:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"b5UV")).then((function(e){return e.InformationLocalModule}))},data:{breadcrumb:"Info. de Empresa"}},{path:"metric",loadChildren:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"rxAY")).then((function(e){return e.InformationOfficeHoursModule}))},data:{breadcrumb:"Horario de Atenci\xf3n"}}]}],h=((i=function e(){_classCallCheck(this,e)}).\u0275mod=u.Mb({type:i}),i.\u0275inj=u.Lb({factory:function(e){return new(e||i)},imports:[[c.l.forChild(d)],c.l]}),i),p=((o=function e(){_classCallCheck(this,e)}).\u0275mod=u.Mb({type:o}),o.\u0275inj=u.Lb({factory:function(e){return new(e||o)},providers:[],imports:[[h]]}),o)}}]);