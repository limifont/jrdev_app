class User < ActiveRecord::Base
	has_many :classrooms
	has_many :mentors_jrdevs
	has_many :jrdevs, through: :mentors_jrdevs
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
    user.secret_phrase = User.generate_secret_phrase if user.type == "Jrdev"
  end

  after_create :send_welcome_email

  def generate_api_key
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(api_key: token)
    end
  end

  
  def self.generate_secret_phrase
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

  def get_averages
    classrooms = []
    average_total = 0
    self.classrooms.each do |classroom|
      average = classroom.average
      classrooms << { x: classroom.name, y: average }
      average_total += average
    end
    return { classrooms: classrooms, average_total: average_total }
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

  private
    def send_welcome_email
      user = self
      SignupMailer.new_signup(user)
    end
end
