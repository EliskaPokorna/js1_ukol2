const jmeno = prompt("Zadejte Vaše křestní jméno bez diakritiky:")
const prijmeni = prompt("Zadejte Vaše příjmení bez diakritiky:")

const upraveneJmeno = jmeno.trim()
const finalnijmeno = upraveneJmeno.slice(0, 3)

const upravenePrijmeni = prijmeni.trim()
const finalniPrijmeni = upravenePrijmeni.slice(0, 5)

const email = finalniPrijmeni + finalnijmeno  + "@fit.cvut.cz"

document.body.innerHTML = `<h1>Váš email je: ${email.toLowerCase()}</h1>`