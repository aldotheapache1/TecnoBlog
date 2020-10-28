$(document).ready(function(){
    console.clear();
    readAllArticle();
  });


function createTable(data){
    if(data.length < 1)
    return;
  
    var conteudo = document.getElementById("conteudo-restrito");
    conteudo.innerHTML = "";
  
    for(var i = 0; i < data.length; i++){
        var col = "<div class='noticia'>"+
        "<div class='imagem-galeria'>"+
        "<img src='"+ data[i].directoryImage +"' />"+
        "</div>"+
        "<h4>"+ data[i].title +"</h2>"+
        "<button type='button' id='apagar' onclick='confirmDelete("+ data[i].id +")'>Apagar</button>"+
        "<a id='editar' href='editar-materia.html?id="+ data[i].id +"'>Editar</a>"+
        "<a type='button' id='visualizar' href='visualizar-materia.html?id="+ data[i].id +"'>Visualizar</a>"+
        "</div>";

        conteudo.innerHTML += col;
    }
  }

function readAllArticle(){
    $.ajax({
      url : "http://127.0.0.1:8000/api/articles",
      type : "GET",
      data : {},
      dataType : "JSON",
      success : function(data){
        console.table(data);
        createTable(data);
      },
      error : function(error){
        console.log(error);
      }
    });
  }
  function deleteArticle(id){
    $.ajax({
      url : "http://127.0.0.1:8000/api/articles/" + id,
        type : "DELETE",
        dataType : "JSON",
        data : {},
        success : function(data){
          console.log(data);
          if(data.result = "ok"){
            Location.reload();
          }
        },
        error : function(error){
          console.log(error);
        }
      });
  }

  function confirmDelete(id){
    if(!confirm("Deseja realmente remover?"))
    return;
    console.log(id);
    deleteArticle(id);
  }