import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";

export default function App() {
  return (
    <TemaProvider>
    <Rotas />
    </TemaProvider>
  );
}