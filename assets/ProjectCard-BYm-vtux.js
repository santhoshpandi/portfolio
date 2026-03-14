import{a as m,j as e,c as d}from"./index-DL4XKKax.js";import{a as b}from"./index-DfNDtRQO.js";import{I as u}from"./index-CbsVOn7d.js";import{G as f}from"./iconBase-BJ8RxY3x.js";function j(t){return f({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(t)}function N({project:t}){const x=m(),{id:g,title:s,image:n,sourceCodeLink:a,previewLink:i,technologies:o,completedAt:l}=t;let h=n&&n!==""?"/portfolio/assets/project_images/"+n:d;const c=l?new Date(l).toLocaleDateString("en-US",{month:"short",year:"numeric"}):null;return e.jsxs("div",{onClick:()=>x(`/projects/${g}`),className:`\r
      group cursor-pointer\r
      flex flex-col\r
      rounded-xl\r
      overflow-hidden relative\r
      border border-green-500/20\r
      bg-slate-900/70\r
      backdrop-blur\r
      transition duration-300\r
      hover:scale-[1.03]\r
      hover:border-green-400\r
      hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]\r
      `,children:[e.jsx("div",{className:"overflow-hidden",children:e.jsx("img",{src:h,alt:s,onError:r=>{r.target.src=d},className:"w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"})}),e.jsxs("div",{className:"flex flex-col flex-grow p-4 justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold text-green-400 mb-2",children:s}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[o.slice(0,5).map((r,p)=>e.jsx("span",{className:"text-xs px-2 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-300",children:r},p)),o.length>5&&e.jsxs("span",{className:"text-xs px-2 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-300",children:["+",o.length-5]})]})]}),e.jsxs("div",{className:"flex gap-4 text-xl text-white",onClick:r=>r.stopPropagation(),children:[a&&e.jsx("a",{href:a,target:"_blank",className:"hover:text-purple-400 transition",children:e.jsx(b,{})}),i&&e.jsx("a",{href:i,target:"_blank",className:"hover:text-pink-400 transition",children:e.jsx(u,{})})]})]}),c&&e.jsxs("span",{className:`\r
    absolute bottom-3 right-3\r
    flex items-center gap-1\r
    text-xs md:text-sm\r
    px-3 py-1\r
    rounded-full\r
    bg-green-500/10\r
    border border-green-400/40\r
    text-green-300\r
    backdrop-blur-md\r
    shadow-[0_0_10px_rgba(34,197,94,0.35)]\r
  `,children:[e.jsx(j,{size:12}),c]})]})}export{N as P};
