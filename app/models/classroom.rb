class Classroom < ActiveRecord::Base
	belongs_to :user
  has_many :classroom_jrdevs
  has_many :users, through: :classroom_jrdevs

  def jrdevs
  	jrdev_ids = ClassroomJrdev.where(classroom_id: id).pluck(:jrdev_id)
  	return jrdev_ids.map { |id| User.find(id) }
  end
end
