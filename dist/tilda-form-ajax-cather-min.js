"use strict";function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}document.addEventListener("DOMContentLoaded",function(){window.tildaForm=tildaForm||{},window.globalFormData={};var t=new Event("AjaxCatchEvent");if(Object.size=function(t){var e,r=0;for(e in t)t.hasOwnProperty(e)&&r++;return r},window.tildaForm&&window.tildaForm.hasOwnProperty("send")){var e=new Object;e.tempOpen=XMLHttpRequest.prototype.open,e.tempSend=XMLHttpRequest.prototype.send,e.callback=function(){"https://stat.tildacdn.com/event/"===this.url&&Object.size(window.globalFormData)&&document.dispatchEvent(t)},XMLHttpRequest.prototype.open=function(t,r){t||(t=""),r||(r=""),e.tempOpen.apply(this,arguments),e.method=t,e.url=r,"get"==t.toLowerCase()&&(e.data=r.split("?"),e.data=e.data[1])},XMLHttpRequest.prototype.send=function(t,r){t||(t=""),r||(r=""),e.tempSend.apply(this,arguments),"post"==e.method.toLowerCase()&&(e.data=t),e.callback()}}Array.prototype.forEach.call(document.querySelectorAll("form"),function(t,e){t.addEventListener("change",function(){var t=new FormData(this),e={},r=!0,n=!1,o=void 0;try{for(var a,i=t.entries()[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var c=a.value;e[c[0]]=c[1]}}catch(t){n=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}window.globalFormData=_objectSpread({},e)})})});