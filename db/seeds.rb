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
	name: "What is Code", 
	instruction: "What is code? Code is just instructions that a computer knows how to follow. <br />
	  A computer is kind of like a calculator, you can give it some instructions, and it will follow them. Also, like a calcultor, a computer can do math. <br />
	  Click the 'Run' button at the bottom of the screen to run the code and see what happens",
	prefill: "puts 2 + 2",
	expected_output: "4"
	)
exercise1_2 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Do Some Math",
	instruction: "Your turn! Write some code after 'puts' that subtracts 3 from 5. <br />
	  Click 'Run' when you are done to see if you got it right.",
	prefill: "puts",
	expected_output: "2"
	)
exercise1_3 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "What is puts?",
	instruction: "You probably noticed the word puts in the last two exercises. In ruby, the word puts is a command (or instructions) that tells the computer what to output to the console. <br />
	  See that black square on the right? That is the console. If you don't tell the computer what to output to the console, it will show nothing. <br />
	  The code below is missing puts. Click run to see what happens without puts. Done? Now add puts at the beginning of the line and run the code again.",
  prefill: "2 + 2",
  expected_output: "4"
	)
