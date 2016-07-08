class Api::LessonsController < ApiController
	def index
		lessons = []
		Lesson.all.each do |lesson|
			lessons << {
				id: lesson.id,
				name: lesson.name,
				completed: lesson.completed?(current_user),
				exercises_count: lesson.exercises_count,
				exercises_completed_count: lesson.exercises_completed_count(current_user)
			}
		end
		render json: lessons
	end

	def show
		lesson = Lesson.find(params[:id])
		exercises = lesson.get_exercises(current_user)
		render json: {lesson: lesson, exercises: exercises}
	end
end
