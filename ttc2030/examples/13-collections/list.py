#declare a list of numbers and initialize
list = [5, 10, 15]

# append adds new item to the end of the list
list.append(100)

# insert new item to the middle of the list
list.insert(1, 7)

# print contents of the list
print("List contents: ",list)

# list items can de accessed via [] operator
# remember that index number is zero based
print ("List element an index 1: ", list[1])

# index is access list can be negative
# negative index means index from end, -1 being the last one
print("List element ad index -1", list[-1])

# list item can be changed whith [] operator
list[1] = 60

# print contents of the lists
print("List contents: ", list)

# index can also be specified as range
print("List elements at range 2:5: ", list[2:5])

list.remove(10)
print("List contents after '10' was remowed: ", list)


# pop function removes item by index
list.pop(1)
print("List contents after pop(1): ", list)

# altrnative to pop is del; does the same thing
del list[1]
print("List contents after del list[1]: ", list)

# clear removes all items from the list
list.clear()
print("List contents ater clear: ", list)


# declare list of names and print them
namelist = ["Joe", "Sally", "Liam", "Robert", "Emma", "Isabella"]
print(namelist)

# loop thru a list
for name in namelist:
    print(name)

# built-in len function can be used to get number of elements in list
print("namelist length is: ", len(namelist))

# check if item exists
if "Liam" in namelist:
    print("Yes, 'Liam' is in the name list")

anothernamelist = namelist
anothernamelist[0] = "Roger"
print(namelist)

anothernamelist = namelist.copy()
anothernamelist[0] = "Harris"
anothernamelist[-1] = "Mary"
print("Contents of namelist: ", namelist)
print("Contents of anothernamelist: ", anothernamelist)

# join list to another
combinedlist = namelist + anothernamelist
#combinedlist = namelist.copy()
#combinedlist.extend(anothernamelist)
print("Contents of conbinedlist: ", combinedlist)
