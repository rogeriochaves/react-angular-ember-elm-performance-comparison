!function(){"use strict";function e(){}function t(t,n){var o=P,r=void 0,i=void 0,l=void 0,a=void 0;for(a=arguments.length;a-- >2;)M.push(arguments[a]);for(n&&null!=n.children&&(M.length||M.push(n.children),delete n.children);M.length;)if((i=M.pop())&&void 0!==i.pop)for(a=i.length;a--;)M.push(i[a]);else i!==!0&&i!==!1||(i=null),(l="function"!=typeof t)&&(null==i?i="":"number"==typeof i?i+="":"string"!=typeof i&&(l=!1)),l&&r?o[o.length-1]+=i:o===P?o=[i]:o.push(i),r=l;var s=new e;return s.nodeName=t,s.children=o,s.attributes=null==n?void 0:n,s.key=null==n?void 0:n.key,void 0!==B.vnode&&B.vnode(s),s}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e){!e._dirty&&(e._dirty=!0)&&1==H.push(e)&&(B.debounceRendering||setTimeout)(r)}function r(){var e=void 0,t=H;for(H=[];e=t.pop();)e._dirty&&x(e)}function i(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&l(e,t.nodeName):n||e._componentConstructor===t.nodeName}function l(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function a(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);return t}function s(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function c(e){e.parentNode&&e.parentNode.removeChild(e)}function u(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"===(void 0===o?"undefined":z(o))){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var l in o)e.style[l]="number"==typeof o[l]&&I.test(l)===!1?o[l]+"px":o[l]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,p,a):e.removeEventListener(t,p,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)d(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var s=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||o===!1?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function d(e,t,n){try{e[t]=n}catch(e){}}function p(e){return this._listeners[e.type](B.event&&B.event(e)||e)}function f(){for(var e=void 0;e=G.pop();)B.afterMount&&B.afterMount(e),e.componentDidMount&&e.componentDidMount()}function h(e,t,n,o,r,i){Q++||(X=null!=r&&void 0!==r.ownerSVGElement,Y=null!=e&&!(V in e));var l=v(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--Q||(Y=!1,i||f()),l}function v(e,t,n,o,r){var i=e,a=X;if(null==t&&(t=""),"string"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),y(e,!0))),i[V]=!0,i;if("function"==typeof t.nodeName)return N(e,t,n,o);if(X="svg"===t.nodeName||"foreignObject"!==t.nodeName&&X,(!e||!l(e,t.nodeName+""))&&(i=s(t.nodeName+"",X),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),y(e,!0)}var c=i.firstChild,u=i[V]||(i[V]={}),d=t.children;return!Y&&d&&1===d.length&&"string"==typeof d[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=d[0]&&(c.nodeValue=d[0]):(d&&d.length||null!=c)&&m(i,d,n,o,Y||null!=u.dangerouslySetInnerHTML),b(i,t.attributes,u),X=a,i}function m(e,t,n,o,r){var l=e.childNodes,a=[],s={},u=0,d=0,p=l.length,f=0,h=t?t.length:0,m=void 0,g=void 0,b=void 0,_=void 0;if(0!==p)for(var C=0;C<p;C++){var w=l[C],S=w[V],x=h&&S?w._component?w._component.__key:S.key:null;null!=x?(u++,s[x]=w):(S||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(a[f++]=w)}if(0!==h)for(var N=0;N<h;N++){b=t[N],_=null;var k=b.key;if(null!=k)u&&void 0!==s[k]&&(_=s[k],s[k]=void 0,u--);else if(!_&&d<f)for(m=d;m<f;m++)if(void 0!==a[m]&&i(g=a[m],b,r)){_=g,a[m]=void 0,m===f-1&&f--,m===d&&d++;break}_=v(_,b,n,o),_&&_!==e&&(N>=p?e.appendChild(_):_!==l[N]&&(_===l[N+1]?c(l[N]):e.insertBefore(_,l[N]||null)))}if(u)for(var T in s)void 0!==s[T]&&y(s[T],!1);for(;d<=f;)void 0!==(_=a[f--])&&y(_,!1)}function y(e,t){var n=e._component;n?k(n):(null!=e[V]&&e[V].ref&&e[V].ref(null),t!==!1&&null!=e[V]||c(e),g(e))}function g(e){for(e=e.lastChild;e;){var t=e.previousSibling;y(e,!0),e=t}}function b(e,t,n){var o=void 0;for(o in n)t&&null!=t[o]||null==n[o]||u(e,o,n[o],n[o]=void 0,X);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||u(e,o,n[o],n[o]=t[o],X)}function _(e){var t=e.constructor.name;(Z[t]||(Z[t]=[])).push(e)}function C(e,t,n){var o=Z[e.name],r=void 0;if(e.prototype&&e.prototype.render?(r=new e(t,n),T.call(r,t,n)):(r=new T(t,n),r.constructor=e,r.render=w),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function w(e,t,n){return this.constructor(e,n)}function S(e,t,n,r,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,n!==W&&(n!==j&&B.syncComponentUpdates===!1&&e.base?o(e):x(e,j,i)),e.__ref&&e.__ref(e))}function x(e,t,o,r){if(!e._disable){var i=e.props,l=e.state,s=e.context,c=e.prevProps||i,u=e.prevState||l,d=e.prevContext||s,p=e.base,v=e.nextBase,m=p||v,g=e._component,b=!1,_=void 0,w=void 0,N=void 0;if(p&&(e.props=c,e.state=u,e.context=d,t!==R&&e.shouldComponentUpdate&&e.shouldComponentUpdate(i,l,s)===!1?b=!0:e.componentWillUpdate&&e.componentWillUpdate(i,l,s),e.props=i,e.state=l,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!b){_=e.render(i,l,s),e.getChildContext&&(s=n(n({},s),e.getChildContext()));var T=_&&_.nodeName,D=void 0,U=void 0;if("function"==typeof T){var E=a(_);w=g,w&&w.constructor===T&&E.key==w.__key?S(w,E,j,s,!1):(D=w,e._component=w=C(T,E,s),w.nextBase=w.nextBase||v,w._parentComponent=e,S(w,E,W,s,!1),x(w,j,o,!0)),U=w.base}else N=m,D=g,D&&(N=e._component=null),(m||t===j)&&(N&&(N._component=null),U=h(N,_,s,o||!p,m&&m.parentNode,!0));if(m&&U!==m&&w!==g){var L=m.parentNode;L&&U!==L&&(L.replaceChild(U,m),D||(m._component=null,y(m,!1)))}if(D&&k(D),e.base=U,U&&!r){for(var A=e,O=e;O=O._parentComponent;)(A=O).base=U;U._component=A,U._componentConstructor=A.constructor}}if(!p||o?G.unshift(e):b||(f(),e.componentDidUpdate&&e.componentDidUpdate(c,u,d),B.afterUpdate&&B.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);Q||r||f()}}function N(e,t,n,o){for(var r=e&&e._component,i=r,l=e,s=r&&e._componentConstructor===t.nodeName,c=s,u=a(t);r&&!c&&(r=r._parentComponent);)c=r.constructor===t.nodeName;return r&&c&&(!o||r._component)?(S(r,u,K,n,o),e=r.base):(i&&!s&&(k(i),e=l=null),r=C(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,l=null),S(r,u,j,n,o),e=r.base,l&&e!==l&&(l._component=null,y(l,!1))),e}function k(e){B.beforeUnmount&&B.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?k(n):t&&(t[V]&&t[V].ref&&t[V].ref(null),e.nextBase=t,c(t),_(e),g(t)),e.__ref&&e.__ref(null)}function T(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function D(e,t,n){return h(n,e,{},!1,t,!1)}function U(){for(var e="",t=0;t<32;t++){var n=16*Math.random()|0;8!==t&&12!==t&&16!==t&&20!==t||(e+="-"),e+=(12===t?4:16===t?3&n|8:n).toString(16)}return e}function E(e,t){return 1===e?t:t+"s"}function L(e,t){if(t)return localStorage[e]=JSON.stringify(t);var n=localStorage[e];return n&&JSON.parse(n)||[]}function A(e,t,n,o){for(o=0,t=t.split?t.split("."):t;e&&o<t.length;)e=e[t[o++]];return void 0===e?n:e}function O(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,i={},l=i,a="string"==typeof n?A(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,s=0;s<o.length-1;s++)l=l[o[s]]||(l[o[s]]=!s&&e.state[o[s]]||{});l[o[s]]=a,e.setState(i)}}var B={},M=[],P=[],W=0,j=1,R=2,K=3,V="__preactattr_",I=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,H=[],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},J=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},$=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=[],Q=0,X=!1,Y=!1,Z={};n(T.prototype,{setState:function(e,t){var r=this.state;this.prevState||(this.prevState=n({},r)),n(r,"function"==typeof e?e(r,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),o(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),x(this,R)},render:function(){}});var ee=function(){function e(e,t){this.key=e,this.todos=L(e)||[],this.onChanges=[t]}return e.prototype.inform=function(){L(this.key,this.todos),this.onChanges.forEach(function(e){return e()})},e.prototype.addTodo=function(e){this.todos=this.todos.concat({id:U(),title:e,completed:!1}),this.inform()},e.prototype.toggleAll=function(e){this.todos=this.todos.map(function(t){return q({},t,{completed:e})}),this.inform()},e.prototype.toggle=function(e){this.todos=this.todos.map(function(t){return t!==e?t:q({},t,{completed:!t.completed})}),this.inform()},e.prototype.destroy=function(e){this.todos=this.todos.filter(function(t){return t!==e}),this.inform()},e.prototype.save=function(e,t){this.todos=this.todos.map(function(n){return n!==e?n:q({},n,{title:t})}),this.inform()},e.prototype.clearCompleted=function(){this.todos=this.todos.filter(function(e){return!e.completed}),this.inform()},e}(),te=function(e){function n(){return F(this,e.apply(this,arguments))}return J(n,e),n.prototype.render=function(e){var n=e.nowShowing,o=e.count,r=e.completedCount,i=e.onClearCompleted;return t("footer",{class:"footer"},t("span",{class:"todo-count"},t("strong",null,o)," ",E(o,"item")," left"),t("ul",{class:"filters"},t("li",null,t("a",{href:"#/",class:"all"==n&&"selected"},"All"))," ",t("li",null,t("a",{href:"#/active",class:"active"==n&&"selected"},"Active"))," ",t("li",null,t("a",{href:"#/completed",class:"completed"==n&&"selected"},"Completed"))),r>0&&t("button",{class:"clear-completed",onClick:i},"Clear completed"))},n}(T),ne=27,oe=13,re=function(e){function n(){for(var t,n,o,r=arguments.length,i=Array(r),l=0;l<r;l++)i[l]=arguments[l];return t=n=F(this,e.call.apply(e,[this].concat(i))),n.handleSubmit=function(){var e=n.props,t=e.onSave,o=e.onDestroy,r=e.todo,i=n.state.editText.trim();i?(t(r,i),n.setState({editText:i})):o(r)},n.handleEdit=function(){var e=n.props,t=e.onEdit,o=e.todo;t(o),n.setState({editText:o.title})},n.toggle=function(e){var t=n.props;(0,t.onToggle)(t.todo),e.preventDefault()},n.handleKeyDown=function(e){if(e.which===ne){var t=n.props.todo;n.setState({editText:t.title}),n.props.onCancel(t)}else e.which===oe&&n.handleSubmit()},n.handleDestroy=function(){n.props.onDestroy(n.props.todo)},o=t,F(n,o)}return J(n,e),n.prototype.componentDidUpdate=function(){var e=this.base&&this.base.querySelector(".edit");e&&e.focus()},n.prototype.render=function(e,n){var o=e.todo,r=o.title,i=o.completed,l=e.editing,a=n.editText;return t("li",{class:{completed:i,editing:l}},t("div",{class:"view"},t("input",{class:"toggle",type:"checkbox",checked:i,onChange:this.toggle}),t("label",{onDblClick:this.handleEdit},r),t("button",{class:"destroy",onClick:this.handleDestroy})),l&&t("input",{class:"edit",value:a,onBlur:this.handleSubmit,onInput:O(this,"editText"),onKeyDown:this.handleKeyDown}))},n}(T),ie=13,le={all:function(){return!0},active:function(e){return!e.completed},completed:function(e){return e.completed}},ae=function(e){function n(){var t=F(this,e.call(this));return t.handleNewTodoKeyDown=function(e){if(e.keyCode===ie){e.preventDefault();var n=t.state.newTodo.trim();n&&(t.model.addTodo(n),t.setState({newTodo:""}))}},t.toggleAll=function(e){t.model.toggleAll(e.target.checked)},t.toggle=function(e){t.model.toggle(e)},t.destroy=function(e){t.model.destroy(e)},t.edit=function(e){t.setState({editing:e.id})},t.save=function(e,n){t.model.save(e,n),t.setState({editing:null})},t.cancel=function(){t.setState({editing:null})},t.clearCompleted=function(){t.model.clearCompleted()},t.model=new ee("preact-todos",function(){return t.setState({})}),addEventListener("hashchange",t.handleRoute.bind(t)),t.handleRoute(),t}return J(n,e),n.prototype.handleRoute=function(){var e=((location.hash||"")+"").split("/").pop();le[e]||(e="all"),this.setState({nowShowing:e})},n.prototype.render=function(e,n){var o=this,r=n.nowShowing,i=void 0===r?ALL_TODOS:r,l=n.newTodo,a=n.editing;$(e);var s=this.model.todos,c=s.filter(le[i]),u=s.reduce(function(e,t){return e+(t.completed?0:1)},0),d=s.length-u;return t("div",null,t("header",{class:"header"},t("h1",null,"todos"),t("input",{class:"new-todo",placeholder:"What needs to be done?",value:l,onKeyDown:this.handleNewTodoKeyDown,onInput:O(this,"newTodo"),autoFocus:!0})),s.length?t("section",{class:"main"},t("input",{class:"toggle-all",type:"checkbox",onChange:this.toggleAll,checked:0===u}),t("ul",{class:"todo-list"},c.map(function(e){return t(re,{todo:e,onToggle:o.toggle,onDestroy:o.destroy,onEdit:o.edit,editing:a===e.id,onSave:o.save,onCancel:o.cancel})}))):null,u||d?t(te,{count:u,completedCount:d,nowShowing:i,onClearCompleted:this.clearCompleted}):null)},n}(T);localStorage.removeItem("preact-todos"),D(t(ae,null),document.querySelector(".todoapp"))}();
//# sourceMappingURL=app.js.map