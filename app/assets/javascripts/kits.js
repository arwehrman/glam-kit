//Item
function Item(name, brand, color, price, rating, comment){
    //this.id = pull from JSON data?
    this.name = name
    this.brand = brand
    this.color = color
    this.price = rating
    this.comment = comment
    //this.category_id = pull from JSON data?
    //this.kit_id = pull from JSON data?
  }
  Item.prototype.newItem = function() { //this will eventually be formatter for new item
  console.log(`Just added ${this.name}`); //
  }

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
  $(function () {
    $(".addItem").on("click", function(event) {
      event.preventDefault();
      alert("this works");
    });
  });
