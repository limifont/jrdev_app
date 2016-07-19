FactoryGirl.define do
	factory :jrdev do
		sequence :email do |n|
			"jrdevemail#{n}@email.com"
		end
		name "test user"
		sequence :username do |n|
			"test jrdev username #{n}"
		end
		password "password"
		password_confirmation "password"
		type "Jrdev"
	end
end