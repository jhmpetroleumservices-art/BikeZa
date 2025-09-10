// ============================
// تبديل اللغة
// ============================

// تخزين النصوص لكل لغة
const translations = {
  ar: {
    title: "BikeZa — عالم الدراجات مع حمزة",
    homeTitle: "BikeZa — عالم الدراجات مع حمزة",
    homeDesc: "مرحبًا بك في عالم الدراجات! اكتشف النوع المناسب لك.",
    bikeTypes: "أنواع الدراجات",
    aboutHamza: "عن حمزة",
    contact: "اتصل بنا",
    cityBike: "دراجات المدينة (City Bikes)",
    mountainBike: "دراجات الجبال (Mountain Bikes)",
    roadBike: "دراجات الطرق (Road Bikes)",
    eBike: "دراجات كهربائية (E-Bikes)",
    kidsBike: "دراجات للأطفال (Kids Bikes)",
    fixedBike: "دراجات ثابتة (Fixed Gear)",
    startExploring: "ابدأ الاستكشاف",
    readMore: "اقرأ المزيد",
    helpBtn: "ساعدني أختار دراجتي!",
    usageLabel: "استخدامك",
    budgetLabel: "الميزانية (ريال)",
    submitBtn: "احصل على التوصية",
    contactFormName: "الاسم",
    contactFormEmail: "البريد الإلكتروني",
    contactFormMessage: "الرسالة",
    contactFormSend: "إرسال"
  },
  en: {
    title: "BikeZa — The World of Bicycles with Hamza",
    homeTitle: "BikeZa — The World of Bicycles with Hamza",
    homeDesc: "Welcome to the world of bicycles! Discover the perfect type for you.",
    bikeTypes: "Bicycle Types",
    aboutHamza: "About Hamza",
    contact: "Contact Us",
    cityBike: "City Bikes",
    mountainBike: "Mountain Bikes",
    roadBike: "Road Bikes",
    eBike: "E-Bikes",
    kidsBike: "Kids Bikes",
    fixedBike: "Fixed Gear Bikes",
    startExploring: "Start Exploring",
    readMore: "Read More",
    helpBtn: "Help Me Choose My Bike!",
    usageLabel: "Your Usage",
    budgetLabel: "Budget (SAR)",
    submitBtn: "Get Recommendation",
    contactFormName: "Name",
    contactFormEmail: "Email",
    contactFormMessage: "Message",
    contactFormSend: "Send"
  },
  fr: {
    title: "BikeZa — Le Monde des Vélos avec Hamza",
    homeTitle: "BikeZa — Le Monde des Vélos avec Hamza",
    homeDesc: "Bienvenue dans le monde des vélos ! Découvrez le type parfait pour vous.",
    bikeTypes: "Types de Vélos",
    aboutHamza: "À propos de Hamza",
    contact: "Contactez-nous",
    cityBike: "Vélos de Ville",
    mountainBike: "Vélos de Montagne",
    roadBike: "Vélos de Route",
    eBike: "Vélos Électriques",
    kidsBike: "Vélos pour Enfants",
    fixedBike: "Vélos à Vitesse Fixe",
    startExploring: "Commencer l'Exploration",
    readMore: "Lire Plus",
    helpBtn: "Aidez-moi à Choisir mon Vélo !",
    usageLabel: "Votre Utilisation",
    budgetLabel: "Budget (SAR)",
    submitBtn: "Obtenir une Recommandation",
    contactFormName: "Nom",
    contactFormEmail: "Email",
    contactFormMessage: "Message",
    contactFormSend: "Envoyer"
  },
  de: {
    title: "BikeZa — Die Welt der Fahrräder mit Hamza",
    homeTitle: "BikeZa — Die Welt der Fahrräder mit Hamza",
    homeDesc: "Willkommen in der Welt der Fahrräder! Entdecke das perfekte Modell für dich.",
    bikeTypes: "Fahrradtypen",
    aboutHamza: "Über Hamza",
    contact: "Kontaktieren Sie uns",
    cityBike: "Stadt-Fahrräder",
    mountainBike: "Berg-Fahrräder",
    roadBike: "Rennräder",
    eBike: "Elektrofahrräder",
    kidsBike: "Kinderräder",
    fixedBike: "Fixie-Räder",
    startExploring: "Erkundung beginnen",
    readMore: "Mehr lesen",
    helpBtn: "Helfen Sie mir, mein Fahrrad zu wählen!",
    usageLabel: "Ihre Nutzung",
    budgetLabel: "Budget (SAR)",
    submitBtn: "Empfehlung erhalten",
    contactFormName: "Name",
    contactFormEmail: "E-Mail",
    contactFormMessage: "Nachricht",
    contactFormSend: "Absenden"
  }
};

// وظيفة تبديل اللغة
function switchLanguage(lang) {
  // تغيير عنوان الصفحة
  document.title = translations[lang].title;

  // تغيير النصوص في الصفحة
  document.querySelector('h1')?.textContent = translations[lang].homeTitle;
  document.querySelector('#home p')?.textContent = translations[lang].homeDesc;
  document.querySelector('#bike-types h2')?.textContent = translations[lang].bikeTypes;
  document.querySelector('#about-hamza h2')?.textContent = translations[lang].aboutHamza;
  document.querySelector('#contact h2')?.textContent = translations[lang].contact;
  document.querySelector('#start-exploring')?.textContent = translations[lang].startExploring;
  document.querySelector('#floating-btn')?.textContent = translations[lang].helpBtn;

  // تغيير نصوص الأزرار
  document.querySelectorAll('.read-more').forEach(btn => {
    btn.textContent = translations[lang].readMore;
  });

  // تغيير نصوص نموذج المساعدة
  document.querySelector('label[for="usage"]')?.textContent = translations[lang].usageLabel;
  document.querySelector('label[for="budget"]')?.textContent = translations[lang].budgetLabel;
  document.querySelector('.submit-btn')?.textContent = translations[lang].submitBtn;

  // تغيير نصوص نموذج الاتصال
  document.querySelector('label[for="name"]')?.textContent = translations[lang].contactFormName;
  document.querySelector('label[for="email"]')?.textContent = translations[lang].contactFormEmail;
  document.querySelector('label[for="message"]')?.textContent = translations[lang].contactFormMessage;
  document.querySelector('#contact button[type="submit"]')?.textContent = translations[lang].contactFormSend;
}