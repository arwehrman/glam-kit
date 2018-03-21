$(function(){
  function Kit(attributes){  // still need to has this out
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

//add an item to a kitText
//this should be connected to add new item form
  $(function () {
    $(".addItem").on("click", function(event) {
      event.preventDefault();
      alert("this works");
    });
  });
