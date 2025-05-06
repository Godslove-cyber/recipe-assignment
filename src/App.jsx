import MyImage from './assets/image-omelette.jpeg'
import './App.css'

function App() {

  return (
    <div className='Background'>
    <div className='Recipe-Container-Front-Project'>
    <img src= {MyImage} />

    
    <h1>Simple Omelette Recipe</h1>
    <p>An easy and quick dish, perfect for any meal.
      This classic omelette combines beaten eggs cooked
      to perfection, optionally filled with your choice
      of cheese, vegetables, or meat.
    </p>
    <h4 className='Preparation Time'>Preparation Time
    <ul>
      <li>Total: Approximately 1o minutes</li>
      <li>Preparation: 5 minutes</li>
      <li>cooking: 5 minutes</li>
    </ul>
    </h4>
    

    <h2>Ingredients</h2>
    <ul>
      <li>2-3 large eggs</li>
      <li>salt, to taste</li>
      <li>pepper, to taste</li>
      <li>1 tablespoon of butter or oil</li>
      <li>optional fillings: cheese, diced vegetables,
      cooked meats, herbs</li>
      </ul>
    

    <h2>Instructions</h2>
    <ol>
      <li>Beat the eggs: In a bowl, beat the eggs with a 
      pinch of salt and pepper until they are well mixed.
      you can add a tablespoon of water or milk for fluffier
      texture</li>
      <li>heat the pan: place a non-stick frying pan over medium
      and add butter or oil.</li>
      <li>cook the omelette: Once the butter is melted and bubbling,
         pour in the eggs. Tilt the pan to ensure thye eggs evenly coat 
         the surface.</li>
      <li>Add fillings(optional): When the eggs begin to set at the edges
         but are still slightly runny in the middle, sprinkle your chosen 
         fillings over one half of the omelette.</li>
         <li>Fold and serve: As the omelette continues to cook, carefully 
          lift one edge and fold it over the fillings. let it cook for another
          minute, the slide it onto a plate.</li>
          <li>Enjoy: Serve hot, with additional salt and pepper if needed.</li>
      </ol>

  
      <h2>Nutrition</h2>  
      <p>The table below shows nutritional values per serving without additional fillings.</p>
      
      </div>


    <div className='Recipe-Container-Back-Project'>
      <img src={MyImage} />
      <h1>Simple Omelette Recipe</h1>
    <p>An easy and quick dish, perfect for any meal.
      This classic omelette combines beaten eggs cooked
      to perfection, optionally filled with your choice
      of cheese, vegetables, or meat.
    </p>

    <h4 className='Preparation Time'>Preparation Time
    <ul>
      <li>Total: Approximately 1o minutes</li>
      <li>Preparation: 5 minutes</li>
      <li>cooking: 5 minutes</li>
    </ul>
    </h4>
    

    <h2>Ingredients</h2>
    <ul>
      <li>2-3 large eggs</li>
      <li>salt, to taste</li>
      <li>pepper, to taste</li>
      <li>1 tablespoon of butter or oil</li>
      <li>optional fillings: cheese, diced vegetables,
      cooked meats, herbs</li>
      </ul>
    

    <h2>Instructions</h2>
    <ol>
      <li>Beat the eggs: In a bowl, beat the eggs with a 
      pinch of salt and pepper until they are well mixed.
      you can add a tablespoon of water or milk for fluffier
      texture</li>
      <li>heat the pan: place a non-stick frying pan over medium
      and add butter or oil.</li>
      <li>cook the omelette: Once the butter is melted and bubbling,
         pour in the eggs. Tilt the pan to ensure thye eggs evenly coat 
         the surface.</li>
      <li>Add fillings(optional): When the eggs begin to set at the edges
         but are still slightly runny in the middle, sprinkle your chosen 
         fillings over one half of the omelette.</li>
         <li>Fold and serve: As the omelette continues to cook, carefully 
          lift one edge and fold it over the fillings. let it cook for another
          minute, the slide it onto a plate.</li>
          <li>Enjoy: Serve hot, with additional salt and pepper if needed.</li>
      </ol>

  
      <h2>Nutrition</h2>  
      <p>The table below shows nutritional values per serving without additional fillings.</p>
      
      </div>

      </div>

  );
}

export default App