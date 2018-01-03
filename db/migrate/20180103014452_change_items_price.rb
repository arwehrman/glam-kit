class ChangeItemsPrice < ActiveRecord::Migration[5.1]
  def change
    change_table :items do |t|
      t.change :price, :decimal, precision: 6, scale: 2
    end
  end
end
