import classNames from "classnames";
import LoginCard from "../../../components/common/auth/login/login-card";
import styles from "./login.page.module.css";

export default function LoginPage() {
  return (
    <div
      className={classNames(
        styles.container,
        "flex",
        "justify-center",
        "items-center"
      )}
    >
      <LoginCard />
    </div>
  );
}
