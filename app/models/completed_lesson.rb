# == Schema Information
#
# Table name: completed_lessons
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  lesson_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CompletedLesson < ActiveRecord::Base
  belongs_to :user
  belongs_to :lesson
end
