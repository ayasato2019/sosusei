import{j as f,r as e}from"./app-B9dnpo4u.js";function x({message:t,className:n="",...s}){return t?f.jsx("p",{...s,className:"text-xs text-red-600"+n,children:t}):null}const d=e.forwardRef(function({type:n="text",className:s="",isFocused:u=!1,...c},a){const o=e.useRef(null);return e.useImperativeHandle(a,()=>({focus:()=>{var r;return(r=o.current)==null?void 0:r.focus()}})),e.useEffect(()=>{var r;u&&((r=o.current)==null||r.focus())},[u]),f.jsx("input",{...c,type:n,className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "+s,ref:o})});export{x as I,d as T};