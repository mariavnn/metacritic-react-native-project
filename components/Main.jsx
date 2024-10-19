import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { getLatestGames } from "../lib/metacritic";

import { AnimatedGameCard } from "./GameCard";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard index={index} game={item} />
          )}
        />
      )}
    </Screen>
  );
}
