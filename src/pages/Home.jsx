import {
  FaRegCalendarAlt, FaRegEdit, FaQrcode, FaRegCheckCircle, FaMusic,
  FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaTiktok, FaAngleRight,
} from "react-icons/fa";
import "./Home.css";

// ====== GANTI PATH GAMBAR SESUAI FILE KAMU (taruh di src/assets) ======
import studioImg from "../assets/studio.jpg";
import riffAi from "../assets/riff-ai.png";

const WA_LINK = "https://wa.me/6281234567890"; // TODO: ganti nomor WhatsApp

const steps = [
  { icon: <FaRegCalendarAlt />, title: "Pengecekan Jadwal", desc: "Untuk ketersediaan cek ikutur / real-time." },
  { icon: <FaRegEdit />, title: "Pengisian Form Booking", desc: "Pilih jam, durasi, dan isi data diri form." },
  { icon: <FaQrcode />, title: "Pembayaran / DP", desc: "Transfer/GoPo / QRIS." },
  { icon: <FaRegCheckCircle />, title: "Konfirmasi Booking", desc: "Linker/info buku konfirmasi via WhatsApp." },
  { icon: <FaMusic />, title: "Pelaksanaan Latihan", desc: "Datang tepat jadwal." },
];

export function Navbar() {
  return (
    <header className="gf-nav">
      <div className="gf-logo gf-nav__logo">Good Fight<span>Studio</span></div>
      <nav className="gf-nav__links">
        <a href="/" className="active">Home</a>
        <a href="/fasilitas">Fasilitas</a>
        <a href="/booking">Booking</a>
      </nav>
      <span className="gf-nav__accent" />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="gf-footer">
      <div className="gf-footer__brand">
        <div className="gf-logo">Good Fight<span>Studio</span></div>
        <span className="gf-footer__divider" />
        <p>Play · Practice · Create</p>
      </div>
      <a href={WA_LINK} className="gf-btn gf-btn--wa" target="_blank" rel="noreferrer">
        <FaWhatsapp /> Chat via WhatsApp
      </a>
      <div className="gf-footer__right">
        <div className="gf-footer__social">
          <FaInstagram /><FaTiktok /><FaMapMarkerAlt />
        </div>
        <small>© 2026. Good Fight Studio Medan.</small>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="gf-home">
      <Navbar />

      {/* HERO */}
      <section className="gf-hero">
        <div className="gf-hero__text">
          <p className="gf-eyebrow">Rehearsal Studio · Medan</p>
          <h1>
            GOOD FIGHT
            <br />
            STUDIO<span className="gf-script">Medan</span>
          </h1>
          <a href="/booking" className="gf-btn gf-btn--gold">
            Book Studio <FaAngleRight />
          </a>
          <p className="gf-address">
            <FaMapMarkerAlt />
            <span>Jl. Sekipong, Titi Sbombong & K Ic, Medan Sengpal,<br />Baok Militan, Sumatera Utara</span>
          </p>
        </div>
        <div className="gf-hero__img">
          <img src={studioImg} alt="Ruang latihan Good Fight Studio" />
        </div>
      </section>

      {/* LAYANAN + ALUR */}
      <section className="gf-service">
        <div className="gf-service__left">
          <p className="gf-eyebrow">Layanan Utama</p>
          <h2>Sewa Studio<br />Latihan Musik</h2>
          <p className="gf-service__desc">
            Tempat latihan terbaik untuk kamu beratihan, berkarya, dan tampil lebih percaya diri.
          </p>
          <div className="gf-price">Rp 90.000 <small>/jam</small></div>
        </div>

        <div className="gf-service__right">
          <p className="gf-eyebrow">Alur Pemesanan</p>
          <h3>Mudah, Cepat, dan Praktis!</h3>
          <ol className="gf-steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <div className="gf-step__top">
                  <span className="gf-step__num">{i + 1}</span>
                  <span className="gf-step__icon">{s.icon}</span>
                  {i < steps.length - 1 && <span className="gf-step__arrow">→</span>}
                </div>
                <strong>{s.title}</strong>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Chatbot RIFF-AI */}
      <div className="gf-ai">
        <div className="gf-ai__bubble">Ada yang bisa dibantu?</div>
        <button className="gf-ai__btn" aria-label="Buka RIFF-AI">
          <img src={riffAi} alt="RIFF-AI" />
        </button>
      </div>

      <Footer />
    </div>
  );
}
