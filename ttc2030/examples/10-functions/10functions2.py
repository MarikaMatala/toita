# demo functions 2
from helper import sum
from helper import say_hello_again
print("funktion käyttö toisesta tiedostosta")

num1 = 12
num2 = 24
result = sum(num1, num2)
print("yhteenlaskettuna ", result)

name = input("Anna nimesi ")
print(say_hello_again(name))