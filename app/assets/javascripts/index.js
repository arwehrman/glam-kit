class Kit{
  constructor(attributes){
    this.name = attributes.name;
    this.description = attributes.description;
    this.id = id
    }
    //this should list all items in Kit in a table format
    Kit.prototype.listItems = function(){
      console.log(`This kit's name is: ${this.name}`);
    }
}

class Item {
  constructor(attributes){
      this.name = attributes.name;
      this.brand = attributes.brand;
      this.color = attributes.color;
      this.price = attributes.rating;
      this.comment = attributes.comment;
      this.id = attributes.id;
      this.category_id = attributes.category_id;
      this.kit_id = attributes.kit_id;
    }
    Item.prototype.listItem = function() {
      //this will eventually be formatter for newly added item
      console.log(`Just added ${this.name}`); //test will remove eventually
      }

    Item.prototype.listItems = function() {
      //this will eventually be formatter for list of items

      console.log(`Just added ${this.name}`); //tester will remove eventually
    }
}
