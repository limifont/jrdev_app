# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

lesson1 = Lesson.find_or_create_by(name: "Intro to programming")
exercise1_1 = Exercise.find_or_create_by(
	lesson_id: lesson1.id, 
	name: "What is code", 
	instruction: "What is code? Code is just instructions that a computer knows how to follow. <br />
	A computer is kind of like a calculator, you can give it some instructions, and it will follow them. Also, like a calcultor, a computer can do math. <br />
	Click the 'Run' button at the bottom of the screen to run the code and see what happens",
	prefill: "puts 2 + 2"
	)
