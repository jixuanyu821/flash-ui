import{_ as c,f as i,I as n,r as m,o as p,q as N}from"./app.e8f792de.js";const f=i({name:"TreeDemo3",setup(){const e=n([{name:"parent 1",key:"0-0",children:[{name:"parent 1-0",key:"0-0-0",children:[{name:"leaf",key:"0-0-0-0"},{name:"leaf",key:"0-0-0-1"}]},{name:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",name:"sss"}]}]}]),t=n([{name:"parent 1",key:"0-0",children:[{name:"parent 1-0",key:"0-0-0",children:[{name:"leaf",key:"0-0-0-0"},{name:"leaf",key:"0-0-0-1"}]},{name:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",name:"sss"}]}]}]),d=n({title:"name"});return{treeData:e,treeData1:t,fieldNames:d,addNode:o=>{console.log("addNode",o)},editNode:o=>{console.log("editNode",o)},deleteNode:o=>{console.log("deleteNode",o)},complateEdit:o=>{console.log("complateEdit",o)},cancleEdit:o=>{console.log("cancleEdit",o)}}}});function E(e,t,d,l,s,r){const a=m("z-tree");return p(),N(a,{"tree-data":e.treeData,"field-names":e.fieldNames,isAdd:"",isDelete:"",isEdit:"",onAddNode:e.addNode,onEditNode:e.editNode,onDeleteNode:e.deleteNode,onComplateEdit:e.complateEdit,onCancleEdit:e.cancleEdit},null,8,["tree-data","field-names","onAddNode","onEditNode","onDeleteNode","onComplateEdit","onCancleEdit"])}var D=c(f,[["render",E],["__file","treeDemo3.vue"]]);export{D as default};
