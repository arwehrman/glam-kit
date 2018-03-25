class Item {
  constructor(attributes){
      this.name = attributes.name;
      this.brand = attributes.brand;
      this.color = attributes.color;
      this.price = attributes.rating;
      this.comment = attributes.comment;
      this.id = attributes.id;
      this.category_id = attributes.category_id;
      if(kit){
        this.kitId = attributes.user.id
      }
    }

    allItemsTable() {
      //this will eventually be formatter for list of items
      console.log(`Just added ${this.name}`); //just testing data
    }

    kitItemsTable(){

    }

}
