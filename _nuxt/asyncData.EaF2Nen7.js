import{S as P,r as d,U as w,V as x,W as b,a as m,C as O,k as B,X as k,B as M,O as E}from"./entry.e0JREZT-.js";const H=i=>i==="defer"||i===!1;function A(...i){var h;const u=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(u);let[a,l,e={}]=i;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=B(),D=l,v=()=>null,_=()=>t.isHydrating?t.payload.data[a]:t.static.data[a];e.server=e.server??!0,e.default=e.default??v,e.getCachedData=e.getCachedData??_,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??P.deep,e.dedupe=e.dedupe??"cancel";const f=()=>![null,void 0].includes(e.getCachedData(a));if(!t._asyncData[a]||!e.immediate){(h=t.payload._errors)[a]??(h[a]=null);const r=e.deep?d:w;t._asyncData[a]={data:r(e.getCachedData(a)??e.default()),pending:d(!f()),error:x(t.payload._errors,a),status:d("idle")}}const s={...t._asyncData[a]};s.refresh=s.execute=(r={})=>{if(t._asyncDataPromises[a]){if(H(r.dedupe??e.dedupe))return t._asyncDataPromises[a];t._asyncDataPromises[a].cancelled=!0}if((r._initial||t.isHydrating&&r._initial!==!1)&&f())return Promise.resolve(e.getCachedData(a));s.pending.value=!0,s.status.value="pending";const c=new Promise((n,o)=>{try{n(D(t))}catch(C){o(C)}}).then(n=>{if(c.cancelled)return t._asyncDataPromises[a];let o=n;e.transform&&(o=e.transform(n)),e.pick&&(o=R(o,e.pick)),t.payload.data[a]=o,s.data.value=o,s.error.value=null,s.status.value="success"}).catch(n=>{if(c.cancelled)return t._asyncDataPromises[a];s.error.value=k(n),s.data.value=M(e.default()),s.status.value="error"}).finally(()=>{c.cancelled||(s.pending.value=!1,delete t._asyncDataPromises[a])});return t._asyncDataPromises[a]=c,t._asyncDataPromises[a]};const y=()=>s.refresh({_initial:!0}),g=e.server!==!1&&t.payload.serverRendered;{const r=E();if(r&&!r._nuxtOnBeforeMountCbs){r._nuxtOnBeforeMountCbs=[];const n=r._nuxtOnBeforeMountCbs;r&&(b(()=>{n.forEach(o=>{o()}),n.splice(0,n.length)}),m(()=>n.splice(0,n.length)))}g&&t.isHydrating&&(s.error.value||f())?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):r&&(t.payload.serverRendered&&t.isHydrating||e.lazy)&&e.immediate?r._nuxtOnBeforeMountCbs.push(y):e.immediate&&y(),e.watch&&O(e.watch,()=>s.refresh());const c=t.hook("app:data:refresh",async n=>{(!n||n.includes(a))&&await s.refresh()});r&&m(c)}const p=Promise.resolve(t._asyncDataPromises[a]).then(()=>s);return Object.assign(p,s),p}function R(i,u){const a={};for(const l of u)a[l]=i[l];return a}export{A as u};
