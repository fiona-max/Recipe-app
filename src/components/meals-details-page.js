import Card from "react-bootstrap/Card";
import {Rating} from "primereact/rating";
import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {faCheck, faFire} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faUser} from "@fortawesome/free-regular-svg-icons";

export const MealsDetailsPage = () => {
    const [recipe, setRecipe] = useState({});
    const fetchData = useCallback(() => {
        console.log("Fetching data...");
    }, []);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRecipe(data)
            })
            .catch((err) => console.error('Error fetching recipes',err));
    }, [id,fetchData]);

    return <div className="container m-2 bg-warning">
        <Card className="mb-3 rounded-3 border-0 mt-5 shadow-4 border-4 border-warning border-solid">
            <div className="row">
                <div className="col-md-6">
                    <img src={recipe.image} width="100%" alt="meal image"/>
                </div>
                <div className="col-md-6">
                    <h2 className="mb-3">{recipe.name}</h2>
                    <div className="row p-2">
                        <div className="col-4"><FontAwesomeIcon icon={faUser} className="me-4" style={{color: 'orange'}}  />{recipe?.servings}</div>
                        <div className="col-4"><FontAwesomeIcon icon={faFire} className="me-4" style={{color: 'orange'}}  />{recipe?.difficulty}</div>
                        <div className="col-4">
                            <FontAwesomeIcon
                            icon={faClock}
                            className="me-4"
                            style={{color: 'orange'}}
                            />{recipe?.cookTimeMinutes}</div>
                    </div>
                    <div className="ing">
                        <h3>Ingredients</h3>
                        {recipe.ingredients?.length > 0 ? (
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index} className="list-unstyled">
                                        <FontAwesomeIcon className="me-3" style={{color: 'orange'}} icon={faCheck} />
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        ) : <p>Ingredients loading...</p>
                        }
                    </div>
                    <div className="ins">
                        <h3>Instructions</h3>
                        {recipe.instructions?.length > 0 ? (
                            <ul>
                                {recipe.instructions.map((ingredient, index) => (
                                    <li key={index} className="list-unstyled">
                                        <span className="me-3">{index + 1}. </span>
                                        <span className="text-wrap">{ingredient}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : <p>Instructions loading...</p>
                        }
                    </div>
                </div>
            </div>
        </Card>
    </div>
}