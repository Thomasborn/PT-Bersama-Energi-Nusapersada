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

export const gulfCategories: ProductCategory[] = [
  {
    id: 'mobil',
    name: 'Mobil',
    description: 'Sejak 1901, rangkaian pelumas mobil penumpang kami membantu Anda mencapai efisiensi dan performa yang lebih baik. Memenuhi standar industri API dan ACEA untuk performa yang dapat diandalkan.',
    imageUrl: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    brand: 'Gulf',
    slug: 'mobil'
  },
  {
    id: 'motor',
    name: 'Motor',
    description: 'Oli mesin andalan untuk performa tinggi kendaraan roda dua Anda, teruji dalam kondisi lintasan maupun tantangan berkendara sehari-hari.',
    imageUrl: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    brand: 'Gulf',
    slug: 'motor'
  },
  {
    id: 'kendaraan-komersial',
    name: 'Kendaraan Komersial',
    description: 'Pelumas tangguh yang dirancang khusus untuk memaksimalkan efisiensi armada, mengurangi waktu henti, dan menjaga keandalan kendaraan komersial.',
    imageUrl: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    brand: 'Gulf',
    slug: 'kendaraan-komersial'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    description: 'Solusi pelumasan industri performa ekstrem untuk berbagai sektor manufaktur, mining, dan konstruksi.',
    imageUrl: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    brand: 'Gulf',
    slug: 'industrial',
    subcategories: [
      { id: 'hidrolik', name: 'Hydraulic Oils', slug: 'hidrolik' },
      { id: 'oli-gigi-industri', name: 'Industrial Gear Oils', slug: 'oli-gigi-industri' },
      { id: 'oli-kompresor', name: 'Compressor Oils', slug: 'oli-kompresor' },
      { id: 'oli-turbin', name: 'Turbine Oils', slug: 'oli-turbin' },
      { id: 'slideway-oils', name: 'Slideway Oils', slug: 'slideway-oils' },
      { id: 'grease', name: 'Greases', slug: 'grease' }
    ]
  }
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
  pdsUrl?: string; // Link to Gulf Global PDS
}

export const gulfProducts: ProductSpec[] = [
  // --- MOBIL (CAR) ---
  {
    id: 'gulf-formula',
    name: 'Gulf Formula',
    slug: 'gulf-formula',
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'mobil',
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
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'mobil',
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
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'mobil',
    summary: 'High Quality Engine Oil kelas premium berbahan dasar oli mineral yang tangguh untuk segala medan dan keawetan mesin.',
    viscosityGrades: ['10W-40', '15W-40'],
    availablePacks: ['1L', '4L'],
    specifications: ['API SN/CF'],
    approvals: ['-'],
    applications: ['Kendaraan tahun lama hingga menengah', 'Taksi atau armada utilitas'],
    keyBenefits: ['Daya tahan operasional andal', 'Kontrol lumpur dan varnish', 'Harga rasional dengan kualitas Gulf'],
    partnerBrand: 'Gulf'
  },

  // --- MOTORCYCLE ---
  {
    id: 'gulf-syntrac',
    name: 'Gulf Syntrac',
    slug: 'gulf-syntrac',
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'motor',
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
    id: 'gulf-powertrac',
    name: 'Gulf Powertrac',
    slug: 'gulf-powertrac',
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'motor',
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
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'motor',
    summary: 'Oli pelumas tangguh skuter matik dan motor bebek konvensional. Diformulasi spesial untuk kondisi stop & go.',
    viscosityGrades: ['10W-30', '10W-40', '20W-40'],
    availablePacks: ['800ml', '1L'],
    specifications: ['API SL', 'JASO MB (untuk matic)', 'JASO MA (untuk manual)'],
    approvals: ['-'],
    applications: ['Skuter matic', 'Motor bebek pekerja keras'],
    keyBenefits: ['Mengurangi panas mesin', 'Efisiensi bakar yang baik di kemacetan', 'Mengurangi deposit karbon'],
    partnerBrand: 'Gulf'
  },

  // --- COMMERCIAL VEHICLE ---
  {
    id: 'gulf-super-duty-le',
    name: 'Gulf Super Duty LE',
    slug: 'gulf-super-duty-le',
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'kendaraan-komersial',
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
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'kendaraan-komersial',
    summary: 'Pelumas armada beban berat tugas ekstrem yang memastikan interval pergantian super panjang namun tetap tahan oksidasi.',
    viscosityGrades: ['15W-40', '20W-50'],
    availablePacks: ['20L', '200L'],
    specifications: ['API CI-4/CH-4', 'ACEA E7'],
    approvals: ['Global DHD-1', 'Volvo VDS-3'],
    applications: ['Kendaraan operasional pertambangan', 'Ekskavator', 'Alat berat logistik lama maupun baru'],
    keyBenefits: ['Cadangan TBN (Total Base Number) yang stabil', 'Mencegah penebalan akibat penumpukan jelaga', 'Membersihkan silinder dan piston ring'],
    partnerBrand: 'Gulf'
  },

  // --- INDUSTRIAL (Hydraulic, dll) ---
  {
    id: 'gulf-harmony-aw',
    name: 'Gulf Harmony AW',
    slug: 'gulf-harmony-aw',
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
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
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
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
  {
    id: 'gulf-ep-lubricant',
    name: 'Gulf EP Lubricant',
    slug: 'gulf-ep-lubricant',
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'industrial',
    subcategoryId: 'oli-gigi-industri',
    summary: 'Oli roda gigi industri kinerja tinggi yang dikembangkan untuk melumasi roda gigi baja tugas berat di lingkungan yang keras.',
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
    id: 'gulf-compressor-lube',
    name: 'Gulf Compressor',
    slug: 'gulf-compressor',
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
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
  {
    id: 'gulf-crest',
    name: 'Gulf Crest',
    slug: 'gulf-crest',
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
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
  {
    id: 'gulf-crown',
    name: 'Gulf Crown EP',
    slug: 'gulf-crown',
    image: 'https://assets.gulfoilltd.com/apac/files/styles/client_400x400/public/2023-03/Barrel_400x400.webp?VersionId=sKzlNPCecRKN.pPKel_DCLwTStG5AG6H&itok=bfaOJGg4',
    categoryId: 'industrial',
    subcategoryId: 'grease',
    summary: 'Pelumas gemuk serbaguna tipe Lithium penebalan yang dilengkapi bahan aditif pengurang gesek Extreme Pressure tingkat tinggi.',
    viscosityGrades: ['NLGI 0', 'NLGI 1', 'NLGI 2', 'NLGI 3'],
    availablePacks: ['18Kg', '180Kg'],
    specifications: ['DIN 51502 KP2K-30'],
    approvals: ['-'],
    applications: ['Bantalan roda tugas berat kendaraan komersial', 'Jurnal bearing pada mesin industri konvensional', 'Titik engsel dan bushing konstruksi'],
    keyBenefits: ['Anti aus maksimal di bawah beban getaran tinggi', 'Daya rekat kuat mencegah tercuci air', 'Stabilitas mekanis tinggi tidak mudah lumer'],
    partnerBrand: 'Gulf',
    pdsUrl: 'https://pds.gulfoilltd.com/?countrycode=glb'
  }
];
