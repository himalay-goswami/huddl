import { useState } from "react";

export function useCliToggle() {
  const [cliOpen, setCliOpen] = useState(false);
  const openCli = () => setCliOpen(true);
  const closeCli = () => setCliOpen(false);
  const toggleCli = () => setCliOpen((v) => !v);
  return { cliOpen, openCli, closeCli, toggleCli };
}
