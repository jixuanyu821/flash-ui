import{_ as n,f as o,I as a,r as s,o as p,q as u}from"./app.e8f792de.js";const c=o({name:"TreeSelectDemo1",setup(){const e=a(""),t=a([{title:"parent 1",value:"parent 1",children:[{title:"parent 1-0",value:"parent 1-0",children:[{title:"my leaf",value:"leaf1"},{title:"your leaf",value:"leaf2"}]},{title:"parent 1-1",value:"parent 1-1"}]}]);return{value:e,treeData:t}}});function f(e,t,i,v,d,m){const l=s("z-tree-select");return p(),u(l,{value:e.value,"onUpdate:value":t[0]||(t[0]=r=>e.value=r),style:{width:"200px"},"tree-data":e.treeData,"tree-default-expand-all":""},null,8,["value","tree-data"])}var D=n(c,[["render",f],["__file","treeSelectDemo1.vue"]]);export{D as default};
