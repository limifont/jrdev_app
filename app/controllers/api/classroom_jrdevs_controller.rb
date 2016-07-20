class Api::ClassroomJrdevsController < ApiController
	before_action :classroom

	def index
		render json: @classroom.jrdevs
	end

	def user_classrooms
		# returns an array with whatever column you specify
		students_per_class = []
		classrooms = Classroom.where(user_id: current_user).pluck(:id)
		classrooms.each do |classroom|
			students_per_class << ClassroomJrdev.where(classroom_id: classroom).count
		end

		render json: students_per_class
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
		@classroom.classroom_jrdevs.find_by(jrdev_id: params[:jrdev_id]).delete
		render json: true
	end

	private

	def classroom
		@classroom = current_user.classrooms.find_by(id: params[:id])
	end
end
