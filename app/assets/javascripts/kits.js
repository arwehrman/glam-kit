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
        itemList += '<tr><td>' + item["name"] + '</td><td>' + item["brand"] + '</td><td>' + item["color"] +  '</td><td>' + item["comment"] + '</td></tr>';
      });
      $("#kit-" + id + "-items").html(itemList).toggle();
    });
  });
});

//Things to do

//hide items when button is clicked again?
