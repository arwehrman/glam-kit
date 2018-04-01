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
  let item = new Item(json);
  let itemRow = item.renderItem()
  $("table#kitItems").append(itemRow);
}

Item.error = function(response){
  console.log("We have a problem", response)
}

//show user kit details on Kits index page
$(function() {
  $(".js-more").on("click", function(e){
    e.preventDefault()
    $("#kitItemsTable").toggle()
    let id = $(this).data("id");
    getKitItems(id)
    });
});

//handlebars template preview kit items
function getKitItems(id){
  $.get("/kits/" + id + ".json", function(data){
    let templateSource = $("#kititemsTemplate").html()
    let template = Handlebars.compile(templateSource)
    let kit = data;
    let items = kit["items"]
    let result = template(items);
    document.getElementById("kitItemsTable").innerHTML += result
  })
}

//index all users items
$(function(){
  $(".js-allItems").on("click", function(){
    $('#allitemstable').toggle()
      getAllItems()
    })
  })

//handlebars index all user items
function getAllItems(){
  $.get("/items", function(data){
    document.getElementById("allitemstable").innerHTML = "" //clear out
    let templateSource = $("#allitemsTemplate").html()
    let template = Handlebars.compile(templateSource)
    let items = data;
    let result = template(items);
    document.getElementById("allitemstable").innerHTML += result
    })
  }

//add item to existing kit
 $(function(){
  $('form.new_item').submit(function(e){
    e.preventDefault();
    url = this.action
    let values = $(this).serialize();
    let posting = $.post(url, values)
    .success(Item.success)
    .error(Item.error)
    this.reset()
  })
})

$(function(){
  Item.templateSource = $("#itemTemplate").html()
  Item.template = Handlebars.compile(Item.templateSource);
})
