let $=function(id){
    return document.getElementById(id)
}
let image=document.createElement('img')
let screenW=0
if(window.innerWidth>768){
    screenW=1
}else{
    screenW=0 
}
window.addEventListener('resize',()=>{
    console.log()
    if(window.innerWidth>768){
        screenW=1
    }else{
        screenW=0 
    }
})
let show=function(id){
   
    if (screenW===1){
        let padd=document.documentElement.scrollTop
        let picture=$(id).getAttribute('way')
        image.setAttribute('src',picture)
        $('modal').appendChild(image)
        $('modal').style.marginTop=padd+'px'
        $('modal').style.display='block'
    }
}
$("bigCertificat").addEventListener('click',()=>show("bigCertificat"))
$("bigCertificat1").addEventListener('click',()=>show("bigCertificat1"))
$("bigCertificat2").addEventListener('click',()=>show("bigCertificat2"))
$("bigCertificat3").addEventListener('click',()=>show("bigCertificat3"))
$('close').addEventListener('click',()=>{
    $('modal').removeChild(image)
    $('modal').style.display='none'
})