class Api::ExercisesController < ApiController
  before_action :lesson
  before_action :exercise, except: [:index, :create]

  def index
    render json: Exercise.all
  end

  def show
    is_last = @exercise.last?(@lesson)
    is_first = @exercise.first?(@lesson)
    is_completed = @exercise.completed?(current_user)
    render json: { exercise: @exercise, last: is_last, first: is_first, completed: is_completed }
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

    def lesson
      @lesson = Lesson.find_by(id: params[:lesson_id])
    end

    def exercise
      @exercise = @lesson.exercises.find_by(position: params[:id])
    end

end
