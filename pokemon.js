let getPokemon = async(id) => {
  let res = await fetch(`https://pokeapi.com/api/v2/pokemon/${id}/`)
  let data = await res.json()
  console.log(data)
}
getPokemon(7)