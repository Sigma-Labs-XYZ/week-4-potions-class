(this.webpackJsonphogwarts=this.webpackJsonphogwarts||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(13),c=n.n(s),i=n(6),o=n(11),u=n(2),d=n(3),l=n(5),h=n(4),p=(n(7),[{name:"Harry Potter",house:"Gryffindor",time:(new Date).toUTCString(),isLate:!1},{name:"Ron Weasley",house:"Gryffindor",time:(new Date).toUTCString(),isLate:!0},{name:"Hermione Granger",house:"Gryffindor",time:(new Date).toUTCString(),isLate:!1},{name:"Draco Malfoy",house:"Slytherin",time:(new Date).toUTCString(),isLate:!1},{name:"Pansy Parkinson",house:"Slytherin",time:(new Date).toUTCString(),isLate:!1},{name:"Cho Chang",house:"Ravenclaw",time:(new Date).toUTCString(),isLate:!1}]),j=n(9),m=n(0),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).handleCheckboxChange=function(e){a.props.updateLateRecord(parseInt(e.target.id),e.target.checked)},a}return Object(d.a)(n,[{key:"getHouseImgURL",value:function(e){return"hogwarts-img/".concat(e.toLowerCase(),".png")}},{key:"render",value:function(){var e=this.props.student,t=e.name,n=e.house,a=e.isLate,r=e.time,s=e.id;return Object(m.jsx)("div",{className:"student-record",children:Object(m.jsxs)("div",{className:a?"student-record-info-is-late":"student-record-info",children:[Object(m.jsx)("img",{className:"student-record-house-badge",src:this.getHouseImgURL(n),alt:"".concat(n," logo")}),Object(m.jsxs)("div",{className:"student-record-class-info",children:[Object(m.jsx)("h3",{className:"student-record-student-name",children:t}),"Entered class at ",Object(m.jsx)("br",{}),r]}),Object(m.jsx)("div",{className:"student-record-late-checker",children:Object(m.jsxs)("label",{className:"student-record-late-checker-container",children:[" Mark as late",Object(m.jsx)("input",{id:s,className:"student-record-late-checker-checkbox",onChange:this.handleCheckboxChange,checked:a,type:"checkbox"}),Object(m.jsx)("span",{className:"checkmark"})]})})]})})}}]),n}(r.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).createRegister=function(){return(a.props.selectedStudent.length>0?a.props.selectedStudent:a.props.students).map((function(e,t){return Object(m.jsx)(b,{student:e,updateLateRecord:a.updateLateRecord},t)}))},a.updateLateRecord=function(e,t){var n=Object(j.a)(a.props.students);n[e].isLate=t,a.props.updateStudents(n)},a.state={records:[]},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{id:"register-wrapper",children:[Object(m.jsx)(O,{}),Object(m.jsx)("div",{className:"register-list",children:this.createRegister()})]})}}]),n}(r.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{id:"register-component-header",children:[Object(m.jsx)("span",{id:"star-background",children:"\u2737"}),Object(m.jsx)("h2",{className:"component-title",children:"Register"})]})}}]),n}(r.a.Component),g=f,v=["Gryffindor","Slytherin","Hufflepuff","Ravenclaw","Sort Me!"],x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.house,s=[{name:n,house:"Sort Me!"===r?a.pickRandomHouse():r,time:(new Date).toUTCString(),isLate:!1}].concat(Object(j.a)(a.props.students));a.props.updateStudents(s)},a.handleInputChange=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.state={house:"Gryffindor",name:""},a}return Object(d.a)(n,[{key:"pickRandomHouse",value:function(){return v[Math.ceil(4*Math.random())-1]}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"form-wrapper",children:Object(m.jsxs)("form",{id:"attendance-form",onSubmit:this.handleSubmit,children:[Object(m.jsx)("label",{className:"form-item",htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{className:"form-item form-field",onChange:this.handleInputChange,id:"name",type:"text"}),Object(m.jsx)("label",{className:"form-item",htmlFor:"house",children:"House"}),Object(m.jsx)("select",{className:"form-item form-field",onChange:this.handleInputChange,id:"house",defaultValue:"Gryffindor",children:v.map((function(e,t){return Object(m.jsx)("option",{value:e,id:"option-".concat(t),children:e},"".concat(e,"-").concat(t))}))}),Object(m.jsx)("input",{className:"form-item submit-btn",type:"submit",value:"Register me!"})]})})}}]),n}(r.a.Component),S=n(8),y=n.n(S),C=n(12),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).updateMatches=function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.props.students,r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),""===t&&(a.props.displayStudent([]),r=[]),a.setState({currentMatches:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.findStudent=function(e){var t=parseInt(e.target.id),n=a.state.currentMatches[t];a.props.displayStudent([n])},a.createAutocompleteSuggestions=function(){return a.state.currentMatches.map((function(e,t){return Object(m.jsx)("div",{id:t,className:"autocomplete-suggestion",onClick:a.findStudent,children:e.name},t)}))},a.state={currentSearchText:"",currentMatches:[]},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state.currentMatches;return Object(m.jsxs)("div",{className:"search-wrapper",children:[Object(m.jsx)("label",{htmlFor:"search",className:"form-item component-title",id:"search-header",children:"Search Student"}),Object(m.jsx)("input",{className:"form-field",id:"search",type:"text",onChange:function(){var t=Object(C.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateMatches(n.target.value);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),Object(m.jsx)("div",{id:"autocomplete-wrapper",children:t?this.createAutocompleteSuggestions():""})]})}}]),n}(r.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this)).componentDidMount=function(){a.updateStudentRecord(p)},a.updateStudentRecord=function(e){var t=e.map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{id:t})}));a.setState({students:t})},a.handleInputChange=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.displayStudent=function(e){a.setState({selectedStudent:e})},a.state={students:[],selectedStudent:[]},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.students,n=e.selectedStudent;return Object(m.jsxs)("div",{className:"app-wrapper",children:[Object(m.jsxs)("div",{id:"app-lhs-container",children:[Object(m.jsx)(k,{students:t,displayStudent:this.displayStudent,updateStudentRecord:this.updateStudentRecord}),Object(m.jsx)(x,{updateStudents:this.updateStudentRecord,students:t})]}),Object(m.jsx)("div",{id:"app-rhs-container",children:Object(m.jsx)(g,{students:t,selectedStudent:n,updateStudents:this.updateStudentRecord})})]})}}]),n}(r.a.Component);c.a.render(Object(m.jsxs)(r.a.StrictMode,{children:[Object(m.jsx)("header",{id:"title",children:"Potions Class"}),Object(m.jsx)(w,{})]}),document.getElementById("root"))},7:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.7921a7df.chunk.js.map