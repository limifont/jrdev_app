class Api::CompletedExercisesController < ApplicationController
	def create
		completed_exercise = CompletedExercise.create(user_id: current_user.id, exercise_id: params[:id])
		if completed_exercise.save
			render json: true
		else
			render json: false
		end 
	end
end
