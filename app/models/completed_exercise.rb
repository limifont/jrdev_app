# == Schema Information
#
# Table name: completed_exercises
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  exercise_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class CompletedExercise < ActiveRecord::Base
  belongs_to :user
  belongs_to :exercise

  def self.exercises_by_day(user)
  	days = [{ x: '', y: 0 }]
    counts = select("count(*) AS count, date_trunc('day', created_at) AS created_at")
    				 .where("user_id = #{user.id}")
             .group("date_trunc('day', created_at)")
             .order("date_trunc('day', created_at)")
    counts.each do |record|
		 	days << { x: record.created_at.strftime("%D"), y: record.count }
		end
		return days
  end
end
