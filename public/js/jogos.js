$(document).ready(function(){
    console.clear();
    readAllArticle();
  });

function createTable(data){
    if(data.length < 1)
    return;
  
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = "";
  
    for(var i = 0; i < data.length; i++){
        if(data[i].type == "Jogos"){
            var col = "<a href='visualizar-materia.html?id="+ data[i].id +"' title='"+ data[i].title +"'>"+
            "<div class='post'>"+
            "<h2>"+ data[i].title +"</h2>"+
            "<span class='data-post'> Publicado em: "+ data[i].created_at +"</span>"+
            "<img src='"+ data[i].directoryImage +"' />"+
            "<p>"+ data[i].description +"</p>"+
            "</div>"+
            "</a>";
            conteudo.innerHTML += col;
        }
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