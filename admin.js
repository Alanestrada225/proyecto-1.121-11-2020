let bod=JSON.parse(localStorage.getItem("mi80"));
if(!bd || bd==undefined){
    bd={
        tipo:-1,
        login:true,
        user:null,
        datos:[]};
        localStorage.replace("Home");
        localStorage.replace("Estados de cuentas");
      

}
else if(bd.login==true|| bd.login==undefined){
    localStorage.replace("paginaprincipal.html")
    localStorage.replace("estados de cuenta")
}