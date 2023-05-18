import {useEffect,useState} from 'react';
import Recipe from './Recipe';
export default function ShowRecipes(){
    const APP_ID = "de8a87dc";
const APP_KEY = "c351dbe5e424d67931ce51d905461213";
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("paneer");
useEffect(() => {
	getRecipes();
}, [query])
const getRecipes = async () => {
	const response = await fetch
		(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
	const data = await response.json();
	setRecipes(data.hits);
	// console.log(data);

};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setQuery(search);
	setSearch("");
}
    return (
        <div className='App'>
        
        <form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>
	<div className="recipes" style={{display:"flex",flexDirection:'column',justifyContent:"space-evenly"}}>
		{recipes.map(recipe => (
		
		<Recipe
			key={recipe.recipe.label}
			title={recipe.recipe.label}
			calories={recipe.recipe.calories}
			image={recipe.recipe.image}
			ingredients={recipe.recipe.ingredients}
		/>
		))}
	</div>
        </div>
    )
}