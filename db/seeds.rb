# Lesson 1 Exercises
lesson1 = Lesson.create(name: "Intro to Programming", icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468874271/Lesson1_jbkaq9.png', position: 1)
exercise1_1 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Welcome!",
	icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887049/Lesson1Ex1_zuaxwi.png',
	instruction: "Welcome to JrDevs! Our exercises are intended to be an introduction to coding for first-time coders. Here you will be learning to code with Ruby. Ruby is a coding language. 
								Just like people, a computer can understand many different languages. Ruby is a good coding language to start with because it is easier to learn than most other coding languages.
								Below, in the editor, is an example of Ruby code. Click run to see what it does!",
	prefill: "puts 'Ruby is the best!'",
	expected_code: "puts 'Ruby is the best!'",
	code_regex: "false",
	expected_output: "Ruby is the best!",
	output_regex: "false",
	position: 1
	)
exercise1_2 = Exercise.find_or_create_by(
	lesson_id: lesson1.id, 
	name: "What is Code?",
	icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887066/Lesson1Ex2_sqznm0.png', 
	instruction: "What is code? Code is just instructions that a computer knows how to follow. <br />
	  A computer is kind of like a calculator, you can give it some instructions, and it will follow them. For example, a computer can follow instructions to do math. <br />
	  Click the 'Run' button at the bottom of the screen to run the code and see what happens",
	prefill: "puts 2 + 2",
	expected_code: "puts 2 + 2",
	code_regex: false,
	expected_output: "4",
	output_regex: false,
	position: 2
	)
exercise1_3 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Let's do Math!",
	icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887066/Lesson1Ex3_qxbr6s.png',
	instruction: "Your turn! Write some code after 'puts' that subtracts 3 from 5. <br />
	  Click 'Run' when you are done to see if you got it right. Here's a hint - be sure to put spaces between the numbers and the minus sign. This is a standard to help your code look nice.",
	prefill: "puts",
	expected_code: "puts 5 - 3",
	code_regex: false,
	expected_output: "2",
	output_regex: false,
	position: 3
	)
exercise1_4 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "What is Puts?",
	icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887066/Lesson1Ex4_qwpya5.png',
	instruction: "You probably noticed the word 'puts' in the last two exercises. In ruby, the word puts is a command (instruction) that tells the computer what to put to the console. <br />
	  See that black square on the right? That is the console. If you don't tell the computer what to output to the console, it will show nothing. <br />
	  The code below is missing puts. Click run to see what happens without 'puts.' Done? Now add 'puts' at the beginning of the line and run the code again.",
  prefill: "2 + 2",
  expected_code: "puts 2 + 2",
  code_regex: false,
  expected_output: "4",
  output_regex: false,
  position: 4
	)
exercise1_5 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Working with Words",
	icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887688/Lesson1Ex5_oavp2d.png',
	instruction: "Computers can handle words as well. As long as they are inside quotation marks, the computer know to treat them as normal words and not as code. <br />
		Type the words 'Hello, world' after the 'puts' and run the code (be sure to include the quotation marks).",
	prefill: "puts",
	expected_code: "\(puts 'Hello, world')|(puts \"Hello, world\")",
	code_regex: true,
	expected_output: "Hello, world",
	output_regex: false,
	position: 5
	)
exercise1_6 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "More Words",
	icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887693/Lesson1Ex6_qtg61z.png',
	instruction: "Let's try it again, but starting from scratch. Write your own code that will output the words 'I love coding!'",
	prefill: "",
	expected_code: "[\\s\\S]*",
	code_regex: true,
	expected_output: "I love coding!",
	output_regex: false,
	position: 6
	)
exercise1_7 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Data Types",
	icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887066/Lesson1Ex7_cccq2y.png',
	instruction: "In coding, we call words and numbers data types (data is just another word for information). A computer can recognize many different data types. <br />
		These data types have special names. Whole numbers like 2 or 15 or are called integers (decimal numbers like 3.5 are called something different). Words inside quotation marks are called strings. <br />
		There are many other data types, but let's start with just strings and integers. Read through and then run the below code to review what we just learned!",
	prefill: "x = 'Coding is the best!'\ny = 57\nputs 'x is a string! y is an integer!'",
	expected_code: "\(x = 'Coding is the best!')\\s(y = 57)\\s(puts 'x is a string! y is an integer!')",
	code_regex: true,
	expected_output: "x is a string! y is an integer!",
	output_regex: false,
	position: 7
	)
exercise1_8 = Exercise.find_or_create_by(
	lesson_id: lesson1.id,
	name: "Data Types Review",
	icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468888546/Lesson1Ex8_xyjeao.png',
	instruction: "Wondering what x and y were in the last exercise? These are variables, you'll learn all about them in the next lesson. Solve this last problem to move on to the Variables lesson! <br />
	  Replace the blank spaces in the code below with the correct data type names.",
	prefill: "x = 45\ny = 'I love data types!'\nputs 'x is an _ and y is a _'",
	expected_code: "\(x = 45)\\s(y = 'I love data types!')\\s(puts 'x is an integer and y is a string')",
	code_regex: true,
	expected_output: "x is an integer and y is a string",
	output_regex: false,
	position: 8
	)

# Lesson 2 exercises
lesson2 = Lesson.find_or_create_by(name: "Variables", icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887098/Lesson2_icn24f.png', position: 2)
	exercise2_1 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Intro",
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887098/Lesson2Ex1_ilqawy.png',
		instruction: "In programing, we often use a tool called a 'variable.' Variables are like boxes. They hold something for us.
		In the code below, you can see that the variable 'x' is holding the string 'Hello, World'.
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
		name: "Variables cont.",
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887098/Lesson2Ex2_doqp66.png',
		instruction: "As you can see, when we run the code, the 'puts x' in the editor displays 'Hello, World' in the console.
		This is because when the computer sees 'x' after 'puts' it looks to see what 'x' is holding and prints that out into the console. <br />
		How about you give it a try now? <br />
		Instead of putting 'Hello, World' into the 'x' variable, have fun and put your own string!",
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
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887098/Lesson2Ex3_tdvtw4.png',
		instruction: "Variables can be named almost anything.
		In the code below, we see two different variables with two different names. Run the code to see what happens!",
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
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887098/Lesson2Ex4_wlymcv.png',
		instruction: "Now its your turn! In the editor below, fill in the quotation marks with your favorite food and then output the food variable to the console.", 
		prefill: "food = ''\nputs ",
		expected_code: "\(\\s=\\s')(.*)(')[\\s\\S]*(puts )",
		code_regex: true,
		expected_output: "\\S",
		output_regex: true,
		position: 4
		)
	exercise2_5 = Exercise.find_or_create_by(
		lesson_id: lesson2.id, 
		name: "Variables Naming cont.",
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887098/Lesson2Ex5_bvuoh1.png',
		instruction: "Variables can also be a combination of words with numbers as well. Check out the example in the text editor. <br />I bet you can guess what the console will print out! Try outputting trainer1 and trainer2 as well.", 
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
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887099/Lesson2Ex6_rrbcgv.png',
		instruction: "Now lets make your own variables with a combination of words and numbers. Make the variable equal to a string and then display it in the console!",
		prefill: "# You can do it!",
		expected_code: "(\\s=\\s['\"])(.*)(['\"])[\\s\\S]*(puts )",
		code_regex: true,
		expected_output: "\\S",
		output_regex: true,
		position: 6
		)

# Lesson 3 Exercises
lesson3 = Lesson.find_or_create_by(name: "Variables Manipulation", icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887113/Lesson3_oykumq.png', position: 3)
	exercise3_1 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables Manipulation",
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887113/Lesson3Ex1_l0ehlv.png',
		instruction: "Remember back in Lesson 1 when we learned that we could take a few integers and do math with them? <br />
		Now instead of using the integers themselves, we're going to use variables to do math!<br />
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
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887113/Lesson3Ex2_g6saua.png',
		instruction: "Were you right? As you saw in the last exercise, when we added two variables, it added the two values together.<br />
		We can do this with any numbers and with any operator. <br />
		In the editor below, let's make some variables called 'x' and 'y' and then assign a number value to the variable.<br />
		Let's see how many different ways we can use 'x' and 'y' to output the integer 10 in the console!",
		prefill: "\n\nputs x + y",
		expected_code: "\(x = )(-[\\d]*|[\\d]*)[\\s]*(y = )(-[\\d]*|[\\d]*)[\\s]*(puts x . y)",
		code_regex: true,
		expected_output: '10',
		output_regex: false,
		position: 2
		)
	exercise3_3 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables, Values of Strings, and Operators",
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887113/Lesson3Ex3_ruudbg.png',
		instruction: "You may be wondering what would happen if we try to do math with strings. Let's try running the code below to see what happens! Once you are finished, you can try playing adding different variables together too!", 
		prefill: "instinct = 'Yellow Team'\nmystic = 'Blue Team'\nvalor = 'Red Team'\n\n\nbest = ' is the best team!'\nok = ' is ok.'\nok2 = ' is ok, too.'\n\nputs instinct + best",
		expected_code: "(instinct = 'Yellow Team')\\s*(mystic = 'Blue Team')\\s*(valor = 'Red Team')\\s*(best = ' is the best team!')\\s*(ok = ' is ok.')\\s*(ok2 = ' is ok, too.')\\s*(puts instinct . best)",
		code_regex: true,
		expected_output: "(Yellow Team is the best team!)",
		output_regex: true,
		position: 3
		)
	exercise3_4 = Exercise.find_or_create_by(
		lesson_id: lesson3.id, 
		name: "Variables, Values of Strings, and Operations Recap",
		icon_url: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468887113/Lesson3Ex4_gkp80l.png',
		instruction: "From the last exercise we saw that variables that hold strings can be added together. Try running the following code and see what happens!<br />
		As you can see, we got an error! Why is that? <br />
	  Well, when we add two strings together we get a combination of the two strings. This is because the '+' operator can do two different things. When it is used with numbers, it adds them. When it is used with strings, it combines them.<br />
	  With the '-' we get an error because in programing you cannot use '-' with strings.<br />
	  Now try fixing the code below so there are no longer any errors",
	  prefill: "x = ' Gotta catch em all!'\ny = 'Pokemon '\nz = 'Go!'\nputs y - z + x",
	  expected_code: "\(x = ' Gotta catch em all!')\\s(y = 'Pokemon ')\\s(z = 'Go!')\\s(puts y . z . x)",
	  code_regex: true,
	  expected_output: "Pokemon Go! Gotta catch em all!",
	  output_regex: false,
	  position: 4
	  )



