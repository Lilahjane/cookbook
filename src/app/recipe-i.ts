import { IngredientI } from "./ingredient-i";
export interface RecipeI {
    recipe_name: string;
    recipe_photo: string;
    recipe_url: string;
    Calories: number;
    Carbohydrates: string;
    NetCarbs: string;
    Fat: string;
    Protein: string;
    Sodium: string;
    Prep_Time: string;
    Difficulty_Level: string;
    Spice_Level: string;
    Ingredients: IngredientI[]
    class?: string;
    id: number;
}
