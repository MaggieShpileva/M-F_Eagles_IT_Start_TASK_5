import React, { FC, useEffect } from "react";
import styles from "./index.module.scss";
import phoneIcon from "../../../images/icons/cil_phone.png";
import { AddressCompany } from "../AddressCompany";
import { MailCompany } from "../MailCompany";
import { SalesDepartment } from "../SalesDepartment";
import { RequestCall } from "../RequestCall";
import { SiteMenu } from "../SiteMenu";

type Props = {
  isOpenMobileInfo: boolean;
  setIsOpenMobileInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InfoHeader: FC<Props> = (props) => {
  return (
    <div className={props.isOpenMobileInfo ? styles.mobile_modal : ""}>
      <div
        className={
          props.isOpenMobileInfo
            ? styles.mobile_modal_window
            : styles.top_row_menu
        }
      >
        <AddressCompany />
        <MailCompany />
        <SalesDepartment />
        <RequestCall />
        <SiteMenu />
      </div>
    </div>
  );
};
