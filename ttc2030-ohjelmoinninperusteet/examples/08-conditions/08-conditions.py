# Demo conditions: if elif else
print("Conditions")
# some basic conditions
number = int(input("Gimme a number "))
if number < 10:
    print("Luku on alle kymmenen")
else:
    print ("Luku on kymmenen tai suurempi")

if number == 10:
    print("Luku on kymmenen")
elif number < 10: 
    print("Luku on pienempi kuin kymmenen")
elif number > 20:
    print ("Luku on suurempi kuin kaksikymmentä")

else:
    print("Luku on kymmenen ja kahdenkymmenen välissä")

# and  or operators
number = int(input("Gimme another number "))
if number > 0 and number < 10:
    print("Luku on yhden ja yhdeksän välistä")
elif number >= 10 or number ==0: 
    print("Luku on kymmenen tai suurempi tai se on nolla")