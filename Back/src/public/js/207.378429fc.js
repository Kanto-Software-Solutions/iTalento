"use strict";(self["webpackChunkitalento"]=self["webpackChunkitalento"]||[]).push([[207],{7954:(t,e,a)=>{a.d(e,{Z:()=>p});var n=a(3396),r=a(7139),i=["id"],c=["src"],s={class:"card-img-overlay bg-black bg-opacity-50"},o={class:"card-title"},l={class:"my-5 align-bottom card-text"};function d(t,e,a,d,u,g){return(0,n.wg)(),(0,n.iD)("div",{id:a.id,class:"card text-bg-secondary",style:{height:"500px",width:"250px"}},[(0,n._)("img",{src:a.imagen,class:"w-100 h-100 object-fit-cover",alt:"testPic"},null,8,c),(0,n._)("div",s,[(0,n._)("h5",o,(0,r.zw)(a.id)+" - "+(0,r.zw)(a.titulo),1),(0,n._)("p",l,(0,r.zw)(a.contenido),1)])],8,i)}a(9288);const u={props:{id:Number,titulo:String,contenido:String,imagen:String}};var g=a(89);const m=(0,g.Z)(u,[["render",d]]),p=m},3459:(t,e,a)=>{a.d(e,{Z:()=>u});var n=a(3396),r={class:"d-flex justify-content-center"},i=(0,n._)("div",{class:"spinner-border m-5 text-body-tertiary",role:"status",style:{width:"10rem",height:"10rem"}},[(0,n._)("span",{class:"visually-hidden"},"Loading...")],-1),c=[i];function s(t,e,a,i,s,o){return(0,n.wg)(),(0,n.iD)("div",r,c)}const o={};var l=a(89);const d=(0,l.Z)(o,[["render",s]]),u=d},2207:(t,e,a)=>{a.r(e),a.d(e,{default:()=>y});a(4284);var n=a(3396),r=a(7139),i={class:"text-center"},c=(0,n._)("h1",null,"Esto es una pagina de prueba",-1),s={class:"container-lg"},o=(0,n._)("h5",null,"LALALA",-1),l=(0,n._)("img",{src:"https://res.cloudinary.com/djc2oc9nr/image/upload/v1699075889/Logo_orntxa.png",alt:"",class:"h-100"},null,-1);function d(t,e,a,d,u,g){var m=(0,n.up)("cargando"),p=(0,n.up)("categ");return(0,n.wg)(),(0,n.iD)("div",i,[c,(0,n._)("div",s,[null==t.categorias?((0,n.wg)(),(0,n.j4)(m,{key:0})):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.categorias,(function(t){return(0,n.wg)(),(0,n.iD)("div",null,[o,(0,n.Wm)(p,{id:t.idCategory,titulo:t.name,imagen:t.imgUrl},null,8,["id","titulo","imagen"])])})),256))]),l,(0,n._)("div",null,(0,r.zw)(t.local),1)])}var u=a(124),g=a(8534),m=(a(9730),a(7954)),p=a(3459),v=a(7045);const h={components:{categ:m.Z,cargando:p.Z},created:function(){var t=this;return(0,g.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.Z.getCategorias();case 2:t.categorias=e.sent,t.categorias=t.categorias.slice(0,2);case 4:case"end":return e.stop()}}),e)})))()},methods:{},data:function(){return{categorias:null,local:localStorage.getItem("sesion")}}};var w=a(89);const f=(0,w.Z)(h,[["render",d]]),y=f}}]);
//# sourceMappingURL=207.378429fc.js.map