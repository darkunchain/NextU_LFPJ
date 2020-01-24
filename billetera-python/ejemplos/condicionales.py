cripto1 = input("ingrese el nombre la primera moneda: ")
cripto2 = input("ingrese el nombre la segunda moneda: ")
cripto3 = input("ingrese el nombre la tercer moneda: ")
cant1 = int(input("Ingrese la cantidad de la primera moneda: "))
cant2 = int(input("Ingrese la cantidad de la segunda moneda: "))
cant3 = int(input("Ingrese la cantidad de la tercer moneda: "))
if cant1 > cant2 & cant1 > cant3:
    print(cripto1+": "+str(cant1))
    if cant2 > cant3:
        print(cripto2+": "+str(cant2))
        print(cripto3+": "+str(cant3))
    else:
        print(cripto3+": "+str(cant3))
        print(cripto2+": "+str(cant2))
elif cant2 > cant1 & cant2 > cant3:
    print(cripto2+": "+str(cant2))
    if cant1 > cant3 :
        print(cripto1+": "+str(cant1))
        print(cripto3+": "+str(cant3))
    else:
        print(cripto3+": "+str(cant3))
        print(cripto1+": "+str(cant1))    
else:
    print(cripto3+": "+str(cant3))
    if cant1 > cant2 :
        print(cripto1+": "+str(cant1))
        print(cripto2+": "+str(cant2))
    else:
        print(cripto2+": "+str(cant2))
        print(cripto1+": "+str(cant1))
    