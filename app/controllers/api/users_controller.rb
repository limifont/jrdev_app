class Api::UsersController < ApiController
	def show
		user = User.find_by(id: params[:id])
		if params[:type] == "Jrdev"
			render json: { jrdev: user }	
		else
			render json: user
		end
	end
end
