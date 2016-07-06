class Api::CompletedLessonsController < ApiController
	def index
		render json: current_user.finished_lessons
	end
end
