import{_ as s,f as t,r,o as d,q as l}from"./app.8cb14a04.js";const m=t({setup(){return{data:[{key:"1",name:"John Brown",money:"\uFFE5300,000.00",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",money:"\uFFE51,256,000.00",address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",money:"\uFFE5120,000.00",address:"Sidney No. 1 Lake Park"}],columns:[{title:"Name",dataIndex:"name"},{title:"Cash Assets",className:"column-money",dataIndex:"money"},{title:"Address",dataIndex:"address"}]}}});function c(e,a,u,_,p,i){const o=r("ZTable");return d(),l(o,{"data-source":e.data,columns:e.columns,"row-class-name":(k,n)=>n%2==1?"table-striped":null},null,8,["data-source","columns","row-class-name"])}var f=s(m,[["render",c],["__file","tableDemo3.vue"]]);export{f as default};