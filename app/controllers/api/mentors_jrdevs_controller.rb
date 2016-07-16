class Api::MentorsJrdevsController < ApiController
	def index
		render json: MentorsJrdev.UserMentees(current_user)
	end

	def create
		if current_user.type == "Mentor"
			jrdev = Jrdev.find_by(secret_phrase: params[:secret_phrase])
			mentors_jrdev = MentorsJrdev.new(mentor_id: current_user.id, jrdev_id: jrdev.id)
			if mentors_jrdev.save
				render json: jrdev
			else
				render json: { errors: mentors_jrdev.errors.full_messages }, status: 400 
			end
		end
	end

	def destroy
		mentor = Mentor.find_by(id: params[:mentor_id])
		mentor.mentors_jrdevs.find_by(jrdev_id: params[:jrdev_id]).delete
		render json: true
	end
end
