class Api::FriendshipsController < ApiController
  def index
		@users = User.all
	end

	def create
		@friendship = Friendship.create(user_id: current_user.id, friend_id: params[:friend_id])
		@inverse = Friendship.create(user_id: params[:friend_id], friend_id: current_user.id)
		redirect_to root_path
	end

	def destroy
	end

	private

	def set_user
		@user = User.find(params)
	end
end
