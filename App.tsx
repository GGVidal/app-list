import React from "react";
import { RootStackRoutes } from "./src/navigation";
import { useDB } from "./src/database/database.init";

export default function App() {
  const { initDB } = useDB();
  initDB();
  return <RootStackRoutes />;
}
