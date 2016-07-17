# == Schema Information
#
# Table name: classroom_jrdevs
#
#  id           :integer          not null, primary key
#  classroom_id :integer
#  jrdev_id     :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class ClassroomJrdev < ActiveRecord::Base
	belongs_to :jrdev, class_name: "User"
	belongs_to :classroom
end
