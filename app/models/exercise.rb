# == Schema Information
#
# Table name: exercises
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  instruction     :text             not null
#  prefill         :string
#  expected_output :string           not null
#  expected_code   :string
#  position        :integer          not null
#  lesson_id       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Exercise < ActiveRecord::Base
  belongs_to :lesson
  validates_presence_of :name, :instruction, :expected_output, :position

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
    elsif self == Exercise.first
      return true
    else
      return false
    end
  end

  def very_last?
    lesson = Lesson.find(self.lesson_id)
    lesson == Lesson.find_by(position: Lesson.count) && self == lesson.exercises.find_by(position: lesson.exercises.count)
  end

end
