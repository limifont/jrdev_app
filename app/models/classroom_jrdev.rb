class ClassroomJrdev < ActiveRecord::Base
	belongs_to :jrdev, class_name: "User"
	belongs_to :classroom
end
