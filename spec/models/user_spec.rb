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
	let(:completed_exercise) { FactoryGirl.create(:completed_exercise)}
	let(:mentor) { FactoryGirl.create(:mentor) }
	let(:educator) { FactoryGirl.create(:educator) }
	let(:jrdev) { FactoryGirl.create(:jrdev) }

	describe 'get_classrooms' do
		it 'returns correct classrooms and educators' do
			ClassroomJrdev.create(classroom_id: classroom.id, jrdev_id: user.id)
			classrooms = user.get_classrooms
		end
	end

	describe 'get_lessons' do
		it 'returns lessons with completion data' do
			user = User.find(completed_exercise.user_id)
			exercise = Exercise.find(completed_exercise.exercise_id)
			lesson = Lesson.find(exercise.lesson_id)
			response = user.get_lessons
			expect(response[0][:name]).to eq(lesson.name)
			expect(response[0][:completed]).to eq(false)
			expect(response[0][:exercises_count]).to eq(1)
			expect(response[0][:exercises_completed_count]).to eq(1)
		end
	end

	describe 'get_averages' do
		it "returns averages for educator's classrooms" do
			user = User.find(classroom.user_id)
			response = user.get_averages
			expect(response[:classrooms]).to eq([])
			expect(response[:average_total]).to eq(0)
		end
	end

	describe 'self.mentors' do
		it "returns all mentors" do
			mentor
			response = User.mentors
			expect(response).to eq([mentor])
		end
	end

	describe 'self.jrdevs' do
		it "returns all jrdevs" do
			jrdev
			response = User.jrdevs
			expect(response).to eq([jrdev])
		end
	end

	describe 'self.jrdev_names' do
		it 'returns names of all jrdevs' do
			jrdev
			expect(User.jrdev_names).to eq([jrdev.name])
		end
	end

	describe 'self.types' do
		it 'returns array of valid subclasses' do
			expect(User.types).to eq(["Mentor", "Educator", "Jr Dev"])
		end
	end
end
