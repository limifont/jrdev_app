class Api::CompletedLessonsController < ApiController
	def index
		render json: current_user.lessons
	end

	def create
		completed_lesson = CompletedLesson.create(user_id: current_user.id, lesson_id: params[:id])
		if completed_lesson.save
			render json: true
		else
			render json: false
		end 
	end
end
