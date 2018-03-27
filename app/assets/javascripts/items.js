class Item{
  constructor(attributes){
    this.name = attributes['name'];
    this.brand = attributes['brand'];
    this.color = attributes['color'];
    this.category = attributes.category['name']
    this.price = attributes['price'];
    this.rating = attributes['rating'];
    this.comment = attributes['comment'];
    this.id = attributes['id']; //need to figure out how to not include in for loop
    this.kitId = attributes.kit['id']//need to figure out how to not include in for loop
    }
    //this should list all items in Kit in a table format
    listItems(){
      console.log(`This kit's name is: ${this.name}`);
    }
    listItem() {
      var mixed = document.getElementById("kitItems");
      var tbody = document.createElement("tbody");
      var tr = document.createElement("tr");

      for (var prop in this) {
        var td = document.createElement("td");
        var txt = document.createTextNode(this[prop]);
        td.appendChild(txt);
        tr.appendChild(td);
          }
          tbody.appendChild(tr);
          mixed.appendChild(tbody);
        }
}

Item.success = function(json){
  var item = new Item(json);
  var itemLi = item.listItem()

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
  $('form.new_item').submit(function(e){
    e.preventDefault();
    url = this.action
    var values = $(this).serialize();
    var posting = $.post(url, values)
    .success(Item.success)
    .error(Item.error)

    })

})
