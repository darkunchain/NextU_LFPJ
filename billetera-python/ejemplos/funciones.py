""" funcion ConversionCriptomoneda(cantBTC,cantXRP: float): float
var saldoTotalUSD, BTCUSD,XRPUSD: float;
BTCUSD=7442.50;
XRPUSD=0.660982;
saldoTotalUSD = (cantBTC*BTCUSD) + (cantXRP*XRPUSD);
retorna saldoTotalUSD;
finFuncion """

def ConversionCriptomoneda(cantBTC: float,cantXRP: float):    
    BTCUSD=7442.50
    XRPUSD=0.660982
    saldoTotalUSD = (cantBTC*BTCUSD) + (cantXRP*XRPUSD)
    return saldoTotalUSD


saldoTotalUSD = ConversionCriptomoneda(30,20)
print("El valor total de USD es: "+float(saldoTotalUSD))