import{m as f,r as l,aY as P,j as t,aB as h,t as j,aZ as B,a5 as E,aC as H,a_ as k,az as C,ao as I,a$ as b,ax as y}from"./sanity-c06cf1d4.js";const R=f(y)`
  position: relative;
`;function S(s){const{children:o}=s,{collapsed:n}=B();return t.jsx(R,{hidden:n,height:"fill",overflow:"auto",children:o})}function T(s){const{actionHandlers:o,index:n,menuItems:e,menuItemGroups:r,title:i}=s,{features:a}=E();return!(e!=null&&e.length)&&!i?null:t.jsx(H,{actions:t.jsx(k,{menuItems:e,menuItemGroups:r,actionHandlers:o}),backButton:a.backButton&&n>0&&t.jsx(C,{as:I,"data-as":"a",icon:b,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function v(s){const{index:o,pane:n,paneKey:e,...r}=s,{child:i,component:a,menuItems:d,menuItemGroups:u,type:U,...p}=n,[c,m]=l.useState(null),{title:x=""}=P(n);return t.jsxs(h,{id:e,minWidth:320,selected:r.isSelected,children:[t.jsx(T,{actionHandlers:c==null?void 0:c.actionHandlers,index:o,menuItems:d,menuItemGroups:u,title:x}),t.jsxs(S,{children:[j.isValidElementType(a)&&l.createElement(a,{...r,...p,ref:m,child:i,paneKey:e}),l.isValidElement(a)&&a]})]})}export{v as default};
