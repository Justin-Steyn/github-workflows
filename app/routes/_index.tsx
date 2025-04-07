import type { MetaFunction } from "@remix-run/node";
import '../CSS/main.css';
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div className="main-div">
        <h1>Testing Workflows</h1>
        <button className="test-button">Do Action</button>
      </div>
    );
  }
