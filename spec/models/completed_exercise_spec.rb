require 'rails_helper'

RSpec.describe CompletedExercise, type: :model do
	let(:completed_exercise) {FactoryGirl.create(:completed_exercise)}

	describe 'attributes' do
		it { should belong_to :exercise }
		it { should belong_to :user }
	end

	describe 'exercises_by_day' do
		it 'should return array with exercises completed by day' do
			user = User.find(completed_exercise.user_id)
			arr = CompletedExercise.exercises_by_day(user)
			expect(arr[0]).to eq({ x: '', y: 0 })
			expect(arr[1][:x]).to eq(Time.now.strftime("%D"))
			expect(arr[1][:y]).to eq(1)
		end
	end
end