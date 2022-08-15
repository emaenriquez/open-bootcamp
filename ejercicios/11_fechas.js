
/*
- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/ 
const fecha_hoy = new Date()

const fecha_nacimiento = new Date(2003,3+1,17)

const mas_tarde = fecha_hoy > fecha_nacimiento;

const dia = fecha_nacimiento.getDay()
const mes = fecha_nacimiento.getMonth()
const anio = fecha_nacimiento.getFullYear()