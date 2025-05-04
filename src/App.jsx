import { useState } from "react";
import Scene from "./components/CarCustomiser/Scene";
import ColorPicker from "./components/CarCustomiser/ColorPicker";
import GlassColorPicker from "./components/CarCustomiser/GlassColorPicker";
import WheelColorPicker from "./components/CarCustomiser/WheelColorPicker";
import "./App.css";
import RadialButton from "./components/button/RadialButton";
import RadialButton1 from "./components/button/RadialButton1";
import RadialButton2 from "./components/button/RadialButton2";
import AppRoutes from "./routes/AppRoute";
import OptimizedVideo from "./pages/OptimizedVideo";
import PictureGallery from "./pages/PictureGallery";
import Footer from "./pages/Footer";
import Navbar from "./components/NavBar";

export default function App() {
  const [color, setColor] = useState("#ff0000");
  const [glassColor, setGlassColor] = useState("#000");
  const [wheelColor, setWheelColor] = useState("#000");

  return (
    <>
      <Navbar />
      <div className="app-container" id="home">
        <div className="scene-container">
          <Scene
            color={color}
            glassColor={glassColor}
            wheelColor={wheelColor}
          />
        </div>

        <div className="sidebar">
          <h2>Customize Your Car</h2>
          <ColorPicker color={color} setColor={setColor} />
          <GlassColorPicker
            selectedColor={glassColor}
            setColor={setGlassColor}
          />
          <WheelColorPicker
            selectedColor={wheelColor}
            setColor={setWheelColor}
          />
        </div>
      </div>

      <div>
      <h2 style={{color:"white", borderBottom:"2px solid #986deb", width:"fit-content", margin:"10px auto"}}>Customizable Buttons</h2>
      <div id="buttons">
        <RadialButton2 />
        <RadialButton1 />
        <RadialButton />
      </div>
      </div>

      <div>
      <AppRoutes />
      </div>
      
      <OptimizedVideo />
      <PictureGallery />
      <Footer />
    </>
  );
}
