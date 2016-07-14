require 'rails_helper'

describe RSpec.describe User, type: :model do
	let(:user) { FactoryGirl.create(:user) }
	let(:classroom) { FactoryGirl.create(:classroom) }

	describe 'get_classrooms' do

		it 'returns correct classrooms and educators' do
			ClassroomJrdev.create(classroom_id: classroom.id, jrdev_id: user.id)
			classrooms = user.get_classrooms
			binding.pry
		end
	end
end