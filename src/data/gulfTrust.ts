export interface TrustSectionData {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  imageUrl?: string;
  linkUrl?: string;
}

export const gulfTrustData = {
  about: {
    title: "Tentang Gulf",
    titleEn: "About Gulf",
    content: "Gulf adalah merek pelumas global yang identik dengan kualitas tanpa kompromi, inovasi teknis berkelanjutan, dan reputasi motorsport yang melegenda. Dengan warisan yang kuat, setiap produk Gulf dilahirkan dari dedikasi untuk memberikan performa maksimal, stabilitas suhu yang andal, dan pelindungan mesin yang dapat dipercaya oleh para profesional.",
    contentEn: "Gulf is a global lubricant brand synonymous with uncompromising quality, continuous technical innovation, and a legendary motorsport reputation. With a strong heritage, every Gulf product is born from a dedication to providing maximum performance, reliable temperature stability, and engine protection trusted by professionals."
  },
  motorsportSectionTitle: "Kualitas Gulf yang Dipercaya di Dunia Motorsport",
  motorsportSectionTitleEn: "Gulf Quality Trusted in the World of Motorsport",
  motorsport: [
    {
      id: 'williams-f1',
      title: 'Williams F1 Team',
      titleEn: 'Williams F1 Team',
      subtitle: 'Kompetisi Balap Roda Empat Tertinggi',
      subtitleEn: 'Highest Four-Wheel Racing Competition',
      content: [
        'Gulf memiliki warisan motorsport global yang panjang dan melegenda. Kami bangga bermitra dengan tim Formula 1, Atlassian Williams F1 Team.',
        'Kemitraan ini menegaskan kembali pengakuan sirkuit balap atas inovasi teknis pelumas Gulf yang terus menjawab batas-batas ekstrem kecepatan dan keandalan.'
      ],
      contentEn: [
        'Gulf has a long and legendary global motorsport heritage. We are proud to partner with the Formula 1 team, Atlassian Williams F1 Team.',
        'This partnership reaffirms the racing circuit\'s recognition of Gulf\'s technical lubricant innovations that continue to push the extreme limits of speed and reliability.'
      ],
      imageUrl: 'https://www.williamsf1.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffnx611yr%2Fproductionv2%2F1bfffd92a326600d180826e15128594098715165-2560x1440.png%3Fw%3D1920%26h%3D1080%26auto%3Dformat&w=3840&q=75&dpl=dpl_4CLsPe2mgCtu4ixCaxqETnMN9kUi',
      linkUrl: '/partnership'
    },
    {
      id: 'motogp',
      title: 'Trackhouse MotoGP Team',
      titleEn: 'Trackhouse MotoGP Team',
      subtitle: 'Performa Ekstrem Lintasan Roda Dua',
      subtitleEn: 'Extreme Two-Wheel Track Performance',
      content: [
        'Untuk balap motor level teratas di dunia, Gulf hadir dalam kemitraan MotoGP bersama tim Trackhouse MotoGP Team.',
        'Menguji ketahanan teknologi pelumas dalam suhu dan gesekan mesin luar biasa tinggi, pengalaman ini menjadikan formulasi Gulf pilihan paling andal untuk kendaraaan roda dua Anda.'
      ],
      contentEn: [
        'For the top level of motorcycle racing in the world, Gulf is present in a MotoGP partnership with the Trackhouse MotoGP Team.',
        'Testing lubricant technology endurance in exceptionally high engine temperatures and friction, this experience makes Gulf formulations the most reliable choice for your two-wheeled vehicle.'
      ],
      imageUrl: 'https://resources.motogp.pulselive.com/photo-resources/2025/10/02/c18440ea-097e-471f-bf9f-723740c2b03a/Ai-Ogura-Trackhouse-MotoGP-Team-Pertamina-Grand-Prix-of-Indonesia2.jpg?width=752&height=423',
      linkUrl: '/partnership'
    }
  ]
};
