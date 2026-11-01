import { ProjectItem, SkillItem, WorkflowStep } from '../types';

export const personalInfo = {
  name: {
    ar: 'خالد عبد الإله حسن الشجاع',
    en: "Khalid Abdulilah Hassan Al-Shoja'a"
  },
  title: {
    ar: 'مطور برمجيات Full-Stack',
    en: 'Full-Stack Software Developer'
  },
  experience: {
    ar: 'خبرة عملية قرابة 3 سنوات',
    en: '~3 Years Practical Experience'
  },
  location: {
    ar: 'المملكة العربية السعودية',
    en: 'Saudi Arabia'
  },
  email: 'alshujaa320@gmail.com',
  phone: '0570068031',
  phoneFormatted: '+966 57 006 8031',
  heroTagline: {
    ar: '«أحوّل الأفكار إلى أنظمة رقمية متكاملة.»',
    en: '"Turning Ideas Into Powerful Digital Solutions."'
  },
  bio: {
    ar: 'مطور برمجيات Full-Stack شغوف ومحترف بخبرة عملية تمتد لقرابة 3 سنوات في تطوير المواقع والأنظمة الإدارية المتكاملة والمشاريع الكبيرة. متخصص في بناء حلول رقمية قوية وقابلة للتوسع باستخدام أحدث تقنيات JavaScript و React.js و Node.js، مع التركيز على الأداء العالي وتجربة المستخدم المتميزة والأمان البرمجي.',
    en: 'Passionate and professional Full-Stack Software Developer with approximately 3 years of hands-on experience developing comprehensive administrative systems, large-scale web applications, and digital platforms. Specialized in engineering robust, scalable solutions using modern JavaScript, React.js, and Node.js with high performance, seamless user experience, and enterprise-grade reliability.'
  }
};

export const skillsData: SkillItem[] = [
  {
    name: 'JavaScript',
    nameEn: 'JavaScript (ES6+)',
    category: 'core',
    categoryAr: 'التقنيات الجوهرية',
    categoryEn: 'Core Technologies',
    level: 95,
    highlight: 'البرمجة غير المتزامنة، هندسة التطبيقات الحديثة، وإدارة الذاكرة والحالة.',
    highlightEn: 'Asynchronous programming, modern app architecture, and memory & state management.'
  },
  {
    name: 'React.js',
    nameEn: 'React.js Ecosystem',
    category: 'core',
    categoryAr: 'التقنيات الجوهرية',
    categoryEn: 'Core Technologies',
    level: 94,
    highlight: 'بناء واجهات تفاعلية فائقة السرعة، Custom Hooks، وإدارة الحالات المعقدة.',
    highlightEn: 'Ultra-fast reactive UIs, Custom Hooks, and robust state architecture.'
  },
  {
    name: 'Node.js',
    nameEn: 'Node.js Runtime',
    category: 'core',
    categoryAr: 'التقنيات الجوهرية',
    categoryEn: 'Core Technologies',
    level: 90,
    highlight: 'بناء خوادم RESTful APIs قوية، معالجة البيانات، وإدارة الصلاحيات والأمان.',
    highlightEn: 'Building robust RESTful APIs, high-throughput data processing, authentication & security.'
  },
  {
    name: 'Full-Stack Development',
    nameEn: 'Full-Stack Development',
    category: 'architecture',
    categoryAr: 'الهندسة والتطوير المتكامل',
    categoryEn: 'Architecture & Full Stack',
    level: 92,
    highlight: 'ربط متناغم بين الواجهات الأمامية والأنظمة الخلفية وقواعد البيانات بدقة متناهية.',
    highlightEn: 'Seamless end-to-end integration between front-end, back-end APIs, and databases.'
  },
  {
    name: 'Front-End Development',
    nameEn: 'Front-End Development',
    category: 'architecture',
    categoryAr: 'الهندسة والتطوير المتكامل',
    categoryEn: 'Architecture & Full Stack',
    level: 95,
    highlight: 'تطوير واجهات رقمية مبتكرة مع حركات وانتقالات انسيابية وتوافق كامل.',
    highlightEn: 'Building modern interfaces with smooth transitions, responsive grids, and micro-interactions.'
  },
  {
    name: 'Back-End Development',
    nameEn: 'Back-End Development',
    category: 'architecture',
    categoryAr: 'الهندسة والتطوير المتكامل',
    categoryEn: 'Architecture & Full Stack',
    level: 89,
    highlight: 'هندسة الـ APIs، التحقق من البيانات، أمان المعاملات، وهيكلة المسارات.',
    highlightEn: 'API architecture, secure request validation, transaction safety, and clean routing.'
  },
  {
    name: 'Administrative Systems',
    nameEn: 'Administrative Systems (ERP/CMS)',
    category: 'solutions',
    categoryAr: 'الحلول البرمجية والأنظمة',
    categoryEn: 'Enterprise & Solutions',
    level: 94,
    highlight: 'بناء أنظمة تشغيلية وإدارية متعددة الأدوار والصلاحيات للشركات والمؤسسات.',
    highlightEn: 'Multi-role operational management systems with strict access control and workflows.'
  },
  {
    name: 'Dashboard Development',
    nameEn: 'Dashboard Development',
    category: 'solutions',
    categoryAr: 'الحلول البرمجية والأنظمة',
    categoryEn: 'Enterprise & Solutions',
    level: 93,
    highlight: 'لوحات تحكم تفاعلية متقدمة، تصور البيانات والتقارير والإحصائيات الفورية.',
    highlightEn: 'Interactive real-time dashboards with analytics, reports, and KPI visualization.'
  },
  {
    name: 'E-Commerce Development',
    nameEn: 'E-Commerce Development',
    category: 'solutions',
    categoryAr: 'الحلول البرمجية والأنظمة',
    categoryEn: 'Enterprise & Solutions',
    level: 91,
    highlight: 'تطوير متاجر رقمية متكاملة: تصفح المنتجات، سلة المشتريات، وتجربة تسوق راقية.',
    highlightEn: 'Building high-conversion online stores with product catalogs, carts, and checkout flows.'
  },
  {
    name: 'Responsive Web Design',
    nameEn: 'Responsive Web Design',
    category: 'solutions',
    categoryAr: 'الحلول البرمجية والأنظمة',
    categoryEn: 'Enterprise & Solutions',
    level: 96,
    highlight: 'تصميم متجاوب بنهج Mobile-First يضمن تجربة مثالية على جميع مقاسات الشاشات.',
    highlightEn: 'Mobile-First design methodology ensuring flawless presentation across all display resolutions.'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'hotel-system',
    title: 'نظام إدارة الفندق المتكامل',
    titleEn: 'Hotel Management Operating System',
    category: 'الأنظمة الإدارية والفندقية',
    categoryEn: 'Hospitality & Enterprise Systems',
    description: 'نظام إداري متكامل لإدارة عمليات الفندق والغرف والأدوار والعمليات التشغيلية بدقة وكفاءة عالية.',
    descriptionEn: 'A comprehensive operational platform managing hotel bookings, room inventories, staff roles, and daily hospitality workflows.',
    overview: 'حل برمجي مؤسسي صُمم لتسهيل إدارة الفنادق وأماكن الضيافة، ويتضمن تسجيل دخول مؤمن، إدارة حالات الغرف والحجوزات، متابعة الخدمات اللوجستية، وتوزيع الأدوار والصلاحيات على الموظفين والإدارة بكفاءة وسرعة فائقة.',
    overviewEn: 'An enterprise management suite engineered for modern hospitality venues. Features secure authentication, real-time room availability status, reservation pipelines, housekeeping logistics, and fine-grained role-based permissions.',
    url: 'https://hotel-smjm.vercel.app/login',
    tags: ['React.js', 'Node.js', 'JavaScript', 'Administrative Systems', 'Dashboard Development', 'Responsive Design'],
    gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    imageType: 'hotel',
    stats: [
      { label: 'النوع', labelEn: 'Type', value: 'نظام إداري سحابي' },
      { label: 'التوافق', labelEn: 'Platform', value: 'Web / Responsive' },
      { label: 'الحالة', labelEn: 'Status', value: 'مباشر (Live)' }
    ],
    features: {
      ar: [
        'نظام مصادقة متقدم ودخول آمن متعدد الصلاحيات (Admin, Reception, Staff).',
        'لوحة تحكم تفاعلية لمتابعة إشغال الغرف ومؤشرات الأداء التشغيلية.',
        'إدارة الحجوزات، تسكين النزلاء، وتوثيق أوقات الدخول والمغادرة بدقة.',
        'إدارة فئات الغرف والأسعار والخدمات الإضافية بنقرات معدودة.',
        'واجهة استخدام سريعة ومصممة لدعم سرعة إنجاز العمليات الفندقية اليومية.'
      ],
      en: [
        'Advanced authentication and role-based access control (Admin, Reception, Staff).',
        'Interactive dashboard monitoring room occupancy rates and operational metrics.',
        'Reservation lifecycle, check-in/check-out tracking, and guest management.',
        'Room categorization, pricing tiers, and auxiliary services configuration.',
        'High-speed user interface engineered to optimize daily front-desk workflows.'
      ]
    }
  },
  {
    id: 'aqar-system',
    title: 'نظام إدارة العقارات المتكامل (عقار)',
    titleEn: 'Real Estate Management System (Aqar)',
    category: 'الأنظمة العقارية والإدارية',
    categoryEn: 'Real Estate & Property Management',
    description: 'نظام متكامل لإدارة العقارات، يخدم المالك والشركة والمستأجر، ويقدم أدوات ذكية لإدارة العمليات والبيانات.',
    descriptionEn: 'An integrated multi-stakeholder property management platform serving owners, real estate firms, and tenants.',
    overview: 'منصة عقارية متكاملة تربط أطراف المعاملات العقارية في بيئة برمجية موحدة. تتيح للملاك والشركات متابعة العقارات والوحدات السكنية والتجارية، عقود الإيجار، المدفوعات والتحصيل، وطلبات الصيانة مع لوحات معلومات مفصلة.',
    overviewEn: 'A unified property tech platform uniting real estate owners, management agencies, and tenants. Facilitates comprehensive property listings, lease contract administration, automated payment tracking, and maintenance dispatch.',
    url: 'https://khald101.github.io/aqar/?v=3#/login',
    tags: ['React.js', 'JavaScript', 'Administrative Systems', 'Dashboard Development', 'Front-End Development', 'Responsive Design'],
    gradient: 'from-emerald-600 via-teal-600 to-cyan-500',
    imageType: 'real-estate',
    stats: [
      { label: 'المستخدمين', labelEn: 'Users', value: 'مالك / شركة / مستأجر' },
      { label: 'الإصدار', labelEn: 'Version', value: 'V3 Enterprise' },
      { label: 'الحالة', labelEn: 'Status', value: 'مباشر (Live)' }
    ],
    features: {
      ar: [
        'هيكلة متقدمة تدعم 3 بوابات دخول مختلفة: المالك، إدارة الشركة، والمستأجر.',
        'إدارة دورة حياة الوحدات العقارية من الشواغر إلى العقود المبرمة.',
        'متابعة الإيرادات والتحصيلات المالية وجداول استحقاق الإيجارات.',
        'سجل شامل للطلبات والشكاوى وأعمال الصيانة الدورية والطارئة.',
        'تصميم تفاعلي يدعم العمل المكتبي والميداني عبر الأجهزة الذكية.'
      ],
      en: [
        'Multi-tenant architecture supporting 3 portals: Owners, Management Agency, and Tenants.',
        'Full lifecycle management of residential & commercial units from vacancies to signed leases.',
        'Financial tracking of revenues, due rental installments, and payment logs.',
        'Centralized ticketing system for maintenance requests and tenant communications.',
        'Responsive layout optimized for both desktop operations and field inspections on mobile.'
      ]
    }
  },
  {
    id: 'elite-perfume-store',
    title: 'متجر النخبة للعطور الملكية',
    titleEn: 'Saudi Elite Perfume Luxury Store',
    category: 'المتاجر والتجارة الإلكترونية',
    categoryEn: 'Luxury E-Commerce & Retail',
    description: 'متجر إلكتروني فاخر لعرض المنتجات والعطور الملكية وإتاحة تجربة تسوق رقمية راقية وجذابة.',
    descriptionEn: 'A premier luxury digital storefront showcasing royal fragrances with a captivating shopping experience.',
    overview: 'واجهة متجر إلكتروني فخم تم تصميمه بأسلوب بصري يعكس الهوية الملكية لعطور النخبة السعودية. يتضمن عرضًا تفاعليًا للمنتجات، تفاصيل المكونات والنوتات العطرية، إضافة المنتجات للسلة، وإتمام الطلبات بسلاسة.',
    overviewEn: 'A high-end e-commerce experience crafted with sophisticated aesthetics to represent Saudi luxury perfumery. Highlights interactive fragrance showcases, notes breakdown, seamless cart management, and fluid checkout.',
    url: 'https://khald101.github.io/Saudi-Elite-Perfume-Store/',
    tags: ['JavaScript', 'Front-End Development', 'E-Commerce Development', 'Responsive Web Design', 'Interactive UI'],
    gradient: 'from-amber-500 via-rose-600 to-purple-600',
    imageType: 'perfume',
    stats: [
      { label: 'القطاع', labelEn: 'Sector', value: 'العطور الفاخرة' },
      { label: 'التجربة', labelEn: 'Experience', value: 'تسوق فوري سلس' },
      { label: 'الحالة', labelEn: 'Status', value: 'مباشر (Live)' }
    ],
    features: {
      ar: [
        'تصميم بصري فاخر يعكس أناقة العطور الملكية والمقتنيات الخاصة.',
        'عرض المنتجات بتفاصيل النوتات العطرية ومكونات كل عطر بدقة.',
        'سلة مشتريات ديناميكية فورية تتيح تعديل الكميات وحساب الإجمالي تلقائيًا.',
        'تجربة تصفح سريعة وخفيفة مصممة خصيصًا لتجربة تسوق ممتازة على الهواتف.',
        'تأثيرات بصرية جذابة وحركات سلسة تضفي طابع الفخامة والرقي.'
      ],
      en: [
        'Exquisite luxury visual design tailored to represent royal fragrance collections.',
        'In-depth olfactory notes presentation and scent breakdown for every fragrance.',
        'Dynamic real-time shopping cart with instant quantity adjustments and total calculation.',
        'High-performance, lightweight browsing engineered for frictionless mobile shopping.',
        'Smooth aesthetic animations and micro-interactions reinforcing high-end brand prestige.'
      ]
    }
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: 'تحليل المتطلبات',
    titleEn: 'Requirements Analysis',
    description: 'فهم عميق لأهداف المشروع، نطاق العمل، احتياجات المستخدمين، ومتطلبات النظام التقنية والتشغيلية.',
    descriptionEn: 'In-depth discovery of project goals, business logic, user personas, and technical requirements.',
    points: {
      ar: [
        'جلسات استكشاف لتحديد أهداف النظام بدقة.',
        'تحديد حالات الاستخدام (Use Cases) والأدوار والصلاحيات.',
        'وضع المواصفات الفنية والمتطلبات غير الوظيفية كالسرعة والأمان.'
      ],
      en: [
        'Discovery sessions to clearly define system goals.',
        'Mapping user journeys, permission matrices, and roles.',
        'Defining performance, security, and scalability benchmarks.'
      ]
    },
    icon: 'Search'
  },
  {
    step: 2,
    title: 'التخطيط والمعمارية',
    titleEn: 'Architecture & Planning',
    description: 'رسم المخططات الهندسية للبيانات، معمارية الواجهات، وتصميم تدفق العمليات لضمان أداء مستقر وقابل للتوسع.',
    descriptionEn: 'Designing robust data schemas, front-end architecture, and API flowcharts for high stability.',
    points: {
      ar: [
        'هندسة قواعد البيانات والعلاقات بين الكيانات.',
        'تخطيط مسارات الـ APIs وهيكل تبادل البيانات.',
        'تحديد الهيكلية البرمجية واختيار أفضل النماذج المعمارية.'
      ],
      en: [
        'Database modeling and entity-relationship architecture.',
        'RESTful API routing and data contract specification.',
        'Modular system design ensuring clean code separation.'
      ]
    },
    icon: 'Layers'
  },
  {
    step: 3,
    title: 'التصميم والتطوير',
    titleEn: 'Design & Development',
    description: 'كتابة كود برمجي نظيف واحترافي باستخدام أحدث معايير JavaScript و React و Node.js مع واجهات عصرية تفاعلية.',
    descriptionEn: 'Writing clean, scalable code following modern JavaScript, React, and Node.js best practices.',
    points: {
      ar: [
        'بناء واجهات مستخدم متجاوبة بنهج Mobile-First فائق السرعة.',
        'برمجة المنطق البرمجي والربط الكامل مع واجهات الخدمات الخلفية.',
        'تطبيق أفضل ممارسات كتابة الكود النظيف والمستدام.'
      ],
      en: [
        'Building pixel-perfect, responsive Mobile-First interfaces.',
        'Implementing business logic and seamless API integration.',
        'Strict adherence to clean code, modularity, and maintainability.'
      ]
    },
    icon: 'Code2'
  },
  {
    step: 4,
    title: 'الاختبار والتحسين',
    titleEn: 'Testing & Optimization',
    description: 'إجراء اختبارات دقيقة للوظائف، الأداء، والتوافق على مختلف المتصفحات والشاشات مع تحسين السرعة والأمان.',
    descriptionEn: 'Rigorous functional testing, cross-browser audits, performance tuning, and security hardening.',
    points: {
      ar: [
        'فحص الأخطاء والتأكد من سلامة جميع مسارات العمل والتفاعلات.',
        'تحسين أوقات الاستجابة وضغط الملفات لسرعة تحميل استثنائية.',
        'مراجعة التوافق التام على مختلف مقاسات الهواتف والأجهزة اللوحية.'
      ],
      en: [
        'End-to-end user scenario testing and defect resolution.',
        'Asset minification, bundle optimization, and caching strategies.',
        'Thorough responsiveness testing across real mobile and desktop screens.'
      ]
    },
    icon: 'ShieldCheck'
  },
  {
    step: 5,
    title: 'التسليم والتشغيل',
    titleEn: 'Deployment & Delivery',
    description: 'نشر النظام على بيئة الإنتاج السحابية، التحقق من الجاهزية الكاملة، وتقديم الدعم الفني لضمان التشغيل المستمر.',
    descriptionEn: 'Production deployment to cloud infrastructure, final verification, and handover for live operation.',
    points: {
      ar: [
        'نشر مستقر وسريع مع إعداد خوادم الإنتاج والشهادات الأمنية.',
        'التحقق النهائي من جاهزية كافة الروابط وقواعد البيانات.',
        'تسليم المشروع مع وثائق التشغيل والدعم الفني اللازم.'
      ],
      en: [
        'Stable cloud deployment with automated CI/CD and SSL security.',
        'Final live verification of endpoints, links, and databases.',
        'Project handover with operational guidance and continuous support.'
      ]
    },
    icon: 'Rocket'
  }
];

export const navigationLinks = [
  { id: 'hero', labelAr: 'الرئيسية', labelEn: 'Home' },
  { id: 'about', labelAr: 'عني', labelEn: 'About' },
  { id: 'skills', labelAr: 'المهارات', labelEn: 'Skills' },
  { id: 'projects', labelAr: 'المشاريع', labelEn: 'Projects' },
  { id: 'workflow', labelAr: 'طريقة العمل', labelEn: 'Process' },
  { id: 'contact', labelAr: 'تواصل معي', labelEn: 'Contact' }
];
