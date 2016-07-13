FactoryGirl.define do
	factory :lesson do
		sequence :name do |n|
			"lesson_#{n}"
		end
	end
end