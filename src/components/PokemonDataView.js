// Функция компонента PokemonDataView, принимающая объект pokemon в виде свойства

const PokemonDataView = ({ pokemon }) => {
  return (
    <div>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        width="200"
      />
      <p>{pokemon.name}</p>
      <ul>
        {pokemon &&
          pokemon.stats.map(entry => {
            return (
              <li key={entry.stat.name}>
                <p>
                  {entry.stat.name}: {entry.base_stat}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PokemonDataView;
