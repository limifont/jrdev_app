class User < ActiveRecord::Base
	has_many :classrooms
	has_many :mentors_jrdevs
	has_many :users, through: :mentors_jrdevs
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :lessons, through: :completed_lessons
  has_many :exercises, through: :completed_exercises
  has_many :completed_lessons
  has_many :lessons, through: :completed_lessons
  has_many :completed_exercises
  has_many :exercises, through: :completed_exercises
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_create do |user|
    user.api_key = user.generate_api_key
    user.secret_phrase = user.generate_secret_phrase if user.type == "Jrdev"
  end

  def generate_api_key
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(api_key: token)
    end
  end

  def generate_secret_phrase
    loop do
      arr = [Faker::StarWars.planet, Faker::StarWars.specie, Faker::StarWars.vehicle]
      phrase = arr.shuffle.join.gsub(/ /,'')
      break phrase unless User.exists?(secret_phrase: phrase)
    end
  end

  def get_classrooms
    classrooms = []
    self.classrooms.each do |classroom|
      classrooms << { classroom: classroom, educator: classroom.user }
    end
    return classrooms
  end

  def get_lessons
    lessons = []
    Lesson.all.each do |lesson|
      lessons << {
        id: lesson.id,
        name: lesson.name,
        completed: lesson.completed?(self),
        exercises_count: lesson.exercises_count,
        exercises_completed_count: lesson.exercises_completed_count(self)
      }
    end
    return lessons
  end

  def self.mentors
  	where(type: 'Mentor')
  end

  def self.educators
  	where(type: 'Educator')
  end

  def self.jrdevs
  	where(type: 'Jrdev')
  end

  def self.jrdev_names
  	where(type: 'Jrdev').pluck(:name)
  end

  def self.types
  	%w(Mentor Educator Jr\ Dev)
  end
end
