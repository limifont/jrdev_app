class Api::ClassroomsController < ApiController
  before_action :classroom, except: [:index, :create]

  def index
  	render json: current_user.classrooms
  end

  def index_jrdevs
    render json: @classroom.jrdevs
  end

  def show
  	render json: @classroom
  end

  def create
  	@classroom = current_user.classrooms.new(classroom_params)
  	if @classroom.save
  		render json: @classroom
  	else
  		render json: {erors: @classroom.errors.full_messages}
  	end
  end

  def update
  	if @classroom.update(classroom_params)
  		render json: @classroom.reload
  	else
  		render json: {errors: @classroom.errors.full_messages}
  	end
  end

  def destroy
  	@classroom.destroy
  	render json: true
  end

  def student_stats
    render json: @classroom.student_stats
  end

  private
  	def classroom
  		@classroom = current_user.classrooms.find_by(id: params[:id])
  	end

  	def classroom_params
      params.require(:classroom).permit(:name)
    end
end
