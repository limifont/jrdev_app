class Api::LessonsController < ApplicationController
	def run_code
		begin
			render json: eval(params[:code])
		rescue => e
			render json: e.message.to_json
		end
	end
end
