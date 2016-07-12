require 'rails_helper'

RSpec.describe Exercise, type: :model do
	let(:exercise) { FactoryGirl.create(:exercise) }
	let(:exercise2) { FactoryGirl.create(:exercise) }
	let(:user) { FactoryGirl.create(:user) }

	before(:each) do
		@lesson = Lesson.find(exercise.lesson_id)
	end

	describe 'validations' do
		it { should validate_presence_of :name }
		it { should validate_presence_of :instruction }
		it { should validate_presence_of :expected_output }
		it { should validate_presence_of :position }
	end

	describe 'attributes' do
		it { should belong_to :lesson }
	end
	
	describe 'last?' do
		it 'should return true as exercise is last' do
			expect(exercise.last?(@lesson)).to eq(true)
		end
	end

	describe 'first?' do
		it 'should return true as exercise is first' do
			expect(exercise.first?(@lesson)).to eq(true)
		end
	end

	describe 'completed?' do
		it 'should return false as the exercise is not complted' do
			expect(exercise.completed?(user)).to eq(false)
		end
	end

	describe 'next_up?' do
		it 'should return false as not exercises are completed' do
			expect(exercise.next_up?(user)).to eq(false)
		end
	end

end
