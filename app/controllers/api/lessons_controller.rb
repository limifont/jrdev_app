class Api::LessonsController < ApiController
	def index
		lessons = []
		user = User.find_by(id: params[:user_id])
		Lesson.all.each do |lesson|
			lessons << {
				id: lesson.id,
				name: lesson.name,
				completed: lesson.completed?(user),
				exercises_count: lesson.exercises_count,
				exercises_completed_count: lesson.exercises_completed_count(user)
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
