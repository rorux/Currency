import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { MainPage } from "@pages/main-page";
import { ViewModePage } from "@pages/view-mode";
import { SettingsPage } from "@pages/settings";
import { NotFoundPage } from "@pages/not-found-page";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.VIEW_MODE} element={<ViewModePage />} />
      <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};