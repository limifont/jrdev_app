# == Schema Information
#
# Table name: mentors_jrdevs
#
#  id         :integer          not null, primary key
#  mentor_id  :integer
#  jrdev_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MentorsJrdev < ActiveRecord::Base
  belongs_to :mentor, class_name: "User"
  belongs_to :jrdev, class_name: "User"
  validates_uniqueness_of :mentor_id, scope: :jrdev_id


  def self.UserMentees(user)
  	user.mentors_jrdevs.map{ |m| Jrdev.find(m.jrdev_id)}
  end

end
