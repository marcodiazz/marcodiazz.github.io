(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function j(){}function we(t){return t()}function ae(){return Object.create(null)}function Z(t){t.forEach(we)}function Ce(t){return typeof t=="function"}function ye(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Oe(t){return Object.keys(t).length===0}function s(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function E(){return F(" ")}function _e(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function Le(t){return function(e){return e.preventDefault(),t.call(this,e)}}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Be(t){return t===""?null:+t}function Me(t){return Array.from(t.childNodes)}function K(t,e){e=""+e,t.data!==e&&(t.data=e)}function me(t,e){t.value=e??""}let se;function te(t){se=t}const Q=[],pe=[];let X=[];const de=[],Se=Promise.resolve();let ie=!1;function je(){ie||(ie=!0,Se.then(Ne))}function fe(t){X.push(t)}const oe=new Set;let J=0;function Ne(){if(J!==0)return;const t=se;do{try{for(;J<Q.length;){const e=Q[J];J++,te(e),Ie(e.$$)}}catch(e){throw Q.length=0,J=0,e}for(te(null),Q.length=0,J=0;pe.length;)pe.pop()();for(let e=0;e<X.length;e+=1){const n=X[e];oe.has(n)||(oe.add(n),n())}X.length=0}while(Q.length);for(;de.length;)de.pop()();ie=!1,oe.clear(),te(t)}function Ie(t){if(t.fragment!==null){t.update(),Z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}function Pe(t){const e=[],n=[];X.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),X=e}const re=new Set;let H;function R(){H={r:0,c:[],p:H}}function U(){H.r||Z(H.c),H=H.p}function k(t,e){t&&t.i&&(re.delete(t),t.i(e))}function O(t,e,n,l){if(t&&t.o){if(re.has(t))return;re.add(t),H.c.push(()=>{re.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function x(t){t&&t.c()}function V(t,e,n,l){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),l||fe(()=>{const f=t.$$.on_mount.map(we).filter(Ce);t.$$.on_destroy?t.$$.on_destroy.push(...f):Z(f),t.$$.on_mount=[]}),o.forEach(fe)}function W(t,e){const n=t.$$;n.fragment!==null&&(Pe(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(t,e){t.$$.dirty[0]===-1&&(Q.push(t),je(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,l,r,o,f,_=[-1]){const b=se;te(t);const c=t.$$={fragment:null,ctx:[],props:o,update:j,not_equal:r,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(b?b.$$.context:[])),callbacks:ae(),dirty:_,skip_bound:!1,root:e.target||b.$$.root};f&&f(c.root);let w=!1;if(c.ctx=n?n(t,e.props||{},(C,p,...d)=>{const m=d.length?d[0]:p;return c.ctx&&r(c.ctx[C],c.ctx[C]=m)&&(!c.skip_bound&&c.bound[C]&&c.bound[C](m),w&&Te(t,C)),p}):[],c.update(),w=!0,Z(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const C=Me(e.target);c.fragment&&c.fragment.l(C),C.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&k(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Ne()}te(b)}class Ae{$destroy(){W(this,1),this.$destroy=j}$on(e,n){if(!Ce(n))return j;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!Oe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function De(t){let e,n=t[0][0]+"",l;return{c(){e=a("p"),l=F(n),u(e,"class","number svelte-1rotq4q")},m(r,o){A(r,e,o),s(e,l)},p(r,o){o&1&&n!==(n=r[0][0]+"")&&K(l,n)},d(r){r&&y(e)}}}function Ye(t){let e;return{c(){e=a("p"),e.textContent="_",u(e,"class","number svelte-1rotq4q")},m(n,l){A(n,e,l)},p:j,d(n){n&&y(e)}}}function ze(t){let e,n=t[0][1]+"",l;return{c(){e=a("p"),l=F(n),u(e,"class","number svelte-1rotq4q")},m(r,o){A(r,e,o),s(e,l)},p(r,o){o&1&&n!==(n=r[0][1]+"")&&K(l,n)},d(r){r&&y(e)}}}function Fe(t){let e;return{c(){e=a("p"),e.textContent="_",u(e,"class","number svelte-1rotq4q")},m(n,l){A(n,e,l)},p:j,d(n){n&&y(e)}}}function He(t){let e,n=t[0][2]+"",l;return{c(){e=a("p"),l=F(n),u(e,"class","number svelte-1rotq4q")},m(r,o){A(r,e,o),s(e,l)},p(r,o){o&1&&n!==(n=r[0][2]+"")&&K(l,n)},d(r){r&&y(e)}}}function Ke(t){let e;return{c(){e=a("p"),e.textContent="_",u(e,"class","number svelte-1rotq4q")},m(n,l){A(n,e,l)},p:j,d(n){n&&y(e)}}}function Ve(t){let e,n=t[0][3]+"",l;return{c(){e=a("p"),l=F(n),u(e,"class","number svelte-1rotq4q")},m(r,o){A(r,e,o),s(e,l)},p(r,o){o&1&&n!==(n=r[0][3]+"")&&K(l,n)},d(r){r&&y(e)}}}function We(t){let e;return{c(){e=a("p"),e.textContent="_",u(e,"class","number svelte-1rotq4q")},m(n,l){A(n,e,l)},p:j,d(n){n&&y(e)}}}function Ge(t){let e,n=t[0][4]+"",l;return{c(){e=a("p"),l=F(n),u(e,"class","number svelte-1rotq4q")},m(r,o){A(r,e,o),s(e,l)},p(r,o){o&1&&n!==(n=r[0][4]+"")&&K(l,n)},d(r){r&&y(e)}}}function Je(t){let e;return{c(){e=a("p"),e.textContent="_",u(e,"class","number svelte-1rotq4q")},m(n,l){A(n,e,l)},p:j,d(n){n&&y(e)}}}function Qe(t){let e,n,l,r,o,f,_,b,c,w,C,p,d,m,L,I,M,z,G;function B(g,S){return g[0][0]==null?Ye:De}let $=B(t),h=$(t);function N(g,S){return g[0][1]==null?Fe:ze}let q=N(t),i=q(t);function v(g,S){return g[0][2]==null?Ke:He}let Y=v(t),P=Y(t);function ue(g,S){return g[0][3]==null?We:Ve}let ne=ue(t),T=ne(t);function ce(g,S){return g[0][4]==null?Je:Ge}let le=ce(t),D=le(t);return{c(){e=a("div"),n=a("div"),l=a("div"),h.c(),r=E(),o=a("div"),i.c(),f=E(),_=a("div"),P.c(),b=E(),c=a("div"),T.c(),w=E(),C=a("div"),D.c(),p=E(),d=a("div"),m=a("p"),L=F(t[1]),I=E(),M=a("div"),z=a("p"),G=F(t[2]),u(l,"class","numbercell svelte-1rotq4q"),u(o,"class","numbercell svelte-1rotq4q"),u(_,"class","numbercell svelte-1rotq4q"),u(c,"class","numbercell svelte-1rotq4q"),u(C,"class","numbercell svelte-1rotq4q"),u(n,"class","table-column svelte-1rotq4q"),u(n,"id","solucion"),u(m,"class","numbercell number svelte-1rotq4q"),u(d,"class","table-column svelte-1rotq4q"),u(d,"id","belongs"),u(z,"class","numbercell number svelte-1rotq4q"),u(M,"class","table-column svelte-1rotq4q"),u(M,"id","correct"),u(e,"class","container svelte-1rotq4q")},m(g,S){A(g,e,S),s(e,n),s(n,l),h.m(l,null),s(n,r),s(n,o),i.m(o,null),s(n,f),s(n,_),P.m(_,null),s(n,b),s(n,c),T.m(c,null),s(n,w),s(n,C),D.m(C,null),s(e,p),s(e,d),s(d,m),s(m,L),s(e,I),s(e,M),s(M,z),s(z,G)},p(g,[S]){$===($=B(g))&&h?h.p(g,S):(h.d(1),h=$(g),h&&(h.c(),h.m(l,null))),q===(q=N(g))&&i?i.p(g,S):(i.d(1),i=q(g),i&&(i.c(),i.m(o,null))),Y===(Y=v(g))&&P?P.p(g,S):(P.d(1),P=Y(g),P&&(P.c(),P.m(_,null))),ne===(ne=ue(g))&&T?T.p(g,S):(T.d(1),T=ne(g),T&&(T.c(),T.m(c,null))),le===(le=ce(g))&&D?D.p(g,S):(D.d(1),D=le(g),D&&(D.c(),D.m(C,null))),S&2&&K(L,g[1]),S&4&&K(G,g[2])},i:j,o:j,d(g){g&&y(e),h.d(),i.d(),P.d(),T.d(),D.d()}}}function Re(t,e,n){let{attemp:l=[]}=e,{contBelongs:r=0}=e,{contCorrect:o=0}=e;return t.$$set=f=>{"attemp"in f&&n(0,l=f.attemp),"contBelongs"in f&&n(1,r=f.contBelongs),"contCorrect"in f&&n(2,o=f.contCorrect)},[l,r,o]}class ee extends Ae{constructor(e){super(),Ee(this,e,Re,Qe,ye,{attemp:0,contBelongs:1,contCorrect:2})}}function Ue(t){let e,n,l,r,o,f,_;return{c(){e=a("div"),n=a("h1"),n.textContent="Sorry You Lost :(",l=E(),r=a("h2"),r.textContent="The code was:",o=E(),f=a("div"),_=a("h1"),_.textContent=`${t[5][0]+" "+t[5][1]+" "+t[5][2]+" "+t[5][3]+" "+t[5][4]}`,u(n,"id","lose"),u(f,"class","code-container svelte-14dxwk5"),u(e,"class","center-column menu svelte-14dxwk5"),u(e,"id","loseMenu")},m(b,c){A(b,e,c),s(e,n),s(e,l),s(e,r),s(e,o),s(e,f),s(f,_)},p:j,i:j,o:j,d(b){b&&y(e)}}}function Xe(t){let e,n,l,r,o,f,_,b,c,w,C,p,d,m,L,I,M,z,G;e=new ee({props:{attemp:t[0][0],contBelongs:t[1][0],contCorrect:t[2][0]}});let B=t[3]>=1&&be(t),$=t[3]>=2&&ve(t),h=t[3]>=3&&ge(t),N=t[3]>=4&&he(t),q=t[3]>=5&&ke(t);return{c(){x(e.$$.fragment),n=E(),B&&B.c(),l=E(),$&&$.c(),r=E(),h&&h.c(),o=E(),N&&N.c(),f=E(),q&&q.c(),_=E(),b=a("div"),c=a("form"),w=a("label"),w.textContent="Insert a number:",C=E(),p=a("input"),d=E(),m=a("button"),m.textContent="Submit",L=E(),I=a("p"),I.textContent="coded with 🤍 by Marco Díaz",u(w,"for","attemp"),u(w,"class","svelte-14dxwk5"),u(p,"id","attemp"),u(p,"maxlength","5"),u(p,"type","number"),u(p,"class","svelte-14dxwk5"),u(m,"id","sub"),u(m,"class","svelte-14dxwk5"),u(c,"class","center-column svelte-14dxwk5"),u(b,"class","input svelte-14dxwk5")},m(i,v){V(e,i,v),A(i,n,v),B&&B.m(i,v),A(i,l,v),$&&$.m(i,v),A(i,r,v),h&&h.m(i,v),A(i,o,v),N&&N.m(i,v),A(i,f,v),q&&q.m(i,v),A(i,_,v),A(i,b,v),s(b,c),s(c,w),s(c,C),s(c,p),me(p,t[0][t[3]]),s(c,d),s(c,m),s(b,L),s(b,I),M=!0,z||(G=[_e(p,"input",t[7]),_e(m,"click",Le(t[6]))],z=!0)},p(i,v){const Y={};v&1&&(Y.attemp=i[0][0]),v&2&&(Y.contBelongs=i[1][0]),v&4&&(Y.contCorrect=i[2][0]),e.$set(Y),i[3]>=1?B?(B.p(i,v),v&8&&k(B,1)):(B=be(i),B.c(),k(B,1),B.m(l.parentNode,l)):B&&(R(),O(B,1,1,()=>{B=null}),U()),i[3]>=2?$?($.p(i,v),v&8&&k($,1)):($=ve(i),$.c(),k($,1),$.m(r.parentNode,r)):$&&(R(),O($,1,1,()=>{$=null}),U()),i[3]>=3?h?(h.p(i,v),v&8&&k(h,1)):(h=ge(i),h.c(),k(h,1),h.m(o.parentNode,o)):h&&(R(),O(h,1,1,()=>{h=null}),U()),i[3]>=4?N?(N.p(i,v),v&8&&k(N,1)):(N=he(i),N.c(),k(N,1),N.m(f.parentNode,f)):N&&(R(),O(N,1,1,()=>{N=null}),U()),i[3]>=5?q?(q.p(i,v),v&8&&k(q,1)):(q=ke(i),q.c(),k(q,1),q.m(_.parentNode,_)):q&&(R(),O(q,1,1,()=>{q=null}),U()),v&9&&Be(p.value)!==i[0][i[3]]&&me(p,i[0][i[3]])},i(i){M||(k(e.$$.fragment,i),k(B),k($),k(h),k(N),k(q),M=!0)},o(i){O(e.$$.fragment,i),O(B),O($),O(h),O(N),O(q),M=!1},d(i){W(e,i),i&&y(n),B&&B.d(i),i&&y(l),$&&$.d(i),i&&y(r),h&&h.d(i),i&&y(o),N&&N.d(i),i&&y(f),q&&q.d(i),i&&y(_),i&&y(b),z=!1,Z(G)}}}function be(t){let e,n;return e=new ee({props:{attemp:t[0][1],contBelongs:t[1][1],contCorrect:t[2][1]}}),{c(){x(e.$$.fragment)},m(l,r){V(e,l,r),n=!0},p(l,r){const o={};r&1&&(o.attemp=l[0][1]),r&2&&(o.contBelongs=l[1][1]),r&4&&(o.contCorrect=l[2][1]),e.$set(o)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){O(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function ve(t){let e,n;return e=new ee({props:{attemp:t[0][2],contBelongs:t[1][2],contCorrect:t[2][2]}}),{c(){x(e.$$.fragment)},m(l,r){V(e,l,r),n=!0},p(l,r){const o={};r&1&&(o.attemp=l[0][2]),r&2&&(o.contBelongs=l[1][2]),r&4&&(o.contCorrect=l[2][2]),e.$set(o)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){O(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function ge(t){let e,n;return e=new ee({props:{attemp:t[0][3],contBelongs:t[1][3],contCorrect:t[2][3]}}),{c(){x(e.$$.fragment)},m(l,r){V(e,l,r),n=!0},p(l,r){const o={};r&1&&(o.attemp=l[0][3]),r&2&&(o.contBelongs=l[1][3]),r&4&&(o.contCorrect=l[2][3]),e.$set(o)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){O(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function he(t){let e,n;return e=new ee({props:{attemp:t[0][4],contBelongs:t[1][4],contCorrect:t[2][4]}}),{c(){x(e.$$.fragment)},m(l,r){V(e,l,r),n=!0},p(l,r){const o={};r&1&&(o.attemp=l[0][4]),r&2&&(o.contBelongs=l[1][4]),r&4&&(o.contCorrect=l[2][4]),e.$set(o)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){O(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function ke(t){let e,n;return e=new ee({props:{attemp:t[0][5],contBelongs:t[1][5],contCorrect:t[2][5]}}),{c(){x(e.$$.fragment)},m(l,r){V(e,l,r),n=!0},p(l,r){const o={};r&1&&(o.attemp=l[0][5]),r&2&&(o.contBelongs=l[1][5]),r&4&&(o.contCorrect=l[2][5]),e.$set(o)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){O(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function $e(t){let e,n,l,r,o,f,_;return{c(){e=a("div"),n=a("h1"),n.textContent="Congratulations You Won!",l=E(),r=a("h2"),r.textContent="The code was:",o=E(),f=a("div"),_=a("h1"),_.textContent=`${t[5][0]+" "+t[5][1]+" "+t[5][2]+" "+t[5][3]+" "+t[5][4]}`,u(n,"id","congratulations"),u(n,"class","svelte-14dxwk5"),u(f,"class","code-container svelte-14dxwk5"),u(e,"class","center-column menu svelte-14dxwk5"),u(e,"id","winMenu")},m(b,c){A(b,e,c),s(e,n),s(e,l),s(e,r),s(e,o),s(e,f),s(f,_)},p:j,d(b){b&&y(e)}}}function Ze(t){let e,n,l,r,o,f,_,b;const c=[Xe,Ue],w=[];function C(d,m){return!d[4]&&d[3]<6?0:!d[4]&&d[3]>=5?1:-1}~(o=C(t))&&(f=w[o]=c[o](t));let p=t[4]&&$e(t);return{c(){e=a("main"),n=a("div"),n.innerHTML='<h1 id="title" class="svelte-14dxwk5">Enigma</h1>',l=E(),r=a("div"),f&&f.c(),_=E(),p&&p.c(),u(n,"id","titleContainer"),u(n,"class","svelte-14dxwk5"),u(r,"class","gameScreen center-column svelte-14dxwk5"),u(e,"class","svelte-14dxwk5")},m(d,m){A(d,e,m),s(e,n),s(e,l),s(e,r),~o&&w[o].m(r,null),s(r,_),p&&p.m(r,null),b=!0},p(d,[m]){let L=o;o=C(d),o===L?~o&&w[o].p(d,m):(f&&(R(),O(w[L],1,1,()=>{w[L]=null}),U()),~o?(f=w[o],f?f.p(d,m):(f=w[o]=c[o](d),f.c()),k(f,1),f.m(r,_)):f=null),d[4]?p?p.p(d,m):(p=$e(d),p.c(),p.m(r,null)):p&&(p.d(1),p=null)},i(d){b||(k(f),b=!0)},o(d){O(f),b=!1},d(d){d&&y(e),~o&&w[o].d(),p&&p.d()}}}function qe(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function xe(t,e){for(let n=0;n<e.length;n++)if(t==e[n])return!0;return!1}function et(t,e,n){const l=[];let r=[],o=[],f=[],_=0,b=!1;function c(){for(let m=0;m<6;m++)n(0,r[m]=[],r),n(1,o[m]=0,o),n(2,f[m]=0,f)}function w(){let m=qe(0,9);for(let L=0;L<5;L++){for(;xe(m,l);)m=qe(0,9);l.push(m)}}function C(){n(4,b=f[_]==5)}function p(){let m=[].concat(l),L=!1;for(let I=0;I<5;I++){L=!1,r[_][I]==l[I]&&n(2,f[_]++,f);for(let M=0;M<5&&!L;M++)r[_][I]==m[M]&&(n(1,o[_]++,o),m[M]=-1,L=!0)}C(),n(3,_++,_)}c(),w();function d(){r[_]=Be(this.value),n(0,r)}return[r,o,f,_,b,l,p,d]}class tt extends Ae{constructor(e){super(),Ee(this,e,et,Ze,ye,{})}}new tt({target:document.getElementById("app")});
