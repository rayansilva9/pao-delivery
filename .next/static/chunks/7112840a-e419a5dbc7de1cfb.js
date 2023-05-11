"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,n){n.d(t,{JU:function(){return su},QT:function(){return sM},ad:function(){return sd},pl:function(){return sO}});var r,s,i=n(5816),a=n(740),o=n(3333),l=n(4444),u=n(6640);n(3454);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="9.21.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let n=t.map(v);f.debug(`Firestore (${d}): ${e}`,...n)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let n=t.map(v);f.error(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let n=t.map(v);f.warn(`Firestore (${d}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class b{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),s=new C;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new C,e.enqueueRetryable(()=>r(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new C)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new I(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new c(e)}}class k{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class N{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new k(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let n=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.T;return this.T=e.token,g("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?r(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||w(),this.T=e.token,new _(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function x(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new F(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new F(0,0))}static max(){return new V(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,n){void 0===t?t=0:t>e.length&&w(),void 0===n?n=e.length-t:n>e.length-t&&w(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===M.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof M?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),s=t.get(r);if(n<s)return -1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class P extends M{construct(e,t,n){return new P(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new P(t)}static emptyPath(){return new P([])}}let O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends M{construct(e,t,n){return new U(e,t,n)}static isValidIdentifier(e){return O.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new U(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,s=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},i=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new U(t)}static emptyPath(){return new U([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(P.fromString(e))}static fromName(e){return new q(P.fromString(e).popFirst(5))}static empty(){return new q(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===P.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return P.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new P(e.slice()))}}class z{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new z(V.min(),q.empty(),-1)}static max(){return new z(V.max(),q.empty(),-1)}}class B{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof K?t:K.resolve(t)}catch(e){return K.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,n)=>{t(e)})}static reject(e){return new K((t,n)=>{n(e)})}static waitFor(e){return new K((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=K.resolve(!1);for(let n of e)t=t.next(e=>e?K.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new K((n,r)=>{let s=e.length,i=Array(s),a=0;for(let o=0;o<s;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new K((n,r)=>{let s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}function Q(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}}function j(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function W(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function X(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}G.ct=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.comparator=e,this.root=t||Z.EMPTY}insert(e,t){return new Y(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new J(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new J(this.root,e,this.comparator,!1)}getReverseIterator(){return new J(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new J(this.root,e,this.comparator,!0)}}class J{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Z.RED,this.left=null!=r?r:Z.EMPTY,this.right=null!=s?s:Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Z(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,s=n(e,r.key);return(r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Z.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1,Z.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,n,r,s){return this}insert(e,t,n){return new Z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new et(this.data.getIterator())}getIteratorFrom(e){return new et(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ee(this.comparator);return t.data=e,t}}class et{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(U.comparator)}static empty(){return new en([])}unionWith(e){let t=new ee(U.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new en(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new er("Invalid base64 string: "+e):e}}(e);return new es(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new es(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}es.EMPTY_BYTE_STRING=new es("");let ei=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(e){if(e||w(),"string"==typeof e){let t=0,n=ei.exec(e);if(n||w(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:eo(e.seconds),nanos:eo(e.nanos)}}function eo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function el(e){return"string"==typeof e?es.fromBase64String(e):es.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eh(e){let t=e.mapValue.fields.__previous_value__;return eu(t)?eh(t):t}function ec(e){let t=ea(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,n,r,s,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class ef{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ef("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ef&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function eg(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eu(e)?4:ek(e)?9007199254740991:10:w()}function ep(e,t){if(e===t)return!0;let n=eg(e);if(n!==eg(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ec(e).isEqual(ec(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=ea(e.timestampValue),r=ea(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return el(e.bytesValue).isEqual(el(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eo(e.geoPointValue.latitude)===eo(t.geoPointValue.latitude)&&eo(e.geoPointValue.longitude)===eo(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eo(e.integerValue)===eo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=eo(e.doubleValue),r=eo(t.doubleValue);return n===r?j(n)===j(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],ep);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(H(n)!==H(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ep(n[e],r[e])))return!1;return!0}(e,t);default:return w()}}function ey(e,t){return void 0!==(e.values||[]).find(e=>ep(e,t))}function ev(e,t){if(e===t)return 0;let n=eg(e),r=eg(t);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=eo(e.integerValue||e.doubleValue),r=eo(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ew(e.timestampValue,t.timestampValue);case 4:return ew(ec(e),ec(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let n=el(e),r=el(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=x(n[e],r[e]);if(0!==t)return t}return x(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=x(eo(e.latitude),eo(t.latitude));return 0!==n?n:x(eo(e.longitude),eo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ev(n[e],r[e]);if(t)return t}return x(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===em.mapValue&&t===em.mapValue)return 0;if(e===em.mapValue)return 1;if(t===em.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){let t=x(r[e],i[e]);if(0!==t)return t;let a=ev(n[r[e]],s[i[e]]);if(0!==a)return a}return x(r.length,i.length)}(e.mapValue,t.mapValue);default:throw w()}}function ew(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let n=ea(e),r=ea(t),s=x(n.seconds,r.seconds);return 0!==s?s:x(n.nanos,r.nanos)}function eE(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ea(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?el(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,q.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eE(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let s of t)r?r=!1:n+=",",n+=`${s}:${eE(e.fields[s])}`;return n+"}"}(e.mapValue):w()}function eT(e){return!!e&&"integerValue"in e}function eC(e){return!!e&&"arrayValue"in e}function eI(e){return!!e&&"nullValue"in e}function eS(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eA(e){return!!e&&"mapValue"in e}function eb(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return W(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eb(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eb(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ek(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.value=e}static empty(){return new eN({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eA(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eb(t)}setAll(e){let t=U.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=eb(e):r.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){let t=this.field(e.popLast());eA(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ep(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eA(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(W(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eN(eb(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,n,r,s,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new e_(e,0,V.min(),V.min(),V.min(),eN.empty(),0)}static newFoundDocument(e,t,n,r){return new e_(e,1,t,V.min(),n,r,0)}static newNoDocument(e,t){return new e_(e,2,t,V.min(),V.min(),eN.empty(),0)}static newUnknownDocument(e,t){return new e_(e,3,t,V.min(),V.min(),eN.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(V.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eN.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eN.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof e_&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new e_(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t){this.position=e,this.inclusive=t}}function eR(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(r=i.field.isKeyField()?q.comparator(q.fromName(a.referenceValue),n.key):ev(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function ex(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ep(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{}class eV extends eF{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eU(e,t,n):"array-contains"===t?new e$(e,n):"in"===t?new eK(e,n):"not-in"===t?new eQ(e,n):"array-contains-any"===t?new eG(e,n):new eV(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new eq(e,n):new ez(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ev(t,this.value)):null!==t&&eg(this.value)===eg(t)&&this.matchesComparison(ev(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eM extends eF{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new eM(e,t)}matches(e){return eP(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function eP(e){return"and"===e.op}function eO(e){for(let t of e.filters)if(t instanceof eM)return!1;return!0}class eU extends eV{constructor(e,t,n){super(e,t,n),this.key=q.fromName(n.referenceValue)}matches(e){let t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class eq extends eV{constructor(e,t){super(e,"in",t),this.keys=eB("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ez extends eV{constructor(e,t){super(e,"not-in",t),this.keys=eB("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eB(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>q.fromName(e.referenceValue))}class e$ extends eV{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eC(t)&&ey(t.arrayValue,this.value)}}class eK extends eV{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ey(this.value.arrayValue,t)}}class eQ extends eV{constructor(e,t){super(e,"not-in",t)}matches(e){if(ey(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ey(this.value.arrayValue,t)}}class eG extends eV{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eC(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ey(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e,t=null,n=[],r=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=a,this.ft=null}}function eH(e,t=null,n=[],r=[],s=null,i=null,a=null){return new ej(e,t,n,r,s,i,a)}function eW(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof eV)return t.field.canonicalString()+t.op.toString()+eE(t.value);if(eO(t)&&eP(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eE(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eE(e)).join(",")),t.ft=e}return t.ft}function eX(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++){var n,r;if(n=e.orderBy[s],r=t.orderBy[s],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof eV?n instanceof eV&&t.op===n.op&&t.field.isEqual(n.field)&&ep(t.value,n.value):t instanceof eM?n instanceof eM&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,s)=>t&&e(r,n.filters[s]),!0):void w()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ex(e.startAt,t.startAt)&&ex(e.endAt,t.endAt)}function eY(e){return q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t=null,n=[],r=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.dt=null,this._t=null,this.startAt,this.endAt}}function eZ(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e0(e){let t=e;if(null===t.dt){t.dt=[];let e=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(t),n=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===n)e.isKeyField()||t.dt.push(new eL(e)),t.dt.push(new eL(U.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new eL(U.keyField(),e))}}}return t.dt}function e1(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=eH(t.path,t.collectionGroup,e0(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of e0(t)){let t="desc"===n.dir?"asc":"desc";e.push(new eL(n.field,t))}let n=t.endAt?new eD(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eD(t.startAt.position,t.startAt.inclusive):null;t._t=eH(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}return t._t}function e2(e,t,n){return new eJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function e4(e,t){return eX(e1(e),e1(t))&&e.limitType===t.limitType}function e3(e){return`${eW(e1(e))}|lt:${e.limitType}`}function e9(e){var t;let n;return`Query(target=${n=(t=e1(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eV?`${t.field.canonicalString()} ${t.op} ${eE(t.value)}`:t instanceof eM?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eE(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eE(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function e8(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):q.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e0(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eR(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,e0(e),t))&&(!e.endAt||!!function(e,t,n){let r=eR(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,e0(e),t))}function e6(e){return(t,n)=>{let r=!1;for(let s of e0(e)){let e=function(e,t,n){let r=e.field.isKeyField()?q.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?ev(r,s):w()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return w()}}(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){W(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return X(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e7=new Y(q.comparator),te=new Y(q.comparator);function tt(...e){let t=te;for(let n of e)t=t.insert(n.key,n);return t}function tn(e){let t=te;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tr(){return new e5(e=>e.toString(),(e,t)=>e.isEqual(t))}let ts=new Y(q.comparator),ti=new ee(q.comparator);function ta(...e){let t=ti;for(let n of e)t=t.add(n);return t}let to=new ee(x);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:j(t)?"-0":t}}function tu(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this._=void 0}}function tc(e,t){return e instanceof ty?eT(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class td extends th{}class tf extends th{constructor(e){super(),this.elements=e}}function tm(e,t){let n=tw(t);for(let t of e.elements)n.some(e=>ep(e,t))||n.push(t);return{arrayValue:{values:n}}}class tg extends th{constructor(e){super(),this.elements=e}}function tp(e,t){let n=tw(t);for(let t of e.elements)n=n.filter(e=>!ep(e,t));return{arrayValue:{values:n}}}class ty extends th{constructor(e,t){super(),this.serializer=e,this.wt=t}}function tv(e){return eo(e.integerValue||e.doubleValue)}function tw(e){return eC(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tE{constructor(e,t){this.version=e,this.transformResults=t}}class tT{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tT}static exists(e){return new tT(void 0,e)}static updateTime(e){return new tT(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tC(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tI{}function tS(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tx(e.key,tT.none()):new tk(e.key,e.data,tT.none());{let n=e.data,r=eN.empty(),s=new ee(U.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new tN(e.key,r,new en(s.toArray()),tT.none())}}function tA(e,t,n,r){return e instanceof tk?function(e,t,n,r){if(!tC(e.precondition,t))return n;let s=e.value.clone(),i=tR(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof tN?function(e,t,n,r){if(!tC(e.precondition,t))return n;let s=tR(e.fieldTransforms,r,t),i=t.data;return(i.setAll(t_(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tC(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tb(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&L(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tf&&r instanceof tf||n instanceof tg&&r instanceof tg?L(n.elements,r.elements,ep):n instanceof ty&&r instanceof ty?ep(n.wt,r.wt):n instanceof td&&r instanceof td)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tk extends tI{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tN extends tI{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function t_(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tD(e,t,n){var r;let s=new Map;e.length===n.length||w();for(let i=0;i<n.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,(r=n[i],o instanceof tf?tm(o,l):o instanceof tg?tp(o,l):r))}return s}function tR(e,t,n){let r=new Map;for(let s of e){let e=s.transform,i=n.data.field(s.field);r.set(s.field,e instanceof td?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eu(t)&&(t=eh(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,i):e instanceof tf?tm(e,i):e instanceof tg?tp(e,i):function(e,t){let n=tc(e,t),r=tv(n)+tv(e.wt);return eT(n)&&eT(e.wt)?tu(r):tl(e.serializer,r)}(e,i))}return r}class tx extends tI{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tL extends tI{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let s=this.mutations[t];if(s.key.isEqual(e.key)){var r;r=n[t],s instanceof tk?function(e,t,n){let r=e.value.clone(),s=tD(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(s,e,r):s instanceof tN?function(e,t,n){if(!tC(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tD(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(t_(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(s,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tA(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tA(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tr();return this.mutations.forEach(r=>{let s=e.get(r.key),i=s.overlayedDocument,a=this.applyToLocalView(i,s.mutatedFields);a=t.has(r.key)?null:a;let o=tS(i,a);null!==o&&n.set(r.key,o),i.isValidDocument()||i.convertToNoDocument(V.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ta())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>tb(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>tb(e,t))}}class tV{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||w();let r=ts,s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new tV(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,t){this.count=e,this.unchangedNames=t}}function tO(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case r.OK:return E.OK;case r.CANCELLED:return E.CANCELLED;case r.UNKNOWN:return E.UNKNOWN;case r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case r.INTERNAL:return E.INTERNAL;case r.UNAVAILABLE:return E.UNAVAILABLE;case r.UNAUTHENTICATED:return E.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case r.NOT_FOUND:return E.NOT_FOUND;case r.ALREADY_EXISTS:return E.ALREADY_EXISTS;case r.PERMISSION_DENIED:return E.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case r.ABORTED:return E.ABORTED;case r.OUT_OF_RANGE:return E.OUT_OF_RANGE;case r.UNIMPLEMENTED:return E.UNIMPLEMENTED;case r.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(s=r||(r={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return tq}static getOrCreateInstance(){return null===tq&&(tq=new tU),tq}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let tq=null,tz=new u.z8([4294967295,4294967295],0);function tB(e){let t=(new TextEncoder).encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function t$(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([s,i],0)]}class tK{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tQ(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new tQ(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new tQ(`Invalid padding when bitmap length is 0: ${t}`);this.yt=8*e.length-t,this.It=u.z8.fromNumber(this.yt)}Tt(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(tz)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}At(e){if(0===this.yt)return!1;let t=tB(e),[n,r]=t$(t);for(let e=0;e<this.hashCount;e++){let t=this.Tt(n,r,e);if(!this.Et(t))return!1}return!0}static create(e,t,n){let r=new Uint8Array(Math.ceil(e/8)),s=new tK(r,e%8==0?0:8-e%8,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.yt)return;let t=tB(e),[n,r]=t$(t);for(let e=0;e<this.hashCount;e++){let t=this.Tt(n,r,e);this.Rt(t)}}Rt(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class tQ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tG{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,tj.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tG(V.min(),r,new Y(x),e7,ta())}}class tj{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new tj(n,t,ta(),ta(),ta())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tH{constructor(e,t,n,r){this.vt=e,this.removedTargetIds=t,this.key=n,this.Pt=r}}class tW{constructor(e,t){this.targetId=e,this.bt=t}}class tX{constructor(e,t,n=es.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class tY{constructor(){this.Vt=0,this.St=t0(),this.Dt=es.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return 0!==this.Vt}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=ta(),t=ta(),n=ta();return this.St.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:w()}}),new tj(this.Dt,this.Ct,e,t,n)}$t(){this.xt=!1,this.St=t0()}Ft(e,t){this.xt=!0,this.St=this.St.insert(e,t)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class tJ{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=e7,this.jt=tZ(),this.zt=new Y(x)}Wt(e){for(let t of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(t,e.Pt):this.Jt(t,e.key,e.Pt);for(let t of e.removedTargetIds)this.Jt(t,e.key,e.Pt)}Yt(e){this.forEachTarget(e,t=>{let n=this.Xt(t);switch(e.state){case 0:this.Zt(t)&&n.Mt(e.resumeToken);break;case 1:n.qt(),n.Nt||n.$t(),n.Mt(e.resumeToken);break;case 2:n.qt(),n.Nt||this.removeTarget(t);break;case 3:this.Zt(t)&&(n.Ut(),n.Mt(e.resumeToken));break;case 4:this.Zt(t)&&(this.te(t),n.Mt(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Gt.forEach((e,n)=>{this.Zt(n)&&t(n)})}ee(e){var t;let n=e.targetId,r=e.bt.count,s=this.ne(n);if(s){let i=s.target;if(eY(i)){if(0===r){let e=new q(i.path);this.Jt(n,e,e_.newNoDocument(e,V.min()))}else 1===r||w()}else{let s=this.se(n);if(s!==r){let r=this.ie(e,s);0!==r&&(this.te(n),this.zt=this.zt.insert(n,2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch")),null===(t=tU.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,s,i,a,o,l;let u={localCacheCount:t,existenceFilterCount:n.count},h=n.unchangedNames;return h&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==h?void 0:h.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(a=null===(i=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===i?void 0:i.length)&&void 0!==a?a:0,padding:null!==(l=null===(o=null==h?void 0:h.bits)||void 0===o?void 0:o.padding)&&void 0!==l?l:0}),u}(r,s,e.bt))}}}}ie(e,t){let n,r;let{unchangedNames:s,count:i}=e.bt;if(!s||!s.bits)return 1;let{bits:{bitmap:a="",padding:o=0},hashCount:l=0}=s;try{n=el(a).toUint8Array()}catch(e){if(e instanceof er)return y("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{r=new tK(n,o,l)}catch(e){return y(e instanceof tQ?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===r.yt?1:i!==t-this.re(e.targetId,r)?2:0}re(e,t){let n=this.Kt.getRemoteKeysForTarget(e),r=0;return n.forEach(n=>{let s=this.Kt.oe(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.At(i)||(this.Jt(e,n,null),r++)}),r}ue(e){let t=new Map;this.Gt.forEach((n,r)=>{let s=this.ne(r);if(s){if(n.current&&eY(s.target)){let t=new q(s.target.path);null!==this.Qt.get(t)||this.ce(r,t)||this.Jt(r,t,e_.newNoDocument(t,e))}n.kt&&(t.set(r,n.Ot()),n.$t())}});let n=ta();this.jt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.ne(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Qt.forEach((t,n)=>n.setReadTime(e));let r=new tG(e,t,this.zt,this.Qt,n);return this.Qt=e7,this.jt=tZ(),this.zt=new Y(x),r}Ht(e,t){if(!this.Zt(e))return;let n=this.ce(e,t.key)?2:0;this.Xt(e).Ft(t.key,n),this.Qt=this.Qt.insert(t.key,t),this.jt=this.jt.insert(t.key,this.ae(t.key).add(e))}Jt(e,t,n){if(!this.Zt(e))return;let r=this.Xt(e);this.ce(e,t)?r.Ft(t,1):r.Bt(t),this.jt=this.jt.insert(t,this.ae(t).delete(e)),n&&(this.Qt=this.Qt.insert(t,n))}removeTarget(e){this.Gt.delete(e)}se(e){let t=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let t=this.Gt.get(e);return t||(t=new tY,this.Gt.set(e,t)),t}ae(e){let t=this.jt.get(e);return t||(t=new ee(x),this.jt=this.jt.insert(e,t)),t}Zt(e){let t=null!==this.ne(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}ne(e){let t=this.Gt.get(e);return t&&t.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new tY),this.Kt.getRemoteKeysForTarget(e).forEach(t=>{this.Jt(e,t,null)})}ce(e,t){return this.Kt.getRemoteKeysForTarget(e).has(t)}}function tZ(){return new Y(q.comparator)}function t0(){return new Y(q.comparator)}let t1={asc:"ASCENDING",desc:"DESCENDING"},t2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t4={and:"AND",or:"OR"};class t3{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function t9(e,t){return e.useProto3Json||null==t?t:{value:t}}function t8(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function t6(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function t5(e){return e||w(),V.fromTimestamp(function(e){let t=ea(e);return new F(t.seconds,t.nanos)}(e))}function t7(e,t){return new P(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function ne(e){let t=P.fromString(e);return nu(t)||w(),t}function nt(e,t){return t7(e.databaseId,t.path)}function nn(e,t){let n=ne(t);if(n.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new q(ni(n))}function nr(e,t){return t7(e.databaseId,t)}function ns(e){return new P(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ni(e){return e.length>4&&"documents"===e.get(4)||w(),e.popFirst(5)}function na(e,t,n){return{name:nt(e,t),fields:n.value.mapValue.fields}}function no(e){return{fieldPath:e.canonicalString()}}function nl(e){return U.fromServerFormat(e.fieldPath)}function nu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t,n,r,s=V.min(),i=V.min(),a=es.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new nh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.le=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){}_e(e,t){this.we(e,t),t.me()}we(e,t){if("nullValue"in e)this.ge(t,5);else if("booleanValue"in e)this.ge(t,10),t.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(t,15),t.ye(eo(e.integerValue));else if("doubleValue"in e){let n=eo(e.doubleValue);isNaN(n)?this.ge(t,13):(this.ge(t,15),j(n)?t.ye(0):t.ye(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ge(t,20),"string"==typeof n?t.pe(n):(t.pe(`${n.seconds||""}`),t.ye(n.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,t),this.Te(t);else if("bytesValue"in e)this.ge(t,30),t.Ee(el(e.bytesValue)),this.Te(t);else if("referenceValue"in e)this.Ae(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ge(t,45),t.ye(n.latitude||0),t.ye(n.longitude||0)}else"mapValue"in e?ek(e)?this.ge(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Te(t)):"arrayValue"in e?(this.ve(e.arrayValue,t),this.Te(t)):w()}Ie(e,t){this.ge(t,25),this.Pe(e,t)}Pe(e,t){t.pe(e)}Re(e,t){let n=e.fields||{};for(let e of(this.ge(t,55),Object.keys(n)))this.Ie(e,t),this.we(n[e],t)}ve(e,t){let n=e.values||[];for(let e of(this.ge(t,50),n))this.we(e,t)}Ae(e,t){this.ge(t,37),q.fromName(e).path.forEach(e=>{this.ge(t,60),this.Pe(e,t)})}ge(e,t){e.ye(t)}Te(e){e.ye(2)}}nd.be=new nd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.sn=new nm}addToCollectionParentIndex(e,t){return this.sn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(z.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(z.min())}updateCollectionGroup(e,t,n){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class nm{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ee(P.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ee(P.comparator)).toArray()}}new Uint8Array(0);class ng{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ng(e,ng.DEFAULT_COLLECTION_PERCENTILE,ng.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ng.DEFAULT_COLLECTION_PERCENTILE=10,ng.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ng.DEFAULT=new ng(41943040,ng.DEFAULT_COLLECTION_PERCENTILE,ng.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ng.DISABLED=new ng(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new np(0)}static kn(){return new np(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.changes=new e5(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,e_.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?K.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tA(n.mutation,e,en.empty(),F.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ta()).next(()=>t))}getLocalViewOfDocuments(e,t,n=ta()){let r=tr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tt();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ta()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=e7,i=tr(),a=tr();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tN)?s=s.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),tA(a.mutation,t,a.mutation.getFieldMask(),F.now())):i.set(t.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new nv(t,null!==(n=i.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tr(),r=new Y((e,t)=>e-t),s=ta();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let s of e)s.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=n.get(e)||en.empty();a=s.applyToLocalView(i,a),n.set(e,a);let o=(r.get(s.batchId)||ta()).add(e);r=r.insert(s.batchId,o)})}).next(()=>{let i=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tr();l.forEach(e=>{if(!s.has(e)){let r=tS(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,u))}return K.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{let i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):K.resolve(tr()),a=-1,o=s;return i.next(t=>K.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),s.get(t)?K.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,ta())).next(e=>({batchId:a,changes:tn(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(e=>{let t=tt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,s=tt();return this.indexManager.getCollectionParents(e,r).next(i=>K.forEach(i,i=>{var a;let o=(a=i.child(r),new eJ(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,e_.newInvalidDocument(r)))});let n=tt();return e.forEach((e,s)=>{let i=r.get(e);void 0!==i&&tA(i.mutation,s,en.empty(),F.now()),e8(t,s)&&(n=n.insert(e,s))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,t){return K.resolve(this.us.get(t))}saveBundleMetadata(e,t){return this.us.set(t.id,{id:t.id,version:t.version,createTime:t5(t.createTime)}),K.resolve()}getNamedQuery(e,t){return K.resolve(this.cs.get(t))}saveNamedQuery(e,t){return this.cs.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,r,s,i,a,o,l;let u,h=function(e){let t=ne(e);return 4===t.length?P.emptyPath():ni(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||w();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nl(e.unaryFilter.field);return eV.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nl(e.unaryFilter.field);return eV.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nl(e.unaryFilter.field);return eV.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=nl(e.unaryFilter.field);return eV.create(s,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t):void 0!==t.fieldFilter?eV.create(nl(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eM.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return w()}}(t.compositeFilter.op)):w()}(e);return n instanceof eM&&eO(t=n)&&eP(t)?n.getFilters():[n]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new eL(nl(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new eD(n,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new eD(n,t)}(c.endAt)),n=h,r=f,s=g,i=m,a=p,o=y,l=v,new eJ(n,r,s,i,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e2(t,t.limit,"L"):t}(t.bundledQuery),readTime:t5(t.readTime)}),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(){this.overlays=new Y(q.comparator),this.hs=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tr();return K.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.de(e,t,r)}),K.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.hs.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hs.delete(n)),K.resolve()}getOverlaysForCollection(e,t,n){let r=tr(),s=t.length+1,i=new q(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return K.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Y((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=tr(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tr(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return K.resolve(a)}de(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hs.get(r.largestBatchId).delete(n.key);this.hs.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new tM(t,n));let s=this.hs.get(t);void 0===s&&(s=ta(),this.hs.set(t,s)),this.hs.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.ls=new ee(nI.fs),this.ds=new ee(nI._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,t){let n=new nI(e,t);this.ls=this.ls.add(n),this.ds=this.ds.add(n)}ws(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gs(new nI(e,t))}ys(e,t){e.forEach(e=>this.removeReference(e,t))}ps(e){let t=new q(new P([])),n=new nI(t,e),r=new nI(t,e+1),s=[];return this.ds.forEachInRange([n,r],e=>{this.gs(e),s.push(e.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){let t=new q(new P([])),n=new nI(t,e),r=new nI(t,e+1),s=ta();return this.ds.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new nI(e,0),n=this.ls.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nI{constructor(e,t){this.key=e,this.Es=t}static fs(e,t){return q.comparator(e.key,t.key)||x(e.Es,t.Es)}static _s(e,t){return x(e.Es,t.Es)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.As=1,this.Rs=new ee(nI.fs)}checkEmpty(e){return K.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new tF(s,t,n,r);for(let t of(this.mutationQueue.push(i),r))this.Rs=this.Rs.add(new nI(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return K.resolve(i)}lookupMutationBatch(e,t){return K.resolve(this.vs(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Ps(t+1),r=n<0?0:n;return K.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(0===this.mutationQueue.length?-1:this.As-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nI(t,0),r=new nI(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,r],e=>{let t=this.vs(e.Es);s.push(t)}),K.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee(x);return t.forEach(e=>{let t=new nI(e,0),r=new nI(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],e=>{n=n.add(e.Es)})}),K.resolve(this.bs(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,s=n;q.isDocumentKey(s)||(s=s.child(""));let i=new nI(new q(s),0),a=new ee(x);return this.Rs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Es)),!0)},i),K.resolve(this.bs(a))}bs(e){let t=[];return e.forEach(e=>{let n=this.vs(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Vs(t.batchId,"removed")||w(),this.mutationQueue.shift();let n=this.Rs;return K.forEach(t.mutations,r=>{let s=new nI(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=n})}Dn(e){}containsKey(e,t){let n=new nI(t,0),r=this.Rs.firstAfterOrEqual(n);return K.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Vs(e,t){return this.Ps(e)}Ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}vs(e){let t=this.Ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.Ss=e,this.docs=new Y(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Ss(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return K.resolve(n?n.document.mutableCopy():e_.newInvalidDocument(t))}getEntries(e,t){let n=e7;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():e_.newInvalidDocument(e))}),K.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=e7,i=t.path,a=new q(i.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=q.comparator(e.documentKey,t.documentKey))?n:x(e.largestBatchId,t.largestBatchId)}(new z(a.readTime,a.key,-1),n)||(r.has(a.key)||e8(t,a))&&(s=s.insert(a.key,a.mutableCopy()))}return K.resolve(s)}getAllFromCollectionGroup(e,t,n,r){w()}Ds(e,t){return K.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nb(this)}getSize(e){return K.resolve(this.size)}}class nb extends ny{constructor(e){super(),this.rs=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.rs.addEntry(e,r)):this.rs.removeEntry(n)}),K.waitFor(t)}getFromCache(e,t){return this.rs.getEntry(e,t)}getAllFromCache(e,t){return this.rs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.persistence=e,this.Cs=new e5(e=>eW(e),eX),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.xs=0,this.Ns=new nC,this.targetCount=0,this.ks=np.Nn()}forEachTarget(e,t){return this.Cs.forEach((e,n)=>t(n)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.xs&&(this.xs=t),K.resolve()}$n(e){this.Cs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.ks=new np(t),this.highestTargetId=t),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,t){return this.$n(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.$n(t),K.resolve()}removeTargetData(e,t){return this.Cs.delete(t.target),this.Ns.ps(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,n){let r=0,s=[];return this.Cs.forEach((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Cs.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),K.waitFor(s).next(()=>r)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){let n=this.Cs.get(t)||null;return K.resolve(n)}addMatchingKeys(e,t,n){return this.Ns.ws(t,n),K.resolve()}removeMatchingKeys(e,t,n){this.Ns.ys(t,n);let r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),K.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ns.ps(t),K.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ns.Ts(t);return K.resolve(n)}containsKey(e,t){return K.resolve(this.Ns.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,t){var n;this.Ms={},this.overlays={},this.Os=new G(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new nk(this),this.indexManager=new nf,this.remoteDocumentCache=(n=e=>this.referenceDelegate.Bs(e),new nA(n)),this.serializer=new nc(t),this.Ls=new nE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ms[e.toKey()];return n||(n=new nS(t,this.referenceDelegate),this.Ms[e.toKey()]=n),n}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);let r=new n_(this.Os.next());return this.referenceDelegate.qs(),n(r).next(e=>this.referenceDelegate.Us(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ks(e,t){return K.or(Object.values(this.Ms).map(n=>()=>n.containsKey(e,t)))}}class n_ extends B{constructor(e){super(),this.currentSequenceNumber=e}}class nD{constructor(e){this.persistence=e,this.Gs=new nC,this.Qs=null}static js(e){return new nD(e)}get zs(){if(this.Qs)return this.Qs;throw w()}addReference(e,t,n){return this.Gs.addReference(n,t),this.zs.delete(n.toString()),K.resolve()}removeReference(e,t,n){return this.Gs.removeReference(n,t),this.zs.add(n.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.zs.add(t.toString()),K.resolve()}removeTarget(e,t){this.Gs.ps(t.targetId).forEach(e=>this.zs.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.zs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}qs(){this.Qs=new Set}Us(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.zs,n=>{let r=q.fromPath(n);return this.Ws(e,r).next(e=>{e||t.removeEntry(r,V.min())})}).next(()=>(this.Qs=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ws(e,t).next(e=>{e?this.zs.delete(t.toString()):this.zs.add(t.toString())})}Bs(e){return 0}Ws(e,t){return K.or([()=>K.resolve(this.Gs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ks(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Fi=r}static Bi(e,t){let n=ta(),r=ta();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new nR(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.Li=!1}initialize(e,t){this.qi=e,this.indexManager=t,this.Li=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ui(e,t).next(s=>s||this.Ki(e,t,r,n)).next(n=>n||this.Gi(e,t))}Ui(e,t){if(eZ(t))return K.resolve(null);let n=e1(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=e1(t=e2(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let s=ta(...r);return this.qi.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let i=this.Qi(t,r);return this.ji(t,i,s,n.readTime)?this.Ui(e,e2(t,null,"F")):this.zi(e,i,t,n)}))})))}Ki(e,t,n,r){return eZ(t)||r.isEqual(V.min())?this.Gi(e,t):this.qi.getDocuments(e,n).next(s=>{let i=this.Qi(t,s);return this.ji(t,i,n,r)?this.Gi(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),e9(t)),this.zi(e,i,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=V.fromTimestamp(1e9===r?new F(n+1,0):new F(n,r));return new z(s,q.empty(),-1)}(r,0)))})}Qi(e,t){let n=new ee(e6(e));return t.forEach((t,r)=>{e8(e,r)&&(n=n.add(r))}),n}ji(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Gi(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e9(t)),this.qi.getDocumentsMatchingQuery(e,t,z.min())}zi(e,t,n,r){return this.qi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,t,n,r){this.persistence=e,this.Wi=t,this.serializer=r,this.Hi=new Y(x),this.Ji=new e5(e=>eW(e),eX),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(n)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nw(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Hi))}}async function nF(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.Zi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let s=[],i=[],a=ta();for(let e of r)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({tr:e,removedBatchIds:s,addedBatchIds:i}))})})}function nV(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Fs.getLastRemoteSnapshotVersion(t))}async function nM(e,t,n){let r=e,s=r.Hi.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!Q(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(s.target)}function nP(e,t,n){let r=V.min(),s=ta();return e.persistence.runTransaction("Execute query","readonly",i=>(function(e,t,n){let r=e.Ji.get(n);return void 0!==r?K.resolve(e.Hi.get(r)):e.Fs.getTargetData(t,n)})(e,i,e1(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Fs.getMatchingKeysForTargetId(i,t.targetId).next(e=>{s=e})}).next(()=>e.Wi.getDocumentsMatchingQuery(i,t,n?r:V.min(),n?s:ta())).next(n=>{var r;let i;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),i=e.Yi.get(r)||V.min(),n.forEach((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)}),e.Yi.set(r,i),{documents:n,sr:s}}))}class nO{constructor(){this.activeTargetIds=to}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nU{constructor(){this.Wr=new nO,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,t,n){this.Hr[e]=t}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new nO,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.no))e(0)}eo(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.no))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nB=null;function n$(){return null===nB?nB=268435456+Math.round(2147483648*Math.random()):nB++,"0x"+nB.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nK={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nG="WebChannelConnection";class nj extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.wo=t+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,t,n,r,s){let i=n$(),a=this.Io(e,t);g("RestConnection",`Sending RPC '${e}' ${i}:`,a,n);let o={};return this.To(o,r,s),this.Eo(e,a,o,n).then(t=>(g("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw y("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",n),t})}Ao(e,t,n,r,s,i){return this.po(e,t,n,r,s)}To(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Io(e,t){let n=nK[e];return`${this.wo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,t,n,r){let s=n$();return new Promise((i,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();g(nG,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case u.jK.TIMEOUT:g(nG,`RPC '${e}' ${s} timed out`),a(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(g(nG,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new T(e,t.message))}else a(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g(nG,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(r);g(nG,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}Ro(e,t,n){let s=n$(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new u.zI({})),this.To(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=i.join("");g(nG,`Creating RPC '${e}' stream ${s}: ${h}`,l);let c=a.createWebChannel(h,l),d=!1,f=!1,m=new nQ({io:t=>{f?g(nG,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(d||(g(nG,`Opening RPC '${e}' stream ${s} transport.`),c.open(),d=!0),g(nG,`RPC '${e}' stream ${s} sending:`,t),c.send(t))},ro:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,u.ii.EventType.OPEN,()=>{f||g(nG,`RPC '${e}' stream ${s} transport opened.`)}),p(c,u.ii.EventType.CLOSE,()=>{f||(f=!0,g(nG,`RPC '${e}' stream ${s} transport closed`),m.fo())}),p(c,u.ii.EventType.ERROR,t=>{f||(f=!0,y(nG,`RPC '${e}' stream ${s} transport errored:`,t),m.fo(new T(E.UNAVAILABLE,"The operation could not be completed")))}),p(c,u.ii.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||w();let a=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(a){g(nG,`RPC '${e}' stream ${s} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return tO(t)}(t),i=a.message;void 0===n&&(n=E.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),f=!0,m.fo(new T(n,i)),c.close()}else g(nG,`RPC '${e}' stream ${s} received:`,i),m._o(i)}}),p(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?g(nG,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===u.kN.NOPROXY&&g(nG,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.lo()},0),m}}function nH(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nW(e){return new t3(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e,t,n=1e3,r=1.5,s=6e4){this.si=e,this.timerId=t,this.vo=n,this.Po=r,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();let t=Math.floor(this.Vo+this.No()),n=Math.max(0,Date.now()-this.Do),r=Math.max(0,t-n);r>0&&g("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(e,t,n,r,s,i,a,o){this.si=e,this.Mo=n,this.Oo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new nX(e,t)}qo(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&null===this.Fo&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,t){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,4!==e?this.Lo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(t)}Jo(){}auth(){this.state=1;let e=this.Yo(this.$o),t=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.$o===t&&this.Xo(e,n)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Zo(e)})})}Xo(e,t){let n=this.Yo(this.$o);this.stream=this.tu(e,t),this.stream.oo(()=>{n(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(e=>{n(()=>this.Zo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return t=>{this.si.enqueueAndForget(()=>this.$o===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nJ extends nY{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}tu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.Lo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,s;t.targetChange;let i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:w(),a=t.targetChange.targetIds||[],o=(s=t.targetChange.resumeToken,e.useProto3Json?(void 0===s||"string"==typeof s||w(),es.fromBase64String(s||"")):(void 0===s||s instanceof Uint8Array||w(),es.fromUint8Array(s||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:tO(e.code);return new T(t,e.message||"")}(l);n=new tX(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let s=nn(e,r.document.name),i=t5(r.document.updateTime),a=r.document.createTime?t5(r.document.createTime):V.min(),o=new eN({mapValue:{fields:r.document.fields}}),l=e_.newFoundDocument(s,i,a,o),u=r.targetIds||[],h=r.removedTargetIds||[];n=new tH(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let s=nn(e,r.document),i=r.readTime?t5(r.readTime):V.min(),a=e_.newNoDocument(s,i),o=r.removedTargetIds||[];n=new tH([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let s=nn(e,r.document),i=r.removedTargetIds||[];n=new tH([],i,s,null)}else{if(!("filter"in t))return w();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:s}=e,i=new tP(r,s),a=e.targetId;n=new tW(a,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return V.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?t5(t.readTime):V.min()}(e);return this.listener.eu(t,n)}nu(e){let t={};t.database=ns(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=eY(r)?{documents:{documents:[nr(e,r.path)]}}:{query:function(e,t){var n,r;let s={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(s.parent=nr(e,i),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=nr(e,i.popLast()),s.structuredQuery.from=[{collectionId:i.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof eV?function(e){if("=="===e.op){if(eS(e.value))return{unaryFilter:{field:no(e.field),op:"IS_NAN"}};if(eI(e.value))return{unaryFilter:{field:no(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eS(e.value))return{unaryFilter:{field:no(e.field),op:"IS_NOT_NAN"}};if(eI(e.value))return{unaryFilter:{field:no(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:no(e.field),op:t2[e.op],value:e.value}}}(t):t instanceof eM?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:t4[t.op],filters:n}}}(t):w()}(eM.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:no(e.field),direction:t1[e.dir]}))}(t.orderBy);o&&(s.structuredQuery.orderBy=o);let l=t9(e,t.limit);return null!==l&&(s.structuredQuery.limit=l),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),s}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=t6(e,t.resumeToken);let r=t9(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(V.min())>0){n.readTime=t8(e,t.snapshotVersion.toTimestamp());let r=t9(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.zo(t)}su(e){let t={};t.database=ns(this.serializer),t.removeTarget=e,this.zo(t)}}class nZ extends nY{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||w(),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||w(),t.map(e=>{let t;return(t=e.updateTime?t5(e.updateTime):t5(n)).isEqual(V.min())&&(t=t5(n)),new tE(t,e.transformResults||[])})):[]),s=t5(e.commitTime);return this.listener.uu(s,r)}return e.writeResults&&0!==e.writeResults.length&&w(),this.iu=!0,this.listener.cu()}au(){let e={};e.database=ns(this.serializer),this.zo(e)}ou(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tk)r={update:na(e,t.key,t.value)};else if(t instanceof tx)r={delete:nt(e,t.key)};else if(t instanceof tN)r={update:na(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tL))return w();r={verify:nt(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof td)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tf)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tg)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ty)return{fieldPath:t.field.canonicalString(),increment:n.wt};throw w()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:t8(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:w()),r})(this.serializer,e))};this.zo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,t,n){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.po(e,t,n,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}Ao(e,t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Ao(e,t,n,s,i,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.hu=!0}}class n1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){0===this.du&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){"Online"===this.state?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,"Online"===e&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(p(t),this.wu=!1):g("OnlineStateTracker",t)}Iu(){null!==this._u&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(e=>{n.enqueueAndForget(async()=>{rt(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.Au.add(4),await n3(e),e.Pu.set("Unknown"),e.Au.delete(4),await n4(e)}(this))})}),this.Pu=new n1(n,r)}}async function n4(e){if(rt(e))for(let t of e.Ru)await t(!0)}async function n3(e){for(let t of e.Ru)await t(!1)}function n9(e,t){e.Eu.has(t.targetId)||(e.Eu.set(t.targetId,t),re(e)?n7(e):rp(e).Uo()&&n6(e,t))}function n8(e,t){let n=rp(e);e.Eu.delete(t),n.Uo()&&n5(e,t),0===e.Eu.size&&(n.Uo()?n.Qo():rt(e)&&e.Pu.set("Unknown"))}function n6(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(V.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rp(e).nu(t)}function n5(e,t){e.bu.Lt(t),rp(e).su(t)}function n7(e){e.bu=new tJ({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),rp(e).start(),e.Pu.mu()}function re(e){return rt(e)&&!rp(e).qo()&&e.Eu.size>0}function rt(e){return 0===e.Au.size}async function rn(e){e.Eu.forEach((t,n)=>{n6(e,t)})}async function rr(e,t){e.bu=void 0,re(e)?(e.Pu.pu(t),n7(e)):e.Pu.set("Unknown")}async function rs(e,t,n){if(e.Pu.set("Online"),t instanceof tX&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.Eu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Eu.delete(r),e.bu.removeTarget(r))}(e,t)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ri(e,n)}else if(t instanceof tH?e.bu.Wt(t):t instanceof tW?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(V.min()))try{let t=await nV(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.bu.ue(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let s=e.Eu.get(r);s&&e.Eu.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.Eu.get(t);if(!r)return;e.Eu.set(t,r.withResumeToken(es.EMPTY_BYTE_STRING,r.snapshotVersion)),n5(e,t);let s=new nh(r.target,t,n,r.sequenceNumber);n6(e,s)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await ri(e,t)}}async function ri(e,t,n){if(!Q(t))throw t;e.Au.add(1),await n3(e),e.Pu.set("Offline"),n||(n=()=>nV(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await n4(e)})}function ra(e,t){return t().catch(n=>ri(e,n,t))}async function ro(e){let t=ry(e),n=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;rt(e)&&e.Tu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Tu.length&&t.Qo();break}n=r.batchId,function(e,t){e.Tu.push(t);let n=ry(e);n.Uo()&&n.ru&&n.ou(t.mutations)}(e,r)}catch(t){await ri(e,t)}rl(e)&&ru(e)}function rl(e){return rt(e)&&!ry(e).qo()&&e.Tu.length>0}function ru(e){ry(e).start()}async function rh(e){ry(e).au()}async function rc(e){let t=ry(e);for(let n of e.Tu)t.ou(n.mutations)}async function rd(e,t,n){let r=e.Tu.shift(),s=tV.from(r,t,n);await ra(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await ro(e)}async function rf(e,t){t&&ry(e).ru&&await async function(e,t){var n;if(function(e){switch(e){default:return w();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}(n=t.code)&&n!==E.ABORTED){let n=e.Tu.shift();ry(e).Go(),await ra(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ro(e)}}(e,t),rl(e)&&ru(e)}async function rm(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let n=rt(e);e.Au.add(3),await n3(e),n&&e.Pu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Au.delete(3),await n4(e)}async function rg(e,t){t?(e.Au.delete(2),await n4(e)):t||(e.Au.add(2),await n3(e),e.Pu.set("Unknown"))}function rp(e){var t,n,r;return e.Vu||(e.Vu=(t=e.datastore,n=e.asyncQueue,r={oo:rn.bind(null,e),co:rr.bind(null,e),eu:rs.bind(null,e)},t.lu(),new nJ(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Ru.push(async t=>{t?(e.Vu.Go(),re(e)?n7(e):e.Pu.set("Unknown")):(await e.Vu.stop(),e.bu=void 0)})),e.Vu}function ry(e){var t,n,r;return e.Su||(e.Su=(t=e.datastore,n=e.asyncQueue,r={oo:rh.bind(null,e),co:rf.bind(null,e),cu:rc.bind(null,e),uu:rd.bind(null,e)},t.lu(),new nZ(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Ru.push(async t=>{t?(e.Su.Go(),await ro(e)):(await e.Su.stop(),e.Tu.length>0&&(g("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,s){let i=Date.now()+n,a=new rv(e,t,i,r,s);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rw(e,t){if(p("AsyncQueue",`${t}: ${e}`),Q(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.comparator=e?(t,n)=>e(t,n)||q.comparator(t.key,n.key):(e,t)=>q.comparator(e.key,t.key),this.keyedMap=tt(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new rE(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rE)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new rE;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.Du=new Y(q.comparator)}track(e){let t=e.doc.key,n=this.Du.get(t);n?0!==e.type&&3===n.type?this.Du=this.Du.insert(t,e):3===e.type&&1!==n.type?this.Du=this.Du.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Du=this.Du.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Du=this.Du.remove(t):1===e.type&&2===n.type?this.Du=this.Du.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):w():this.Du=this.Du.insert(t,e)}Cu(){let e=[];return this.Du.inorderTraversal((t,n)=>{e.push(n)}),e}}class rC{constructor(e,t,n,r,s,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,s){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new rC(e,t,rE.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e4(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.xu=void 0,this.listeners=[]}}class rS{constructor(){this.queries=new e5(e=>e3(e),e4),this.onlineState="Unknown",this.Nu=new Set}}async function rA(e,t){let n=t.query,r=!1,s=e.queries.get(n);if(s||(r=!0,s=new rI),r)try{s.xu=await e.onListen(n)}catch(n){let e=rw(n,`Initialization of query '${e9(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,s),s.listeners.push(t),t.ku(e.onlineState),s.xu&&t.Mu(s.xu)&&r_(e)}async function rb(e,t){let n=t.query,r=!1,s=e.queries.get(n);if(s){let e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function rk(e,t){let n=!1;for(let r of t){let t=r.query,s=e.queries.get(t);if(s){for(let e of s.listeners)e.Mu(r)&&(n=!0);s.xu=r}}n&&r_(e)}function rN(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function r_(e){e.Nu.forEach(e=>{e.next()})}class rD{constructor(e,t,n){this.query=e,this.Ou=t,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=n||{}}Mu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rC(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.qu(e),t=!0),this.Fu=e,t}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let t=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),t=!0),t}Lu(e,t){return!e.fromCache||(!this.options.Uu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Bu(e){if(e.docChanges.length>0)return!0;let t=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}qu(e){e=rC.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.key=e}}class rx{constructor(e){this.key=e}}class rL{constructor(e,t){this.query=e,this.Ju=t,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=ta(),this.mutatedKeys=ta(),this.Zu=e6(e),this.tc=new rE(this.Zu)}get ec(){return this.Ju}nc(e,t){let n=t?t.sc:new rT,r=t?t.tc:this.tc,s=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=e8(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.ic(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Zu(h,o)>0||l&&0>this.Zu(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{tc:i,sc:n,ji:a,mutatedKeys:s}}ic(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;let s=e.sc.Cu();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return n(e)-n(t)})(e.type,t.type)||this.Zu(e.doc,t.doc)),this.rc(n);let i=t?this.oc():[],a=0===this.Xu.size&&this.current?1:0,o=a!==this.Yu;return(this.Yu=a,0!==s.length||o)?{snapshot:new rC(this.query,e.tc,r,s,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),uc:i}:{uc:i}}ku(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tc:this.tc,sc:new rT,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(e=>this.Ju=this.Ju.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ju=this.Ju.delete(e)),this.current=e.current)}oc(){if(!this.current)return[];let e=this.Xu;this.Xu=ta(),this.tc.forEach(e=>{this.cc(e.key)&&(this.Xu=this.Xu.add(e.key))});let t=[];return e.forEach(e=>{this.Xu.has(e)||t.push(new rx(e))}),this.Xu.forEach(n=>{e.has(n)||t.push(new rR(n))}),t}ac(e){this.Ju=e.sr,this.Xu=ta();let t=this.nc(e.documents);return this.applyChanges(t,!0)}hc(){return rC.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,0===this.Yu,this.hasCachedResults)}}class rF{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rV{constructor(e){this.key=e,this.lc=!1}}class rM{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.fc={},this.dc=new e5(e=>e3(e),e4),this._c=new Map,this.wc=new Set,this.mc=new Y(q.comparator),this.gc=new Map,this.yc=new nC,this.Ic={},this.Tc=new Map,this.Ec=np.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return!0===this.Ac}}async function rP(e,t){let n,r;let s=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=rz.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=r0.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=r$.bind(null,t),t.fc.eu=rk.bind(null,t.eventManager),t.fc.vc=rN.bind(null,t.eventManager),t}(e),i=s.dc.get(t);if(i)n=i.targetId,s.sharedClientState.addLocalQueryTarget(n),r=i.view.hc();else{let e=await function(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Fs.getTargetData(e,t).next(s=>s?(r=s,K.resolve(r)):n.Fs.allocateTargetId(e).next(s=>(r=new nh(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Fs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.Hi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(e.targetId,e),n.Ji.set(t,e.targetId)),e})}(s.localStore,e1(t)),i=s.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await rO(s,t,n,"current"===i,e.resumeToken),s.isPrimaryClient&&n9(s.remoteStore,e)}return r}async function rO(e,t,n,r,s){e.Rc=(t,n,r)=>(async function(e,t,n,r){let s=t.view.nc(n);s.ji&&(s=await nP(e.localStore,t.query,!1).then(({documents:e})=>t.view.nc(e,s)));let i=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i);return rX(e,t.targetId,a.uc),a.snapshot})(e,t,n,r);let i=await nP(e.localStore,t,!0),a=new rL(t,i.sr),o=a.nc(i.documents),l=tj.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),u=a.applyChanges(o,e.isPrimaryClient,l);rX(e,n,u.uc);let h=new rF(t,n,a);return e.dc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function rU(e,t){let n=e.dc.get(t),r=e._c.get(n.targetId);if(r.length>1)return e._c.set(n.targetId,r.filter(e=>!e4(e,t))),void e.dc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await nM(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),n8(e.remoteStore,n.targetId),rH(e,n.targetId)}).catch($)):(rH(e,n.targetId),await nM(e.localStore,n.targetId,!0))}async function rq(e,t,n){let r=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=rK.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rQ.bind(null,t),t}(e);try{var s,i;let e;let a=await function(e,t){let n,r;let s=F.now(),i=t.reduce((e,t)=>e.add(t.key),ta());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=e7,l=ta();return e.Xi.getEntries(a,i).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let i=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),s=tc(r.transform,e||null);null!=s&&(null===n&&(n=eN.empty()),n.set(r.field,s))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&i.push(new tN(e.key,t,function e(t){let n=[];return W(t.fields,(t,r)=>{let s=new U([t]);if(eA(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(s);else for(let e of t)n.push(s.child(e))}else n.push(s)}),new en(n)}(t.value.mapValue),tT.exists(!0)))}return e.mutationQueue.addMutationBatch(a,s,i,t)}).next(t=>{r=t;let s=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,s)})}).then(()=>({batchId:r.batchId,changes:tn(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(a.batchId),s=r,i=a.batchId,(e=s.Ic[s.currentUser.toKey()])||(e=new Y(x)),e=e.insert(i,n),s.Ic[s.currentUser.toKey()]=e,await rJ(r,a.changes),await ro(r.remoteStore)}catch(t){let e=rw(t,"Failed to persist write");n.reject(e)}}async function rz(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,s=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var i;let a,o;let l=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Hi;let u=[];t.targetChanges.forEach((i,a)=>{var o;let l=s.get(a);if(!l)return;u.push(n.Fs.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.Fs.addMatchingKeys(e,i.addedDocuments,a)));let h=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(es.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,r)),s=s.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)&&u.push(n.Fs.updateTargetData(e,h))});let h=e7,c=ta();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((i=t.documentUpdates,a=ta(),o=ta(),i.forEach(e=>a=a.add(e)),l.getEntries(e,a).next(e=>{let t=e7;return i.forEach((n,r)=>{let s=e.get(n);r.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(V.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!s.isValidDocument()||r.version.compareTo(s.version)>0||0===r.version.compareTo(s.version)&&s.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",r.version)}),{er:t,nr:o}})).next(e=>{h=e.er,c=e.nr})),!r.isEqual(V.min())){let t=n.Fs.getLastRemoteSnapshotVersion(e).next(t=>n.Fs.setTargetsMetadata(e,e.currentSequenceNumber,r));u.push(t)}return K.waitFor(u).next(()=>l.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(n.Hi=s,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.gc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||w(),t.addedDocuments.size>0?r.lc=!0:t.modifiedDocuments.size>0?r.lc||w():t.removedDocuments.size>0&&(r.lc||w(),r.lc=!1))}),await rJ(e,n,t)}catch(e){await $(e)}}function rB(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let e=[];r.dc.forEach((n,r)=>{let s=r.view.ku(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(let e of n.listeners)e.ku(t)&&(r=!0)}),r&&r_(n)}(r.eventManager,t),e.length&&r.fc.eu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function r$(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let s=r.gc.get(t),i=s&&s.key;if(i){let e=new Y(q.comparator);e=e.insert(i,e_.newNoDocument(i,V.min()));let n=ta().add(i),s=new tG(V.min(),new Map,new Y(x),e,n);await rz(r,s),r.mc=r.mc.remove(i),r.gc.delete(t),rY(r)}else await nM(r.localStore,t,!1).then(()=>rH(r,t,n)).catch($)}async function rK(e,t){var n;let r=t.batch.batchId;try{let s=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let s=n.batch,i=s.keys(),a=K.resolve();return i.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let i=n.docVersions.get(e);null!==i||w(),0>t.version.compareTo(i)&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,s))})(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ta();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});rj(e,r,null),rG(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await rJ(e,s)}catch(e){await $(e)}}async function rQ(e,t,n){var r;try{let s=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||w(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});rj(e,t,n),rG(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await rJ(e,s)}catch(e){await $(e)}}function rG(e,t){(e.Tc.get(t)||[]).forEach(e=>{e.resolve()}),e.Tc.delete(t)}function rj(e,t,n){let r=e,s=r.Ic[r.currentUser.toKey()];if(s){let e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.Ic[r.currentUser.toKey()]=s}}function rH(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e._c.get(t)))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(t=>{e.yc.containsKey(t)||rW(e,t)})}function rW(e,t){e.wc.delete(t.path.canonicalString());let n=e.mc.get(t);null!==n&&(n8(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),rY(e))}function rX(e,t,n){for(let r of n)r instanceof rR?(e.yc.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(g("SyncEngine","New document in limbo: "+n),e.wc.add(r),rY(e))}(e,r)):r instanceof rx?(g("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||rW(e,r.key)):w()}function rY(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){var t;let n=e.wc.values().next().value;e.wc.delete(n);let r=new q(P.fromString(n)),s=e.Ec.next();e.gc.set(s,new rV(r)),e.mc=e.mc.insert(r,s),n9(e.remoteStore,new nh(e1((t=r.path,new eJ(t))),s,"TargetPurposeLimboResolution",G.ct))}}async function rJ(e,t,n){let r=[],s=[],i=[];e.dc.isEmpty()||(e.dc.forEach((a,o)=>{i.push(e.Rc(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=nR.Bi(o.targetId,t);s.push(e)}}))}),await Promise.all(i),e.fc.eu(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>K.forEach(t,t=>K.forEach(t.$i,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>K.forEach(t.Fi,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Q(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.Hi.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Hi=n.Hi.insert(t,s)}}}(e.localStore,s))}async function rZ(e,t){let n=e;if(!n.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let e=await nF(n.localStore,t);n.currentUser=t,n.Tc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.Tc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await rJ(n,e.tr)}}function r0(e,t){let n=e.gc.get(t);if(n&&n.lc)return ta().add(n.key);{let n=ta(),r=e._c.get(t);if(!r)return n;for(let t of r){let r=e.dc.get(t);n=n.unionWith(r.view.ec)}return n}}class r1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nW(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,n,r,s;return t=this.persistence,n=new nx,r=e.initialUser,s=this.serializer,new nL(t,n,r,s)}createPersistence(e){return new nN(nD.js,this.serializer)}createSharedClientState(e){return new nU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class r2{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rB(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=rZ.bind(null,this.syncEngine),await rg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rS}createDatastore(e){var t,n,r;let s=nW(e.databaseInfo.databaseId),i=(t=e.databaseInfo,new nj(t));return n=e.authCredentials,r=e.appCheckCredentials,new n0(n,r,i,s)}createRemoteStore(e){var t,n,r,s,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>rB(this.syncEngine,e,0),i=nz.D()?new nz:new nq,new n2(t,n,r,s,i)}createSyncEngine(e,t){return function(e,t,n,r,s,i,a){let o=new rM(e,t,n,r,s,i);return a&&(o.Ac=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.Au.add(5),await n3(e),e.vu.shutdown(),e.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=c.UNAUTHENTICATED,this.clientId=R.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rw(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function r9(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nF(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function r8(e,t){e.asyncQueue.verifyOperationInProgress();let n=await r6(e);g("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>rm(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rm(t.remoteStore,n)),e._onlineComponents=t}async function r6(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await r9(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;y("Error using user provided cache. Falling back to memory cache: "+t),await r9(e,new r1)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await r9(e,new r1)}return e._offlineComponents}async function r5(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await r8(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await r8(e,new r2))),e._onlineComponents}async function r7(e){let t=await r5(e),n=t.eventManager;return n.onListen=rP.bind(null,t.syncEngine),n.onUnlisten=rU.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let se=new Map;function st(e){if(!q.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sn(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":w()}function sr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=sn(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ss({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ss(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"firstParty":return new N(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=se.get(e);t&&(g("ComponentProvider","Removing Datastore"),se.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sa(this.firestore,e,this._key)}}class so{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new so(this.firestore,e,this._query)}}class sl extends so{constructor(e,t,n){super(e,t,new eJ(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new sa(this.firestore,null,new q(e))}withConverter(e){return new sl(this.firestore,e,this._path)}}function su(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=R.A()),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function doc() cannot be called with an empty ${t}.`)}(0,"path",t),e instanceof si){let r=P.fromString(t,...n);return st(r),new sa(e,null,new q(r))}{if(!(e instanceof sa||e instanceof sl))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(P.fromString(t,...n));return st(r),new sa(e.firestore,e instanceof sl?e.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new nX(this,"async_queue_retry"),this.Yc=()=>{let e=nH();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Lo.ko()};let e=nH();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;let t=nH();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});let t=new C;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Q(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){let t=this.Kc.then(()=>(this.Wc=!0,e().catch(e=>{let t;this.zc=e,this.Wc=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw p("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Wc=!1,e))));return this.Kc=t,t}enqueueAfterDelay(e,t,n){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);let r=rv.createAndSchedule(this,e,t,n,e=>this.ea(e));return this.jc.push(r),r}Xc(){this.zc&&w()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(let t of this.jc)if(t.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{for(let t of(this.jc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.jc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){let t=this.jc.indexOf(e);this.jc.splice(t,1)}}class sc extends si{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sm(this),this._firestoreClient.terminate()}}function sd(e,t){let n="object"==typeof e?e:(0,i.Mq)(),r=(0,i.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n,r={}){var s;let i=(e=sr(e,si))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=c.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(i)}e._authCredentials=new A(new I(t,n))}}(r,...e)}return r}function sf(e){return e._firestoreClient||sm(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sm(e){var t,n,r,s,i,a;let o=e._freezeSettings(),l=(s=e._databaseId,i=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new ed(s,i,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));e._firestoreClient=new r3(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sg(es.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sg(es.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sw=/^__.*__$/;class sE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tN(e,this.data,this.fieldMask,t,this.fieldTransforms):new tk(e,this.data,t,this.fieldTransforms)}}function sT(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class sC{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new sC(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.la(e),r}fa(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ca({path:n,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return sN(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(0===e.length)throw this._a("Document fields must not be empty");if(sT(this.ua)&&sw.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class sI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||nW(e)}ga(e,t,n,r=!1){return new sC({ua:e,methodName:t,ma:n,path:U.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sS(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof F||e instanceof sv||e instanceof sg||e instanceof sa||e instanceof sy)}function sA(e,t,n){if(!sS(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=sn(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}let sb=RegExp("[~\\*/\\[\\]]");function sk(e,t,n){if(t.search(sb)>=0)throw sN(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sp(...t.split("."))._internalPath}catch(r){throw sN(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sN(e,t,n,r,s){let i=r&&!r.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sa(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sR("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sD extends s_{data(){return super.data()}}function sR(e,t){return"string"==typeof t?sk(e,t):t instanceof sp?t._internalPath:t._delegate._internalPath}class sx{convertValue(e,t="none"){switch(eg(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(el(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return W(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new sv(eo(e.latitude),eo(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eh(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ec(e));default:return null}}convertTimestamp(e){let t=ea(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=P.fromString(e);nu(n)||w();let r=new ef(n.get(1),n.get(3)),s=new q(n.popFirst(5));return r.isEqual(t)||p(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sF extends s_{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new sV(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(sR("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class sV extends sF{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(e){e=sr(e,sa);let t=sr(e.firestore,sc);return(function(e,t,n={}){let r=new C;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){var i;let a=new r4({next:i=>{t.enqueueAndForget(()=>rb(e,o));let a=i.docs.has(n);!a&&i.fromCache?s.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new rD((i=n.path,new eJ(i)),a,{includeMetadataChanges:!0,Uu:!0});return rA(e,o)})(await r7(e),e.asyncQueue,t,n,r)),r.promise})(sf(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),s=new sP(e);return new sF(e,s,t._key,r,new sL(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}class sP extends sx{constructor(e){super(),this.firestore=e}convertBytes(e){return new sg(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new sa(this.firestore,null,t)}}function sO(e,t,n){var r,s;e=sr(e,sa);let i=sr(e.firestore,sc),a=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return s=[(function(e,t,n,r,s,i={}){let a,o;let u=e.ga(i.merge||i.mergeFields?2:0,t,n,s);sA("Data must be an object, but it was:",u,r);let h=function e(t,n){let r={};return X(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):W(t,(t,s)=>{let i=function t(n,r){if(sS(n=(0,l.m9)(n)))return sA("Unsupported field value:",r,n),e(n,r);if(n instanceof sy)return function(e,t){if(!sT(t.ua))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(n,r),null;if(void 0===n&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),n instanceof Array){if(r.settings.ha&&4!==r.ua)throw r._a("Nested arrays are not supported");return function(e,n){let r=[],s=0;for(let i of e){let e=t(i,n.da(s));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),s++}return{arrayValue:{values:r}}}(n,r)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,s;return n=t.serializer,"number"==typeof(s=r=e)&&Number.isInteger(s)&&!j(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER?tu(r):tl(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=F.fromDate(e);return{timestampValue:t8(t.serializer,n)}}if(e instanceof F){let n=new F(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:t8(t.serializer,n)}}if(e instanceof sv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sg)return{bytesValue:t6(t.serializer,e._byteString)};if(e instanceof sa){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:t7(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${sn(e)}`)}(n,r)}(s,n.aa(t));null!=i&&(r[t]=i)}),{mapValue:{fields:r}}}(r,u);if(i.merge)a=new en(u.fieldMask),o=u.fieldTransforms;else if(i.mergeFields){let e=[];for(let r of i.mergeFields){let s=function(e,t,n){if((t=(0,l.m9)(t))instanceof sp)return t._internalPath;if("string"==typeof t)return sk(e,t);throw sN("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,r,n);if(!u.contains(s))throw new T(E.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,s)||e.push(s)}a=new en(e),o=u.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=u.fieldTransforms;return new sE(new eN(h),a,o)})(function(e){let t=e._freezeSettings(),n=nW(e._databaseId);return new sI(e._databaseId,!!t.ignoreUndefinedProperties,n)}(i),"setDoc",e._key,a,null!==e.converter,n).toMutation(e._key,tT.none())],function(e,t){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>rq(await r5(e).then(e=>e.syncEngine),t,n)),n.promise}(sf(i),s)}!function(e,t=!0){d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let s=e.getProvider("app").getImmediate(),i=new sc(new b(e.getProvider("auth-internal")),new D(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ef(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(h,"3.11.0",void 0),(0,i.KN)(h,"3.11.0","esm2017")}()}}]);