class Api::ClassroomJrdevsController < ApiController
	before_action :classroom

	def index
		render json: @classroom.jrdevs
	end

	def create
		jrdev = Jrdev.find_by(secret_phrase: params[:secret_phrase])
		classroom_jrdev = @classroom.classroom_jrdevs.new(jrdev_id: jrdev.id)
		if classroom_jrdev.save 
			render json: jrdev
		else
			render json: { errors: classroom_jrdev.errors.full_message }
		end
	end

	def destroy
	end

	private

	def classroom
		@classroom = current_user.classrooms.find_by(id: params[:id])
	end
end
