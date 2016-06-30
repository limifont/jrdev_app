class User < ActiveRecord::Base
	has_many :classrooms
	has_many :mentors_jrdevs
	has_many :users, through: :mentors_jrdevs
  has_many :friendships
  has_many :friends, through: :friendships
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
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
