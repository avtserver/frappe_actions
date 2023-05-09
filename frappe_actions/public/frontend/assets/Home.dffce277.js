import{h as A,i as y,j as C,k as U,b as d,l as a,d as s,w as n,u as t,C as N,D as j,F as x,m as V,r as g,o as r,n as f,t as v,I as u}from"./vendor.fdccbc32.js";const L={class:"mx-20 my-4"},B={class:"flex flex-row items-center justify-between"},T=a("h2",{class:"text-5xl font-black text-gray-900"},"Lists",-1),S=f("New List"),$={class:"mt-2"},F=f("New Action"),G={class:"space-y-2"},I={class:"mx-20 my-4"},q={class:"flex flex-row items-center justify-between"},E=a("h2",{class:"text-5xl font-black text-gray-900"},"Users",-1),O=f("New List"),J={setup(R){const o=A({title:"",category:"General"}),b=y({doctype:"User",fields:["name","first_name"],limit:100});b.reload();const _=C(!1),i=y({doctype:"Action",fields:["name","title","status","description","date","due_date"],filters:{status:"ToDo"},limit:100});i.reload();const c=y({doctype:"Category",fields:["name"],transform(m){return m.map(l=>l.name)},cache:"actions"});c.reload();const w=U(()=>c.list.loading||!c.data?[]:c.data),k=m=>{i.setValue.submit({name:m,status:"Completed",onSuccess(){i.reload()}})},D=()=>{console.log(o),i.insert.submit(o)};return(m,l)=>{const p=g("Button"),h=g("router-link");return r(),d(x,null,[a("div",L,[a("div",B,[T,s(p,{"icon-left":"plus"},{default:n(()=>[S]),_:1})]),a("div",$,[s(t(N),{class:"bg-gradient-to-r from-purple-200 via-purple-400 to-purple-700",title:"General"},{default:n(()=>[a("div",null,[a("ul",null,[(r(!0),d(x,null,V(t(i).data,e=>(r(),d("li",{class:"flex flex-row space-y-2 items-center justify-between",key:e.title},[s(h,{to:`/actions/${e.name}`},{default:n(()=>[f(v(e.title),1)]),_:2},1032,["to"]),s(p,{onClick:z=>k(e.name),icon:"check"},null,8,["onClick"])]))),128))]),s(p,{class:"h-10 w-auto bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white",onClick:l[0]||(l[0]=e=>_.value=!0),"icon-left":"plus"},{default:n(()=>[F]),_:1})])]),_:1})]),s(t(j),{options:{title:"Add New Action",actions:[{label:"Add Action",appearance:"primary",handler:({close:e})=>{D(),e()}},{label:"Cancel"}]},modelValue:_.value,"onUpdate:modelValue":l[6]||(l[6]=e=>_.value=e)},{"body-content":n(()=>[a("div",G,[s(t(u),{modelValue:t(o).title,"onUpdate:modelValue":l[1]||(l[1]=e=>t(o).title=e),type:"text",required:"",placeholder:"Action Title",label:"Title"},null,8,["modelValue"]),s(t(u),{modelValue:t(o).category,"onUpdate:modelValue":l[2]||(l[2]=e=>t(o).category=e),label:"List",type:"select",options:t(w)},null,8,["modelValue","options"]),s(t(u),{modelValue:t(o).date,"onUpdate:modelValue":l[3]||(l[3]=e=>t(o).date=e),type:"date",placeholder:"Date",label:"Date"},null,8,["modelValue"]),s(t(u),{modelValue:t(o).due_date,"onUpdate:modelValue":l[4]||(l[4]=e=>t(o).due_date=e),type:"date",placeholder:"Due Date",label:"Due Date"},null,8,["modelValue"]),s(t(u),{modelValue:t(o).description,"onUpdate:modelValue":l[5]||(l[5]=e=>t(o).description=e),type:"textarea",placeholder:"Description",label:"Description"},null,8,["modelValue"])])]),_:1},8,["options","modelValue"])]),a("div",I,[a("div",q,[E,s(p,{"icon-left":"plus"},{default:n(()=>[O]),_:1})]),a("div",null,[a("ul",null,[(r(!0),d(x,null,V(t(b).data,e=>(r(),d("li",{class:"flex flex-row space-y-2 items-center justify-between",key:e.first_name},v(e.first_name),1))),128))])])])],64)}}};export{J as default};
