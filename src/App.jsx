import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import MainContent from "./pages/MainContent";
import NewsSection from "./pages/NewsSection";

export default function App() {
  return (
    <MainLayout>
      <Home />
      <MainContent />
      <NewsSection />
    </MainLayout>
  );
}
