class CreateArtworks < ActiveRecord::Migration
  def change
    create_table :artworks do |t|
      t.integer :artist_id
      t.string :title
      t.integer :year
      t.text :intro
      t.text :description
      t.integer :edition
      t.string :medium
      t.float :price
      t.string :image_url
      t.integer :collectors
      t.integer :views
      t.integer :favorites

      t.timestamps
    end
  end
end
