FactoryGirl.define do
	factory :educator do
		sequence :email do |n|
			"educatoremail#{n}@email.com"
		end
		name "test user"
		sequence :username do |n|
			"test educator username #{n}"
		end
		password "password"
		password_confirmation "password"
		type "Educator"
	end
end