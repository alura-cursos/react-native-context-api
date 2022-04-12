import Rotas from "./src/rotas";
import { InfoProvider } from "./src/contexts/GlobalContext";

export default function App() {
  return (
    <InfoProvider>
      <Rotas />
    </InfoProvider>
  );
}