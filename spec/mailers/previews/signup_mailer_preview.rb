class SignupMailerPreview < ActionMailer::SignupMailerPreview
	def new_signup_preview
		SignupMailer.new_signup(User.last)
	end
end