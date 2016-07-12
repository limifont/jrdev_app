require 'rails_helper'

RSpec.describe Exercise, type: :model do
	let(:exercise) { FactoryGirl.create(:exercise) }

	describe 'validations' do
		it { should validate_presence_of :name }
		it { should validate_presence_of :instruction }
		it { should validate_presence_of :expected_output }
		it { should validate_presence_of :position }
	end
	
end
