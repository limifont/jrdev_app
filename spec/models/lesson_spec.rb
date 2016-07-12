require 'rails_helper'

RSpec.describe Lesson, type: :model do
	let(:exercise) { FactoryGirl.create(:exercise) }

	before(:each) do
		@lesson = Lesson.find(exercise.lesson_id)
	end

	describe 'attributes' do
		it { should have_many(:exercises) }
	end

	describe 'validations' do
		it { should validate_presence_of :name }
		it { should validate_presence_of :instruction }
		it { should validate_presence_of :expected_output }
		it { should validate_presence_of :position }
	end

end