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

//when clicked should show add new item form
//currently button is on kit_path
  $(function () {
    $(".addItem").on("click", function(event) {
      event.preventDefault();
      alert("When clicked, Add Item form should display");
    });
  });

//add item to existing kit
 $(function(){
  $('form#new_item').submit(function(e){
    e.preventDefault();
      url = this.action
      var values = $(this).serialize();
      var posting = $.post(url, values)
  })
})
