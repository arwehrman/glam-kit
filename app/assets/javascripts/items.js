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

//handlebars template preview kit items
function getKitItems(id){
  $.get("/kits/" + id + ".json", function(data) {
    var templateSource = $("#kititemsTemplate").html()
    var template = Handlebars.compile(templateSource)
    var kit = data;
    var items = kit["items"]
    var result = template(items);
    document.getElementById("kitItemsTable").innerHTML += result
  })
}

//handlebars index all user items
 function getAllItems(){
  $.get("/items", function(data) {
    document.getElementById("allitemstable").innerHTML = "" //clear out
    var templateSource = $("#allitemsTemplate").html()
    var template = Handlebars.compile(templateSource)
    var items = data;
    var result = template(items);
    document.getElementById("allitemstable").innerHTML += result
  })
  }

//show user kit details on Kits index page
$(function() {
  $(".js-more").on("click", function() {
    $("#kitItemsTable").toggle()
    var id = $(this).data("id");
    getKitItems(id)
    });
});

//index all users items
$(function(){
  $(".js-allItems").on("click", function(){
    $('#allitemstable').toggle()
      getAllItems()
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
    this.reset()
  })
})

$(function(){
  Item.templateSource = $("#itemTemplate").html()
  Item.template = Handlebars.compile(Item.templateSource);
})
