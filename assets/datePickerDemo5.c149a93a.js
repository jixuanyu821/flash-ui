import{_ as g,f as p,r as a,o as d,q as k,w as _,a as t}from"./app.e8f792de.js";const h=p({name:"DatePickerDemo5",setup(){return{onChange:(e,n)=>{console.log("Selected Time: ",e),console.log("Formatted Selected Time: ",n)},onOk:e=>{console.log("onOk: ",e)},onRangeChange:(e,n)=>{console.log("Selected Time: ",e),console.log("Formatted Selected Time: ",n)},onRangeOk:e=>{console.log("onOk: ",e)}}}});function C(o,c,s,r,e,n){const l=a("z-date-picker"),m=a("z-range-picker"),i=a("a-space");return d(),k(i,{direction:"vertical",size:12,style:{width:"400px"}},{default:_(()=>[t(l,{"show-time":"",placeholder:"\u9009\u62E9\u65F6\u95F4",onChange:o.onChange,onOk:o.onOk},null,8,["onChange","onOk"]),t(m,{"show-time":{format:"HH:mm"},format:"YYYY-MM-DD HH:mm",placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],onChange:o.onRangeChange,onOk:o.onRangeOk},null,8,["onChange","onOk"])]),_:1})}var O=g(h,[["render",C],["__file","datePickerDemo5.vue"]]);export{O as default};
