export default function SearchFilters() {
  return (
    <div>
      <select aria-label="Filtrer par poste" defaultValue="">
        <option value="" disabled>
          Poste
        </option>
        <option value="gardien">Gardien</option>
        <option value="defenseur">Défenseur</option>
        <option value="milieu">Milieu</option>
        <option value="attaquant">Attaquant</option>
      </select>

      <select aria-label="Filtrer par pied fort" defaultValue="">
        <option value="" disabled>
          Pied fort
        </option>
        <option value="droit">Droit</option>
        <option value="gauche">Gauche</option>
        <option value="deux">Deux pieds</option>
      </select>
    </div>
  );
}
