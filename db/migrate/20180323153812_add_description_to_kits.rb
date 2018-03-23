class AddDescriptionToKits < ActiveRecord::Migration[5.1]
  def change
    add_column :kits, :description, :string
  end
end
