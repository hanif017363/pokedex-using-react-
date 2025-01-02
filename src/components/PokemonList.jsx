/* eslint-disable react/prop-types */
//* eslint-disable react-hooks/exhaustive-deps */

export default function PokemonList({ pokemons, setFilter, typeColors }) {
  return (
    <div>
      <div className="body-wrapper">
        <div className="filter-wrap">
          <select
            name=""
            id="filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="normal">normal</option>
            <option value="ice">ice</option>
            <option value="fighting">fighting</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="flying">flying</option>
            <option value="psychic">psychic</option>
            <option value="bug">bug</option>
            <option value="rock">rock</option>
            <option value="ghost">ghost</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="steel">steel</option>
            <option value="fairy">fairy</option>
          </select>
        </div>
        <div className="pokemon-list">
          {pokemons ? (
            pokemons.map((pokemon) => (
              <div className="pokemon" key={pokemon.id}>
           <div className="list-header">
                 <p>#{pokemon.id}</p>
                <i className="fa-regular fa-heart"></i>
           </div>
                <img
                  src={`http://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  alt={pokemon.name}
                />

                <p>Types : {pokemon.types.join(", ")}</p>

                <h1
                  className="pokemon-name"
                  style={{
                    color: typeColors[pokemon.types[0]] || "white",
                  }}
                >
                  {pokemon.name}
                </h1>
              </div>
            ))
          ) : (
            <p className="no-pokemon">No Pokemon Found</p>
          )}
        </div>
      </div>
    </div>
  );
}
