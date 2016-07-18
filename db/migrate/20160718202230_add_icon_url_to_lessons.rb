class AddIconUrlToLessons < ActiveRecord::Migration
  def change
    add_column :lessons, :icon_url, :string
  end
end
