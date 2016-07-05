class CreateCompletedExercises < ActiveRecord::Migration
  def change
    create_table :completed_exercises do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.belongs_to :exercise, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
