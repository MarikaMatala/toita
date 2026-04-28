# import the venicle class
from vehicle import vehicle

# declara an object 'car' from 'vehicle' class
car = vehicle("Datsun", "100A", 988, 12)
car2 = vehicle("Toyota", "Celica", 1588, 43)
car.make = "Datsun"
car.model = "100A"
car.engine_cc = 998
car.power_kw = 12

#print car info
print(car)
print(car2)
