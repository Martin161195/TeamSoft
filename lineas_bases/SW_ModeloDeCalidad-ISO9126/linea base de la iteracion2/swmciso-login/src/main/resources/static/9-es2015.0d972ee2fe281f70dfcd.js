(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rxAY:function(e,t,i){"use strict";i.r(t),i.d(t,"InformationOfficeHoursModule",(function(){return J}));var n=i("ofXK"),c=i("3Pt+"),s=i("ZE2d"),a=i("FrKL"),b=i("tyNb"),r=i("fXoL"),o=i("XP0A"),l=i("n8XM"),u=i("g9YT"),d=i("PX7a"),h=i("WkjM");function f(e,t){if(1&e&&(r.Rb(0),r.Tb(1,"th"),r.Dc(2),r.Sb(),r.Qb()),2&e){const e=t.$implicit;r.Bb(2),r.Ec(e.nombre)}}const v=function(e){return{hover:e}};function g(e,t){if(1&e){const e=r.Ub();r.Tb(0,"td",4),r.Tb(1,"input",5),r.bc("ngModelChange",(function(i){r.vc(e);const n=t.index,c=r.fc().index;return r.fc().values[c][n].value=i}))("keyup",(function(){r.vc(e);const i=t.index,n=r.fc().index;return r.fc().changeM(n,i)})),r.Sb(),r.Sb()}if(2&e){const e=t.index,i=r.fc().index,n=r.fc();r.lc("ngClass",r.nc(3,v,i===e)),r.Bb(1),r.lc("ngModel",n.values[i][e].value)("disabled",i===e)}}function p(e,t){if(1&e&&(r.Tb(0,"tr"),r.Tb(1,"td",2),r.Dc(2),r.Sb(),r.Bc(3,g,2,5,"td",3),r.Sb()),2&e){const e=t.$implicit,i=r.fc();r.Bb(2),r.Ec(e.nombre),r.Bb(1),r.lc("ngForOf",i.subcaracteristicas)}}let S=(()=>{class e{constructor(e){this.userLocalService=e,this._btn=!1,this.eBtn=new r.n,this.subcaracteristicas=[{id:20,nombre:"Descripcion completa de los escenarios"},{id:21,nombre:"Cobertura de demostracion"},{id:22,nombre:"Autodescripcion del punto de entrada"}],this.values=[]}get btn(){return this._btn}set btn(e){this._btn=e,this._btn&&this.handle()}ngOnInit(){let e=[];for(let t=0;t<this.subcaracteristicas.length;t++){let i=[];for(let e=0;e<this.subcaracteristicas.length;e++){const n={idx:this.subcaracteristicas[e].id,idy:this.subcaracteristicas[t].id,value:null};t===e&&(n.value=1),i=i.concat([n])}e=e.concat([[...i]])}this.values=[...e]}changeM(e,t){this.values[e][t].value>0&&this.values[e][t].value<10&&(this.values[t][e].value=1/this.values[e][t].value)}handle(){let e=!0,t=[];for(let i=0;i<this.values.length;i++){for(let n=0;n<this.values[i].length;n++){if(null===this.values[i][n].value){e=!1;break}if(this.values[i][n].value>10||this.values[i][n].value<.1){e=!1;break}t=t.concat([this.values[i][n]])}if(!e)break}if(console.log(e),e){const e=this.userLocalService.ponderacion({idEntidad:1,idProyecto:1,listMatriz:t,tipo:"metrica"}).subscribe(t=>{this.eBtn.emit("Inteligibilidad"),e.unsubscribe()},t=>{this.eBtn.emit("Inteligibilidad"),e.unsubscribe()})}}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(h.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-inteligibilidad-component"]],inputs:{btn:"btn"},outputs:{eBtn:"eBtn"},decls:9,vars:2,consts:[[1,"g-table__default","g-table--celled","g-table--nohover"],[4,"ngFor","ngForOf"],[1,"th"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["type","number",3,"ngModel","disabled","ngModelChange","keyup"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.Tb(1,"table"),r.Tb(2,"thead"),r.Tb(3,"tr"),r.Tb(4,"th"),r.Dc(5,"Subcaracter\xedsticas - Usabilidad"),r.Sb(),r.Bc(6,f,3,1,"ng-container",1),r.Sb(),r.Sb(),r.Tb(7,"tbody"),r.Bc(8,p,4,2,"tr",1),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Bb(6),r.lc("ngForOf",t.subcaracteristicas),r.Bb(2),r.lc("ngForOf",t.subcaracteristicas))},directives:[n.j,n.i,c.l,c.b,c.i,c.k],encapsulation:2}),e})();function m(e,t){if(1&e&&(r.Rb(0),r.Tb(1,"th"),r.Dc(2),r.Sb(),r.Qb()),2&e){const e=t.$implicit;r.Bb(2),r.Ec(e.nombre)}}const T=function(e){return{hover:e}};function B(e,t){if(1&e){const e=r.Ub();r.Tb(0,"td",4),r.Tb(1,"input",5),r.bc("ngModelChange",(function(i){r.vc(e);const n=t.index,c=r.fc().index;return r.fc().values[c][n].value=i}))("keyup",(function(){r.vc(e);const i=t.index,n=r.fc().index;return r.fc().changeM(n,i)})),r.Sb(),r.Sb()}if(2&e){const e=t.index,i=r.fc().index,n=r.fc();r.lc("ngClass",r.nc(3,T,i===e)),r.Bb(1),r.lc("ngModel",n.values[i][e].value)("disabled",i===e)}}function w(e,t){if(1&e&&(r.Tb(0,"tr"),r.Tb(1,"td",2),r.Dc(2),r.Sb(),r.Bc(3,B,2,5,"td",3),r.Sb()),2&e){const e=t.$implicit,i=r.fc();r.Bb(2),r.Ec(e.nombre),r.Bb(1),r.lc("ngForOf",i.subcaracteristicas)}}let k=(()=>{class e{constructor(e){this.userLocalService=e,this._btn=!1,this.eBtn=new r.n,this.subcaracteristicas=[{id:23,nombre:"Completitud de la guia de usuario"},{id:24,nombre:"Formularios con valores por defecto"},{id:25,nombre:"Mensajes de error entendibles"},{id:26,nombre:"Interfaces de usuario intuitivas"}],this.values=[]}get btn(){return this._btn}set btn(e){this._btn=e,this._btn&&this.handle()}ngOnInit(){let e=[];for(let t=0;t<this.subcaracteristicas.length;t++){let i=[];for(let e=0;e<this.subcaracteristicas.length;e++){const n={idx:this.subcaracteristicas[e].id,idy:this.subcaracteristicas[t].id,value:null};t===e&&(n.value=1),i=i.concat([n])}e=e.concat([[...i]])}this.values=[...e]}changeM(e,t){this.values[e][t].value>0&&this.values[e][t].value<10&&(this.values[t][e].value=1/this.values[e][t].value)}handle(){let e=!0,t=[];for(let i=0;i<this.values.length;i++){for(let n=0;n<this.values[i].length;n++){if(null===this.values[i][n].value){e=!1;break}if(this.values[i][n].value>10||this.values[i][n].value<.1){e=!1;break}t=t.concat([this.values[i][n]])}if(!e)break}if(console.log(e),e){const e=this.userLocalService.ponderacion({idEntidad:1,idProyecto:1,listMatriz:t,tipo:"metrica"}).subscribe(t=>{this.eBtn.emit("Aprendizaje"),e.unsubscribe()},t=>{this.eBtn.emit("Aprendizaje"),e.unsubscribe()})}}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(h.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-aprendizaje-component"]],inputs:{btn:"btn"},outputs:{eBtn:"eBtn"},decls:9,vars:2,consts:[[1,"g-table__default","g-table--celled","g-table--nohover"],[4,"ngFor","ngForOf"],[1,"th"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["type","number",3,"ngModel","disabled","ngModelChange","keyup"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.Tb(1,"table"),r.Tb(2,"thead"),r.Tb(3,"tr"),r.Tb(4,"th"),r.Dc(5,"Subcaracter\xedsticas - Usabilidad"),r.Sb(),r.Bc(6,m,3,1,"ng-container",1),r.Sb(),r.Sb(),r.Tb(7,"tbody"),r.Bc(8,w,4,2,"tr",1),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Bb(6),r.lc("ngForOf",t.subcaracteristicas),r.Bb(2),r.lc("ngForOf",t.subcaracteristicas))},directives:[n.j,n.i,c.l,c.b,c.i,c.k],encapsulation:2}),e})();function O(e,t){if(1&e&&(r.Rb(0),r.Tb(1,"th"),r.Dc(2),r.Sb(),r.Qb()),2&e){const e=t.$implicit;r.Bb(2),r.Ec(e.nombre)}}const C=function(e){return{hover:e}};function M(e,t){if(1&e){const e=r.Ub();r.Tb(0,"td",4),r.Tb(1,"input",5),r.bc("ngModelChange",(function(i){r.vc(e);const n=t.index,c=r.fc().index;return r.fc().values[c][n].value=i}))("keyup",(function(){r.vc(e);const i=t.index,n=r.fc().index;return r.fc().changeM(n,i)})),r.Sb(),r.Sb()}if(2&e){const e=t.index,i=r.fc().index,n=r.fc();r.lc("ngClass",r.nc(3,C,i===e)),r.Bb(1),r.lc("ngModel",n.values[i][e].value)("disabled",i===e)}}function y(e,t){if(1&e&&(r.Tb(0,"tr"),r.Tb(1,"td",2),r.Dc(2),r.Sb(),r.Bc(3,M,2,5,"td",3),r.Sb()),2&e){const e=t.$implicit,i=r.fc();r.Bb(2),r.Ec(e.nombre),r.Bb(1),r.lc("ngForOf",i.subcaracteristicas)}}let D=(()=>{class e{constructor(e){this.userLocalService=e,this._btn=!1,this.eBtn=new r.n,this.subcaracteristicas=[{id:27,nombre:"Consistencia operacional"},{id:28,nombre:"Claridad del mensaje"},{id:29,nombre:"Customizacion funcional"},{id:30,nombre:"Customizacion de la interface de usuario"},{id:31,nombre:"Capacidad de monitoreo"},{id:32,nombre:"Capacidad de deshacer acciones"},{id:33,nombre:"Categorizacion de la informacion entendible"},{id:34,nombre:"Consistencia de la apariencia de las interfaces de usuario"},{id:35,nombre:"Soporte de dispositivos de entrada"}],this.values=[]}get btn(){return this._btn}set btn(e){this._btn=e,this._btn&&this.handle()}ngOnInit(){let e=[];for(let t=0;t<this.subcaracteristicas.length;t++){let i=[];for(let e=0;e<this.subcaracteristicas.length;e++){const n={idx:this.subcaracteristicas[e].id,idy:this.subcaracteristicas[t].id,value:null};t===e&&(n.value=1),i=i.concat([n])}e=e.concat([[...i]])}this.values=[...e]}changeM(e,t){this.values[e][t].value>0&&this.values[e][t].value<10&&(this.values[t][e].value=1/this.values[e][t].value)}handle(){let e=!0,t=[];for(let i=0;i<this.values.length;i++){for(let n=0;n<this.values[i].length;n++){if(null===this.values[i][n].value){e=!1;break}if(this.values[i][n].value>10||this.values[i][n].value<.1){e=!1;break}t=t.concat([this.values[i][n]])}if(!e)break}if(console.log(e),e){const e=this.userLocalService.ponderacion({idEntidad:1,idProyecto:1,listMatriz:t,tipo:"metrica"}).subscribe(t=>{this.eBtn.emit("Operabilidad"),e.unsubscribe()},t=>{this.eBtn.emit("Operabilidad"),e.unsubscribe()})}}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(h.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-operabilidad-component"]],inputs:{btn:"btn"},outputs:{eBtn:"eBtn"},decls:9,vars:2,consts:[[1,"g-table__default","g-table--celled","g-table--nohover"],[4,"ngFor","ngForOf"],[1,"th"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["type","number",3,"ngModel","disabled","ngModelChange","keyup"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.Tb(1,"table"),r.Tb(2,"thead"),r.Tb(3,"tr"),r.Tb(4,"th"),r.Dc(5,"Subcaracter\xedsticas - Usabilidad"),r.Sb(),r.Bc(6,O,3,1,"ng-container",1),r.Sb(),r.Sb(),r.Tb(7,"tbody"),r.Bc(8,y,4,2,"tr",1),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Bb(6),r.lc("ngForOf",t.subcaracteristicas),r.Bb(2),r.lc("ngForOf",t.subcaracteristicas))},directives:[n.j,n.i,c.l,c.b,c.i,c.k],encapsulation:2}),e})();function F(e,t){if(1&e&&(r.Rb(0),r.Tb(1,"th"),r.Dc(2),r.Sb(),r.Qb()),2&e){const e=t.$implicit;r.Bb(2),r.Ec(e.nombre)}}const x=function(e){return{hover:e}};function I(e,t){if(1&e){const e=r.Ub();r.Tb(0,"td",4),r.Tb(1,"input",5),r.bc("ngModelChange",(function(i){r.vc(e);const n=t.index,c=r.fc().index;return r.fc().values[c][n].value=i}))("keyup",(function(){r.vc(e);const i=t.index,n=r.fc().index;return r.fc().changeM(n,i)})),r.Sb(),r.Sb()}if(2&e){const e=t.index,i=r.fc().index,n=r.fc();r.lc("ngClass",r.nc(3,x,i===e)),r.Bb(1),r.lc("ngModel",n.values[i][e].value)("disabled",i===e)}}function _(e,t){if(1&e&&(r.Tb(0,"tr"),r.Tb(1,"td",2),r.Dc(2),r.Sb(),r.Bc(3,I,2,5,"td",3),r.Sb()),2&e){const e=t.$implicit,i=r.fc();r.Bb(2),r.Ec(e.nombre),r.Bb(1),r.lc("ngForOf",i.subcaracteristicas)}}let A=(()=>{class e{constructor(e){this.userLocalService=e,this._btn=!1,this.eBtn=new r.n,this.subcaracteristicas=[{id:36,nombre:"Evitar errores de operaci\xf3n del usuario"},{id:37,nombre:"Correcci\xf3n de errores de entrada de usuario"},{id:38,nombre:"Recuperabilidad de errores del usuario"}],this.values=[]}get btn(){return this._btn}set btn(e){this._btn=e,this._btn&&this.handle()}ngOnInit(){let e=[];for(let t=0;t<this.subcaracteristicas.length;t++){let i=[];for(let e=0;e<this.subcaracteristicas.length;e++){const n={idx:this.subcaracteristicas[e].id,idy:this.subcaracteristicas[t].id,value:null};t===e&&(n.value=1),i=i.concat([n])}e=e.concat([[...i]])}this.values=[...e]}changeM(e,t){this.values[e][t].value>0&&this.values[e][t].value<10&&(this.values[t][e].value=1/this.values[e][t].value)}handle(){let e=!0,t=[];for(let i=0;i<this.values.length;i++){for(let n=0;n<this.values[i].length;n++){if(null===this.values[i][n].value){e=!1;break}if(this.values[i][n].value>10||this.values[i][n].value<.1){e=!1;break}t=t.concat([this.values[i][n]])}if(!e)break}if(console.log(e),e){const e=this.userLocalService.ponderacion({idEntidad:1,idProyecto:1,listMatriz:t,tipo:"metrica"}).subscribe(t=>{this.eBtn.emit("Proteccion"),e.unsubscribe()},t=>{this.eBtn.emit("Proteccion"),e.unsubscribe()})}}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(h.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-proteccion-component"]],inputs:{btn:"btn"},outputs:{eBtn:"eBtn"},decls:9,vars:2,consts:[[1,"g-table__default","g-table--celled","g-table--nohover"],[4,"ngFor","ngForOf"],[1,"th"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["type","number",3,"ngModel","disabled","ngModelChange","keyup"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.Tb(1,"table"),r.Tb(2,"thead"),r.Tb(3,"tr"),r.Tb(4,"th"),r.Dc(5,"Subcaracter\xedsticas - Usabilidad"),r.Sb(),r.Bc(6,F,3,1,"ng-container",1),r.Sb(),r.Sb(),r.Tb(7,"tbody"),r.Bc(8,_,4,2,"tr",1),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Bb(6),r.lc("ngForOf",t.subcaracteristicas),r.Bb(2),r.lc("ngForOf",t.subcaracteristicas))},directives:[n.j,n.i,c.l,c.b,c.i,c.k],encapsulation:2}),e})();function P(e,t){if(1&e&&(r.Rb(0),r.Tb(1,"th"),r.Dc(2),r.Sb(),r.Qb()),2&e){const e=t.$implicit;r.Bb(2),r.Ec(e.nombre)}}const j=function(e){return{hover:e}};function E(e,t){if(1&e){const e=r.Ub();r.Tb(0,"td",4),r.Tb(1,"input",5),r.bc("ngModelChange",(function(i){r.vc(e);const n=t.index,c=r.fc().index;return r.fc().values[c][n].value=i}))("keyup",(function(){r.vc(e);const i=t.index,n=r.fc().index;return r.fc().changeM(n,i)})),r.Sb(),r.Sb()}if(2&e){const e=t.index,i=r.fc().index,n=r.fc();r.lc("ngClass",r.nc(3,j,i===e)),r.Bb(1),r.lc("ngModel",n.values[i][e].value)("disabled",i===e)}}function z(e,t){if(1&e&&(r.Tb(0,"tr"),r.Tb(1,"td",2),r.Dc(2),r.Sb(),r.Bc(3,E,2,5,"td",3),r.Sb()),2&e){const e=t.$implicit,i=r.fc();r.Bb(2),r.Ec(e.nombre),r.Bb(1),r.lc("ngForOf",i.subcaracteristicas)}}let L=(()=>{class e{constructor(e){this.userLocalService=e,this._btn=!1,this.eBtn=new r.n,this.subcaracteristicas=[{id:40,nombre:"Accesibilidad para usuarios con discapacidad"},{id:41,nombre:"Adecuaci\xf3n de los idiomas admitidos"}],this.values=[]}get btn(){return this._btn}set btn(e){this._btn=e,this._btn&&this.handle()}ngOnInit(){let e=[];for(let t=0;t<this.subcaracteristicas.length;t++){let i=[];for(let e=0;e<this.subcaracteristicas.length;e++){const n={idx:this.subcaracteristicas[e].id,idy:this.subcaracteristicas[t].id,value:null};t===e&&(n.value=1),i=i.concat([n])}e=e.concat([[...i]])}this.values=[...e]}changeM(e,t){this.values[e][t].value>0&&this.values[e][t].value<10&&(this.values[t][e].value=1/this.values[e][t].value)}handle(){let e=!0,t=[];for(let i=0;i<this.values.length;i++){for(let n=0;n<this.values[i].length;n++){if(null===this.values[i][n].value){e=!1;break}if(this.values[i][n].value>10||this.values[i][n].value<.1){e=!1;break}t=t.concat([this.values[i][n]])}if(!e)break}if(console.log(e),e){const e=this.userLocalService.ponderacion({idEntidad:1,idProyecto:1,listMatriz:t,tipo:"metrica"}).subscribe(t=>{this.eBtn.emit("Accesibilidad"),e.unsubscribe()},t=>{this.eBtn.emit("Accesibilidad"),e.unsubscribe()})}}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(h.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-accesibilidad-component"]],inputs:{btn:"btn"},outputs:{eBtn:"eBtn"},decls:9,vars:2,consts:[[1,"g-table__default","g-table--celled","g-table--nohover"],[4,"ngFor","ngForOf"],[1,"th"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["type","number",3,"ngModel","disabled","ngModelChange","keyup"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.Tb(1,"table"),r.Tb(2,"thead"),r.Tb(3,"tr"),r.Tb(4,"th"),r.Dc(5,"Subcaracter\xedsticas - Usabilidad"),r.Sb(),r.Bc(6,P,3,1,"ng-container",1),r.Sb(),r.Sb(),r.Tb(7,"tbody"),r.Bc(8,z,4,2,"tr",1),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Bb(6),r.lc("ngForOf",t.subcaracteristicas),r.Bb(2),r.lc("ngForOf",t.subcaracteristicas))},directives:[n.j,n.i,c.l,c.b,c.i,c.k],encapsulation:2}),e})();function U(e,t){if(1&e){const e=r.Ub();r.Rb(0),r.Tb(1,"app-inteligibilidad-component",13),r.bc("eBtn",(function(t){return r.vc(e),r.fc().eBtn(t)})),r.Sb(),r.Qb()}if(2&e){const e=r.fc();r.Bb(1),r.lc("btn",e.btnIn)}}function R(e,t){if(1&e){const e=r.Ub();r.Rb(0),r.Tb(1,"app-aprendizaje-component",13),r.bc("eBtn",(function(t){return r.vc(e),r.fc().eBtn(t)})),r.Sb(),r.Qb()}if(2&e){const e=r.fc();r.Bb(1),r.lc("btn",e.btnAp)}}function Q(e,t){if(1&e){const e=r.Ub();r.Rb(0),r.Tb(1,"app-operabilidad-component",13),r.bc("eBtn",(function(t){return r.vc(e),r.fc().eBtn(t)})),r.Sb(),r.Qb()}if(2&e){const e=r.fc();r.Bb(1),r.lc("btn",e.btnOp)}}function $(e,t){if(1&e){const e=r.Ub();r.Rb(0),r.Tb(1,"app-proteccion-component",13),r.bc("eBtn",(function(t){return r.vc(e),r.fc().eBtn(t)})),r.Sb(),r.Qb()}if(2&e){const e=r.fc();r.Bb(1),r.lc("btn",e.btnPr)}}function V(e,t){if(1&e){const e=r.Ub();r.Rb(0),r.Tb(1,"app-accesibilidad-component",13),r.bc("eBtn",(function(t){return r.vc(e),r.fc().eBtn(t)})),r.Sb(),r.Qb()}if(2&e){const e=r.fc();r.Bb(1),r.lc("btn",e.btnAc)}}const X=[{path:"",component:(()=>{class e{constructor(e){this.router=e,this.view="Inteligibilidad"}ngOnInit(){}changeView(e){switch(e){case"Inteligibilidad":case"Aprendizaje":case"Operabilidad":case"Proteccion":case"Estetica":case"Accesibilidad":this.view=e}}before(){switch(this.view){case"Inteligibilidad":break;case"Aprendizaje":this.view="Inteligibilidad";break;case"Operabilidad":this.view="Aprendizaje";break;case"Proteccion":this.view="Operabilidad";break;case"Accesibilidad":this.view="Proteccion"}}after(){switch(this.view){case"Inteligibilidad":console.log(this.btnIn),this.btnIn=!0,setTimeout(()=>{this.btnIn=!1},100);break;case"Aprendizaje":console.log(this.btnAp),this.btnAp=!0,setTimeout(()=>{this.btnAp=!1},100);break;case"Operabilidad":console.log(this.btnOp),this.btnOp=!0,setTimeout(()=>{this.btnOp=!1},100);break;case"Proteccion":console.log(this.btnPr),this.btnPr=!0,setTimeout(()=>{this.btnPr=!1},100);break;case"Estetica":console.log(this.btnEs),this.btnEs=!0,setTimeout(()=>{this.btnEs=!1},100);break;case"Accesibilidad":console.log(this.btnAc),this.btnAc=!0,setTimeout(()=>{this.btnAc=!1},100)}}eBtn(e){switch(e){case"Inteligibilidad":this.view="Aprendizaje";break;case"Aprendizaje":this.view="Operabilidad";break;case"Operabilidad":this.view="Proteccion";break;case"Proteccion":this.view="Accesibilidad";break;case"Accesibilidad":this.router.navigate(["/"])}}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(b.h))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-information-office-hours-component"]],decls:83,vars:21,consts:[[1,"g-tab","m-b-20"],[1,"g-tab__list"],[1,"g-tab__list--labels"],[1,"g-tab__label","is-2",3,"click"],[1,"columns"],[1,"column","is-flex","is-ai-ce"],[1,"column"],[1,"g-table__default","g-table--centered"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"g-card__footer-buttons","space-between"],[3,"btnIsDisabled","text","btnTheme","eventClick"],[3,"text","btnTheme","eventClick"],[3,"btn","eBtn"]],template:function(e,t){1&e&&(r.Tb(0,"vm-card"),r.Tb(1,"vm-card-body"),r.Tb(2,"div",0),r.Tb(3,"div",1),r.Tb(4,"div",2),r.Tb(5,"div",3),r.bc("click",(function(){return t.changeView("Inteligibilidad")})),r.Dc(6," Inteligibilidad "),r.Sb(),r.Tb(7,"div",3),r.bc("click",(function(){return t.changeView("Aprendizaje")})),r.Dc(8," Aprendizaje "),r.Sb(),r.Tb(9,"div",3),r.bc("click",(function(){return t.changeView("Operabilidad")})),r.Dc(10," Operabilidad "),r.Sb(),r.Tb(11,"div",3),r.bc("click",(function(){return t.changeView("Proteccion")})),r.Dc(12," Proteccion frente a errores de usuario "),r.Sb(),r.Tb(13,"div",3),r.bc("click",(function(){return t.changeView("Accesibilidad")})),r.Dc(14," Accesibilidad "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(15,"div",4),r.Tb(16,"div",5),r.Dc(17,"Pondere las subcaracter\xedsticas de calidad del 1 al 9 de acuerdo a la siguiente especificacion: "),r.Sb(),r.Tb(18,"div",6),r.Tb(19,"div",7),r.Tb(20,"table"),r.Tb(21,"thead"),r.Tb(22,"tr"),r.Tb(23,"th"),r.Dc(24,"Intensidad"),r.Sb(),r.Tb(25,"th"),r.Dc(26,"Definici\xf3n"),r.Sb(),r.Sb(),r.Sb(),r.Tb(27,"tbody"),r.Tb(28,"tr"),r.Tb(29,"td"),r.Dc(30,"1"),r.Sb(),r.Tb(31,"td"),r.Dc(32,"Igual Importancia"),r.Sb(),r.Sb(),r.Tb(33,"tr"),r.Tb(34,"td"),r.Dc(35,"2"),r.Sb(),r.Tb(36,"td"),r.Dc(37,"Ligera Importancia"),r.Sb(),r.Sb(),r.Tb(38,"tr"),r.Tb(39,"td"),r.Dc(40,"3"),r.Sb(),r.Tb(41,"td"),r.Dc(42,"Moderada Importancia"),r.Sb(),r.Sb(),r.Tb(43,"tr"),r.Tb(44,"td"),r.Dc(45,"4"),r.Sb(),r.Tb(46,"td"),r.Dc(47,"M\xe1s que Moderada"),r.Sb(),r.Sb(),r.Tb(48,"tr"),r.Tb(49,"td"),r.Dc(50,"5"),r.Sb(),r.Tb(51,"td"),r.Dc(52,"Fuerte Importancia"),r.Sb(),r.Sb(),r.Tb(53,"tr"),r.Tb(54,"td"),r.Dc(55,"6"),r.Sb(),r.Tb(56,"td"),r.Dc(57,"M\xe1s que fuerte"),r.Sb(),r.Sb(),r.Tb(58,"tr"),r.Tb(59,"td"),r.Dc(60,"7"),r.Sb(),r.Tb(61,"td"),r.Dc(62,"Muy fuerte"),r.Sb(),r.Sb(),r.Tb(63,"tr"),r.Tb(64,"td"),r.Dc(65,"8"),r.Sb(),r.Tb(66,"td"),r.Dc(67,"Muy muy fuerte"),r.Sb(),r.Sb(),r.Tb(68,"tr"),r.Tb(69,"td"),r.Dc(70,"9"),r.Sb(),r.Tb(71,"td"),r.Dc(72,"Extrema Importancia"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Rb(73,8),r.Bc(74,U,2,1,"ng-container",9),r.Bc(75,R,2,1,"ng-container",9),r.Bc(76,Q,2,1,"ng-container",9),r.Bc(77,$,2,1,"ng-container",9),r.Bc(78,V,2,1,"ng-container",9),r.Qb(),r.Sb(),r.Tb(79,"vm-card-footer"),r.Tb(80,"div",10),r.Tb(81,"vm-button",11),r.bc("eventClick",(function(){return t.before()})),r.Sb(),r.Tb(82,"vm-button",12),r.bc("eventClick",(function(){return t.after()})),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Bb(5),r.Fb("active","Inteligibilidad"===t.view),r.Bb(2),r.Fb("active","Aprendizaje"===t.view),r.Bb(2),r.Fb("active","Operabilidad"===t.view),r.Bb(2),r.Fb("active","Proteccion"===t.view),r.Bb(2),r.Fb("active","Accesibilidad"===t.view),r.Bb(60),r.lc("ngSwitch",t.view),r.Bb(1),r.lc("ngSwitchCase","Inteligibilidad"),r.Bb(1),r.lc("ngSwitchCase","Aprendizaje"),r.Bb(1),r.lc("ngSwitchCase","Operabilidad"),r.Bb(1),r.lc("ngSwitchCase","Proteccion"),r.Bb(1),r.lc("ngSwitchCase","Accesibilidad"),r.Bb(3),r.lc("btnIsDisabled","Inteligibilidad"===t.view)("text","Atras")("btnTheme","info"),r.Bb(1),r.lc("text","Siguiente")("btnTheme","success"))},directives:[o.a,l.a,n.l,n.m,u.a,d.a,S,k,D,A,L],encapsulation:2}),e})()}];let q=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[b.l.forChild(X)],b.l]}),e})(),J=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},providers:[],imports:[[q,n.c,a.a,s.a,c.f]]}),e})()}}]);