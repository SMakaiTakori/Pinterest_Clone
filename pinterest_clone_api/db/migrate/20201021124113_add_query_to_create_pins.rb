class AddQueryToCreatePins < ActiveRecord::Migration[6.0]
  def change
    add_column :pins, :query, :string
  end
end
