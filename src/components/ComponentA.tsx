import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ComponentA: FC = () => {
  const { t } = useTranslation()

  return (
      <>
        <h2>{t("ComponentA.title")}</h2>
        <p>{t("ComponentA.description")}</p>
      </>
  )
}
