try:
    number1 = 100
    number2 = 0
    result = number1 / number2
    print("Result is ",result)
except ZeroDivisionError:
    print("Can't divide by zero!")

try:
    number = int(input("Give a number: "))
    print("you entered: ", number)
except ValueError:
    print("Unable to convert to number")
except:
    print("Someting else went wrong :/")

try:
    numbers = [1, 2, 3, 4, 5]
    print("Last number is ", numbers[5])
except IndexError:
    print("Wrong index used in accessing list")




