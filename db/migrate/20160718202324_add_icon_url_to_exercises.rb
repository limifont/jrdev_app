class AddIconUrlToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :icon_url, :string
  end
end
