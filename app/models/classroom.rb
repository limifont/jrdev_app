class Classroom < ActiveRecord::Base
	belongs_to :user
  has_many :classroom_jrdevs
  has_many :jrdevs, through: :classroom_jrdevs

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
    binding.pry
    counts.each do |record|
      days << { x: record.created_at.strftime("%D"), y: record.count }
   end

  def student_stats
  	return self.jrdevs.map { |jrdev| {name: jrdev.name, completed_count: jrdev.completed_exercises.count} }
  end
end
