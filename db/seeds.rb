# 15.times do |num|
# 	User.create(username: "jrdev#{num}", password: "password", password_confirmation: "password", email: "jrdev#{num}@gmail.com", name: "jrdev#{num}", type: "Jrdev")
# end

# educator =	User.create(username: "teacher", password: "password", password_confirmation: "password", email: "teacher@gmail.com", name: "teacher", type: "Educator")

# mentor = User.create(username: "mentor", password: "password", password_confirmation: "password", email: "mentor@gmail.com", name: "mentor", type: "Mentor")

lesson1 = Lesson.create(name: "Intro to Programming", icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/c_scale,w_80/v1468874271/Lesson1_jbkaq9.png', position: 1)
exercise1_1 = Exercise.find_or_create_by(
	lesson_id: lesson1.id, 
	name: "What is Code?", 
	instruction: "What is code? Code is just instructions that a computer knows how to follow. <br />
	  A computer is kind of like a calculator, you can give it some instructions, and it will follow them. For example, a computer can follow instructions to do math. <br />
	  Click the 'Run' button at the bottom of the screen to run the code and see what happens",
	prefill: "puts 2 + 2",
	expected_code: "puts 2 + 2",
	code_regex: false,
	expected_output: "4",
	output_regex: false,
	position: 1
	)
exercise1_2 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Let's do Math!",
	instruction: "Your turn! Write some code after 'puts' that subtracts 3 from 5. <br />
	  Click 'Run' when you are done to see if you got it right.",
	prefill: "puts",
	expected_code: "puts 5 - 3",
	code_regex: false,
	expected_output: "2",
	output_regex: false,
	position: 2
	)
exercise1_3 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "What is Puts?",
	instruction: "You probably noticed the word 'puts' in the last two exercises. In ruby, the word puts is a command (instruction) that tells the computer what to put to the console. <br />
	  See that black square on the right? That is the console. If you don't tell the computer what to output to the console, it will show nothing. <br />
	  The code below is missing puts. Click run to see what happens without 'puts.' Done? Now add 'puts' at the beginning of the line and run the code again.",
  prefill: "2 + 2",
  expected_code: "puts 2 + 2",
  code_regex: false,
  expected_output: "4",
  output_regex: false,
  position: 3
	)
exercise1_4 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Working with Words",
	instruction: "Computers can also handle words as well. As long as they are inside quotation marks, the computer know to treat them as normal words and not as code. <br />
		Type the words 'Hello, world' after the 'puts' and run the code (be sure to include the quotation marks).",
	prefill: "puts",
	expected_code: "\(puts 'Hello, world')|(puts \"Hello, world\")",
	code_regex: true,
	expected_output: "Hello, world",
	output_regex: false,
	position: 4
	)
exercise1_5 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "More Words",
	instruction: "Let's try it again, but starting from scratch. Write your own code that will output the words 'I love coding!'",
	prefill: "",
	expected_code: "[\\s\\S]*(\\s=\\s')(.*)[\\s\\S]*(puts )[\\s\\S]*",
	code_regex: true,
	expected_output: "I love coding!",
	output_regex: false,
	position: 5
	)
exercise1_6 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Data Types",
	instruction: "In coding, we call words and numbers data types (data is just another word for information). A computer can recognize many different data types. <br />
		These data types have special names. Whole numbers like 2 or 15 or are called integers (decimal numbers like 3.5 are called something different). Words inside quotation marks are called strings. <br />
		There are many other data types, but let's start with just strings and integers. Run the below code to review what we just learned!",
	prefill: "x = 'Coding is the best!'\ny = 57\nputs 'x is a string! Y is an integer!'",
	expected_code: "\(x = 'Coding is the best!')\\s(y = 57)\\s(puts 'x is a string! Y is an integer!')",
	code_regex: true,
	expected_output: "x is a string! Y is an integer!",
	output_regex: false,
	position: 6
	)
exercise1_7 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Data Types Review",
	instruction: "Wondering what x and y were in the last exercise? These are variables, you'll learn all about them in the next lesson. Solve this last problem to move on to the Variables lesson! <br />
	  Replace the blank spaces in the code below with the correct data type names",
	prefill: "x = 45\ny = 'I love data types!'\nputs 'x is an _ and y is a _",
	expected_code: "\(x = 45)\\s(y = 'I love data types!')\\s(puts 'x is an integer and y is a string')",
	code_regex: true,
	expected_output: "x is an integer and y is a string",
	output_regex: false,
	position: 7
	)


# TODO: have code examples in the editor for the code below sections.

lesson2 = Lesson.find_or_create_by(name: "Variables", position: 2)
	exercise2_1 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Intro",
		instruction: "In programing, we often use a tool called a 'variable.' Variables are like boxes. They hold something for us.
		In the code below, you can see that the variable 'x' is holding the words 'Hello, World'.
		Let\'s run the code below to see what happens when we 'puts x'",
		prefill: "x = 'Hello, World'\nputs x",
		expected_code: "\(x = 'Hello, World')\\s(puts x)",
		code_regex: true,
		expected_output: "Hello, World",
		output_regex: false,
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
		expected_code: "[\\s\\S]*( = ')[\\s\\S]*(')\\s(puts )[\\s\\S]*",
		code_regex: true,
		expected_output: "\\S",
		output_regex: true,
		position: 2
		)
	exercise2_3 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variable Naming",
		instruction: "Variables can take shape into many forms of words. We can name a variable whatever we want.
		In the code below we can see all sorts of words that acts like a variable.",
		prefill: "pokemon = 'cool'\nteam = 'Yellow'\nputs pokemon\nputs team",
		expected_code: "\(pokemon = 'cool')\\s(team = 'Yellow')\\s(puts pokemon)\\s(puts team)",
		code_regex: true,
		expected_output: "Yellow",
		output_regex: false,
		position: 3
		)
	exercise2_4 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Naming Exercise",
		instruction: "Now its your turn! In the editor below, name a variable 'food' and have it equal to your favorite food and print to the console. (Hint: Remember to use quotations!)", 
		prefill: "food = ''\nputs ",
		expected_code: "\(\\s=\\s')(.*)(')[\\s\\S]*(puts )",
		code_regex: true,
		expected_output: "\\S",
		output_regex: true,
		position: 4
		)
	exercise2_5 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Naming Cont.",
		instruction: "Variables can also be a combination of words with numbers as well. Check out the example in the text editor. <br />I bet you can guess what the console will print out! Instead of our example, try doing 'puts trainer1' or 'puts trainer2' to see what happens!", 
		prefill: "my_favorite_game = 'Pokemon Go'\ntrainer1 = 'Ash'\ntrainer2 = 'Misty'\nputs my_favorite_game",
		expected_code: "\(my_favorite_game = 'Pokemon Go')\\s(trainer1 = 'Ash')\\s(trainer2 = 'Misty')",
		code_regex: true,
		expected_output: "(Pokemon Go)|(Ash)|(Misty)",
		output_regex: true,
		position: 5
		)
	exercise2_6 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Naming Exercise Cont.",
		instruction: "Now lets make your own variables with a combination of words and numbers. Make the variable equal to a string and then display it in the console!",
		prefill: "# You can do it!",
		expected_code: "\(\\s=\\s')(.*)(')[\\s\\S]*(puts )",
		code_regex: true,
		expected_output: "\\S",
		output_regex: true,
		position: 6
		)
		# TODO: hint of using puts
	# TODO: have a recap quiz. have a recap of puts, what is a string, number, and the new concept of variables.
	
lesson3 = Lesson.find_or_create_by(name: "Variables Manipulation", position: 3)
	exercise3_1 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables Manipulation",
		instruction: "Remember back in Lesson 1 when we learned that we could take a few values (numbers) and play with them in our code so that when we pressed 'run,' a new number would be printed out? <br />
		Now instead of using the numbers themselves, we're going to use variables to do math!<br />
		Take a look at the code below and guess what will be displayed in the console when you press the 'run' button.<br />",
		prefill: "x = 2\ny = 3\nputs x + y",
		expected_code: "(x = 2)[\\s\\S]*(y = 3)[\\s\\S]*",
		code_regex: true,
		expected_output: '5',
		output_regex: false,
		position: 1
		)
	exercise3_2 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables Manipulation cont.",
		instruction: "Were you right? As you saw in the last exercise, when we added two variables, it added the two values together.<br />
		We can do this with any numbers and with any operation. <br />
		In the editor below, let's make some variables called 'x' and 'y' and then assign a number value to the variable.<br />
		Let's see how many different ways we can use 'x' and 'y' to print out to be 10 in the console!",
		prefill: "x = \ny = \nputs x + y",
		expected_code: "\(x = )(-[\\d]*|[\\d]*)[\\s]*(y = )(-[\\d]*|[\\d]*)[\\s]*(puts x . y)",
		code_regex: true,
		expected_output: '10',
		output_regex: false,
		position: 2
		)
	# TODO: have a hint of the first example to start them off, 5 + 5 = 10 etc.
	exercise3_3 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables, values of strings, and operations",
		instruction: "You may be wondering if we can also have the operations works with strings. Let's try running the code below to see what happens! Once you are finished, you can try playing adding different variables together too!", 
		prefill: "instinct = 'Yellow Team'\nmystic = 'Blue Team'\nvalor = 'Red Team'\n\n\nbest = ' is the best team!'\nok = ' is ok.'\nok2 = ' is ok, too.'\n\nputs instinct + best",
		expected_code: "(instinct = 'Yellow Team')\\s*(mystic = 'Blue Team')\\s*(valor = 'Red Team')\\s*(best = ' is the best team!')\\s*(ok = ' is ok.')\\s*(ok2 = ' is ok, too.')\\s*(puts instinct . best)",
		code_regex: true,
		expected_output: "(Yellow Team is the best team!)",
		output_regex: true,
		position: 3
		)
	exercise3_4 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables, values of strings, and operations recap",
		instruction: "From the last exercise we saw that variables that hold strings can be added together. Try running the following code and see what happens!<br />
		As you can see, all of the values throw errors except for one. Why is that? <br />
	  Well, when we add two separate strings together we get a combination of the two strings. This is because the '+' operation has two meanings. When it is with numbers, it means 'add', and with strings it means 'to combine'.<br />
	  With the other operations we get an error because in programing you cannot use the other operations with strings.<br />
	  Now try fixing the code below so there are no longer any errors",
	  prefill: "x = ' Gotta catch em all!'\ny = 'Pokemon '\nz = 'Go!'\nputs y - z + x",
	  expected_code: "\(x = ' Gotta catch em all!')\\s(y = 'Pokemon ')\\s(z = 'Go!')\\s(puts y . z . x)",
	  code_regex: true,
	  expected_output: "Pokemon Go! Gotta catch em all!",
	  output_regex: false,
	  position: 4
	  )
	# exercise3_5 = Exercise.find_or_create_by(
	# 	lesson_id: lesson3.id, 
	# 	name: "Variables Review",
	# 	instruction: "So far we learned about variables and how we can name them whatever we want. We have also learned how to assign values of numbers or strings to the variables.<br />
	# 	Wwe also learned how to manipulate variables with operations and have different outputs when doing so.
	# 	Now that we learned all about variables, lets see what you learned in our variable review quiz!<br />Just fill in the blanks in the following code and press run!",
	# 	prefill: "",
	# 	expected_code: "",
	# 	code_regex: true,
	# 	expected_output: "",
	# 	output_regex: false,
	# 	position: 5
	# 	)
	# TODO: final review quiz and achievement of completion.


