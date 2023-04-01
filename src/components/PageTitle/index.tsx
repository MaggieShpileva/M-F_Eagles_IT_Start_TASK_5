import { FC } from "react";
import styles from "./index.module.scss";
type Props = {
  title: string;
};
export const PageTitle: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}></div>
      <div className={styles.title_of_page}>
        <div className={styles.title}>
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
};
