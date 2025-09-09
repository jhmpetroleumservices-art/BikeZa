// متغيرات عامة
const modal = document.getElementById('modal');
const helpModal = document.getElementById('help-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModalButtons = document.querySelectorAll('.close-modal');
const startExploringBtn = document.getElementById('start-exploring');
const floatingBtn = document.getElementById('floating-btn');
const contactForm = document.getElementById('contact-form');
const helpForm = document.getElementById('help-form');
const recommendationDiv = document.getElementById('recommendation');

// بيانات الدراجات
const bikeData = {
  city: {
    img: 'images/bike1.jpg',
    alt: 'دراجة مدينة حديثة',
    title: 'دراجات المدينة (City Bikes)',
    description: 'مثالية للتنقل اليومي. مريحة، سهلة، مع إضاءات وحقائب. مناسبة للجميع.'
  },
  mountain: {
    img: 'images/bike2.jpg',
    alt: 'دراجة جبال قوية',
    title: 'دراجات الجبال (Mountain Bikes)',
    description: 'للمغامرات في الطبيعة. قوية، مع تعليقات، مناسبة للطرق الوعرة.'
  },
  road: {
    img: 'images/bike3.jpg',
    alt: 'دراجة طرق سريعة',
    title: 'دراجات الطرق (Road Bikes)',
    description: 'للرياضيين. خفيفة وسريعة. مثالية للسباقات والمسافات الطويلة.'
  },
  'e-bike': {
    img: 'images/bike4.jpg',
    alt: 'دراجة كهربائية',
    title: 'دراجات كهربائية (E-Bikes)',
    description: 'مساعدة كهربائية. مثالية للمبتدئين أو التنقل الطويل دون تعب.'
  },
  kids: {
    img: 'images/bike5.jpg',
    alt: 'دراجة أطفال',
    title: 'دراجات للأطفال (Kids Bikes)',
    description: 'آمنة وملونة. تساعد الأطفال على تعلم التوازن والرياضة.'
  },
  fixed: {
    img: 'images/bike6.jpg',
    alt: 'دراجة ثابتة',
    title: 'دراجات ثابتة (Fixed Gear)',
    description: 'بسيطة وديناميكية. بدون ترس. مثالية للمدن والتدريب.'
  }
};

// إظهار Modal عند النقر على "اقرأ المزيد"
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function() {
    const type = this.getAttribute('data-type');
    const data = bikeData[type];
    modalImg.src = data.img;
    modalImg.alt = data.alt;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modal.classList.add('active');
  });
});

// إغلاق Modal
closeModalButtons.forEach(button => {
  button.addEventListener('click', function() {
    modal.classList.remove('active');
    helpModal.classList.remove('active');
  });
});

// فتح Modal المساعدة
floatingBtn.addEventListener('click', function() {
  helpModal.classList.add('active');
});

// إرسال نموذج المساعدة
helpForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const usage = document.getElementById('usage').value;
  const budget = document.getElementById('budget').value;

  let recommendation = "";

  if (!usage) {
    recommendation = "يرجى اختيار نوع الاستخدام أولاً.";
  } else {
    switch(usage) {
      case 'city':
        recommendation = budget >= 1000 ? "نوصيك بدراجة مدينة كهربائية." : "نوصيك بدراجة مدينة عادية — مريحة واقتصادية.";
        break;
      case 'mountain':
        recommendation = budget >= 2000 ? "نوصيك بدراجة جبال محترفة." : "نوصيك بدراجة جبال مبتدئة — مناسبة للمبتدئين.";
        break;
      case 'sport':
        recommendation = budget >= 1500 ? "نوصيك بدراجة طرق كربون خفيفة." : "نوصيك بدراجة طرق من الألومنيوم — سريعة ومتينة.";
        break;
      case 'kids':
        recommendation = "نوصيك بدراجة أطفال مع عجلات مساندة — آمنة وممتعة.";
        break;
      default:
        recommendation = "يرجى اختيار نوع الاستخدام.";
    }
  }

  recommendationDiv.innerHTML = `<h4>التوصية: ${recommendation}</h4>`;
});

// إرسال نموذج الاتصال
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("شكرًا لرسالتك! سنرد عليك قريبًا.");
  this.reset();
});