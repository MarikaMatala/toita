class vehicle:
    def __init__(self, make="", model="", engine_cc=0; power_kw=0):
        self.make = make
        self.model = model
        self.engine_cc = engine_cc
        self.power_kw = power_kw

    # override conversion from vehicle to string with __str__
    def __str__(self):
    return self.make + " " + str(self.engine_cc) + "cc, " + str(self.power_kw) + "kw"
   
    make:""
    model:""
    engine_cc = 0
    power_kw = 0
        
#to be continued