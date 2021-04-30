(function(e){function t(t){for(var n,o,c=t[0],l=t[1],s=t[2],m=0,f=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/repository-name/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container d-flex container-box"},[a("UserInputElements",{attrs:{formData:e.formData},on:{changeFormData:function(t){return e.changeFormData(t)},onFileChange:function(t){return e.onFileChange(t)}}}),a("GeneratedCardComponent",{attrs:{formData:e.formData,image:e.image}})],1)])},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-container"},[a("form",{staticStyle:{"max-width":"25em"},attrs:{onsubmit:"return false"}},[e._l(e.formInputElements,(function(t){return a("div",{key:t.formValueKey},[a("div",{staticStyle:{margin:"5px"}},[e._v(" "+e._s(t.labelName)+" "),a("input",{staticClass:"form-input",attrs:{type:"text",id:"name"},domProps:{value:e.formData[t.formValueKey]},on:{input:function(a){var n;return e.changeFormData((n={},n[t.formValueKey]=a.target.value,n))}}}),a("i",{class:t.iconClass})])])})),a("div",[e._v("Upload Profile Picture")]),e._l(e.items,(function(t){return a("div",{key:t.image},[t.image?a("div",[a("img",{staticClass:"circleBase circle1",attrs:{src:t.image,width:"120px"}}),a("br"),a("button",{on:{click:function(a){return e.removeImage(t)}}},[e._v("Remove image")])]):a("div",[a("input",{attrs:{type:"file"},on:{change:function(a){return e.onFileChange(t,a)}}})])])}))],2)])},c=[],l={name:"UserInputElements",data:function(){return{formInputElements:[{labelName:"First Name",formValueKey:"firstName",placeholder:"Enter First Name"},{labelName:"Last Name",formValueKey:"lastName",placeholder:"Enter Last Name"},{labelName:"Department",formValueKey:"department",placeholder:"Enter Department"},{labelName:"Academic Year",formValueKey:"academicYear",placeholder:"Enter Academic Year"}],items:[{image:!1}]}},props:{formData:Object},methods:{changeFormData:function(e){console.log("Child element value : ",e),this.$emit("changeFormData",e)},onFileChange:function(e,t){var a=t.target.files||t.dataTransfer.files;a.length&&this.createImage(e,a[0])},createImage:function(e,t){var a=this,n=new Image,r=new FileReader;console.log(n),r.onload=function(t){e.image=t.target.result,a.items[0].image=e.image,a.$emit("onFileChange",e.image)},r.readAsDataURL(t)},removeImage:function(e){e.image=!1}}},s=l,u=a("2877"),m=Object(u["a"])(s,o,c,!1,null,null,null),f=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"section-container"},[a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-input card-name"},[e._v(" "+e._s(e.formData.firstName)+" "+e._s(e.formData.lastName)+" ")]),a("div",{staticClass:"card-input academic-year"},[e._v(" "+e._s(e.formData.academicYear)+" ")]),a("div",{staticClass:"card-input department-name"},[e._v(" Dept of "+e._s(e.formData.department)+" ")])])]),a("div",{staticClass:"circleBase circle2",staticStyle:{cursor:"pointer"},attrs:{width:"120px"}},[a("img",{staticClass:"circleBase circle1",attrs:{src:e.image,width:"120px"}})])])},d=[],g={name:"GeneratedIDCard",components:{},data:function(){return{}},props:{formData:Object,image:String}},v=g,h=Object(u["a"])(v,p,d,!1,null,null,null),b=h.exports,y={name:"App",components:{UserInputElements:f,GeneratedCardComponent:b},data:function(){return{formData:{firstName:"",lastName:"",department:"",academicYear:""},image:""}},methods:{changeFormData:function(e){console.log("Parent Element Value: ",e),this.formData=Object.assign({},this.formData,e)},onFileChange:function(e){this.image=e}}},D=y,_=(a("034f"),Object(u["a"])(D,r,i,!1,null,null,null)),C=_.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.f079da7e.js.map