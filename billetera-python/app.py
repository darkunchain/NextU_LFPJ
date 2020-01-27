from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
from tkinter import ttk
from tkinter import *
from datetime import datetime
import sqlite3
import requests
import json

class billetera:

    nombre_db = 'database.db'

    def __init__(self, window):
        self.ventana = window
        self.ventana.title('Billetera Bitcoins')

        
        #Contenedor frame para recibir criptomonedas
        
        frame = LabelFrame(self.ventana, text = 'Mi billetera de Criptomonedas')
        frame.grid(row=0, column=0, columnspan=3, pady=20)                
        Label(frame, text = 'Recibir Criptomonedas',fg="blue").grid(row=0, column=1)
        Label(frame, text = 'Nombre de moneda: ').grid(row=1, column=1)
        self.nombrer=Entry(frame)
        self.nombrer.grid(row=1,column=2)
        Label(frame, text = 'Cantidad a recibir: ').grid(row=2, column=1)
        self.cantidadr=Entry(frame)
        self.cantidadr.grid(row=2,column=2)
        Label(frame, text = 'Codigo del remitente: ').grid(row=3, column=1)
        self.codr=Entry(frame)
        self.codr.grid(row=3,column=2)
        ttk.Button(frame, text='Recibir', command = self.recibir_cripto).grid(row=4,column=1,columnspan=2, sticky=W+E)

        #Contenedor frame para transferir criptomonedas       
        Label(frame, text = 'Transferir Criptomonedas',fg="blue").grid(row=0, column=4)      
        Label(frame, text = 'Nombre de moneda: ').grid(row=1, column=4)
        self.nombret=Entry(frame)
        self.nombret.grid(row=1,column=5)
        Label(frame, text = 'Cantidad a transferir: ').grid(row=2, column=4)
        self.cantidadt=Entry(frame)
        self.cantidadt.grid(row=2,column=5)
        Label(frame, text = 'Codigo del receptor: ').grid(row=3, column=4)
        self.codt=Entry(frame)
        self.codt.grid(row=3,column=5)
        ttk.Button(frame, text='Transferir').grid(row=4,column=4,columnspan=2, sticky=W+E)
        
        #Contenedor frame para balances
        Label(frame, text = 'Balances y reportes',fg="green").grid(row=5, column=3)
        Label(frame, text = 'Balance por moneda',fg="blue").grid(row=6, column=1)
        Label(frame, text = 'Nombre de moneda: ').grid(row=7, column=1)
        self.nombreb=Entry(frame)
        self.nombreb.grid(row=7,column=2)
        ttk.Button(frame, text='Mostrar Balance').grid(row=8,column=1,columnspan=2, sticky=W+E)
        Label(frame, text = 'Balance General - Historial de transacciones',fg="blue").grid(row=6, column=4)
        ttk.Button(frame, text='Mostrar Balance general').grid(row=7,column=4,columnspan=2, sticky=W+E)
        ttk.Button(frame, text='Mostrar Historial de transacciones').grid(row=8,column=4,columnspan=2, sticky=W+E)
        
        #mensajes
        self.mensaje1 = Label(frame,text='',fg='red')
        self.mensaje1.grid(row=9,column=1,columnspan=4,sticky=W+E)
        self.mensaje2 = Label(frame,text='',fg='red')
        self.mensaje2.grid(row=10,column=1,columnspan=4,sticky=W+E)

        #tabla
        self.tree=ttk.Treeview(height=10,columns=("#0","#1","#2","#3","#4","#5","#6"))
        self.tree.grid(row=5,column=0)
        self.tree.heading('#0', text='Moneda', anchor=CENTER)
        self.tree.heading('#1', text='Cantidad', anchor=CENTER)
        self.tree.heading('#2', text='Cotizacion', anchor=CENTER)
        self.tree.heading('#3', text='Total en USD', anchor=CENTER)
        self.tree.heading('#4', text='Fecha', anchor=CENTER)
        self.tree.heading('#5', text='Tipo de transaccion', anchor=CENTER)
        self.tree.heading('#6', text='Codigo remitente-receptor', anchor=CENTER)

        #Variables
        self.monedas=()
        self.monedas_dict={}
        now = datetime.now()
        self.fechat = now.strftime("%d/%m/%Y %H:%M:%S")        

        

    def run_query(self, query, parametros=()):
        with sqlite3.connect(self.nombre_db) as conn:
            cursor = conn.cursor()
            resultado = cursor.execute(query, parametros)
            conn.commit()
        return resultado

    def ver_datos(self):             
        records = self.tree.get_children()
        for element in records:
            self.tree.delete(element)
        query = 'SELECT * FROM transacciones ORDER BY fecha DESC'
        db_rows = self.run_query(query)  
        for row in db_rows:                      
            self.tree.insert('',0, text=row[1], values = (row[2],row[3],row[4],row[5],row[6]))

    def ver_transaccion(self,moneda):
        records = self.tree.get_children()
        for element in records:
            self.tree.delete(element)
        query = 'SELECT * FROM transacciones WHERE moneda=?'        
        param=(moneda,)        
        db_rows = self.run_query(query,param)  
        for row in db_rows:                       
            self.tree.insert('',1, text=row[1], values = (row[2],row[3],row[4],row[5],row[6]))

    def validar_recibir(self):
        return len(self.nombrer.get()) != 0 and len(self.cantidadr.get()) != 0 and len(self.codr.get()) != 0

    def esmoneda(self,cripto):        
        return cripto in self.monedas

    def recibir_cripto(self):
        records = self.tree.get_children()
        for element in records:
            self.tree.delete(element)
        if self.validar_recibir():            
            data=requests.get("https://api.coinmarketcap.com/v2/listings/").json()            
            for cripto in data["data"]:
                self.monedas_dict[cripto["symbol"]]=cripto["name"]
            self.monedas = self.monedas_dict.keys()
            moneda = self.nombrer.get()
            if not self.esmoneda(moneda):                    
                    self.mensaje1['text'] = 'La moneda {} NO existe en la base de datos, ingrese una moneda valida'.format(moneda)   
                    self.mensaje2['text'] = 'Para mas informacion, consulte: https://api.coinmarketcap.com/v2/listings/'         
            else:
                self.mensaje1['text'] = 'La moneda fue validada correctamente symbol: {} y nombre: {}'.format(moneda,self.monedas_dict.get(moneda))                
                cotizacion=float(self.cotizacion_actual(self.nombrer.get()))                
                try:
                    float(self.cantidadr.get())                    
                except ValueError:
                    self.mensaje1['text'] = 'La cantidad ingresada {} no tiene un formato valido'.format(self.cantidadr.get())
                    self.mensaje2['text'] = 'Ingrese un numero, los decimales separados por punto(.)'
                totalr = cotizacion*float(self.cantidadr.get())            
                
                query = 'INSERT INTO transacciones VALUES(NULL,?,?,?,?,?,?,?)'
                param=(
                    self.nombrer.get(),
                    self.cantidadr.get(),
                    float(cotizacion),
                    self.fechat,
                    str('recepcion'),
                    self.codr.get(),
                    float(totalr)
                    )                
                self.run_query(query,param)
                self.mensaje2['text'] = 'La transaccion fue realizada correctamente'
                self.nombrer.delete(0,END)
                self.cantidadr.delete(0,END)
                self.codr.delete(0,END)
                self.ver_transaccion(moneda)         
                        
        else:
            self.mensaje1['text'] = 'Debe digitar: Nombre de moneda, cantidad y codigo del remitente'            
        self.ver_datos()


    def cotizacion_actual(self, moneda):
        url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'        
        par=str(moneda)        
        parameters = {
        'symbol': par
        }
        headers = {
            'Accepts': 'application/json',
            'X-CMC_PRO_API_KEY': '66e51ddf-3b35-4977-8044-8a19819d0022',
        }
        session = Session()
        session.headers.update(headers)
        try:
            response = session.get(url, params=parameters)
            data = json.loads(response.text)            
            cot_actual=data['data'][par]['quote']['USD']['price']
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)
        return(cot_actual)



            

# Funcion main
if __name__ == "__main__":
    window = Tk()
    application=billetera(window)
    window.mainloop()   