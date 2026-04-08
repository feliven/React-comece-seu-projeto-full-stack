import styled from "styled-components";
import { useEffect } from "react";
import { useFavoritosStore, fetchFavoritos, removeFavoritoFromStore } from "./useFavoritosStore";

const FavoritosContainer = styled.div`
  background-image: linear-gradient(45deg, blue, chartreuse);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: white;
    background-color: darkviolet;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }

  p {
    font-size: x-large;
    color: white;
    font-weight: bold;
    padding: 1rem 0;
    transition: all 0.5s ease;

    &:hover {
      background-color: fuchsia;
      font-family: "Courier New", Courier, monospace;
    }
  }
`;

function FavoritosNoUseEffect() {
  const favoritos = useFavoritosStore();

  useEffect(() => {
    void fetchFavoritos();
  }, []);

  return (
    <FavoritosContainer>
      <div>
        <h1>Lista de livros favoritos:</h1>

        {favoritos.map((fav) => (
          <p key={fav.id} onClick={() => removeFavoritoFromStore(String(fav.id))}>
            {fav.title}
            {fav.author ? `, escrito por ${fav.author}` : null}
          </p>
        ))}
      </div>
    </FavoritosContainer>
  );
}

export default FavoritosNoUseEffect;
