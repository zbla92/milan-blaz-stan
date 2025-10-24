# Dizajn Stana - Milan Blaz

Moderni, profesionalni veb-sajt za prikaz dizajna stana namenjen kompanijama za izradu ponuda.
**Live Demo**: [https://zbla92.github.io/milan-blaz-stan](https://zbla92.github.io/milan-blaz-stan)

## ✨ Funkcionalnosti

- **Prostrane Galerije**: Detaljni prikazi svih prostorija sa fotografijama
- **Tehnička Dokumentacija**: Svi potrebni PDF dokumenti za izradu ponuda
- **Preuzimanje Materijala**: Mogućnost preuzimanja slika i dokumenata
- **Responsive Dizajn**: Potpuno prilagođen za sve uređaje
- **Smooth Animations**: Prelepe animacije korišćenjem Framer Motion
- **Brze Performanse**: Izgrađeno sa Vite za optimalne performanse
- **SEO Optimizacija**: Optimizovano za pretraživače
- **GitHub Pages**: Automatsko deploy-ovanje na GitHub Pages

## 🏠 Prostorije

- **Dečija Soba** (8 fotografija)
- **Dnevna Soba** (9 fotografija)
- **Kuhinja** (2 fotografije)
- **Sobe** (4 fotografije)
- **Hodnik** (3 fotografije)
- **Kupatilo (WC)** (8 fotografija)

## 📋 Tehnička Dokumentacija

- Glavna osnova sa nameštajem
- Električne instalacije (2 dela)
- Podne obloge (parket)
- Kupatilo - gipsane ploče (2 dela)
- Spušteni stropovi

## 🛠️ Tehnologije

- **React 19** - Moderni React sa hooks
- **Vite** - Brzi build tool i dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Prelepe ikone
- **GitHub Pages** - Besplatan hosting

## 🚀 Brzi Start

### Preduslovi
- Node.js 18+
- npm ili yarn

### Instalacija

1. Kloniraj repozitorijum:
```bash
git clone git@github.com:zbla92/milan-blaz-stan.git
cd milan-blaz-stan
```

2. Instaliraj dependencies:
```bash
npm install
```

3. Pokreni development server:
```bash
npm run dev
```

4. Otvori browser i poseti `http://localhost:5173/`

## 📁 Struktura Projekta

```
stan-showcase/
├── public/
│   ├── images/                # Galerije slika prostorija
│   │   ├── img-djecija-soba-*.jpg
│   │   ├── img-dnevna-*.jpg
│   │   ├── img-kuhinja-*.jpg
│   │   ├── img-soba-*.jpg
│   │   ├── img-hodnik-*.jpg
│   │   └── img-wc-*.jpg
│   ├── documents/             # PDF dokumentacija
│   │   ├── glavna-osnova-sa-namjestajem.pdf
│   │   ├── struja-*.pdf
│   │   ├── parket.pdf
│   │   ├── kupatilo-rigips*.pdf
│   │   └── spusteni-strop.pdf
│   └── vite.svg
├── src/
│   ├── App.jsx                # Glavna komponenta
│   ├── App.css                # Dodatne stilove
│   ├── index.css             # Tailwind CSS + custom styles
│   └── main.jsx              # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
└── package.json
```

## 🎨 Funkcionalnosti

### Hero Sekcija
- Animirani ulaz sa Framer Motion
- Gradient tekst efekti
- Profesionalni avatar
- Call-to-action dugmad

### Sekcija Prostorija
- Galerije slika za svaku prostoriju
- Modal za pregled punih slika
- Mogućnost preuzimanja slika
- Hover efekti i animacije

### Sekcija Dokumentacije
- Pregled PDF dokumenata
- Mogućnost preuzimanja
- Otvaranje u novom tabu
- Opis svakog dokumenta

### Kontakt Sekcija
- Kontakt informacije
- Linkovi za poziv i email
- Profesionalni dizajn

## 🚀 Deployment

Website se automatski deploy-uje na GitHub Pages kada se push-uje na main branch.

### Manual Deployment

Ako preferirate manuelni deployment:

```bash
npm run build
npm run deploy
```

## 🎯 Kontakt Informacije

**Milan Blaz** - Vlasnik stana

- **Telefon**: [+381 66 612 493](tel:+38166612493)
- **Email**: [milanblaz@live.com](mailto:milanblaz@live.com)

## 📱 Responsive Dizajn

Website je potpuno responsive i optimizovan za:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚡ Performanse

- Optimizovana veličina bundle-a sa Vite
- Lazy-loaded animacije
- Optimizovane slike
- Brzo učitavanje

## 📋 Korišćenje

1. **Pregled Prostorija**: Kliknite na "Pregledaj Prostorije" da vidite sve sobe
2. **Preuzimanje Slika**: Kliknite na download ikonu pored svake slike
3. **Pregled Dokumenata**: Idite na "Dokumentacija" sekciju
4. **Kontakt**: Koristite "Pošaljite Ponudu" dugme za direktan kontakt

## 📄 Licenca

Ovaj projekat je namenjen isključivo za izradu ponuda za renoviranje stana.

---

Izgrađeno sa ❤️ od Milan Blaz
