import { Parallax } from "react-parallax";
import dua from "../assets/2.jpg";

export const Gambar2 = () => (
  <Parallax className="image" bgImage={dua} bgImageAlt="the cat" strength={800}>
    <div className="content2">
      <p>
        Spesifikasi Dell G15-5515: Layar: 15.6 inci, 1920 x 1080 piksel
        Prosesor: AMD Ryzen 5-5600H Grafis: Nvidia Geforce RTX-305 RAM: 8 GB
        DDR4 Storage: 256GB M.2 PCIe NVMe Sistem Operasi: Windows 10 Home x64
        Kamera: HD (720p) RGB camera with digital-array microphones Baterai: 3
        Cell 56WHr
      </p>
    </div>
  </Parallax>
);
