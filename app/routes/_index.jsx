import { useLoaderData } from "@remix-run/react";
import '../CSS/main.css';
import {increment_number} from "../lib/functions";
import { useState } from "react";


export const loader = async () => {
  const number = 0;
  return number;
};



// export const action = async ({ request }: { request: Request }) => {
//   const formData = await request.formData();
//   const action = formData.get('action');
//   const loaderData = useLoaderData<LoaderData>();
//   const { num1, num2 } = loaderData;
// l}

export default function Index() {
  const loaderData = useLoaderData();
  const importedNumber = loaderData;
  const [number, setNumber] = useState<Number>(importedNumber);
  return (
      <div className="main-div">
        <h1>Testing Workflows</h1>
        <p id="number-display">{number.toString()}</p>
        <button className="test-button" type="button" onClick={()=>setNumber(increment_number(number))}>Do Action</button>
      </div>
    );
  }
