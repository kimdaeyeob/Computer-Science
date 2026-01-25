class FourCal:

    def __init__(self):
        self.fir = None
        self.sec = None

    def setdata(self, fir, sec):
        self.fir = fir
        self.sec = sec
    def add(self):
        result = self.fir + self.sec
        return result

a = FourCal()
a.setdata(4,2)
print(a.add())