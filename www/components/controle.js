// This is a JavaScript file

//ações de mudança de tela

$(document).on("click","#entrouAqui", function(){
  $(location).attr("href","/pages/menu.html");
});

$(document).on("click","#sair", function(){
  $(location).attr("href","../index.html");
});

$(document).on("click","#cadastro", function(){
  $(location).attr("href","/pages/form4.html");
});

$(document).on("click","#listar", function(){
  $(location).attr("href","listar.html");
});
