# TTC8440 Object-oriented Programming Tasks
- [TTC8440 Object-oriented Programming Tasks](#ttc8440-object-oriented-programming-tasks)
  - [T1 School number](#t1-school-number)
  - [T2 Hill jumping](#t2-hill-jumping)
  - [T3 Consumption](#t3-consumption)
  - [T4 Palindrome](#t4-palindrome)
  - [T5 Names](#t5-names)
  - [T6 Sauna Heater](#t6-sauna-heater)
  - [T7 Washing machine](#t7-washing-machine)
  - [T8 Television](#t8-television)
  - [T9 Vehicle](#t9-vehicle)
  - [T10 Student](#t10-student)
  - [T11 CD](#t11-cd)
  - [T12 Tank](#t12-tank)
  - [T13 Elevator](#t13-elevator)
  - [T14 Amplifier](#t14-amplifier)
  - [T15 Employee](#t15-employee)
  - [T16 Vehicle](#t16-vehicle)
  - [T17 Radio](#t17-radio)
  - [T18 Student Goods](#t18-student-goods)
  - [T19 Collection](#t19-collection)
  - [T20 Mammal](#t20-mammal)
  - [T21 NewCD](#t21-newcd)
  - [T22 Cards](#t22-cards)
  - [T23 Queue](#t23-queue)
  - [T24 Vehicle](#t24-vehicle)
  - [T25 Movie stars](#t25-movie-stars)
  - [T26 SMLeague](#t26-smleague)
  - [T27 SMLeagueExport](#t27-smleagueexport)
  - [T28 Refrigerator](#t28-refrigerator)
  - [T29 Cashier](#t29-cashier)
  - [T30 Interface](#t30-interface)
  - [T31 Random](#t31-random)
  - [T32 Delegate](#t32-delegate)
  - [T33 MailBook with Lambda](#t33-mailbook-with-lambda)
  - [T34 Unit test for ArrayCalculator](#t34-unit-test-for-arraycalculator)
  - [T35 Unit Test for Shopping cart](#t35-unit-test-for-shopping-cart)
  - [T36 Invoice](#t36-invoice)
  - [T37 Dice](#t37-dice)
  - [T38 Wooden Window](#t38-wooden-window)
  - [T39 Timer](#t39-timer)
  - [T40 MiniPeppi](#t40-minipeppi)
  - [T41 FishRegister](#t41-fishregister)
  - [T42 Patterns](#t42-patterns)
  - [T43 Bonus task](#t43-bonus-task)


## T1 School number
* Points: 1

Make a program that gives the student a grade according to the following table, the score is asked and the program prints the number. Check that the given value is a number, and give an appropriate error message if it is not.

point limit | number
--- | ---
0-19 | 0
20-29 | 1
30-39 | 2
40-49 | 3
50-59 | 4
60-70 | 5

*Example activity:*  
```
Give points : 58 [Enter]
Your grade is: 4
```

## T2 Hill jumping
* Points: 1

Five judges are used in hill jumping. Write a program that asks rating points for one jump and prints the sum of the style points such that the smallest and largest style point has been subtracted from the sum. Save the given numbers to **an array**t. Check that the given input is a number.

*Example activity:*  

```
Give points: 18 [Enter]
Give points: 15 [Enter]
Give points: 20 [Enter]
Give points: 19 [Enter]
Give points: 17 [Enter]
Total points are 54
```

## T3 Consumption
* Points: 1

Create **a static method** to calculate the cost of a certain trip. In the main program the user is asked for the distance driven, check that the given input is a number. After that, the main program calls the method sending the number of kilometers driven as a parameter. The method draws randomly consumption between 6 - 9 liters/100km. The fuel price is randomly selevted between 1,75 - 2,50€ per litre.  
The method returns the amount of gasoline consumed and the amount of money spent on gasoline, the main program shows them to the user.

*Example activity:*  

```
Enter distance traveled: 250 [Enter]
Fuel consumption is 18.75 liters and it costs 46.87 euros .
```

## T4 Palindrome
* Points: 1

Make a program that asks an end user for a sentence or string. Create **a static method** for checking is the given sentence or word palindrome or not. The method has one argument, and it returns boolean value (true or false).  The program will show the end user if the given string was a [palindrome](https://fi.wikipedia.org/wiki/Palindrome).

## T5 Names
* Points: 1

Make a program that asks the user for people's names and their year of birth. Name and Year of Birth are separated by a comma. Entering names is finished by entering an empty entry. Create **[a struct](https://www.tutorialsteacher.com/csharp/csharp-struct)** to save and present people's data. After this, the program tells how many names were given and displays them in order of age from youngest to oldest.

*Example activity:*  

```
Please, give names and birth year of a person. Empty input will stop the input.
Give a name: Jaska,1980 [Enter]
Give a name: Annika, 2001 [Enter]
Give a name: Michael, 1992 [Enter]
Give a name: [Enter]
...
3 names are given:
Annika is 22 years old.
Michael is 30 years old.
Jaska is 42 years old.
Press any key to quit...
```

## T6 Sauna Heater
* Points: 1

Your task is to program the operation of the electric sauna heater. You must be able to turn on the heater and besides, both its temperature and the humidity it gives must be able to be adjusted (values ​​are not limited).

Design the properties and functions of the *Heater* class as a UML class diagram. To draw a class diagram, you can use the [Flow Chart Maker & Online Diagram Software](https://www.draw.io/) service found on the web or, for example, the Violet editor installed on class machines.
You can install it on your home machine here: [Violet UML editor](http://alexdp.free.fr/violetumleditor/page.php).

Implement the programming of the Heater class and the main program to create an object from the Heater class.  
Adjust the stove object with different values ​​in the main program, and show how your stove works with Console.WriteLine() print statements in the main program.

Attach the image of the class diagram to the project's repo as well as the program execution.

**Note 1:** Do not use Console.Writeline() or Console.Readline() in classes, because their use breaks the reusability and portability of classes to e.g. Windows or Web applications.   
All interaction with the user must be done in the main program or in methods belonging to the main program!  
**Note2:** It is not recommended to use public member variables in C#!  
So don't use public members in the Heater class like:    
`public int Temperature;`  
You should use the following property:  
`public int Temperature { get; set;}`

## T7 Washing machine
* Points: 1

Your task is to program the operation of the washing machine. Same as the previous task:
what features and functions would you add to the Washing machine class?

Design and draw the properties and functions of the Washing machine class as a UML class diagram. Attach the image to the project's repo.

Implement the programming of the Washing Machine class and the main program to create an object from the Washing Machine class.
Adjust the washing machine object with different values ​​from the main program. Use Console.WriteLine() print statements to show the user in the main program the state and use of the washing machine object.
Implement a few different constructors (at least two different ones) in the Washer class and initialize them using the object from the main program.
**Note:** the main rule is that the classes do not use the Console class, all interaction for the user will be addressed in the main program. That is, the main program receives information about the properties of the object and the return values ​​of the methods as strings, and displays them on the console.

## T8 Television
* Points: 1

Your task is to program the operation of the television. Same as the previous task:
what features and functions would you add to the Television class?

Design and draw the properties and functions of the Television class as a UML class diagram.

Implement the programming of the Television class and the main program to create an object from the Television class.
Adjust the Televsio object you created with different values. In the main program, show the user how to use the TV object and the properties after adjustment.

**Tip** You should use C#'s "auto-implemented properties" whenever possible, i.e.:
a) no background variable is separately needed for the feature or
b) there is no need to check the value of the property in the set accessor.

## T9 Vehicle
* Points: 1

In the specification, it has been identified that the application needs to handle different vehicles,
which are: bicycle, motorcycle, car, truck. A class in design
it has been decided to create a Vehicle class to represent vehicles. There are vehicles
identified the following common characteristics: manufacturer, model, speed and tires
number. Create a Vehicle class with the following information:

**properties**
* Brand: string
* Model: string
* Speed: int
* tires: int

**methods**
* ShowInfo():string, returns Vehicle manufacturer and model information as a string
* ToString():string, returns all Vehicle properties as one string, so you have to override base class ToString()

Implement the programming of the Vehicle class and the main program, which creates at least two objects from the Vehicle class. After creation, change the object's properties and print the object's information to the console using either method.

**Tip** You should use C#'s "auto-implemented properties" whenever possible, i.e.:
a) no background variable is separately needed for the feature or
b) there is no need to check the value of the property in the set accessor.

## T10 Student
* Points: 1

Use the UML editor to design a Student class that contains the student typical information and functions. Create the Student class and implement the main program, which creates at least five students and stores the students in a collection (for example an array or a list).
Print the data for the students in the collections using the repeating structure.

## T11 CD
* Points: 1

Use the UML editor to design a CD class that contains as properties typical information belonging to a CD.
Also consider what different functionalities the CD could have. At least implement the functionality,
which returns the values ​​of all properties as a single string (using it in the main program you could
prints all the information on the CD). 

Implement also the Songs property for the class. Songs can be either in an Array or in a list (List<T>), prefer List<T>. The Songs collection represents the songs on the disc. In this task, a song can be either:  
1) string  
2) [record](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)  
3) [struct](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct)  
4) [tuplee](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples) 
5) Song-object.

Program the CD class you designed in C#. Implement CD objects in the main program.
You can come up with the information yourself, you don't need to ask the user for it. Print the CD information with songs on the screen.
 
```
CD:
    -Artist: Nightwish
    -Name: Endless Forms Most Beautiful
    - Genre: Symphonic metal
    -Price: $19.9
    Songs:
    --- Name: Shudder Before the Beautiful - 06:29
    --- Name: Weak Fantasy - 05:23
    --- Name: Elan - 04:45
    --- Name: Yours Is an Empty Hope - 05:34
    --- Name: Our Decades in the Sun - 06:37
    --- Name: My Walden - 04:38
    --- Name: Endless Forms Most Beautiful - 05:07
    --- Name: Edema Ruh - 05:15
    --- Name: Alpenglow - 04:45
    --- Name: The Eyes of Sharbat Gula - 06:03
    --- Name: The Greatest Show on Earth - 24:00
```
 
## T12 Tank
* Points: 1

Implement the Tank-class with the following properties:  
* Name (string)
* Type (string)
* CrewNumber(int)
* Speed(float)
* SpeedMax(float)

Implement the Tank-class with the following methods:
* AccelerateTo(float)
* SlowTo(float).

The properties Name and Type can be read and changed without restrictions.
Implement other properties so that they have an in-class background variable that the class uses.
The property CrewNumber can be read and set, and its initial value is 4. When setting it, it is checked that the given property is within the allowed range: the minimum is two and the maximum is six.
The SpeedMax property is read-only and its value is set by default
permanently to 100. The initial value of the Speed ​​property is zero and cannot be set
directly, but its value can be read. The value of the Speed ​​property can only be changed
through the methods AccerelateTo(float) and SlowTo(float) so that Speed
cannot be less than zero or greater than Speedmax; minimum is zero and
maximum 100. If the value given to the methods is not within the allowed range, then the method does not change the Speed ​​value.

Execute the main program TestTank, with which you test the setting of various features.

**Please note the following!** Accessors generally **do not throw** exceptions, and that an accessor does not return anything.  
*Question:* When calling the methods of the main program should an end-user somehow need to know that the method didn't set the speed to the requested value?

## T13 Elevator
* Points: 1

Your task is to program the controller related to the floor control of Dynamo's elevator.
The implemented program must be able to ask the user for the desired layer and move it
lift to desired floor. Dynamo's elevator can only be on floors 1-5. For this, make a *method* that can be used to move the elevator to the desired floor. After moving, the elevator object knows which floor it is on and the main program tells the user which floor the elevator is on.  
*Tip:* Could your method be *public bool GoTo(int floor, out string message)*  

**Note**: Remember the rules of thumb when using properties:  
a) the property's get accessor never throws an exception  
b) when using the property's set accessor it does not return anything, the value of the property can be read from the get accessor  
c) if you want the main program to be aware that the change of the desired property is not successful or cannot be done, methods are used.

*Example activity:*  

```
Elevator is now in floor : 1
Give a new floor number (1-5) > 2
Elevator is now in floor : 2
Give a new floor number (1-5) > 3
Elevator is now in floor : 3
Give a new floor number (1-5) > 5
Elevator is now in floor : 5
Give a new floor number (1-5) > -1
Floor is too small!
Elevator is now in floor : 5
Give a new floor number (1-5) > 6
Floor is too big!
Elevator is now in floor : 5
Give a new floor number (1-5) > 2
Elevator is now in floor : 2
```

## T14 Amplifier
* Points: 1

Your task is to program the operation of a simple amplifier that can
control the volume (Volume) between 0-100. Implement the Amplifier class and do
main program where you create an object from the Amplifier class. Adjust and test the amplifier
at different volumes. In the Amplifier class, use either:
a) methods for setting the volume or
b) get and set accessors using the property. the get accessor returns the volume and the set accessor sets the value of the volume.
In either case, limit the volume to the allowed range.

*Example activity:*    
```
Give a new volume value (0-100) > 100
-> Amplifier volume is set to : 100
Give a new volume value (0-100) > 40
-> Amplifier volume is set to : 40
Give a new volume value (0-100) > 0
-> Amplifier volume is set to : 0
Give a new volume value (0-100) > -10
-> Too low volume - Amplifier volume is set to minimum : 0
Give a new volume value (0-100) > 200
-> Too much volume - Amplifier volume is set to maximum : 100
Give a new volume value (0-100) > 35
-> Amplifier volume is set to : 35
```

## T15 Employee
* Points: 1

The program must be able to process employee data (Employee). Regarding employees, you must be able to process the following information: employee's name (Name), employee's profession (Profession) and salary (Salary). In the same program, you must also be able to process the managers' data (Boss), they also have a car (Car) and a salary bonus (Bonus).

Research the goal/narrative of the task and implement the necessary UML class diagrams. After that, implement the required classes, create and use objects from the main program. Print the information of the objects of the required classes to the output window. There is no need to ask the application user for information, but you can initialize it directly in the main program.

*Example operation*:  
Please, note that Kirsi Kernel's information has been changed during the execution of the program)

```
Employee:
- Name: Kirsi Kernel Profession: Teacher Salary: 1200

Boss:
- Name:Hanna Husso Profession:Head of Institute Salary:9000 Car:Audi Bonus:5000

Employee:
- Name:Kirsi Kernel Profession:Principal Teacher Salary:2200
```

## T16 Vehicle
* Points: 1

The implemented application should be able to handle different types of vehicles. All vehicles can be found as common characteristics: name, model, year model and color. As special cases, you must be able to handle bicycles and boats. Regarding the bicycle, you must be able to distinguish whether it is a geared bicycle or not and the model name of the possible gearbox. Regarding boats, the information must at least include the type of boat (rowing boat, motor boat, kayak, ...) and how many seats there are in the boat.

Research the goal/narrative of the task and implement the necessary UML class diagrams. After that, implement the required classes, create and use objects from the main program. Print the information of the objects of the required classes to the output window. There is no need to ask the application user for information, but you can initialize it directly in the main program.

*Example activity:*  

```
Bike1 info
- Name:Jopo Model:Street ModelYear:2016 Color:Blue GearWheels:False Gear Name:

Bike2 info
- Name:Tunturi Model:StreetPower ModelYear:2010 Color:Black GearWheels:True Gear Name:Shimano Nexus

Boat1 info
- Name:SummerFun Model:S900 ModelYear:1990 Color:White SeatCount:3 BoatType:Rowboat

Boat2 info
- Name:Yamaha Model:Model 1000 ModelYear:2010 Color:Yellow SeatCount:5 BoatType:Motorboat
```

## T17 Radio
* Points: 1

In the assignment, you must implement a C# program for testing the basic functions of the radio. The radio inherits the Electrical device class. The Electrical Device class has two properties:
1) boolean type **on**
2) float-type **power** (in watts).

The portable radio has three controls:
- on/off switch
- volume control (values ​​0, 1, 2,..., 9)
- frequency selection of the channel to be listened to (2000.0 - 26000.0).

Create a class to implement a portable radio.
Volume and channel **cannot** be set until the radio is turned on.
Use the class you made from the main program, i.e. test the functionality of the radio with different strengths
and with frequency values. Leave the setup and print statements visible in the main program so that the use of the radio object can be authenticated.
Implement the ToString() method for the class, which returns the values ​​of all radio settings.

## T18 Student Goods
* Points: 1

An ICT student's bookshelf contains a variety of items: books, magazines,
cds, dvds, blurays, phones, tablets, laptops, ... etc.
Using the UML diagram, consider what kind of class structures (at least for classes and properties)
occur and use the help of inheritance if the goods have some common characteristics.
After that, implement a few classes where inheritance occurs. Also make the main program,
where you use the classes you made and create objects.

## T19 Collection
* Points: 1

Think of a real-world thing through which you can implement a small C# program/implementation that uses inheritance.

## T20 Mammal
* Points: 1

In the task, a few classes must be implemented, which will be used to test the functionality of abstract methods.

Create an abstract class Mammal, which has an Age property, The class has also Move-method, the implementation of the method is unimplemented because it must be an *abstract method*.

Inherited Human-class from Mammal-class, which has properties generally related to humans, like weight, height and name. Add to the Human-class the following methods: Move and Grow. The first prints "Moving" to the console and the latter increases the person's age by one year. Note that the Move-method and the Age-property are in the Mammal-class

Inherit the Baby- and Adult-classes from the Human-class. In the Baby-class, override the Move-method of the superclass to print the "Crawling". Overwrite the same method in the Adult-class as well and set it to print "Walking". Add the Auto (String) property for the adult. Add a diaper (String) feature to the baby.

In the main program, implement a few people, adults and babies. Print object information to the console.

## T21 NewCD
* Points: 2

In the previous demos, a CD class was made, which contained the common properties to a CD. The CD must have following information: name, artist, number of songs, total length and songs.
The songs inside the CD are objects from the Song class. The name and length of each song are saved. There is no limit to the number of songs on the CD.
The number of songs in the CD class is a read-only property that is counted as the number of song objects on the CD.
The total length of the CD class is a read-only property that is calculated as *the sum of the lengths of the CD's song objects*.
Create the CD category and the Song category that you have planned. In the main program, implement the CD object. You can come up with the information for the CD yourself and the main program will set it, you don't need to ask the user for it.
Check with careful testing that your class can count the number of songs and the total length correctly!

*Example activity:*    
```
You have a CD:
- name: Endless Forms Most Beautiful
- artist: Nightwish
- total length: **78 min 36 sec**
- 11 songs:
  - Shudder Before the Beautiful, 6:29
  - Weak Fantasy, 5:23
  - Elan, 4:45
  - Yours Is an Empty Hope, 5:34
  - Our Decades in the Sun, 6:37
  - My Walden, 4:38
  - Endless Forms Most Beautiful, 5:07
  - Edema Ruh, 5:15
  - Alpenglow, 4:45
  - The Eyes of Sharbat Gula, 6:03
  - The Greatest Show on Earth, 24:00
```

## T22 Cards
* Points: 2

Implement the classes: *Card* and *CardDeck*. Implement a program that creates everything
cards of the card game as objects (suits: heart, square, cross and spade; values: A,K,Q,J, 10,9...2, so 52 cards.)
to the data structure of your choice and prints the content of the data structure.

Continuation of the previous one. How could you implement deck shuffling?
For the Deck class, implement a Shuffle method that shuffles the deck
cards in random order. Call the method operation from the main program.

## T23 Queue
* Points: 2  
 
Implement a solution that [simulates the flow of customers at a store checkout](https://gitlab.labranet.jamk.fi/TTOS0200/TTOS0200-Olio-ohjelmointi/blob/master/Img/T25-Jono.PNG). Implement the class Checkout Queue, which uses a queue, i.e. the Queue data structure.
The checkout queue class could have *methods*:  
- GoToQueue(parameters)
-  ExitQueue(parameters)
and a *property*:  
- Length

You can also design and implement your own interface for the class. Note: in this context **interface** means public properties and methods visible from the outside of the class.


## T24 Vehicle
* Points: 2

Make a Tire-class with the following properties:
Manufacturer, Model and TireSize.  
After this, implement the Vehicle-class with the characteristics belonging to a vehicle (name, model, etc). Assemble the vehicle tires with Tire-objects, use strongly typed List. Make a main program where you create some vehicles (e.g. car and motorcycle) with tires. There is no need to ask the user for information, you can initialize it directly in the main program's code.

*Example activity:*  

```
Created a new vehicle Porsche model 911
Tire Nokia added to vehicle Porsche
Tire Nokia added to vehicle Porsche
Tire Nokia added to vehicle Porsche
Tire Nokia added to vehicle Porsche

Vehicle Name: Porsche Model: 911 has tires:
-Name: Nokia Model: Hakkapeliitta TireSize: 205R16
-Name: Nokia Model: Hakkapeliitta TireSize: 205R16
-Name: Nokia Model: Hakkapeliitta TireSize: 205R16
-Name: Nokia Model: Hakkapeliitta TireSize: 205R16

Created a new vehicle Ducati model Diavel
Tire MIC added to vehicle Ducati
Tire MIC added to vehicle Ducati

Vehicle Name: Ducati Model: Diavel
tires:
-Name: MIC Model:Pilot TireSize:160R17
-Name: MIC Model:Pilot TireSize:140R16
...
```

## T25 Movie stars
* Points: 2

You have to create a small program for Movies. There are three classes: *Movie*, *Actor* and *Director*. The classes Actor and Director are inherited from a *Human* class. Create needed properties and methods for the classes. Make a main program where you create couple different Movie-objects with different actors and other data. You can ask movie information from an end-user or you can initialize them directly in the main program.

**Movie**
* Name:string
* Year: int
* Director: Director-object {readonly}
* Actors:List<Actor> {readonly}

**Human**
* Name: string
* Birth year: int

## T26 SMLeague
* Points: 2

Implement a program that can add, delete and list SMLiiga teams (i.e. JYP, Kalpa, Tappara, etc.) players.
Create a Player class with the properties First Name, Last Name, Game Location and Number.
Also create a Team class. The class has properties Name, Hometown and Players.
The Players property is therefore a list of Player objects. The Team class has one constructor Team(string team). When the constructor is called, it is passed the name of the team to be created, i.e. 'JYP'. In this case, the constructor adds a few JYP players to the Players list. And correspondingly, when called with the parameter 'Ilves', Ilves players are added to the list.

## T27 SMLeagueExport
* Points: 2
This task continues the previous task.  
Create the funtionality to save all players of the selected team to **a csv file**. For eaxmaple, if an end user chooses to save JYP's players, a file JYP.csv is created, and the players are presented in the file as follows:  
```
Jarkko;Immonen;center;26
Brad;Lambert;forward;16
```

## T28 Refrigerator
* Points: 2

Think about the refrigerator as a concept in the real world and especially what you can find there.
Make a small-scale implementation that compiles the contents of the refrigerator from a few different things/objects.
A refrigerator is therefore an entity that has a collection of different foodstuffs.

## T29 Cashier
* Points: 2

The senior coder has previously defined the interface. It is like this:

```
public interface ITransaction {
  // interface members
  string ShowTransaction();
  float Money {get; set;}
}
```

Implement a small-scale cash register program that can make both cash payments and card payments.
Create classes PaidWithCash and PaidWithCard. Both classes implement the ITransaction interface,
each in their own way. The method ShowTransaction defined in the interface returns an English message about how the payment was made, the message also shows the amount of the payment in Euros. The feature Money tells the amount paid as a number. For the PaidWithCarr class, implement the method float ShowTotal(), which tells how much money has been transferred to the account in total. For the PaidWithCash class, implement the method float ShowCash(), which tells how much money is in the cash register, i.e. the class must be able to tell how much money is in the cash register.

Make a Test program where you make two payments in both ways, i.e. cash and card.
Make the test program also implement that it can tell the total sales of the day.

See the attached example run:

```
Transaction to bank: charge from card 0001-0002 date 1.1.2020 amount 78.95
Transaction to bank: charge from card 0003-0004 date 1.1.2020 amount 45.65
Total money at bank account: 124.60
Paid with cash: bill number 1 date 1.1.2020 amount 100
Paid with cash: bill number 2 date 1.1.2020 amount 50
Total money in cash: 150
Total sales today Wednesday January 1, 2020 is 274.60 ?:
Program completed successfully. Press any key to quit.
```

## T30 Interface
* Points: 2

Think of a real-world thing through which you can implement a small C# program/implementation that uses an interface.


## T31 Random
* Points: 2

Use C# to implement a program that randomly generates 10000 objects of a Person class. The Persons objcts are added to the List structure.
The first name of the Person object must use random letters from A-Z and the length of the first name is 4 characters. Surname as well use random letters from A-Z, but the length is 10 characters.

The program should printout spent time to add people in milliseconds.
After that, search for 1000 random people from the List based on their first name. Print the information of the persons found and the total spent time on the search in milliseconds.

*Example activity:*  

```
List Collection:
- Adding time : xx ms
- Persons count : 10000
- Random person : BEBW TXNVCXLIHR AXDTRWTNXGI

Finding persons in collection (by first name):
- Found person with BHWQ firstname : BHWQ CEPHQDOSKF
- Found person with PHOX firstname : PHOX LMWDVFJRLM
- Found person with AYHA firstname : AYHA VLYCIIBNKF
- Found person with HUTD firstname : HUTD QWAPTJLULC
- ...
- Persons tried to find : 1000
- Total finding time: xx ms

Press enter key to continue...
```

Implement same functionality to another Method, that uses a Dictionary structure. Use the first name as the key. Because a key must be unique, check first that a key is not already there. Be sure to include 10000 elements in the Dictionary structure and start a random search only after that.
Remember that two keys cannot be same in a Dictionary collection.

Please, write to project's code as comments **What differences did you notice in structures and speeds?**

*Example activity:*  

```
Dictionary Collection:
- Adding time : xx ms
- Persons count : 10000
- Random person : SQKP BOIYJURHIE VWDMKNJPKBG

Finding persons in collection (by first name):
- Found person with ENGR firstname : ENGR NYHOKHXSME
- Found person with QFQX firstname : QFQX BYTRKKAJDF
- Found person with FAQI firstname : FAQI AJYBJIDWLL
...
- Persons tried to fiend : 1000
- Total finding time: xx ms

Press enter key to continue...
```




## T32 Delegate
* Points: 2

Use delegates to make a program for the user to enter a string. After that, the user can choose one or more actions to be performed on the string.
You must be able to perform the following operations on a character string:

* converts all letters in a string to uppercase
* converts all letters in a string to lowercase
* changes the Title style of the string, i.e. the first character is uppercase and the rest are lowercase
* reverses the string, i.e. the word Teppo becomes oppeT.

That is, implement your own method for each transformation (all methods must have the same signature). Create an instance of the delegate and attach the necessary methods to it. Voila.

*Example activity:*  

```
Enter the string to process:
catfish

Choose the treatment you want, you can give several treatments at once
as one string, e.g. '123'
1: to capital letters
2: lowercase
3: as a title
4: as a palindrome
0: termination

Selection: 123

catfish changed to CATFISH
catfish changed to catfish
catfish changed to subcatfish

Choose the treatment you want, you can give several treatments at once
as one string, e.g. '123'
1: to capital letters
2: lowercase
3: as a title
4: as a palindrome
0: termination

Selection:
```

## T33 MailBook with Lambda
* Points: 2

Implement a small-scale MyMailBook program that you can use to search and save the e-mails of your friends. For the sake of simplicity, it is assumed here that each friend has only one email address.
Create a class *Friend* with properties Name and Email. Make a collection class *MailBook*,
which, during initialization, fetches the text file friend.csv and their email address and saves them to Friend objects. The collection class MailBook has a readonly property on Friends that returns the List of Friend objects.

Implement the following functions in the main program and/or the aforementioned MailBook class:

* when the program starts, it reads the familiar ones from the file and shows how many names were read
* shows all friends on the screen
* a search that is given a friend's name or the first part of it. The search uses a lambda function to find all friends whose name contains the searched string. Note that the search may produce one or more results.
* adding a new friend, the friend's information must also be saved in the above text file, note: implement appropriate exception handling for file handling.

**Example activity:*  *  
```
11 names in the address book:
Donald Duck
Pelle Fearless
Matt Nickerson
Jack Russell
Cecilia Thorson
Nikke Nackerstrom
Svella Bitti
Kirsi Kernel
Joe Doe
Sven Duhfa
Kai Kersson

Enter the name or part of the name of the person you are looking for > Sv  

Svella Bitti svella@bitti.com
Sven Duhfa sven@duhfa.com

Program completed successfully. Press any key to continue...
```

## T34 Unit test for ArrayCalculator
* Points: 2

Implement a class named ArrayCalculator, that has the following static methods: Sum, Average, Min and Max.
The methods take a double[] array as a parameter and calculate the calculation operation according to their name to the elements of the array and return the result to the calling program.

Implement the main program and, for example, an array containing the following data:  
double[] array = { 1.0, 2.0, 3.3, 5.5, 6.3, -4.5, 12.0 };  
Call static calculation methods of the ArrayCalcs class from the main program with the values ​​of the given array and print the results to the console.

Implement a new project of **unit testing** in the solution and test all  methods of the ArrayCalcs class.

**Question:** How the methods of the ArrayCalcs class work if you pass an empty double[] array as a parameter: double[] array = { };

*Sample printout:*
```
Sum = 25.60
Ave = 3.66
Min = -4.50
Max = 12.00

Press enter key to continue...
```


## T35 Unit Test for Shopping cart
* Points: 2

Implement an application that allows you to manage the contents of the shopping cart. The Product class has two properties: name and price. In the main program add couple Product objects to a List collection. Finally, print the contents of the collection.

Use **unit testing** to test that the shopping cart displays the correct number of products. Create and execute unit tests for 0,1,2 and 5 products.

*Sample printout:*  
```
Your products in shopping cart:
- product: Milk 1.4 e
- product: Bread 2.2 e
- product: Butter 3.2 e
- product: Cheese 4.2 e
There are 4 products in the shopping cart.
Press enter key to continue...
```


## T36 Invoice
* Points: 2

Implement a program that can display an invoice for purchased goods.

The following information must be processed for each item purchased: name, price and quantity.
The implemented class must be able to return information about how much purchased goods
will pay in total (price*quantity). Also implement the ToString() method,
which returns the product name, price and quantities as a string.

```
InvoiceItem
- Name : String
- Price: double
- Quantity : int
- Total == Price * Quantity : double
- ToString() : string
```

Implement a class that contains the products defined above in a List.
The class must also be able to tell the customer's name, how much is on the "bill"
total products and the total amount of money spent on them.

**Invoice-class**
//Properties
- Customer : string (just a string, no Customer class..)
- Items : List<InvoiceItem>
- ItemsCount : int //count of different InvoiceItems
- ItemsTogether : int //total number of items
//methods
- CountTotal : double //sum of InvoiceItem Total's

Implement the main program where you define the goods and the buyer's name for the invoice.
Implement the Private method PrintInvoice in the main program, which makes a neat invoice, like this *PrintInvoice(Invoice invoice) : string*

**Example output of the PrintInvoice method:**

```
Customer Kirsi Kernel's invoice:
=================================
Milk 1.75e 1 pieces 1.75e total
Beer 5.25e 1 pieces 5.25e total
Butter 2.50e 2 pieces 5.00e total
=================================
Total: 4 pieces 12.00 euros
```

## T37 Dice
* Points: 2

Implement the Dice class so that the dice can be rolled. The dice must return a random number on each roll. Implement the dice roll in the main program. First try rolling the dice once and print the number of the dice. After this, implement the program in such a way that you ask the user for the number of throws. Roll the dice and print the average of the numbers rolled.

*Sample printout:*  
```
Dice, one test throw value is 4
```

```
How many times you want to throw a dice : 10000
Dice is now thrown 10000 times, average is 3.4853
```

Finally, print the number of occurrences of all the numbers thrown.

```
How many times you want to throw a dice : 10000

Dice is now thrown 10000 times
- average is 3.4853
- 1 count is 1726
- 2 count is 1610
- 3 count is 1705
- 4 count is 1691
- 5 count is 1580
- 6 count is 1688

Press enter key to continue...
```
## T38 Wooden Window
* Points: 2  

A carpenter company makes wooden windows for summer houses. Windows have three glass layers. The company needs a program that calculates how much wood and glass are needed to fabricate a window frame. An end-user gives the width and heigth of the window. Create a Window-class that have needed properties and methods to calculate following:  
- Area of the Window
- Circumference of the Window
- Using of class in squaremeters

## T39 Timer
* Points: 2  

Create a simple Timer application. An end-user can set a time for an alarm. She can select any time between from 1 second to 60 minutes, and she can give it in seconds or in minutes. She can give a alarm notification for an alarm, default value is "Wake wake, the little bird". Create a proper Timer-class for the application with neede properties and methods. 

## T40 MiniPeppi
* Points: 3

Implement a console-based MiniPeppi program that can be used to add, delete and search
student information. Create a Student class with the properties FirstName, LastName, SID and Group.
SID is always unique, individual. It is formed by taking the first letter of the first name and last name, and a running number starting from 001.  
Add the information of the five test students to the register in this order: Hanna Husso, Kirsi Kernell, Masa Niemi, Teppo Testaaja, Allan Aalto.

```
The first student in the MiniPeppi:
Hanna Husso HH001 TTV19S1
The last student in the MiniPeppi:
Allan Aalto AA005 TTV19SM

The all 5 students in the MiniPeppi:
Hanna Husso HH001 TTV19S1
Cherry Kernel KK002 TTV19S2
Masa Niemi MN003 TTV19S3
Teppo Tester TT004 TTV19SM
Allan Aalto AA005 TTV19SMM

The all students in alphabetical order in the MiniPeppi:
Allan Aalto
Hanna Husso
Cherry Kernel
Masa Niemi
Prank Tester

Press any key to continue...
```

After that, add functionality that asks the user for the information of the student to be added.
The student object is added to the list if there is no student for the same SID in the list yet.
So perform a check that the given SID is not already in the register.

```
Please, give data of new Student:
SID: JR006
First name: Jack
Surname: Russell
Group: TTV19S5
Jack Russell added succesfully. There are now 6 students in MiniPeppi .
The all students ... etc
```

## T41 FishRegister
* Points: 3  
  
Implement an application MyFishRegister where you can manage fishing information related to fishing.
The program must be able to process: the fisher's basic information (name, phone number), the basic information of the obtained fish (species, length and weight), and the basic information of the fishing place (name and place).
Design the necessary class structure and draw a UML diagram of it. Implement the main program **MyFishApp**, where the user can add fishers and  fish they catch. Make a function that can print the content of the fish register, i.e. all fish caught by all fishers.

*Sample printout:* 
```
A new Fisherman added to Fish-register:
 - Fisherman: Kirsi Kernel Phone: 020-12345678

Fisher : Kirsi Kernel got a new fish
 - species: pike 120 cm 4.5 kg
 - place: The Lake of Jyväskylä
 - location: Jyväskylä

Fisher : Kirsi Kernel got a new fish
 - species: salmon 190 cm 13.2 kg
 - place: River Teno
 - location: The Northern edge of Finland

All fish in register:

Fisherman Kirsi Kernel has got following fish:

 - species: pike 120 cm 4.5 kg
 - place: The Lake of Jyväskylä
 - location: Jyväskylä

 - species: salmon 190 cm 13.2 kg
 - place: River Teno
 - location: The Northern edge of Finland

Press enter key to continue...
```

And finally, implement a method for the fish register so that the fish can be printed in the sorted order of fish sizes (heaviest first).

```
Sorted register

*** All fish in Fish-register: ***

 - Salmon 190 cm 13.2 kg
 - place: River Teno
 - location: The Northern edge of Finland
 - Fisherman: Kirsi Kernel

 - Pike 120 cm 4.5 kg
 - place: The Lake of Jyväskylä
 - location: Jyväskylä
 - Fisherman: Kirsi Kernel

 - Crucian carp 20 cm 0.4 kg
 - place: The Lake of Jyväskylä
 - location: Jyväskylä
 - Fisherman: Uolevi Kärppä
 
Press enter key to continue...
```

## T42 Patterns
* Points: 3

Implement an application that can handle different shapes (e.g. Circle and Rectangle).
Create a separate abstract Shape class from which other shapes inherit.
Define the name of the shape (Name) and the abstract Areas as properties of the Shape class Circumference methods (area and circumference). Inherits from Circle and Rectangle classes
From the Shape class and implement the Area and Circumference methods. Create a Shapes class and its inside the List data structure, where you can always add patterns. Execute the main program, where you use the Shapes class, create a few different shapes and add them to the List data structure in the Shapes class.

Finally, in the main program, go through the List data structure of the Shapes class and print all the shapes it contains.

*Sample printout:*  

```
Circle Radius=1 Area=3.14 Circumference=7.28
Circle Radius=2 Area=12.57 Circumference=12.56
Circle Radius=3 Area=28.27 Circumference=18.84
Rectangle Width=10 Height=20 Area=200.00 Circumference=60.00
Rectangle Width=20 Height=30 Area=600.00 Circumference=100.00
Rectangle Width=40 Height=50 Area=2000.00 Circumference=180.00

Press enter key to continue...
```

## T43 Bonus task
* Points: 3

You have a small company with three fellows. Create your own application for saving and counting working hours. Each fellow can daily add his/her initials, date, project id and working hours to the application. The application can show hours by fellows, weeks and projects. Use the various possibilities of object-oriented programming appropriately and correctly, create needed classes. You can add also functionality to save data to database and/or text-files. 