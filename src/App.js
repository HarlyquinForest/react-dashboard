import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Navbar,
  Footer,
  Header,
  ThemeSettings,
  Sidebar,
} from "./components/index";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Line,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages/index";
import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

function App() {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
    themeSettings,
    setThemeSettings,
    currentMode,
    setCurrentColor,
    setCurrentMode,
  } = useStateContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <Router basename='/react-dashboard'>
          <div className="flex relative dark:bg-main-bg">
            <div className="fixed left-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  style={{ background: currentColor, borderRadius: "50%" }}
                  onClick={() => setThemeSettings(true)}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 bg-white dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? " md:mr-72" : " flex-2"
              }`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
              <div>
                {themeSettings && (
                  <div>
                    <ThemeSettings />
                  </div>
                )}
                <Routes>
                  <Route path="/" index element={<Navigate to="/ecommerce"/>} />
                  <Route path="/ecommerce" element={<Ecommerce />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/color-picker" element={<ColorPicker />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />{" "}
                  <Route path="/bar" element={<Bar />} />{" "}
                  <Route path="/pie" element={<Pie />} />{" "}
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
