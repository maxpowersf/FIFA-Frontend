(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{v0mU:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("8Y7J"),o=n("yYez");const i=(()=>{class t{constructor(t){this.confederationService=t}resolve(t){return this.confederationService.getAll()}}return t.ngInjectableDef=r.Nb({factory:function(){return new t(r.Rb(o.a))},token:t,providedIn:"root"}),t})()},yYez:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("IheW"),o=n("AytR"),i=n("8Y7J");const c={headers:new r.g({"Content-Type":"application/json-patch+json"})},a=(()=>{class t{constructor(t){this.httpClient=t,this.confederationUrl=o.a.baseUrl+"confederation"}getAll(){return this.httpClient.get(this.confederationUrl+"/getall")}getAllByConfederation(t){return this.httpClient.get(this.confederationUrl+"/getallbyconfederation/"+t)}getOne(t){return this.httpClient.get(this.confederationUrl+"/get/"+t)}add(t){return this.httpClient.post(this.confederationUrl+"/add",t,c)}update(t){return this.httpClient.put(this.confederationUrl+"/update",t,c)}delete(t){return this.httpClient.delete(this.confederationUrl+"/delete/"+t)}}return t.ngInjectableDef=i.Nb({factory:function(){return new t(i.Rb(r.c))},token:t,providedIn:"root"}),t})()}}]);