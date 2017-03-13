webpackJsonp([0],[,,,,,,,,,,,,,function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},function(n,t,e){"use strict";var l=e(0);e.d(t,"a",function(){return i});var i=function(){function n(n){this.builder=n,this.config=[],this.submit=new l.R}return Object.defineProperty(n.prototype,"controls",{get:function(){return this.config.filter(function(n){var t=n.type;return"button"!==t})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"changes",{get:function(){return this.form.valueChanges},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"valid",{get:function(){return this.form.valid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this.form.value},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.form=this.createGroup()},n.prototype.ngOnChanges=function(){if(this.form){for(var n=Object.keys(this.form.controls),t=this.controls.map(function(n){return n.name}),e=n.filter(function(n){return!t.includes(n)}),l=t.filter(function(t){return!n.includes(t)}),i=function(n){var t=l[n],e=r.config.find(function(n){return n.name===t});r.form.addControl(l[n],r.createControl(e))},r=this,u=0;u<l.length;u++)i(u);for(var u=0;u<e.length;u++)this.form.removeControl(e[u])}},n.prototype.createGroup=function(){for(var n=this.builder.group({}),t=this.controls,e=0;e<t.length;e++)n.addControl(t[e].name,this.createControl(t[e]));return n},n.prototype.createControl=function(n){var t=n.disabled,e=n.validation,l=n.value;return this.builder.control({disabled:t,value:l},e)},n.prototype.handleSubmit=function(n){n.preventDefault(),n.stopPropagation(),this.submit.emit(this.value)},n.prototype.setDisabled=function(n,t){if(this.form.controls[n]){var e=t?"disable":"enable";return void this.form.controls[n][e]()}this.config=this.config.map(function(e){return e.name===n&&(e.disabled=t),e})},n.prototype.setValue=function(n,t){this.form.controls[n].setValue(t,{emitEvent:!0})},n}()},,,,,,function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e(0),i=e(30),r=e(12);e.i(l.a)(),e.i(r.a)().bootstrapModuleFactory(i.a)},,function(n,t,e){"use strict";var l=e(2);e.d(t,"a",function(){return i});var i=function(){function n(){this.config=[{type:"input",label:"Full name",name:"name",placeholder:"Enter your name",validation:[l.f.required,l.f.minLength(4)]},{type:"select",label:"Favourite Food",name:"food",options:["Pizza", "Hot Dogs", "Knakworstje", "Coffee"],placeholder:"Select an option..",validation:[l.f.required]},{label:"Submit",name:"submit",type:"button"}]}return n.prototype.ngAfterViewInit=function(){var n=this,t=this.form.valid;this.form.changes.subscribe(function(){n.form.valid!==t&&(t=n.form.valid,n.form.setDisabled("submit",!t))}),this.form.setDisabled("submit",!0),this.form.setValue("name","Todd Motto")},n.prototype.submit=function(n){},n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},function(n,t,e){"use strict";var l=e(13),i=e(14),r=e(15);e.d(t,"a",function(){return o});var u={button:l.a,input:i.a,select:r.a},o=function(){function n(n,t){this.resolver=n,this.container=t}return n.prototype.ngOnChanges=function(){this.component&&(this.component.instance.config=this.config,this.component.instance.group=this.group)},n.prototype.ngOnInit=function(){if(!u[this.config.type]){var n=Object.keys(u).join(", ");throw new Error("Trying to use an unsupported type ("+this.config.type+").\n        Supported types: "+n)}var t=this.resolver.resolveComponentFactory(u[this.config.type]);this.component=this.container.createComponent(t),this.component.instance.config=this.config,this.component.instance.group=this.group},n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},function(n,t,e){"use strict";function l(){return u._15(0,[u._16(201326592,1,{form:0}),u._17(null,["\n    "]),u._18(0,null,null,6,"div",[["class","app"]],null,null,null,null,null),u._17(null,["\n      "]),u._18(0,null,null,2,"dynamic-form",[],null,[[null,"submit"]],function(n,t,e){var l=!0,i=n.component;if("submit"===t){var r=i.submit(e)!==!1;l=r&&l}return l},a.a,a.b),u._19(319488,[[1,4],["form",4]],0,_.a,[s.b],{config:[0,"config"]},{submit:"submit"}),u._17(null,["\n      "]),u._17(null,["\n      ","\n      ","\n    "]),u._20(0,c.f,[]),u._17(null,["\n  "])],function(n,t){var e=t.component,l=e.config;n(t,5,0,l)},function(n,t){var e=(t.component,u._21(t,5).valid),l=u._22(u._21(t,8).transform(u._21(t,5).value));n(t,7,0,e,l)})}function i(){return u._15(0,[u._18(0,null,null,1,"app-root",[],null,null,null,l,p),u._19(2121728,null,0,o.a,[],null,null)],null,null)}var r=e(29),u=e(0),o=e(24),a=e(37),_=e(16),s=e(2),c=e(4);e.d(t,"a",function(){return d});var f=[r.a],p=u._14({encapsulation:0,styles:f,data:{}}),d=(u._14({encapsulation:2,styles:[],data:{}}),u._23("app-root",o.a,i))},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=[".app[_ngcontent-%COMP%]{background:#fff;padding:20px 30px;width:500px;box-shadow:0 2px 3px rgba(0,0,0,0.2)}"]},function(n,t,e){"use strict";var l=e(64),i=e(0),r=e(25),u=e(4),o=e(12),a=e(2),_=e(27),s=e(31),c=e(33),f=e(35),p=e(28);e.d(t,"a",function(){return g});var d=function(n){function t(t){return n.call(this,t,[s.a,c.a,f.a,p.a],[p.a])||this}return l.a(t,n),Object.defineProperty(t.prototype,"_LOCALE_ID_8",{get:function(){return null==this.__LOCALE_ID_8&&(this.__LOCALE_ID_8=i.b(this.parent.get(i.c,null))),this.__LOCALE_ID_8},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_9",{get:function(){return null==this.__NgLocalization_9&&(this.__NgLocalization_9=new u.a(this._LOCALE_ID_8)),this.__NgLocalization_9},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ApplicationRef_14",{get:function(){return null==this.__ApplicationRef_14&&(this.__ApplicationRef_14=this._ɵf_13),this.__ApplicationRef_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_15",{get:function(){return null==this.__Compiler_15&&(this.__Compiler_15=new i.d),this.__Compiler_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_16",{get:function(){return null==this.__APP_ID_16&&(this.__APP_ID_16=i.e()),this.__APP_ID_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_17",{get:function(){return null==this.__IterableDiffers_17&&(this.__IterableDiffers_17=i.f()),this.__IterableDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_18",{get:function(){return null==this.__KeyValueDiffers_18&&(this.__KeyValueDiffers_18=i.g()),this.__KeyValueDiffers_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_19",{get:function(){return null==this.__DomSanitizer_19&&(this.__DomSanitizer_19=new o.b(this.parent.get(o.c))),this.__DomSanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_20",{get:function(){return null==this.__Sanitizer_20&&(this.__Sanitizer_20=this._DomSanitizer_19),this.__Sanitizer_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_21",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_21&&(this.__HAMMER_GESTURE_CONFIG_21=new o.d),this.__HAMMER_GESTURE_CONFIG_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_22",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_22&&(this.__EVENT_MANAGER_PLUGINS_22=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_21)]),this.__EVENT_MANAGER_PLUGINS_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_23",{get:function(){return null==this.__EventManager_23&&(this.__EventManager_23=new o.h(this._EVENT_MANAGER_PLUGINS_22,this.parent.get(i.h))),this.__EventManager_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_25",{get:function(){return null==this.__ɵDomRendererFactory2_25&&(this.__ɵDomRendererFactory2_25=new o.i(this._EventManager_23,this._ɵDomSharedStylesHost_24)),this.__ɵDomRendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_26",{get:function(){return null==this.__RendererFactory2_26&&(this.__RendererFactory2_26=this._ɵDomRendererFactory2_25),this.__RendererFactory2_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_27",{get:function(){return null==this.__ɵSharedStylesHost_27&&(this.__ɵSharedStylesHost_27=this._ɵDomSharedStylesHost_24),this.__ɵSharedStylesHost_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_28",{get:function(){return null==this.__Testability_28&&(this.__Testability_28=new i.i(this.parent.get(i.h))),this.__Testability_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_29",{get:function(){return null==this.__Meta_29&&(this.__Meta_29=new o.j(this.parent.get(o.c))),this.__Meta_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_30",{get:function(){return null==this.__Title_30&&(this.__Title_30=new o.k(this.parent.get(o.c))),this.__Title_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_31",{get:function(){return null==this.__ɵi_31&&(this.__ɵi_31=new a.a),this.__ɵi_31},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_FormBuilder_32",{get:function(){return null==this.__FormBuilder_32&&(this.__FormBuilder_32=new a.b),this.__FormBuilder_32},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new u.b,this._ApplicationModule_1=new i.j,this._BrowserModule_2=new o.l(this.parent.get(o.l,null)),this._ɵba_3=new a.c,this._FormsModule_4=new a.d,this._ReactiveFormsModule_5=new a.e,this._DynamicFormModule_6=new _.a,this._AppModule_7=new r.a,this._ErrorHandler_10=o.m(),this._APP_INITIALIZER_11=[i.k,o.n(this.parent.get(o.o,null),this.parent.get(i.l,null))],this._ApplicationInitStatus_12=new i.m(this._APP_INITIALIZER_11),this._ɵf_13=new i.n(this.parent.get(i.h),this.parent.get(i.o),this,this._ErrorHandler_10,this,this._ApplicationInitStatus_12),this._ɵDomSharedStylesHost_24=new o.p(this.parent.get(o.c)),this._AppModule_7},t.prototype.getInternal=function(n,t){return n===u.b?this._CommonModule_0:n===i.j?this._ApplicationModule_1:n===o.l?this._BrowserModule_2:n===a.c?this._ɵba_3:n===a.d?this._FormsModule_4:n===a.e?this._ReactiveFormsModule_5:n===_.a?this._DynamicFormModule_6:n===r.a?this._AppModule_7:n===i.c?this._LOCALE_ID_8:n===u.c?this._NgLocalization_9:n===i.p?this._ErrorHandler_10:n===i.q?this._APP_INITIALIZER_11:n===i.m?this._ApplicationInitStatus_12:n===i.n?this._ɵf_13:n===i.r?this._ApplicationRef_14:n===i.d?this._Compiler_15:n===i.s?this._APP_ID_16:n===i.t?this._IterableDiffers_17:n===i.u?this._KeyValueDiffers_18:n===o.q?this._DomSanitizer_19:n===i.v?this._Sanitizer_20:n===o.r?this._HAMMER_GESTURE_CONFIG_21:n===o.s?this._EVENT_MANAGER_PLUGINS_22:n===o.h?this._EventManager_23:n===o.p?this._ɵDomSharedStylesHost_24:n===o.i?this._ɵDomRendererFactory2_25:n===i.w?this._RendererFactory2_26:n===o.t?this._ɵSharedStylesHost_27:n===i.i?this._Testability_28:n===o.j?this._Meta_29:n===o.k?this._Title_30:n===a.a?this._ɵi_31:n===a.b?this._FormBuilder_32:t},t.prototype.destroyInternal=function(){this._ɵf_13.ngOnDestroy(),this._ɵDomSharedStylesHost_24.ngOnDestroy()},t}(i.x),g=new i.y(d,r.a)},function(n,t,e){"use strict";function l(){return u._15(0,[u._17(null,["\n    "]),u._18(0,null,null,7,"div",[["class","dynamic-field form-button"]],[[1,"ng-untouched"],[1,"ng-touched"],[1,"ng-pristine"],[1,"ng-dirty"],[1,"ng-valid"],[1,"ng-invalid"],[1,"ng-pending"]],[[null,"submit"],[null,"reset"]],function(n,t,e){var l=!0;if(n.component,"submit"===t){var i=u._21(n,2).onSubmit(e)!==!1;l=i&&l}if("reset"===t){var r=u._21(n,2).onReset()!==!1;l=r&&l}return l},null,null),u._19(270336,null,0,a.h,[[8,null],[8,null]],{form:[0,"form"]},null),u._24(1024,null,a.i,null,[a.h]),u._19(8192,null,0,a.j,[a.i],null,null),u._17(null,["\n      "]),u._18(0,null,null,1,"button",[["type","submit"]],[[3,"disabled",0]],null,null,null,null),u._17(null,["\n        ","\n      "]),u._17(null,["\n    "]),u._17(null,["\n  "])],function(n,t){var e=t.component,l=e.group;n(t,2,0,l)},function(n,t){var e=t.component,l=u._21(t,4).ngClassUntouched,i=u._21(t,4).ngClassTouched,r=u._21(t,4).ngClassPristine,o=u._21(t,4).ngClassDirty,a=u._21(t,4).ngClassValid,_=u._21(t,4).ngClassInvalid,s=u._21(t,4).ngClassPending;n(t,1,0,l,i,r,o,a,_,s);var c=e.config.disabled;n(t,6,0,c);var f=e.config.label;n(t,7,0,f)})}function i(){return u._15(0,[u._18(0,null,null,1,"form-button",[],null,null,null,l,s),u._19(24576,null,0,o.a,[],null,null)],null,null)}var r=e(32),u=e(0),o=e(13),a=e(2);e.d(t,"a",function(){return c});var _=[r.a],s=u._14({encapsulation:0,styles:_,data:{}}),c=(u._14({encapsulation:2,styles:[],data:{}}),u._23("form-button",o.a,i))},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["button[_ngcontent-%COMP%]{letter-spacing:-0.5px;cursor:pointer;background-color:#9d62c8;outline:0;line-height:1;text-align:center;padding:12px 30px;font-size:15px;font-weight:600;border-radius:2px;display:inline-block;border:none;color:#fff;transition:background-color .3s, box-shadow .3s}button[_ngcontent-%COMP%]:hover{background-color:#a46dcc;box-shadow:0 3px 8px rgba(0,0,0,0.2)}button[_ngcontent-%COMP%]:disabled{background:rgba(0,0,0,0.2);color:rgba(0,0,0,0.4);cursor:not-allowed;box-shadow:none}"]},function(n,t,e){"use strict";function l(){return u._15(0,[u._17(null,["\n    "]),u._18(0,null,null,14,"div",[["class","dynamic-field form-input"]],[[1,"ng-untouched"],[1,"ng-touched"],[1,"ng-pristine"],[1,"ng-dirty"],[1,"ng-valid"],[1,"ng-invalid"],[1,"ng-pending"]],[[null,"submit"],[null,"reset"]],function(n,t,e){var l=!0;if(n.component,"submit"===t){var i=u._21(n,2).onSubmit(e)!==!1;l=i&&l}if("reset"===t){var r=u._21(n,2).onReset()!==!1;l=r&&l}return l},null,null),u._19(270336,null,0,a.h,[[8,null],[8,null]],{form:[0,"form"]},null),u._24(1024,null,a.i,null,[a.h]),u._19(8192,null,0,a.j,[a.i],null,null),u._17(null,["\n      "]),u._18(0,null,null,1,"label",[],null,null,null,null,null),u._17(null,["",""]),u._17(null,["\n      "]),u._18(0,null,null,5,"input",[["type","text"]],[[0,"placeholder",0],[1,"ng-untouched"],[1,"ng-touched"],[1,"ng-pristine"],[1,"ng-dirty"],[1,"ng-valid"],[1,"ng-invalid"],[1,"ng-pending"]],[[null,"input"],[null,"blur"]],function(n,t,e){var l=!0;if(n.component,"input"===t){var i=u._21(n,10).onChange(e.target.value)!==!1;l=i&&l}if("blur"===t){var r=u._21(n,10).onTouched()!==!1;l=r&&l}return l},null,null),u._19(8192,null,0,a.r,[u.W,u.V],null,null),u._24(512,null,a.n,function(n){return[n]},[a.r]),u._19(335872,null,0,a.o,[[3,a.i],[8,null],[8,null],[2,a.n]],{name:[0,"name"]},null),u._24(1024,null,a.p,null,[a.o]),u._19(8192,null,0,a.q,[a.p],null,null),u._17(null,["\n    "]),u._17(null,["\n  "])],function(n,t){var e=t.component,l=e.group;n(t,2,0,l);var i=e.config.name;n(t,12,0,i)},function(n,t){var e=t.component,l=u._21(t,4).ngClassUntouched,i=u._21(t,4).ngClassTouched,r=u._21(t,4).ngClassPristine,o=u._21(t,4).ngClassDirty,a=u._21(t,4).ngClassValid,_=u._21(t,4).ngClassInvalid,s=u._21(t,4).ngClassPending;n(t,1,0,l,i,r,o,a,_,s);var c=e.config.label;n(t,7,0,c);var f=e.config.placeholder,p=u._21(t,14).ngClassUntouched,d=u._21(t,14).ngClassTouched,g=u._21(t,14).ngClassPristine,h=u._21(t,14).ngClassDirty,m=u._21(t,14).ngClassValid,b=u._21(t,14).ngClassInvalid,y=u._21(t,14).ngClassPending;n(t,9,0,f,p,d,g,h,m,b,y)})}function i(){return u._15(0,[u._18(0,null,null,1,"form-input",[],null,null,null,l,s),u._19(24576,null,0,o.a,[],null,null)],null,null)}var r=e(34),u=e(0),o=e(14),a=e(2);e.d(t,"a",function(){return c});var _=[r.a],s=u._14({encapsulation:0,styles:_,data:{}}),c=(u._14({encapsulation:2,styles:[],data:{}}),u._23("form-input",o.a,i))},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["input[_ngcontent-%COMP%]{display:block;font-family:inherit;font-size:14px;width:100%;border:1px solid rgba(0,0,0,0.1);outline:none;padding:10px 15px;color:rgba(0,0,0,0.7)}input[_ngcontent-%COMP%]:focus{border:1px solid rgba(0,0,0,0.4);box-shadow:0 0 3px rgba(0,0,0,0.3)}"]},function(n,t,e){"use strict";function l(){return o._15(0,[o._18(0,null,null,3,"option",[],null,null,null,null,null),o._19(73728,null,0,a.k,[o.V,o.W,[2,a.l]],null,null),o._19(73728,null,0,a.m,[o.V,o.W,[8,null]],null,null),o._17(null,["\n          ","\n        "])],null,function(n,t){var e=(t.component,t.context.$implicit);n(t,3,0,e)})}function i(){return o._15(0,[o._17(null,["\n    "]),o._18(0,null,null,23,"div",[["class","dynamic-field form-select"]],[[1,"ng-untouched"],[1,"ng-touched"],[1,"ng-pristine"],[1,"ng-dirty"],[1,"ng-valid"],[1,"ng-invalid"],[1,"ng-pending"]],[[null,"submit"],[null,"reset"]],function(n,t,e){var l=!0;if(n.component,"submit"===t){var i=o._21(n,2).onSubmit(e)!==!1;l=i&&l}if("reset"===t){var r=o._21(n,2).onReset()!==!1;l=r&&l}return l},null,null),o._19(270336,null,0,a.h,[[8,null],[8,null]],{form:[0,"form"]},null),o._24(1024,null,a.i,null,[a.h]),o._19(8192,null,0,a.j,[a.i],null,null),o._17(null,["\n      "]),o._18(0,null,null,1,"label",[],null,null,null,null,null),o._17(null,["",""]),o._17(null,["\n\n      "]),o._18(0,null,null,14,"select",[],[[1,"ng-untouched"],[1,"ng-touched"],[1,"ng-pristine"],[1,"ng-dirty"],[1,"ng-valid"],[1,"ng-invalid"],[1,"ng-pending"]],[[null,"change"],[null,"blur"]],function(n,t,e){var l=!0;if(n.component,"change"===t){var i=o._21(n,10).onChange(e.target.value)!==!1;l=i&&l}if("blur"===t){var r=o._21(n,10).onTouched()!==!1;l=r&&l}return l},null,null),o._19(8192,null,0,a.l,[o.W,o.V],null,null),o._24(512,null,a.n,function(n){return[n]},[a.l]),o._19(335872,null,0,a.o,[[3,a.i],[8,null],[8,null],[2,a.n]],{name:[0,"name"]},null),o._24(1024,null,a.p,null,[a.o]),o._19(8192,null,0,a.q,[a.p],null,null),o._17(null,["\n        "]),o._18(0,null,null,3,"option",[["value",""]],null,null,null,null,null),o._19(73728,null,0,a.k,[o.V,o.W,[2,a.l]],{value:[0,"value"]},null),o._19(73728,null,0,a.m,[o.V,o.W,[8,null]],{value:[0,"value"]},null),o._17(null,["",""]),o._17(null,["\n        "]),o._25(8388608,null,null,1,null,l),o._19(401408,null,0,s.g,[o.Z,o._0,o.t],{ngForOf:[0,"ngForOf"]},null),o._17(null,["\n      "]),o._17(null,["\n    "]),o._17(null,["\n  "])],function(n,t){var e=t.component,l=e.group;n(t,2,0,l);var i=e.config.name;n(t,12,0,i);var r="";n(t,17,0,r);var u="";n(t,18,0,u);var o=e.config.options;n(t,22,0,o)},function(n,t){var e=t.component,l=o._21(t,4).ngClassUntouched,i=o._21(t,4).ngClassTouched,r=o._21(t,4).ngClassPristine,u=o._21(t,4).ngClassDirty,a=o._21(t,4).ngClassValid,_=o._21(t,4).ngClassInvalid,s=o._21(t,4).ngClassPending;n(t,1,0,l,i,r,u,a,_,s);var c=e.config.label;n(t,7,0,c);var f=o._21(t,14).ngClassUntouched,p=o._21(t,14).ngClassTouched,d=o._21(t,14).ngClassPristine,g=o._21(t,14).ngClassDirty,h=o._21(t,14).ngClassValid,m=o._21(t,14).ngClassInvalid,b=o._21(t,14).ngClassPending;n(t,9,0,f,p,d,g,h,m,b);var y=e.config.placeholder;n(t,19,0,y)})}function r(){return o._15(0,[o._18(0,null,null,1,"form-select",[],null,null,null,i,f),o._19(24576,null,0,_.a,[],null,null)],null,null)}var u=e(36),o=e(0),a=e(2),_=e(15),s=e(4);e.d(t,"a",function(){return p});var c=[u.a],f=o._14({encapsulation:0,styles:c,data:{}}),p=(o._14({encapsulation:2,styles:[],data:{}}),o._23("form-select",_.a,r))},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["select[_ngcontent-%COMP%]{-webkit-appearance:none;text-indent:.01px;text-overflow:'';overflow:hidden;font-family:inherit;font-size:14px;padding:10px 15px;border-radius:0;color:rgba(0,0,0,0.7);border:1px solid rgba(0,0,0,0.1);width:100%;outline:none;background:linear-gradient(45deg, transparent 50%, rgba(0,0,0,0.7) 50%) no-repeat calc(100% - 20px) calc(1em + 4px),linear-gradient(135deg, rgba(0,0,0,0.7) 50%, transparent 50%) no-repeat calc(100% - 15px) calc(1em + 4px);background-size:5px 5px, 5px 5px}select[_ngcontent-%COMP%]:focus{border:1px solid rgba(0,0,0,0.4);box-shadow:0 0 3px rgba(0,0,0,0.3)}"]},function(n,t,e){"use strict";function l(){return o._15(0,[o._18(8388608,null,null,2,null,null,null,null,null,null,null),o._19(303104,null,0,a.a,[o.Y,o.Z],{config:[0,"config"],group:[1,"group"]},null),o._17(null,["\n      "])],function(n,t){var e=t.component,l=t.context.$implicit,i=e.form;n(t,1,0,l,i)},null)}function i(){return o._15(0,[o._17(null,["\n    "]),o._18(0,null,null,8,"form",[["class","dynamic-form"],["novalidate",""]],[[1,"ng-untouched"],[1,"ng-touched"],[1,"ng-pristine"],[1,"ng-dirty"],[1,"ng-valid"],[1,"ng-invalid"],[1,"ng-pending"]],[[null,"submit"],[null,"reset"]],function(n,t,e){var l=!0,i=n.component;if("submit"===t){var r=o._21(n,3).onSubmit(e)!==!1;l=r&&l}if("reset"===t){var u=o._21(n,3).onReset()!==!1;l=u&&l}if("submit"===t){var a=i.handleSubmit(e)!==!1;l=a&&l}return l},null,null),o._19(8192,null,0,s.g,[],null,null),o._19(270336,null,0,s.h,[[8,null],[8,null]],{form:[0,"form"]},null),o._24(1024,null,s.i,null,[s.h]),o._19(8192,null,0,s.j,[s.i],null,null),o._17(null,["\n      "]),o._25(8388608,null,null,1,null,l),o._19(401408,null,0,c.g,[o.Z,o._0,o.t],{ngForOf:[0,"ngForOf"]},null),o._17(null,["\n    "]),o._17(null,["\n  "])],function(n,t){var e=t.component,l=e.form;n(t,3,0,l);var i=e.config;n(t,8,0,i)},function(n,t){var e=(t.component,o._21(t,5).ngClassUntouched),l=o._21(t,5).ngClassTouched,i=o._21(t,5).ngClassPristine,r=o._21(t,5).ngClassDirty,u=o._21(t,5).ngClassValid,a=o._21(t,5).ngClassInvalid,_=o._21(t,5).ngClassPending;n(t,1,0,e,l,i,r,u,a,_)})}function r(){return o._15(0,[o._18(0,null,null,1,"dynamic-form",[],null,null,null,i,p),o._19(319488,null,0,_.a,[s.b],null,null)],function(n,t){n(t,1,0)},null)}var u=e(38),o=e(0),a=e(26),_=e(16),s=e(2),c=e(4);e.d(t,"b",function(){return p}),t.a=i;var f=[u.a],p=o._14({encapsulation:0,styles:f,data:{}});o._14({encapsulation:2,styles:[],data:{}}),o._23("dynamic-form",_.a,r)},function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["[_nghost-%COMP%]     .dynamic-field{margin-bottom:15px}[_nghost-%COMP%]     .dynamic-field label{display:block;font-size:16px;font-weight:400;letter-spacing:0px;margin-bottom:10px;color:rgba(0,0,0,0.9)}"]},,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,t,e){e(23),n.exports=e(22)}],[65]);
//# sourceMappingURL=app.js.map
