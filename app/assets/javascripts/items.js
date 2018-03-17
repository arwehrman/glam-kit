
//index all users items
//currently pulls all items data but doesn't show on kits index html
//probably has to do with the Item & Kit controllers
$(function(){
  $(".js-allItems").on("click", function(e){
    e.preventDefault()
    $.get("/items").done(function(data){
      let items = data
      var itemList = "";
      items.forEach(function(item) {
        itemList += '<tr><td>' + item["name"] + '</td><td>' + item["brand"] + '</td><td>' + item["color"] +  '</td><td>' + item["comment"] + '</td></tr>';
      });
      $("#itemstable").html(itemList);
    })
  })
})
