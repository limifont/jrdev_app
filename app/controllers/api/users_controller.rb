class Api::UsersController < ApiController
	def show
		
		user = User.find_by(id: params[:id])
		render json: user
	end
end
