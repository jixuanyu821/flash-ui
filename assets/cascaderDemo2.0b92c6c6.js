import{_ as s,f as u,I as n,r,o as i,q as t}from"./app.8cb14a04.js";const c=u({name:"CascaderDemo2",setup(){const e=n([]),a=n([{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"},{value:"disabled",label:"disabled",disabled:!0}]}]}]);return{value:e,options:a}}});function d(e,a,p,v,h,m){const l=r("z-cascader");return i(),t(l,{value:e.value,"onUpdate:value":a[0]||(a[0]=o=>e.value=o),multiple:"",options:e.options,placeholder:"\u8BF7\u9009\u62E9"},null,8,["value","options"])}var f=s(c,[["render",d],["__file","cascaderDemo2.vue"]]);export{f as default};
