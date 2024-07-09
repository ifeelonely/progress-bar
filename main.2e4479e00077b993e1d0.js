(()=>{"use strict";class e{#e;#t;constructor(e,t){this.#e=this.#i(e),this.#t=t}static createElement(e,t,...i){const s=document.createElement(e);return this.#s(s,t),this.#n(s,i),s}static#s(e,t){Object.keys(t).forEach((i=>{if(i.startsWith("on")&&"function"==typeof t[i]){const s="number"===e.type||"text"===e.type?"input":i.substring(2).toLowerCase();e.addEventListener(s,t[i])}else e.setAttribute(i,t[i])}))}static#n(e,t){t.forEach((t=>{"string"==typeof t?e.appendChild(document.createTextNode(t)):t instanceof Node&&e.appendChild(t)}))}#i(e){return document.getElementById(e)}render(){this.#e.appendChild(this.#t)}}class t{#a;#r;constructor({initialValue:e}){this.#r=!1,this.#a=e,this.element=this.#l(),this.calcGradientDeg=this.calcGradientDeg.bind(this),this.changeValue=this.changeValue.bind(this),this.setHide=this.setHide.bind(this),this.setAnimate=this.setAnimate.bind(this),this.context=this,this.calcGradientDeg(this.#a)}#c(e){return+e>=0&&+e<=100}calcGradientDeg(e){this.#c&&(this.element.style.background=`conic-gradient(var(--main-blue) ${3.6*e}deg, var(--main-grey) 0deg)`)}#l(){const t=e.createElement("div",{},[]);return t.classList.add("circular-progress-bar"),t}changeValue(){const e=document.querySelector(".number-input").value;this.#c(+e)&&(function(e,t,i){let s=t;if(t<e){let t=setInterval((()=>{s++,i(s),s>=e&&clearInterval(t)}))}else if(t>e){let t=setInterval((()=>{s--,i(s),s<=e&&clearInterval(t)}))}}(+e,this.#a,this.calcGradientDeg),this.#a=this.#c(e)?e:this.#a)}setHide(e){this.#r=e,this.element.style.opacity=this.#r?0:1}setAnimate(e){e?this.element.classList.add("circular-progress-bar_animated"):this.element.classList.remove("circular-progress-bar_animated")}}class i{#o;constructor(e){this.#o=e,this.element=this.#l()}#l(){return e.createElement("div",{class:"controls-container"},...this.#o)}}class s{#h;#d;#u;#p;#a;constructor(e,t,i,s,n){this.#h=e,this.#d=t,this.#u=i,this.#p=s,this.#a=n,this.element=this.render()}render(t="null"){const i=e.createElement("input",{type:this.#h,class:`input ${this.#u?.join(" ")}`,onChange:this.#p,id:`${t}`,value:this.#a}),s=e.createElement("label",{class:"control-label",for:t},`${this.#d}`);return e.createElement("div",{class:"input-container"},i,s)}}class n extends s{#g;#m;constructor(e,t,i,s){super(e,t,i),this.#g=`id-${Math.random().toString(16).slice(2)}`,this.onClick=s,this.toggle=this.toggle.bind(this),this.element=this.#l(),this.context=this,this.#m=!1}toggle(){this.#m=!this.#m,this.onClick(this.#m)}#l(){const t=super.render(this.#g),i=e.createElement("label",{class:"toggle-btn",for:this.#g,onClick:this.toggle}),s=t.children[1];return s.parentNode.insertBefore(i,s),t}}class a{constructor(){this.initialValue=25,this.element=this.#l()}#l(){const a=e.createElement("div",{}),{element:r,context:l}=new t({initialValue:this.initialValue}),{element:c}=new s("number","Value",["number-input"],function(e,t=300){let i;return(...s)=>{clearTimeout(i),i=setTimeout((()=>{e.apply(this,s)}),t)}}(l.changeValue,500),this.initialValue),{element:o}=new n("checkbox","Animate",["toggle-btn-input"],l.setAnimate),{element:h}=new n("checkbox","Hide",["toggle-btn-input"],l.setHide),{element:d}=new i([c,o,h]);return a.classList.add("progress-block"),a.appendChild(r),a.appendChild(d),a}}const{app:r}=new class{constructor(){this.app=this.#l()}#l(){const e=document.createElement("div");e.classList.add("App");const{element:t}=new a;return e.appendChild(t),e}};new e("root",r).render()})();