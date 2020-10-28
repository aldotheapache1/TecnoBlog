$(document).ready(function(){
    console.clear();
    
  });

function getParams(){
    var titulo = document.getElementById('titulo').value;
    var descricao = document.getElementById('descricao').value;
    var textoMateria = document.getElementById('textoMateria').value;
    var imagem = document.getElementById('imagem').value;
    var type = document.getElementById('type').value;
    console.log(imagem);

    var obj = {
        title : titulo,
        description : descricao,
        text : textoMateria,
        directoryImage : imagem,
        type : type
      };
      save(obj);
  }

  function save(obj){
    $.ajax({
      url : "http://127.0.0.1:8000/api/articles?title=" + obj.title +"&description=" + obj.description +"&text=" + obj.text +"&directoryImage=" + obj.directoryImage +"&type=" + obj.type,
      type : "POST",
      data : obj,
      dataType : "json",
      success : function(data){
        window.location.href = "../../src/pages/area-restrita.html";
    },
    error : function(error){
      console.log(error);
      window.location.href = "../../src/pages/area-restrita.html";
    }
  });
}