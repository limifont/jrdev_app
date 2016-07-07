class CompletedExercise < ActiveRecord::Base
  belongs_to :user
  belongs_to :exercise

  def date_completed
    
  end
end
