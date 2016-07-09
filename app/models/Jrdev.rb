class Jrdev < User
	has_many :mentors_jrdevs
	has_many :mentors, through: :mentors_jrdevs
	has_many :classroom_jrdevs
	has_many :classrooms, through: :classroom_jrdevs
end