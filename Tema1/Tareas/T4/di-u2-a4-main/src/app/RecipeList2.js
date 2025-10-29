import { recipes } from './recipes.js';

export default function RecipeList2() {
  const receta=recipes.map(recipe=>
    <li key={recipe.id}>
      <p>
        <b>{recipe.name}:</b>
      </p>
    </li>
  );
  const Ingredientes=recipes.map(recipe=>
    <ul key={recipe.id}>
      {recipe.ingredients.map(ingredient=>
        <li key={ingredient}>
          {ingredient}
        </li>
      )}
    </ul>
  );
  if (receta.key=Ingredientes.key) {
        return (
    <div>
      <h1>Recetas</h1>
      <h2>{receta.name}</h2>
      <ul>{Ingredientes.ingredients}</ul>      
    </div>
  );
      }
  }

