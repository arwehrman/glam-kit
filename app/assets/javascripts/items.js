class Item{
  constructor(attributes){
    this.name = attributes['name'];
    this.brand = attributes['brand'];
    this.color = attributes['color'];
    this.category = attributes.category['name']
    this.price = attributes['price'];
    this.rating = attributes['rating'];
    this.comment = attributes['comment'];

    }
    //this should list all items in Kit in a table format
    listItems(){
      console.log(`This kit's name is: ${this.name}`);
    }
    listItem() {
      //this will eventually be formatter for newly added item
      console.log(`Just added ${this.name}`); //test will remove eventually
      var itemsTable = document.getElementById("kitItems");
      let row = ""
      row += '<tr><td>' + `${this.name}` + '</td><td>' + `${this.brand}` + '</td><td>' + `${this.color}` +  '</td><td>' + `${this.category}` +  '</td><td>' + `${this.price}` +  '</td><td>' + `${this.rating}` + '<tr><td>'
      + `${this.comment}` + '</td></tr>';
      itemsTable.append(row)
      debugger
      }
}

Item.success = function(json){
  var item = new Item(json);
  var itemLi = item.listItem()

  //$("ul.todo-list").append(itemLi)
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
