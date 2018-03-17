//index all users items
$(function(){
  $(".js-allItems").on("click", function(e){
    e.preventDefault()
    alert("this works!")
    $.get("/items" + ".json"), function(data){


    }
  })
})
