import{_ as o,f as s,I as d,r as l,o as r,c as i,a as u}from"./app.8cb14a04.js";const c=s({setup(){const e=d([{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1",width:150},{title:"Column 2",dataIndex:"address",key:"2",width:150},{title:"Column 3",dataIndex:"address",key:"3",width:150},{title:"Column 4",dataIndex:"address",key:"4",width:150},{title:"Column 5",dataIndex:"address",key:"5",width:150},{title:"Column 6",dataIndex:"address",key:"6",width:150},{title:"Column 7",dataIndex:"address",key:"7",width:150},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Action",key:"operation",fixed:"right",width:100}]),a=d([]);for(let t=0;t<10;t++)a.value.push({key:t,name:"Edrward",age:32,address:"London"});return{dataSource1:a,columns1:e}}});function m(e,a,t,f,x,k){const n=l("ZTable");return r(),i("div",null,[u(n,{"data-source":e.dataSource1,columns:e.columns1,scroll:{x:1500,y:300}},null,8,["data-source","columns"])])}var h=o(c,[["render",m],["__file","tableDemo4.vue"]]);export{h as default};
