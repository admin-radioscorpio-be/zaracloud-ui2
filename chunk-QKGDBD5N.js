import{c as B,g as O,n as H,x as W}from"./chunk-UT3U43D6.js";import{b as z}from"./chunk-DRUIO7WJ.js";import{$,La as A,Ma as R,aa as U,da as j,yb as q}from"./chunk-YNQMBS6W.js";import{a as v,j as F}from"./chunk-UFHHX7OZ.js";import{A as _,Ab as s,Lb as x,Wb as i,Xb as n,Z as M,Zb as f,_b as h,ac as w,ca as E,dc as g,fb as l,fc as c,gb as S,m as y,na as d,oa as u,od as k,pd as N,sc as t,tb as b,tc as T,uc as C,wd as V,xc as D,yc as I,zc as P}from"./chunk-FDOXBYU4.js";import"./chunk-GAL4ENT6.js";var L=(()=>{class r{constructor(e,o){this.http=e,this.router=o,this.apiUrl="/api/mixer/status",this.playqueueApiUrl="/api/playqueue",this.authRedirectUrl="/api/login"}getMixerData(){return this.http.get(this.apiUrl).pipe(_(e=>this.handleError(e)))}playNext(){return this.http.get(`${this.playqueueApiUrl}/next`).pipe(_(e=>this.handleError(e)))}cueToPoint(e){let o={cue_point:e};return this.http.post(`${this.playqueueApiUrl}/cue`,o).pipe(_(a=>this.handleError(a)))}handleError(e){return e.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),y(()=>new Error(e.message))}static{this.\u0275fac=function(o){return new(o||r)(E(v),E(F))}}static{this.\u0275prov=M({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function Q(r,m){if(r&1&&(f(0),t(1),h()),r&2){let e=c().$implicit;l(),C(`
                    `,e.filename,`
                  `)}}function X(r,m){if(r&1&&(f(0),t(1),h()),r&2){let e=c().$implicit,o=c(2);l(),C(`
                    `,o.formatTime(e.elapsed_time),`
                  `)}}function Y(r,m){if(r&1&&(f(0),t(1),h()),r&2){let e=c().$implicit,o=c(2);l(),C(`
                    `,o.formatTime(e.remaining_time),`
                  `)}}function Z(r,m){if(r&1&&(i(0,"tr"),t(1,`
                `),i(2,"th",12),t(3),n(),t(4,`
                `),i(5,"td"),t(6,`
                  `),s(7,Q,2,1,"ng-container",0),t(8,` 
                `),n(),t(9,`
                `),i(10,"td"),t(11,`
                  `),s(12,X,2,1,"ng-container",0),t(13,` 
                `),n(),t(14,`
                `),i(15,"td"),t(16,`
                  `),s(17,Y,2,1,"ng-container",0),t(18,` 
                `),n(),t(19,`
              `),n()),r&2){let e=m.$implicit,o=m.index;l(3),T(o+1),l(4),x("ngIf",e.playing==1),l(5),x("ngIf",e.playing==1),l(5),x("ngIf",e.playing==1)}}function ee(r,m){if(r&1){let e=w();i(0,"div")(1,"c-row"),t(2,`
    `),i(3,"c-col",1),t(4,`
      `),i(5,"c-card",2),t(6,`
        `),i(7,"c-card-header"),t(8,`
          `),t(9,`
          `),i(10,"div",3),t(11,`
            `),i(12,"button",4),g("click",function(){d(e);let a=c();return u(a.playNext())}),t(13,`
              Next
            `),n(),t(14,`
            
            `),i(15,"div",5),t(16,`
              `),i(17,"input",6),P("ngModelChange",function(a){d(e);let p=c();return I(p.cuePoint,a)||(p.cuePoint=a),u(a)}),g("keyup.enter",function(){d(e);let a=c();return u(a.cueToPoint())}),n(),t(18,`
              `),i(19,"button",7),g("click",function(){d(e);let a=c();return u(a.cueToPoint())}),t(20,`
                Cue
              `),n(),t(21,`
            `),n(),t(22,`
          `),n(),t(23,`
        `),n(),t(24,`
        `),i(25,"c-card-body"),t(26,`
          `),i(27,"app-docs-example",8),t(28,`
            `),i(29,"table",9),t(30,`
              `),i(31,"thead"),t(32,`
              `),i(33,"tr"),t(34,`
                `),i(35,"th",10),t(36,"#"),n(),t(37,`
                `),i(38,"th",10),t(39,"Track"),n(),t(40,`
                `),i(41,"th",10),t(42,"Elapsed"),n(),t(43,`
                `),i(44,"th",10),t(45,"Remaining"),n(),t(46,`
              `),n(),t(47,`
              `),n(),t(48,`
              `),i(49,"tbody"),t(50,`
              `),s(51,Z,20,4,"tr",11),t(52,`
              `),n(),t(53,`
            `),n(),t(54,`
          `),n(),t(55,`
        `),n(),t(56,`
      `),n(),t(57,`
    `),n(),t(58,`
  `),n()()}if(r&2){let e=c();l(17),D("ngModel",e.cuePoint),l(34),x("ngForOf",e.mixerData.statuses)}}var ue=(()=>{class r{constructor(e,o){this.http=e,this.mixerService=o,this.cuePoint=""}ngOnInit(){this.mixerService.getMixerData().subscribe({next:e=>{this.mixerData=e,this.cuePoint="",console.log("beire"),console.log(this.mixerData),console.log("pap")},error:e=>console.error("Error fetching logger data",e)})}formatTime(e){if(e===null)return"";let o=Math.floor(e/3600),a=Math.floor(e%3600/60),p=Math.floor(e%60);return o>0?`${o}:${a.toString().padStart(2,"0")}:${p.toString().padStart(2,"0")}`:`${a}:${p.toString().padStart(2,"0")}`}loadMixerData(){this.mixerService.getMixerData().subscribe({next:e=>{this.mixerData=e,console.log("Mixer data loaded:",this.mixerData)},error:e=>console.error("Error fetching mixer data",e)})}playNext(){this.mixerService.playNext().subscribe({next:e=>{console.log("Next track queued successfully",e),this.loadMixerData()},error:e=>{console.error("Error calling next:",e)}})}cueToPoint(){if(!this.cuePoint.trim()){console.warn("Please enter a cue point");return}this.mixerService.cueToPoint(this.cuePoint.trim()).subscribe({next:e=>{console.log("Cue successful",e),this.cuePoint="",this.loadMixerData()},error:e=>{console.error("Error calling cue:",e)}})}formatTime2(e){return""}static{this.\u0275fac=function(o){return new(o||r)(S(v),S(L))}}static{this.\u0275cmp=b({type:r,selectors:[["mixer-tables"]],decls:3,vars:1,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],["cButton","","color","primary",3,"click"],[1,"d-flex","align-items-center","gap-2"],["type","text","cFormControl","","placeholder","Enter cue point (e.g., 58:00)",2,"width","200px",3,"ngModelChange","keyup.enter","ngModel"],["cButton","","color","success",3,"click"],["href","components/table/mixer"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(o,a){o&1&&(i(0,"h1"),t(1,"Mixer"),n(),s(2,ee,59,2,"div",0)),o&2&&(l(2),x("ngIf",a.mixerData))},dependencies:[V,k,N,W,B,O,H,R,A,$,j,U,z,q],encapsulation:2})}}return r})();export{ue as MixerComponent};
