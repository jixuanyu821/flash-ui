import{_ as i,f as c,I as s,r as d,o as h,q as p}from"./app.8cb14a04.js";const v=c({name:"CascaderDemo3",setup(){const e=s([]),a=s([{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"},{value:"disabled",label:"disabled",disabled:!0}]}]}]);return{value:e,options:a,showSearch:(o,n)=>n.some(l=>l.label.toLowerCase().indexOf(o.toLowerCase())>-1)}}});function f(e,a,r,o,n,l){const u=d("z-cascader");return h(),p(u,{value:e.value,"onUpdate:value":a[0]||(a[0]=t=>e.value=t),filter:{showSearch:e.showSearch},options:e.options,placeholder:"\u8BF7\u9009\u62E9"},null,8,["value","filter","options"])}var b=i(v,[["render",f],["__file","cascaderDemo3.vue"]]);export{b as default};
