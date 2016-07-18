require 'rails_helper'

RSpec.describe Api::ClassroomsController, type: :controller do
	let(:classroom) { FactoryGirl.create(:classroom) }

	before(:each) do
		@user = Educator.find(classroom.user_id)
	end

	describe 'GET #index' do
		it 'returns http success' do
			sign_in @user
			get :index
			expect(response).to have_http_status(:success)
		end

		it 'renders the correct json response' do
			binding.pry
			json = JSON.parse(response.body)
		end

	end

end