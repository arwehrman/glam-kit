class Item {
  constructor(attributes){
    this.name = attributes['name'];
    this.brand = attributes['brand'];
    this.color = attributes['color'];
    this.category = attributes.category['name']
    this.price = parseFloat(Math.round(attributes['price'] * 100) / 100).toFixed(2);
    this.rating = attributes['rating'];
    this.comment = attributes['comment'];
    this.id = attributes['id'];
    this.kitId = attributes.kit['id']
  };
    renderItem() {
      const templateSource = $("#itemTemplate").html()
      const rowtemplate = Handlebars.compile(templateSource);
      return rowtemplate(this)
    };
};

//show user kit details on Kits index page
$(() => {
  $(".js-more").on("click", function(e){
    $("#kitItemsTable").toggle()
    const id = $(this).data("id");
      getKitItems(id)
    });
});

//get request and handlebars template preview kit items
const getKitItems = (id) => {
  $.get(`/kits/${id}.json`, function(data){
    const templateSource = $("#kitItemsTemplate").html()
    const template = Handlebars.compile(templateSource)
    const kitDetail = document.getElementById("kitItemsTable")
      kitDetail.innerHTML = ""
    const kit = data
    const items = kit["items"]
    const result = template(items);
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
        items.sort((itemA, itemB) => itemA.category.name < itemB.category.name ? -1 : 1)
      return allItemsTemplate(items)
   })
  })
})

// index all Items by Rating
$(()=> {
  $('.js-byRating').on('click', function(e){
    $('#allItemsTable').toggle()
   $.get('/items', function(data){
     const items = data.sort((itemA,itemB) => itemB.rating - itemA.rating)
      return allItemsTemplate(items)
   })
  })
})

//index all Users items
$(() => {
  $(".js-allItems").on("click", function(){
    $('#allItemsTable').toggle()
      getAllItems()
    })
  })

//index all Items from all Users
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
    const params = $form.serialize();
    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "POST"
    })
    .success((json) => {
      debugger
        const item = new Item(json);
        const itemRow = item.renderItem()
        $("table#kitItems").append(itemRow);
      })
    this.reset()
  })
})
