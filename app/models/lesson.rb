# == Schema Information
#
# Table name: lessons
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  position   :integer
#

class Lesson < ActiveRecord::Base
  has_many :exercises, dependent: :destroy
  validates_presence_of :name, :position
  validates_uniqueness_of :position

	def completed?(user)
  	arr = user.completed_lessons.pluck(:lesson_id)
  	return arr.include?(self.id)
  end

  def get_exercises(user)
    exercises = []
    self.exercises.each do |e|
      exercises.push { id: e.id, position: e.position, name: e.name, completed: e.completed?(user), next_up: e.next_up?(user), icon_url: e.icon_url }
    end
    return exercises
  end

  def exercises_count
  	self.exercises.count
  end

  def exercises_completed_count(user)
  	count = 0
  	arr = user.completed_exercises.pluck(:exercise_id)
  	self.exercises.each do |e|
  		count += 1 if arr.include?(e.id)
  	end
  	return count
  end
end
 
