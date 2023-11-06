import styles from "./route.layout.module.css";

type Props = {
  children: JSX.Element;
};

export default function RouteLayout({ children }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div>{children}</div>
      </div>
    </>
  );
}
