import { Hono } from "hono";
import { dataRecipes } from "./data/recipes";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Reciplia API",
    recipes: "/recipes",
  });
});

app.get("/recipes", (c) => {
  return c.json(dataRecipes);
});

app.get("/recipes/:id", (c) => {
  const id = Number(c.req.param("id"));
  const recipe = dataRecipes.find((recipe) => recipe.id === id);

  if (!id) {
    return c.json({
      message: "There is no ID provided",
    });
  }

  if (!recipe) {
    return c.json({
      message: "Recipe not found",
    });
  }

  return c.json({
    message: "Recipe found",
    result: recipe,
  });
});

export default app;
