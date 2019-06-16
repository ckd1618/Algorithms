class myclass:
    def __init__(self, var1):
        self.var1 = var1
    
    def fun1(self):
        a = self.var1
        def innerFun1(var):
            return var
        return innerFun1(a)

myclass1 = myclass(5)
print(myclass1.fun1())
