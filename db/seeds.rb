15.times do |num|
	Jrdev.find_or_create_by(username: "jrdev#{num}", password: "password", email: "jrdev#{num}@gmail.com", name: "jrdev#{num}")
end

educator =	Educator.find_or_create_by(username: "teacher", password: "password", email: "teacher@gmail.com", name: "teacher")

mentor = Mentor.find_or_create_by(username: "mentor", password: "password", email: "mentor@gmail.com", name: "mentor")

lesson1 = Lesson.find_or_create_by(name: "Intro to Programming")
exercise1_1 = Exercise.find_or_create_by(
	lesson_id: lesson1.id, 
	name: "What is Code", 
	instruction: "What is code? Code is just instructions that a computer knows how to follow. <br />
	  A computer is kind of like a calculator, you can give it some instructions, and it will follow them. For example, a computer can follow instructions to do math. <br />
	  Click the 'Run' button at the bottom of the screen to run the code and see what happens",
	prefill: "puts 2 + 2",
	expected_output: "4",
	position: 1
	)
exercise1_2 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Let's do math!",
	instruction: "Your turn! Write some code after 'puts' that subtracts 3 from 5. <br />
	  Click 'Run' when you are done to see if you got it right.",
	prefill: "puts",
	expected_output: "2",
	position: 2
	)
exercise1_3 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "What is puts?",
	instruction: "You probably noticed the word 'puts' in the last two exercises. In ruby, the word puts is a command (instruction) that tells the computer what to put to the console. <br />
	  See that black square on the right? That is the console. If you don't tell the computer what to output to the console, it will show nothing. <br />
	  The code below is missing puts. Click run to see what happens without 'puts.' Done? Now add 'puts' at the beginning of the line and run the code again.",
  prefill: "2 + 2",
  expected_output: "4",
  position: 3
	)
exercise1_4 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Working with Words",
	instruction: "Computers can also handle words as well. Type the words 'Hello, world' after the 'puts' and run the code",
	prefill: "puts",
	expected_output: "Hello, world",
	position: 4
	)
exercise1_5 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "More Words",
	instruction: "Let's try it again, but starting from scratch. Write your own code that will output the words 'I love coding!'",
	prefill: "",
	expected_output: "I love coding!",
	position: 5
	)


# TODO: have code examples in the editor for the code below sections.

lesson2 = Lesson.find_or_create_by(name: "Variables")
	exercise2_1 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Intro",
		instruction: "In programing, we often use a tool called a 'variable.' Variables are like boxes. They hold something for us.
		In the code below, you can see that the variable 'x' is holding the words 'Hello, World'.
		Let\'s run the code below to see what happens when we 'puts x'.",
		prefill: "x = 'Hello, World'\nputs x",
		expected_output: "Hello, World",
		position: 1 
		)
	exercise2_2 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Cont.",
		instruction: "As you can see, when we run the code, the 'puts x' in the editor displays 'Hello, World' in the console.
		This is because when the computer sees 'x' after 'puts' it looks to see what 'x' is holding and prints that out onto the screen. <br />
		How about you give it a try now? <br />
		Instead of putting 'Hello, World' into the 'x' variable, have fun and put your own word!",
		prefill: "x = 'Hello, World'\nputs x",
		expected_output: "\\S",
		position: 2
		)
	exercise2_3 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variable Naming",
		instruction: "Variables can take shape into many forms of words. We can name a variable whatever we want.
		In the code below we can see all sorts of words that acts like a variable.",
		prefill: "pokemon = 'cool'\nteam = 'Yellow'\nputs pokemon\nputs team",
		expected_output: "\\S",
		position: 3
		)
	exercise2_4 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Naming Exercise",
		instruction: "Now its your turn! In the editor below, name a variable 'food' and have it equal to your favorite food and print to the console. (Hint: Remember to use quotations!)", 
		prefill: "food = ''\nputs ",
		expected_output: "\\S",
		position: 4
		)
	exercise2_5 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Naming Cont.",
		instruction: "Variables can also be a combination of words with numbers as well. Check out the example in the text editor. <br />I bet you can guess what the console will print out!", 
		prefill: "my_favorite_game = 'Pokemon Go'\ntrainer1 = 'Ash'\ntrainer2 = 'Misty'",
		expected_output: ["Pokemon Go", "↵", "Ash", "↵", "Misty", "↵"],
		position: 5
		)
	exercise2_6 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Naming Exercise Cont.",
		instruction: "Now lets make your own variables with a combination of words and numbers. Then assign it value of a string to display on the console.",
		prefill: "# You can do it!",
		expected_output: "\\S",
		position: 6
		)
		# TODO: hint of using puts
	# TODO: have a recap quiz. have a recap of puts, what is a string, number, and the new concept of variables.
	
lesson3 = Lesson.find_or_create_by(name: "Variables Manipulation")
	exercise3_1 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables Manipulation",
		instruction: "Remember back in Lesson 1 when we learned that we could take a few values (numbers) and play with them in our code so that when we pressed 'run,' a new number would be printed out? <br />
		Well now we're going to show you that you can have fun with words, too!<br />
		Take a look at the code below and guess what will be displayed in the console when you press the 'run' button.<br />
		Were you right?",
		prefill: "",
		position: 1
		)
	exercise3_2 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables Manipulation cont.",
		instruction: "Were you right? As you saw in the last exercise, when we added two variables, and it added the two values together.
		we can do this with any numbers and with any operations. <br />
		In the editor below, lets make some variables and have the be need whatever you want, and then have them assigned to a number value.
		lets see how many different ways we can have the value print out 10 in the console.",
		position: 2
		)
	# TODO: have a hint of the first example to start them off, 5 + 5 = 10 etc.
	exercise3_3 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables, values of strings, and operations",
		instruction: "You may be wondering if we can also have the operations works with strings. lets try running the code below to see the what each code does.", 
		position: 3
		)
	exercise3_4 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables, values of strings, and operations recap",
		instruction: "Ok. lets recap, as you saw in the last exercise, all of the values throws errors all but except for one.
	  when we add two separate strings together we get a combination of the two strings. This is because the + operations has two meanings, when it is with numbers it means add and with it is with strings it means combined.
	  With the other operations we get an error because in programing you cannot use the other operations with strings.",
	  position: 4
	  )
	exercise3_5 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables Review",
		instruction: "So far we learned about variables and how we can name them whatever we want, and then have it assigned with = sign and then have anything be its value.
		we also learned how to manipulate variables with operations and have different outputs when doing so.
		Now that we learned all about variables, lets see what you learned in our Variable review quiz.",
		position: 5
		)
	# TODO: final review quiz and achievement of completion.


