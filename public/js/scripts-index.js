$(document).ready(function(){
    console.clear();
    readAllArticle();
    readAllArticleLateral();
 
  });


function createTable(data){
    if(data.length < 1)
    return;
  
    var conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = "";
  
    for(var i = 0; i < data.length; i++){
        var col = "<a href='../../src/pages/visualizar-materia.html?id="+ data[i].id +"' title='"+ data[i].title +"'>"+
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

  function createTableLateral(data){
    if(data.length < 1)
    return;
  
    if(data.length > 1)
    var valor = Math.ceil(data.length/2);
    var conteudoLateral = document.getElementById("conteudo-lateral");
    conteudoLateral.innerHTML = "";
  
    for(var i = valor; i < data.length; i++){
        var col = "<a href='../../src/pages/visualizar-materia.html?id="+ data[i].id +"'>"+
        "<div class='post-lateral'>"+
        "<h4>"+ data[i].title +"</h4>"+
        "<p>"+ data[i].description +"</p>"+
        "</div>"+
        "</a>";

        conteudoLateral.innerHTML += col;
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
  function readAllArticleLateral(){
    $.ajax({
      url : "http://127.0.0.1:8000/api/articles",
      type : "GET",
      data : {},
      dataType : "JSON",
      success : function(data){
        console.table(data);
        createTableLateral(data);
      },
      error : function(error){
        console.log(error);
      }
    });
  }
  
  function getParams(){
    var email = document.getElementById('usuario').value;
    var password = document.getElementById('senha').value;
    console.log(email);

    var obj = {
      email : email,
      password : password
      };
      login(obj);
  }

  function login(obj){
    $.ajax({
      url : "http://127.0.0.1:8000/api/auth/login",
      type : "POST",
      data : obj,
      dataType : "json",
      success : function(data){
        localStorage.setItem ('access_token', data.access_token);
        localStorage.setItem ('token_type', data.token_type);
        window.location.href = "../../src/pages/area-restrita.html";
    },
    error : function(error){
      console.log(error);
      alert("Usuário ou senha incorretos");;
    }
  });
  };