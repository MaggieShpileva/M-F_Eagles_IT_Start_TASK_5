import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { InfoHeader } from "./InfoHeader";
import { MenuHeader } from "./MenuHeader";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <InfoHeader />
      <MenuHeader />
    </div>
  );
};
