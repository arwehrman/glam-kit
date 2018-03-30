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
