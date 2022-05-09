'reinit'
'set display color white'
'c'

### Cargar data
'open Data\jalaran.ctl'

### Delimitar área
'set lat -50 0'
'set lon -120 -60'
'set lev 925'

### Mapa
'set mpdset hires'
'set map 4 7 4' 

'set ylopts 4 0.1 0.15' 

### Sombreado (shaded): presión superficial [hPa]
#'set gxout shaded'

#'Scripts/color 990 1030 -div 10 -kind mediumseagreen->white->white->white->crimson'
#'d pressfc/100'   Pa/100 = hPa
#'cbar'            Barra de colores

### Contorno (contour): temperatura del aire [°C]
#'set gxout contour'
#'set cstyle 1'     # Estilo de línea: 1 (continuo)
#'set cthick 4'

#'set rgb 101 166 214 27'
#'set ccolor 101'
#'d T-273.15' 

'set gxout vector'
'set cmin 8'            
 
'set arrowhead 0.075'  
'set arrscl 0.125 8'      

#'set rgb 102 229 232 232'   
#'set rgb 103 112 123 124'     
#'set rgb 104 33 47 60'       
#'set rbcols 0 102 103 104'  

'set ccolor 0'

'd skip(u,5);v'



### Exportar gráfica
#'printim Fig\Basic\grads1.png x960 y960'
