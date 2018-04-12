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

$(()=> {
  $('.js-Category').on('click', function(e){
    $('#allItemsTable').toggle()
   $.get('/items', function(data){
     const allItems = document.getElementById("allItemsTable")
       allItems.innerHTML = ""
     const templateSource = $("#allItemsTemplate").html()
     const template = Handlebars.compile(templateSource)
     const sorted = data.sort((itemA, itemB) => {
  
       if (itemA.category.name < itemB.category.name) {
           return -1;
         }
         if (itemA.category.name > itemB.category.name) {
           return 1;
         }
         return 0;

      })
      const result = template(sorted);
        allItems.innerHTML += result
   })
  })
})


$(()=> {
  $('.js-byRating').on('click', function(e){
    $('#allItemsTable').toggle()
   $.get('/items', function(data){
     const allItems = document.getElementById("allItemsTable")
       allItems.innerHTML = ""
     const templateSource = $("#allItemsTemplate").html()
     const template = Handlebars.compile(templateSource)
     const sorted = data.sort((itemA,itemB) => {
       return itemB.rating - itemA.rating
      })

      const result = template(sorted);
        allItems.innerHTML += result
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
  $.get("/items", function(data){
    const allItems = document.getElementById("allItemsTable")
      allItems.innerHTML = ""
    const templateSource = $("#allItemsTemplate").html()
    let template = Handlebars.compile(templateSource)
    let items = data
    let result = template(items);
      allItems.innerHTML += result
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
