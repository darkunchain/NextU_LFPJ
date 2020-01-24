nombreCripto = input("Nombre de la Criptomoneda: ")
cantCripto = float(input("Cantidad acumulada de la Criptomoneda: "))
cotizacion= float(input("Cotización por US$ del día de la Criptomoneda: "))
valorTotal = cantCripto * cotizacion
print("Ud. Posee un total de US$ " + str(valorTotal))