class Exercise < ActiveRecord::Base
  belongs_to :lesson

  def last?(lesson)
  	self == lesson.exercises.last
  end

  def first?(lesson)
  	self == lesson.exercises.first
  end

  def completed?(user)
  	arr = user.completed_exercises.pluck(:exercise_id)
  	return arr.include?(self.id)
  end

  def next_up?(user)
    arr = user.completed_exercises.pluck(:exercise_id)
    if arr.length > 0
      return self.id == arr.last + 1
    else
      return false
    end
  end
end
