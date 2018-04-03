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

//show user kit details on Kits index page
$(function() {
  $(".js-more").on("click", function(e){
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
    let kitDetail = document.getElementById("kitItemsTable")
      kitDetail.innerHTML = ""
    let kit = data;
    let items = kit["items"]
    let result = template(items);
      kitDetail.innerHTML += result
  })
}

//index all users itemss
$(function(){
  $(".js-allItems").on("click", function(){
    $('#allitemstable').toggle()
      getAllItems()
    })
  })

function getAllItems(){
  $.get("/items", function(data){
    let templateSource = $("#allitemsTemplate").html()
    let template = Handlebars.compile(templateSource)
    let allItems = document.getElementById("allitemstable")
      allItems.innerHTML = ""
    let items = data;
    let result = template(items);
      allItems.innerHTML += result
    })
  }

//add new item to existing kit form
  Item.success = function(json){
    let item = new Item(json);
    let itemRow = item.renderItem()
    $("table#kitItems").append(itemRow);
  }

  Item.error = function(response){
    console.log("We have a problem", response)
  }

//add item to existing kit
 $(function(){
  $('form.new_item').submit(function(e){
    e.preventDefault();
    let $form = $(this)
    let action = $form.attr("action")
    let params = $form.serialize();
    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "POST"
    })
    .success(Item.success)
    .error(Item.error)
    this.reset()
  })
})

$(function(){
  Item.templateSource = $("#itemTemplate").html()
  Item.template = Handlebars.compile(Item.templateSource);
})
