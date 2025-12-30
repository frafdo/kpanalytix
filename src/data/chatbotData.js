/**
 * @file chatbotData.js
 * @description FAQ responses for the chatbot
 * @structure Each response includes:
 * - keywords: Array of trigger words/phrases
 * - response: Object with 'en' and 'ar' translations
 *   - text: The response message
 *   - link: Optional link to relevant page
 */

export const chatbotResponses = [
  // Services
  {
    keywords: ['service', 'services', 'offer', 'provide', 'what do you do', 'خدمات', 'خدمة', 'تقدمون'],
    response: {
      en: {
        text: 'We offer comprehensive data analytics and AI solutions including: Predictive Analytics, Forecasting, Dashboard Development, AI Models, Data Governance, Statistical Consulting, KPI Measurement, and Strategic Policy Advisory. Our services help governments and businesses make data-driven decisions.',
        link: { path: '/services', text: 'View All Services' }
      },
      ar: {
        text: 'نقدم حلول تحليل البيانات والذكاء الاصطناعي الشاملة بما في ذلك: التحليلات التنبؤية، التنبؤ، تطوير لوحات المعلومات، نماذج الذكاء الاصطناعي، حوكمة البيانات، الاستشارات الإحصائية، قياس مؤشرات الأداء، والاستشارات السياسية الاستراتيجية.',
        link: { path: '/services', text: 'عرض جميع الخدمات' }
      }
    }
  },

  // Team
  {
    keywords: ['team', 'founder', 'ceo', 'who', 'konrad', 'pesendorfer', 'فريق', 'مؤسس', 'كونراد'],
    response: {
      en: {
        text: 'KPAnalytix was founded by Dr. Konrad Pesendorfer, a globally accomplished executive and economist with over 20 years of experience. He has led national statistical offices in Austria and Saudi Arabia, overseeing teams of 1,100+ employees, and served as Chairman of OECD statistics committees.',
        link: { path: '/team', text: 'Meet Our Team' }
      },
      ar: {
        text: 'تأسست كيه بي أناليتكس على يد الدكتور كونراد بيزيندورفر، تنفيذي واقتصادي متميز عالمياً بخبرة تزيد عن 20 عاماً. قاد مكاتب الإحصاء الوطنية في النمسا والسعودية، وأشرف على فرق تضم أكثر من 1,100 موظف.',
        link: { path: '/team', text: 'تعرف على فريقنا' }
      }
    }
  },

  // Contact
  {
    keywords: ['contact', 'reach', 'call', 'email', 'phone', 'get in touch', 'تواصل', 'اتصال', 'بريد', 'هاتف'],
    response: {
      en: {
        text: 'We\'d love to hear from you! You can reach us through our contact page where you can send a message directly to our team. We typically respond within 24-48 hours.',
        link: { path: '/contact', text: 'Contact Us' }
      },
      ar: {
        text: 'نود أن نسمع منك! يمكنك التواصل معنا من خلال صفحة الاتصال حيث يمكنك إرسال رسالة مباشرة لفريقنا. نرد عادة خلال 24-48 ساعة.',
        link: { path: '/contact', text: 'تواصل معنا' }
      }
    }
  },

  // Experience
  {
    keywords: ['experience', 'portfolio', 'projects', 'work', 'clients', 'خبرة', 'مشاريع', 'أعمال', 'عملاء'],
    response: {
      en: {
        text: 'We have extensive experience in: Census operations, National accounts & GDP measurement, Tourism analytics, Dashboard development, AI solutions, Statistical office building, and International benchmarking. Our founder has led major projects including the KSA 2022 Census and Austria\'s first register-based census.',
        link: { path: '/experience', text: 'View Our Experience' }
      },
      ar: {
        text: 'لدينا خبرة واسعة في: عمليات التعداد، الحسابات القومية وقياس الناتج المحلي، تحليلات السياحة، تطوير لوحات المعلومات، حلول الذكاء الاصطناعي، بناء المكاتب الإحصائية، والمقارنة المعيارية الدولية.',
        link: { path: '/experience', text: 'عرض خبراتنا' }
      }
    }
  },

  // About
  {
    keywords: ['about', 'company', 'kpanalytix', 'who are', 'عن', 'شركة', 'من نحن', 'كيه بي'],
    response: {
      en: {
        text: 'KPAnalytix is a premier data analytics and AI solutions company based in Riyadh, Saudi Arabia. We combine deep expertise in data science, economic policy, and international benchmarking to deliver transformative insights for government institutions and businesses.',
        link: { path: '/about', text: 'Learn More About Us' }
      },
      ar: {
        text: 'كيه بي أناليتكس هي شركة رائدة في تحليل البيانات وحلول الذكاء الاصطناعي مقرها الرياض، المملكة العربية السعودية. نجمع بين الخبرة العميقة في علم البيانات والسياسات الاقتصادية والمقارنة المعيارية الدولية.',
        link: { path: '/about', text: 'اعرف المزيد عنا' }
      }
    }
  },

  // Location
  {
    keywords: ['location', 'where', 'office', 'address', 'riyadh', 'saudi', 'موقع', 'أين', 'مكتب', 'عنوان', 'الرياض', 'سعودية'],
    response: {
      en: {
        text: 'KPAnalytix is headquartered in Riyadh, Saudi Arabia. Our team serves clients across the Kingdom and internationally. Please visit our contact page for our full address and contact details.',
        link: { path: '/contact', text: 'Get Directions' }
      },
      ar: {
        text: 'يقع مقر كيه بي أناليتكس في الرياض، المملكة العربية السعودية. يخدم فريقنا العملاء في جميع أنحاء المملكة ودولياً. يرجى زيارة صفحة الاتصال للحصول على العنوان الكامل.',
        link: { path: '/contact', text: 'احصل على الاتجاهات' }
      }
    }
  },

  // Pricing / Cost
  {
    keywords: ['price', 'cost', 'pricing', 'fee', 'quote', 'سعر', 'تكلفة', 'أسعار', 'عرض'],
    response: {
      en: {
        text: 'Our pricing is customized based on project scope and requirements. We\'d be happy to discuss your specific needs and provide a tailored proposal. Please reach out through our contact page to schedule a consultation.',
        link: { path: '/contact', text: 'Request a Quote' }
      },
      ar: {
        text: 'أسعارنا مخصصة بناءً على نطاق المشروع ومتطلباته. يسعدنا مناقشة احتياجاتك المحددة وتقديم عرض مخصص. يرجى التواصل من خلال صفحة الاتصال لتحديد موعد استشارة.',
        link: { path: '/contact', text: 'طلب عرض سعر' }
      }
    }
  },

  // AI / Machine Learning
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'ذكاء اصطناعي', 'تعلم آلي', 'تعلم عميق'],
    response: {
      en: {
        text: 'We develop advanced AI and machine learning solutions including: Natural Language Processing, Classification models, Automated document processing, Predictive analytics, and Pattern recognition. Our AI models are tailored to your specific business needs.',
        link: { path: '/services', text: 'Explore AI Solutions' }
      },
      ar: {
        text: 'نطور حلول الذكاء الاصطناعي والتعلم الآلي المتقدمة بما في ذلك: معالجة اللغة الطبيعية، نماذج التصنيف، معالجة المستندات الآلية، التحليلات التنبؤية، والتعرف على الأنماط.',
        link: { path: '/services', text: 'استكشف حلول الذكاء الاصطناعي' }
      }
    }
  },

  // Dashboard
  {
    keywords: ['dashboard', 'visualization', 'chart', 'report', 'tableau', 'لوحة', 'تصور', 'رسم بياني', 'تقرير'],
    response: {
      en: {
        text: 'We create interactive dashboards and data visualizations that transform complex data into clear, actionable insights. Our solutions include macroeconomic dashboards, KPI monitoring systems, and executive performance trackers with real-time updates.',
        link: { path: '/services', text: 'View Dashboard Services' }
      },
      ar: {
        text: 'نصمم لوحات معلومات تفاعلية وتصورات بيانات تحول البيانات المعقدة إلى رؤى واضحة وقابلة للتنفيذ. تشمل حلولنا لوحات الاقتصاد الكلي وأنظمة مراقبة مؤشرات الأداء.',
        link: { path: '/services', text: 'عرض خدمات لوحات المعلومات' }
      }
    }
  },

  // Greeting
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'مرحبا', 'أهلا', 'السلام', 'صباح', 'مساء'],
    response: {
      en: {
        text: 'Hello! Welcome to KPAnalytix. I\'m here to help you learn about our data analytics and AI solutions. Feel free to ask about our services, team, experience, or how to get in touch with us.',
        link: null
      },
      ar: {
        text: 'مرحباً! أهلاً بك في كيه بي أناليتكس. أنا هنا لمساعدتك في التعرف على حلول تحليل البيانات والذكاء الاصطناعي لدينا. لا تتردد في السؤال عن خدماتنا أو فريقنا أو خبراتنا.',
        link: null
      }
    }
  },

  // Thank you
  {
    keywords: ['thank', 'thanks', 'شكر', 'شكراً'],
    response: {
      en: {
        text: 'You\'re welcome! If you have any more questions, feel free to ask. We\'re here to help!',
        link: null
      },
      ar: {
        text: 'عفواً! إذا كان لديك أي أسئلة أخرى، لا تتردد في السؤال. نحن هنا للمساعدة!',
        link: null
      }
    }
  }
]
