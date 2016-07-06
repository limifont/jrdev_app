class Api::LessonsController < ApiController
	def index
		render json: Lesson.all
	end
end
