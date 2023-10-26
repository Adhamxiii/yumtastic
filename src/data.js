import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'

const recipes = [
  {
    id: 1,
    title: "Chicken Alfredo",
    amount: "4 servings",
    ingredients: [
      "8 oz fettuccine pasta",
      "2 boneless, skinless chicken breasts",
      "2 cups heavy cream",
      "1 cup grated Parmesan cheese",
      "2 cloves garlic, minced",
      "2 tablespoons butter",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish",
    ],
    image: img1,
  },
  {
    id: 2,
    title: "Mango Salsa",
    amount: "2 cups",
    ingredients: [
      "2 ripe mangoes, diced",
      "1/2 red onion, finely chopped",
      "1/4 cup fresh cilantro, chopped",
      "1 lime, juiced",
      "Salt and pepper to taste",
    ],
    image: img2,
  },
  {
    id: 3,
    title: "Spaghetti Carbonara",
    amount: "4 servings",
    ingredients: [
      "12 oz spaghetti",
      "4 large eggs",
      "1 cup grated Pecorino Romano cheese",
      "4 oz pancetta or guanciale, diced",
      "2 cloves garlic, minced",
      "Freshly ground black pepper",
      "Salt to taste",
    ],
    image: img3,
  },
  {
    id: 4,
    title: "Vegetable Stir-Fry",
    amount: "4 servings",
    ingredients: [
      "2 cups mixed vegetables (e.g., bell peppers, broccoli, snap peas, carrots)",
      "2 tablespoons vegetable oil",
      "3 cloves garlic, minced",
      "2 tablespoons soy sauce",
      "1 tablespoon oyster sauce",
      "1 teaspoon sugar",
      "Salt and pepper to taste",
      "Cooked rice or noodles for serving",
    ],
    image: img4,
  },
];

export default recipes;
