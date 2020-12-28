class AddUserIdToMusics < ActiveRecord::Migration[6.0]
  def change
    add_column :musics, :user_id, :integer
  end
end
