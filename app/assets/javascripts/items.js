//Item
function Item(attributes){
    this.name = attributes.name;
    this.brand = attributes.brand;
    this.color = attributes.color;
    this.price = attributes.rating;
    this.comment = attributes.comment;
    this.id = attributes.id
    //this.category_id = pull from JSON data?
    //this.kit_id = pull from JSON data?
  }
  Item.prototype.listItem = function() { //this will eventually be formatter for new item
      //format new item
      //all items or just the new item?

  console.log(`Just added ${this.name}`); //
  }

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
  $('form#new_item').submit(function(e){
  e.preventDefault();
  url = this.action
  var values = $(this).serialize();
  var posting = $.post(url)
  debugger
  })
})
