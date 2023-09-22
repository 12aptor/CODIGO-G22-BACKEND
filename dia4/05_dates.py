"""El módulo datetime nos permite trabajar con fechas"""
import datetime

now = datetime.datetime.now()
# print(now)
anio = now.year
mes = now.month
dia = now.day
# print(f"{dia}/{mes}/{anio}")

date_time = datetime.datetime(2022, 1, 1)
print(date_time)