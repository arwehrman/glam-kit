class Item{
  constructor(attributes){
    this.name = attributes['name'];
    this.brand = attributes['brand'];
    this.color = attributes['color'];
    this.category = attributes.category['name']
    this.price = attributes['price'];
    this.rating = attributes['rating'];
    this.comment = attributes['comment'];
    this.id = attributes['id'];
    this.kitId = attributes.kit['id']
    }
    //this should list all items in Kit in a table format
    listItems(){
      console.log(`This kit's name is: ${this.name}`);
    }

    renderItem() {
      return Item.template(this)
      }
}

Item.success = function(json){
  var item = new Item(json);
  var itemRow = item.renderItem()
  $("table#kitItems").append(itemRow);
}

Item.error = function(response){
  console.log("We have a problem", response)
}

//show user kit details on Kits index page
$(function() {
  $(".js-more").on("click", function() {
    var id = $(this).data("id");
    $.get("/kits/" + id + ".json", function(data) {
      var kit = data;
      var items = kit["items"];
      var itemList = "";
      items.forEach(function(item) {
        itemList += '<tr><td>' + item["name"] + '</td><td>' + item["brand"] + '</td><td>' + item["color"] +  '</td><td>' + item["comment"] + '</td></tr>'; //maybe make this into a handlebar template
      });
      $("#kit-" + id + "-items").html(itemList).toggle();
    });
  });
});

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
    this.reset() //resets form but sumbit button is still pressed

  })
})

$(function(){
  Item.templateSource = $("#itemTemplate").html()
  Item.template = Handlebars.compile(Item.templateSource);
})
