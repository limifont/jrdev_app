class Api::ExercisesController < ApplicationController
  before_action :exercise, except: [:index, :create]

  def index
    render json: Exercise.all
  end

  def show
    render json: @exercise
  end

  def create
    @exercise = Exercise.create(exercise_params)

    if @exercise
      render json: @exercise
    else
      render json: {errors: @exercise.errors.full_messages}
    end
  end

  def update
    if @exercise.update(exercise_params)
      render json: @exercise.reload
    else
      render json: {errors: @exercise.errors.full_messages}
    end
  end

  def destroy
    @exercise.destroy
    render json: true
  end

  private

    def exercise_params
      params.require(:exercise).permit(:instruction)
    end

    def exercise
      @exercise = Exercise.find_by(id: params[:id])
    end

end
