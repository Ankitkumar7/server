(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PTPi:function(t,e,o){"use strict";o.r(e);var r=o("DUip"),n=o("Valr"),b=o("QJY3"),i=o("PdH4"),s=o.n(i),c=o("TYT/"),a=o("cUzu"),p=[{path:"login",component:function(){function t(t,e,o){this.fb=t,this.http=e,this.router=o}return t.prototype.ngOnInit=function(){this.userForm=this.fb.group({userName:["",[b.n.required]],password:["",[b.n.required]]})},t.prototype.ngOnDestroy=function(){},t.prototype.login=function(){var t=this,e=this.userForm.get("userName").value,o=this.userForm.get("password").value;this.http.get("https://svu-client.herokuapp.com/api/svu/v1/user/login?userName="+e+"&password="+o).subscribe((function(e){"user not found"===e.data?s.a.fire({icon:"error",title:"Login Failed !!!",text:"User Not Found",footer:'<p style="color:red;font-weight:bold;" href>Contact Super Admin</p>'}):(localStorage.setItem("user",JSON.stringify(e&&e.data)),t.router.navigate(["tables"]))}))},t.\u0275fac=function(e){return new(e||t)(c.Ub(b.b),c.Ub(a.a),c.Ub(r.b))},t.\u0275cmp=c.Ob({type:t,selectors:[["app-login"]],decls:38,vars:2,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-white",2,"font-weight","bold","font-size","34px"],[1,"text-white",2,"font-weight","bold","font-size","25px"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-5","col-md-7"],[1,""],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-3","mb-3"],["src","../../../assets/img/brand/red.png",2,"width","262px","margin-top","-112px"],[1,"card-body","px-lg-5","py-lg-5",2,"margin-top","-70px"],["role","form",3,"formGroup"],[1,"form-group","mb-3"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["formControlName","userName","placeholder","username","type","text",1,"form-control"],[1,"form-group"],[1,"ni","ni-lock-circle-open"],["formControlName","password","placeholder","Password","type","password",1,"form-control"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4",3,"disabled","click"]],template:function(t,e){1&t&&(c.Zb(0,"div",0),c.Zb(1,"div",1),c.Zb(2,"div",2),c.Zb(3,"div",3),c.Zb(4,"div",4),c.Zb(5,"h1",5),c.Nc(6,"Welcome!"),c.Yb(),c.Zb(7,"p",6),c.Nc(8,"SPECIAL VIGILIANCE UNIT PATNA"),c.Yb(),c.Zb(9,"p",7),c.Nc(10,"Case / Enquiry status Report "),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Zb(11,"div",8),c.oc(),c.Zb(12,"svg",9),c.Vb(13,"polygon",10),c.Yb(),c.Yb(),c.Yb(),c.nc(),c.Zb(14,"div",11),c.Zb(15,"div",3),c.Zb(16,"div",12),c.Zb(17,"div",13),c.Zb(18,"div",14),c.Zb(19,"div",15),c.Vb(20,"img",16),c.Yb(),c.Yb(),c.Zb(21,"div",17),c.Zb(22,"form",18),c.Zb(23,"div",19),c.Zb(24,"div",20),c.Zb(25,"div",21),c.Zb(26,"span",22),c.Vb(27,"i",23),c.Yb(),c.Yb(),c.Vb(28,"input",24),c.Yb(),c.Yb(),c.Zb(29,"div",25),c.Zb(30,"div",20),c.Zb(31,"div",21),c.Zb(32,"span",22),c.Vb(33,"i",26),c.Yb(),c.Yb(),c.Vb(34,"input",27),c.Yb(),c.Yb(),c.Zb(35,"div",28),c.Zb(36,"button",29),c.lc("click",(function(){return e.login()})),c.Nc(37,"Sign in"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb()),2&t&&(c.Hb(22),c.vc("formGroup",e.userForm),c.Hb(14),c.vc("disabled","INVALID"===e.userForm.status))},directives:[b.p,b.i,b.d,b.a,b.h,b.c],styles:[""]}),t}()},{path:"register",component:function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ob({type:t,selectors:[["app-register"]],decls:71,vars:0,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-light"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-6","col-md-8"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-2","mb-4"],[1,"text-center"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon","mr-4"],[1,"btn-inner--icon"],["src","assets/img/icons/common/github.svg"],[1,"btn-inner--text"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon"],["src","assets/img/icons/common/google.svg"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-hat-3"],["placeholder","Name","type","text",1,"form-control"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control"],[1,"input-group","input-group-alternative"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],[1,"text-muted"],["href","#!"],["type","button",1,"btn","btn-primary","mt-4"]],template:function(t,e){1&t&&(c.Zb(0,"div",0),c.Zb(1,"div",1),c.Zb(2,"div",2),c.Zb(3,"div",3),c.Zb(4,"div",4),c.Zb(5,"h1",5),c.Nc(6,"Welcome!"),c.Yb(),c.Zb(7,"p",6),c.Nc(8,"Use these awesome forms to login or create new account in your project for free."),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Zb(9,"div",7),c.oc(),c.Zb(10,"svg",8),c.Vb(11,"polygon",9),c.Yb(),c.Yb(),c.Yb(),c.nc(),c.Zb(12,"div",10),c.Zb(13,"div",3),c.Zb(14,"div",11),c.Zb(15,"div",12),c.Zb(16,"div",13),c.Zb(17,"div",14),c.Zb(18,"small"),c.Nc(19,"Sign up with"),c.Yb(),c.Yb(),c.Zb(20,"div",15),c.Zb(21,"a",16),c.Zb(22,"span",17),c.Vb(23,"img",18),c.Yb(),c.Zb(24,"span",19),c.Nc(25,"Github"),c.Yb(),c.Yb(),c.Zb(26,"a",20),c.Zb(27,"span",17),c.Vb(28,"img",21),c.Yb(),c.Zb(29,"span",19),c.Nc(30,"Google"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Zb(31,"div",22),c.Zb(32,"div",23),c.Zb(33,"small"),c.Nc(34,"Or sign up with credentials"),c.Yb(),c.Yb(),c.Zb(35,"form",24),c.Zb(36,"div",25),c.Zb(37,"div",26),c.Zb(38,"div",27),c.Zb(39,"span",28),c.Vb(40,"i",29),c.Yb(),c.Yb(),c.Vb(41,"input",30),c.Yb(),c.Yb(),c.Zb(42,"div",25),c.Zb(43,"div",26),c.Zb(44,"div",27),c.Zb(45,"span",28),c.Vb(46,"i",31),c.Yb(),c.Yb(),c.Vb(47,"input",32),c.Yb(),c.Yb(),c.Zb(48,"div",25),c.Zb(49,"div",33),c.Zb(50,"div",27),c.Zb(51,"span",28),c.Vb(52,"i",34),c.Yb(),c.Yb(),c.Vb(53,"input",35),c.Yb(),c.Yb(),c.Zb(54,"div",36),c.Zb(55,"small"),c.Nc(56,"password strength: "),c.Zb(57,"span",37),c.Nc(58,"strong"),c.Yb(),c.Yb(),c.Yb(),c.Zb(59,"div",38),c.Zb(60,"div",39),c.Zb(61,"div",40),c.Vb(62,"input",41),c.Zb(63,"label",42),c.Zb(64,"span",43),c.Nc(65,"I agree with the "),c.Zb(66,"a",44),c.Nc(67,"Privacy Policy"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Zb(68,"div",15),c.Zb(69,"button",45),c.Nc(70,"Create account"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb())},directives:[b.p,b.i,b.j],styles:[""]}),t}()}];o.d(e,"AuthLayoutModule",(function(){return d}));var d=function(){function t(){}return t.\u0275mod=c.Sb({type:t}),t.\u0275inj=c.Rb({factory:function(e){return new(e||t)},imports:[[n.b,r.e.forChild(p),b.e]]}),t}()}}]);