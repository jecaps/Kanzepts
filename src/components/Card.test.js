import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";

const recipe = {
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  lowFodmap: false,
  weightWatcherSmartPoints: 8,
  gaps: "no",
  preparationMinutes: -1,
  cookingMinutes: -1,
  aggregateLikes: 124,
  healthScore: 10,
  pricePerServing: 179.7,
  extendedIngredients: [
    {
      id: 1055062,
      aisle: "Meat",
      image: "chicken-breasts.png",
      consistency: "SOLID",
      name: "skinless boneless chicken breasts",
      nameClean: "boneless skinless chicken breast",
      original:
        "6 boneless skinless chicken breasts (I used 2 very large ones)",
      originalName:
        "boneless skinless chicken breasts (I used 2 very large ones)",
      amount: 6,
      unit: "large",
      meta: ["boneless", "skinless", "(I used 2 very large ones)"],
      measures: {
        us: {
          amount: 6,
          unitShort: "large",
          unitLong: "larges",
        },
        metric: {
          amount: 6,
          unitShort: "large",
          unitLong: "larges",
        },
      },
    },
    {
      id: 1001,
      aisle: "Milk, Eggs, Other Dairy",
      image: "butter-sliced.jpg",
      consistency: "SOLID",
      name: "butter",
      nameClean: "butter",
      original: "2 tablespoons butter",
      originalName: "butter",
      amount: 2,
      unit: "tablespoons",
      meta: [],
      measures: {
        us: {
          amount: 2,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
        metric: {
          amount: 2,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
      },
    },
    {
      id: 6016,
      aisle: "Canned and Jarred",
      image: "cream-of-chicken-soup.jpg",
      consistency: "LIQUID",
      name: "cream of chicken soup",
      nameClean: "condensed cream of chicken soup",
      original: "2 cans cream of chicken soup",
      originalName: "cream of chicken soup",
      amount: 2,
      unit: "cans",
      meta: [],
      measures: {
        us: {
          amount: 2,
          unitShort: "cans",
          unitLong: "cans",
        },
        metric: {
          amount: 2,
          unitShort: "cans",
          unitLong: "cans",
        },
      },
    },
    {
      id: 6194,
      aisle: "Canned and Jarred",
      image: "chicken-broth.png",
      consistency: "LIQUID",
      name: "chicken broth",
      nameClean: "chicken broth",
      original: "1 can chicken broth",
      originalName: "chicken broth",
      amount: 1,
      unit: "can",
      meta: [],
      measures: {
        us: {
          amount: 1,
          unitShort: "can",
          unitLong: "can",
        },
        metric: {
          amount: 1,
          unitShort: "can",
          unitLong: "can",
        },
      },
    },
    {
      id: 11282,
      aisle: "Produce",
      image: "brown-onion.png",
      consistency: "SOLID",
      name: "onion",
      nameClean: "onion",
      original: "1 onion diced",
      originalName: "onion diced",
      amount: 1,
      unit: "",
      meta: ["diced"],
      measures: {
        us: {
          amount: 1,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 1,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 2029,
      aisle: "Spices and Seasonings",
      image: "dried-parsley.png",
      consistency: "SOLID",
      name: "dried parsley",
      nameClean: "dried parsley",
      original: "1 tablespoon dried parsley",
      originalName: "dried parsley",
      amount: 1,
      unit: "tablespoon",
      meta: ["dried"],
      measures: {
        us: {
          amount: 1,
          unitShort: "Tbsp",
          unitLong: "Tbsp",
        },
        metric: {
          amount: 1,
          unitShort: "Tbsp",
          unitLong: "Tbsp",
        },
      },
    },
    {
      id: 18009,
      aisle: "Refrigerated",
      image: "buttermilk-biscuits.jpg",
      consistency: "SOLID",
      name: "biscuits",
      nameClean: "buttermilk biscuits",
      original: "4 grands flaky refrigerator biscuits",
      originalName: "grands flaky refrigerator biscuits",
      amount: 4,
      unit: "",
      meta: [],
      measures: {
        us: {
          amount: 4,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 4,
          unitShort: "",
          unitLong: "",
        },
      },
    },
  ],
  id: 640886,
  title: "Crockpot Chicken and Dumplings",
  readyInMinutes: 45,
  servings: 6,
  sourceUrl:
    "https://www.foodista.com/recipe/DJ5GP3VY/crock-pot-chicken-and-dumplings-recipe",
  openLicense: -1,
  image: "https://spoonacular.com/recipeImages/640886-556x370.jpg",
  imageType: "jpg",
  summary:
    'The recipe Crockpot Chicken and Dumplings can be made <b>in approximately approximately 45 minutes</b>. For <b>$1.8 per serving</b>, you get a main course that serves 6. One serving contains <b>330 calories</b>, <b>28g of protein</b>, and <b>16g of fat</b>. A mixture of parsley, chicken broth, onion, and a handful of other ingredients are all it takes to make this recipe so delicious. 124 people have tried and liked this recipe. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 63%</b>. This score is solid. Similar recipes are <a href="https://spoonacular.com/recipes/crockpot-chicken-and-dumplings-891762">Crockpot chicken and dumplings</a>, <a href="https://spoonacular.com/recipes/crockpot-chicken-and-dumplings-525729">Crockpot Chicken and Dumplings</a>, and <a href="https://spoonacular.com/recipes/crockpot-chicken-dumplings-520773">Crockpot Chicken & Dumplings</a>.',
  cuisines: [],
  dishTypes: ["lunch", "main course", "main dish", "dinner"],
  diets: [],
  occasions: [],
  instructions:
    "Place chicken in the crock pot. Add butter, cream of chicken soup, chicken broth, diced onion, and parsley.\nCook on high for 4-6 hours or low for 8-10.\n30 minutes before chicken is finished cooking, cut biscuits into 9 pieces and add to crock pot. Gently stir to coat biscuits. Continue to cook for 30 minutes, then serve!",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "Place chicken in the crock pot.",
          ingredients: [
            {
              id: 5006,
              name: "whole chicken",
              localizedName: "whole chicken",
              image: "whole-chicken.jpg",
            },
          ],
          equipment: [
            {
              id: 404718,
              name: "slow cooker",
              localizedName: "slow cooker",
              image: "slow-cooker.jpg",
            },
          ],
        },
        {
          number: 2,
          step: "Add butter, cream of chicken soup, chicken broth, diced onion, and parsley.",
          ingredients: [
            {
              id: 6016,
              name: "cream of chicken soup",
              localizedName: "cream of chicken soup",
              image: "cream-of-chicken-soup.jpg",
            },
            {
              id: 6194,
              name: "chicken broth",
              localizedName: "chicken broth",
              image: "chicken-broth.png",
            },
            {
              id: 11297,
              name: "parsley",
              localizedName: "parsley",
              image: "parsley.jpg",
            },
            {
              id: 1001,
              name: "butter",
              localizedName: "butter",
              image: "butter-sliced.jpg",
            },
            {
              id: 11282,
              name: "onion",
              localizedName: "onion",
              image: "brown-onion.png",
            },
          ],
          equipment: [],
        },
        {
          number: 3,
          step: "Cook on high for 4-6 hours or low for 8-1",
          ingredients: [],
          equipment: [],
          length: {
            number: 360,
            unit: "minutes",
          },
        },
        {
          number: 4,
          step: "30 minutes before chicken is finished cooking, cut biscuits into 9 pieces and add to crock pot. Gently stir to coat biscuits. Continue to cook for 30 minutes, then serve!",
          ingredients: [
            {
              id: 18009,
              name: "biscuits",
              localizedName: "biscuits",
              image: "buttermilk-biscuits.jpg",
            },
            {
              id: 5006,
              name: "whole chicken",
              localizedName: "whole chicken",
              image: "whole-chicken.jpg",
            },
          ],
          equipment: [
            {
              id: 404718,
              name: "slow cooker",
              localizedName: "slow cooker",
              image: "slow-cooker.jpg",
            },
          ],
          length: {
            number: 60,
            unit: "minutes",
          },
        },
      ],
    },
  ],
  sourceName: null,
  creditsText: null,
  originalId: null,
  spoonacularSourceUrl:
    "https://spoonacular.com/crockpot-chicken-and-dumplings-640886",
};

it("should render name of the recipe", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Card recipe={recipe} />} />
      </Routes>
    </BrowserRouter>
  );
  const titleElement = screen.getByText(recipe.title);
  expect(titleElement).toBeInTheDocument();
});

it("should render a short summary of the recipe", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Card recipe={recipe} />} />
      </Routes>
    </BrowserRouter>
  );
  const descriptionElement = screen.getByText(
    recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")
  );
  expect(descriptionElement).toBeInTheDocument();
});

it("should render a duration of the recipe", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Card recipe={recipe} />} />
      </Routes>
    </BrowserRouter>
  );
  const durationElement = screen.getByText(recipe.readyInMinutes + "min");
  expect(durationElement).toBeInTheDocument();
});

it("should render the image of the recipe", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Card recipe={recipe} />} />
      </Routes>
    </BrowserRouter>
  );
  const imageElement = screen.getByRole("img", { name: recipe.title });
  expect(imageElement).toBeInTheDocument();
});
