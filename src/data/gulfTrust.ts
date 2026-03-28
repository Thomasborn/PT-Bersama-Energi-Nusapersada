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
    content: "Gulf adalah merek pelumas global yang identik dengan kualitas tanpa kompromi, inovasi teknis berkelanjutan, dan reputasi motorsport yang melegenda. Dengan warisan yang kuat, setiap produk Gulf dilahirkan dari dedikasi untuk memberikan performa maksimal, stabilitas suhu yang andal, dan pelindungan mesin yang dapat dipercaya oleh para profesional."
  },
  motorsportSectionTitle: "Kualitas Gulf yang Dipercaya di Dunia Motorsport",
  motorsport: [
    {
      id: 'williams-f1',
      title: 'Williams F1 Team',
      subtitle: 'Kompetisi Balap Roda Empat Tertinggi',
      content: [
        'Gulf memiliki warisan motorsport global yang panjang dan melegenda. Kami bangga bermitra dengan tim Formula 1, Atlassian Williams F1 Team.',
        'Kemitraan ini menegaskan kembali pengakuan sirkuit balap atas inovasi teknis pelumas Gulf yang terus menjawab batas-batas ekstrem kecepatan dan keandalan.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      linkUrl: '/partnership'
    },
    {
      id: 'motogp',
      title: 'Trackhouse MotoGP Team',
      subtitle: 'Performa Ekstrem Lintasan Roda Dua',
      content: [
        'Untuk balap motor level teratas di dunia, Gulf hadir dalam kemitraan MotoGP bersama tim Trackhouse MotoGP Team.',
        'Menguji ketahanan teknologi pelumas dalam suhu dan gesekan mesin luar biasa tinggi, pengalaman ini menjadikan formulasi Gulf pilihan paling andal untuk kendaraaan roda dua Anda.'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      linkUrl: '/partnership'
    }
  ]
};
