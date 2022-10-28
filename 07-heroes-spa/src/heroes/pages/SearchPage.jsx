import { HeroCard } from '../components';

export const SearchPage = () => {
  return (
    <div className="mt-5">
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
            <button className="btn btn-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Loading...</div>
          <div className="alert alert-danger">
            There are no results with <b>ABC</b>
          </div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </div>
  );
};
