class Api::UsersController < ApiController
	before_action :user

	def show
		render json: @user
	end

	def show_classroom_averages
		render json: current_user.get_averages
	end

	def new_secret_phrase
		secret_phrase = User.generate_secret_phrase
		render json: {secret_phrase: secret_phrase}
	end

	def update
		if @user.update(user_params)
			render json: @user.reload
		else
			render json: {errors: @user.errors.full_messages}
		end
	end


	def show_stats
		exercises_by_day = CompletedExercise.exercises_by_day(@user)
		classrooms = @user.get_classrooms
		mentors = @user.mentors
		
		render json: { jrdev: @user, exercises_by_day: exercises_by_day, classrooms: classrooms, mentors: mentors }
	end

	private

		def user
			@user = User.find_by(id: params[:id])
		end

		def user_params
			params.require(:user).permit(:secret_phrase)
		end
end
