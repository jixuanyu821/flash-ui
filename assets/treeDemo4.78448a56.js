import{_ as D,f as u,I as r,r as i,o as k,c as C,a,w as c,a5 as _,d as b}from"./app.e8f792de.js";const g=u({name:"TreeDemo4",setup(){const e=r([{name:"parent 1",key:"0-0",children:[{name:"parent 1-0",key:"0-0-0",children:[{name:"leaf",key:"0-0-0-0"},{name:"leaf",key:"0-0-0-1"}]},{name:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",name:"sss"}]}]}]),l=r({title:"name"});return{treeData:e,fieldNames:l,beforeDeleteNode:(o,t)=>(console.log(o,t,"\u8282\u70B9 beforeDeleteNode"),new Promise((d,E)=>{_.confirm({title:"Confirm",content:"\u786E\u8BA4\u5220\u9664\u5F53\u524D\u8282\u70B9\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>{console.log("\u70B9\u51FB\u786E\u8BA4"),d()}})})),addNode:o=>{console.log("addNode",o)},editNode:(o,t,d)=>{console.log("editNode",o,t,d)},deleteNode:o=>{console.log("deleteNode",o)},complateEdit:o=>{console.log("complateEdit",o)},cancleEdit:o=>{console.log("cancleEdit",o)}}}}),h=b("\u7F16\u8F91");function y(e,l,m,N,f,p){const s=i("z-button"),n=i("z-tree");return k(),C("div",null,[a(n,{"tree-data":e.treeData,"field-names":e.fieldNames},{operateIcon:c(({node:o,parentKey:t,key:d})=>[a(s,{onClick:E=>e.editNode(o,t,d)},{default:c(()=>[h]),_:2},1032,["onClick"])]),_:1},8,["tree-data","field-names"]),a(n,{"tree-data":e.treeData,"field-names":e.fieldNames,isAdd:"",isDelete:"",isEdit:"",beforeDeleteNode:e.beforeDeleteNode,onAddNode:e.addNode,onEditNode:e.editNode,onDeleteNode:e.deleteNode,onComplateEdit:e.complateEdit,onCancleEdit:e.cancleEdit},null,8,["tree-data","field-names","beforeDeleteNode","onAddNode","onEditNode","onDeleteNode","onComplateEdit","onCancleEdit"])])}var $=D(g,[["render",y],["__file","treeDemo4.vue"]]);export{$ as default};
