/**
 * @file chatbotData.js
 * @description FAQ responses for chatbot fallback (when no API key)
 */

export const chatbotResponses = [
  {
    keywords: ['hello', 'hi', 'hey', 'مرحبا', 'اهلا', 'السلام'],
    response: {
      en: { text: "Hello! Welcome to KPAnalytix. How can I help you today? I can tell you about our services, team, or help you get in touch with us." },
      ar: { text: "مرحباً! أهلاً بك في KPAnalytix. كيف يمكنني مساعدتك اليوم؟ يمكنني إخبارك عن خدماتنا أو فريقنا أو مساعدتك في التواصل معنا." }
    }
  },
  {
    keywords: ['services', 'offer', 'provide', 'do', 'خدمات', 'تقدم', 'تقدمون'],
    response: {
      en: { 
        text: "We offer 12 specialized services including: Predictive Analytics, Forecasting, Dashboards, Data Governance, AI Models, Statistical Consulting, KPI Measurement, Policy Design, Impact Assessment, International Economics, Best Practices, and Benchmarking.",
        link: { path: '/services', text: 'View All Services' }
      },
      ar: { 
        text: "نقدم 12 خدمة متخصصة تشمل: التحليلات التنبؤية، التنبؤ، لوحات المعلومات، حوكمة البيانات، نماذج الذكاء الاصطناعي، الاستشارات الإحصائية، قياس مؤشرات الأداء، تصميم السياسات، تقييم الأثر، الاقتصاد الدولي، أفضل الممارسات، والمقارنة المعيارية.",
        link: { path: '/services', text: 'عرض جميع الخدمات' }
      }
    }
  },
  {
    keywords: ['predictive', 'analytics', 'forecast', 'تنبؤ', 'تحليلات'],
    response: {
      en: { 
        text: "Our Predictive Analytics service uses advanced ML algorithms to forecast trends and behaviors. We help you anticipate market changes and make data-driven decisions.",
        link: { path: '/services#predictive-analytics', text: 'Learn More' }
      },
      ar: { 
        text: "تستخدم خدمة التحليلات التنبؤية لدينا خوارزميات التعلم الآلي المتقدمة للتنبؤ بالاتجاهات والسلوكيات.",
        link: { path: '/services#predictive-analytics', text: 'اعرف المزيد' }
      }
    }
  },
  {
    keywords: ['ai', 'artificial', 'intelligence', 'machine', 'learning', 'ذكاء', 'اصطناعي'],
    response: {
      en: { 
        text: "We build custom AI and Machine Learning models tailored to your business challenges. Our solutions include NLP, Computer Vision, and predictive modeling.",
        link: { path: '/services#ai-models', text: 'Explore AI Solutions' }
      },
      ar: { 
        text: "نبني نماذج ذكاء اصطناعي وتعلم آلي مخصصة لتحديات عملك. تشمل حلولنا معالجة اللغة الطبيعية والرؤية الحاسوبية والنمذجة التنبؤية.",
        link: { path: '/services#ai-models', text: 'استكشف حلول الذكاء الاصطناعي' }
      }
    }
  },
  {
    keywords: ['dashboard', 'visualization', 'لوحة', 'معلومات', 'تصور'],
    response: {
      en: { 
        text: "Our Dashboard solutions provide interactive visualizations for real-time insights. We offer KPI tracking, custom reports, and data visualization tailored to your needs.",
        link: { path: '/services#dashboards', text: 'View Dashboard Services' }
      },
      ar: { 
        text: "توفر حلول لوحات المعلومات لدينا تصورات تفاعلية للحصول على رؤى في الوقت الفعلي.",
        link: { path: '/services#dashboards', text: 'عرض خدمات لوحات المعلومات' }
      }
    }
  },
  {
    keywords: ['team', 'founder', 'ceo', 'who', 'فريق', 'مؤسس', 'من'],
    response: {
      en: { 
        text: "KPAnalytix was co-founded by Dr. Konrad Pesendorfer (CEO) with 25+ years in executive leadership, and Dr. Hend Aljobaily (Chief Data Officer) who brings expertise in AI, forecasting models, and medical research analytics.",
        link: { path: '/team', text: 'Meet Our Team' }
      },
      ar: { 
        text: "تأسست KPAnalytix على يد د. كونراد بيزيندورفر (الرئيس التنفيذي) بخبرة 25+ عاماً في القيادة التنفيذية، ود. هند الجبيلي (الرئيسة التنفيذية للبيانات) ذات الخبرة في الذكاء الاصطناعي ونماذج التنبؤ وتحليلات البحث الطبي.",
        link: { path: '/team', text: 'تعرف على فريقنا' }
      }
    }
  },
  {
    keywords: ['konrad', 'pesendorfer', 'كونراد', 'بيزيندورفر'],
    response: {
      en: { 
        text: "Dr. Konrad Pesendorfer is the Founder & CEO of KPAnalytix. He has 25+ years of executive leadership experience, led Statistics Austria and GASTAT Saudi Arabia, and designed the KSA 2022 Census Project.",
        link: { path: '/team', text: 'Read Full Bio' }
      },
      ar: { 
        text: "د. كونراد بيزيندورفر هو المؤسس والرئيس التنفيذي لـ KPAnalytix. يتمتع بخبرة تزيد عن 30 عاماً في الاقتصاد الإحصائي، وقاد هيئة الإحصاء النمساوية والهيئة العامة للإحصاء السعودية.",
        link: { path: '/team', text: 'اقرأ السيرة الكاملة' }
      }
    }
  },
  {
    keywords: ['hend', 'aljobaily', 'هند', 'الجبيلي'],
    response: {
      en: { 
        text: "Dr. Hend Aljobaily is the Co-Founder & Chief Data Analytics & AI. She is a distinguished Chief Data Scientist with expertise in AI, Machine Learning, Big Data, and has built forecasting models for population, tourism, and finance, as well as medical research analytics.",
        link: { path: '/team', text: 'Read Full Bio' }
      },
      ar: { 
        text: "د. هند الجبيلي هي الشريك المؤسس ورئيس تحليلات البيانات والذكاء الاصطناعي. عالمة بيانات رئيسية متميزة ذات خبرة في الذكاء الاصطناعي والتعلم الآلي، وبنت نماذج تنبؤ للسكان والسياحة والمالية وتحليلات البحث الطبي.",
        link: { path: '/team', text: 'اقرأ السيرة الكاملة' }
      }
    }
  },
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'تواصل', 'اتصال', 'بريد'],
    response: {
      en: { 
        text: "You can reach us at office@kpanalytix.com or visit our contact page to send us a message. We're based in Riyadh, Saudi Arabia.",
        link: { path: '/contact', text: 'Contact Us' }
      },
      ar: { 
        text: "يمكنك التواصل معنا عبر office@kpanalytix.com أو زيارة صفحة الاتصال لإرسال رسالة. مقرنا في الرياض، المملكة العربية السعودية.",
        link: { path: '/contact', text: 'تواصل معنا' }
      }
    }
  },
  {
    keywords: ['location', 'address', 'where', 'riyadh', 'موقع', 'عنوان', 'أين', 'الرياض'],
    response: {
      en: { 
        text: "KPAnalytix is headquartered in Riyadh, Saudi Arabia. For detailed directions or to schedule a meeting, please contact us.",
        link: { path: '/contact', text: 'Get Directions' }
      },
      ar: { 
        text: "يقع مقر KPAnalytix الرئيسي في الرياض، المملكة العربية السعودية. للحصول على الاتجاهات أو لتحديد موعد اجتماع، يرجى التواصل معنا.",
        link: { path: '/contact', text: 'احصل على الاتجاهات' }
      }
    }
  },
  {
    keywords: ['about', 'company', 'عن', 'شركة', 'حول'],
    response: {
      en: { 
        text: "KPAnalytix is a premier data analytics and AI consulting firm based in Riyadh. We transform complex data into actionable insights for government and business clients.",
        link: { path: '/about', text: 'Learn About Us' }
      },
      ar: { 
        text: "KPAnalytix هي شركة رائدة في استشارات تحليل البيانات والذكاء الاصطناعي مقرها الرياض. نحول البيانات المعقدة إلى رؤى قابلة للتنفيذ.",
        link: { path: '/about', text: 'تعرف علينا' }
      }
    }
  },
  {
    keywords: ['experience', 'years', 'expertise', 'خبرة', 'سنوات'],
    response: {
      en: { 
        text: "Our leadership brings 25+ years of combined experience in statistical economics, data science, and AI. We've worked with government entities, corporations, and research institutions.",
        link: { path: '/experience', text: 'View Our Experience' }
      },
      ar: { 
        text: "يجلب فريق قيادتنا خبرة مشتركة تزيد عن 30 عاماً في الاقتصاد الإحصائي وعلوم البيانات والذكاء الاصطناعي.",
        link: { path: '/experience', text: 'عرض خبراتنا' }
      }
    }
  },
  {
    keywords: ['price', 'cost', 'pricing', 'quote', 'سعر', 'تكلفة', 'عرض'],
    response: {
      en: { 
        text: "Pricing varies based on project scope and requirements. Please contact us for a customized quote tailored to your needs.",
        link: { path: '/contact', text: 'Request a Quote' }
      },
      ar: { 
        text: "تختلف الأسعار حسب نطاق المشروع ومتطلباته. يرجى التواصل معنا للحصول على عرض سعر مخصص لاحتياجاتك.",
        link: { path: '/contact', text: 'اطلب عرض سعر' }
      }
    }
  },
  {
    keywords: ['government', 'public', 'sector', 'حكومة', 'حكومي', 'قطاع عام'],
    response: {
      en: { 
        text: "We have extensive experience working with government entities on public sector analytics, policy evaluation, and evidence-based decision making.",
        link: { path: '/experience', text: 'Government Experience' }
      },
      ar: { 
        text: "لدينا خبرة واسعة في العمل مع الجهات الحكومية في تحليلات القطاع العام وتقييم السياسات واتخاذ القرارات المبنية على الأدلة.",
        link: { path: '/experience', text: 'الخبرة الحكومية' }
      }
    }
  },
  {
    keywords: ['crn', 'trn', 'registration', 'license', 'سجل', 'تجاري', 'ضريبي'],
    response: {
      en: { 
        text: "KPAnalytix is a registered company in Saudi Arabia. CRN: 1010900500, TRN: 311458122400003.",
        link: { path: '/contact', text: 'Contact Us' }
      },
      ar: { 
        text: "KPAnalytix شركة مسجلة في المملكة العربية السعودية. رقم السجل التجاري: 1010900500، الرقم الضريبي: 311458122400003.",
        link: { path: '/contact', text: 'تواصل معنا' }
      }
    }
  },
  {
    keywords: ['thank', 'thanks', 'شكر', 'شكرا'],
    response: {
      en: { text: "You're welcome! Is there anything else I can help you with?" },
      ar: { text: "على الرحب والسعة! هل هناك أي شيء آخر يمكنني مساعدتك به؟" }
    }
  }
]
