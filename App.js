import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <Rotas />
      </AutenticacaoProvider>
    </TemaProvider>
  );
}