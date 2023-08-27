import Router from "./router/router";
import routes_definition from "./router/routes-definition";

export default function App() {
  return (
    <>
      <Router routes={routes_definition} />
    </>
  );
}
