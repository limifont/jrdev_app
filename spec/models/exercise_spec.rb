# == Schema Information
#
# Table name: exercises
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  instruction     :text             not null
#  prefill         :string
#  expected_output :string           not null
#  expected_code   :string
#  position        :integer          not null
#  lesson_id       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

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

	context 'with no exercises completed' do
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
			it 'should return true as this is first exercise and no exercises are completed' do
				expect(exercise.next_up?(user)).to eq(true)
			end

			it 'should return false' do
				expect(exercise2.next_up?(user)).to eq(false)
			end
		end
	end
	
	context 'with an exercise completed' do
		before(:each) do
			CompletedExercise.find_or_create_by(user_id: user.id, exercise_id: exercise.id)
		end

		it 'should return true for completed exercise' do
			expect(exercise.completed?(user)).to eq(true)
		end

		it 'should return false for next_up' do
			expect(exercise.next_up?(user)).to eq(false)
		end

		it 'should return true for next_up' do
			expect(exercise2.next_up?(user)).to eq(true)
		end
	end

end
