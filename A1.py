
keep_going = true
while true:
	
	user_input = input("Enter a sentence:\n>")
	#if user input is empty, they want to quit
	if user_input == "":
		keep_going = False 
	else:
		print(user_input)


