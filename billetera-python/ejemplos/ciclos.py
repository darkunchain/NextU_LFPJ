""" str cripto
float cant, cotiz, valor 
int i """
i = 0
valor = 0.0
while i < 3 :
    cripto = input("ingrese el nombre la moneda: ")
    cant = float(input("Ingrese la cantidad de la moneda: "))
    cotiz = float(input("Ingrese la cotización en USD de la moneda: "))
    valor = valor + (cant*cotiz)
    i+=1

print("Usted tiene "+ str(valor) +" Dólares Americanos")
