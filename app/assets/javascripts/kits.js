
$(function() {
  $(".js-more").on("click", function() {
    var id = $(this).data("id");
    $.get("/kits/" + id + ".json", function(data) {
      var kit = data;
      var kitText = "<p>" + kit["name"] + kit["id"] + "</p>";
      $("#kit-" + id).html(kitText);
      var items = kit["items"];
      var itemList = "";
      items.forEach(function(item) {
        itemList += '<li class="js-order" data-id="' + item["id"] + '">' + item["id"] + ' - ' + item["name"] + '</li>';
      });
      $("#kit-" + id + "-items").html(itemList);
    });
  });
});
