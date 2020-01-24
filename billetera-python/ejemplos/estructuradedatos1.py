i=0
cripto=['']
cant=['']
cotiz=['']
while i<3:
    cripto[i]=input("Ingrese el nombre de la moneda: ")
    cant[i]=float(input("Ingrese la cantidad de "+cripto[i]+":"))
    cotiz[i]=float(input("Ingrese la cotización en USD de"+cripto[i]+":"))
    print(cripto,cant,cotiz)
    i=+1
i=0
while i<3:
    print("Moneda: "+cripto[i]+", cantidad: "+cant[i]+", precio en USD: "+cotiz[i])
    i=i+1
