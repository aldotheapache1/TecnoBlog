$(document).ready(function(){
    console.clear();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    readById(id);
    
  });


function readById(id){
    $.ajax({
      url : "http://127.0.0.1:8000/api/article/" + id,
      data : {},
      type : "GET",
      dataType : "JSON",
      success : function(data){
        console.table(data);
        createViewEdit(data);
    },
    error : function(error){
      console.log(error);
    }
  });
}

  function createViewEdit(data){
    var conteudo = document.getElementById("principal");
    conteudo.innerHTML = "";

    conteudo.innerHTML =  
        "<fieldset>"+
        "<legend>Matéria</legend>"+
        "<div class='input-block'>"+
        "<input type='hidden' id='id' name='id' value='"+ data.id +"' ></input>"+
        "<label for='titulo'>Titulo</label>"+
        "<input id='titulo' name='titulo' value='"+ data.title +"' required />"+
        "</div>"+
        "<div class='input-block'>"+
        "<label for='descricao'>Descrição</label>"+
        "<input id='descricao' name='descricao' value='"+ data.description +"' maxlength='50' required></input>"+
        "</div>"+
        "<div class='input-block'>"+
        "<label for='textoMateria'>Texto da Matéria</label>"+
        "<textarea id='textoMateria'  name='textoMateria' required>"+ data.text +"</textarea>"+
        "</div>"+
        "<button type='button' onclick='getParams()' class='confirmar'>Confirmar</button>"+
        "</fieldset>"+
        "<button onclick='back()' class='voltar'>Voltar</button>";
    }

    function back(){
        window.location.href = "../../src/pages/area-restrita.html";
      };

      function getParams(){
        var id = document.getElementById('id').value;
        var titulo = document.getElementById('titulo').value;
        var descricao = document.getElementById('descricao').value;
        var textoMateria = document.getElementById('textoMateria').value;

        var obj = {
            id : id,
            title : titulo,
            description : descricao,
            text : textoMateria
          };
          update(obj);
      }

      function update(obj){
        $.ajax({
          url : "http://127.0.0.1:8000/api/article/" + obj.id,
          headers: {"Authorization":  'Bearer ' + localStorage.getItem('access_token')},
          type : "PUT",
          data : obj,
          success : function(data){ 
            window.location.href = "../../src/pages/area-restrita.html";
          }
      });
    }

