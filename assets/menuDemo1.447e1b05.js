import{_ as f,f as v,I as d,r as s,o as m,c as O,a as t,w as e,d as n}from"./app.8cb14a04.js";const k=v({setup(){const a=d(["1"]),l=d(["sub1"]);return{selectedKeys:a,openKeys:l}}}),K=n(" Navigation One "),h=n(" Navigation Two "),M=n("Navigation Three"),b=n("Option 3"),g=n("Option 4"),N=n("Option 5"),Z=n("Option 6"),C=n("Navigation Four"),S=n("Option 7"),$=n("Option 8"),w=n("Option 9"),I=n("Option 10");function T(a,l,A,B,D,U){const u=s("MailOutlined"),o=s("ZMenuItem"),c=s("CalendarOutlined"),p=s("AppstoreOutlined"),i=s("ZSubMenu"),r=s("SettingOutlined"),y=s("ZMenu");return m(),O("div",null,[t(y,{openKeys:a.openKeys,"onUpdate:openKeys":l[0]||(l[0]=_=>a.openKeys=_),selectedKeys:a.selectedKeys,"onUpdate:selectedKeys":l[1]||(l[1]=_=>a.selectedKeys=_)},{default:e(()=>[t(o,{"key-val":"1"},{icon:e(()=>[t(u)]),default:e(()=>[K]),_:1}),t(o,{"key-val":"2"},{icon:e(()=>[t(c)]),default:e(()=>[h]),_:1}),t(i,{"key-val":"sub1"},{icon:e(()=>[t(p)]),title:e(()=>[M]),default:e(()=>[t(o,{"key-val":"3"},{default:e(()=>[b]),_:1}),t(o,{"key-val":"4"},{default:e(()=>[g]),_:1}),t(i,{"key-val":"sub1-2",title:"Submenu"},{default:e(()=>[t(o,{"key-val":"5"},{default:e(()=>[N]),_:1}),t(o,{"key-val":"6"},{default:e(()=>[Z]),_:1})]),_:1})]),_:1}),t(i,{"key-val":"sub2"},{icon:e(()=>[t(r)]),title:e(()=>[C]),default:e(()=>[t(o,{"key-val":"7"},{default:e(()=>[S]),_:1}),t(o,{"key-val":"8"},{default:e(()=>[$]),_:1}),t(o,{"key-val":"9"},{default:e(()=>[w]),_:1}),t(o,{"key-val":"10"},{default:e(()=>[I]),_:1})]),_:1})]),_:1},8,["openKeys","selectedKeys"])])}var x=f(k,[["render",T],["__file","menuDemo1.vue"]]);export{x as default};
