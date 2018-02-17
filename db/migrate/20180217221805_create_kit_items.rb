class CreateKitItems < ActiveRecord::Migration[5.1]
  def change
    create_table :kit_items do |t|
      t.integer :kit_id
      t.integer :item_id
      t.timestamps
    end
  end
end
