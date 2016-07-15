FactoryGirl.define do
	factory :lesson do
		sequence :name do |n|
			"lesson_#{n}"
		end
		sequence :position do |n|
			n
		end
	end
end