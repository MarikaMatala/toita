
print("Running while loop")
number = 10
while number >= 0:
    print(number)
    number -= 1

print ("lopetetaan kun luvun arvo on " , number) 

number = 10
while number >= 0 and number < 100:
    print(number)
    number -= 1

print ("lopetetaan kun luvun arvo on " , number)

#use of break
print("Testataan break")
number = 100
while number >=0:
    if number == 42:
        break
number -= 1

print("Looppi lopetettiin kun luvun arvo on  ", number)