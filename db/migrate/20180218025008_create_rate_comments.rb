class CreateRateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :rate_comments do |t|
      t.integer :rating
      t.text :comment
      t.integer :user_id
      t.integer :item_id
      t.timestamps
    end
  end
end
