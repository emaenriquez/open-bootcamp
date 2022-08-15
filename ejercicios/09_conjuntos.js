/**
- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
 */
const arr_family = ["ricardo","sebas","lili","emanuel"]

const set_Family = new Set(arr_family)

set_Family.add("emanuel")
set_Family.add("javaScript")

console.log(set_Family)