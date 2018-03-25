//index all users items
$(function(){
  $(".js-allItems").on("click", function(e){
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

//add item to existing kit
 $(function(){
  $('form#new_item').submit(function(e){
    e.preventDefault();
      url = this.action
      var values = $(this).serialize();
      var posting = $.post(url, values)
        posting.done(function(data) {
          let items = data
          var trHTML = ""
        items.forEach(function(item) {
          trHTML += '<tr><td>' + item["name"] + '</td><td>' + item["brand"] + '</td><td>' + item["color"] +  '</td><td>' + item["comment"] + '</td></tr>';
          $("table#kitItems").append(trHTML)
        })
      })
  })
})
