// This is a JavaScript file

//ações de mudança de tela

$(document).on("click","#visualizarCasadeRepouso", function(){
  $(location).attr("href","/pages/visualizarCasadeRepouso.html");
});

//ações do banco

$(document).on("click","#cadastrarCasadeRepouso",function(){
    var parametros = {
      "nome":$("#nome").val(),
      "telefone":$("#telefone").val(),
      "endereco":$("#endereco").val(),
      "qtd_idoso":$("#qtd_idoso").val(),
      "qtd_funcionario":$("#qtd_funcionario").val()  
    }
    $.ajax({
      type:"post", //como vai enviar os dados
      url:"https://projeto-elderapp3min.000webhostapp.com/elderapp/admin/CasadeRepouso.php", //pra onde vai enviar os dados
      data:parametros,//o que será enviado

      //se funcionar
      success: function(data){
        navigator.notification.alert("Casa de Repouso Cadastrado!");
        $("#nome").val(""),
        $("#telefone").val(""),
        $("#endereco").val(""),
        $("#qtd_idoso").val(""),
        $("#qtd_funcionario").val("") 
      },

      //se não funcionar
      error: function(data){
        navigator.notification.alert("Erro ao cadastrar");
      }
    });
});

function listar(){
  $.ajax({
    type: "post",
      url:"https://projeto-elderapp3min.000webhostapp.com/elderapp/admin/CasadeRepouso.php",
    dataType:"json", //o que vai receber ou como vai receber
    success: function(data){
      var itemLista = "";
      $.each(data.pessoas, function(i,dados){
        itemLista += "<option value="+dados.id+">"+dados.nome+"</option>";
      });
      $("#listaCasasdeRepouso").html(itemLista);
    },
    error: function(data){
        navigator.notification.alert("Erro ao buscar registro");
      }
  });
}

$(document).on("change","#listaCasasdeRepouso",function(){
  var parametros = {
    "codigo": $("option:selected",("#listaCasasdeRepouso")).val()
  }

  $.ajax({
    type: "post",
    url: "http://wordpress-online-2.000webhostapp.com/webservice/listar-um-registro.php",
    data:parametro,
    dataType:"json",// o que vai receber e como vai receber
    success: function(data){
      $("#codigo").val(data.pessoa.codigo);
      $("#nome").val(data.pessoa.nome);
      $("#email").val(data.pessoa.email);
      $("#senha").val(data.pessoa.senha);
    },
    error: function(data){
      navigator.notification.alert("Erro ao buscar registro");
    }
  });
});

function habilitarCampos(){
  $("#nome").prop("readonly",false);
  $("#email").prop("readonly",false);
  $("#senha").prop("readonly",false);
}

function desabilitarCampos(){
  $("#nome").prop("readonly",true);
  $("#email").prop("readonly",true);
  $("#senha").prop("readonly",true);
}

$(document).on("click","#editar",function(){
  habilitarCampos();
});

$(document).on("click","#cancelar",function(){
  desabilitarCampos();
  $("#codigo").val("");
  $("#nome").val("");
  $("#email").val("");
  $("#senha").val("");
});

$(document).on("click","#salvarEdicao",function(){
  var parametros = {
      "codigo":$("#codigo").val(),
      "nome":$("#nome").val(),
      "email":$("#email").val(),
      "senha":$("#senha").val()   
    }
    $.ajax({
      type:"post", //como vai enviar os dados
      url:"http://wordpress-online-2.000webhostapp.com/webservice/atualiza.php", //pra onde vai enviar os dados
      data:parametros,//o que será enviado

      //se funcionar
      success: function(data){
        navigator.notification.alert(data);
        location.reload();
        desabilitarCampos();  
      },

      //se não funcionar
      error: function(data){
        navigator.notification.alert("Erro ao cadastrar");
      }
    });
});

$(document).on("click","#excluir",function(){
  var parametros = {
      "codigo":$("#codigo").val()   
    }
    $.ajax({
      type:"post", //como vai enviar os dados
      url:"http://wordpress-online-2.000webhostapp.com/webservice/delete.php", //pra onde vai enviar os dados
      data:parametros,//o que será enviado

      //se funcionar
      success: function(data){
        navigator.notification.alert(data);
        location.reload();
        desabilitarCampos();  
      },

      //se não funcionar
      error: function(data){
        navigator.notification.alert("Erro ao excluir");
      }
    });
});