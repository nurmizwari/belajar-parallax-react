import { Parallax } from "react-parallax";
import tiga from "../assets/3.jpg";

export const Gambar3 = () => (
  <Parallax
    className="image"
    bgImage={tiga}
    bgImageAlt="the cat"
    strength={800}
  >
    <div className="content2">
      <p>
        Spesifikasi Dell G5 15 Gaming Laptop: Layar: 15.6 inci, 1920 x 1080
        piksel Prosesor: 10th Generation Intel Core i5-10200H Grafis: NVIDIA
        GeForce RTX 3050 RAM: 8 GB Storage: SSD 512 GB Sistem Operasi: Windows
        10 Home Kamera: HD RGB Baterai: 3-cell, 56 WHr
      </p>
    </div>
  </Parallax>
);
