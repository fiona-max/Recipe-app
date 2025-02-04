import './App.css';
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroPage from "./components/heroPage";
import Meals from "./components/meals";
import {useCallback, useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {faClock, faUser} from "@fortawesome/free-regular-svg-icons";
import {faArrowRight, faFire} from "@fortawesome/free-solid-svg-icons";


import React from 'react';
import { Rating } from "primereact/rating";
import {Footer} from "./components/footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {MealsDetailsPage} from "./components/meals-details-page";




function App() {
    const [recipes, setRecipes] = useState([]);
    const fetchData = useCallback(() => {
        console.log("Fetching data...");
    }, []);



    useEffect(() => {
         fetch('https://dummyjson.com/recipes')
             .then(res =>
                 res.json())
             .then(data => {
                 console.log(data.recipes);
                 setRecipes(data.recipes)
             })
             .catch((err) => console.error('Error fetching recipes',err));
     }, [fetchData]);

  return (
      <>
          <BrowserRouter>
              <div className="App container" style={{paddingLeft: '5%', paddingRight: '5%'}}>
                  {/* Navigation Bar */}
                  <NavBar />

                  {/* Hero Section */}
                  <HeroPage />

                  {/* Recipe Cards */}
                  <div className="container m-2">
                      <div className="row mt-5">
                          {recipes.length > 0 ? (
                              recipes.slice(0, 6).map((recipe) => (
                                  <div className="col-md-4 mb-4" key={recipe.id}>
                                      <Card className="mb-3 rounded-3 border-0">
                                          <Card.Img
                                              variant="top"
                                              className="rounded-0"
                                              src={recipe.image}
                                              width="100%"
                                          />
                                          <Card.Body>
                                              <Card.Title className="fw-lighter fs-6">
                                                  {recipe.name}
                                              </Card.Title>
                                              <Card.Text>
                                                  <div className="row align-content-between justify-content-between">
                                                      <div className="col-md-6 text-start">
                                                          <div className="mb-1">
                                                              <FontAwesomeIcon
                                                                  icon={faClock}
                                                                  className="me-2"
                                                              />
                                                              {recipe.cookTimeMinutes} minutes
                                                          </div>
                                                          <div>
                                                              <Rating
                                                                  style={{ color: 'orange' }}
                                                                  value={recipe.rating}
                                                                  readOnly
                                                                  cancel={false}
                                                              />
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6 text-end">
                                                          <div>
                                                              <FontAwesomeIcon icon={faFire} /> {recipe.difficulty}
                                                          </div>
                                                          <div>
                                                              <FontAwesomeIcon
                                                                  icon={faUser}
                                                                  className="ms-4"
                                                              />{' '}
                                                              {recipe.servings}
                                                          </div>
                                                      </div>

                                                      {/* Link with dynamic path */}
                                                      <Link
                                                          to={`/recipe/${recipe.id}`}
                                                          className="text-decoration-none"
                                                          style={{ color: 'orange' }}
                                                      >
                                                          <div className="flex mt-4 text-start">
                                                              View Recipe{' '}
                                                              <FontAwesomeIcon
                                                                  icon={faArrowRight}
                                                                  className="ms-2"
                                                              />
                                                          </div>
                                                      </Link>
                                                  </div>
                                              </Card.Text>
                                          </Card.Body>
                                      </Card>
                                  </div>
                              ))
                          ) : (
                              <p className="text-center">Loading recipes...</p>
                          )}
                      </div>
                  </div>

                  {/* Dynamic Routing */}
                  <Routes>
                      <Route path="recipe/:id" element={<MealsDetailsPage />} />
                  </Routes>
                  {/* Footer */}
                  <br />
                  <Footer />
              </div>
          </BrowserRouter>
      </>
  );
}

export default App;
