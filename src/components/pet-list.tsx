// create a function component to show a list of cats, use useEffect hook
// by calling the API endpoint https://api.thecatapi.com/v1/images/search?limit=10

import { FunctionComponent, useState, useEffect } from "react";

const PetList: FunctionComponent = () => {
 const [pets, setState] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  return (
    <div>
      <h1>Cat List</h1>
      <ul>
        {pets?.map((pet: { id: string; url: string }) => (
          <li key={pet.id}>
            <img src={pet.url} style={{ width: "200px", height: "auto" }} />
          </li>
        ))}
      </ul>
      <div>Total: {pets?.length}</div>
    </div>
  );
};

export { PetList };
