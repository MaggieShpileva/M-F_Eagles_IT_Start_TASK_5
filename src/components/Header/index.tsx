import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { InfoHeader } from "./InfoHeader";
import { MenuHeader } from "./MenuHeader";

export const Header: FC = () => {
  const [isOpenMobileInfo, setIsOpenMobileInfo] = useState(false);
  return (
    <div className={styles.header}>
      <InfoHeader
        isOpenMobileInfo={isOpenMobileInfo}
        setIsOpenMobileInfo={setIsOpenMobileInfo}
      />
      <MenuHeader
        isOpenMobileInfo={isOpenMobileInfo}
        setIsOpenMobileInfo={setIsOpenMobileInfo}
      />
    </div>
  );
};
