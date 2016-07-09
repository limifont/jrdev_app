class Jrdev < User
	has_many :mentors_jrdevs
	has_many :mentors, through: :mentors_jrdevs
end