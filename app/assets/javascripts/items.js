//index all users items
$(function(){
  $(".js-allItems").on("click", function(e){
    //e.preventDefault()

    $.get("/items").done(function(data){
      let items = data
      var itemList = ""
      items.forEach(function(item) {
        itemList += '<tr><td>' + item["name"] + '</td><td>' + item["brand"] + '</td><td>' + item["color"] +  '</td><td>' + item["comment"] + '</td></tr>';
      });
      $("#itemstable").html(itemList).toggle();
    })
  })
})


//add item to kit  this may be moved to Kit js
$(function(){
  $('form#new-item').submit(function(e){
  e.preventDefault();
  url = this.action
  var values = $(this).serialize();
  var posting = $.post(url)
  debugger
  })
})
