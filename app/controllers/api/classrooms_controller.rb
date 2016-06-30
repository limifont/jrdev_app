class Api::ClassroomsController < ApplicationController
  before_action :classroom, except: [:index, :create]

  def index
  	render json: Classroom.all
  end

  def show
  	render json: @classroom
  end

  def create
  	@classroom = Classroom.new(classroom_params)
  	if @classroom
  		render json: @classroom
  	else
  		render json: {erors: @classroom.errors.full_messages}
  	end
  end

  def update
  	if @classroom.update(classroom_params)
  		render json: @classroom.reload
  	else
  		render json: {erors: @classroom.errors.full_messages}
  	end
  end

  def destroy
  	@classroom.destroy
  	render json: true
  end

  private
  	def classroom
  		@classroom = Classroom.find(params[:id])
  	end

  	def classroom_params
      params.require(:classroom).permit(:name, :user_id)
    end
end
