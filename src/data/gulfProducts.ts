export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  brand: 'Gulf' | 'Shantui';
  slug: string;
  subcategories?: {
    id: string;
    name: string;
    slug: string;
  }[];
}

const BARREL_IMG = 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4';

export const gulfCategories: ProductCategory[] = [
  {
    id: 'mobil',
    name: 'Mobil',
    description: 'Sejak 1901, rangkaian pelumas mobil penumpang kami membantu Anda mencapai efisiensi dan performa yang lebih baik. Memenuhi standar industri API dan ACEA untuk performa yang dapat diandalkan.',
    imageUrl: 'https://assets.gulfoilltd.com/indonesia/files/2.%20CAR_EO_620x400.webp',
    brand: 'Gulf',
    slug: 'mobil',
    subcategories: [
      { id: 'oli-mesin', name: 'Oli Mesin (Engine Oils)', slug: 'oli-mesin' },
      { id: 'driveline-fluids', name: 'Driveline Fluids', slug: 'driveline-fluids' },
    ]
  },
  {
    id: 'motor',
    name: 'Motor',
    description: 'Oli mesin andalan untuk performa tinggi kendaraan roda dua Anda, teruji dalam kondisi lintasan maupun tantangan berkendara sehari-hari.',
    imageUrl: 'https://cdn.motor1.com/images/mgl/G3e37A/s1/gulf-oil-trackhouse-aprilia-motogp-livery---thailand---2025.webp',
    brand: 'Gulf',
    slug: 'motor',
    subcategories: [
      { id: 'oli-mesin-motor', name: 'Oli Mesin Motor', slug: 'oli-mesin-motor' },
    ]
  },
  {
    id: 'kendaraan-komersial',
    name: 'Kendaraan Komersial',
    description: 'Pelumas tangguh yang dirancang khusus untuk memaksimalkan efisiensi armada, mengurangi waktu henti, dan menjaga keandalan kendaraan komersial.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdv2vEBM7tGKFFnXhZmULxm1YvA1PwCBigbQ&s',
    brand: 'Gulf',
    slug: 'kendaraan-komersial',
    subcategories: [
      { id: 'oli-mesin-niaga', name: 'Oli Mesin Kendaraan Niaga', slug: 'oli-mesin-niaga' },
      { id: 'driveline-fluids-niaga', name: 'Driveline Fluids Kendaraan Niaga', slug: 'driveline-fluids-niaga' },
    ]
  },
  {
    id: 'industrial',
    name: 'Industrial',
    description: 'Solusi pelumasan industri performa ekstrem untuk berbagai sektor manufaktur, mining, dan konstruksi.',
    imageUrl: BARREL_IMG,
    brand: 'Gulf',
    slug: 'industrial',
    subcategories: [
      { id: 'hidrolik', name: 'Hydraulic Oils', slug: 'hidrolik' },
      { id: 'oli-gigi-industri', name: 'Industrial Gear Oils', slug: 'oli-gigi-industri' },
      { id: 'oli-kompresor', name: 'Compressor Oils', slug: 'oli-kompresor' },
      { id: 'oli-turbin', name: 'Turbine Oils', slug: 'oli-turbin' },
      { id: 'cairan-termal', name: 'Thermal Fluids', slug: 'cairan-termal' },
      { id: 'oli-bantalan', name: 'Bearing & Circulating Oils', slug: 'oli-bantalan' },
      { id: 'grease', name: 'Greases', slug: 'grease' },
    ]
  },
  {
    id: 'marine',
    name: 'Marine',
    description: 'Rangkaian lengkap pelumas kelautan untuk mesin utama, peralatan auxiliary, dan aplikasi ramah lingkungan di sektor maritim.',
    imageUrl: BARREL_IMG,
    brand: 'Gulf',
    slug: 'marine',
    subcategories: [
      { id: 'main-engine', name: 'Main Engine Oils', slug: 'main-engine' },
      { id: 'auxiliary', name: 'Auxiliary Oils', slug: 'auxiliary' },
      { id: 'marine-grease', name: 'Marine Grease', slug: 'marine-grease' },
      { id: 'eco-friendly', name: 'Eco-Friendly Lubricants', slug: 'eco-friendly' },
    ]
  },
];

export interface ProductSpec {
  id: string;
  name: string;
  image?: string;
  slug: string;
  categoryId: string;
  subcategoryId?: string;
  summary: string;
  viscosityGrades?: string[];
  availablePacks?: string[];
  specifications?: string[];
  approvals?: string[];
  applications?: string[];
  keyBenefits?: string[];
  partnerBrand: 'Gulf' | 'Shantui';
  pdsUrl?: string;
}

export const gulfProducts: ProductSpec[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // KATEGORI AUTOMOTIVE — MOBIL (Passenger Cars)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── A. Oli Mesin (Engine Oils) ─────────────────────────────────────────────
  {
    id: 'gulf-formula',
    name: 'Gulf Formula',
    slug: 'gulf-formula',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdv2vEBM7tGKFFnXhZmULxm1YvA1PwCBigbQ&s',
    categoryId: 'mobil',
    subcategoryId: 'oli-mesin',
    summary: 'Advanced Full Synthetic Engine Oil dirancang untuk memberikan performa maksimal pada mesin mobil bensin dan diesel berkinerja tinggi.',
    viscosityGrades: ['5W-30', '5W-40'],
    availablePacks: ['1L', '4L', '200L'],
    specifications: ['API SP', 'ACEA A3/B4'],
    approvals: ['Rekomendasi Utama OEM Eropa'],
    applications: ['Mobil sport', 'Sedan premium', 'SUV modern berkinerja tinggi'],
    keyBenefits: ['Perlindungan keausan mesin tiada tanding', 'Menjaga kebersihan mesin dari endapan', 'Stabilitas suhu ekstrem'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-ultrasynth',
    name: 'Gulf Ultrasynth',
    slug: 'gulf-ultrasynth',
    image: 'https://assets.gulfoilltd.com/indonesia/files/4.%20CAR_EO_1030x785.webp',
    categoryId: 'mobil',
    subcategoryId: 'oli-mesin',
    summary: 'Full Synthetic Engine Oil pilihan utama kendaraan penumpang masa kini untuk perlindungan keausan dan efisiensi bahan bakar ekstra.',
    viscosityGrades: ['0W-20', '5W-30'],
    availablePacks: ['1L', '4L', '20L', '200L'],
    specifications: ['API SN PLUS/SP', 'ILSAC GF-6'],
    approvals: ['Sesuai standar pabrikan otomotif Jepang & Amerika'],
    applications: ['Mobil perkotaan harian', 'Kendaraan hybrid', 'Mesin turbo injeksi langsung (TGDI)'],
    keyBenefits: ['Efisiensi bahan bakar superior', 'Mencegah Low Speed Pre-Ignition (LSPI)', 'Menjaga viskositas dalam durasi panjang'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-max',
    name: 'Gulf MAX',
    slug: 'gulf-max',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2.%20CAR_EO_620x400.webp',
    categoryId: 'mobil',
    subcategoryId: 'oli-mesin',
    summary: 'High Quality Engine Oil kelas premium berbahan dasar oli mineral yang tangguh untuk segala medan dan keawetan mesin.',
    viscosityGrades: ['10W-40', '15W-40'],
    availablePacks: ['1L', '4L'],
    specifications: ['API SN/CF'],
    approvals: ['-'],
    applications: ['Kendaraan tahun lama hingga menengah', 'Taksi atau armada utilitas'],
    keyBenefits: ['Daya tahan operasional andal', 'Kontrol lumpur dan varnish', 'Harga rasional dengan kualitas Gulf'],
    partnerBrand: 'Gulf'
  },

  // ── B. Driveline Fluids (Mobil) ────────────────────────────────────────────
  {
    id: 'gulf-multi-vehicle-atf-lv',
    name: 'Gulf Multi-Vehicle ATF-LV',
    slug: 'gulf-multi-vehicle-atf-lv',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Gulf_ATF_LV_1L_280x380_0.webp',
    categoryId: 'mobil',
    subcategoryId: 'driveline-fluids',
    summary: 'Cairan transmisi otomatis viskositas rendah (Low Viscosity) yang diformulasikan untuk transmisi otomatis modern multi-speed dengan kebutuhan efisiensi bahan bakar tinggi.',
    viscosityGrades: ['ATF LV'],
    availablePacks: ['1L', '4L', '20L'],
    specifications: ['Dexron VI', 'Mercon LV', 'Toyota WS'],
    approvals: ['GM Dexron VI', 'Ford Mercon LV'],
    applications: ['Transmisi otomatis mobil modern', 'CVT tertentu', 'Sistem power steering'],
    keyBenefits: ['Efisiensi bahan bakar lebih baik', 'Perpindahan gigi halus pada transmisi multi-speed', 'Perlindungan oksidasi dan keausan superior'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-multi-vehicle-atf',
    name: 'Gulf Multi-Vehicle ATF',
    slug: 'gulf-multi-vehicle-atf',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Gulf_Multi_Vehcile_ATF_1L_280x380.webp',
    categoryId: 'mobil',
    subcategoryId: 'driveline-fluids',
    summary: 'Cairan transmisi otomatis serbaguna yang kompatibel dengan berbagai merek dan tipe kendaraan, memberikan perlindungan optimal untuk sistem driveline.',
    viscosityGrades: ['ATF'],
    availablePacks: ['1L', '4L', '20L'],
    specifications: ['Dexron III H', 'Mercon V', 'Allison C4'],
    approvals: ['GM Dexron III H', 'Ford Mercon V'],
    applications: ['Transmisi otomatis konvensional', 'Sistem power steering', 'Kendaraan segala merek'],
    keyBenefits: ['Kompatibilitas universal', 'Perpindahan gigi mulus dan responsif', 'Perlindungan anti-keausan komponen transmisi'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-gear-mp-mobil',
    name: 'Gulf Gear MP',
    slug: 'gulf-gear-mp',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Gulf_Gear_MP_80W-90_1L_280x380.webp',
    categoryId: 'mobil',
    subcategoryId: 'driveline-fluids',
    summary: 'Oli transmisi manual dan gardan berkualitas tinggi dengan perlindungan EP (Extreme Pressure) untuk komponen roda gigi mobil penumpang.',
    viscosityGrades: ['75W-90', '80W-90', '85W-140'],
    availablePacks: ['1L', '4L', '20L'],
    specifications: ['API GL-5'],
    approvals: ['-'],
    applications: ['Transmisi manual mobil penumpang', 'Gardan (differential)', 'Transfer case 4WD'],
    keyBenefits: ['Perlindungan Extreme Pressure tinggi', 'Perpindahan gigi yang presisi', 'Tahan oksidasi dan korosi'],
    partnerBrand: 'Gulf'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KATEGORI AUTOMOTIVE — MOTOR (Motorcycles)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── A. Oli Mesin Motor ─────────────────────────────────────────────────────
  {
    id: 'gulf-syntrac',
    name: 'Gulf Syntrac',
    slug: 'gulf-syntrac',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/MCO_Syntrac_4T_10W40_Pack_1L_280x380_0.webp',
    categoryId: 'motor',
    subcategoryId: 'oli-mesin-motor',
    summary: 'Oli mesin sepeda motor Full Sintetik kelas atas untuk pelumasan maksimal motorsport pada suhu dan RPM luar biasa.',
    viscosityGrades: ['10W-40', '10W-50'],
    availablePacks: ['800ml', '1L'],
    specifications: ['API SN', 'JASO MA2'],
    approvals: ['Memenuhi spesifikasi manufaktur motor sport global'],
    applications: ['Motor sport', 'Motor touring jarak jauh', 'Superbike'],
    keyBenefits: ['Meningkatkan akselerasi dan penyaluran tenaga', 'Perlindungan gesekan kopling yang akurat', 'Stabilitas termal ekstrim'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-syntrac-4t',
    name: 'Gulf Syntrac 4T',
    slug: 'gulf-syntrac-4t',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/MCO_Syntrac_4T_10W40_Pack_1L_280x380_0.webp',
    categoryId: 'motor',
    subcategoryId: 'oli-mesin-motor',
    summary: 'Oli mesin sintetik premium untuk motor 4-tak performa tinggi, memberikan perlindungan maksimal pada mesin, kopling, dan transmisi.',
    viscosityGrades: ['10W-40', '10W-50'],
    availablePacks: ['800ml', '1L'],
    specifications: ['API SN', 'JASO MA2'],
    approvals: ['Standar motor sport internasional'],
    applications: ['Motor sport 4-tak', 'Motor touring premium', 'Naked bike dan supermoto'],
    keyBenefits: ['Formulasi spesifik mesin 4-tak', 'Perlindungan kopling basah superior', 'Stabilitas viskositas pada RPM tinggi'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-powertrac',
    name: 'Gulf Powertrac',
    slug: 'gulf-powertrac',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Pride_4T_Scooter_Plus_10W30_1L_280x380.webp',
    categoryId: 'motor',
    subcategoryId: 'oli-mesin-motor',
    summary: 'Pelumas semi-sintetik premium 4-tak yang dikembangkan secara spesifik untuk menjaga mesin bersih dan pergantian gigi mulus.',
    viscosityGrades: ['10W-40', '15W-50'],
    availablePacks: ['800ml', '1L'],
    specifications: ['API SL', 'JASO MA2'],
    approvals: ['Didukung untuk mesin-mesin transmisi manual performa tinggi'],
    applications: ['Motor underbone', 'Motor harian/sport mid-range'],
    keyBenefits: ['Transisi kopling yang persisi', 'Melindungi komponen vital mesin', 'Mempertahankan performa operasional stabil'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-pride',
    name: 'Gulf Pride',
    slug: 'gulf-pride',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Pride_4T_Scooter_Plus_10W30_1L_280x380.webp',
    categoryId: 'motor',
    subcategoryId: 'oli-mesin-motor',
    summary: 'Oli pelumas tangguh skuter matik dan motor bebek konvensional. Diformulasi spesial untuk kondisi stop & go.',
    viscosityGrades: ['10W-30', '10W-40', '20W-40'],
    availablePacks: ['800ml', '1L'],
    specifications: ['API SL', 'JASO MB (untuk matic)', 'JASO MA (untuk manual)'],
    approvals: ['-'],
    applications: ['Skuter matic', 'Motor bebek pekerja keras'],
    keyBenefits: ['Mengurangi panas mesin', 'Efisiensi bakar yang baik di kemacetan', 'Mengurangi deposit karbon'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-pride-scooter-plus',
    name: 'Gulf Pride Scooter Plus',
    slug: 'gulf-pride-scooter-plus',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Pride_4T_Scooter_Plus_10W30_1L_280x380.webp',
    categoryId: 'motor',
    subcategoryId: 'oli-mesin-motor',
    summary: 'Oli mesin khusus skuter matik yang diformulasikan untuk perlindungan ekstra pada mesin CVT dan komponen otomatis skuter modern.',
    viscosityGrades: ['10W-30', '10W-40'],
    availablePacks: ['800ml', '1L'],
    specifications: ['API SL', 'JASO MB'],
    approvals: ['-'],
    applications: ['Skuter matic modern', 'Motor matic harian', 'Motor matic premium'],
    keyBenefits: ['Formulasi khusus transmisi CVT', 'Menjaga kebersihan mesin matic', 'Efisiensi bahan bakar optimal untuk skuter'],
    partnerBrand: 'Gulf'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KATEGORI AUTOMOTIVE — KENDARAAN KOMERSIAL (Commercial Vehicles)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── A. Oli Mesin Kendaraan Niaga ───────────────────────────────────────────
  {
    id: 'gulf-superfleet-supreme',
    name: 'Gulf Superfleet Supreme',
    slug: 'gulf-superfleet-supreme',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Drum_280x380_3.webp',
    categoryId: 'kendaraan-komersial',
    subcategoryId: 'oli-mesin-niaga',
    summary: 'Oli mesin diesel kinerja tertinggi untuk armada berat modern, memberikan perlindungan superior dan interval pergantian yang diperpanjang.',
    viscosityGrades: ['10W-40', '15W-40'],
    availablePacks: ['5L', '20L', '200L'],
    specifications: ['API CK-4', 'ACEA E9/E7/E6'],
    approvals: ['MB 228.31', 'Volvo VDS-4.5', 'MAN M 3575', 'Cummins CES 20086'],
    applications: ['Truck heavy duty modern', 'Armada logistik jarak jauh', 'Bus antarkota premium'],
    keyBenefits: ['Extended drain interval', 'Perlindungan sistem DPF/SCR', 'Stabilitas oksidasi kelas wahid'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-super-duty-cf',
    name: 'Gulf Super Duty CF',
    slug: 'gulf-super-duty-cf',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Drum_280x380_3.webp',
    categoryId: 'kendaraan-komersial',
    subcategoryId: 'oli-mesin-niaga',
    summary: 'Oli mesin diesel tugas berat yang tangguh dan ekonomis, dirancang untuk armada komersial konvensional dan mesin diesel turbo.',
    viscosityGrades: ['15W-40', '20W-50'],
    availablePacks: ['5L', '20L', '200L'],
    specifications: ['API CF-4/CF'],
    approvals: ['-'],
    applications: ['Truk konvensional', 'Mini bus', 'Kendaraan niaga ringan diesel'],
    keyBenefits: ['Harga ekonomis untuk armada besar', 'Kontrol jelaga dan endapan', 'Daya tahan mesin diesel konvensional'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-super-duty-le',
    name: 'Gulf Super Duty LE',
    slug: 'gulf-super-duty-le',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Drum_280x380_4.webp',
    categoryId: 'kendaraan-komersial',
    subcategoryId: 'oli-mesin-niaga',
    summary: 'Oli mesin diesel kinerja ekstra unggul berbasis teknologi Low Emission (LE) yang dirancang untuk truk modern ramah lingkungan.',
    viscosityGrades: ['10W-30', '15W-40'],
    availablePacks: ['5L', '20L', '200L'],
    specifications: ['API CK-4/CJ-4', 'ACEA E9/E7'],
    approvals: ['Volvo VDS-4.5', 'Cummins CES 20086', 'MB 228.31'],
    applications: ['Truck heavy duty bersistem EGR/DPF', 'Armada angkut jarak jauh', 'Bus antarkota modern'],
    keyBenefits: ['Downtime berkurang', 'Memperpanjang masa pakai sistem emisi DPF', 'Kontrol gesekan luar biasa sehingga memperpanjang umur mesin'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-super-fleet',
    name: 'Gulf Super Fleet',
    slug: 'gulf-super-fleet',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Drum_280x380_4.webp',
    categoryId: 'kendaraan-komersial',
    subcategoryId: 'oli-mesin-niaga',
    summary: 'Pelumas armada beban berat tugas ekstrem yang memastikan interval pergantian super panjang namun tetap tahan oksidasi.',
    viscosityGrades: ['15W-40', '20W-50'],
    availablePacks: ['20L', '200L'],
    specifications: ['API CI-4/CH-4', 'ACEA E7'],
    approvals: ['Global DHD-1', 'Volvo VDS-3'],
    applications: ['Kendaraan operasional pertambangan', 'Ekskavator', 'Alat berat logistik lama maupun baru'],
    keyBenefits: ['Cadangan TBN (Total Base Number) yang stabil', 'Mencegah penebalan akibat penumpukan jelaga', 'Membersihkan silinder dan piston ring'],
    partnerBrand: 'Gulf'
  },

  // ── B. Driveline Fluids untuk Kendaraan Niaga ──────────────────────────────
  {
    id: 'gulf-gear-mp-niaga',
    name: 'Gulf Gear MP',
    slug: 'gulf-gear-mp-niaga',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Drum_280x380_4.webp',
    categoryId: 'kendaraan-komersial',
    subcategoryId: 'driveline-fluids-niaga',
    summary: 'Oli transmisi dan gardan multi-purpose untuk kendaraan niaga, memberikan perlindungan roda gigi yang andal pada berbagai kondisi operasional berat.',
    viscosityGrades: ['80W-90', '85W-140'],
    availablePacks: ['4L', '20L', '200L'],
    specifications: ['API GL-5'],
    approvals: ['-'],
    applications: ['Gardan truk dan bus', 'Transmisi manual kendaraan niaga', 'Transfer case kendaraan off-road'],
    keyBenefits: ['Perlindungan EP untuk beban berat', 'Tahan panas operasional tinggi', 'Mencegah keausan roda gigi hypoid'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-gear-ep',
    name: 'Gulf Gear EP',
    slug: 'gulf-gear-ep',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Drum_280x380_4.webp',
    categoryId: 'kendaraan-komersial',
    subcategoryId: 'driveline-fluids-niaga',
    summary: 'Oli roda gigi transmisi Extreme Pressure performa tinggi untuk perlindungan maksimal pada gardan dan transmisi kendaraan komersial tugas berat.',
    viscosityGrades: ['80W-90', '85W-140'],
    availablePacks: ['20L', '200L'],
    specifications: ['API GL-5', 'MIL-PRF-2105E'],
    approvals: ['ZF TE-ML 05A/12A', 'MAN 342 Type M2'],
    applications: ['Gardan heavy-duty truck', 'Transmisi kendaraan konstruksi', 'Final drive alat berat'],
    keyBenefits: ['Perlindungan Extreme Pressure tingkat lanjut', 'Ketahanan oksidasi dan termal superior', 'Perpindahan gigi mulus bahkan pada beban tinggi'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-atf-dx-iii',
    name: 'Gulf ATF DX III',
    slug: 'gulf-atf-dx-iii',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Drum_280x380_4.webp',
    categoryId: 'kendaraan-komersial',
    subcategoryId: 'driveline-fluids-niaga',
    summary: 'Cairan transmisi otomatis Dexron III untuk kendaraan niaga dengan transmisi otomatis konvensional dan sistem hidrolik.',
    viscosityGrades: ['ATF Dexron III'],
    availablePacks: ['1L', '4L', '20L', '200L'],
    specifications: ['GM Dexron III H', 'Ford Mercon'],
    approvals: ['Allison C4'],
    applications: ['Transmisi otomatis bus dan truk', 'Sistem power steering kendaraan niaga', 'Torque converter'],
    keyBenefits: ['Perpindahan gigi halus dan responsif', 'Stabilitas oksidasi pada suhu tinggi', 'Kompatibel berbagai merek transmisi otomatis'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-ht-to4-fluid',
    name: 'Gulf HT TO-4 Fluid',
    slug: 'gulf-ht-to4-fluid',
    image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Drum_280x380_4.webp',
    categoryId: 'kendaraan-komersial',
    subcategoryId: 'driveline-fluids-niaga',
    summary: 'Cairan transmisi dan hidrolik serbaguna yang memenuhi spesifikasi Caterpillar TO-4, dirancang untuk aplikasi alat berat dan kendaraan konstruksi.',
    viscosityGrades: ['SAE 10W', 'SAE 30', 'SAE 50'],
    availablePacks: ['20L', '200L'],
    specifications: ['Caterpillar TO-4', 'Allison C4'],
    approvals: ['Caterpillar', 'Komatsu'],
    applications: ['Transmisi powershift alat berat', 'Sistem hidrolik ekskavator', 'Final drive dozer dan loader'],
    keyBenefits: ['Cairan serbaguna transmisi-hidrolik', 'Perlindungan kopling basah (wet brake)', 'Kompatibel alat berat Caterpillar, Komatsu, dll.'],
    partnerBrand: 'Gulf'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KATEGORI INDUSTRI (Industrial Lubricants)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── 1. Hidrolik (Hydraulic Oils) ───────────────────────────────────────────
  {
    id: 'gulf-harmony-aw',
    name: 'Gulf Harmony AW',
    slug: 'gulf-harmony-aw',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'hidrolik',
    summary: 'Pelumas anti-wear hidrolik premium yang diformulasikan dari basis minyak mineral kualitas super untuk aplikasi manufaktur dan industri mobilitas.',
    viscosityGrades: ['ISO VG 32', 'ISO VG 46', 'ISO VG 68', 'ISO VG 100'],
    availablePacks: ['20L', '200L'],
    specifications: ['DIN 51524 Part 2 HLP', 'ISO 11158 HM'],
    approvals: ['Denison HF-0', 'Eaton Vickers M-2950-S'],
    applications: ['Sistem hidrolik pabrik baja', 'Alat berat konstruksi (excavator, dump truck)', 'Mesin pencetak injeksi presisi'],
    keyBenefits: ['Perlindungan ekstra anti-keausan pompa', 'Pemisahan air (demulsibilitas) kelas wahid', 'Ketahanan oksidasi andal jangka panjang'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-harmony-hvi-plus',
    name: 'Gulf Harmony HVI Plus',
    slug: 'gulf-harmony-hvi-plus',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'hidrolik',
    summary: 'Cairan hidrolik indeks viskositas tinggi (HVI) tanpa kandungan abu (ashless zinc-free) yang dirancang untuk performa suhu sangat ekstrem.',
    viscosityGrades: ['ISO VG 15', 'ISO VG 32', 'ISO VG 46', 'ISO VG 68'],
    availablePacks: ['200L'],
    specifications: ['DIN 51524 Part 3 HVLP', 'ISO 11158 HV'],
    approvals: ['-'],
    applications: ['Sistem hidrolik outdoor yang terkena perubahan iklim tajam', 'Crane pelabuhan laut', 'Mesin berat khusus yang sensitif lingkungan'],
    keyBenefits: ['Indeks Viskositas ekstra tinggi menstabilkan performa', 'Anti degradasi berlapis', 'Ramah lingkungan karena tidak memakai senyawa zinc (seng)'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  },

  // ── 2. Oli Gigi Industri (Industrial Gear Oils) ───────────────────────────
  {
    id: 'gulf-geartek-hd',
    name: 'Gulf Geartek HD',
    slug: 'gulf-geartek-hd',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'oli-gigi-industri',
    summary: 'Oli roda gigi industri kinerja tinggi dengan aditif EP yang dikembangkan untuk melumasi roda gigi baja tugas berat di lingkungan yang keras.',
    viscosityGrades: ['ISO VG 68', 'ISO VG 150', 'ISO VG 220', 'ISO VG 320', 'ISO VG 460', 'ISO VG 680'],
    availablePacks: ['20L', '200L'],
    specifications: ['DIN 51517 Part 3 CLP', 'ISO 12925-1 Type CKC'],
    approvals: ['Flender', 'David Brown'],
    applications: ['Roda gigi tertutup skala industri berat', 'Conveyor pertambangan', 'Peralatan pabrik semen dan baja'],
    keyBenefits: ['Perlindungan ekstrim terhadap tekanan (EP)', 'Ketahanan prima pada keausan dan micro-pitting', 'Mencegah terjadinya buih dan karat'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  },
  {
    id: 'gulf-ep-lubricant',
    name: 'Gulf EP Lubricant',
    slug: 'gulf-ep-lubricant',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'oli-gigi-industri',
    summary: 'Oli roda gigi industri extreme pressure yang memberikan perlindungan superior pada sistem gear box industri berat.',
    viscosityGrades: ['ISO VG 68', 'ISO VG 150', 'ISO VG 220', 'ISO VG 320', 'ISO VG 460', 'ISO VG 680'],
    availablePacks: ['20L', '200L'],
    specifications: ['DIN 51517 Part 3 CLP', 'ISO 12925-1 Type CKC'],
    approvals: ['Flender', 'David Brown'],
    applications: ['Roda gigi tertutup skala industri berat', 'Conveyor pertambangan', 'Peralatan pabrik semen dan baja'],
    keyBenefits: ['Perlindungan extreme pressure tinggi', 'Ketahanan prima pada keausan', 'Mencegah buih dan korosi'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  },

  // ── 3. Oli Kompresor (Compressor Oils) ────────────────────────────────────
  {
    id: 'gulf-compressor-lube',
    name: 'Gulf Compressor',
    slug: 'gulf-compressor',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'oli-kompresor',
    summary: 'Oli kompresor udara berbasis mineral untuk memberikan perlindungan efisien pada komponen dalam kompresor yang beroperasi konstan.',
    viscosityGrades: ['ISO VG 32', 'ISO VG 46', 'ISO VG 68', 'ISO VG 150'],
    availablePacks: ['20L', '200L'],
    specifications: ['DIN 51506 VDL'],
    approvals: ['-'],
    applications: ['Kompresor udara tipe rotary screw', 'Kompresor udara tipe reciprocating'],
    keyBenefits: ['Menjaga kebersihan katup agar tidak ada tumpukan deposit', 'Ketahanan oksidasi luar biasa', 'Mencegah pemisahan air dengan oli'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  },

  // ── 4. Oli Turbin (Turbine Oils) ──────────────────────────────────────────
  {
    id: 'gulf-crest',
    name: 'Gulf Crest',
    slug: 'gulf-crest',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'oli-turbin',
    summary: 'Oli turbin berkualitas prima yang diformulasikan dari basis minyak sangat murni untuk kinerja tanpa cacat dalam sistem turbin uap, gas, maupun air.',
    viscosityGrades: ['ISO VG 32', 'ISO VG 46', 'ISO VG 68'],
    availablePacks: ['208L'],
    specifications: ['DIN 51515 Part 1/2', 'ISO 8068'],
    approvals: ['Siemens', 'Alstom', 'GE'],
    applications: ['Pembangkit listrik tenaga uap dan gas', 'Turbin air komersial', 'Peralatan rotasi tinggi berpemanas ekstrim'],
    keyBenefits: ['Masa operasional oli yang sangat sangat panjang', 'Pemisahan udara yang sangat cepat', 'Pelindung karat komponen presisi'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  },

  // ── 5. Cairan Termal (Thermal Fluids) ─────────────────────────────────────
  {
    id: 'gulf-therm',
    name: 'Gulf Therm',
    slug: 'gulf-therm',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'cairan-termal',
    summary: 'Cairan transfer panas berbasis mineral yang dirancang untuk sistem pemanas industri dengan stabilitas termal tinggi dan umur pakai panjang.',
    viscosityGrades: ['Thermal Fluid Grade'],
    availablePacks: ['200L'],
    specifications: ['DIN 51522'],
    approvals: ['-'],
    applications: ['Sistem pemanas industri petrokimia', 'Pemrosesan makanan dan minuman', 'Pabrik tekstil dan kertas'],
    keyBenefits: ['Stabilitas termal hingga suhu sangat tinggi', 'Koefisien perpindahan panas yang efisien', 'Masa pakai sangat panjang tanpa degradasi signifikan'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  },

  // ── 6. Oli Bantalan & Sirkulasi (Bearing & Circulating Oils) ──────────────
  {
    id: 'gulf-security',
    name: 'Gulf Security',
    slug: 'gulf-security',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'oli-bantalan',
    summary: 'Oli sirkulasi dan bantalan premium yang dirancang untuk pelumasan berkelanjutan pada mesin industri presisi dan bearing berkecepatan tinggi.',
    viscosityGrades: ['ISO VG 32', 'ISO VG 46', 'ISO VG 68', 'ISO VG 100'],
    availablePacks: ['20L', '200L'],
    specifications: ['DIN 51517 Part 2 CL', 'ISO 12925-1 Type CKB'],
    approvals: ['-'],
    applications: ['Bantalan (bearing) mesin industri', 'Sistem sirkulasi oli sentral', 'Mesin kertas dan spinning mill'],
    keyBenefits: ['Pemisahan air dan udara sangat cepat', 'Anti-buih dan anti-karat berlapis', 'Stabilitas oksidasi ekstra panjang'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  },

  // ── 7. Pelumas Gemuk (Greases) ────────────────────────────────────────────
  {
    id: 'gulf-crown-epx',
    name: 'Gulf Crown EPX',
    slug: 'gulf-crown-epx',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'grease',
    summary: 'Pelumas gemuk serbaguna tipe Lithium dengan aditif Extreme Pressure tingkat tinggi untuk perlindungan komponen berbeban berat.',
    viscosityGrades: ['NLGI 0', 'NLGI 1', 'NLGI 2', 'NLGI 3'],
    availablePacks: ['18Kg', '180Kg'],
    specifications: ['DIN 51502 KP2K-30'],
    approvals: ['-'],
    applications: ['Bantalan roda tugas berat kendaraan komersial', 'Jurnal bearing pada mesin industri konvensional', 'Titik engsel dan bushing konstruksi'],
    keyBenefits: ['Anti aus maksimal di bawah beban getaran tinggi', 'Daya rekat kuat mencegah tercuci air', 'Stabilitas mekanis tinggi tidak mudah lumer'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  },
  {
    id: 'gulf-flex-lcx',
    name: 'Gulf Flex LCX',
    slug: 'gulf-flex-lcx',
    image: BARREL_IMG,
    categoryId: 'industrial',
    subcategoryId: 'grease',
    summary: 'Pelumas gemuk Lithium Complex serbaguna premium dengan ketahanan suhu tinggi dan kemampuan tahan air yang sangat baik.',
    viscosityGrades: ['NLGI 2'],
    availablePacks: ['18Kg', '180Kg'],
    specifications: ['DIN 51502 KP2N-30'],
    approvals: ['-'],
    applications: ['Bantalan industri suhu tinggi', 'Pompa dan blower industri', 'Peralatan konstruksi dan pertambangan'],
    keyBenefits: ['Ketahanan suhu tinggi (dropping point tinggi)', 'Tahan pencucian air sangat baik', 'Stabilitas geser mekanis superior'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KATEGORI MARINE (Pelumas Kelautan)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gulf-marine-main-engine',
    name: 'Gulf Marine Main Engine Oil',
    slug: 'gulf-marine-main-engine',
    image: BARREL_IMG,
    categoryId: 'marine',
    subcategoryId: 'main-engine',
    summary: 'Pelumas mesin utama kapal yang diformulasikan untuk mesin diesel kelautan 2-tak dan 4-tak dengan berbagai jenis bahan bakar termasuk HFO dan VLSFO.',
    viscosityGrades: ['SAE 30', 'SAE 40', 'SAE 50'],
    availablePacks: ['200L', 'Bulk'],
    specifications: ['TBN 30-100 sesuai tipe bahan bakar'],
    approvals: ['-'],
    applications: ['Mesin utama kapal tanker', 'Kapal kontainer', 'Kapal bulk carrier'],
    keyBenefits: ['Netralisasi asam efektif untuk bahan bakar HFO/VLSFO', 'Perlindungan liner dan ring piston', 'Kontrol deposit dan keausan silinder'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-marine-auxiliary',
    name: 'Gulf Marine Auxiliary Oil',
    slug: 'gulf-marine-auxiliary',
    image: BARREL_IMG,
    categoryId: 'marine',
    subcategoryId: 'auxiliary',
    summary: 'Pelumas untuk mesin bantu (auxiliary engine) dan peralatan mekanis kapal yang memerlukan pelumasan andal dalam lingkungan maritim.',
    viscosityGrades: ['SAE 30', 'SAE 40'],
    availablePacks: ['200L', 'Bulk'],
    specifications: ['API CF'],
    approvals: ['-'],
    applications: ['Genset kapal', 'Mesin bantu (auxiliary engine)', 'Peralatan dek dan mekanis'],
    keyBenefits: ['Perlindungan korosi di lingkungan laut', 'Stabilitas viskositas pada operasi berkelanjutan', 'Demulsibilitas tinggi mencegah emulsi air laut'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-marine-grease',
    name: 'Gulf Marine Grease',
    slug: 'gulf-marine-grease',
    image: BARREL_IMG,
    categoryId: 'marine',
    subcategoryId: 'marine-grease',
    summary: 'Pelumas gemuk tahan air laut untuk bantalan dan komponen dek kapal yang terpapar langsung dengan kondisi maritim yang keras.',
    viscosityGrades: ['NLGI 2'],
    availablePacks: ['18Kg', '180Kg'],
    specifications: ['DIN 51502'],
    approvals: ['-'],
    applications: ['Bantalan dek kapal', 'Winch dan crane kapal', 'Wire rope dan rantai jangkar'],
    keyBenefits: ['Tahan pencucian air laut', 'Perlindungan korosi di lingkungan salin', 'Daya rekat tinggi pada komponen bergetar'],
    partnerBrand: 'Gulf'
  },
  {
    id: 'gulf-marine-eco',
    name: 'Gulf Marine Eco-Friendly Lubricant',
    slug: 'gulf-marine-eco',
    image: BARREL_IMG,
    categoryId: 'marine',
    subcategoryId: 'eco-friendly',
    summary: 'Pelumas ramah lingkungan untuk aplikasi kelautan yang memerlukan kepatuhan terhadap regulasi lingkungan seperti VGP (Vessel General Permit).',
    viscosityGrades: ['ISO VG 32', 'ISO VG 46', 'ISO VG 68'],
    availablePacks: ['20L', '200L'],
    specifications: ['Environmentally Acceptable Lubricant (EAL)'],
    approvals: ['-'],
    applications: ['Sistem stern tube kapal', 'Sistem thrusters', 'Peralatan dek kapal di area lingkungan sensitif'],
    keyBenefits: ['Biodegradable dan non-toxic', 'Memenuhi regulasi lingkungan maritim', 'Performa pelumasan setara oli konvensional'],
    partnerBrand: 'Gulf'
  },
];
