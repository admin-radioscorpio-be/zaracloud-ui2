import{c as B,g as O,n as H,x as W}from"./chunk-UT3U43D6.js";import{b as L}from"./chunk-DRUIO7WJ.js";import{$,K as F,La as A,Ma as R,aa as U,da as j,yb as q}from"./chunk-YNQMBS6W.js";import{a as v,j as z}from"./chunk-UFHHX7OZ.js";import{A as _,Ab as s,Lb as p,Wb as n,Xb as r,Z as b,Zb as f,_b as g,ac as w,ca as S,dc as h,fb as l,fc as m,gb as y,m as E,na as d,oa as u,od as P,pd as V,sc as e,tb as M,tc as T,uc as C,wd as N,xc as D,yc as I,zc as k}from"./chunk-FDOXBYU4.js";import"./chunk-GAL4ENT6.js";var G=(()=>{class o{constructor(t,i){this.http=t,this.router=i,this.apiUrl="/api/mixer/status",this.playqueueApiUrl="/api/playqueue",this.authRedirectUrl="/api/login"}getMixerData(){let t={playdetected:17682327048144684e-7,playing:1,statuses:[{elapsed_time:52.97598958015442,fade_duration:0,file_duration:3592.941625,filename:"/Volumes/Caribou/Scorpio//02 - Muziek/beste106_2025_heruitzending/best106_2025_part_09.wav",name:"Channel0",playing:0,remaining_time:null,start_time:null,stop:1,stop_time:17682325959756398e-7,volume:1},{elapsed_time:108.63721370697021,fade_duration:0,file_duration:3604.289875,filename:"/Volumes/Caribou/Scorpio//02 - Muziek/beste106_2025_heruitzending/best106_2025_part_10.wav",name:"Channel1",playing:1,remaining_time:3495.6526612930297,start_time:176823259617722e-5,stop:0,stop_time:17682324700087655e-7,volume:1},{elapsed_time:31.012502908706665,fade_duration:0,file_duration:3594.198521,filename:"/Volumes/Caribou/Scorpio//02 - Muziek/beste106_2025_heruitzending/best106_2025_part_08.wav",name:"Channel2",playing:0,remaining_time:null,start_time:null,stop:1,stop_time:17682325007144341e-7,volume:1},{elapsed_time:41.865538120269775,fade_duration:0,file_duration:3592.941625,filename:"/Volumes/Caribou/Scorpio//02 - Muziek/beste106_2025_heruitzending/best106_2025_part_09.wav",name:"Channel3",playing:0,remaining_time:null,start_time:null,stop:1,stop_time:17682325428188746e-7,volume:1}]};return this.http.get(this.apiUrl).pipe(_(i=>this.handleError(i)))}playNext(){return this.http.get(`${this.playqueueApiUrl}/next`).pipe(_(t=>this.handleError(t)))}cueToPoint(t){let i={cue_point:t};return this.http.post(`${this.playqueueApiUrl}/cue`,i).pipe(_(a=>this.handleError(a)))}handleError(t){return t.status===401&&(console.warn("Unauthorized (401) - Redirecting to login..."),window.location.href=this.authRedirectUrl),E(()=>new Error(t.message))}static{this.\u0275fac=function(i){return new(i||o)(S(v),S(z))}}static{this.\u0275prov=b({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function X(o,c){if(o&1&&(f(0),e(1),g()),o&2){let t=m().$implicit;l(),C(`
                    `,t.filename,`
                  `)}}function Y(o,c){if(o&1&&(f(0),e(1),g()),o&2){let t=m().$implicit,i=m(2);l(),C(`
                    `,i.formatTime(t.elapsed_time),`
                  `)}}function Z(o,c){if(o&1&&(f(0),e(1),g()),o&2){let t=m().$implicit,i=m(2);l(),C(`
                    `,i.formatTime(t.remaining_time),`
                  `)}}function ee(o,c){if(o&1&&(n(0,"tr"),e(1,`
                `),n(2,"th",11),e(3),r(),e(4,`
                `),n(5,"td"),e(6,`
                  `),s(7,X,2,1,"ng-container",0),e(8,` 
                `),r(),e(9,`
                `),n(10,"td"),e(11,`
                  `),s(12,Y,2,1,"ng-container",0),e(13,` 
                `),r(),e(14,`
                `),n(15,"td"),e(16,`
                  `),s(17,Z,2,1,"ng-container",0),e(18,` 
                `),r(),e(19,`
              `),r()),o&2){let t=c.$implicit,i=c.index;l(3),T(i+1),l(4),p("ngIf",t.playing==1),l(5),p("ngIf",t.playing==1),l(5),p("ngIf",t.playing==1)}}function te(o,c){if(o&1){let t=w();n(0,"div")(1,"c-row"),e(2,`
    `),n(3,"c-col",1),e(4,`
      `),n(5,"c-card",2),e(6,`
        `),n(7,"c-card-header"),e(8,`
          `),e(9,`
          `),n(10,"div",3),e(11,`
            `),n(12,"button",4),h("click",function(){d(t);let a=m();return u(a.playNext())}),e(13,`
              Next
            `),r(),e(14,`
            
            `),n(15,"div",5),e(16,`
              `),n(17,"input",6),k("ngModelChange",function(a){d(t);let x=m();return I(x.cuePoint,a)||(x.cuePoint=a),u(a)}),h("keyup.enter",function(){d(t);let a=m();return u(a.cueToPoint())}),r(),e(18,`
              `),n(19,"button",4),h("click",function(){d(t);let a=m();return u(a.cueToPoint())}),e(20,`
                Cue
              `),r(),e(21,`
            `),r(),e(22,`
          `),r(),e(23,`
        `),r(),e(24,`
        `),n(25,"c-card-body"),e(26,`
          `),n(27,"app-docs-example",7),e(28,`
            `),n(29,"table",8),e(30,`
              `),n(31,"thead"),e(32,`
              `),n(33,"tr"),e(34,`
                `),n(35,"th",9),e(36,"#"),r(),e(37,`
                `),n(38,"th",9),e(39,"Track"),r(),e(40,`
                `),n(41,"th",9),e(42,"Elapsed"),r(),e(43,`
                `),n(44,"th",9),e(45,"Remaining"),r(),e(46,`
              `),r(),e(47,`
              `),r(),e(48,`
              `),n(49,"tbody"),e(50,`
              `),s(51,ee,20,4,"tr",10),e(52,`
              `),r(),e(53,`
            `),r(),e(54,`
          `),r(),e(55,`
        `),r(),e(56,`
      `),r(),e(57,`
    `),r(),e(58,`
  `),r()()}if(o&2){let t=m();l(17),D("ngModel",t.cuePoint),l(34),p("ngForOf",t.mixerData.statuses)}}var fe=(()=>{class o{constructor(t,i){this.http=t,this.mixerService=i,this.cuePoint=""}ngOnInit(){this.mixerService.getMixerData().subscribe({next:t=>{this.mixerData=t,this.cuePoint="",console.log("beire"),console.log(this.mixerData),console.log("pap")},error:t=>console.error("Error fetching logger data",t)})}formatTime(t){if(t===null)return"";let i=Math.floor(t/3600),a=Math.floor(t%3600/60),x=Math.floor(t%60);return i>0?`${i}:${a.toString().padStart(2,"0")}:${x.toString().padStart(2,"0")}`:`${a}:${x.toString().padStart(2,"0")}`}loadMixerData(){this.mixerService.getMixerData().subscribe({next:t=>{this.mixerData=t,console.log("Mixer data loaded:",this.mixerData)},error:t=>console.error("Error fetching mixer data",t)})}playNext(){this.mixerService.playNext().subscribe({next:t=>{console.log("Next track queued successfully",t),this.loadMixerData()},error:t=>{console.error("Error calling next:",t)}})}cueToPoint(){if(!this.cuePoint.trim()){console.warn("Please enter a cue point");return}this.mixerService.cueToPoint(this.cuePoint.trim()).subscribe({next:t=>{console.log("Cue successful",t),this.cuePoint="",this.loadMixerData()},error:t=>{console.error("Error calling cue:",t)}})}formatTime2(t){return""}static{this.\u0275fac=function(i){return new(i||o)(y(v),y(G))}}static{this.\u0275cmp=M({type:o,selectors:[["mixer-tables"]],decls:3,vars:1,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],["cButton","","color","primary",3,"click"],[1,"d-flex","align-items-center","gap-2"],["type","text","cFormControl","","placeholder","Enter cue point (e.g., 58:00)",2,"width","200px",3,"ngModelChange","keyup.enter","ngModel"],["href","components/table/mixer"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(i,a){i&1&&(n(0,"h1"),e(1,"Mixer"),r(),s(2,te,59,2,"div",0)),i&2&&(l(2),p("ngIf",a.mixerData))},dependencies:[F,N,P,V,W,B,O,H,R,A,$,j,U,L,q],encapsulation:2})}}return o})();export{fe as MixerComponent};
