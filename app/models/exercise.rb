class Exercise < ActiveRecord::Base
  belongs_to :lesson

  def last?(lesson)
  	self == lesson.exercises.last
  end
end
