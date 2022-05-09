'reinit'
'set display color white'
'c'
'open Data\jalaran.ctl'
'set lat -50 0'
'set lon -120 -60'
'set lev 925'

tiempo = 1

while (tiempo < 10)
  ;# 2 espacios
  'c'
  'set t 'tiempo
  
  'set parea 0.25 4.75 0.25 4.25'
  'set gxout shaded'
  'Scripts\color 50 100 -div 5 -kind white->blue'
  'd rhprs'
  'cbar'
  
  'draw string 1.7 4 'getDate2()

  'set parea 5.25 10.75 4.5 8.25' 
  'set gxout shaded'
  'Scripts\color 0 25 -div 10 -kind blue->white->tomato'
  'd T - 273.15'
  'cbar'
  'set string 1 c 4 0'
  'set strsiz 0.2'
  'draw string 5 8 t = 'tiempo' 'getDate2()

  'q pos'
    clic = subwrd(result, 5)
  
  if (clic = 1); tiempo = tiempo + 1; endif
  
  if (clic = 3); tiempo = tiempo - 1; endif
  
  if (clic = 5); break; endif
  
  if (clic = 2)
    'printim Fig\Int\while_'tiempo'.png x960 y960'
  endif

endwhile

#function Date()
#  'q time 1'
#    day1 = subwrd(result,3)
#	  h = substr(day1,1,2)
#	  d = substr(day1,4,2)
#	  m = substr(day1,6,3)
#	  y = substr(day1,9,4)
#      now = h'Z 'd'-'m'-'y
#return now

function getDate1()
    'q time 1'
        time = subwrd(result,3)
            dy = substr(time,4,2)
            mt = substr(time,6,3)
            yr = substr(time,9,4)
        
        if (mt='JAN'); mt='01'; endif
        if (mt='FEB'); mt='02'; endif
        if (mt='MAR'); mt='03'; endif
        if (mt='APR'); mt='04'; endif
        if (mt='MAY'); mt='05'; endif
        if (mt='JUN'); mt='06'; endif
        if (mt='JUL'); mt='07'; endif
        if (mt='AUG'); mt='08'; endif
        if (mt='SEP'); mt='09'; endif
        if (mt='OCT'); mt='10'; endif
        if (mt='NOV'); mt='11'; endif
        if (mt='DEC'); mt='12'; endif
        
        Date = dy' de 'mt' del 'yr
return Date

function getDate2()
    'q time 1'
        time = subwrd(result,3)
            hr = substr(time,1,2)
        
        utc = hr'Z'
return utc
