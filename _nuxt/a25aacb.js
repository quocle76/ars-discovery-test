(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{290:function(t,e,l){"use strict";l.r(e);var r={name:"BaseButton",props:{customClass:{type:String,default:""},medium:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},icon:{type:Boolean,default:!1}},methods:{clickHandle:function(){this.$emit("click")}}},o=(l(297),l(31)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:["button",t.transparent?"button--transparent":"",t.customClass?"button--"+t.customClass:"",t.medium?"button--medium":""],attrs:{disabled:t.disabled},on:{click:t.clickHandle}},[t._t("default")],2)}),[],!1,null,"6e478ef3",null);e.default=component.exports},291:function(t,e,l){var content=l(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(47).default)("3272e58c",content,!0,{sourceMap:!1})},292:function(t,e,l){t.exports=l.p+"img/cubby-art.cb52efe.png"},293:function(t,e,l){t.exports=l.p+"img/cubby-tiny-noshadow.318ba53.png"},294:function(t,e,l){t.exports=l.p+"img/cubby-uniform-btn-left.67b1971.png"},295:function(t,e,l){"use strict";l.r(e);l(21),l(15),l(26),l(35),l(20),l(36);var r=l(5),o=l(42);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={data:function(){return{}},components:{},props:{gameState:{type:Object,default:{}},title:{type:String,default:""},textLucky:{type:String,default:""},gameCountry:{type:String,default:""}},computed:{},methods:d(d({},Object(o.b)("country",["getAttemptId"])),{},{clickHandle:function(){this.$emit("closeDialog")},handleReplay:function(){var t;(this.$emit("handleReplay"),this.gameCountry)&&this.getAttemptId({gameId:null===(t=this.gameState.country[this.gameCountry])||void 0===t?void 0:t.gameId})}}),destroyed:function(){}},f=(l(390),l(31)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t.gameState.submitSuccess&&t.gameState.country[t.gameCountry]&&t.gameState.country[t.gameCountry].chances<2?l("div",{staticClass:"result-container"},[l("div",{staticClass:"country"},[t._v(t._s(t.title))]),t._v(" "),l("label",[t._v("Awesome! You've earned:")]),t._v(" "),l("h1",{staticClass:"title-lucky"},[t._v("100 ASR points")]),t._v(" "),t._m(0),t._v(" "),l("p",{domProps:{innerHTML:t._s(t.textLucky)}}),t._v(" "),l("BaseButton",{staticClass:"button-replay",attrs:{transparent:!0},on:{click:t.handleReplay}},[t._v("Play Again")]),t._v(" "),l("BaseButton",{staticClass:"button-nextcountry button-label",class:t.gameCountry.toLowerCase(),on:{click:t.clickHandle}},[t._v("Back to Map")])],1):t._e(),t._v(" "),t.gameState.submitSuccess&&t.gameState.country[t.gameCountry]&&t.gameState.country[t.gameCountry].chances>=2?l("div",{staticClass:"result-container"},[l("div",{staticClass:"country"},[t._v(t._s(t.title))]),t._v(" "),l("label",[t._v("Awesome! You've earned:")]),t._v(" "),l("h1",{staticClass:"title-lucky"},[t._v("+1 NFT lucky draw chance")]),t._v(" "),t._m(1),t._v(" "),l("BaseButton",{staticClass:"button-replay",attrs:{transparent:!0},on:{click:t.handleReplay}},[t._v("Play Again")]),t._v(" "),l("BaseButton",{staticClass:"button-nextcountry button-label",class:t.gameCountry.toLowerCase(),on:{click:t.clickHandle}},[t._v("Back to Map")])],1):t._e()])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("p",{staticClass:"sub-prize"},[t._v("+1 "),l("a",{attrs:{href:"/art-gallery",target:"_blank"}},[t._v("NFT lucky draw chance")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("p",[t._v("\n      Play again to earn more chances or check out all our prizes in the\n      "),l("a",{staticClass:"NFTlink",attrs:{href:"/art-gallery",target:"_blank"}},[t._v("NFT Art Gallery")]),t._v(".\n    ")])}],!1,null,"e212ab3a",null);e.default=component.exports;installComponents(component,{BaseButton:l(290).default})},297:function(t,e,l){"use strict";l(291)},298:function(t,e,l){var r=l(46),o=l(202),n=l(294),d=l(292),c=l(293),f=r(!1),v=o(n),y=o(d),h=o(c);f.push([t.i,'.art-gallery .slick-next[data-v-6e478ef3],.art-gallery .slick-prev[data-v-6e478ef3]{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;transform:translateY(-50%);cursor:pointer;border:none}.art-gallery .slick-next[data-v-6e478ef3],.art-gallery .slick-next[data-v-6e478ef3]:focus,.art-gallery .slick-next[data-v-6e478ef3]:hover,.art-gallery .slick-prev[data-v-6e478ef3],.art-gallery .slick-prev[data-v-6e478ef3]:focus,.art-gallery .slick-prev[data-v-6e478ef3]:hover{color:transparent;outline:none;background:transparent}.art-gallery .slick-next[data-v-6e478ef3]:focus:before,.art-gallery .slick-next[data-v-6e478ef3]:hover:before,.art-gallery .slick-prev[data-v-6e478ef3]:focus:before,.art-gallery .slick-prev[data-v-6e478ef3]:hover:before{opacity:1}.art-gallery .slick-next.slick-disabled[data-v-6e478ef3]:before,.art-gallery .slick-prev.slick-disabled[data-v-6e478ef3]:before{opacity:.25}.art-gallery .slick-next[data-v-6e478ef3]:before,.art-gallery .slick-prev[data-v-6e478ef3]:before{font-family:"slick";font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.art-gallery .slick-prev[data-v-6e478ef3]{left:-25px}.art-gallery [dir=rtl] .slick-prev[data-v-6e478ef3]{right:-25px;left:auto}.art-gallery .slick-prev[data-v-6e478ef3]:before{content:"←"}.art-gallery [dir=rtl] .slick-prev[data-v-6e478ef3]:before{content:"→"}.art-gallery .slick-next[data-v-6e478ef3]{right:-25px}.art-gallery [dir=rtl] .slick-next[data-v-6e478ef3]{right:auto;left:-25px}.art-gallery .slick-next[data-v-6e478ef3]:before{content:"→"}.art-gallery [dir=rtl] .slick-next[data-v-6e478ef3]:before{content:"←"}.art-gallery .slick-dotted.slick-slider[data-v-6e478ef3]{margin-bottom:30px}.art-gallery .slick-dots[data-v-6e478ef3]{position:absolute;bottom:110px;display:block;width:calc(100% - 84px);height:6px;border-radius:3px;background-color:#fff;padding:0;margin:0;left:50%;transform:translateX(-50%);list-style:none;text-align:center}@media screen and (max-width:414px){.art-gallery .slick-dots[data-v-6e478ef3]{width:calc(100% - 120px)}}@media screen and (max-width:395px){.art-gallery .slick-dots[data-v-6e478ef3]{width:calc(100% - 100px)}}@media screen and (max-width:375px){.art-gallery .slick-dots[data-v-6e478ef3]{width:calc(100% - 84px)}}@media screen and (max-width:360px){.art-gallery .slick-dots[data-v-6e478ef3]{width:calc(100% - 106px)}}@media screen and (max-width:320px){.art-gallery .slick-dots[data-v-6e478ef3]{width:calc(100% - 66px)}}.art-gallery .slick-dots li[data-v-6e478ef3]{position:relative;display:inline-block;width:15px;height:6px;border-radius:3px;margin:0 5px;padding:0;top:-12px;background-color:#fff;cursor:pointer}.art-gallery .slick-dots li[data-v-6e478ef3]:first-child{margin-left:0}.art-gallery .slick-dots li[data-v-6e478ef3]:last-child{margin-right:0}@media screen and (max-width:360px){.art-gallery .slick-dots li[data-v-6e478ef3]{width:12px}}.art-gallery .slick-dots li.slick-active[data-v-6e478ef3]{background-color:#4b6866}.art-gallery .slick-dots li button[data-v-6e478ef3]{font-size:0;line-height:0;display:none;width:32px;height:6px;border-radius:3px;cursor:pointer;color:transparent;border:0;outline:none;background:transparent}.art-gallery .slick-dots li button[data-v-6e478ef3]:focus,.art-gallery .slick-dots li button[data-v-6e478ef3]:hover{outline:none}.art-gallery .slick-dots li button[data-v-6e478ef3]:focus:before,.art-gallery .slick-dots li button[data-v-6e478ef3]:hover:before{opacity:1}.art-gallery .slick-dots li button[data-v-6e478ef3]:before{font-family:"slick";font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:32px;height:6px;border-radius:3px;content:"none";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.art-gallery .slick-dots li.slick-active button[data-v-6e478ef3]:before{opacity:.75;color:#000}.art-gallery .slick-slider[data-v-6e478ef3]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.art-gallery .slick-list[data-v-6e478ef3]{position:relative;display:block;overflow:hidden;margin:0;padding:0}.art-gallery .slick-list[data-v-6e478ef3]:focus{outline:none}.art-gallery .slick-list.dragging[data-v-6e478ef3]{cursor:pointer;cursor:hand}.art-gallery .slick-slider .slick-list[data-v-6e478ef3],.art-gallery .slick-slider .slick-track[data-v-6e478ef3]{transform:translateZ(0)}.art-gallery .slick-track[data-v-6e478ef3]{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.art-gallery .slick-track[data-v-6e478ef3]:after,.art-gallery .slick-track[data-v-6e478ef3]:before{display:table;content:""}.art-gallery .slick-track[data-v-6e478ef3]:after{clear:both}.art-gallery .slick-loading .slick-track[data-v-6e478ef3]{visibility:hidden}.art-gallery .slick-slide[data-v-6e478ef3]{display:none;float:left;height:100%;min-height:1px}.art-gallery [dir=rtl] .slick-slide[data-v-6e478ef3]{float:right}.art-gallery .slick-slide img[data-v-6e478ef3]{display:block}.art-gallery .slick-slide.slick-loading img[data-v-6e478ef3]{display:none}.art-gallery .slick-slide.dragging img[data-v-6e478ef3]{pointer-events:none}.art-gallery .slick-initialized .slick-slide[data-v-6e478ef3]{display:block}.art-gallery .slick-loading .slick-slide[data-v-6e478ef3]{visibility:hidden}.art-gallery .slick-vertical .slick-slide[data-v-6e478ef3]{display:block;height:auto;border:1px solid transparent}.art-gallery .slick-arrow.slick-hidden[data-v-6e478ef3]{display:none}.button[data-v-6e478ef3]{padding:16px 38px;border-radius:30px;background-color:#4b6866;outline:0;border:0;font-family:"Montserrat";font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.3;letter-spacing:normal;text-align:center;color:#fff;cursor:pointer;transition:all .3s ease}.button[data-v-6e478ef3]:hover{background-color:#668886}.button[data-v-6e478ef3]:active{background-color:#4b6866}.button[data-v-6e478ef3]:disabled{background-color:#c1d7d5;cursor:not-allowed}.button--transparent[data-v-6e478ef3]{color:#4b6866;background-color:#fff;border-radius:30px;border:2px solid #4b6866;transition:all .3s ease}.button--transparent[data-v-6e478ef3]:hover{background-color:#4b6866;color:#fff}.button--transparent[data-v-6e478ef3]:active{background-color:#fff;color:#4b6866}.button--transparent[data-v-6e478ef3]:disabled{background-color:#fff;border-color:#c1d7d5;color:#c1d7d5;cursor:not-allowed}.button--medium[data-v-6e478ef3]{min-width:212px}.button--btn-start-playing[data-v-6e478ef3]{padding:11px 46.6px 11px 88.6px;height:58px;position:relative}.button--btn-start-playing[data-v-6e478ef3]:after{content:"";background-image:url('+v+');position:absolute;width:66px;height:66px;background-size:contain;bottom:0;background-repeat:no-repeat;left:22px}@media(max-width:1024px){.button--btn-start-playing[data-v-6e478ef3]{max-width:280px;width:100%;white-space:nowrap}}@media(max-width:320px){.button--btn-start-playing[data-v-6e478ef3]{font-size:18px;max-width:260px}}.button--btn-nft-art[data-v-6e478ef3]{padding:11px 33px 11px 75.6px;height:58px;position:relative}.button--btn-nft-art[data-v-6e478ef3]:after{content:"";background-image:url('+y+');position:absolute;width:66px;height:66px;background-size:contain;bottom:-3px;background-repeat:no-repeat;left:-8px}@media(max-width:1024px){.button--btn-nft-art[data-v-6e478ef3]{max-width:280px;width:100%;padding:11px 30.5px 11px 78px;white-space:nowrap}}@media(max-width:320px){.button--btn-nft-art[data-v-6e478ef3]{font-size:18px;max-width:260px}}.button--btn-weekly-flash[data-v-6e478ef3]{padding:11px 28.6px 11px 51.6px;height:58px;position:relative}.button--btn-weekly-flash[data-v-6e478ef3]:after{content:"";background-image:url('+h+");position:absolute;width:81px;height:81px;background-size:contain;bottom:-21px;background-repeat:no-repeat;left:-15px}@media(max-width:1024px){.button--btn-weekly-flash[data-v-6e478ef3]{max-width:280px;width:100%;padding:11px 28.6px 11px 49px;white-space:nowrap}}@media(max-width:320px){.button--btn-weekly-flash[data-v-6e478ef3]{font-size:18px;max-width:260px}}@media screen and (max-width:767px){.button[data-v-6e478ef3]{width:100%}}",""]),t.exports=f},301:function(t,e,l){var content=l(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(47).default)("3c898303",content,!0,{sourceMap:!1})},390:function(t,e,l){"use strict";l(301)},391:function(t,e,l){var r=l(46)(!1);r.push([t.i,'.art-gallery .slick-next[data-v-e212ab3a],.art-gallery .slick-prev[data-v-e212ab3a]{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;transform:translateY(-50%);cursor:pointer;border:none}.art-gallery .slick-next[data-v-e212ab3a],.art-gallery .slick-next[data-v-e212ab3a]:focus,.art-gallery .slick-next[data-v-e212ab3a]:hover,.art-gallery .slick-prev[data-v-e212ab3a],.art-gallery .slick-prev[data-v-e212ab3a]:focus,.art-gallery .slick-prev[data-v-e212ab3a]:hover{color:transparent;outline:none;background:transparent}.art-gallery .slick-next[data-v-e212ab3a]:focus:before,.art-gallery .slick-next[data-v-e212ab3a]:hover:before,.art-gallery .slick-prev[data-v-e212ab3a]:focus:before,.art-gallery .slick-prev[data-v-e212ab3a]:hover:before{opacity:1}.art-gallery .slick-next.slick-disabled[data-v-e212ab3a]:before,.art-gallery .slick-prev.slick-disabled[data-v-e212ab3a]:before{opacity:.25}.art-gallery .slick-next[data-v-e212ab3a]:before,.art-gallery .slick-prev[data-v-e212ab3a]:before{font-family:"slick";font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.art-gallery .slick-prev[data-v-e212ab3a]{left:-25px}.art-gallery [dir=rtl] .slick-prev[data-v-e212ab3a]{right:-25px;left:auto}.art-gallery .slick-prev[data-v-e212ab3a]:before{content:"←"}.art-gallery [dir=rtl] .slick-prev[data-v-e212ab3a]:before{content:"→"}.art-gallery .slick-next[data-v-e212ab3a]{right:-25px}.art-gallery [dir=rtl] .slick-next[data-v-e212ab3a]{right:auto;left:-25px}.art-gallery .slick-next[data-v-e212ab3a]:before{content:"→"}.art-gallery [dir=rtl] .slick-next[data-v-e212ab3a]:before{content:"←"}.art-gallery .slick-dotted.slick-slider[data-v-e212ab3a]{margin-bottom:30px}.art-gallery .slick-dots[data-v-e212ab3a]{position:absolute;bottom:110px;display:block;width:calc(100% - 84px);height:6px;border-radius:3px;background-color:#fff;padding:0;margin:0;left:50%;transform:translateX(-50%);list-style:none;text-align:center}@media screen and (max-width:414px){.art-gallery .slick-dots[data-v-e212ab3a]{width:calc(100% - 120px)}}@media screen and (max-width:395px){.art-gallery .slick-dots[data-v-e212ab3a]{width:calc(100% - 100px)}}@media screen and (max-width:375px){.art-gallery .slick-dots[data-v-e212ab3a]{width:calc(100% - 84px)}}@media screen and (max-width:360px){.art-gallery .slick-dots[data-v-e212ab3a]{width:calc(100% - 106px)}}@media screen and (max-width:320px){.art-gallery .slick-dots[data-v-e212ab3a]{width:calc(100% - 66px)}}.art-gallery .slick-dots li[data-v-e212ab3a]{position:relative;display:inline-block;width:15px;height:6px;border-radius:3px;margin:0 5px;padding:0;top:-12px;background-color:#fff;cursor:pointer}.art-gallery .slick-dots li[data-v-e212ab3a]:first-child{margin-left:0}.art-gallery .slick-dots li[data-v-e212ab3a]:last-child{margin-right:0}@media screen and (max-width:360px){.art-gallery .slick-dots li[data-v-e212ab3a]{width:12px}}.art-gallery .slick-dots li.slick-active[data-v-e212ab3a]{background-color:#4b6866}.art-gallery .slick-dots li button[data-v-e212ab3a]{font-size:0;line-height:0;display:none;width:32px;height:6px;border-radius:3px;cursor:pointer;color:transparent;border:0;outline:none;background:transparent}.art-gallery .slick-dots li button[data-v-e212ab3a]:focus,.art-gallery .slick-dots li button[data-v-e212ab3a]:hover{outline:none}.art-gallery .slick-dots li button[data-v-e212ab3a]:focus:before,.art-gallery .slick-dots li button[data-v-e212ab3a]:hover:before{opacity:1}.art-gallery .slick-dots li button[data-v-e212ab3a]:before{font-family:"slick";font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:32px;height:6px;border-radius:3px;content:"none";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.art-gallery .slick-dots li.slick-active button[data-v-e212ab3a]:before{opacity:.75;color:#000}.art-gallery .slick-slider[data-v-e212ab3a]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.art-gallery .slick-list[data-v-e212ab3a]{position:relative;display:block;overflow:hidden;margin:0;padding:0}.art-gallery .slick-list[data-v-e212ab3a]:focus{outline:none}.art-gallery .slick-list.dragging[data-v-e212ab3a]{cursor:pointer;cursor:hand}.art-gallery .slick-slider .slick-list[data-v-e212ab3a],.art-gallery .slick-slider .slick-track[data-v-e212ab3a]{transform:translateZ(0)}.art-gallery .slick-track[data-v-e212ab3a]{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.art-gallery .slick-track[data-v-e212ab3a]:after,.art-gallery .slick-track[data-v-e212ab3a]:before{display:table;content:""}.art-gallery .slick-track[data-v-e212ab3a]:after{clear:both}.art-gallery .slick-loading .slick-track[data-v-e212ab3a]{visibility:hidden}.art-gallery .slick-slide[data-v-e212ab3a]{display:none;float:left;height:100%;min-height:1px}.art-gallery [dir=rtl] .slick-slide[data-v-e212ab3a]{float:right}.art-gallery .slick-slide img[data-v-e212ab3a]{display:block}.art-gallery .slick-slide.slick-loading img[data-v-e212ab3a]{display:none}.art-gallery .slick-slide.dragging img[data-v-e212ab3a]{pointer-events:none}.art-gallery .slick-initialized .slick-slide[data-v-e212ab3a]{display:block}.art-gallery .slick-loading .slick-slide[data-v-e212ab3a]{visibility:hidden}.art-gallery .slick-vertical .slick-slide[data-v-e212ab3a]{display:block;height:auto;border:1px solid transparent}.art-gallery .slick-arrow.slick-hidden[data-v-e212ab3a]{display:none}.country[data-v-e212ab3a]{font-size:36px;line-height:normal;padding:0}.country[data-v-e212ab3a],label[data-v-e212ab3a]{font-family:Montserrat;font-weight:700;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#51475a}label[data-v-e212ab3a]{font-size:18px;line-height:1.44;margin-bottom:24px;margin-top:24px;display:block}.title-lucky[data-v-e212ab3a]{font-family:Montserrat;font-size:56px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:2px;color:#51475a}@media screen and (max-width:767px){.title-lucky[data-v-e212ab3a]{font-size:48px;max-width:90%}}p[data-v-e212ab3a]{font-family:Montserrat;font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.56;letter-spacing:normal;color:#51475a;margin-bottom:24px;margin-top:32px;max-width:380px}.NFTlink[data-v-e212ab3a]{color:#2979ff;text-decoration:none}.button-replay[data-v-e212ab3a]{border-radius:30px;border:2px solid #4b6866;min-width:148px;padding:14px 38px;font-family:Montserrat;font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.3;letter-spacing:normal;text-align:center;margin-right:16px}@media screen and (max-width:767px){.button-replay[data-v-e212ab3a]{width:100%}}.button-nextcountry[data-v-e212ab3a]{min-width:216px;height:58px;border-radius:30px;background-color:#4b6866;font-family:Montserrat;font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.3;letter-spacing:normal;text-align:center;color:#fff;outline:0}@media screen and (max-width:767px){.button-nextcountry[data-v-e212ab3a]{width:100%;margin-top:8px;margin-bottom:200px}.button-nextcountry.china[data-v-e212ab3a]{margin-bottom:50px}.button-nextcountry.dubai[data-v-e212ab3a]{margin-bottom:166px}.button-nextcountry.australia[data-v-e212ab3a]{margin-bottom:24px}.button-nextcountry.malaysia[data-v-e212ab3a]{margin-bottom:167px}.button-nextcountry.india[data-v-e212ab3a]{margin-bottom:118px}.button-nextcountry.korea[data-v-e212ab3a],.button-nextcountry.usa[data-v-e212ab3a]{margin-bottom:178px}}.sub-prize[data-v-e212ab3a]{font-family:Montserrat;font-size:24px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.17;letter-spacing:normal;color:#51475a}.sub-prize a[data-v-e212ab3a]{color:#2979ff}',""]),t.exports=r}}]);