class Kit{
  constructor(attributes){
    this.name = attributes.name;
    this.description = attributes.description;
    this.id = atttributes.id
    }
    //this should list all items in Kit in a table format
    listItems(){
      console.log(`This kit's name is: ${this.name}`);
    }
    listItem() {
      //this will eventually be formatter for newly added item
      console.log(`Just added ${this.name}`); //test will remove eventually
      }
}

//show user kit details on Kits index page
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
  var values = $(this).serialize
  var posting = $.post(url, values)
    posting.done(function(data) {

      var kit = data;
      var item = kit.items[0]

        $("#kitName").text(kit.name);
        $("#kitId").text(kit.id);
        $("#itemName").text(item.name)
        $("#itemBrand").text(item.brand)
        $("#itemColor").text(item.color)
        $("#itemPrice").text(item.price)
        $("#itemRating").text(item.rating)
        $("#itemComment").text(item.comment)
        $("#itemCategory").text(item.category)
      });
  })
})
