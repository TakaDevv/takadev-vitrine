import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const LegalNoticePage = lazy(() => import("./pages/LegalNoticePage.jsx"));
const MethodPage = lazy(() => import("./pages/MethodPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage.jsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage.jsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="a-propos" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="realisations" element={<ProjectsPage />} />
        <Route path="methode" element={<MethodPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="mentions-legales" element={<LegalNoticePage />} />
        <Route path="politique-de-confidentialite" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
