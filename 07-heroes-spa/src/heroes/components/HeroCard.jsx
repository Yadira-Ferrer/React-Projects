import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
  /* if (alter_ego === characters) return <></>;
  return <p className="">{characters}</p>; */
  return alter_ego === characters ? <></> : <p className="">{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/heroes/${id}.jpg`;
  //const charactersByHero = <p className="">{characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={heroImageUrl}
              className="img-fluid rounded-start"
              alt={superhero}
              style={{ height: '100%' }}
            />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {/* {alter_ego !== characters && charactersByHero} */}
              <CharactersByHero characters={characters} alter_ego={alter_ego} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link className="text-decoration-none" to={`/hero/${id}`}>
                Más ...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
