import{_ as l,f as i,I as s,r as k,o as h,c as p,a,w as n,F as b,d as r,b as f}from"./app.e8f792de.js";const m=i({name:"checkboxDemo3",setup(){const e=s(!1),c=s(!0),d=s(!0);return{check1:e,check2:c,disabled:d}}}),u=r("\u672A\u9009\u4E2D"),_=f("div",{style:{margin:"5px 0"}},null,-1),x=r("\u9009\u4E2D");function v(e,c,d,$,B,C){const t=k("z-checkbox");return h(),p(b,null,[a(t,{checked:e.check1,"onUpdate:checked":c[0]||(c[0]=o=>e.check1=o),disabled:e.disabled},{default:n(()=>[u]),_:1},8,["checked","disabled"]),_,a(t,{checked:e.check2,"onUpdate:checked":c[1]||(c[1]=o=>e.check2=o),disabled:e.disabled},{default:n(()=>[x]),_:1},8,["checked","disabled"])],64)}var N=l(m,[["render",v],["__file","checkboxDemo3.vue"]]);export{N as default};