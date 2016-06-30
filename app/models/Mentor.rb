class Mentor < User
	has_many :mentors_jrdevs

	def jrdevs
		mentors_jrdevs.map{ |j| Jrdev.find(j.jrdev_id)}
	end
end