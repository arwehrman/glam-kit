$(function(){
  function Kit(attributes){
    this.name = attributes.name
    this.id = attributes.id
    items_attributes: {
      this.name = item['name']
      this.brand = item['brand']
      this.color = item['color']
      this.rating = item['rating']
      this.price = item['price']
      this.comment = item['comment']
    }
  }
});

//show user kit details
$(function() {
  $(".js-more").on("click", function() {
    var id = $(this).data("id");
    $.get("/kits/" + id + ".json", function(data) {
      var kit = data;
      var items = kit["items"];
      var itemList = "";
      items.forEach(function(item) {
        itemList += '<tr><td>' + item["name"] + '</td><td>' + item["brand"] + '</td><td>' + item["color"] +  '</td><td>' + item["comment"] + '</td></tr>';
      });
      $("#kit-" + id + "-items").html(itemList).toggle();
    });
  });
});

//add new kit with item
$(function(){
  $('form.new_kit').submit(function(e){
  e.preventDefault();
  url = this.action
  var values = $(this).serialize();
  var posting = $.post(url, values)
    posting.done(function(data) {

      var kit = data;
      var item = kit.items[0]
      debugger
        $("#kitName").text(kit.name);
        $("#kitId").text(kit.id);
        $("#itemName").text(item.name)
        $("#itemBrand").text(item.brand)
        $("#itemColor").text(item.color)
        $("#itemPrice").text(item.rating)
        $("#itemComment").text(item.comment)
        $("#itemCategory").text(item.category)


      });
  })
})
