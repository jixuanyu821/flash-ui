import{_ as p,f as i,I as t,a2 as m,J as l,r as n,o as c,q as v,w as f,a as r}from"./app.e8f792de.js";const d=i({setup(){const e=t(m("08:00:00","HH:mm:ss")),a=t("09:00:00");return l(e,()=>{console.log(e.value)}),l(a,()=>{console.log(a.value)}),{value:e,strValue:a}}});function _(e,a,k,H,V,$){const s=n("z-time-picker"),u=n("a-space");return c(),v(u,{direction:"vertical"},{default:f(()=>[r(s,{value:e.value,"onUpdate:value":a[0]||(a[0]=o=>e.value=o)},null,8,["value"]),r(s,{value:e.strValue,"onUpdate:value":a[1]||(a[1]=o=>e.strValue=o),"value-format":"HH:mm:ss"},null,8,["value"])]),_:1})}var C=p(d,[["render",_],["__file","timePickerDemo1.vue"]]);export{C as default};
