class SignupMailer < ApplicationMailer
	include SendGrid
	default from: ENV['MAIL_FROM']
  sendgrid_category :use_subject_lines

	def new_signup(user)
<<<<<<< HEAD
		puts user
=======
>>>>>>> ff44d0bb56804062f09756b4374f63ae8e979dab
		sendgrid_category "Welcome"
		mail(to: user.email, subject: 'Thanks for signing up!') do |format|
			format.html { render 'new_signup.html.erb' }
			format.text { render 'new_signup.text.erb' }
		end
	end
end
