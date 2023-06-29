import * as model from "./model.js";
import { MODAL_CLOSE_SEC } from "./config.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import addRecipeView from "./views/addRecipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // * 0.Update results view..
    resultsView.update(model.getSearchResultsPage());

    // * 1.Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // * 2.Loading recipe
    await model.loadRecipe(id);

    // * 3.Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // * get search query
    const query = searchView.getQuery();
    if (!query) return;

    // * load search results
    await model.loadSearchResults(query);

    // * render results
    resultsView.render(model.getSearchResultsPage());

    // * render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // * render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // * render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = newServings => {
  // * update recipe servings
  model.updateServings(newServings);
  // * update recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // * add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // * update recipe view
  recipeView.update(model.state.recipe);

  // * render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // * loading spinner
    addRecipeView.renderSpinner();

    // * upload new recipe
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // * render recipe
    recipeView.render(model.state.recipe);

    // * success message
    addRecipeView.renderMessage();

    // * close form window
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error("💥💥💥", err);
    addRecipeView.renderError(err.message);
  }
};

const init = () => {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView._addHandlerUpload(controlAddRecipe);
};

init();
