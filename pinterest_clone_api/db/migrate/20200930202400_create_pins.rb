class CreatePins < ActiveRecord::Migration[6.0]
  def change
    create_table :pins do |t|
      t.string :owner
      t.string :img_link
      t.string :img_description

      t.timestamps
    end
  end
end
