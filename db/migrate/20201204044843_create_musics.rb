class CreateMusics < ActiveRecord::Migration[6.0]
  def change
    create_table :musics do |t|
      t.integer    :workbgm_id  , null: false
      t.integer    :breakbgm_id , null: false
      t.timestamps
    end
  end
end
