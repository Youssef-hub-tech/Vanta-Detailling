// ─────────────────────────────────────────────────────────────────────────────
// VANTA Detailing — copy and placeholder business details.
//
// Every string on the site lives here, in both languages, so components stay
// layout-only and reusable. Business details at the top are PLACEHOLDERS for a
// fictional brand built as a portfolio demonstration.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'VANTA',
  url: 'https://vanta-detailing.example',
  whatsapp: '966500000000', // placeholder — not a real number
  phone: '+966 50 000 0000',
  phoneHref: '+966500000000',
  email: 'hello@vanta-detailing.example',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Riyadh',
};

/** Build the wa.me link with a pre-filled message. */
export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const ui = {
  en: {
    dir: 'ltr',
    locale: 'en_SA',
    path: '/',
    altPath: '/ar/',
    altLocale: 'ar',
    switchLabel: 'العربية',
    switchAria: 'Switch to Arabic',
    wa: 'Hello VANTA, I would like to book a detailing appointment.',
    meta: {
      title: 'VANTA Detailing — Premium car detailing in Riyadh (demo)',
      desc: 'Paint correction, ceramic coating and interior detailing in Riyadh, one car at a time. A fictional studio built as a portfolio demonstration.',
      ogAlt: 'VANTA Detailing — dark automotive studio',
    },
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close menu',
    a11y: { primaryNav: 'Primary', home: 'VANTA Detailing — home', studio: 'VANTA Detailing studio' },
    brand: { sub: 'Detailing', mark: 'VANTA' },
    nav: {
      services: 'Services',
      pricing: 'Packages',
      gallery: 'Results',
      why: 'Why VANTA',
      contact: 'Visit',
    },
    cta: {
      primary: 'Book on WhatsApp',
      secondary: 'View packages',
      whatsappAria: 'Book a detailing appointment on WhatsApp (opens in a new tab)',
    },
    hero: {
      eyebrow: 'Riyadh · By appointment',
      h1: ['The finish your car', 'left the showroom with.'],
      sub: 'Paint correction, ceramic protection and interior detailing, carried out one car at a time in our Riyadh studio.',
      note: 'Studio illustration — not a customer vehicle.',
      meta: ['Paint correction', 'Ceramic coating', 'Interior detailing'],
    },
    services: {
      eyebrow: '01 — Services',
      title: 'Six disciplines. One standard.',
      intro:
        'Every service is quoted in writing after we inspect the paint under controlled light. Combine them, or start with one.',
      items: [
        {
          name: 'Exterior detailing',
          desc: 'Foam wash, clay-bar decontamination and a hand-applied sealant that holds up to dust and desert sun.',
        },
        {
          name: 'Paint correction',
          desc: 'Machine polishing removes swirl marks and light scratches so the paint reflects cleanly again.',
        },
        {
          name: 'Ceramic coating',
          desc: 'A hard, hydrophobic layer that resists heat, grime and UV, and makes every wash easier.',
        },
        {
          name: 'Paint protection film',
          desc: 'Clear film on the bonnet, bumpers and mirrors against stone chips on highway driving.',
        },
        {
          name: 'Interior deep clean',
          desc: 'Leather, fabric, vents and trim cleaned and conditioned, with odour treatment on request.',
        },
        {
          name: 'Headlight and trim restoration',
          desc: 'Faded plastics and cloudy lenses brought back to a clear, even finish.',
        },
      ],
    },
    pricing: {
      eyebrow: '02 — Packages',
      title: 'Packages, in riyals.',
      intro:
        'Indicative prices for a mid-size sedan, excluding VAT. The final quote follows an inspection and is confirmed on WhatsApp.',
      from: 'From',
      cur: 'SAR',
      time: 'Typical time',
      recommended: 'Most requested',
      note: 'SUVs, large vehicles and heavily swirled paint are quoted individually.',
      tiers: [
        {
          name: 'Essential',
          price: '350',
          time: '2 hours',
          feat: [
            'Foam wash and hand dry',
            'Wheel and tyre clean',
            'Interior vacuum and wipe-down',
            'Glass cleaned inside and out',
          ],
        },
        {
          name: 'Signature',
          price: '1,200',
          time: '1 day',
          rec: true,
          feat: [
            'Everything in Essential',
            'Clay-bar decontamination',
            'Single-stage paint polish',
            'Leather clean and condition',
            'Six-month sealant',
          ],
        },
        {
          name: 'Ceramic',
          price: '3,800',
          time: '3 days',
          feat: [
            'Everything in Signature',
            'Multi-stage paint correction',
            'Ceramic coating, exterior',
            'Wheel faces and glass coated',
            'Follow-up inspection',
          ],
        },
      ],
    },
    gallery: {
      eyebrow: '03 — Results',
      title: 'Correction you can see at arm’s length.',
      intro: 'Drag the handle to compare the same panel before and after a two-stage correction.',
      before: 'Before',
      after: 'After',
      slider: 'Compare the panel before and after correction',
      note: 'Illustration of the correction process — not a customer vehicle.',
      points: [
        ['Clearcoat measured', 'Paint depth logged on every panel before a machine touches it.'],
        ['Swirls removed', 'Two stages of polishing, refined under neutral inspection light.'],
        ['Sealed after', 'Protection applied only once the finish is corrected.'],
      ],
    },
    why: {
      eyebrow: '04 — Why VANTA',
      title: 'Why owners choose VANTA',
      intro: 'A small studio, deliberately. One car in the bay at a time, and the same pair of hands from inspection to handover.',
      items: [
        {
          name: 'A written quote first',
          desc: 'You approve the scope and the price before we touch the car.',
        },
        {
          name: 'Paint depth measured',
          desc: 'We record clearcoat thickness on every panel, so we never remove more than the paint can spare.',
        },
        {
          name: 'A photo report at handover',
          desc: 'The paint is photographed at drop-off and again at collection, so you see exactly what changed.',
        },
        {
          name: 'Collection and delivery',
          desc: 'Pick-up and return across Riyadh can be arranged with Signature and Ceramic packages.',
        },
      ],
    },
    contact: {
      eyebrow: '05 — Visit',
      title: 'Visit the studio.',
      intro:
        'Appointments are confirmed on WhatsApp. Send your car model, its colour and the package you are considering.',
      labels: ['Address', 'Hours', 'Phone', 'Email'],
      address: 'Placeholder address — Al Olaya, Riyadh, Saudi Arabia',
      hours: 'Sat–Thu 9:00–21:00 · Fri 16:00–21:00',
      map: 'Open in Maps',
      demo: 'Demo details: the address, phone number and email above are placeholders.',
      mapAlt: 'Stylised map of the studio location in Riyadh',
      mapTag: 'VANTA — Riyadh',
    },
    footer: {
      tag: 'Premium car detailing, Riyadh.',
      navTitle: 'Navigate',
      contactTitle: 'Studio',
      legal:
        '© 2026 VANTA Detailing. A fictional brand built as a portfolio demonstration. All names, prices and contact details are placeholders.',
      demo: 'Studio artwork is original vector illustration, not photography.',
      top: 'Back to top',
    },
  },

  ar: {
    dir: 'rtl',
    locale: 'ar_SA',
    path: '/ar/',
    altPath: '/',
    altLocale: 'en',
    switchLabel: 'English',
    switchAria: 'التبديل إلى الإنجليزية',
    wa: 'مرحبًا فانتا، أرغب في حجز موعد للعناية بالسيارة.',
    meta: {
      title: 'فانتا للعناية بالسيارات — عناية فاخرة بالسيارات في الرياض (نموذج تجريبي)',
      desc: 'تصحيح الطلاء وطلاء السيراميك والعناية الداخلية في الرياض، سيارة واحدة في كل مرة. استوديو افتراضي أُنشئ لعرض أعمال التصميم.',
      ogAlt: 'فانتا للعناية بالسيارات — استوديو سيارات داكن',
    },
    skip: 'انتقل إلى المحتوى',
    menu: 'القائمة',
    close: 'إغلاق القائمة',
    a11y: { primaryNav: 'التنقل الرئيسي', home: 'فانتا للعناية بالسيارات — الرئيسية', studio: 'استوديو فانتا' },
    brand: { sub: 'للعناية بالسيارات', mark: 'VANTA' },
    nav: {
      services: 'الخدمات',
      pricing: 'الباقات',
      gallery: 'النتائج',
      why: 'لماذا فانتا',
      contact: 'الموقع',
    },
    cta: {
      primary: 'احجز عبر واتساب',
      secondary: 'اطّلع على الباقات',
      whatsappAria: 'احجز موعد عناية عبر واتساب (يفتح في تبويب جديد)',
    },
    hero: {
      eyebrow: 'الرياض · بموعد مسبق',
      h1: ['اللمعة التي خرجت بها سيارتك', 'من صالة العرض.'],
      sub: 'تصحيح الطلاء، والحماية السيراميكية، والعناية الداخلية، تُنجز سيارة واحدة في كل مرة داخل استوديونا في الرياض.',
      note: 'رسم توضيحي من الاستوديو — ليس مركبة عميل.',
      meta: ['تصحيح الطلاء', 'طلاء السيراميك', 'العناية الداخلية'],
    },
    services: {
      eyebrow: '01 — الخدمات',
      title: 'ستّ خدمات. معيار واحد.',
      intro:
        'نُقدّم عرض سعر مكتوبًا بعد فحص الطلاء تحت إضاءة مضبوطة. يمكنك الجمع بين الخدمات أو البدء بواحدة.',
      items: [
        {
          name: 'العناية الخارجية',
          desc: 'غسيل رغوي، وإزالة التلوث بالطين، وطبقة حماية يدوية تصمد أمام الغبار وحرارة الشمس.',
        },
        {
          name: 'تصحيح الطلاء',
          desc: 'تلميع آلي يزيل علامات الدوران والخدوش الخفيفة ليعود الطلاء عاكسًا بوضوح.',
        },
        {
          name: 'طلاء السيراميك',
          desc: 'طبقة صلبة طاردة للماء تقاوم الحرارة والأوساخ والأشعة فوق البنفسجية وتسهّل الغسيل.',
        },
        {
          name: 'فيلم حماية الطلاء',
          desc: 'فيلم شفاف على غطاء المحرك والمصدّات والمرايا يحمي من رشّ الحصى على الطرق السريعة.',
        },
        {
          name: 'تنظيف داخلي عميق',
          desc: 'تنظيف وتغذية الجلد والأقمشة والفتحات والتشطيبات، مع معالجة الروائح عند الطلب.',
        },
        {
          name: 'ترميم المصابيح والتشطيبات',
          desc: 'إعادة البلاستيك الباهت والعدسات الضبابية إلى مظهر صافٍ ومتساوٍ.',
        },
      ],
    },
    pricing: {
      eyebrow: '02 — الباقات',
      title: 'باقات بأسعار واضحة بالريال.',
      intro:
        'أسعار استرشادية لسيارة سيدان متوسطة الحجم، غير شاملة ضريبة القيمة المضافة. يُحدَّد السعر النهائي بعد الفحص ويُعتمد عبر واتساب.',
      from: 'تبدأ من',
      cur: 'ر.س',
      time: 'المدة التقديرية',
      recommended: 'الأكثر طلبًا',
      note: 'تُسعَّر السيارات الرياضية متعددة الاستخدامات والمركبات الكبيرة والطلاءات الشديدة التأثر بشكل منفصل.',
      tiers: [
        {
          name: 'الأساسية',
          price: '350',
          time: 'ساعتان',
          feat: [
            'غسيل رغوي وتجفيف يدوي',
            'تنظيف الجنوط والإطارات',
            'شفط وتنظيف داخلي',
            'تنظيف الزجاج من الداخل والخارج',
          ],
        },
        {
          name: 'المميزة',
          price: '1,200',
          time: 'يوم واحد',
          rec: true,
          feat: [
            'كل ما في الباقة الأساسية',
            'إزالة التلوث بالطين',
            'تلميع طلاء بمرحلة واحدة',
            'تنظيف وتغذية الجلد',
            'طبقة حماية لمدة ستة أشهر',
          ],
        },
        {
          name: 'السيراميك',
          price: '3,800',
          time: '3 أيام',
          feat: [
            'كل ما في الباقة المميزة',
            'تصحيح طلاء متعدد المراحل',
            'طلاء سيراميك للهيكل الخارجي',
            'طلاء وجوه الجنوط والزجاج',
            'فحص متابعة بعد التركيب',
          ],
        },
      ],
    },
    gallery: {
      eyebrow: '03 — النتائج',
      title: 'فرق تراه على مسافة ذراع.',
      intro: 'اسحب المقبض للمقارنة بين اللوح نفسه قبل التصحيح وبعده، على مرحلتين.',
      before: 'قبل',
      after: 'بعد',
      slider: 'مقارنة اللوح قبل التصحيح وبعده',
      note: 'رسم توضيحي لعملية التصحيح — ليس مركبة عميل.',
      points: [
        ['قياس سماكة الطلاء', 'نسجّل عمق الطلاء في كل لوح قبل أن تلمسه أي أداة.'],
        ['إزالة علامات الدوران', 'مرحلتان من التلميع تُنهيان تحت إضاءة فحص محايدة.'],
        ['الحماية بعد التصحيح', 'لا نضع طبقة الحماية إلا بعد اكتمال تصحيح اللمعة.'],
      ],
    },
    why: {
      eyebrow: '04 — لماذا فانتا',
      title: 'لماذا يختارنا أصحاب السيارات',
      intro: 'استوديو صغير عن قصد. سيارة واحدة في المساحة في كل مرة، واليدان نفساهما من الفحص حتى التسليم.',
      items: [
        {
          name: 'عرض سعر مكتوب أولًا',
          desc: 'توافق على نطاق العمل والسعر قبل أن نلمس السيارة.',
        },
        {
          name: 'قياس عمق الطلاء',
          desc: 'نسجّل سماكة الطلاء في كل لوح، فلا نزيل أكثر مما يحتمله الطلاء.',
        },
        {
          name: 'تقرير مصوّر عند التسليم',
          desc: 'نصوّر الطلاء عند الاستلام وعند التسليم لترى الفرق بنفسك.',
        },
        {
          name: 'استلام وتسليم',
          desc: 'يمكن ترتيب استلام السيارة وإعادتها داخل الرياض مع باقتي المميزة والسيراميك.',
        },
      ],
    },
    contact: {
      eyebrow: '05 — الموقع',
      title: 'زيارة الاستوديو.',
      intro: 'تُؤكَّد المواعيد عبر واتساب. أرسل طراز سيارتك ولونها والباقة التي تفكر فيها.',
      labels: ['العنوان', 'ساعات العمل', 'الهاتف', 'البريد الإلكتروني'],
      address: 'عنوان تجريبي — العليا، الرياض، المملكة العربية السعودية',
      hours: 'السبت إلى الخميس 9:00–21:00 · الجمعة 16:00–21:00',
      map: 'افتح في الخرائط',
      demo: 'بيانات تجريبية: العنوان والهاتف والبريد الإلكتروني أعلاه رموز توضيحية.',
      mapAlt: 'خريطة توضيحية لموقع الاستوديو في الرياض',
      mapTag: 'فانتا — الرياض',
    },
    footer: {
      tag: 'عناية فاخرة بالسيارات، الرياض.',
      navTitle: 'التنقل',
      contactTitle: 'الاستوديو',
      legal:
        '© 2026 فانتا للعناية بالسيارات. علامة افتراضية أُنشئت كعرض لأعمال التصميم. جميع الأسماء والأسعار وبيانات التواصل رموز توضيحية.',
      demo: 'رسومات الاستوديو من إنتاجنا، وليست صورًا فوتوغرافية.',
      top: 'إلى الأعلى',
    },
  },
};
