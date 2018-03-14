$(function() {
  $(".js-more").on("click", function() {
    var id = $(this).data("id");
    $.get("/kits/" + id + ".json", function(data) {
      var kit = data;
      var kitText = "<p>" + kit["name"] + "</p>";
      $("#kit-" + id).html(kitText);
      var items = kit["items"];
      var itemList = "";
      items.forEach(function(item) {
        itemList += '<li class="js-order" data-id="' + item["id"] + '">' + item["name"] + '</li>';
      });
      $("#kit-" + id + "-items").html(itemList);
    });
  });
});

//Things to do
//determine format for list items
//list items when button is clicked - working now but may change after format change
//hide items when button is clicked again
