FactoryGirl.define do
	factory :user do
		sequence :email do |n|
			"email#{n}@email.com"
		end
		name "test user"
		sequence :username do |n|
			"test username #{n}"
		end
		password "password"
		password_confirmation "password"
		type "Jrdev"
	end
end