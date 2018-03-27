class Item{
  constructor(attributes){
    this.name = attributes['name'];
    this.brand = attributes['brand'];
    this.rating = attributes['rating']
    }
    //this should list all items in Kit in a table format
    listItems(){
      console.log(`This kit's name is: ${this.name}`);
    }
    listItem() {
      //this will eventually be formatter for newly added item
      console.log(`Just added ${this.name}`); //test will remove eventually
      }
}

Item.success = function(json){
  debugger
  var item = new Item(json);
  var itemLi = item.renderLI()

  $("ul.todo-list").append(itemLi)
}

Item.error = function(response){
  console.log("Yu broke it?", response)
}


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
  $('form.new-item').submit(function(e){
    e.preventDefault();
    url = this.action
    var values = $(this).serialize();
    var posting = $.post(url, values)
    .success(Item.success)
    .error(Item.error)
    })
})
