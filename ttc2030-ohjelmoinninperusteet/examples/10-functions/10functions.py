# Functions
print("Demo funktiot")
# define functions before of use
def print_info():
    print("Hello")

def say_hello(name):
    print("Hello" , name)

def print_and_return():
    print("Info and return")
    return 123

# testataan funcktioiden käyttö
print_info()

nimi = input("Kuka olet? ")
say_hello (nimi)

number = print_and_return()
print(number)