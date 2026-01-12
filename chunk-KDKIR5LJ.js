import{c as q,g as A,n as H,x as W}from"./chunk-UT3U43D6.js";import{b as z}from"./chunk-DRUIO7WJ.js";import{$ as j,La as B,Ma as U,aa as $,da as R,yb as O}from"./chunk-YNQMBS6W.js";import{a as C,j as F}from"./chunk-UFHHX7OZ.js";import{A as y,Ab as x,Lb as p,Wb as n,Xb as r,Z as M,Zb as _,_b as f,ac as b,ca as v,dc as g,fb as l,fc as c,gb as E,m as S,na as d,oa as u,od as k,pd as N,sc as t,tb as w,tc as T,uc as h,wd as V,xc as I,yc as D,zc as P}from"./chunk-FDOXBYU4.js";import"./chunk-GAL4ENT6.js";var L=(()=>{class o{constructor(e,i){this.http=e,this.router=i,this.apiUrl="/api/mixer/status",this.authRedirectUrl="/api/login"}getMixerData(){return this.http.get(this.apiUrl).pipe(y(e=>this.handleError(e)))}handleError(e){return e.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),S(()=>new Error(e.message))}static{this.\u0275fac=function(i){return new(i||o)(v(C),v(F))}}static{this.\u0275prov=M({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function Q(o,m){if(o&1&&(_(0),t(1),f()),o&2){let e=c().$implicit;l(),h(`
                    `,e.filename,`
                  `)}}function X(o,m){if(o&1&&(_(0),t(1),f()),o&2){let e=c().$implicit,i=c(2);l(),h(`
                    `,i.formatTime(e.elapsed_time),`
                  `)}}function Y(o,m){if(o&1&&(_(0),t(1),f()),o&2){let e=c().$implicit,i=c(2);l(),h(`
                    `,i.formatTime(e.remaining_time),`
                  `)}}function Z(o,m){if(o&1&&(n(0,"tr"),t(1,`
                `),n(2,"th",12),t(3),r(),t(4,`
                `),n(5,"td"),t(6,`
                  `),x(7,Q,2,1,"ng-container",0),t(8,` 
                `),r(),t(9,`
                `),n(10,"td"),t(11,`
                  `),x(12,X,2,1,"ng-container",0),t(13,` 
                `),r(),t(14,`
                `),n(15,"td"),t(16,`
                  `),x(17,Y,2,1,"ng-container",0),t(18,` 
                `),r(),t(19,`
              `),r()),o&2){let e=m.$implicit,i=m.index;l(3),T(i+1),l(4),p("ngIf",e.playing==1),l(5),p("ngIf",e.playing==1),l(5),p("ngIf",e.playing==1)}}function tt(o,m){if(o&1){let e=b();n(0,"div")(1,"c-row"),t(2,`
    `),n(3,"c-col",1),t(4,`
      `),n(5,"c-card",2),t(6,`
        `),n(7,"c-card-header"),t(8,`
          `),t(9,`
          `),n(10,"div",3),t(11,`
            `),n(12,"button",4),g("click",function(){d(e);let a=c();return u(a.playNext())}),t(13,`
              Next
            `),r(),t(14,`
            
            `),n(15,"div",5),t(16,`
              `),n(17,"input",6),P("ngModelChange",function(a){d(e);let s=c();return D(s.cuePoint,a)||(s.cuePoint=a),u(a)}),g("keyup.enter",function(){d(e);let a=c();return u(a.cueToPoint())}),r(),t(18,`
              `),n(19,"button",7),g("click",function(){d(e);let a=c();return u(a.cueToPoint())}),t(20,`
                Cue
              `),r(),t(21,`
            `),r(),t(22,`
          `),r(),t(23,`
        `),r(),t(24,`
        `),n(25,"c-card-body"),t(26,`
          `),n(27,"app-docs-example",8),t(28,`
            `),n(29,"table",9),t(30,`
              `),n(31,"thead"),t(32,`
              `),n(33,"tr"),t(34,`
                `),n(35,"th",10),t(36,"#"),r(),t(37,`
                `),n(38,"th",10),t(39,"Track"),r(),t(40,`
                `),n(41,"th",10),t(42,"Elapsed"),r(),t(43,`
                `),n(44,"th",10),t(45,"Remaining"),r(),t(46,`
              `),r(),t(47,`
              `),r(),t(48,`
              `),n(49,"tbody"),t(50,`
              `),x(51,Z,20,4,"tr",11),t(52,`
              `),r(),t(53,`
            `),r(),t(54,`
          `),r(),t(55,`
        `),r(),t(56,`
      `),r(),t(57,`
    `),r(),t(58,`
  `),r()()}if(o&2){let e=c();l(17),I("ngModel",e.cuePoint),l(34),p("ngForOf",e.mixerData.statuses)}}var ut=(()=>{class o{constructor(e,i){this.http=e,this.mixerService=i,this.cuePoint=""}ngOnInit(){this.mixerService.getMixerData().subscribe({next:e=>{this.mixerData=e,this.cuePoint="",console.log("beire"),console.log(this.mixerData),console.log("pap")},error:e=>console.error("Error fetching logger data",e)})}formatTime(e){if(e===null)return"";let i=Math.floor(e/3600),a=Math.floor(e%3600/60),s=Math.floor(e%60);return i>0?`${i}:${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`:`${a}:${s.toString().padStart(2,"0")}`}playNext(){this.http.get("/playqueue/next").subscribe({next:e=>{console.log("Next track queued successfully",e)},error:e=>{console.error("Error calling next:",e)}})}cueToPoint(){if(!this.cuePoint.trim()){console.warn("Please enter a cue point");return}let e={cue_point:this.cuePoint.trim()};this.http.post("/playqueue/cue",e).subscribe({next:i=>{console.log("Cue successful",i),this.cuePoint=""},error:i=>{console.error("Error calling cue:",i)}})}formatTime2(e){return""}static{this.\u0275fac=function(i){return new(i||o)(E(C),E(L))}}static{this.\u0275cmp=w({type:o,selectors:[["mixer-tables"]],decls:3,vars:1,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],["cButton","","color","primary",3,"click"],[1,"d-flex","align-items-center","gap-2"],["type","text","cFormControl","","placeholder","Enter cue point (e.g., 58:00)",2,"width","200px",3,"ngModelChange","keyup.enter","ngModel"],["cButton","","color","success",3,"click"],["href","components/table/mixer"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(i,a){i&1&&(n(0,"h1"),t(1,"Mixer"),r(),x(2,tt,59,2,"div",0)),i&2&&(l(2),p("ngIf",a.mixerData))},dependencies:[V,k,N,W,q,A,H,U,B,j,R,$,z,O],encapsulation:2})}}return o})();export{ut as MixerComponent};
