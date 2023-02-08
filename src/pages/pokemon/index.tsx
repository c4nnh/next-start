import { useSession } from "next-auth/react";
import { Role } from "../../types";

function Pokemons() {
  const { data: session } = useSession();

  return <div>pokemons{session?.user?.id}</div>;
}

Pokemons.roles = [Role.USER];

export default Pokemons;
