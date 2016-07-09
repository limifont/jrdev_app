class Api::UsersController < ApiController
	before_action :user

	def show
		render json: @user
	end

	def show_stats
		exercises_by_day = CompletedExercise.exercises_by_day(@user)
		classrooms = @user.get_classrooms
		mentors = @user.mentors
		render json: { exercises_by_day: exercises_by_day, classrooms: classrooms, mentors: mentors }
	end

	private

	def user
		@user = User.find_by(id: params[:id])
	end
end
