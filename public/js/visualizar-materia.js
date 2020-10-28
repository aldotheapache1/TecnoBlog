$(document).ready(function(){
    console.clear();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    readById(id);
  });

  function readById(id){
    $.ajax({
      url : "http://127.0.0.1:8000/api/articles/" + id,
      data : {},
      type : "GET",
      dataType : "JSON",
      success : function(data){
        console.table(data);
        createViewArticle(data);
      },
      error : function(error){
        console.log(error);
      }
    });
  }

  function createViewArticle(data){
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = 
    "<div class='post'>"+
    "<h2>"+ data.title +"</h2>"+
    "<span class='data-post'> Publicado em: "+ data.created_at +"</span>"+
    "<img src='"+ data.directoryImage +"' />"+
    "<p>"+ data.description +"</p>"+
    "<p>"+ data.text +"</p>"+
    "</div>";
    
    }



    