import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import DarkModeToggle from "../Toogle/DarkModeToggle";
import styles from "./styles.module.scss";
import DarkModeStatus from "../Toogle/DarkModeStatus";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Logo podcast" />
      <p>O Melhor para você ouvir, sempre</p>
      <div>
        <DarkModeToggle />
        <span>{currentDate}</span>
      </div>
    </header>
  );
}
