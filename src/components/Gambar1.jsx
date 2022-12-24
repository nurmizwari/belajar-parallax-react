import { Parallax } from "react-parallax";
import satu from "../assets/1.jpg";

export const Gambar1 = () => (
  <Parallax
    className="image"
    bgImage={satu}
    bgImageAlt="the cat"
    strength={800}
  >
    <div className="content">
      <span>Laptop Dell</span>
    </div>
  </Parallax>
);
