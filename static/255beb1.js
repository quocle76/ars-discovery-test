(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{300:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("2035139c",content,!0,{sourceMap:!1})},302:function(t,e,r){"use strict";r.r(e);var n,o=r(4),l=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,d=/\S/,c={name:"BaseInput",props:(n={type:{type:String,default:"text"},text:{type:String,default:""},icon:{type:String,default:""},placeholder:{type:String,default:""},customWidth:{type:String,default:""},customPadding:{type:String,default:""},customClass:{type:String,default:""},isHiddenValue:{type:Boolean,default:!1},hasValidate:{type:Boolean,default:!0},errorMsg:{type:String,default:"Please enter a valid email address."}},Object(o.a)(n,"icon",{type:Array,default:[]}),Object(o.a)(n,"classPostion",{type:String,default:"left-icon"}),n),methods:{switchVisibility:function(){this.passwordField="password"===this.passwordField?"text":"password"},triggerValidate:function(t,e,r){return function(t,e){var r=null;switch(e){case"email":r=l;break;case"password":r=d;break;default:r=null}return!(!r||!r.test(t))}(t,e)?(this.isValid=!0,r&&r(),!0):(this.isValid=!1,!1)},changeHanlder:function(t){this.value=t.target.value},handleBlur:function(t){var e=this;this.hasValidate&&this.triggerValidate(t.target.value,this.type,(function(){e.value=t.target.value}))}},data:function(){return{isValid:!0,value:"",passwordField:"password"}}},f=(r(313),r(66)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-wrapper"},[r("div",{staticClass:"input-container"},[r("input",{class:["input",t.customWidth?"input--"+t.customWidth:"",t.customPadding?"input--"+t.customPadding:"",t.customClass?"input--"+t.customClass:"",t.isValid?"":"input-error"],attrs:{type:"password"===t.type?t.passwordField:t.type,text:t.text,placeholder:t.placeholder},on:{input:t.changeHanlder,blur:t.handleBlur}}),t._v(" "),r("fa",{attrs:{icon:t.icon}}),t._v(" "),r("fa",{directives:[{name:"show",rawName:"v-show",value:"password"===t.type,expression:"type === 'password'"}],class:["visibility-password","text"===t.passwordField?"on":""],attrs:{icon:["fa","eye"]},on:{click:t.switchVisibility}})],1),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.isValid,expression:"!isValid"}],staticClass:"error-msg"},[t._v(t._s(t.errorMsg))])])}),[],!1,null,"561b2e96",null);e.default=component.exports},313:function(t,e,r){"use strict";r(300)},314:function(t,e,r){var n=r(43)(!1);n.push([t.i,".input-wrapper[data-v-561b2e96]{display:flex;flex-direction:column;margin-bottom:16px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal}.input-wrapper[data-v-561b2e96],.input-wrapper .input-container[data-v-561b2e96]{position:relative}.input-wrapper .input[data-v-561b2e96]{min-width:368px;min-height:58px;padding:18px 24px 16px 55px;border-radius:30px;border:1px solid #51475a}.input-wrapper .input[data-v-561b2e96]:focus{outline:none}@media screen and (max-width:767px){.input-wrapper .input[data-v-561b2e96]{min-width:100%;width:100%}}.input-wrapper .input[data-v-561b2e96]::-moz-placeholder{margin:0 0 0 11px;opacity:.5;font-size:20px;color:#51475a}.input-wrapper .input[data-v-561b2e96]:-ms-input-placeholder{margin:0 0 0 11px;opacity:.5;font-size:20px;color:#51475a}.input-wrapper .input[data-v-561b2e96]::placeholder{margin:0 0 0 11px;opacity:.5;font-size:20px;color:#51475a}.input-wrapper .error-msg[data-v-561b2e96]{font-size:14px;line-height:2;color:#d35959}.input-wrapper .svg-inline--fa[data-v-561b2e96]{position:absolute;top:50%;left:10px;transform:translateY(-50%);left:24px;color:#000}.input-wrapper .svg-inline--fa.visibility-password[data-v-561b2e96]{cursor:pointer;right:20px;left:auto;color:#bebebe}.input-wrapper .svg-inline--fa.visibility-password.on[data-v-561b2e96]{color:#000}",""]),t.exports=n}}]);