class CreateCompletedLessons < ActiveRecord::Migration
  def change
    create_table :completed_lessons do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.belongs_to :lesson, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
