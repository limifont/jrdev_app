class MentorsJrdev < ActiveRecord::Base
  belongs_to :mentor, class_name: "User"
  belongs_to :jrdev, class_name: "User"

  def self.UserMentees(user)
  	user.mentors_jrdevs.map{ |m| Jrdev.find(m.jrdev_id)}
  end
end
