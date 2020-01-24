from datetime import datetime
nombreCripto=input("Nombre de la Criptomoneda: ")
cantCripto=float(input("Cantidad acumulada de la Criptomoneda: "))
cotizacion=float(input("Cotización por US$ del día de la Criptomoneda: "))
ahora = datetime.now()
print("La fecha completa y hora en la que obtuvo la información fue: "+str(ahora))
valorTotal= cantCripto * cotizacion
print("Ud. Posee un total de US$ "+str(valorTotal))
valorTotal1=valorTotal*1.05
valorTotal2=valorTotal1*1.05
valorTotal3=valorTotal2*1.05
valorTotal4=valorTotal3*1.05
valorTotal5=valorTotal4*1.05
valorTotal6=valorTotal5*1.05
valorTotal7=valorTotal6*1.05
ganancia= valorTotal7-valorTotal
print("Su ganancia luego de una semana es: "+str(ganancia)+" USD")