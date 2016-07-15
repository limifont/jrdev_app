require 'rails_helper'

RSpec.describe Classroom, type: :model do
	let(:user) { FactoryGirl.create(:user) }
	let(:classroom) { FactoryGirl.create(:classroom)}

	describe 'association' do
		it { expect belong_to(:user) }
		it { should have_many( :classroom_jrdevs )}
		it { should have_many( :jrdevs )}
	end

	describe 'jrdevs' do
		it 'should return all of the Jrdevs id in the classrooms' do
			expect(classroom.jrdevs.length).to eq(0)
		end
	end

	describe 'Students' do
		it 'should have a record of the students in the class'
	end
end