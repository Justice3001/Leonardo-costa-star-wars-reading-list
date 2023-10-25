import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext.js';

const Characters = () => {
  const { store, actions } = useContext(Context);
  const { idCard } = useParams();
  const characterDetails = store.peopleInfo.find(character => character.uid === idCard);

  if (!characterDetails) {
    return <div className="text-center text-light display-1">Feching info...</div>;
  }

  return (
    <>
      <div className="jumbotron container pb-3">
        <div className="lead mt-5 d-flex">
          <img src={characterDetails.image} className="rounded mx-2" style={{ width: "18rem" }} alt="Cool looking character"></img>
          <div className="mx-2 text-center">
            <h1 className="details-text mt-0 display-4">{characterDetails.name}</h1>
            <p className=" character-description">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <hr />
        <div className="lead">
          <table className="table table-borderless table-responsive mt-4">
            <thead>
              <tr>
                <th className="details-text">Name</th>
                <th className="details-text">Birth</th>
                <th className="details-text">Gender</th>
                <th className="details-text">Hair Color</th>
                <th className="details-text">Eye Color</th>
                <th className="details-text">Height</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{characterDetails.name}</td>
                <td>{characterDetails.birth_year}</td>
                <td>{characterDetails.gender}</td>
                <td>{characterDetails.hair_color}</td>
                <td>{characterDetails.eye_color}</td>
                <td>{characterDetails.height}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div >
    </>
  )
}

export default Characters;