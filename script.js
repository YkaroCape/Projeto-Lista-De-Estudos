function clicar() { 
         var p = document.getElementById('check').checked;
         var pi = document.getElementById ('check1').checked;
         var a = document.getElementById('check2').checked;
         var js = document.getElementById('check3').checked;
         var i = document.getElementById('check4').checked;
         var j = document.getElementById ('check5').checked; //.checked; para ser check
         var res = document.getElementById('res')
        if (p && pi && a && js && i && j) { //se as vars forem checkadas aparecera a msg
            res.innerHTML = "<strong>Parabens!!!</strong> Você Completou Todas As Tarefas!!!"
        }
        else {
            res.innerHTML = "<strong>Atenção!!</strong> Faltam Tarefas Para Serem Completadas!!"}
       
    
}   
    var botao = document.getElementById("btni")
        botao.addEventListener('click', function() {
            location.href = "https://www.instagram.com/ykaro_05/"
})
    var bg = document.getElementById("btng")
        bg.addEventListener('click', function (){
            location.href = "https://github.com/YkaroCape"
})
    var bl = document.getElementById("btnl")
        bl.addEventListener('click', function () {
            location.href = "https://www.linkedin.com/in/ykaro-maranguanhe-capelaro-97418b211/"
})

