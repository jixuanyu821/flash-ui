import{_ as c,f as C,I as l,r as i,o as h,q as p}from"./app.e8f792de.js";const f=C({name:"DatePickerDemo6",setup(){const e=l(),o=l(),n=l();return{dates:e,value:o,hackValue:n,disabledDate:a=>{if(!e.value||e.value.length===0)return!1;const u=e.value[0]&&a.diff(e.value[0],"days")>7;return e.value[1]&&e.value[1].diff(a,"days")>7||u},onOpenChange:a=>{a?(e.value=[],n.value=[]):n.value=void 0},onChange:a=>{o.value=a},onCalendarChange:a=>{e.value=a}}}});function g(e,o,n,t,r,d){const s=i("z-range-picker");return h(),p(s,{value:e.hackValue||e.value,"disabled-date":e.disabledDate,onChange:e.onChange,onOpenChange:e.onOpenChange,onCalendarChange:e.onCalendarChange},null,8,["value","disabled-date","onChange","onOpenChange","onCalendarChange"])}var k=c(f,[["render",g],["__file","datePickerDemo6.vue"]]);export{k as default};
