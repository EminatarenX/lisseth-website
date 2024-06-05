import { IRegalo } from "./types";
export const Regalo = ({regalo}: IRegalo) => {
  
  return (
    <div>
      <div>
        <span className="bg-orange-200 text-black p-2 rounded-full text-sm tracking-wider">YO TE LO REGALO</span>
      </div>
      <img src="./regalo" alt="regalo.png" />
      <h1>{regalo.name}</h1>
      
    </div>
  );
};
