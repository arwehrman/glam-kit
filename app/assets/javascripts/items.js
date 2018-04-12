class Item {
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
  };
    renderItem() {
      const templateSource = $("#itemTemplate").html()
      let rowtemplate = Handlebars.compile(templateSource);
      return rowtemplate(this)
    };
};

//show user kit details on Kits index page
$(() => {
  $(".js-more").on("click", function(e){
    $("#kitItemsTable").toggle()
    let id = $(this).data("id");
      getKitItems(id)
    });
});

//handlebars template preview kit items
const getKitItems = (id) => {
  $.get(`/kits/${id}.json`, function(data){
    const templateSource = $("#kitItemsTemplate").html()
    let template = Handlebars.compile(templateSource)
    const kitDetail = document.getElementById("kitItemsTable")
      kitDetail.innerHTML = ""
    let kit = data
    let items = kit["items"]
    let result = template(items);
      kitDetail.innerHTML += result
  })
};

// Index All Items template All, Category, and Rating
function allItemsTemplate(items){
  const allItems = document.getElementById("allItemsTable")
    allItems.innerHTML = ""
  const templateSource = $("#allItemsTemplate").html()
  const template = Handlebars.compile(templateSource)
  const result = template(items)
  return allItems.innerHTML += result
}

//index all Items by Category
$(()=> {
  $('.js-Category').on('click', function(e){
    $('#allItemsTable').toggle()
   $.get('/items', function(items){
        items.sort((itemA, itemB) => {
       if (itemA.category.name < itemB.category.name) {
           return -1;
         }
         if (itemA.category.name > itemB.category.name) {
           return 1;
         }
         return 0;
      })
      return allItemsTemplate(items)
   })
  })
})

// index all Items by Rating
$(()=> {
  $('.js-byRating').on('click', function(e){
    $('#allItemsTable').toggle()
   $.get('/items', function(data){
     const items = data.sort((itemA,itemB) => {
       return itemB.rating - itemA.rating
      })
      return allItemsTemplate(items)
   })
  })
})

//index all users items
$(() => {
  $(".js-allItems").on("click", function(){
    $('#allItemsTable').toggle()
      getAllItems()
    })
  })

//includes handlebars to Index all Items
const getAllItems = () => {
  $.get("/items", function(items){
    return allItemsTemplate(items)
    })
  };

//Form to add item to existing kit
 $(function(){
  $('form.new_item').submit(function(e){
    e.preventDefault();
    const $form = $(this)
    const action = $form.attr("action")
    let params = $form.serialize();
    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "POST"
    })
    .success((json) => {
        let item = new Item(json);
        let itemRow = item.renderItem()
        $("table#kitItems").append(itemRow);
      })
    this.reset()
  })
})
