// بيانات الترجمة
const translations = {
  ar: {
    title: "BikeZa — عالم الدراجات مع حمزة",
    welcome: "مرحبًا بك في عالم الدراجات! اكتشف النوع المناسب لك.",
    explore: "ابدأ الاستكشاف",
    types: "أنواع الدراجات",
    city: "دراجات المدينة (City Bikes)",
    mountain: "دراجات الجبال (Mountain Bikes)",
    road: "دراجات الطرق (Road Bikes)",
    ebike: "دراجات كهربائية (E-Bikes)",
    kids: "دراجات للأطفال (Kids Bikes)",
    fixed: "دراجات ثابتة (Fixed Gear)",
    desc_city: "مثالية للركوب اليومي، مريحة وسهلة. تستخدم للتنقل في المدن.",
    desc_mountain: "للمغامرات في الطبيعة. قوية، مع تعليقات، مناسبة للمناطق الوعرة.",
    desc_road: "للرياضيين، سريعة وخفيفة. مثالية للركوب الطويل والمنافسات.",
    desc_ebike: "مساعدة كهربائية للركوب الأسهل. مثالية للمبتدئين أو التنقل الطويل.",
    desc_kids: "دراجات آمنة وملونة للأطفال. تساعد في تعلم التوازن والرياضة.",
    desc_fixed: "بسيطة وديناميكية، بدون ترس. مثالية للمدن أو التدريب.",
    about: "عن حمزة",
    about_text: "أنا حمزة، شغوف بالدراجات منذ الصغر. أنشأت هذا الموقع لمساعدتك على اختيار الدراجة المثالية بناءً على تجربتي ومعرفتي.",
    mission: "هدفنا: جعل عالم الدراجات بسيطًا وواضحًا للجميع!",
    contact: "اتصل بنا",
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send: "إرسال",
    help: "ساعدني أختار دراجتي!",
    select_usage: "استخدامك",
    select_budget: "الميزانية (ريال)",
    get_recommendation: "احصل على التوصية",
    nav_home: "الرئيسية",
    nav_bikes: "أنواع الدراجات",
    nav_about: "عن حمزة",
    nav_contact: "اتصل بنا"
  },
  en: {
    title: "BikeZa — The World of Bicycles with Hamza",
    welcome: "Welcome to the world of bicycles! Discover the right type for you.",
    explore: "Start Exploring",
    types: "Types of Bicycles",
    city: "City Bikes",
    mountain: "Mountain Bikes",
    road: "Road Bikes",
    ebike: "E-Bikes",
    kids: "Kids Bikes",
    fixed: "Fixed Gear Bikes",
    desc_city: "Perfect for daily riding. Comfortable and easy. Used for commuting in cities.",
    desc_mountain: "For adventures in nature. Strong, with suspension. Suitable for rough terrain.",
    desc_road: "For athletes. Fast and light. Ideal for long rides and races.",
    desc_ebike: "Electric assist for easier riding. Perfect for beginners or long commutes.",
    desc_kids: "Safe and colorful bikes for children. Help learn balance and sports.",
    desc_fixed: "Simple and dynamic, no gears. Ideal for cities or training.",
    about: "About Hamza",
    about_text: "I'm Hamza, passionate about bikes since childhood. I created this site to help you choose the perfect bike based on my experience.",
    mission: "Our goal: Make the world of bikes simple and clear for everyone!",
    contact: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    help: "Help Me Choose My Bike!",
    select_usage: "Your Usage",
    select_budget: "Budget (SAR)",
    get_recommendation: "Get Recommendation",
    nav_home: "Home",
    nav_bikes: "Bike Types",
    nav_about: "About Hamza",
    nav_contact: "Contact"
  },
  fr: {
    title: "BikeZa — Le monde des vélos avec Hamza",
    welcome: "Bienvenue dans le monde du vélo ! Découvrez le type qui vous convient.",
    explore: "Commencer l'exploration",
    types: "Types de vélos",
    city: "Vélos de ville",
    mountain: "VTT",
    road: "Vélos de route",
    ebike: "Vélos électriques",
    kids: "Vélos pour enfants",
    fixed: "Vélos à vitesse fixe",
    desc_city: "Parfait pour les trajets quotidiens. Confortable et facile. Pour la ville.",
    desc_mountain: "Pour les aventures en nature. Robuste, avec suspension. Pour terrains accidentés.",
    desc_road: "Pour les sportifs. Rapide et léger. Idéal pour les longues distances et courses.",
    desc_ebike: "Assistance électrique pour un pédalage plus facile. Parfait pour débutants ou trajets longs.",
    desc_kids: "Vélos sûrs et colorés pour enfants. Aident à apprendre l'équilibre et le sport.",
    desc_fixed: "Simple et dynamique, sans vitesses. Idéal pour la ville ou l'entraînement.",
    about: "À propos d'Hamza",
    about_text: "Je suis Hamza, passionné de vélos depuis l'enfance. J'ai créé ce site pour vous aider à choisir le vélo parfait selon mon expérience.",
    mission: "Notre objectif : Rendre le monde du vélo simple et clair pour tous !",
    contact: "Contactez-nous",
    name: "Nom",
    email: "Email",
    message: "Message",
    send: "Envoyer",
    help: "Aidez-moi à choisir mon vélo !",
    select_usage: "Votre usage",
    select_budget: "Budget (SAR)",
    get_recommendation: "Obtenir une recommandation",
    nav_home: "Accueil",
    nav_bikes: "Types de vélos",
    nav_about: "À propos d'Hamza",
    nav_contact: "Contact"
  },
  de: {
    title: "BikeZa — Die Welt der Fahrräder mit Hamza",
    welcome: "Willkommen in der Welt der Fahrräder! Entdecke den richtigen Typ für dich.",
    explore: "Entdeckung beginnen",
    types: "Fahrradtypen",
    city: "Stadträder",
    mountain: "Mountainbikes",
    road: "Rennräder",
    ebike: "E-Bikes",
    kids: "Kinderfahrräder",
    fixed: "Fixie-Räder",
    desc_city: "Perfekt für den täglichen Gebrauch. Bequem und einfach. Für den Stadtverkehr.",
    desc_mountain: "Für Abenteuer in der Natur. Stark, mit Federung. Für unwegsames Gelände.",
    desc_road: "Für Sportler. Schnell und leicht. Ideal für lange Strecken und Rennen.",
    desc_ebike: "Elektrische Unterstützung für leichteres Fahren. Perfekt für Anfänger oder lange Strecken.",
    desc_kids: "Sichere und bunte Räder für Kinder. Helfen beim Erlernen von Gleichgewicht und Sport.",
    desc_fixed: "Einfach und dynamisch, ohne Gänge. Ideal für die Stadt oder Training.",
    about: "Über Hamza",
    about_text: "Ich bin Hamza, seit meiner Kindheit leidenschaftlich an Fahrrädern interessiert. Ich habe diese Seite erstellt, um dir bei der Wahl des perfekten Fahrrads zu helfen.",
    mission: "Unser Ziel: Die Welt der Fahrräder für alle einfach und klar machen!",
    contact: "Kontaktieren Sie uns",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Senden",
    help: "Helfen Sie mir, mein Fahrrad auszuwählen!",
    select_usage: "Ihre Nutzung",
    select_budget: "Budget (SAR)",
    get_recommendation: "Empfehlung erhalten",
    nav_home: "Startseite",
    nav_bikes: "Fahrradtypen",
    nav_about: "Über Hamza",
    nav_contact: "Kontakt"
  }
};

// دالة تغيير اللغة
function switchLanguage(lang) {
  const t = translations[lang];
  
  // تحديث النصوص (كما كان)
  document.querySelector("h1").textContent = t.title;
  document.querySelector("#home p").textContent = t.welcome;
  document.querySelector("#start-exploring").textContent = t.explore;
  document.querySelector("#bike-types h2").textContent = t.types;

  const bikeCards = document.querySelectorAll(".bike-card");
  bikeCards[0].querySelector("h3").textContent = t.city;
  bikeCards[0].querySelector("p").textContent = t.desc_city;

  bikeCards[1].querySelector("h3").textContent = t.mountain;
  bikeCards[1].querySelector("p").textContent = t.desc_mountain;

  bikeCards[2].querySelector("h3").textContent = t.road;
  bikeCards[2].querySelector("p").textContent = t.desc_road;

  bikeCards[3].querySelector("h3").textContent = t.ebike;
  bikeCards[3].querySelector("p").textContent = t.desc_ebike;

  bikeCards[4].querySelector("h3").textContent = t.kids;
  bikeCards[4].querySelector("p").textContent = t.desc_kids;

  bikeCards[5].querySelector("h3").textContent = t.fixed;
  bikeCards[5].querySelector("p").textContent = t.desc_fixed;

  document.querySelector("#about-hamza h2").textContent = t.about;
  document.querySelector("#about-hamza .text p:first-of-type").textContent = t.about_text;
  document.querySelector("#about-hamza .message").textContent = t.mission;

  document.querySelector("#contact h2").textContent = t.contact;
  document.querySelector("label[for='name']").textContent = t.name;
  document.querySelector("label[for='email']").textContent = t.email;
  document.querySelector("label[for='message']").textContent = t.message;
  document.querySelector("#contact button[type='submit']").textContent = t.send;

  document.querySelector("#floating-btn").textContent = t.help;

  document.querySelector("#help-form h3").textContent = t.help;
  document.querySelector("label[for='usage']").textContent = t.select_usage;
  document.querySelector("label[for='budget']").textContent = t.select_budget;
  document.querySelector("#help-form button[type='submit']").textContent = t.get_recommendation;

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks[0].textContent = t.nav_home;
  navLinks[1].textContent = t.nav_bikes;
  navLinks[2].textContent = t.nav_about;
  navLinks[3].textContent = t.nav_contact;

  document.documentElement.setAttribute("lang", lang);
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }

  document.title = t.title;

  // ✅ حفظ اللغة في المتصفح
  localStorage.setItem('preferredLanguage', lang);
}

// ✅ تحميل اللغة المحفوظة عند فتح الموقع
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
  switchLanguage(savedLang);
});
