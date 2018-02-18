class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :brand
      t.string :color
      t.decimal :price, precision: 6, scale: 2
      t.integer :category_id
      t.timestamps
    end
  end
end
