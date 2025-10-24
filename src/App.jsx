import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Home,
  Eye,
  FileText
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const rooms = [
    {
      id: 'djecija-soba',
      name: 'Dečija Soba',
      nameEn: 'Children\'s Room',
      images: [
        'img-djecija-soba-1.jpg',
        'img-djecija-soba-2.jpg',
        'img-djecija-soba-3.jpg',
        'img-djecija-soba-4.jpg',
        'img-djecija-soba-5.jpg',
        'img-djecija-soba-6.jpg',
        'img-djecija-soba-7.jpg',
        'img-djecija-soba-8.jpg'
      ],
      description: 'Dečija soba sa modernim dizajnom i funkcionalnim prostorom'
    },
    {
      id: 'dnevna',
      name: 'Dnevna Soba',
      nameEn: 'Living Room',
      images: [
        'img-dnevna-1.jpg',
        'img-dnevna-2.jpg',
        'img-dnevna-3.jpg',
        'img-dnevna-4.jpg',
        'img-dnevna-5.jpg',
        'img-dnevna-6.jpg',
        'img-dnevna-7.jpg',
        'img-dnevna-8.jpg',
        'img-dnevna-9.jpg'
      ],
      description: 'Prostrana dnevna soba sa savremenim elementima'
    },
    {
      id: 'kuhinja',
      name: 'Kuhinja',
      nameEn: 'Kitchen',
      images: [
        'img-kuhinja-1.jpg',
        'img-kuhinja-2.jpg'
      ],
      description: 'Moderna kuhinja sa praktičnim rasporedom'
    },
    {
      id: 'sobe',
      name: 'Sobe',
      nameEn: 'Bedrooms',
      images: [
        'img-soba-1.jpg',
        'img-soba-2.jpg',
        'img-soba-3.jpg',
        'img-soba-4.jpg'
      ],
      description: 'Komforne spavaće sobe sa prijatnom atmosferom'
    },
    {
      id: 'hodnik',
      name: 'Hodnik',
      nameEn: 'Hallway',
      images: [
        'img-hodnik-1.jpg',
        'img-hodnik-2.jpg',
        'img-hodnik-3.jpg'
      ],
      description: 'Funkcionalan hodnik sa pametnim skladištenjem'
    },
    {
      id: 'kupatilo',
      name: 'Kupatilo (WC)',
      nameEn: 'Bathroom',
      images: [
        'img-wc-1.jpg',
        'img-wc-2.jpg',
        'img-wc-3.jpg',
        'img-wc-4.jpg',
        'img-wc-5.jpg',
        'img-wc-6.jpg',
        'img-wc-7.jpg',
        'img-wc.jpg'
      ],
      description: 'Moderno kupatilo sa kvalitetnim materijalima'
    }
  ];

  const documents = [
    {
      name: 'Glavna osnova sa nameštajem',
      filename: 'glavna-osnova-sa-namjestajem.pdf',
      description: 'Glavni plan stana sa rasporedom nameštaja'
    },
    {
      name: 'Električne instalacije 1',
      filename: 'struja-1.pdf',
      description: 'Plan električnih instalacija - deo 1'
    },
    {
      name: 'Električne instalacije 2',
      filename: 'struja-2.pdf',
      description: 'Plan električnih instalacija - deo 2'
    },
    {
      name: 'Podne obloge (parket)',
      filename: 'parket.pdf',
      description: 'Specifikacija podnih obloga i parketa'
    },
    {
      name: 'Kupatilo - gipsane ploče 1',
      filename: 'kupatilo-rigips.pdf',
      description: 'Plan gipsanih ploča u kupatilu'
    },
    {
      name: 'Kupatilo - gipsane ploče 2',
      filename: 'kupatilo-rigips-2.pdf',
      description: 'Plan gipsanih ploča u kupatilu - deo 2'
    },
    {
      name: 'Spušteni stropovi',
      filename: 'spusteni-strop.pdf',
      description: 'Plan spuštenih stropova i rasvete'
    }
  ];

  const downloadFile = (filename, displayName) => {
    const link = document.createElement('a');
    link.href = `/milan-blaz-stan/documents/${filename}`;
    link.download = displayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadImage = (imageName) => {
    const link = document.createElement('a');
    link.href = `/milan-blaz-stan/images/${imageName}`;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'apple-glass shadow-lg shadow-gray-200/20' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              <Home className="inline-block mr-2" size={28} />
              Stan Dizajn
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Prostorije', href: '#prostorije' },
                { name: 'Dokumentacija', href: '#dokumentacija' },
                { name: 'Kontakt', href: '#kontakt' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-black transition-colors duration-200 font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-black"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden apple-glass border-t border-gray-200/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-4 space-y-4">
                {[
                  { name: 'Prostorije', href: '#prostorije' },
                  { name: 'Dokumentacija', href: '#dokumentacija' },
                  { name: 'Kontakt', href: '#kontakt' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-800 hover:text-black transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/milan-blaz-stan/images/img-dnevna-6.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-gray-200/30 rounded-full opacity-40"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-gray-300/20 rounded-full opacity-30"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 left-20 w-12 h-12 bg-gray-400/20 rounded-full opacity-30"
            animate={{
              y: [0, -15, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center text-gray-700 text-4xl font-bold shadow-lg">
              <Home size={48} />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Dizajn Stana</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kompletna dokumentacija i vizuali dizajna stana za izradu ponuda
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => document.getElementById('prostorije').scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
            >
              <Eye size={20} />
              Pregledaj Prostorije
            </button>
            <button
              onClick={() => document.getElementById('dokumentacija').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-200 font-medium"
            >
              Dokumentacija
            </button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gray-400" size={32} />
        </motion.div>
      </section>

      {/* Room Sections */}
      <section id="prostorije" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Prostorije Stana</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
              Detaljni prikazi svih prostorija sa fotografijama i opisima
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                variants={fadeInUp}
                className="mb-16"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2 text-gray-800">{room.name}</h3>
                  <p className="text-gray-600 font-light">{room.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {room.images.map((imageName, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      className="apple-glass rounded-xl overflow-hidden shadow-lg card-hover"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative group cursor-pointer" onClick={() => setSelectedImage(`/milan-blaz-stan/images/${imageName}`)}>
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src={`/milan-blaz-stan/images/${imageName}`}
                            alt={`${room.name} - slika ${imgIndex + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                              <Eye className="text-gray-800" size={24} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 font-medium">
                            {imageName.replace('img-', '').replace('.jpg', '').replace('-', ' ').toUpperCase()}
                          </span>
                          <div className="flex gap-2">
                            <motion.button
                              onClick={() => downloadImage(imageName)}
                              className="p-2 text-gray-500 hover:text-gray-800 transition-colors duration-200"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              title="Preuzmi sliku"
                            >
                              <Download size={16} />
                            </motion.button>
                            <motion.button
                              onClick={() => setSelectedImage(`/images/${imageName}`)}
                              className="p-2 text-gray-500 hover:text-gray-800 transition-colors duration-200"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              title="Pogledaj u punoj veličini"
                            >
                              <Eye size={16} />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="dokumentacija" className="section-padding bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Tehnička Dokumentacija</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
              Svi potrebni planovi i specifikacije za izradu ponuda
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="apple-glass p-6 rounded-xl shadow-lg card-hover group cursor-pointer"
                onClick={() => setSelectedPdf(doc)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start mb-4">
                  <div className="relative">
                    <FileText className="text-gray-700 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" size={24} />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{doc.name}</h3>
                    <p className="text-gray-600 text-sm font-light mb-4">{doc.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadFile(doc.filename, doc.name + '.pdf');
                    }}
                    className="flex-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={16} />
                    Preuzmi PDF
                  </motion.button>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPdf(doc);
                    }}
                    className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center bg-white/80 group-hover:bg-blue-50 group-hover:border-blue-300 group-hover:text-blue-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Pregledaj PDF"
                  >
                    <Eye size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="apple-glass p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Svi materijali za preuzimanje</h3>
              <p className="text-gray-600 mb-6 font-light">
                Preuzmite kompletan paket sa svim slikama i dokumentima u jednom zip fajlu
              </p>
              <motion.button
                onClick={() => {
                  // For now, show contact information for complete package
                  alert('Kontaktirajte nas za kompletan paket materijala:\nEmail: milanblaz@live.com\nTelefon: 066 612 493');
                }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-full hover:from-gray-900 hover:to-black transition-all duration-200 flex items-center gap-2 mx-auto font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Preuzmi kompletan paket
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Kontakt Informacije</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto font-light">
              Za izradu ponuda i dodatne informacije, kontaktirajte nas
            </p>

            <div className="apple-glass p-8 rounded-2xl mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-700">MB</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Milan Blaz</h3>
                  <p className="text-gray-600 font-light">Vlasnik</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
                    <Phone className="text-gray-700" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Telefon</h3>
                  <a
                    href="tel:+38166612493"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-light"
                  >
                    066 612 493
                  </a>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
                    <Mail className="text-gray-700" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
                  <a
                    href="mailto:milanblaz@live.com"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-light"
                  >
                    milanblaz@live.com
                  </a>
                </motion.div>
              </div>
            </div>

            <motion.button
              onClick={() => {
                const subject = encodeURIComponent('Ponuda za renoviranje stana');
                const body = encodeURIComponent('Poštovani,\n\nZanima me ponuda za renoviranje stana prema priloženoj dokumentaciji.\n\nSrdačan pozdrav');
                window.open(`mailto:milanblaz@live.com?subject=${subject}&body=${body}`);
              }}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 mx-auto font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Pošaljite Ponudu
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-light mb-2">
            © 2025 Milan Blaz - Dizajn Stana
          </p>
          <p className="text-sm font-light text-gray-500">
            Sva prava zadržana. Sadržaj ove stranice je namenjen isključivo za izradu ponuda.
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Puna veličina"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
              >
                <X size={32} />
              </button>
              <motion.button
                onClick={() => {
                  const imageName = selectedImage.split('/').pop();
                  downloadImage(imageName);
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-16 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg hover:bg-opacity-70 transition-all duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Preuzmi
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              className="relative max-w-6xl max-h-full w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{selectedPdf.name}</h3>
                    <p className="text-sm text-gray-600">{selectedPdf.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => {
                        downloadFile(selectedPdf.filename, selectedPdf.name + '.pdf');
                        setSelectedPdf(null);
                      }}
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={16} />
                      Preuzmi
                    </motion.button>
                    <button
                      onClick={() => setSelectedPdf(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <iframe
                    src={`/milan-blaz-stan/documents/${selectedPdf.filename}`}
                    className="w-full h-[70vh] border-0"
                    title={selectedPdf.name}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
