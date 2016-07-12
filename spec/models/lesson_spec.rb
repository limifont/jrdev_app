require 'rails_helper'

RSpec.describe Lesson, type: :model do
	let(:exercise) { FactoryGirl.create(:exercise) }
	let(:user) { FactoryGirl.create(:user) }

	before(:each) do
		@lesson = Lesson.find(exercise.lesson_id)
	end

	describe 'attributes' do
		it { should have_many(:exercises) }
	end

	describe 'validations' do
		it { should validate_presence_of :name }
	end

	describe 'get_exercises' do
		it 'should return exercises hash inside array' do
			response = @lesson.get_exercises(user)
			expect(response[0][:id]).to eq(@lesson.id)
			expect(response[0][:position]).to eq(exercise.position)
			expect(response[0][:name]).to eq(exercise.name)
			expect(response[0][:completed]).to eq(exercise.completed?(user))
			expect(response[0][:next_up]).to eq(exercise.next_up?(user))
		end
	end

end