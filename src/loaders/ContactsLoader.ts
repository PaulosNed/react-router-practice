export const contactsLoader = async() => {
    const res = await fetch('http://localhost:4000/contacts')

    return res.json()
}