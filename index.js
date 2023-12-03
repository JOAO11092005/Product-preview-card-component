
function exibirMensagem() {
    document.getElementById("mensagem").style.display = "block";
    setTimeout(function(){
      document.getElementById("mensagem").style.display = "none";
    }, 7000);
  }