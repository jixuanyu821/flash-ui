import{_,f as F,a1 as b,r as a,o as h,q as w,w as s,a as o,d as l}from"./app.8cb14a04.js";const z=F({setup(){return{formState:b({username:"",password:"",remember:!0}),onFinish:r=>{console.log("Success:",r)},onFinishFailed:r=>{console.log("Failed:",r)}}}}),S=l("Remember me"),v=l("Submit");function k(e,n,i,r,y,g){const u=a("z-input"),m=a("z-form-item"),p=a("z-password"),d=a("z-checkbox"),f=a("z-button"),c=a("z-form");return h(),w(c,{model:e.formState,name:"basic","label-col":{span:8},"wrapper-col":{span:16},autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:s(()=>[o(m,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:s(()=>[o(u,{value:e.formState.username,"onUpdate:value":n[0]||(n[0]=t=>e.formState.username=t)},null,8,["value"])]),_:1}),o(m,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:s(()=>[o(p,{value:e.formState.password,"onUpdate:value":n[1]||(n[1]=t=>e.formState.password=t)},null,8,["value"])]),_:1}),o(m,{name:"remember","wrapper-col":{offset:8,span:16}},{default:s(()=>[o(d,{checked:e.formState.remember,"onUpdate:checked":n[2]||(n[2]=t=>e.formState.remember=t)},{default:s(()=>[S]),_:1},8,["checked"])]),_:1}),o(m,{"wrapper-col":{offset:8,span:16}},{default:s(()=>[o(f,{type:"primary","html-type":"submit"},{default:s(()=>[v]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])}var $=_(z,[["render",k],["__file","formDemo1.vue"]]);export{$ as default};
