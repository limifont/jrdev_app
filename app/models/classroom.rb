# == Schema Information
#
# Table name: classrooms
#
#  id         :integer          not null, primary key
#  name       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Classroom < ActiveRecord::Base
	belongs_to :user
  has_many :classroom_jrdevs
  has_many :jrdevs, through: :classroom_jrdevs
  validates_uniqueness_of :name, scope: :user_id

  def jrdevs
  	jrdev_ids = ClassroomJrdev.where(classroom_id: id).pluck(:jrdev_id)
  	return jrdev_ids.map { |id| User.find(id) }
  end

  def self.students_by_class(user)
    days = []
    counts = select("count(*) AS count, date_trunc('day', created_at) AS created_at")
                    .where("user_id = #{user.id}")
                    .group("date_trunc('day', created_at)")
                    .order("date_trunc('day', created_at)")
    counts.each do |record|
      days << { x: record.created_at.strftime("%D"), y: record.count }
    end
  end

  def average
    counts = []
    self.jrdevs.each do |jrdev|
      counts << jrdev.completed_exercises.count
    end
    average = counts.inject{ |sum, el| sum + el }.to_f / counts.size
    return average.nan? ? 0 : average
  end

  def student_stats
  	return self.jrdevs.map { |jrdev| {name: jrdev.name, completed_count: jrdev.completed_exercises.count} }
  end
end
