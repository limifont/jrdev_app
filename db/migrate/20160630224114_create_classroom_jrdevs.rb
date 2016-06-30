class CreateClassroomJrdevs < ActiveRecord::Migration
  def change
    create_table :classroom_jrdevs do |t|
      t.integer :classroom_id
      t.integer :jrdev_id

      t.timestamps null: false
    end
  end
end
