import { Product, Review, Stat, Certificate } from "@/app/types";

export const products: Product[] = [
  {
    id: 0,
    image: "/product-1.jpeg",
    name: "Kitosan",
    category: "Kilo Kontrol & Detoks Desteği",
    tag: "Doğal Lif",
    description:
      "Kabuklu deniz canlılarından elde edilen doğal lif desteği; yağların bağlanmasına yardımcı olur, sindirim sistemini destekler ve dengeli beslenme ile birlikte kilo kontrolü sürecine katkı sağlayabilir. Günlük kullanımda yeterli su ile alınması önerilir.",
    benefits: [
      "Yağların bağlanmasına yardımcı doğal lif desteği",
      "Sindirim ve tokluk hissini destekler",
      "Günlük rutine kolayca eklenebilir",
      "Yeterli su ile kullanım önerilir",
    ],
  },
  {
    id: 1,
    image: "/product-2.jpeg",
    name: "SPİRULİNA",
    category: "Süper Besin & Antioksidan Destek",
    tag: "Doğal Protein",
    description:
      "Protein, demir, B12 ve antioksidan bileşenler yönünden zengin mavi-yeşil alg desteği; günlük beslenmeyi tamamlamaya, enerji ve genel iyi oluşu desteklemeye yardımcı olabilir. Sporcular, yoğun tempoda çalışanlar ve beslenmesini güçlendirmek isteyenler için pratik bir takviyedir.",
    benefits: [
      "Protein ve mikro besinler açısından zengin",
      "Antioksidan desteği sunar",
      "Günlük enerji ve canlılığı destekler",
      "Beslenme rutine kolayca eklenebilir",
    ],
  },
  {
    id: 2,
    image: "/product-3.jpeg",
    name: "Kordiseps Mantarı",
    category: "Enerji & Bağışıklık Desteği",
    tag: "Doğal Adaptogen",
    description:
      "Geleneksel Çin tıbbında uzun süredir bilinen kordiseps, enerji seviyesini ve genel canlılığı desteklemeye yardımcı doğal bir mantar desteğidir. İleri biyoteknoloji ile üretilen formu sayesinde günlük rutine kolayca eklenebilir.",
    benefits: [
      "Enerji ve dayanıklılık desteği",
      "Günlük canlılığı destekler",
      "Doğal adaptogen özellikleriyle öne çıkar",
      "Beslenme rutinine kolayca eklenir",
    ],
  },
  {
    id: 3,
    image: "/product-4.jpeg",
    name: "Multivitamin",
    category: "Genel Sağlık Desteği",
    tag: "Günlük Destek",
    description:
      "Günlük beslenmeyi tamamlamaya yardımcı vitamin ve mineral desteği; enerji üretimi, bağışıklık sistemi ve genel iyi oluş için pratik bir destek üründür. Yoğun tempoda olanlar için uygundur.",
    benefits: [
      "Günlük vitamin ve mineral desteği",
      "Enerji oluşumunu destekler",
      "Bağışıklık sistemine katkı sağlar",
      "Düzensiz beslenenler için pratik kullanım",
    ],
  },
  {
    id: 4,
    image: "/product-5.jpeg",
    name: "Çin Bitkisel Diş Macunu",
    category: "Ağız Hijyeni",
    tag: "Doğal İçerik",
    description:
      "Çim mercanı, handelik ve yabani papatya ekstraktları ile zenginleştirilmiş doğal formülü; ağız kokusunu önler, nefesi tazelendirir ve diş sağlığını korur. Yüksek kaliteli silika sayesinde derin temizlik ve asit direnci sağlar.",
    benefits: [
      "Ağız kokusunu önler ve nefesi tazelendirir",
      "Diş sertliğini ve asit direncini artırır",
      "Diş çürüğünü önlemeye yardımcı olur",
      "Derin temizlik ve doğal koruma",
    ],
  },
  {
    id: 5,
    image: "/product-6.jpeg",
    name: "Airiz Hijyenik Ped",
    category: "Kadın Hijyeni",
    tag: "Teknoloji",
    description:
      "Aktif Oksijen ve Negatif İyon teknolojisi ile desteklenen ileri tasarımlı hijyenik ped serisi; yüksek emiş gücü ve uzatılmış katmanları sayesinde günün her anında konfor ve güvenlik sağlar. Kadınların aktif temposuna göre tasarlanmıştır.",
    benefits: [
      "Aktif Oksijen ve Negatif İyon teknolojisi",
      "Yüksek emiş gücü ve uzun koruma",
      "Uzatılmış katmanlı ergonomik tasarım",
      "Konfor ve güvenlik günün her anında",
    ],
  },
  {
    id: 6,
    image: "/product-7.jpeg",
    name: "Tiens Ti Enerji Bilekliği",
    category: "Manyetik & Enerji Destek",
    tag: "Titanyum",
    description:
      "Titanyum özellikli enerji bilekliği; manyetik alan desteğiyle kullanıcı raporlarına göre kan dolaşımını, enerji seviyesini ve genel konforu desteklemeye yardımcı olabilir. Ağrı, gerginlik ve yorgunluk hissinde rahatlama bildiren kullanıcılar vardır. Hamileler, kalp pili taşıyanlar veya ciddi kronik hastalığı olanlar kullanmadan önce doktora danışmalıdır.",
    benefits: [
      "Kullanıcı raporlarına göre kan dolaşımını destekleyebilir",
      "Ağrı ve gerginlik hissinin azalmasına yardımcı olabilir",
      "Enerji dengesi ve günlük canlılık desteği",
      "Spor performansı ve toparlanmaya katkı sağlayabilir",
    ],
  },
];

export const reviews: Review[] = [
  {
    id: 0,
    initials: "AY",
    name: "Ayşe Yılmaz",
    city: "İstanbul",
    timeAgo: "6 ay önce",
    rating: 5,
    text: "Kitosan'ı düzenli beslenme programımla birlikte kullanıyorum. Özellikle tokluk hissi tarafında bana destek oldu ve günlük rutine çok kolay uyum sağladı.",
    productTag: "Kitosan",
  },
  {
    id: 1,
    initials: "MK",
    name: "Mehmet Kaya",
    city: "Ankara",
    timeAgo: "3 ay önce",
    rating: 5,
    text: "SPİRULİNA'yı yoğun çalışma döneminde denedim. Beslenmemi tamamlayan pratik bir destek oldu, gün içinde daha dengeli hissetmeme yardımcı oldu.",
    productTag: "SPİRULİNA",
  },
  {
    id: 2,
    initials: "SE",
    name: "Selin Erdoğan",
    city: "İzmir",
    timeAgo: "2 ay önce",
    rating: 5,
    text: "Kordiseps Mantarı'nı antrenman dönemimde tercih ettim. Özellikle günlük enerji ve toparlanma tarafında bana iyi gelen bir destek oldu.",
    productTag: "Kordiseps Mantarı",
  },
  {
    id: 3,
    initials: "FK",
    name: "Fatma Koç",
    city: "Bursa",
    timeAgo: "1 ay önce",
    rating: 4,
    text: "Multivitamin'i sabahları düzenli kullanıyorum. Günlük tempoda beslenme eksiklerini tamamlamak için pratik bir ürün, paketleme ve teslimat da çok iyiydi.",
    productTag: "Multivitamin",
  },
  {
    id: 4,
    initials: "HB",
    name: "Hüseyin Bulut",
    city: "Konya",
    timeAgo: "8 ay önce",
    rating: 5,
    text: "Çin Bitkisel Diş Macunu'nu ailece kullanıyoruz. Ağızda bıraktığı ferahlık hissi ve temizlik etkisinden memnun kaldık.",
    productTag: "Çin Bitkisel Diş Macunu",
  },
  {
    id: 5,
    initials: "ZA",
    name: "Zeynep Arslan",
    city: "İstanbul",
    timeAgo: "5 ay önce",
    rating: 5,
    text: "Airiz Hijyenik Ped serisini birkaç aydır kullanıyorum. Yoğun günlerde konfor ve koruma açısından beklentimi karşıladı.",
    productTag: "Airiz Hijyenik Ped",
  },
];

export const distributorStats: Stat[] = [
  { value: "5+", label: "Yıl Deneyim" },
  { value: "500", label: "Mutlu Müşteri" },
  { value: "%98", label: "Memnuniyet" },
  { value: "12", label: "Şehirde Aktif" },
];

export const certificates: Certificate[] = [
  { label: "Resmi Distribütör Lisansı" },
];
