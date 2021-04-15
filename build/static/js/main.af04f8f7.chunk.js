(this.webpackJsonpgta5_outfit_builder=this.webpackJsonpgta5_outfit_builder||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),s=a.n(i),l=(a(13),a(6)),o=a(3),c=a(4),d=a(7),m=a(5),u=(a(14),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={items:{hat:{id:0,index:0,prop:!0},ears:{id:0,index:2,prop:!0},glasses:{id:0,index:1,prop:!0},accessoire:{id:0,index:7},undershirt:{id:0,index:8},top:{id:0,index:11},armor:{id:0,index:9},decals:{id:0,index:10},torso:{id:0,index:3},watch:{id:0,index:6,prop:!0},bracelet:{id:0,index:7,prop:!0},legs:{id:0,index:4},shoes:{id:0,index:6}},modalImageSrc:null,listCategory:null,listGender:"M"},e.allCached=!1,e}return Object(c.a)(a,[{key:"getUrlFromItem",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.id,r="120px",i=t.prop?"Prop":"Clothing",s=r+"-"+i+"_"+a+"_"+t.index+"_"+n+".webp";return"items/"+e+"/"+("M"===a?"male":"female")+"/"+s}},{key:"onItemClick",value:function(e){this.setState({modalImageSrc:e})}},{key:"renderOutfitLayout",value:function(e,t){var a=this;return r.a.createElement("div",{className:"outfit-layout",style:{visibility:t?"visible":"hidden"}},Object.keys(this.state.items).map((function(t){var n=a.state.items,i=n[t];i.indices||(i.indices={M:[],F:[],matches:[]}),i["count"+e]||(i["count"+e]=0);var s=a.getUrlFromItem(t,i,e,i.didCache?i.id:i["count"+e]),l=i.indices["M"===e?"F":"M"].includes(i.id),o=i.indices[e].includes(i.id);return r.a.createElement("div",{className:(l?"":"merge ")+t,onClick:function(e){"BUTTON"!==e.target.tagName.toUpperCase()&&a.onItemClick(o?s:"not_found.png")}},r.a.createElement("img",{src:s,alt:t,onError:function(t){i.didCache?t.target.src="not_found.png":(i.loadFails=i.loadFails?i.loadFails+1:1,i.loadFails>100?(i["count"+e]=0,i.didCache=!0):i["count"+e]++,a.setState(n))},onLoad:function(){i.didCache||(i.indices[e].push(i["count"+e]),i.loadFails=0,i["count"+e]++,a.setState(n))}}),r.a.createElement("div",{className:"desc"},r.a.createElement("span",null,"ID: ",i.id),r.a.createElement("button",{onClick:function(){a.setState({listCategory:t,listGender:e})}},"List")))})))}},{key:"renderModal",value:function(){var e=this;return r.a.createElement("div",{id:"modal",onMouseUp:function(){return e.setState({modalImageSrc:null})}},r.a.createElement("img",{src:this.state.modalImageSrc,alt:"Modal"}))}},{key:"renderList",value:function(){var e=this,t=this.state.items[this.state.listCategory];return r.a.createElement("div",{id:"listWrapper",onClick:function(t){"list"!==t.target.id&&e.setState({listCategory:null})}},r.a.createElement("div",{id:"list"},t.indices[this.state.listGender].map((function(a){var n=t.indices["M"===e.state.listGender?"F":"M"].includes(a);return r.a.createElement("div",{className:n?"":"merge","data-id":a},r.a.createElement("img",{src:e.getUrlFromItem(e.state.listCategory,t,e.state.listGender,a),alt:e.state.listCategory+" "+a,onClick:function(){var n=e.state.items;t.id=a,e.setState({items:n,listCategory:null})}}))}))))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.items).every((function(t){return e.state.items[t].didCache})),a=0;for(var n in this.state.items)this.state.items[n].indices&&(a+=this.state.items[n].indices.M.length+this.state.items[n].indices.F.length);if(t&&!this.allCached){var i=this.state.items;for(var s in i){var o,c=i[s],d=c.indices.M,m=c.indices.F,u=Object(l.a)(d);try{for(u.s();!(o=u.n()).done;){var h=o.value;m.includes(h)&&c.indices.matches.push(h)}}catch(p){u.e(p)}finally{u.f()}}this.allCached=!0}return r.a.createElement("div",{className:"App"},!t&&r.a.createElement("div",{id:"loading"},"Loading... ",a," images cached"),this.state.modalImageSrc&&this.renderModal(),this.state.listCategory&&this.renderList(),this.renderOutfitLayout("M",t),this.renderOutfitLayout("F",t),r.a.createElement("div",{id:"info"},r.a.createElement("div",{className:"infoTitle"},"GTA 5 Outfit Builder"),r.a.createElement("div",{className:"content"},r.a.createElement("b",null,"Find item textures here"),":",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/OnlyMisT/VtextureLookup",target:"_blank",rel:"noopener noreferrer"},"VtextureLookup"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://docs.google.com/document/d/1O8pp41q7iR6N84BNxMzXTXMKXAwUmypvtpKX8eyqaLE/edit",target:"_blank",rel:"noopener noreferrer"},"Next Gen Clothing Components"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://forge.plebmasters.de/clothes/",target:"_blank",rel:"noopener noreferrer"},"forge.plebmasters.de"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("hr",null),r.a.createElement("div",null,"Pictures of the props and components belong to ",r.a.createElement("a",{href:"https://rage.mp",target:"_blank",rel:"noopener noreferrer"},"rage.mp")," and are licensed under ",r.a.createElement("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},"CC BY-NC-SA 4.0"),". Pictures of adversary body armor are from: ",r.a.createElement("a",{href:"https://x3t-infinity.com/",target:"_blank",rel:"noopener noreferrer"},"X3T-Infinity"),".")))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.af04f8f7.chunk.js.map