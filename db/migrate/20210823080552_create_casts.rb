class CreateCasts < ActiveRecord::Migration[6.1]
  def change
    create_table :casts do |t|
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end
