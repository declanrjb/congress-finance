(this["webpackJsonpnew-flare"]=this["webpackJsonpnew-flare"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var o=n(4),i=n(15),d=n.n(i),r=n(16),a=n.n(r),s=n(17);fetch("./congress2022v11.gexf").then((function(e){return e.text()})).then((function(e){var t=Object(s.parse)(a.a,e),n=document.getElementById("sigma-container"),i=document.getElementById("zoom-in"),r=document.getElementById("zoom-out"),u=document.getElementById("zoom-reset"),c=(document.getElementById("labels-threshold"),document.getElementById("search-input")),l=document.getElementById("suggestions"),g=new d.a(t,n,{minCameraRatio:.01,maxCameraRatio:3,allowInvalidContainer:!0,renderEdgeLabels:!0}),h=g.getCamera();i.addEventListener("click",(function(){h.animatedZoom({duration:600})})),r.addEventListener("click",(function(){h.animatedUnzoom({duration:600})})),u.addEventListener("click",(function(){h.animatedReset({duration:600})}));var v={searchQuery:""};function f(e){if(v.searchQuery=e,c.value!==e&&(c.value=e),e){var n=e.toLowerCase(),o=t.nodes().map((function(e){return{id:e,label:t.getNodeAttribute(e,"label")}})).filter((function(e){return e.label.toLowerCase().includes(n)}));if(1===o.length&&o[0].label===e){v.selectedNode=o[0].id,m(o[0].id),v.suggestions=void 0,N=!0,b=o[0].id;var i=g.getNodeDisplayData(v.selectedNode);g.getCamera().animate(i,{duration:500})}else v.selectedNode=void 0,v.suggestions=new Set(o.map((function(e){return e.id})))}else v.selectedNode=void 0,v.suggestions=void 0;g.refresh()}function m(e){e?(v.hoveredNode=e,v.hoveredNeighbors=new Set(t.neighbors(e))):(v.hoveredNode=void 0,v.hoveredNeighbors=void 0),g.refresh()}l.innerHTML=t.nodes().map((function(e){return'<option value="'.concat(t.getNodeAttribute(e,"label"),'"></option>')})).join("\n"),c.addEventListener("input",(function(){f(c.value||"")})),c.addEventListener("blur",(function(){f("")}));var b=void 0,N=!1;g.on("clickNode",(function(e){var t=e.node;b===t?(b=void 0,m(void 0),N=!1):(b=t,N=!0,m(t))})),g.on("enterNode",(function(e){var t=e.node;!1===N&&m(t)})),g.on("leaveNode",(function(e){var t=e.node;!1===N&&b!==t&&m(void 0)})),g.on("doubleClickNode",(function(e){var t=e.node;window.open("https://www.opensecrets.org/search?q="+t)})),g.setSetting("nodeReducer",(function(e,n){var i=Object(o.a)({},n);return v.hoveredNeighbors&&!v.hoveredNeighbors.has(e)&&v.hoveredNode!==e&&(i.label="",i.color="#f6f6f6"),v.selectedNode===e?i.highlighted=!0:v.suggestions&&!v.suggestions.has(e)&&(i.label="",i.color="#f6f6f6"),v.suggestions&&v.suggestions.has(e)&&(i.highlighted=!0,i.label=t.getNodeAttribute(e,"label"),i.color=t.getNodeAttribute(e,"color")),i})),g.setSetting("edgeReducer",(function(e,n){var i=Object(o.a)({},n);return v.hoveredNode&&!t.hasExtremity(e,v.hoveredNode)&&(i.hidden=!0),!v.suggestions||v.suggestions.has(t.source(e))&&v.suggestions.has(t.target(e))||(i.hidden=!0),i}))}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d208b250.chunk.js.map