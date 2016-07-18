# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  type                   :string
#  username               :string
#  name                   :string
#  api_key                :string
#  secret_phrase          :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

require 'rails_helper'

describe RSpec.describe User, type: :model do
	let(:user) { FactoryGirl.create(:user) }
	let(:classroom) { FactoryGirl.create(:classroom) }

	describe 'get_classrooms' do

		it 'returns correct classrooms and educators' do
			ClassroomJrdev.create(classroom_id: classroom.id, jrdev_id: user.id)
			classrooms = user.get_classrooms
		end
	end
end
