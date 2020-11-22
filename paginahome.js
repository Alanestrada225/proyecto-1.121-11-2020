let bod=JSON.parse(localStorage.getItem("mi80"));
if(!bd || bd==undefined){
    bd={
        tipo:-1,
        login:true,
        user:null,
        datos:[]};
        localStorage.replace("Estados de cuentas");

}
else if(bd.login==true || bd.login==undefined){
    localStorage.replace("paginaprincipal.html")
}

document.getElementById("Home").addEventListener("click",()=>{
    let nombre=document.getElementById("paginaprincipal").Value;
    localStorage.setItem("mi80p",JSON.stringify(bd));
    bd.datos.push(paginaprinciapal)
    console.log("cargar "+ paginaprincipal);

})

document.getElementById("Resgistrase").addEventListener("click",()=>{
    let nombre=document.getElementById("Resgitrarse").Value;
    localStorage.setItem("mi80p",JSON.stringify(bd));
    bd.datos.push(Registrase)
    console.log("cargar "+ Registrase);

})
document.getElementById("estados de cuenta").addEventListener("click",()=>{
    let nombre=document.getElementById("estados de cuenta").Value;
    localStorage.setItem("mi80p",JSON.stringify(bd));
    bd.datos.push(estadodecuenta)
    console.log("cargado "+ estadodecuenta);

})
document.getElementById("Home").addEventListener("click",()=>{
    let nombre=document.getElementById("paginaprincipal").Value;
    localStorage.setItem("mi80p",JSON.stringify(bd));
    bd.datos.push(paginaprinciapal)
    console.log("cargado "+ paginaprincipal);

})
