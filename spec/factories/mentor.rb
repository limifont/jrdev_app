FactoryGirl.define do
	factory :mentor do
		sequence :email do |n|
			"mentoremail#{n}@email.com"
		end
		name "test user"
		sequence :username do |n|
			"test mentor username #{n}"
		end
		password "password"
		password_confirmation "password"
		type "Mentor"
	end
end