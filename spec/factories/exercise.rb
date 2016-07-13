FactoryGirl.define do
	factory :exercise do
		sequence :name do |n|
			"exercise_#{n}"
		end
		instruction "test instructions"
		expected_output "2"
		sequence :position do |n| 
			n
		end
		lesson
	end
end