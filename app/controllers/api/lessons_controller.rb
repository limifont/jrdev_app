class Api::LessonsController < ApplicationController
	def run_code
		begin
			render json: eval(params[:code]).to_json
		rescue => e
			render json: e.message.to_json
		end

		# cli = Cliqr.interface do
		# 	name 'repl'
		# 	description 'safely handling code'

		# 	handler do
		# 		binding.pry
		# 		send(code)
		# 	end

		# 	option :code do
		# 		description 'Code from user'
		# 	end
		# end

		# binding.pry

		# code = params[:code]

		# results = cli.execute([--code, code])

		# binding.pry

		# render json: results
		# binding.pry
		# file = File.open("./code.rb", "w") { |f| f.write("#{params[:code]}")}
		# results = `ruby ./code.rb`
		# File.delete("./code.rb")

		# result = `eval(params[:code])`
		# new_class = `2 + 2`
		# binding.pry
	end
end
