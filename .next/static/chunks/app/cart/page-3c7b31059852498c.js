(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{9987:function(e,t,a){Promise.resolve().then(a.bind(a,5315))},2449:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});let s=(0,a(9205).Z)("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]])},3145:function(e,t,a){"use strict";a.d(t,{default:function(){return r.a}});var s=a(8461),r=a.n(s)},7648:function(e,t,a){"use strict";a.d(t,{default:function(){return r.a}});var s=a(2972),r=a.n(s)},8461:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return c},getImageProps:function(){return l}});let s=a(7043),r=a(5346),i=a(5878),n=s._(a(5084));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let c=i.Image},5315:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var s=a(7437),r=a(6059),i=a(3145),n=a(9205);let l=(0,n.Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),c=(0,n.Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),d=(0,n.Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function o(e){let{item:t,removeItem:a,updateQuantity:r}=e;return(0,s.jsxs)("div",{className:"flex items-start border-b border-gray-200 py-6 px-4 last:border-b-0",children:[(0,s.jsx)("div",{className:"relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100",children:(0,s.jsx)(i.default,{src:t.image,alt:t.title,fill:!0,className:"object-cover"})}),(0,s.jsxs)("div",{className:"ml-4 flex-grow",children:[(0,s.jsx)("h3",{className:"font-medium",children:t.title}),t.size&&(0,s.jsxs)("p",{className:"text-sm text-gray-500",children:["Size: ",t.size]}),t.color&&(0,s.jsxs)("p",{className:"text-sm text-gray-500",children:["Color: ",t.color]}),(0,s.jsxs)("div",{className:"mt-2 flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center border border-gray-300 rounded-md",children:[(0,s.jsx)("button",{className:"px-2 py-1",onClick:()=>r(t.id,Math.max(1,t.quantity-1)),"aria-label":"Decrease quantity",children:(0,s.jsx)(l,{className:"h-3 w-3"})}),(0,s.jsx)("span",{className:"px-2 py-1 min-w-[30px] text-center",children:t.quantity}),(0,s.jsx)("button",{className:"px-2 py-1",onClick:()=>r(t.id,t.quantity+1),"aria-label":"Increase quantity",children:(0,s.jsx)(c,{className:"h-3 w-3"})})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)("span",{className:"font-medium",children:["$",(t.price*t.quantity).toFixed(2)]}),(0,s.jsx)("button",{className:"ml-4 text-gray-500 hover:text-red-500",onClick:()=>a(t.id),"aria-label":"Remove item",children:(0,s.jsx)(d,{className:"h-5 w-5"})})]})]})]})]})}var u=a(7648),m=a(521),x=a(2449);function h(){let{cart:e,removeFromCart:t,updateQuantity:a,cartTotal:i}=(0,r.j)();return e.length?(0,s.jsxs)("div",{className:"container-custom py-12",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold mb-8",children:"Your Cart"}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[(0,s.jsx)(m.E.div,{className:"flex-grow",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,s.jsx)("div",{className:"bg-white rounded-lg shadow-sm",children:e.map(e=>(0,s.jsx)(o,{item:e,removeItem:t,updateQuantity:a},e.id))})}),(0,s.jsx)(m.E.div,{className:"w-full lg:w-1/3",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.2},children:(0,s.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Order Summary"}),(0,s.jsxs)("div",{className:"space-y-3 mb-6",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Subtotal"}),(0,s.jsxs)("span",{children:["$",i.toFixed(2)]})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"text-gray-600",children:"Shipping"}),(0,s.jsx)("span",{children:"Calculated at checkout"})]})]}),(0,s.jsx)("div",{className:"border-t pt-4 mb-6",children:(0,s.jsxs)("div",{className:"flex justify-between font-semibold",children:[(0,s.jsx)("span",{children:"Total"}),(0,s.jsxs)("span",{children:["$",i.toFixed(2)]})]})}),(0,s.jsx)("button",{className:"btn btn-primary w-full",children:"Proceed to Checkout"}),(0,s.jsx)(u.default,{href:"/products",className:"block text-center mt-4 text-gray-600 hover:text-gray-900",children:"Continue Shopping"})]})})]})]}):(0,s.jsxs)("div",{className:"container-custom py-16 text-center",children:[(0,s.jsx)(x.Z,{className:"mx-auto h-16 w-16 text-gray-400"}),(0,s.jsx)("h2",{className:"mt-4 text-2xl font-semibold",children:"Your cart is empty"}),(0,s.jsx)("p",{className:"mt-2 text-gray-500",children:"Looks like you haven't added anything to your cart yet."}),(0,s.jsx)(u.default,{href:"/products",className:"btn btn-primary mt-8",children:"Continue Shopping"})]})}},6059:function(e,t,a){"use strict";a.d(t,{CartProvider:function(){return n},j:function(){return l}});var s=a(7437),r=a(2265);let i=(0,r.createContext)(void 0);function n(e){let{children:t}=e,[a,n]=(0,r.useState)([]);(0,r.useEffect)(()=>{let e=localStorage.getItem("cart");if(e)try{n(JSON.parse(e))}catch(e){console.error("Failed to parse cart from localStorage",e)}},[]),(0,r.useEffect)(()=>{localStorage.setItem("cart",JSON.stringify(a))},[a]);let l=a.reduce((e,t)=>e+t.price*t.quantity,0),c=a.reduce((e,t)=>e+t.quantity,0);return(0,s.jsx)(i.Provider,{value:{cart:a,addToCart:e=>{n(t=>{let a=t.findIndex(t=>t.id===e.id&&t.size===e.size&&t.color===e.color);if(-1===a)return[...t,e];{let s=[...t];return s[a].quantity+=e.quantity,s}})},removeFromCart:e=>{n(t=>t.filter(t=>t.id!==e))},updateQuantity:(e,t)=>{n(a=>a.map(a=>a.id===e?{...a,quantity:t}:a))},clearCart:()=>{n([])},cartTotal:l,cartCount:c},children:t})}function l(){let e=(0,r.useContext)(i);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}}},function(e){e.O(0,[34,972,878,971,117,744],function(){return e(e.s=9987)}),_N_E=e.O()}]);