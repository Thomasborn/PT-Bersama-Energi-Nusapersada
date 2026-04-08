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
  // {
  //   id: 'mobil',
  //   name: 'Mobil',
  //   description: 'Sejak 1901, rangkaian pelumas mobil penumpang kami membantu Anda mencapai efisiensi dan performa yang lebih baik. Memenuhi standar industri API dan ACEA untuk performa yang dapat diandalkan.',
  //   imageUrl: 'https://assets.gulfoilltd.com/indonesia/files/2.%20CAR_EO_620x400.webp',
  //   brand: 'Gulf',
  //   slug: 'mobil',
  //   subcategories: [
  //     { id: 'oli-mesin', name: 'Oli Mesin (Engine Oils)', slug: 'oli-mesin' },
  //     { id: 'driveline-fluids', name: 'Driveline Fluids', slug: 'driveline-fluids' },
  //   ]
  // },
  // {
  //   id: 'motor',
  //   name: 'Motor',
  //   description: 'Oli mesin andalan untuk performa tinggi kendaraan roda dua Anda, teruji dalam kondisi lintasan maupun tantangan berkendara sehari-hari.',
  //   imageUrl: 'https://cdn.motor1.com/images/mgl/G3e37A/s1/gulf-oil-trackhouse-aprilia-motogp-livery---thailand---2025.webp',
  //   brand: 'Gulf',
  //   slug: 'motor',
  //   subcategories: [
  //     { id: 'oli-mesin-motor', name: 'Oli Mesin Motor', slug: 'oli-mesin-motor' },
  //   ]
  // },
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
  {
    id: 'shantui',
    name: 'Alat Berat Shantui',
    description: 'Unit alat berat berkualitas global untuk pertambangan, konstruksi, dan infrastruktur. Tangguh dan efisien di segala medan operasional.',
    imageUrl: '/shantui/escavator/mining.png',
    brand: 'Shantui',
    slug: 'shantui',
    subcategories: [
      { id: 'mining-excavator', name: 'Mining Excavator', slug: 'mining-excavator' },
      { id: 'large-excavator', name: 'Large Excavator', slug: 'large-excavator' },
      { id: 'medium-excavator', name: 'Medium Excavator', slug: 'medium-excavator' },
      { id: 'small-excavator', name: 'Small Excavator', slug: 'small-excavator' },
      { id: 'mini-excavator', name: 'Mini Excavator', slug: 'mini-excavator' },
      { id: 'wheel-excavator', name: 'Wheel Excavator', slug: 'wheel-excavator' },
      { id: 'small-bulldozer', name: 'Small Bulldozer', slug: 'small-bulldozer' },
      { id: 'medium-bulldozer', name: 'Medium Bulldozer', slug: 'medium-bulldozer' },
      { id: 'large-bulldozer', name: 'Large Bulldozer', slug: 'large-bulldozer' },
      { id: 'wheel-loader', name: 'Wheel Loader', slug: 'wheel-loader' },
      { id: 'mining-truck', name: 'Mining Truck', slug: 'mining-truck' },
      // { id: 'motor-grader', name: 'Motor Grader', slug: 'motor-grader' },
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
  summary?: string;
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
  // COMMENTED OUT - TEMPORARILY HIDDEN
  // ── A. Oli Mesin (Engine Oils) ─────────────────────────────────────────────
  // {
  //   id: 'gulf-formula',
  //   name: 'Gulf Formula',
  //   slug: 'gulf-formula',
  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdv2vEBM7tGKFFnXhZmULxm1YvA1PwCBigbQ&s',
  //   categoryId: 'mobil',
  //   subcategoryId: 'oli-mesin',
  //   summary: 'Advanced Full Synthetic Engine Oil dirancang untuk memberikan performa maksimal pada mesin mobil bensin dan diesel berkinerja tinggi.',
  //   viscosityGrades: ['5W-30', '5W-40'],
  //   availablePacks: ['1L', '4L', '200L'],
  //   specifications: ['API SP', 'ACEA A3/B4'],
  //   approvals: ['Rekomendasi Utama OEM Eropa'],
  //   applications: ['Mobil sport', 'Sedan berkinerja tinggi', 'SUV modern berkinerja tinggi'],
  //   keyBenefits: ['Perlindungan keausan mesin tiada tanding', 'Menjaga kebersihan mesin dari endapan', 'Stabilitas suhu ekstrem'],
  //   partnerBrand: 'Gulf'
  // },
  // {
  //   id: 'gulf-ultrasynth',
  //   name: 'Gulf Ultrasynth',
  //   slug: 'gulf-ultrasynth',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/4.%20CAR_EO_1030x785.webp',
  //   categoryId: 'mobil',
  //   subcategoryId: 'oli-mesin',
  //   summary: 'Full Synthetic Engine Oil pilihan utama kendaraan penumpang masa kini untuk perlindungan keausan dan efisiensi bahan bakar ekstra.',
  //   viscosityGrades: ['0W-20', '5W-30'],
  //   availablePacks: ['1L', '4L', '20L', '200L'],
  //   specifications: ['API SN PLUS/SP', 'ILSAC GF-6'],
  //   approvals: ['Sesuai standar pabrikan otomotif Jepang & Amerika'],
  //   applications: ['Mobil perkotaan harian', 'Kendaraan hybrid', 'Mesin turbo injeksi langsung (TGDI)'],
  //   keyBenefits: ['Efisiensi bahan bakar superior', 'Mencegah Low Speed Pre-Ignition (LSPI)', 'Menjaga viskositas dalam durasi panjang'],
  //   partnerBrand: 'Gulf'
  // },
  // {
  //   id: 'gulf-max',
  //   name: 'Gulf MAX',
  //   slug: 'gulf-max',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/2.%20CAR_EO_620x400.webp',
  //   categoryId: 'mobil',
  //   subcategoryId: 'oli-mesin',
  //   summary: 'High Quality Engine Oil berbahan dasar oli mineral yang tangguh untuk segala medan dan keawetan mesin',
  //   viscosityGrades: ['10W-40', '15W-40'],
  //   availablePacks: ['1L', '4L'],
  //   specifications: ['API SN/CF'],
  //   approvals: ['-'],
  //   applications: ['Kendaraan tahun lama hingga menengah', 'Taksi atau armada utilitas'],
  //   keyBenefits: ['Daya tahan operasional andal', 'Kontrol lumpur dan varnish', 'Harga rasional dengan kualitas Gulf'],
  //   partnerBrand: 'Gulf'
  // },

  // ── B. Driveline Fluids (Mobil) ────────────────────────────────────────────
  // {
  //   id: 'gulf-multi-vehicle-atf-lv',
  //   name: 'Gulf Multi-Vehicle ATF-LV',
  //   slug: 'gulf-multi-vehicle-atf-lv',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Gulf_ATF_LV_1L_280x380_0.webp',
  //   categoryId: 'mobil',
  //   subcategoryId: 'driveline-fluids',
  //   summary: 'Cairan transmisi otomatis viskositas rendah (Low Viscosity) yang diformulasikan untuk transmisi otomatis modern multi-speed dengan kebutuhan efisiensi bahan bakar tinggi.',
  //   viscosityGrades: ['ATF LV'],
  //   availablePacks: ['1L', '4L', '20L'],
  //   specifications: ['Dexron VI', 'Mercon LV', 'Toyota WS'],
  //   approvals: ['GM Dexron VI', 'Ford Mercon LV'],
  //   applications: ['Transmisi otomatis mobil modern', 'CVT tertentu', 'Sistem power steering'],
  //   keyBenefits: ['Efisiensi bahan bakar lebih baik', 'Perpindahan gigi halus pada transmisi multi-speed', 'Perlindungan oksidasi dan keausan superior'],
  //   partnerBrand: 'Gulf'
  // },
  // {
  //   id: 'gulf-multi-vehicle-atf',
  //   name: 'Gulf Multi-Vehicle ATF',
  //   slug: 'gulf-multi-vehicle-atf',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Gulf_Multi_Vehcile_ATF_1L_280x380.webp',
  //   categoryId: 'mobil',
  //   subcategoryId: 'driveline-fluids',
  //   summary: 'Cairan transmisi otomatis serbaguna yang kompatibel dengan berbagai merek dan tipe kendaraan, memberikan perlindungan optimal untuk sistem driveline.',
  //   viscosityGrades: ['ATF'],
  //   availablePacks: ['1L', '4L', '20L'],
  //   specifications: ['Dexron III H', 'Mercon V', 'Allison C4'],
  //   approvals: ['GM Dexron III H', 'Ford Mercon V'],
  //   applications: ['Transmisi otomatis konvensional', 'Sistem power steering', 'Kendaraan segala merek'],
  //   keyBenefits: ['Kompatibilitas universal', 'Perpindahan gigi mulus dan responsif', 'Perlindungan anti-keausan komponen transmisi'],
  //   partnerBrand: 'Gulf'
  // },
  // {
  //   id: 'gulf-gear-mp-mobil',
  //   name: 'Gulf Gear MP',
  //   slug: 'gulf-gear-mp',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Gulf_Gear_MP_80W-90_1L_280x380.webp',
  //   categoryId: 'mobil',
  //   subcategoryId: 'driveline-fluids',
  //   summary: 'Oli transmisi manual dan gardan berkualitas tinggi dengan perlindungan EP (Extreme Pressure) untuk komponen roda gigi mobil penumpang.',
  //   viscosityGrades: ['75W-90', '80W-90', '85W-140'],
  //   availablePacks: ['1L', '4L', '20L'],
  //   specifications: ['API GL-5'],
  //   approvals: ['-'],
  //   applications: ['Transmisi manual mobil penumpang', 'Gardan (differential)', 'Transfer case 4WD'],
  //   keyBenefits: ['Perlindungan Extreme Pressure tinggi', 'Perpindahan gigi yang presisi', 'Tahan oksidasi dan korosi'],
  //   partnerBrand: 'Gulf'
  // },

  // ═══════════════════════════════════════════════════════════════════════════
  // KATEGORI AUTOMOTIVE — MOTOR (Motorcycles)
  // ═══════════════════════════════════════════════════════════════════════════
  // COMMENTED OUT - TEMPORARILY HIDDEN
  // ── A. Oli Mesin Motor ─────────────────────────────────────────────────────
  // {
  //   id: 'gulf-syntrac',
  //   name: 'Gulf Syntrac',
  //   slug: 'gulf-syntrac',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/MCO_Syntrac_4T_10W40_Pack_1L_280x380_0.webp',
  //   categoryId: 'motor',
  //   subcategoryId: 'oli-mesin-motor',
  //   summary: 'Oli mesin sepeda motor Full Sintetik kelas atas untuk pelumasan maksimal motorsport pada suhu dan RPM luar biasa.',
  //   viscosityGrades: ['10W-40', '10W-50'],
  //   availablePacks: ['800ml', '1L'],
  //   specifications: ['API SN', 'JASO MA2'],
  //   approvals: ['Memenuhi spesifikasi manufaktur motor sport global'],
  //   applications: ['Motor sport', 'Motor touring jarak jauh', 'Superbike'],
  //   keyBenefits: ['Meningkatkan akselerasi dan penyaluran tenaga', 'Perlindungan gesekan kopling yang akurat', 'Stabilitas termal ekstrim'],
  //   partnerBrand: 'Gulf'
  // },
  // {
  //   id: 'gulf-syntrac-4t',
  //   name: 'Gulf Syntrac 4T',
  //   slug: 'gulf-syntrac-4t',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/MCO_Syntrac_4T_10W40_Pack_1L_280x380_0.webp',
  //   categoryId: 'motor',
  //   subcategoryId: 'oli-mesin-motor',
  //   summary: 'Oli mesin sintetik untuk motor 4-tak performa tinggi, memberikan perlindungan maksimal pada mesin, kopling, dan transmisi',
  //   viscosityGrades: ['10W-40', '10W-50'],
  //   availablePacks: ['800ml', '1L'],
  //   specifications: ['API SN', 'JASO MA2'],
  //   approvals: ['Standar motor sport internasional'],
  //   applications: ['Motor sport 4-tak', 'Motor touring berkinerja tinggi', 'Naked bike dan supermoto'],
  //   keyBenefits: ['Formulasi spesifik mesin 4-tak', 'Perlindungan kopling basah superior', 'Stabilitas viskositas pada RPM tinggi'],
  //   partnerBrand: 'Gulf'
  // },
  // {
  //   id: 'gulf-powertrac',
  //   name: 'Gulf Powertrac',
  //   slug: 'gulf-powertrac',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Pride_4T_Scooter_Plus_10W30_1L_280x380.webp',
  //   categoryId: 'motor',
  //   subcategoryId: 'oli-mesin-motor',
  //   summary: 'Pelumas semi-sintetik 4-tak yang dikembangkan secara spesifik untuk menjaga mesin bersih dan pergantian gigi mulus',
  //   viscosityGrades: ['10W-40', '15W-50'],
  //   availablePacks: ['800ml', '1L'],
  //   specifications: ['API SL', 'JASO MA2'],
  //   approvals: ['Didukung untuk mesin-mesin transmisi manual performa tinggi'],
  //   applications: ['Motor underbone', 'Motor harian/sport mid-range'],
  //   keyBenefits: ['Transisi kopling yang persisi', 'Melindungi komponen vital mesin', 'Mempertahankan performa operasional stabil'],
  //   partnerBrand: 'Gulf'
  // },
  // {
  //   id: 'gulf-pride',
  //   name: 'Gulf Pride',
  //   slug: 'gulf-pride',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Pride_4T_Scooter_Plus_10W30_1L_280x380.webp',
  //   categoryId: 'motor',
  //   subcategoryId: 'oli-mesin-motor',
  //   summary: 'Oli pelumas tangguh skuter matik dan motor bebek konvensional. Diformulasi spesial untuk kondisi stop & go.',
  //   viscosityGrades: ['10W-30', '10W-40', '20W-40'],
  //   availablePacks: ['800ml', '1L'],
  //   specifications: ['API SL', 'JASO MB (untuk matic)', 'JASO MA (untuk manual)'],
  //   approvals: ['-'],
  //   applications: ['Skuter matic', 'Motor bebek pekerja keras'],
  //   keyBenefits: ['Mengurangi panas mesin', 'Efisiensi bakar yang baik di kemacetan', 'Mengurangi deposit karbon'],
  //   partnerBrand: 'Gulf'
  // },
  // {
  //   id: 'gulf-pride-scooter-plus',
  //   name: 'Gulf Pride Scooter Plus',
  //   slug: 'gulf-pride-scooter-plus',
  //   image: 'https://assets.gulfoilltd.com/indonesia/files/2024-03/Pride_4T_Scooter_Plus_10W30_1L_280x380.webp',
  //   categoryId: 'motor',
  //   subcategoryId: 'oli-mesin-motor',
  //   summary: 'Oli mesin khusus skuter matik yang diformulasikan untuk perlindungan ekstra pada mesin CVT dan komponen otomatis skuter modern.',
  //   viscosityGrades: ['10W-30', '10W-40'],
  //   availablePacks: ['800ml', '1L'],
  //   specifications: ['API SL', 'JASO MB'],
  //   approvals: ['-'],
  //   applications: ['Skuter matic modern', 'Motor matic harian', 'Motor matic berkinerja tinggi'],
  //   keyBenefits: ['Formulasi khusus transmisi CVT', 'Menjaga kebersihan mesin matic', 'Efisiensi bahan bakar optimal untuk skuter'],
  //   partnerBrand: 'Gulf'
  // },

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
    applications: ['Truck heavy duty modern', 'Armada logistik jarak jauh', 'Bus antarkota'],
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
    summary: 'Pelumas anti-wear hidrolik yang diformulasikan dari basis minyak mineral kualitas super untuk aplikasi manufaktur dan industri mobilitas',
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
    summary: 'Oli sirkulasi dan bantalan yang dirancang untuk pelumasan berkelanjutan pada mesin industri presisi dan bearing berkecepatan tinggi',
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
    summary: 'Pelumas gemuk Lithium Complex serbaguna dengan ketahanan suhu tinggi dan kemampuan tahan air yang sangat baik',
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

  // ═══════════════════════════════════════════════════════════════════════════
  // KATEGORI SHANTUI — ALAT BERAT (Heavy Equipment)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── A. Mining Excavators ──────────────────────────────────────────────────
  {
    id: 'shantui-se2000',
    name: 'Shantui SE2000 Mining Excavator',
    slug: 'shantui-se2000',
    image: '/shantui/Shantui SE2000 Mining Excavator.png',
    categoryId: 'shantui',
    subcategoryId: 'mining-excavator',
    summary: 'Excavator pertambangan raksasa untuk operasional skala ekstrem dengan produktivitas tiada tanding.',
    specifications: ['Bobot Operasi: 200t', 'Daya Mesin: Eksklusif', 'Kapasitas Bucket: Ekstra Besar'],
    applications: ['Pertambangan Skala Besar', 'Ekskavasi Massal'],
    keyBenefits: ['Daya gali maksimum', 'Durabilitas struktur ekstrem', 'Efisiensi biaya per tonase'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se1500lcw',
    name: 'Shantui SE1500LCW',
    slug: 'shantui-se1500lcw',
    image: '/shantui/Shantui SE1500LCW.png',
    categoryId: 'shantui',
    subcategoryId: 'mining-excavator',
    summary: 'Unit pertambangan super berat dengan stabilitas luar biasa untuk medan galian yang sulit.',
    specifications: ['Bobot Operasi: 150t', 'Daya Mesin: 700+ kW', 'Kapasitas Bucket: 4.5 m³'],
    applications: ['Open Pit Mining', 'Mega Project'],
    keyBenefits: ['Stabilitas Tinggi', 'Power Superior', 'Teknologi Hidrolik Canggih'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se1250lcw',
    name: 'Shantui SE1250LCW',
    slug: 'shantui-se1250lcw',
    image: '/shantui/Shantui SE1250LCW.png',
    categoryId: 'shantui',
    subcategoryId: 'mining-excavator',
    summary: 'Solusi ekskavasi mining performa tinggi dengan teknologi kontrol hidrolik tercanggih.',
    specifications: ['Bobot Operasi: 125t', 'Daya Mesin: 600 kW', 'Kapasitas Bucket: 3.8 m³'],
    applications: ['Pertambangan Medium-Besar', 'Proyek Infrastruktur'],
    keyBenefits: ['Kontrol Hidrolik Tercanggih', 'Efisiensi Energi Tinggi', 'Operator Comfort'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se980lcw',
    name: 'Shantui SE980LCW',
    slug: 'shantui-se980lcw',
    image: '/shantui/Shantui SE980LCW.png',
    categoryId: 'shantui',
    subcategoryId: 'mining-excavator',
    summary: 'Excavator pertambangan berkapasitas 98 ton dengan stabilitas operasional superior.',
    specifications: ['Bobot Operasi: 98t', 'Daya Mesin: 500 kW', 'Kapasitas Bucket: 3.0 m³'],
    applications: ['Pertambangan Skala Menengah', 'Konstruksi Besar'],
    keyBenefits: ['Fleksibilitas Tinggi', 'Operasional Handal', 'Maintenance Mudah'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se800lcw',
    name: 'Shantui SE800LCW',
    slug: 'shantui-se800lcw',
    image: '/shantui/Shantui SE800LCW.png',
    categoryId: 'shantui',
    subcategoryId: 'mining-excavator',
    summary: 'Excavator pertambangan 80 ton dengan performa stabil untuk berbagai medan.',
    specifications: ['Bobot Operasi: 80t', 'Daya Mesin: 420 kW', 'Kapasitas Bucket: 2.5 m³'],
    applications: ['Pertambangan Medium', 'Konstruksi Jalan'],
    keyBenefits: ['Produktivitas Tinggi', 'Konsumsi Bahan Bakar Efisien', 'Durabilitas Terjamin'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se750lcw',
    name: 'Shantui SE750LCW',
    slug: 'shantui-se750lcw',
    image: '/shantui/escavator/mining.png',
    categoryId: 'shantui',
    subcategoryId: 'mining-excavator',
    summary: 'Excavator 75 ton dengan teknologi terkini untuk operasi pertambangan efisien.',
    specifications: ['Bobot Operasi: 75t', 'Daya Mesin: 400 kW', 'Kapasitas Bucket: 2.3 m³'],
    applications: ['Pertambangan Batu/Mineral', 'Ekskavasi Lahan'],
    keyBenefits: ['Hemat Bahan Bakar', 'Sistem Keamanan Canggih', 'Komponen Berkualitas'],
    partnerBrand: 'Shantui'
  },

  // ── B. Mini Excavators (≤ 6 Ton) ──────────────────────────────────────────
  {
    id: 'shantui-se17sr',
    name: 'Shantui SE17SR',
    slug: 'shantui-se17sr',
    image: '/shantui/escavator/small.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Mini excavator kompak dengan performa tinggi untuk pekerjaan presisi di area terbatas.',
    specifications: ['Operating Weight: 1,800 kg', 'Bucket Capacity: 0.04 m³', 'Engine Power: 11.8 kW'],
    applications: ['Pekerjaan konstruksi dalam ruangan', 'Landscape dan taman', 'Proyek kecil dengan akses terbatas'],
    keyBenefits: ['Ukuran Kompak', 'Presisi Tinggi', 'Akses Terbatas Terjangkau'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se26sr',
    name: 'Shantui SE26SR',
    slug: 'shantui-se26sr',
    image: '/shantui/escavator/Shantui SE26SR.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Excavator mini bertenaga dengan kapasitas bucket lebih besar untuk efisiensi operasional.',
    specifications: ['Operating Weight: 2,600 kg', 'Bucket Capacity: 0.06 m³', 'Engine Power: 18.2 kW'],
    applications: ['Konstruksi umum', 'Penggalian dan demolisi ringan', 'Pekerjaan utilitas'],
    keyBenefits: ['Kapasitas Lebih Besar', 'Efisiensi Operasional', 'Versatilitas Tinggi'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se35sr',
    name: 'Shantui SE35SR',
    slug: 'shantui-se35sr',
    image: '/shantui/escavator/small.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Mini excavator unggul dengan daya gali yang kuat untuk berbagai kondisi proyek.',
    specifications: ['Operating Weight: 3,860 kg', 'Bucket Capacity: 0.11 m³', 'Engine Power: 18.2 kW'],
    applications: ['Konstruksi infrastruktur ringan', 'Pertambanagn skala kecil', 'Pekerjaan persiapan lahan'],
    keyBenefits: ['Daya Gali Kuat', 'Serbaguna', 'Hemat Energi'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se60-9',
    name: 'Shantui SE60-9',
    slug: 'shantui-se60-9',
    image: '/shantui/escavator/small.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Excavator mini performa ekstrem dengan teknologi hidrolik canggih.',
    specifications: ['Operating Weight: 5,960 kg', 'Bucket Capacity: 0.22 m³', 'Engine Power: 36 kW'],
    applications: ['Konstruksi menengah', 'Penggalian tanah dalam', 'Proyek pembangunan'],
    keyBenefits: ['Performa Ekstrem', 'Teknologi Hidrolik Canggih', 'Keandalan Tinggi'],
    partnerBrand: 'Shantui'
  },

  // ── B1. Small Excavators (6 – 12 Ton) ───────────────────────────────────────
  {
    id: 'shantui-se12sr',
    name: 'Shantui SE12SR',
    slug: 'shantui-se12sr',
    image: 'https://www.shantui-eu.com/upload/images/2025/03/26/ac80e4b413dd458998b7457063dbf990.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Mini excavator super kecil untuk pekerjaan presisi di ruang terbatas dan operasi indoor.',
    specifications: ['Operating Weight: 1,200 kg', 'Bucket Capacity: 0.04 m³', 'Engine Power: 9 kW'],
    applications: ['Pekerjaan indoor', 'Landscape presisi', 'Ruang sangat terbatas'],
    keyBenefits: ['Ultra Kompak', 'Presisi Maksimal', 'Efisiensi Energi'],
    partnerBrand: 'Shantui'
  },

  {
    id: 'shantui-se18sr',
    name: 'Shantui SE18SR',
    slug: 'shantui-se18sr',
    image: 'https://www.shantui-eu.com/upload/images/2023/06/26/7b2b88ec13d64e9786e416646911ff66.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Excavator kecil dengan performa balanced untuk aplikasi konstruksi umum.',
    specifications: ['Operating Weight: 1,850 kg', 'Bucket Capacity: 0.05 m³', 'Engine Power: 13 kW'],
    applications: ['Konstruksi umum', 'Penggalian ringan', 'Proyek persiapan lahan'],
    keyBenefits: ['Performa Seimbang', 'Daya Tarik Stabil', 'Fleksibilitas Operasi'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se20ei',
    name: 'Shantui SE20Ei (Listrik)',
    slug: 'shantui-se20ei',
    image: 'https://www.shantui-eu.com/upload/images/2023/12/12/97c00c6557444fceb4e064d84e938b02.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Excavator kecil listrik ramah lingkungan dengan emisi nol untuk pekerjaan indoor berkelanjutan.',
    specifications: ['Operating Weight: 2,100 kg', 'Bucket Capacity: 0.06 m³', 'Power: 15 kW (Listrik)'],
    applications: ['Konstruksi indoor', 'Area perkotaan', 'Proyek green-aware'],
    keyBenefits: ['Emisi Nol', 'Ramah Lingkungan', 'Operasi Senyap'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se20',
    name: 'Shantui SE20',
    slug: 'shantui-se20',
    image: 'https://www.shantui-eu.com/upload/images/2026/02/10/0bb8d29df23a4e4d917a6ef333b3352a.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Excavator kecil versatile dengan teknologi terkini untuk berbagai aplikasi konstruksi.',
    specifications: ['Operating Weight: 2,000 kg', 'Bucket Capacity: 0.06 m³', 'Engine Power: 14.8 kW'],
    applications: ['Konstruksi multi-fungsi', 'Penggalian dan penimbunan', 'Proyek infrastruktur ringan'],
    keyBenefits: ['Teknologi Terbaru', 'Versatilitas Tinggi', 'Efisiensi Premium'],
    partnerBrand: 'Shantui'
  },

  {
    id: 'shantui-se27sr',
    name: 'Shantui SE27SR',
    slug: 'shantui-se27sr',
    image: 'https://www.shantui-eu.com/upload/images/2023/06/26/177e98a402c846c9b85a22cbd991ffe3.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Excavator kecil kompak dengan daya andal untuk aplikasi konstruksi beragam.',
    specifications: ['Operating Weight: 2,700 kg', 'Bucket Capacity: 0.07 m³', 'Engine Power: 19 kW'],
    applications: ['Konstruksi beragam', 'Penggalian lahan', 'Proyek persiapan'],
    keyBenefits: ['Daya Andal', 'Kompak Efisien', 'Performa Stabil'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se36sr',
    name: 'Shantui SE36SR',
    slug: 'shantui-se36sr',
    image: 'https://www.shantui-eu.com/upload/images/2023/06/26/222cf39d8cef4dbebf8e6abf9ffca1ba.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Excavator kecil unggul dengan daya gali kuat untuk berbagai kondisi proyek.',
    specifications: ['Operating Weight: 3,860 kg', 'Bucket Capacity: 0.11 m³', 'Engine Power: 18.2 kW'],
    applications: ['Konstruksi infrastruktur', 'Pertambangan kecil', 'Persiapan lahan'],
    keyBenefits: ['Daya Gali Kuat', 'Serbaguna', 'Hemat Energi'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se58sr',
    name: 'Shantui SE58SR',
    slug: 'shantui-se58sr',
    image: 'https://www.shantui-eu.com/upload/images/2025/03/13/ab71dd3e25da4512979fcb750a84b54c.png',
    categoryId: 'shantui',
    subcategoryId: 'mini-excavator',
    summary: 'Excavator kecil berperforma tinggi dengan teknologi hidrolik canggih untuk operasi produktif.',
    specifications: ['Operating Weight: 5,800 kg', 'Bucket Capacity: 0.21 m³', 'Engine Power: 35 kW'],
    applications: ['Konstruksi menengah', 'Penggalian dalam', 'Proyek produktif'],
    keyBenefits: ['Performa Tinggi', 'Teknologi Canggih', 'Produktivitas Maksimal'],
    partnerBrand: 'Shantui'
  },


  // ── C. Medium Excavators (6 – 25 Ton) ───────────────────────────────────────
  {
    id: 'shantui-se75-9',
    name: 'Shantui SE75-9',
    slug: 'shantui-se75-9',
    image: '/shantui/escavator/medium.png',
    categoryId: 'shantui',
    subcategoryId: 'small-excavator',
    summary: 'Excavator medium tangguh untuk proyek konstruksi dan pertambangan moderat.',
    specifications: ['Operating Weight: 7,650 kg', 'Bucket Capacity: 0.32 m³', 'Engine Power: 48 kW'],
    applications: ['Konstruksi komersial', 'Quarry dan penambangan', 'Infrastruktur'],
    keyBenefits: ['Ketangguhan Tinggi', 'Efisiensi Biaya', 'Keandalan Operasional'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se135-9',
    name: 'Shantui SE135-9',
    slug: 'shantui-se135-9',
    image: '/shantui/escavator/medium.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-excavator',
    summary: 'Excavator performa tinggi dengan kapasitas penggalian superior untuk proyek berskala besar.',
    specifications: ['Operating Weight: 13,500 kg', 'Bucket Capacity: 0.55 m³', 'Engine Power: 86 kW'],
    applications: ['Proyek infrastruktur', 'Pertambangan batubara dan mineral', 'Konstruksi bangunan besar'],
    keyBenefits: ['Kapasitas Penggalian Superior', 'Performa Tinggi', 'Durabilitas Luar Biasa'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se215-9',
    name: 'Shantui SE215-9',
    slug: 'shantui-se215-9',
    image: '/shantui/escavator/medium.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-excavator',
    summary: 'Excavator medium besar dengan efisiensi bahan bakar optimal untuk operasi berkelanjutan.',
    specifications: ['Operating Weight: 21,500 kg', 'Bucket Capacity: 1.0 m³', 'Engine Power: 128.5 kW'],
    applications: ['Pertambangan skala menengah', 'Proyek infrastruktur besar', 'Demolisi dan reklamasi'],
    keyBenefits: ['Efisiensi Bahan Bakar Optimal', 'Operasi Berkelanjutan', 'Produktivitas Tinggi'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se215lcw',
    name: 'Shantui SE215LCW',
    slug: 'shantui-se215lcw',
    image: '/shantui/escavator/medium.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-excavator',
    summary: 'Excavator dengan jangkauan panjang dan bucket berkapasitas besar untuk kedalaman maksimal.',
    specifications: ['Operating Weight: 21,800 kg', 'Bucket Capacity: 1.1 m³', 'Engine Power: 128.5 kW'],
    applications: ['Penggalian dalam dan digging', 'Pertambangan underground', 'Proyek dengan kedalaman khusus'],
    keyBenefits: ['Jangkauan Panjang', 'Kedalaman Maksimal', 'Kapasitas Besar'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se245lc',
    name: 'Shantui SE245LC',
    slug: 'shantui-se245lc',
    image: '/shantui/escavator/medium.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-excavator',
    summary: 'Excavator medium dengan teknologi tercanggih dan stabilitas operasional superior',
    specifications: ['Operating Weight: 24,500 kg', 'Bucket Capacity: 1.2 m³', 'Engine Power: 147 kW'],
    applications: ['Pertambangan skala besar', 'Proyek sipil kompleks', 'Konstruksi infrastruktur'],
    keyBenefits: ['Teknologi Tercanggih', 'Stabilitas Superior', 'Power Maksimal'],
    partnerBrand: 'Shantui'
  },

  // ── D. Large Excavators (≥ 30 Ton) ──────────────────────────────────────────
  {
    id: 'shantui-se300lc',
    name: 'Shantui SE300LC',
    slug: 'shantui-se300lc',
    image: '/shantui/escavator/large.png',
    categoryId: 'shantui',
    subcategoryId: 'large-excavator',
    summary: 'Excavator besar dengan performa mining-grade untuk operasi pertambangan profesional.',
    specifications: ['Operating Weight: 30,500 kg', 'Bucket Capacity: 1.5 m³', 'Engine Power: 180 kW'],
    applications: ['Pertambangan berskala besar', 'Penggalian infrastruktur masif', 'Proyek konstruksi strategis'],
    keyBenefits: ['Performa Mining-Grade', 'Kapabilitas Profesional', 'Daya Gali Luar Biasa'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se370lc',
    name: 'Shantui SE370LC',
    slug: 'shantui-se370lc',
    image: '/shantui/escavator/large.png',
    categoryId: 'shantui',
    subcategoryId: 'large-excavator',
    summary: 'Excavator jumbo dengan daya gali luar biasa untuk pertambangan dan konstruksi ekstrem.',
    specifications: ['Operating Weight: 36,800 kg', 'Bucket Capacity: 1.8 m³', 'Engine Power: 212 kW'],
    applications: ['Pertambangan batubara utama', 'Proyek infrastruktur skala nasional', 'Konstruksi bendungan'],
    keyBenefits: ['Daya Gali Luar Biasa', 'Kapasitas Jumbo', 'Ketangguhan Ekstrem'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se470lc',
    name: 'Shantui SE470LC',
    slug: 'shantui-se470lc',
    image: '/shantui/escavator/large.png',
    categoryId: 'shantui',
    subcategoryId: 'large-excavator',
    summary: 'Excavator mega dengan kapasitas bucket raksasa untuk operasi pertambangan maksimal.',
    specifications: ['Operating Weight: 47,000 kg', 'Bucket Capacity: 2.2 m³', 'Engine Power: 250 kW'],
    applications: ['Pertambangan open pit', 'Proyek sipil infrastruktur megah', 'Konstruksi bendungan besar'],
    keyBenefits: ['Kapasitas Raksasa', 'Operasi Maksimal', 'Teknologi Terdepan'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-se650lc',
    name: 'Shantui SE650LC',
    slug: 'shantui-se650lc',
    image: '/shantui/escavator/large.png',
    categoryId: 'shantui',
    subcategoryId: 'large-excavator',
    summary: 'Excavator terbesar dengan teknologi terdepan untuk pertambangan kelas world-class.',
    specifications: ['Operating Weight: 65,000 kg', 'Bucket Capacity: 3.5 m³', 'Engine Power: 350 kW'],
    applications: ['Pertambangan skala internasional', 'Proyek infrastruktur megah', 'Konstruksi bangunan tertinggi'],
    keyBenefits: ['Teknologi World-Class', 'Kapasitas Terbesar', 'Performa Internasional'],
    partnerBrand: 'Shantui'
  },

  // ── E. Wheel Excavators ────────────────────────────────────────────────────
  {
    id: 'shantui-se140w',
    name: 'Shantui SE140W',
    slug: 'shantui-se140w',
    image: '/shantui/escavator/wheel.png',
    categoryId: 'shantui',
    subcategoryId: 'wheel-excavator',
    summary: 'Excavator beroda dengan mobilitas tinggi untuk operasi konstruksi cepat di berbagai lokasi.',
    specifications: ['Operating Weight: 14,000 kg', 'Bucket Capacity: 0.6 m³', 'Engine Power: 92 kW'],
    applications: ['Konstruksi jalan', 'Penggalian lahan', 'Proyek mobil berkecepatan tinggi'],
    keyBenefits: ['Mobilitas Tinggi', 'Setup Cepat', 'Fleksibilitas Lokasi'],
    partnerBrand: 'Shantui'
  },

  // ═════════════════════════════════════════════════════════════════════════════
  // BULLDOZERS (SHANTUI)
  // ═════════════════════════════════════════════════════════════════════════════

  // ── A. Small Bulldozers ────────────────────────────────────────────────────
  {
    id: 'shantui-sd13',
    name: 'Shantui SD13',
    slug: 'shantui-sd13',
    image: 'https://www.shantui-global.com/upload/images/2023/07/03/8f5b7275527249f29f8dff7814a039f0.png',
    categoryId: 'shantui',
    subcategoryId: 'small-bulldozer',
    summary: 'Bulldozer kecil bertenaga dengan kapasitas blade optimal untuk pekerjaan presisi.',
    specifications: ['Operating Weight: 13,700 kg', 'Engine Power: 105 kW @ 1900 rpm', 'Blade Capacity: 3 / 2.5 m³'],
    applications: ['Pekerjaan konstruksi ringan', 'Persiapan lahan kecil', 'Penimbunan dan perataan'],
    keyBenefits: ['Efisiensi Biaya', 'Maneuver Presisi', 'Konsumsi Bahan Bakar Ekonomis'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-sd16',
    name: 'Shantui SD16',
    slug: 'shantui-sd16',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/828e0b3bb63048289a2cd81455691a73.png',
    categoryId: 'shantui',
    subcategoryId: 'small-bulldozer',
    summary: 'Bulldozer kompak dengan daya dorong tinggi untuk aplikasi konstruksi umum.',
    specifications: ['Operating Weight: 16,400 kg', 'Engine Power: 131 kW @ 1850 rpm', 'Blade Capacity: 3.2 / 4.8 m³'],
    applications: ['Konstruksi komersial', 'Penggalian dan penimbunan', 'Pekerjaan infrastruktur ringan'],
    keyBenefits: ['Performa Andal', 'Kapasitas Blade Bervariasi', 'Teknologi Hemat Bahan Bakar'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-dh08-b3-xl',
    name: 'Shantui DH08-B3 XL',
    slug: 'shantui-dh08-b3-xl',
    image: 'https://www.shantui-global.com/upload/images/2023/06/27/424ae95fa5a5401d9835769376c8d6c1.png',
    categoryId: 'shantui',
    subcategoryId: 'small-bulldozer',
    summary: 'Mini bulldozer beroda berpita ultra kecil untuk akses terbatas dan pekerjaan presisi.',
    specifications: ['Operating Weight: 9,580 kg', 'Engine Power: 70 kW @ 2200 rpm', 'Blade Capacity: 1.93 m³'],
    applications: ['Pekerjaan indoor dan ruang sempit', 'Landscape profesional', 'Proyek dengan akses terbatas'],
    keyBenefits: ['Ukuran Ultra Kecil', 'Presisi Tinggi', 'Fleksibilitas Operasional'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-dh13-k2-lgp',
    name: 'Shantui DH13-K2 LGP',
    slug: 'shantui-dh13-k2-lgp',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/5e7a3d64b94a44548f6e22875def8c56.png',
    categoryId: 'shantui',
    subcategoryId: 'small-bulldozer',
    summary: 'Bulldozer low ground pressure untuk operasi di medan sensitif dan konstruksi ringan.',
    specifications: ['Operating Weight: 14,800 kg', 'Engine Power: 118 kW @ 2200 rpm', 'Blade Capacity: 3.87 m³'],
    applications: ['Penggalian lahan pertanian', 'Konstruksi di area sensitif', 'Pekerjaan dengan tekanan rendah'],
    keyBenefits: ['Tekanan Tanah Rendah', 'Kapasitas Blade Besar', 'Mobilitas Tinggi'],
    partnerBrand: 'Shantui'
  },

  // ── B. Medium Bulldozers ──────────────────────────────────────────────────
  {
    id: 'shantui-sd17-b3-xl',
    name: 'Shantui SD17-B3 XL',
    slug: 'shantui-sd17-b3-xl',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/4160847ed38548448b7217ff0f5575a2.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium dengan teknologi engine terbaru untuk efisiensi bahan bakar maksimal.',
    specifications: ['Operating Weight: 16,800 kg', 'Engine Power: 140 kW @ 1900 rpm', 'Blade Capacity: 3.2 m³'],
    applications: ['Konstruksi infrastruktur', 'Proyek pembangunan', 'Pekerjaan penambangan medium'],
    keyBenefits: ['Engine Terbaru', 'Efisiensi Bahan Bakar', 'Performa Stabil'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-dh16-c3-xl',
    name: 'Shantui DH16-C3 XL',
    slug: 'shantui-dh16-c3-xl',
    image: 'https://www.shantui-global.com/upload/images/2023/06/28/723f7eefa822431eaa01c8900a95ff1b.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium berbeban penuh dengan ripper terintegrasi untuk pekerjaan demolitif.',
    specifications: ['Operating Weight: 18,237 / 19,791 kg (dengan ripper)', 'Engine Power: 152 kW @ 1800 rpm', 'Blade Capacity: 4.0 m³'],
    applications: ['Demolisi dan penggalian', 'Konstruksi jalan besar', 'Proyek infrastruktur strategis'],
    keyBenefits: ['Ripper Terintegrasi', 'Performa Demolisi', 'Daya Dorong Maksimal'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-dh17-c3-xl',
    name: 'Shantui DH17-C3 XL',
    slug: 'shantui-dh17-c3-xl',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/609c1edb7ab9469ba42e07e71068b765.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium hybrid dengan kapasitas blade fleksibel untuk berbagai aplikasi.',
    specifications: ['Operating Weight: 17,730 kg', 'Engine Power: 152 kW @ 1800 rpm', 'Blade Capacity: 3.2 / 3.8 m³'],
    applications: ['Konstruksi multi-fungsi', 'Penggalian dan penimbunan', 'Pekerjaan infrastruktur'],
    keyBenefits: ['Kapasitas Fleksibel', 'Performa Tinggi', 'Operasi Serbaguna'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-sd22',
    name: 'Shantui SD22',
    slug: 'shantui-sd22',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/9c764592890e487c9ece5e9f84a039f0.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium berperforma tinggi dengan daya dorong superior untuk proyek besar.',
    specifications: ['Operating Weight: 23,450 kg', 'Engine Power: 175 kW @ 1800 rpm', 'Blade Capacity: 4.6 m³'],
    applications: ['Proyek infrastruktur besar', 'Konstruksi jalan dan bendungan', 'Pekerjaan pertambangan medium'],
    keyBenefits: ['Daya Dorong Luar Biasa', 'Stabilitas Superior', 'Efisiensi Opesional'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-sd22s',
    name: 'Shantui SD22S',
    slug: 'shantui-sd22s',
    image: 'https://www.shantui-global.com/upload/images/2023/06/28/febca4fbeaae4b8b802b8f791bff8040.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium stretch dengan kapasitas blade jumbo untuk volume penggalian maksimal.',
    specifications: ['Operating Weight: 25,700 kg', 'Engine Power: 175 kW @ 1800 rpm', 'Blade Capacity: 5.2 m³'],
    applications: ['Penggalian volume besar', 'Konstruksi bendungan', 'Proyek infrastruktur megah'],
    keyBenefits: ['Kapasitas Blade Jumbo', 'Volume Penggalian Maksimal', 'Stabilitas Tinggi'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-sd22r',
    name: 'Shantui SD22R',
    slug: 'shantui-sd22r',
    image: 'https://www.shantui-global.com/upload/images/2023/06/28/ee63c6b4fd984609854514b4d675bb46.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium dengan blade rippers untuk kapasitas penggalian ultra besar.',
    specifications: ['Operating Weight: 26,000 kg', 'Engine Power: 175 kW @ 1800 rpm', 'Blade Capacity: 11.8 m³'],
    applications: ['Penggalian batu keras', 'Konstruksi pemindahan tanah masif', 'Proyek pertambangan besar'],
    keyBenefits: ['Kapasitas Ultra Besar', 'Teknologi Ripper', 'Performa Maksimal'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-sd26',
    name: 'Shantui SD26',
    slug: 'shantui-sd26',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/7f18b35301c24a3eb2ec76e877c1dd52.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium berat dengan kapasitas multi-blade untuk proyek infrastruktur kompleks.',
    specifications: ['Operating Weight: 23,450 kg', 'Engine Power: 206 kW @ 1900 rpm', 'Blade Capacity: 4.6 / 3.4 / 5.8 / 6.7 m³'],
    applications: ['Konstruksi infrastruktur kompleks', 'Proyek pertambangan besar', 'Pembangunan bendungan'],
    keyBenefits: ['Kapasitas Multi-Blade', 'Fleksibilitas Tinggi', 'Performa Power Besar'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-sd26-b3-xl',
    name: 'Shantui SD26-B3 XL',
    slug: 'shantui-sd26-b3-xl',
    image: 'https://www.shantui-global.com/upload/images/2025/07/12/b5796fb3784f495485c9b8f1c761d3fa.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium berat dengan engine options untuk fleksibilitas operasional maksimal.',
    specifications: ['Operating Weight: 24,200 kg', 'Engine Power: 195 kW @ 1900 (WP13) / 187 kW @ 1850 (NT855-C280)', 'Blade Capacity: 7 m³'],
    applications: ['Proyek infrastruktur besar', 'Konstruksi bendungan', 'Pertambangan skala besar'],
    keyBenefits: ['Engine Options Fleksibel', 'Kapasitas Blade Besar', 'Reliabilitas Tinggi'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-sd26-c3-xl',
    name: 'Shantui SD26-C3 XL',
    slug: 'shantui-sd26-c3-xl',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/7679af656f114ee89312fc86871cd352.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium berat dengan teknologi kontrol canggih untuk presisi operasional.',
    specifications: ['Operating Weight: 24,200 kg', 'Engine Power: 206 kW @ 1900 rpm', 'Blade Capacity: 6.7 m³'],
    applications: ['Konstruksi infrastruktur presisi', 'Proyek pembangunan besar', 'Pertambangan modern'],
    keyBenefits: ['Teknologi Kontrol Canggih', 'Presisi Operasional', 'Efisiensi Energi'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-dh20-m-xl',
    name: 'Shantui DH20-M XL',
    slug: 'shantui-dh20-m-xl',
    image: 'https://www.shantui-global.com/upload/images/2023/06/28/c80d7fb0b81c4fb783d9ea3eff412199.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium dengan performa tinggi untuk aplikasi pertambangan dan konstruksi.',
    specifications: ['Operating Weight: 22,200 kg', 'Engine Power: 186 kW @ 2050 rpm', 'Blade Capacity: 5.0 m³'],
    applications: ['Pertambangan skala menengah', 'Konstruksi jalan besar', 'Proyek infrastruktur'],
    keyBenefits: ['Performa Tinggi', 'Mobilitas Superior', 'Daya Tarik Kuat'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-dh24-c3-xl',
    name: 'Shantui DH24-C3 XL',
    slug: 'shantui-dh24-c3-xl',
    image: 'https://www.shantui-global.com/upload/images/2025/11/19/ec384468b61a4426bc6ab633337e7f56.png',
    categoryId: 'shantui',
    subcategoryId: 'medium-bulldozer',
    summary: 'Bulldozer medium berat berteknologi terbaru dengan kapasitas blade optimal.',
    specifications: ['Operating Weight: 23,820 kg', 'Engine Power: 195 kW @ 1900 rpm', 'Blade Capacity: 6.5 m³'],
    applications: ['Konstruksi jalan berkualitas', 'Proyek pertambangan besar', 'Pembangunan infrastruktur'],
    keyBenefits: ['Teknologi Terbaru', 'Kapasitas Optimal', 'Keandalan Terjamin'],
    partnerBrand: 'Shantui'
  },

  // ── C. Large Bulldozers ────────────────────────────────────────────────────
  {
    id: 'shantui-sd32',
    name: 'Shantui SD32',
    slug: 'shantui-sd32',
    image: 'public/shantui/Shantui SD32.png',
    categoryId: 'shantui',
    subcategoryId: 'large-bulldozer',
    summary: 'Bulldozer besar dengan daya dorong super untuk proyek infrastruktur kelas dunia.',
    specifications: ['Operating Weight: 39,700 kg', 'Engine Power: 257 kW @ 2000 rpm', 'Blade Capacity: 7.2 / 4.8 / 9 m³'],
    applications: ['Pertambangan skala besar', 'Konstruksi bendungan megah', 'Proyek infrastruktur nasional'],
    keyBenefits: ['Daya Dorong Super', 'Kapasitas Multi-Blade', 'Teknologi Terdepan'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-sd34-c3-ds',
    name: 'Shantui SD34-C3 DS',
    slug: 'shantui-sd34-c3-ds',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/dbb467738f424e6ca0bccf0db31ace53.png',
    categoryId: 'shantui',
    subcategoryId: 'large-bulldozer',
    summary: 'Bulldozer terbesar dengan blade rippers untuk penggalian batu keras ekstrem.',
    specifications: ['Operating Weight: 36,000 kg', 'Engine Power: 258 kW @ 2000 rpm', 'Blade Capacity: 10 m³'],
    applications: ['Penggalian batu keras ekstrem', 'Pertambangan skala mentah', 'Proyek infrastruktur megah'],
    keyBenefits: ['Kapasitas Blade Terbesar', 'Ripper Power Ekstrem', 'Performa World-Class'],
    partnerBrand: 'Shantui'
  },

  // ═════════════════════════════════════════════════════════════════════════════
  // WHEEL LOADERS (SHANTUI)
  // ═════════════════════════════════════════════════════════════════════════════

  {
    id: 'shantui-wl16',
    name: 'Shantui WL16',
    slug: 'shantui-wl16',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/828e0b3bb63048289a2cd81455691a73.png',
    categoryId: 'shantui',
    subcategoryId: 'wheel-loader',
    summary: 'Wheel loader kompak dengan kapasitas bucket optimal untuk pekerjaan konstruksi ringan hingga menengah.',
    specifications: ['Operating Weight: 16,400 kg', 'Bucket Capacity: 0.9 m³', 'Engine Power: 105 kW'],
    applications: ['Konstruksi umum', 'Penimbunan dan penggalian', 'Pekerjaan infrastruktur ringan'],
    keyBenefits: ['Maneuver Presisi', 'Efisiensi Bahan Bakar', 'Operasi Serbaguna'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-wl16h',
    name: 'Shantui WL16H',
    slug: 'shantui-wl16h',
    image: 'https://www.shantui-global.com/upload/images/2023/06/29/f9c34abff1c845d3b4c986ef6ec57e4c.png',
    categoryId: 'shantui',
    subcategoryId: 'wheel-loader',
    summary: 'Wheel loader medium dengan daya dorong tinggi dan jangkauan bucket lebih dalam.',
    specifications: ['Operating Weight: 18,200 kg', 'Bucket Capacity: 1.1 m³', 'Engine Power: 118 kW'],
    applications: ['Pertambangan skala menengah', 'Konstruksi jalan', 'Pelabuhan dan dermaga'],
    keyBenefits: ['Kapasitas Bucket Besar', 'Daya Dorong Tinggi', 'Stabilitas Superior'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-wl18',
    name: 'Shantui WL18',
    slug: 'shantui-wl18',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/34e8a56718554d0a9c584f87655adc28.png',
    categoryId: 'shantui',
    subcategoryId: 'wheel-loader',
    summary: 'Wheel loader terpercaya dengan performa stabil untuk berbagai aplikasi pertambangan dan konstruksi.',
    specifications: ['Operating Weight: 22,000 kg', 'Bucket Capacity: 1.3 m³', 'Engine Power: 140 kW'],
    applications: ['Pertambangan batubara', 'Proyek konstruksi besar', 'Pemindahan material massal'],
    keyBenefits: ['Produktivitas Tinggi', 'Hemat Energi', 'Durabilitas Terjamin'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-wl20',
    name: 'Shantui WL20',
    slug: 'shantui-wl20',
    image: 'https://www.shantui-global.com/upload/images/2023/06/26/92657a4c2521487b93327120e7d470ae.png',
    categoryId: 'shantui',
    subcategoryId: 'wheel-loader',
    summary: 'Wheel loader berperforma tinggi dengan teknologi terbaru untuk operasional efisien.',
    specifications: ['Operating Weight: 23,500 kg', 'Bucket Capacity: 1.5 m³', 'Engine Power: 152 kW'],
    applications: ['Pertambangan skala besar', 'Konstruksi infrastruktur kompleks', 'Penggalian lahan masif'],
    keyBenefits: ['Teknologi Canggih', 'Efisiensi Operasional', 'Keandalan Maksimal'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-wl26',
    name: 'Shantui WL26',
    slug: 'shantui-wl26',
    image: 'https://www.shantui-global.com/upload/images/2023/06/29/ee67c1ea625440e6bbae5c410512d84a.png',
    categoryId: 'shantui',
    subcategoryId: 'wheel-loader',
    summary: 'Wheel loader besar dengan kapasitas bucket jumbo untuk operasi pertambangan profesional.',
    specifications: ['Operating Weight: 26,000 kg', 'Bucket Capacity: 1.8 m³', 'Engine Power: 175 kW'],
    applications: ['Pertambangan skala internasional', 'Proyek infrastruktur megah', 'Pemindahan material ekstrem'],
    keyBenefits: ['Kapasitas Jumbo', 'Performa Ekstrem', 'Teknologi World-Class'],
    partnerBrand: 'Shantui'
  },
  
  // ── F. Mining Trucks ───────────────────────────────────────────────────────
  {
    id: 'shantui-sk95-c2a',
    name: 'Shantui SK95-C2A Mining Truck',
    slug: 'shantui-sk95-c2a',
    image: 'https://www.shantui-global.com/upload/images/2023/06/27/872e926960f54868973addd1808d2467.png',
    categoryId: 'shantui',
    subcategoryId: 'mining-truck',
    summary: 'Mining truck tangguh dengan kapasitas muat 62 ton untuk operasional pertambangan intensif yang efisien.',
    specifications: [
      'Machine Weight: 100,000 kg',
      'Load Capacity: 62,000 kg',
      'Engine Power: 390 kW / 2100 rpm',
      'Transmission: FC6A250',
      'Tire: 16.00-25',
      'Emissions: Eu Stage IIIA'
    ],
    applications: ['Pertambangan Terbuka', 'Pengangkutan Material Berat', 'Quarry'],
    keyBenefits: ['Daya angkut optimal', 'Durabilitas tinggi di medan ekstrem', 'Efisiensi biaya operasional'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-sk105-c2',
    name: 'Shantui SK105-C2 Mining Truck',
    slug: 'shantui-sk105-c2',
    image: 'https://www.shantui-global.com/upload/images/2023/06/27/9eb6329c4e7846c5a6573eec09bc16de.png',
    categoryId: 'shantui',
    subcategoryId: 'mining-truck',
    summary: 'Mining truck performa tinggi dengan kapasitas muat 70 ton untuk produktivitas maksimal di area tambang.',
    specifications: [
      'Machine Weight: 105,000 kg',
      'Load Capacity: 70,000 kg',
      'Engine Power: 390 kW / 2100 rpm',
      'Transmission: 8DS240A',
      'Fuel Tank: 600 L',
      'Tire: 16.00-25'
    ],
    applications: ['Produksi Tambang Skala Besar', 'Hauling Jarak Menengah', 'Operasi 24/7'],
    keyBenefits: ['Kapasitas beban superior', 'Stabilitas tinggi saat bermuatan penuh', 'Inter-axle differential lock'],
    partnerBrand: 'Shantui'
  },
  {
    id: 'shantui-teh160',
    name: 'Shantui TEH160 Mining Truck (Electric Drive)',
    slug: 'shantui-teh160',
    image: 'https://www.shantui.com/upload/images/2024/12/17/2a06979f91d747838ae58c191fb4a735.png',
    categoryId: 'shantui',
    subcategoryId: 'mining-truck',
    summary: 'Mining truck bertenaga listrik (Electric Drive) dengan kapasitas muat raksasa 140 ton, ramah lingkungan dan efisien tinggi.',
    specifications: [
      'Machine Weight: 112,000 kg',
      'Load Capacity: 140,000 kg',
      'Engine Power: 566 kW (Dual engines total >= 1432 kW)',
      'Transmission: Electric drive system',
      'Fuel Tank: 2,000 L',
      'Tire: 33.00R51'
    ],
    applications: ['Mega Mining Projects', 'Green Mining Operations', 'Deep Pit Hauling'],
    keyBenefits: ['Zero emissions hauling', 'Independently powered rear axle', 'Sistem pengereman regeneratif'],
    partnerBrand: 'Shantui'
  }

];
