class CreateMentorsJrdevs < ActiveRecord::Migration
  def change
    create_table :mentors_jrdevs do |t|
      t.integer :mentor_id, index: true, foreign_key: true
      t.integer :jrdev_id, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
