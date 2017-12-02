class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :brand
      t.string :color
      t.integer :price
      t.integer :rating
      t.text :comment
      t.integer :category_id
      t.integer :kit_id
      t.timestamps
    end
  end
end
