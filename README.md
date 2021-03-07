# reservaClases

### Reserva Puntual
Usa el script con el plugin "TamperMonkey" para copiar el identificador de la clase y reservarla **una única vez**. Si quieres reservar en otras semanas tendrás que copiar de nuevo el identificador o leer la siguiente sección.
El identificador que has de enganchar en el archivo de texto tiene la siguiente aparencia: `5120/2021-03-22/07:00:00/G.A.C./AMANDA`


### Reserva Fija
Puedes reservar la misma clase todas las semanas en función de su nombre, hora y día de la semana que se hace.
Por ejemplo, si quieres reservar el Step de los miércoles a las 19:15:00, añade la siguiente linea: `fija/3/19:15:00/STEP`. El `3` indica que es el miércoles, la hora tiene que estas en el formato `hh:mm:ss` y el nombre de clase tiene que ser el que aparece en la web, o al menos, una parte. Si la clase es por ejemplo `BODYPUMP` puedes poner `PUMP` o `pump` (no distingue entre mayúsculas y minúsculas).

#### Ejemplos:
##### Reserva de step y pump todos los lunes por la tarde
```
# Reserva 
fija/1/18:15:00/STEP
fija/1/19:15:00/BODYPUMP
```

##### Reserva de step todos los sábados
```
# Sabado
fija/6/11:15:00/STEP
```
