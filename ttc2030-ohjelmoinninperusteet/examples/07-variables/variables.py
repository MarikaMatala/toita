number = 5
accountBalance = 110.54
print (number)
print (accountBalance)

number = 55
number2 = number + 2
# value of number2 is now 57
print ("number2 is ", number2)

number = 10 + 2
number2 = number + 123

number = 10 - 2
number2 = number - 123

number ** 2
number // 3

number = number + 10
number += 10

print ("Type of the variable 'number' is ", type(number))
print ("Type of the variable 'accountBalance' is ", type(accountBalance))

name = "Marika"
lastname = "Matalamäki"

fullname = name
fullname = name + " " + lastname
print(fullname)


# use format function
age = 29
fullname = "First name : {}. Last name : {}. Age: {}".format(name, lastname, age)
print(fullname)