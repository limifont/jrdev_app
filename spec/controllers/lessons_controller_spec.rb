require 'rails_helper'

RSpec.describe Api::LessonsController, type: :controller do
	let(:user) { FactoryGirl.create(:user) }
	let(:exercise) { FactoryGirl.create(:exercise) }

	before(:each) do
		@lesson = Lesson.find(exercise.lesson_id)
	end

	describe 'GET #index' do
		it 'returns http success' do
			get :index, user_id: user.id
			expect(response).to have_http_status(:success)
		end

		it 'renders correct json response' do
			get :index, user_id: user.id
			json = JSON.parse(response.body)
			expect(json[0]["id"]).to eq(@lesson.id)
			expect(json[0]["name"]).to eq(@lesson.name)
			expect(json[0]["completed"]).to eq(@lesson.completed?(user))
			expect(json[0]["exercises_count"]).to eq(@lesson.exercises_count)
			expect(json[0]["exercises_completed_count"]).to eq(@lesson.exercises_completed_count(user))
		end
	end

	describe 'GET #show' do
		before(:each) do
			sign_in user
			get :show, id: @lesson.id
		end

		it 'returns http succes'do
			expect(response).to have_http_status(:success)
		end

		it 'renders correct json response' do
			json = JSON.parse(response.body)
			expect(json['lesson']['id']).to eq(@lesson.id)
			expect(json['lesson']['name']).to eq(@lesson.name)
			expect(json['lesson']['position']).to eq(@lesson.position)
		end
	end
end