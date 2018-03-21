$(function(){
  function Kit(attributes){  // not sure if this actually how it should works
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

//add new kit
$(function(){
  $('form.new_kit').submit(function(e){
  e.preventDefault();
  url = this.action
  var values = $(this).serialize();
  var posting = $.post(url, values)
    posting.done(function(data) {
      var kit = data;
      debugger
        $("#kitName").text("name");
        $("#kitId").text("id");

      });

  })
})
