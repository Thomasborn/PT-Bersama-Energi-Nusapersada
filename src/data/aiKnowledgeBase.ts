// Local AI Chat Knowledge Base
// All website content consolidated for offline AI responses

export interface KnowledgeEntry {
  id: string;
  category: string;
  title: string;
  content: string;
  keywords: string[];
  relatedPage?: string;
  language: 'id' | 'en';
}

export const benKnowledgeBase: KnowledgeEntry[] = [
  // COMPANY INFORMATION
  {
    id: 'company-overview-id',
    category: 'Company',
    title: 'Tentang PT Bersama Energi Nusapersada',
    content: 'PT Bersama Energi Nusapersada (BEN) adalah perusahaan yang bergerak di bidang perdagangan dan distribusi, dengan kantor pusat di Kota Tangerang, Banten. Kami adalah distributor terpercaya untuk Gulf Oil dan Shantui di Indonesia.',
    keywords: ['tentang', 'perusahaan', 'ben', 'bersama energi', 'nusapersada', 'distribusi'],
    relatedPage: '/about',
    language: 'id'
  },
  {
    id: 'company-overview-en',
    category: 'Company',
    title: 'About PT Bersama Energi Nusapersada',
    content: 'PT Bersama Energi Nusapersada (BEN) is a distribution company headquartered in Tangerang, Banten, Indonesia. We are the trusted distributor for Gulf Oil lubricants and Shantui heavy equipment across Indonesia.',
    keywords: ['about', 'company', 'ben', 'energy', 'distributor'],
    relatedPage: '/about',
    language: 'en'
  },
  {
    id: 'vision-id',
    category: 'Company',
    title: 'Visi Kami',
    content: 'Menjadi mitra distribusi energi, sparepart, dan solusi industri yang terpercaya di Indonesia dengan mengedepankan kualitas, keselamatan, dan keberlanjutan.',
    keywords: ['visi', 'misi', 'tujuan'],
    relatedPage: '/about',
    language: 'id'
  },
  {
    id: 'vision-en',
    category: 'Company',
    title: 'Our Vision',
    content: 'To be the most trusted and preferred distribution partner for energy and heavy equipment solutions across Indonesia, recognized for our reliability, quality, and commitment to customer success.',
    keywords: ['vision', 'mission', 'goal'],
    relatedPage: '/about',
    language: 'en'
  },
  {
    id: 'mission-id',
    category: 'Company',
    title: 'Misi Kami',
    content: 'Menyediakan produk energi, sparepart, dan ban yang berkualitas dan sesuai standar industri. Mengembangkan jaringan distribusi yang efektif untuk menjangkau berbagai wilayah strategis di Indonesia. Membangun hubungan jangka panjang dengan pelanggan melalui layanan yang responsif dan profesional. Mendukung pertumbuhan sektor energi dan industri nasional dengan solusi yang efisien dan berkelanjutan.',
    keywords: ['misi', 'tujuan', 'layanan'],
    relatedPage: '/about',
    language: 'id'
  },
  {
    id: 'mission-en',
    category: 'Company',
    title: 'Our Mission',
    content: 'To support Indonesia\'s industrial growth by delivering world-class products, maintaining strong and efficient supply chains, and providing unparalleled technical expertise to our partners and clients.',
    keywords: ['mission', 'purpose', 'service'],
    relatedPage: '/about',
    language: 'en'
  },
  {
    id: 'values-id',
    category: 'Company',
    title: 'Nilai & Budaya Perusahaan',
    content: 'Integritas: Menjunjung tinggi kejujuran dan kepatuhan terhadap regulasi. Keamanan & Keselamatan: Mengutamakan keselamatan kerja dan standar keamanan produk. Kolaborasi: Membangun hubungan yang kuat dengan pelanggan, pemasok, dan mitra usaha. Keberlanjutan: Berkomitmen mendukung solusi yang ramah lingkungan. Keandalan: Menepati janji dan memastikan pasokan yang konsisten. Inovasi: Merangkul teknologi dan metode baru untuk memberikan solusi yang lebih baik.',
    keywords: ['nilai', 'budaya', 'integritas', 'keselamatan'],
    relatedPage: '/about',
    language: 'id'
  },
  {
    id: 'values-en',
    category: 'Company',
    title: 'Core Values',
    content: 'Integrity: Highest standards of professional behavior and ethics. Excellence: Continuous improvement and exceptional quality. Partnership: Long-term, mutually beneficial relationships. Reliability: Deliver on promises, ensuring consistent supply and service. Safety: Health and safety of employees, partners, and environment. Innovation: New technologies and methods for better solutions.',
    keywords: ['values', 'culture', 'integrity', 'safety'],
    relatedPage: '/about',
    language: 'en'
  },

  // CONTACT INFORMATION
  {
    id: 'contact-id',
    category: 'Contact',
    title: 'Informasi Kontak BEN',
    content: 'Kantor Pusat: Epica Great Western, Blok AA-2 No. 28-29, Jl MH Thamrin KM 2.7, Kota Tangerang, Banten 15134. Telepon: Penjualan +62 21 1234 5679, Dukungan +62 21 1234 5680. Email: info@bersamaenergi.co.id. Jam Kerja: Senin - Jumat 09:00 - 17:00 WIB.',
    keywords: ['kontak', 'hubungi', 'telepon', 'alamat', 'email', 'jam kerja'],
    relatedPage: '/contact',
    language: 'id'
  },
  {
    id: 'contact-en',
    category: 'Contact',
    title: 'Contact Information',
    content: 'Headquarters: Epica Tangerang Great Western, Blok AA-2 No. 28-29, Jl MH Thamrin KM 2.7, Kota Tangerang, Banten 15134, Indonesia. Phone: Sales +62 21 1234 5679, Support +62 21 1234 5680. Email: info@bersamaenergi.co.id. Hours: Monday-Friday 08:00-17:00 WIB.',
    keywords: ['contact', 'call', 'phone', 'address', 'email', 'hours'],
    relatedPage: '/contact',
    language: 'en'
  },

  // PRODUCTS - AUTOMOTIVE
  {
    id: 'gulf-formula-id',
    category: 'Products',
    title: 'Gulf Formula - Oli Mesin Sintetis Penuh',
    content: 'Gulf Formula adalah Advanced Full Synthetic Engine Oil yang dirancang untuk memberikan performa maksimal pada mesin mobil bensin dan diesel berkinerja tinggi. Specs: API SP, ACEA A3/B4. Viscosity Grades: 5W-30, 5W-40. Available Packs: 1L, 4L, 200L',
    keywords: ['gulf formula', 'oli mesin', 'mobil', 'sintetis'],
    relatedPage: '/products',
    language: 'id'
  },
  {
    id: 'gulf-formula-en',
    category: 'Products',
    title: 'Gulf Formula - Advanced Full Synthetic Engine Oil',
    content: 'Gulf Formula is an Advanced Full Synthetic Engine Oil designed for maximum performance on high-performance gasoline and diesel car engines. Specs: API SP, ACEA A3/B4. Viscosity Grades: 5W-30, 5W-40. Available in 1L, 4L, 200L packs.',
    keywords: ['gulf formula', 'engine oil', 'car', 'synthetic'],
    relatedPage: '/products',
    language: 'en'
  },
  {
    id: 'gulf-ultrasynth-id',
    category: 'Products',
    title: 'Gulf Ultrasynth - Oli Mesin Sintetis Penuh',
    content: 'Gulf Ultrasynth adalah Full Synthetic Engine Oil pilihan utama untuk kendaraan penumpang masa kini dengan perlindungan keausan ekstra dan efisiensi bahan bakar. Specs: API SN PLUS/SP, ILSAC GF-6. Viscosity: 0W-20, 5W-30. Mencegah Low Speed Pre-Ignition (LSPI) dan menjaga viskositas dalam durasi panjang.',
    keywords: ['gulf ultrasynth', 'oli', 'efisiensi bahan bakar', 'sintetis'],
    relatedPage: '/products',
    language: 'id'
  },
  {
    id: 'gulf-ultrasynth-en',
    category: 'Products',
    title: 'Gulf Ultrasynth - Full Synthetic Engine Oil',
    content: 'Gulf Ultrasynth is a Full Synthetic Engine Oil for modern vehicles with superior fuel efficiency and wear protection. Specs: API SN PLUS/SP, ILSAC GF-6. Viscosity: 0W-20, 5W-30. Prevents LSPI and maintains viscosity over extended periods.',
    keywords: ['gulf ultrasynth', 'oil', 'fuel efficiency', 'synthetic'],
    relatedPage: '/products',
    language: 'en'
  },
  {
    id: 'gulf-pride-id',
    category: 'Products',
    title: 'Gulf Pride - Oli Motor Tangguh',
    content: 'Gulf Pride adalah oli pelumas tangguh untuk skuter matik dan motor bebek konvensional yang diformulasi khusus untuk kondisi stop & go. Viscosity: 10W-30, 10W-40, 20W-40. Mengurangi panas mesin, efisiensi bakar di kemacetan, dan mengurangi deposit karbon.',
    keywords: ['gulf pride', 'motor', 'skuter', 'oli'],
    relatedPage: '/products',
    language: 'id'
  },
  {
    id: 'gulf-pride-en',
    category: 'Products',
    title: 'Gulf Pride - Tough Motorcycle Oil',
    content: 'Gulf Pride is a tough lubricant for automatic scooters and conventional motorcycles, specially formulated for stop-and-go conditions. Viscosity: 10W-30, 10W-40, 20W-40. Reduces engine heat, improves fuel efficiency in traffic, and reduces carbon deposits.',
    keywords: ['gulf pride', 'motorcycle', 'scooter', 'oil'],
    relatedPage: '/products',
    language: 'en'
  },

  // PRODUCTS - COMMERCIAL VEHICLES
  {
    id: 'gulf-superfleet-id',
    category: 'Products',
    title: 'Gulf Superfleet Supreme - Oli Diesel Performa Tertinggi',
    content: 'Oli mesin diesel kinerja tertinggi untuk armada berat modern dengan perlindungan superior dan interval pergantian yang diperpanjang. Specs: API CK-4, ACEA E9/E7/E6. Extended drain intervals. Melindungi sistem DPF/SCR dan memberikan stabilitas oksidasi kelas wahid.',
    keywords: ['gulf superfleet', 'diesel', 'armada', 'truk', 'heavy duty'],
    relatedPage: '/products',
    language: 'id'
  },
  {
    id: 'gulf-superfleet-en',
    category: 'Products',
    title: 'Gulf Superfleet Supreme - Highest Performance Diesel Oil',
    content: 'The highest performance diesel engine oil for modern heavy-duty fleets with superior protection and extended drain intervals. Specs: API CK-4, ACEA E9/E7/E6. Protects DPF/SCR systems with superior oxidation stability.',
    keywords: ['gulf superfleet', 'diesel', 'fleet', 'truck', 'heavy duty'],
    relatedPage: '/products',
    language: 'en'
  },

  // PRODUCTS - INDUSTRIAL
  {
    id: 'gulf-harmony-id',
    category: 'Products',
    title: 'Gulf Harmony AW - Oli Hidrolik Anti-Wear',
    content: 'Pelumas anti-wear hidrolik untuk aplikasi manufaktur dan mobilitas industri. Specs: DIN 51524 Part 2 HLP, ISO 11158 HM. Viscosity: ISO VG 32, 46, 68, 100. Perlindungan ekstra anti-keausan pompa, pemisahan air terbaik, ketahanan oksidasi andal',
    keywords: ['gulf harmony', 'hidrolik', 'anti-wear', 'industri'],
    relatedPage: '/products',
    language: 'id'
  },
  {
    id: 'gulf-harmony-en',
    category: 'Products',
    title: 'Gulf Harmony AW - Anti-Wear Hydraulic Oil',
    content: 'Anti-wear hydraulic lubricant for manufacturing and industrial mobility applications. Specs: DIN 51524 Part 2 HLP, ISO 11158 HM. Viscosity: ISO VG 32, 46, 68, 100. Extra pump anti-wear protection with superior demulsibility',
    keywords: ['gulf harmony', 'hydraulic', 'anti-wear', 'industrial'],
    relatedPage: '/products',
    language: 'en'
  },
  {
    id: 'gulf-geartek-id',
    category: 'Products',
    title: 'Gulf Geartek HD - Oli Roda Gigi Industri',
    content: 'Oli roda gigi industri kinerja tinggi dengan aditif EP yang dikembangkan untuk melumasi roda gigi baja tugas berat. Specs: DIN 51517 Part 3 CLP, ISO 12925-1 Type CKC. Perlindungan ekstrim terhadap tekanan (EP), ketahanan prima pada keausan dan micro-pitting.',
    keywords: ['gulf geartek', 'roda gigi', 'gear oil', 'industri'],
    relatedPage: '/products',
    language: 'id'
  },
  {
    id: 'gulf-geartek-en',
    category: 'Products',
    title: 'Gulf Geartek HD - Industrial Gear Oil',
    content: 'High-performance industrial gear oil with EP additives for heavy-duty steel gears. Specs: DIN 51517 Part 3 CLP, ISO 12925-1 Type CKC. Extreme pressure protection, superior wear resistance, and micro-pitting prevention.',
    keywords: ['gulf geartek', 'gear', 'gear oil', 'industrial'],
    relatedPage: '/products',
    language: 'en'
  },

  // PARTNERSHIP
  {
    id: 'partnership-id',
    category: 'Partnership',
    title: 'Program Kemitraan BEN',
    content: 'BEN menawarkan model kemitraan yang fleksibel: Dealer - Pengecer resmi dengan dukungan wilayah khusus. Pengecer - Toko otomotif dan suku cadang untuk pelanggan ritel. Pelanggan Industri - Pabrik manufaktur yang membutuhkan pasokan besar. Perusahaan Armada - Logistik dan transportasi. Kontraktor - Konstruksi dan pertambangan.',
    keywords: ['kemitraan', 'partner', 'dealer', 'distributor', 'mitra bisnis'],
    relatedPage: '/partnership',
    language: 'id'
  },
  {
    id: 'partnership-en',
    category: 'Partnership',
    title: 'BEN Partnership Programs',
    content: 'BEN offers flexible partnership models: Dealers - Official retailers with exclusive territories. Retailers - Auto shops and parts stores for retail customers. Industrial Customers - Manufacturers needing bulk supply. Fleet Companies - Logistics and transportation businesses. Contractors - Construction and mining companies.',
    keywords: ['partnership', 'partner', 'dealer', 'distributor', 'business partner'],
    relatedPage: '/partnership',
    language: 'en'
  },
  {
    id: 'partnership-benefits-id',
    category: 'Partnership',
    title: 'Keuntungan Bermitra dengan BEN',
    content: 'Akses ke merek-merek global terkemuka. Harga kompetitif dengan struktur margin menarik. Dukungan pemasaran melalui materi dan kampanye promosi. Pelatihan teknis yang komprehensif. Rantai pasokan yang andal dengan ketersediaan produk konsisten melalui jaringan distribusi nasional kami',
    keywords: ['keuntungan', 'manfaat', 'benefit', 'kemitraan'],
    relatedPage: '/partnership',
    language: 'id'
  },
  {
    id: 'partnership-benefits-en',
    category: 'Partnership',
    title: 'Benefits of Partnership with BEN',
    content: 'Access to leading global brands. Competitive pricing with attractive margins. Marketing support through materials and promotions. Comprehensive technical training. Reliable supply chain with consistent product availability through our national distribution network',
    keywords: ['benefits', 'advantage', 'partnership'],
    relatedPage: '/partnership',
    language: 'en'
  },

  // CAREERS
  {
    id: 'careers-id',
    category: 'Careers',
    title: 'Bergabung dengan Tim BEN',
    content: 'Di PT Bersama Energi Nusapersada, kami percaya bahwa karyawan kami adalah aset terbesar. Kami menawarkan: Pertumbuhan Karier dengan jalur kemajuan yang jelas. Budaya Kolaboratif dalam lingkungan yang mendukung. Pekerjaan yang Berdampak pada infrastruktur penting Indonesia. Manfaat Kompetitif termasuk perlindungan kesehatan dan bonus kinerja.',
    keywords: ['karier', 'pekerjaan', 'lowongan', 'kerja', 'tim'],
    relatedPage: '/careers',
    language: 'id'
  },
  {
    id: 'careers-en',
    category: 'Careers',
    title: 'Join the BEN Team',
    content: 'At PT Bersama Energi Nusapersada, employees are our greatest asset. We offer: Career Growth with clear advancement paths. Collaborative Culture in a supportive environment. Impactful Work supporting critical Indonesian infrastructure. Competitive Benefits including health coverage and performance bonuses.',
    keywords: ['career', 'job', 'opening', 'work', 'team'],
    relatedPage: '/careers',
    language: 'en'
  },

  // NEWS & UPDATES
  /*
  {
    id: 'news-id',
    category: 'News',
    title: 'Berita Terbaru BEN',
    content: 'BEN Memperluas Jaringan Distribusi ke Kalimantan Timur dengan pembukaan pusat distribusi regional baru di Balikpapan. Gulf Oil Meluncurkan Pelumas Industri Sintetis Generasi Berikutnya. Shantui memperkenalkan prototipe buldoser listrik. BEN Menyelenggarakan Konferensi Dealer Tahunan.',
    keywords: ['berita', 'news', 'update', 'terbaru', 'berita terbaru'],
    relatedPage: '/news',
    language: 'id'
  },
  {
    id: 'news-en',
    category: 'News',
    title: 'Latest News from BEN',
    content: 'BEN Expands Distribution Network to East Kalimantan with new regional distribution center in Balikpapan. Gulf Oil Launches Next Generation Synthetic Industrial Lubricants. Shantui introduces electric bulldozer prototype. BEN Hosts Annual Dealer Conference.',
    keywords: ['news', 'update', 'latest', 'announcement'],
    relatedPage: '/news',
    language: 'en'
  },
  */

  // MOTORSPORT
  {
    id: 'motorsport-id',
    category: 'Partnership',
    title: 'Kemitraan Motorsport BEN',
    content: 'Gulf adalah merek pelumas global yang identik dengan kualitas tanpa kompromi dan reputasi motorsport yang melegenda. Kami bermitra dengan Williams F1 Team dalam kompetisi balap Roda Empat tertinggi dan Trackhouse MotoGP Team untuk balap motor level teratas di dunia.',
    keywords: ['motorsport', 'f1', 'motogp', 'racing', 'Williams', 'Trackhouse'],
    relatedPage: '/partnership',
    language: 'id'
  },
  {
    id: 'motorsport-en',
    category: 'Partnership',
    title: 'BEN Motorsport Partnerships',
    content: 'Gulf is a global lubricant brand synonymous with uncompromising quality and legendary motorsport reputation. We partner with Williams F1 Team in the highest four-wheel racing competition and Trackhouse MotoGP Team in the top motorcycle racing in the world.',
    keywords: ['motorsport', 'f1', 'motogp', 'racing', 'Williams', 'Trackhouse'],
    relatedPage: '/partnership',
    language: 'en'
  },
];

// Search function for knowledge base
export function searchKnowledge(query: string, language: 'id' | 'en'): KnowledgeEntry[] {
  const lowerQuery = query.toLowerCase().trim();
  
  if (!lowerQuery) return [];

  // Split query into keywords
  const queryKeywords = lowerQuery.split(/\s+/);

  return benKnowledgeBase
    .filter(entry => entry.language === language)
    .sort((a, b) => {
      // Score based on keyword matches
      let scoreA = 0;
      let scoreB = 0;

      queryKeywords.forEach(keyword => {
        // Check title (highest priority)
        if (a.title.toLowerCase().includes(keyword)) scoreA += 10;
        if (b.title.toLowerCase().includes(keyword)) scoreB += 10;

        // Check content
        if (a.content.toLowerCase().includes(keyword)) scoreA += 5;
        if (b.content.toLowerCase().includes(keyword)) scoreB += 5;

        // Check keywords array
        if (a.keywords.some(k => k.toLowerCase().includes(keyword))) scoreA += 8;
        if (b.keywords.some(k => k.toLowerCase().includes(keyword))) scoreB += 8;
      });

      return scoreB - scoreA;
    })
    .slice(0, 3); // Return top 3 results
}

// Generate response based on knowledge base
export function generateResponse(query: string, language: 'id' | 'en'): string {
  const results = searchKnowledge(query, language);

  if (results.length === 0) {
    return language === 'id'
      ? 'Maaf, saya tidak menemukan informasi yang tepat untuk pertanyaan Anda. Silakan kunjungi halaman kami untuk informasi lebih lanjut.'
      : 'Sorry, I couldn\'t find relevant information for your question. Please visit our pages for more details.';
  }

  let response = '';

  results.forEach((entry, index) => {
    response += entry.content;
    if (index < results.length - 1) {
      response += '\n\n';
    }
  });

  // Add related page suggestion
  const relatedPages = [...new Set(results.map(r => r.relatedPage).filter(p => p))];
  if (relatedPages.length > 0) {
    response += '\n\n';
    if (language === 'id') {
      response += `📄 Lihat lebih lanjut di: ${relatedPages.map(p => `[${p === '/products' ? 'Produk' : p === '/about' ? 'Tentang Kami' : p === '/partnership' ? 'Kemitraan' : p === '/careers' ? 'Karier' : p === '/news' ? 'Berita & Media' : 'Hubungi Kami'}](${p})`).join(', ')}`;
    } else {
      response += `📄 Learn more at: ${relatedPages.map(p => `[${p === '/products' ? 'Products' : p === '/about' ? 'About Us' : p === '/partnership' ? 'Partnership' : p === '/careers' ? 'Careers' : p === '/news' ? 'News & Media' : 'Contact Us'}](${p})`).join(', ')}`;
    }
  }

  return response;
}
