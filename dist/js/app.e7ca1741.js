(function(){var A={8081:function(A,e,t){"use strict";var i=t(7195),r=function(){var A=this,e=A._self._c;return e("div",{staticClass:"app"},[e("iframe",{staticClass:"frame-header",attrs:{width:"100%",height:"116px",scrolling:"no",src:"https://timerman.org/"}}),A._m(0),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"product-filter"},[e("p",[A._v("Фильтры:")]),e("div",{staticClass:"product-filter-buttons"},[e("button",{class:{active:A.isSelected("Все")},on:{click:function(e){return A.filterByLabel("Все")}}},[A._v("Все")]),e("button",{class:{active:A.isSelected("Напитки")},on:{click:function(e){return A.filterByLabel("Напитки")}}},[A._v("Напитки")]),e("button",{class:{active:A.isSelected("Снеки")},on:{click:function(e){return A.filterByLabel("Снеки")}}},[A._v("Снеки")]),e("button",{class:{active:A.isSelected("Еще что-то")},on:{click:function(e){return A.filterByLabel("Еще что-то")}}},[A._v("Бургеры")])])]),e("div",{staticClass:"product-list"},A._l(A.products,(function(A){return e("div",{key:A.id},[e("ProductItem",{attrs:{title:A.title,description:A.description,price:A.price,img:A.img,label:A.label}})],1)})),0),A.isEmpty?e("div",{staticClass:"product-empty"},[e("h2",[A._v("Ничего не найдено")])]):A._e(),A._m(1)])])},B=[function(){var A=this,e=A._self._c;return e("div",{staticClass:"head-main"},[e("div",{staticClass:"inform-wrapper"},[e("h1",[A._v("Витрина")]),e("p",[A._v("В точках общественного питания, расположенных на территории проведения соревнований.")]),e("p",[A._v("Вы можете приобрести напитки и иную продукцию.")])])])},function(){var A=this,e=A._self._c;return e("div",{staticClass:"product-info"},[e("p",[A._v(" «Не является публичной офертой. Точную стоимость необходимо узнавать в торговой точке, реализующей продукцию.» и «Реклама ООО «ПепсиКо Холдингс.» ")])])}],n=function(){var A=this,e=A._self._c;return e("div",{staticClass:"product"},[e("div",{staticClass:"product-image-wrapper"},[e("img",{staticClass:"product-image",attrs:{src:A.imageUrl,alt:"product image"}})]),e("span",{staticClass:"product-label"},[A._v(A._s(A.label))]),e("h3",{staticClass:"product-title"},[A._v(A._s(A.title))]),A.description?e("p",{staticClass:"product-description"},[A._v(A._s(A.description))]):A._e(),e("div",{staticClass:"product-price"},[A._v(A._s(A.price)+" ₽")])])},Q=[],s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABoeSURBVHgB7d3tix3l3cDx8TZiQo1tIm3pFgNG2iBNwUIKLfTP94UvAgqmSBUjDSRgigmaiEoie/s7d6+9r0xm5sycnTk757efDyxZs+dhztl4vnNd8/TK8c8aAOCQHf9PAwAcPEEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQgYPw4MGD5smTJw3QTdCB1YuY//Of/2xu374t6tBD0IFVKzEPz58/F3XoIejAatUxL0Qdugk6sEpdMS9EHV4m6MDqDMW8EHV4kaADqzIm5kVE/enTpw0g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ABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABK48PPXcQMAHLLj/wXGMKWHKyKZEwAAAABJRU5ErkJggg==",E={props:{title:{required:!0},description:{required:!0},img:{required:!0},price:{required:!0},label:{required:!0}},methods:{handleImageError(A){A.target.src=s}},computed:{imageUrl(){return t(9010)(`./${this.img}`)}}},c=E,d=t(1001),o=(0,d.Z)(c,n,Q,!1,null,"785bed5c",null),g=o.exports;const u=[{id:1,img:"05L_AM-active_Raspberry_v2-1.png",title:"Бутылка для воды 500 мл",description:"",price:"99.99 - 200",label:"Напитки"},{id:2,img:"05L_AM_NG-2.png",title:"Бутылка для воды 1 литр",description:"",price:"99.99 - 200",label:"Напитки"},{id:3,img:"05L_AM-active_Citron_v2-1.png",title:"Бутылка для воды 1 литр",description:"",price:"99.99 - 200",label:"Напитки"},{id:4,img:"05L_AM_G.png",title:"Бутылка для воды 1 литр",description:"",price:"99.99 - 200",label:"Напитки"},{id:5,img:"0L5-PET-Evervess_3D_op2.png",title:"Бутылка для воды 1 литр",description:"",price:"99.99 - 200",label:"Напитки"},{id:6,img:"4600494521768_orig.png",title:"Бутылка для воды 1 литр",description:"",price:"99.99 - 200",label:"Напитки"},{id:7,img:"4600494661792_orig.png",title:"Бутылка для воды 1 литр",description:"",price:"99.99 - 200",label:"Напитки"},{id:8,img:"4600494666919_orig.png",title:"Бутылка для воды 1 литр",description:"",price:"99.99 - 200",label:"Напитки"},{id:9,img:"4600494666919_orig.png",title:"Бутылка для воды 1 литр",description:"",price:"99.99 - 200",label:"Снеки"}];var a={components:{ProductItem:g},data(){return{products:[...u],selected:"Все"}},computed:{isEmpty(){return!this.products.length}},methods:{filterByLabel(A){"Все"===A?(this.selected="Все",this.products=[...u]):(this.selected=A,this.products=[...u].filter((e=>e.label===A)))},isSelected(A){return this.selected===A}}},p=a,f=(0,d.Z)(p,r,B,!1,null,null,null),l=f.exports;i.ZP.config.productionTip=!1,new i.ZP({render:A=>A(l)}).$mount("#app")},9010:function(A,e,t){var i={"./05L_AM-active_Citron_v2-1.png":3675,"./05L_AM-active_Raspberry_v2-1.png":7444,"./05L_AM_G.png":4206,"./05L_AM_NG-2.png":9880,"./0L5-PET-Evervess_3D_op2.png":1547,"./4600494521768_orig.png":5666,"./4600494661792_orig.png":8888,"./4600494666919_orig.png":5240};function r(A){var e=B(A);return t(e)}function B(A){if(!t.o(i,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return i[A]}r.keys=function(){return Object.keys(i)},r.resolve=B,A.exports=r,r.id=9010},3675:function(A,e,t){"use strict";A.exports=t.p+"img/05L_AM-active_Citron_v2-1.af09c03f.png"},7444:function(A,e,t){"use strict";A.exports=t.p+"img/05L_AM-active_Raspberry_v2-1.feec6c56.png"},4206:function(A,e,t){"use strict";A.exports=t.p+"img/05L_AM_G.c85cd768.png"},9880:function(A,e,t){"use strict";A.exports=t.p+"img/05L_AM_NG-2.311882a7.png"},1547:function(A,e,t){"use strict";A.exports=t.p+"img/0L5-PET-Evervess_3D_op2.71ef6907.png"},5666:function(A,e,t){"use strict";A.exports=t.p+"img/4600494521768_orig.0869f562.png"},8888:function(A,e,t){"use strict";A.exports=t.p+"img/4600494661792_orig.d0c4c066.png"},5240:function(A,e,t){"use strict";A.exports=t.p+"img/4600494666919_orig.84791e58.png"}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var B=e[i]={exports:{}};return A[i](B,B.exports,t),B.exports}t.m=A,function(){var A=[];t.O=function(e,i,r,B){if(!i){var n=1/0;for(c=0;c<A.length;c++){i=A[c][0],r=A[c][1],B=A[c][2];for(var Q=!0,s=0;s<i.length;s++)(!1&B||n>=B)&&Object.keys(t.O).every((function(A){return t.O[A](i[s])}))?i.splice(s--,1):(Q=!1,B<n&&(n=B));if(Q){A.splice(c--,1);var E=r();void 0!==E&&(e=E)}}return e}B=B||0;for(var c=A.length;c>0&&A[c-1][2]>B;c--)A[c]=A[c-1];A[c]=[i,r,B]}}(),function(){t.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return t.d(e,{a:e}),e}}(),function(){t.d=function(A,e){for(var i in e)t.o(e,i)&&!t.o(A,i)&&Object.defineProperty(A,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){t.p="/market/"}(),function(){var A={143:0};t.O.j=function(e){return 0===A[e]};var e=function(e,i){var r,B,n=i[0],Q=i[1],s=i[2],E=0;if(n.some((function(e){return 0!==A[e]}))){for(r in Q)t.o(Q,r)&&(t.m[r]=Q[r]);if(s)var c=s(t)}for(e&&e(i);E<n.length;E++)B=n[E],t.o(A,B)&&A[B]&&A[B][0](),A[B]=0;return t.O(c)},i=self["webpackChunkmarket"]=self["webpackChunkmarket"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(8081)}));i=t.O(i)})();
//# sourceMappingURL=app.e7ca1741.js.map