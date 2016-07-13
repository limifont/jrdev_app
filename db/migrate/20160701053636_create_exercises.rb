class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.text :instruction, null: false
      t.string :prefill
      t.string :expected_output, null: false
      t.string :expected_code
      t.integer :position, null: false
      t.belongs_to :lesson, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
