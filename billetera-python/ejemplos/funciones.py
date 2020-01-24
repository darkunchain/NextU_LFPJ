
btc = float(input("Ingrese la cantidad de BTC: "))
xrp = float(input("Ingrese la cantidad de XRP: "))

def ConversionCriptomoneda(cantBTC: float,cantXRP: float):    
    BTCUSD=7442.50
    XRPUSD=0.660982
    saldoTotalUSD = (cantBTC*BTCUSD) + (cantXRP*XRPUSD)
    return saldoTotalUSD


saldoTotalUSD = ConversionCriptomoneda(btc,xrp)
print("El valor total de USD es: "+str(saldoTotalUSD))