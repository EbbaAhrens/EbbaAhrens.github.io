import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import styles from "./Utils.module.scss";

export const NavButton = ({ route, text }) => {
  const navigate = useNavigate();
  return <Button className={styles.button} onClick={() => navigate(route)}>{text}</Button>;
};
