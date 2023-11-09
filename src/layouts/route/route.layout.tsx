import GlobalNavigationLayout from "../../components/common/layout/global/global-navigation-layout";
import styles from "./route.layout.module.css";

type Props = {
  children: JSX.Element;
};

export default function RouteLayout({ children }: Props) {
  return (
    <GlobalNavigationLayout>
      <div className={styles.container}>
        <div>{children}</div>
      </div>
    </GlobalNavigationLayout>
  );
}
