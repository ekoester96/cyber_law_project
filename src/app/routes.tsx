import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { DataExploitation } from "./pages/DataExploitation";
import { LegalCases } from "./pages/LegalCases";
import { HealthDataLaws } from "./pages/HealthDataLaws";
import { FTCActions } from "./pages/FTCActions";
import { NationalSecurity } from "./pages/NationalSecurity";
import { GovSurveillance } from "./pages/GovSurveillance";
import { References } from "./pages/References";
import { AdditionalResources } from "./pages/AdditionalResources";
import { FullReport } from "./pages/FullReport";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "how-it-works", Component: HowItWorks },
      { path: "data-exploitation", Component: DataExploitation },
      { path: "legal-cases", Component: LegalCases },
      { path: "health-data-laws", Component: HealthDataLaws },
      { path: "ftc-actions", Component: FTCActions },
      { path: "national-security", Component: NationalSecurity },
      { path: "gov-surveillance", Component: GovSurveillance },
      { path: "references", Component: References },
      { path: "additional-resources", Component: AdditionalResources },
      { path: "full-report", Component: FullReport },
    ],
  },
]);
