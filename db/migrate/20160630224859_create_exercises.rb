class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.text :instruction
      t.integer :lesson_id, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
