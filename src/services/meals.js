import axios from "axios"

const mealsAPI = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1"
})

const searchMeal = async (query) => {
  mealsAPI.get(`/search.php`, {
    params: {
      s: query,
    }
  })
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw error
    })
}

const getCategories = () => {
 return mealsAPI.get(`/categories.php`)
    .then(response => {
      let categories = response.data.categories.map(category => {
        return {
          id: category.idCategory,
          name: category.strCategory,
          img: category.strCategoryThumb
        }
      })
      return categories
    })
    .catch(error => {
      throw error
    })
}

const getMeal = async (mealID) => {
  return mealsAPI.get(`/lookup.php`, {
    params: {
      i: mealID,
    }
  })
    .then(response => {
      let meal

      if (response.data.meals[0]) {
        meal = response.data.meals[0]
      }
      return meal
    })
    .catch(error => {
      throw error
    })
}

export {
  searchMeal,
  getCategories,
  getMeal
}