"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3740],{3740:(E,c,o)=>{o.r(c),o.d(c,{EditSimCardPageModule:()=>h});var g=o(177),n=o(4341),t=o(4742),m=o(8986),a=o(4438),p=o(5070);const C=[{path:"",component:(()=>{var i;class d{constructor(e,r,u){this.route=e,this.apiService=r,this.router=u,this.sim={iccid:"",operador:""}}ngOnInit(){const e=this.route.snapshot.paramMap.get("id")||"";this.apiService.getSimCardById(e).subscribe(r=>{r&&!r.error?this.sim=r:alert("Error al cargar la SIM card")},r=>{console.error("Error al cargar la SIM card:",r),alert("Error al cargar la SIM card")})}updateSimCard(){const e=this.route.snapshot.paramMap.get("id")||"";this.apiService.updateSimCard(e,this.sim).subscribe(r=>{r.success?this.router.navigate(["/dashboard/admin"]):alert("Error al actualizar la SIM card")},r=>{console.error("Error al actualizar la SIM card:",r),alert("Error al actualizar la SIM card")})}}return(i=d).\u0275fac=function(e){return new(e||i)(a.rXU(m.nX),a.rXU(p.G),a.rXU(m.Ix))},i.\u0275cmp=a.VBU({type:i,selectors:[["app-edit-simcard"]],decls:19,vars:2,consts:[[1,"ion-padding"],[3,"ngSubmit"],["position","floating"],["type","text","name","iccid","required","",3,"ngModelChange","ngModel"],["type","text","name","operador","required","",3,"ngModelChange","ngModel"],["expand","full","type","submit"],[1,"dashboard-button"],["expand","block","color","light","routerLink","/dashboard/admin"]],template:function(e,r){1&e&&(a.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),a.EFF(3,"Editar SIM Card"),a.k0s()()(),a.j41(4,"ion-content",0)(5,"form",1),a.bIt("ngSubmit",function(){return r.updateSimCard()}),a.j41(6,"ion-item")(7,"ion-label",2),a.EFF(8,"ICCID"),a.k0s(),a.j41(9,"ion-input",3),a.mxI("ngModelChange",function(s){return a.DH7(r.sim.iccid,s)||(r.sim.iccid=s),s}),a.k0s()(),a.j41(10,"ion-item")(11,"ion-label",2),a.EFF(12,"Operador"),a.k0s(),a.j41(13,"ion-input",4),a.mxI("ngModelChange",function(s){return a.DH7(r.sim.operador,s)||(r.sim.operador=s),s}),a.k0s()(),a.j41(14,"ion-button",5),a.EFF(15,"Guardar Cambios"),a.k0s()(),a.j41(16,"div",6)(17,"ion-button",7),a.EFF(18,"Volver al Dashboard"),a.k0s()()()),2&e&&(a.R7$(9),a.R50("ngModel",r.sim.iccid),a.R7$(4),a.R50("ngModel",r.sim.operador))},dependencies:[n.qT,n.BC,n.cb,n.YS,n.vS,n.cV,t.Jm,t.W9,t.eU,t.$w,t.uz,t.he,t.BC,t.ai,t.Gw,t.N7,m.Wk],encapsulation:2}),d})()}];let S=(()=>{var i;class d{}return(i=d).\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.$C({type:i}),i.\u0275inj=a.G2t({imports:[m.iI.forChild(C),m.iI]}),d})(),h=(()=>{var i;class d{}return(i=d).\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.$C({type:i}),i.\u0275inj=a.G2t({imports:[g.MD,n.YN,t.bv,S]}),d})()}}]);