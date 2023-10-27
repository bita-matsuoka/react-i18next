import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ComponentA: FC = () => {
  const { t } = useTranslation()

  return (
      <>
        <h2>{t("componentA.title")}</h2>
        <p>{t("componentA.description")}</p>
      </>
  )
}
