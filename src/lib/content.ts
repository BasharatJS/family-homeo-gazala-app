export type Language = "hi" | "en";

// Doctor identity stays in English regardless of selected language.
export const DOCTOR = {
  name: "Dr. Gajala Parween",
  degree: "BHMS (MU), DMT",
  phone: "9161687595",
  phoneDisplay: "+91 91616 87595",
  whatsappNumber: "919161687595",
  email: "familyhomeoclinic@gmail.com",
  photo:
    "https://img.freepik.com/premium-photo/young-arab-woman-doctor-hijab-medical-mask-gloves-standing-hospital-using-tablet_662214-408883.jpg",
};

export const ICONS = {
  expertise: ["HeartPulse", "Baby", "Leaf", "Pill"] as const,
  whyUs: [
    "Stethoscope",
    "Target",
    "Leaf",
    "Sparkles",
    "Users",
    "HandHeart",
  ] as const,
  services: [
    "HeartPulse",
    "Baby",
    "ShieldPlus",
    "Leaf",
    "Brain",
    "ShieldCheck",
  ] as const,
};

export const SERVICE_META = [
  { initial: 500, followup: 300, duration: 45 },
  { initial: 400, followup: 250, duration: 30 },
  { initial: 600, followup: 350, duration: 60 },
  { initial: 450, followup: 275, duration: 40 },
  { initial: 550, followup: 325, duration: 50 },
  { initial: 350, followup: 200, duration: 30 },
];

export interface ExpertiseItem {
  title: string;
  desc: string;
}

export interface WhyUsItem {
  title: string;
  desc: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  conditions: string[];
}

export interface TestimonialItem {
  name: string;
  age: number;
  location: string;
  condition: string;
  text: string;
}

export interface HourRow {
  day: string;
  time: string;
}

export interface SiteContent {
  nav: {
    home: string;
    about: string;
    services: string;
    testimonials: string;
    contact: string;
    bookAppointment: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaBook: string;
    ctaWhatsapp: string;
    statYears: string;
    statPatients: string;
    statSuccess: string;
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    specialistTag: string;
    bioText: string;
    expertiseTitle: string;
    expertiseItems: ExpertiseItem[];
    missionTitle: string;
    missionText: string;
  };
  whyUs: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: WhyUsItem[];
    cta: string;
  };
  services: {
    sectionTag: string;
    title: string;
    subtitle: string;
    initialLabel: string;
    followupLabel: string;
    durationSuffix: string;
    conditionsLabel: string;
    moreLabel: string;
    lessLabel: string;
    items: ServiceItem[];
    ctaBook: string;
    ctaWhatsapp: string;
  };
  testimonials: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  stats: {
    patients: string;
    success: string;
    years: string;
    support: string;
  };
  cta: {
    title: string;
    ctaBook: string;
    ctaWhatsapp: string;
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    visitTitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hours: HourRow[];
    formTitle: string;
    formName: string;
    formPhone: string;
    formService: string;
    formMessage: string;
    formSubmit: string;
    guaranteeTitle: string;
    guaranteeText: string;
    emergencyTitle: string;
    emergencySubtitle: string;
    freeConsultTitle: string;
    freeConsultSubtitle: string;
    findUsTitle: string;
    directTitle: string;
    callNow: string;
    whatsappUs: string;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
  };
  modal: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    service: string;
    selectService: string;
    date: string;
    time: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    note: string;
    close: string;
  };
}

export const content: Record<Language, SiteContent> = {
  hi: {
    nav: {
      home: "होम",
      about: "डॉक्टर के बारे में",
      services: "सेवाएँ",
      testimonials: "मरीज़ों की राय",
      contact: "संपर्क करें",
      bookAppointment: "अपॉइंटमेंट बुक करें",
    },
    hero: {
      badge: "महिलाओं और बच्चों के इलाज में माहिर होम्योपैथी डॉक्टर",
      title: "प्राकृतिक इलाज से",
      titleHighlight: "अच्छी सेहत की ओर",
      subtitle:
        "हर मरीज़ के हिसाब से इलाज और अपनेपन भरी देखभाल पाइए। हम महिलाओं, बच्चों और पूरे परिवार की सेहत के लिए प्राकृतिक होम्योपैथी इलाज में माहिर हैं।",
      ctaBook: "अपॉइंटमेंट बुक करें",
      ctaWhatsapp: "WhatsApp पर बुक करें",
      statYears: "साल का अनुभव",
      statPatients: "मरीज़ों का इलाज",
      statSuccess: "सफलता दर",
    },
    about: {
      sectionTag: "डॉक्टर से मिलिए",
      title: "आपकी भरोसेमंद होम्योपैथी डॉक्टर",
      subtitle: "महिलाओं और बच्चों की सेहत में माहिर, अपनेपन भरी होम्योपैथी देखभाल",
      specialistTag: "महिलाओं और बच्चों की बीमारियों में माहिर",
      bioText:
        "डॉ. गजाला परवीन पिछले 5 साल से होम्योपैथी में इलाज कर रही हैं। वे महिलाओं और बच्चों की सेहत की जानी-मानी डॉक्टर हैं। उनके अपनेपन भरे इलाज और प्राकृतिक तरीकों की अच्छी समझ ने हज़ारों परिवारों को सेहतमंद बनाया है।",
      expertiseTitle: "किन चीज़ों में माहिर हैं",
      expertiseItems: [
        {
          title: "महिलाओं की सेहत",
          desc: "महिलाओं की हर तरह की सेहत समस्या का इलाज",
        },
        {
          title: "बच्चों की देखभाल",
          desc: "बच्चों की बीमारियों का सौम्य और प्राकृतिक इलाज",
        },
        {
          title: "प्राकृतिक इलाज",
          desc: "होम्योपैथी के तरीकों से पूरे शरीर का ध्यान",
        },
        {
          title: "पुरानी बीमारियाँ",
          desc: "लंबे समय से चली आ रही बीमारियों का इलाज",
        },
      ],
      missionTitle: "हमारा मकसद",
      missionText:
        "“हर मरीज़ को उसकी ज़रूरत के हिसाब से अपनेपन भरा होम्योपैथी इलाज देना, जो बीमारी की जड़ को ठीक करे और पूरी सेहत का ध्यान रखे। हम सिर्फ बीमारी का नहीं, इंसान का इलाज करने में विश्वास रखते हैं — खासकर महिलाओं और बच्चों की सेहत का पूरा ख्याल रखते हुए।”",
    },
    whyUs: {
      sectionTag: "हमें क्यों चुनें",
      title: "हमारे साथ फ़र्क महसूस करें",
      subtitle:
        "हमारी पूरी होम्योपैथी देखभाल, सालों का अनुभव और आपके परिवार की सेहत के लिए हमारा साथ — यही हमारी पहचान है",
      items: [
        {
          title: "अनुभवी होम्योपैथी डॉक्टर",
          desc: "डॉ. गजाला परवीन एक योग्य BHMS (MU), DMT डॉक्टर हैं जिन्हें महिलाओं और बच्चों की सेहत में सालों का अनुभव है। हज़ारों परिवार सुरक्षित और असरदार इलाज के लिए उन पर भरोसा करते हैं।",
        },
        {
          title: "जड़ से इलाज",
          desc: "हम सिर्फ लक्षण नहीं, बीमारी की असली वजह का इलाज करते हैं, ताकि आराम लंबे समय तक रहे। हम शरीर, मन और भावनाओं — तीनों का ध्यान रखते हैं।",
        },
        {
          title: "सुरक्षित और प्राकृतिक दवाइयाँ",
          desc: "100% प्राकृतिक होम्योपैथी दवाइयाँ, जिनका कोई नुकसान नहीं। ये दवाइयाँ शरीर के साथ मिलकर धीरे-धीरे असर करती हैं और हर उम्र के लिए सही हैं।",
        },
        {
          title: "आपके हिसाब से इलाज",
          desc: "हर मरीज़ को उसकी ज़रूरत के हिसाब से अलग इलाज मिलता है। हम जानते हैं हर इंसान अलग है, इसलिए उसका इलाज भी अलग होना चाहिए।",
        },
        {
          title: "महिलाओं और बच्चों की सेहत में माहिर",
          desc: "गर्भावस्था, हार्मोन की समस्या और बच्चों की बीमारियों के लिए भरोसेमंद देखभाल। शुरुआत से लेकर बच्चों की देखभाल तक, हल्का और असरदार इलाज।",
        },
        {
          title: "मरीज़ों का साथ",
          desc: "आसान बातचीत, आसान अपॉइंटमेंट और लगातार फॉलो-अप। हम सिर्फ इलाज तक नहीं, हमेशा साथ रहने में विश्वास रखते हैं।",
        },
      ],
      cta: "आज ही शुरू करें",
    },
    services: {
      sectionTag: "हमारी सेवाएँ",
      title: "हमारी खास होम्योपैथी सेवाएँ",
      subtitle: "आपके पूरे परिवार की सेहत के लिए होम्योपैथी इलाज",
      initialLabel: "पहली विज़िट",
      followupLabel: "फॉलो-अप",
      durationSuffix: "मिनट",
      conditionsLabel: "किन बीमारियों का इलाज",
      moreLabel: "और देखें",
      lessLabel: "कम देखें",
      items: [
        {
          title: "महिलाओं की सेहत",
          desc: "महिलाओं से जुड़ी सेहत समस्याओं का पूरा इलाज",
          conditions: [
            "PCOS और ओवरी सिस्ट",
            "पीरियड्स में गड़बड़ी",
            "मां बनने में मदद",
            "गर्भावस्था के दौरान देखभाल",
            "मेनोपॉज़ की तकलीफ",
            "थायरॉइड की गड़बड़ी",
          ],
        },
        {
          title: "बच्चों की देखभाल",
          desc: "बच्चों की सेहत और बढ़वार के लिए हल्का इलाज",
          conditions: [
            "बार-बार सर्दी-खांसी",
            "एलर्जी और त्वचा की तकलीफ",
            "पेट की तकलीफ",
            "बच्चे की बढ़वार में मदद",
            "टीका लगने के बाद देखभाल",
            "बच्चे के व्यवहार की समस्या",
          ],
        },
        {
          title: "पुरानी बीमारियों का इलाज",
          desc: "लंबे समय से चली आ रही बीमारियों की देखभाल",
          conditions: [
            "डायबिटीज़",
            "हाई ब्लड प्रेशर (बीपी)",
            "गठिया और जोड़ों का दर्द",
            "माइग्रेन",
            "त्वचा की बीमारियाँ",
            "सांस की तकलीफ",
          ],
        },
        {
          title: "पेट और पाचन",
          desc: "पेट और पाचन की तकलीफ के लिए प्राकृतिक इलाज",
          conditions: [
            "IBS और पाचन की तकलीफ",
            "एसिडिटी",
            "कब्ज़",
            "खाने से एलर्जी",
            "लीवर की तकलीफ",
            "भूख न लगना",
          ],
        },
        {
          title: "मानसिक सेहत",
          desc: "मन और भावनाओं की सेहत का पूरा ध्यान",
          conditions: [
            "चिंता और घबराहट",
            "डिप्रेशन और मूड बदलना",
            "तनाव",
            "नींद न आना",
            "याददाश्त कमज़ोर होना",
            "व्यवहार में बदलाव",
          ],
        },
        {
          title: "बीमारी से बचाव और इम्यूनिटी",
          desc: "इम्यूनिटी बढ़ाकर बीमारी से बचाव",
          conditions: [
            "इम्यूनिटी बढ़ाना",
            "मौसम बदलने पर बीमारी से बचाव",
            "टीकाकरण में मदद",
            "सेहत जांच",
            "सही जीवनशैली की सलाह",
            "तनाव मुक्त जीवन",
          ],
        },
      ],
      ctaBook: "अभी अपॉइंटमेंट लें",
      ctaWhatsapp: "WhatsApp पर बुक करें",
    },
    testimonials: {
      sectionTag: "मरीज़ों की राय",
      title: "हमारे मरीज़ क्या कहते हैं",
      subtitle: "उन परिवारों की सच्ची बातें, जिन्हें हमारे इलाज से आराम और उम्मीद मिली",
      items: [
        {
          name: "प्रिया शर्मा",
          age: 32,
          location: "मुंबई",
          condition: "PCOS और पीरियड्स में गड़बड़ी",
          text: "डॉ. गजाला परवीन ने मेरी ज़िंदगी बदल दी! सालों से PCOS से परेशान थी। उनके इलाज से न सिर्फ मेरे पीरियड्स सही हुए, बल्कि मैं प्राकृतिक तरीके से मां भी बन पाई। उनके अपनेपन और अच्छी दवाइयों ने मुझे उम्मीद दी, जब मेरे पास कुछ नहीं बचा था।",
        },
        {
          name: "राजेश कुमार",
          age: 45,
          location: "दिल्ली",
          condition: "डायबिटीज़ का इलाज",
          text: "मेरा शुगर लेवल सालों से कंट्रोल में नहीं आ रहा था। डॉक्टर साहिबा के इलाज और लगातार फॉलो-अप से अब यह पूरी तरह कंट्रोल में है। बहुत अच्छी और भरोसेमंद डॉक्टर।",
        },
        {
          name: "सुनीता देवी",
          age: 8,
          location: "पटना",
          condition: "बार-बार सर्दी-खांसी",
          text: "मेरी बेटी को बार-बार सर्दी-खांसी हो जाती थी। डॉक्टर साहिबा की दवाइयों से आराम भी मिला और उसकी इम्यूनिटी भी काफी बढ़ गई। अब वह बहुत कम बीमार पड़ती है।",
        },
        {
          name: "अनिता वर्मा",
          age: 29,
          location: "कोलकाता",
          condition: "तनाव और चिंता",
          text: "काम के तनाव और चिंता से मैं बहुत परेशान थी। होम्योपैथी इलाज ने बिना किसी नुकसान के मुझे शांत रहना सिखाया। मैं बहुत खुश हूं।",
        },
        {
          name: "विक्रम सिंह",
          age: 52,
          location: "लखनऊ",
          condition: "गठिया और जोड़ों का दर्द",
          text: "जोड़ों के दर्द की वजह से चलना मुश्किल हो गया था। कुछ महीनों के इलाज के बाद अब मैं बिना किसी तकलीफ के चल-फिर सकता हूं। धन्यवाद डॉक्टर साहिबा।",
        },
        {
          name: "कविता नायर",
          age: 35,
          location: "बेंगलुरु",
          condition: "थायरॉइड की गड़बड़ी",
          text: "थायरॉइड की तकलीफ के लिए मैंने कई डॉक्टरों को दिखाया, पर आराम यहीं मिला। डॉक्टर साहिबा हर मरीज़ को पूरा समय और ध्यान देती हैं।",
        },
      ],
    },
    stats: {
      patients: "खुश परिवार",
      success: "सफलता दर",
      years: "साल का अनुभव",
      support: "मदद हमेशा उपलब्ध",
    },
    cta: {
      title: "अपनी सेहत सुधारने की शुरुआत करना चाहते हैं?",
      ctaBook: "अपॉइंटमेंट बुक करें",
      ctaWhatsapp: "WhatsApp पर बुक करें",
    },
    contact: {
      sectionTag: "संपर्क करें",
      title: "जुड़े रहें",
      subtitle:
        "अपनेपन भरी होम्योपैथी देखभाल चाहिए? अपॉइंटमेंट, सलाह या किसी भी सेहत समस्या के लिए हमसे संपर्क करें।",
      visitTitle: "हमारे क्लिनिक पर आइए",
      addressLabel: "पता",
      address: "लाभा, ज़ीरो माइल से पश्चिम, दानी हॉस्पिटल के ऊपर (मोजिबुर कॉम्प्लेक्स), कटिहार, बिहार 854116",
      phoneLabel: "फ़ोन नंबर",
      emailLabel: "ईमेल",
      hoursLabel: "क्लिनिक का समय",
      hours: [
        { day: "सोम - शनि", time: "सुबह 9:00 - रात 8:00" },
        { day: "रविवार", time: "सुबह 10:00 - दोपहर 2:00" },
        { day: "इमरजेंसी", time: "किसी भी समय कॉल करें" },
      ],
      formTitle: "मैसेज भेजें",
      formName: "आपका नाम",
      formPhone: "फ़ोन नंबर",
      formService: "सेवा चुनें",
      formMessage: "अपनी बात लिखें",
      formSubmit: "मैसेज भेजें",
      guaranteeTitle: "जल्दी जवाब मिलेगा",
      guaranteeText:
        "हम क्लिनिक के समय के दौरान आमतौर पर 2-4 घंटे में जवाब देते हैं। इमरजेंसी होम्योपैथी देखभाल के लिए, कृपया हमें सीधे कॉल करें।",
      emergencyTitle: "इमरजेंसी देखभाल",
      emergencySubtitle: "कभी भी कॉल करें",
      freeConsultTitle: "मुफ़्त सलाह",
      freeConsultSubtitle: "पहली विज़िट",
      findUsTitle: "हमें यहाँ खोजें",
      directTitle: "सीधे बात करना चाहते हैं? अभी जुड़ें!",
      callNow: "अभी कॉल करें",
      whatsappUs: "WhatsApp करें",
    },
    footer: {
      tagline:
        "महिलाओं और बच्चों के लिए अपनेपन भरी, प्राकृतिक होम्योपैथी देखभाल — आपके परिवार की सेहत के लिए हमेशा साथ।",
      quickLinksTitle: "ज़रूरी लिंक",
      servicesTitle: "सेवाएँ",
      contactTitle: "संपर्क जानकारी",
      rights: "सभी अधिकार सुरक्षित।",
    },
    modal: {
      title: "अपॉइंटमेंट बुक करें",
      subtitle: "फॉर्म भरें, हम WhatsApp पर कन्फर्म कर देंगे",
      name: "आपका नाम",
      namePlaceholder: "जैसे: प्रिया शर्मा",
      phone: "फ़ोन नंबर",
      phonePlaceholder: "10 अंकों का मोबाइल नंबर",
      service: "सेवा चुनें",
      selectService: "-- सेवा चुनें --",
      date: "किस दिन आना है",
      time: "किस समय आना है",
      message: "और कुछ बताना है? (वैकल्पिक)",
      messagePlaceholder: "अपनी तकलीफ के बारे में थोड़ा बताएं...",
      submit: "WhatsApp पर भेजें",
      note: "सबमिट करते ही WhatsApp खुलेगा और आपकी जानकारी सीधे डॉक्टर के पास चली जाएगी।",
      close: "बंद करें",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Doctor",
      services: "Services",
      testimonials: "Testimonials",
      contact: "Contact",
      bookAppointment: "Book Appointment",
    },
    hero: {
      badge: "Expert Homeopathic Care for Women & Children",
      title: "Natural Healing for",
      titleHighlight: "Better Health",
      subtitle:
        "Experience compassionate homeopathic care with personalized treatment plans. We specialize in natural healing methods for women's health, pediatric care, and comprehensive family wellness.",
      ctaBook: "Book Appointment",
      ctaWhatsapp: "Book on WhatsApp",
      statYears: "Years Experience",
      statPatients: "Patients Treated",
      statSuccess: "Success Rate",
    },
    about: {
      sectionTag: "Meet the Doctor",
      title: "Your Trusted Homeopathic Doctor",
      subtitle:
        "Dedicated to providing compassionate homeopathic care with expertise in women's and children's health",
      specialistTag: "Specialist in Women's and Children's Diseases",
      bioText:
        "With over 5 years of dedicated practice in homeopathic medicine, Dr. Gajala Parween has established herself as a trusted healthcare provider specializing in women's health and pediatric care. Her compassionate approach and deep understanding of natural healing methods have helped thousands of families achieve better health and wellness.",
      expertiseTitle: "Areas of Expertise",
      expertiseItems: [
        {
          title: "Women's Health",
          desc: "Comprehensive care for all women's health issues",
        },
        {
          title: "Pediatric Care",
          desc: "Gentle, natural treatment for children's ailments",
        },
        {
          title: "Natural Healing",
          desc: "Holistic approach using homeopathic principles",
        },
        {
          title: "Chronic Conditions",
          desc: "Long-term management of chronic health issues",
        },
      ],
      missionTitle: "Our Mission",
      missionText:
        "“To provide personalized, compassionate homeopathic care that addresses the root cause of illness while promoting natural healing and overall wellness. We believe in treating the person, not just the disease, with special focus on women's health and children's well-being.”",
    },
    whyUs: {
      sectionTag: "Why Choose Us",
      title: "Experience the Difference",
      subtitle:
        "Experience the difference with our comprehensive homeopathic care, dedicated expertise, and commitment to your family's health and wellness",
      items: [
        {
          title: "Experienced Homeopathic Doctor",
          desc: "Dr. Gajala Parween is a qualified BHMS (MU), DMT with years of expertise in women's and children's health. Trusted by thousands of families for safe and effective treatment with proven results.",
        },
        {
          title: "Holistic Treatment Approach",
          desc: "We focus on treating the root cause of illness, not just symptoms, for long-lasting relief. Our comprehensive approach addresses physical, mental, and emotional well-being for complete healing.",
        },
        {
          title: "Safe & Natural Medicines",
          desc: "100% natural homeopathic remedies with no harmful side effects. Our carefully selected medicines work gently with your body's natural healing process, suitable for all ages.",
        },
        {
          title: "Personalized Care",
          desc: "Each patient receives customized treatment tailored to their specific health needs. We understand every individual is unique and deserves a treatment plan designed just for them.",
        },
        {
          title: "Specialist in Women & Children's Health",
          desc: "Trusted care for maternal health, hormonal issues, and childhood diseases. From pregnancy support to pediatric care, we provide specialized treatment with gentle, effective remedies.",
        },
        {
          title: "Patient-Centered Service",
          desc: "Friendly consultation, easy appointment booking, and continuous follow-up support. We believe in building lasting relationships with our patients and providing care beyond just treatment sessions.",
        },
      ],
      cta: "Get Started Today",
    },
    services: {
      sectionTag: "Our Services",
      title: "Specialized Homeopathic Services",
      subtitle: "Comprehensive homeopathic healthcare solutions for your entire family's wellness needs",
      initialLabel: "Initial Visit",
      followupLabel: "Follow-up",
      durationSuffix: "minutes",
      conditionsLabel: "Conditions Treated",
      moreLabel: "Show More",
      lessLabel: "Show Less",
      items: [
        {
          title: "Women's Health & Gynecology",
          desc: "Complete care for women's reproductive and hormonal health",
          conditions: [
            "PCOS & Ovarian Cysts",
            "Irregular Menstruation",
            "Fertility Enhancement",
            "Pregnancy Support",
            "Menopause Issues",
            "Thyroid Imbalance",
          ],
        },
        {
          title: "Pediatric & Child Care",
          desc: "Gentle healing solutions for children's health and development",
          conditions: [
            "Recurring Cold & Cough",
            "Allergies & Skin Issues",
            "Digestive Problems",
            "Growth & Development Support",
            "Post-Vaccination Care",
            "Behavioral Issues",
          ],
        },
        {
          title: "Chronic Disease Management",
          desc: "Long-term care for persistent health conditions",
          conditions: [
            "Diabetes Management",
            "Hypertension Control",
            "Arthritis & Joint Pain",
            "Migraine Treatment",
            "Skin Disorders",
            "Respiratory Issues",
          ],
        },
        {
          title: "Digestive Health",
          desc: "Natural solutions for digestive and gastrointestinal issues",
          conditions: [
            "IBS & Digestive Issues",
            "Acidity & GERD",
            "Constipation",
            "Food Allergies",
            "Liver Issues",
            "Loss of Appetite",
          ],
        },
        {
          title: "Mental Health & Wellness",
          desc: "Holistic approach to emotional and psychological well-being",
          conditions: [
            "Anxiety & Panic Disorders",
            "Depression & Mood Swings",
            "Stress Management",
            "Insomnia",
            "Memory Issues",
            "Behavioral Changes",
          ],
        },
        {
          title: "Preventive Care & Immunity",
          desc: "Building strong immunity and preventing illness naturally",
          conditions: [
            "Immunity Boosting",
            "Seasonal Illness Prevention",
            "Vaccination Support",
            "Health Checkups",
            "Lifestyle Counselling",
            "Stress-Free Living",
          ],
        },
      ],
      ctaBook: "Schedule Your Consultation",
      ctaWhatsapp: "Book on WhatsApp",
    },
    testimonials: {
      sectionTag: "Patient Testimonials",
      title: "What Our Patients Say",
      subtitle: "Real experiences from families who found healing and hope through our homeopathic care",
      items: [
        {
          name: "Priya Sharma",
          age: 32,
          location: "Mumbai",
          condition: "PCOS & Irregular Periods",
          text: "Dr. Gajala Parween completely transformed my life! After struggling with PCOS for years, her homeopathic treatment not only regulated my periods but also helped me conceive naturally. Her caring approach and effective medicines gave me hope when I had none.",
        },
        {
          name: "Rajesh Kumar",
          age: 45,
          location: "Delhi",
          condition: "Diabetes Management",
          text: "My sugar levels were uncontrolled for years. With her personalized treatment plan and regular follow-ups, it's now completely under control. A very patient and trustworthy doctor.",
        },
        {
          name: "Sunita Devi",
          age: 8,
          location: "Patna",
          condition: "Recurring Cold & Cough",
          text: "My daughter used to catch cold and cough repeatedly. Doctor's medicines not only gave relief but also improved her immunity a lot. She rarely falls sick now.",
        },
        {
          name: "Anita Verma",
          age: 29,
          location: "Kolkata",
          condition: "Anxiety & Stress Management",
          text: "Work stress and anxiety used to overwhelm me. The homeopathic treatment helped me feel calm and balanced without any side effects. Truly grateful.",
        },
        {
          name: "Vikram Singh",
          age: 52,
          location: "Lucknow",
          condition: "Arthritis & Joint Pain",
          text: "Joint pain had made walking difficult. After a few months of treatment, I can now move around without any trouble. Thank you, Doctor.",
        },
        {
          name: "Kavitha Nair",
          age: 35,
          location: "Bengaluru",
          condition: "Thyroid Imbalance",
          text: "I consulted several doctors for my thyroid issue, but found real relief only here. The doctor gives every patient full time and attention.",
        },
      ],
    },
    stats: {
      patients: "Happy Families",
      success: "Success Rate",
      years: "Years Experience",
      support: "Support Available",
    },
    cta: {
      title: "Ready to start your healing journey?",
      ctaBook: "Book Appointment",
      ctaWhatsapp: "Book on WhatsApp",
    },
    contact: {
      sectionTag: "Contact Us",
      title: "Get Connected",
      subtitle:
        "Ready to experience compassionate homeopathic care? Get in touch with us for appointments, consultations, or any health concerns you may have.",
      visitTitle: "Visit Our Clinic",
      addressLabel: "Address",
      address: "Labha, Zero Mile se Paschim, Dani Hospital ke upar (Mojibur Complex), Katihar, Bihar 854116",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      hoursLabel: "Consultation Hours",
      hours: [
        { day: "Mon - Sat", time: "9:00 AM - 8:00 PM" },
        { day: "Sunday", time: "10:00 AM - 2:00 PM" },
        { day: "Emergency", time: "Call anytime" },
      ],
      formTitle: "Send Message",
      formName: "Your Name",
      formPhone: "Phone Number",
      formService: "Select Service",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      guaranteeTitle: "Quick Response Guarantee",
      guaranteeText:
        "We typically respond within 2-4 hours during consultation hours. For emergency homeopathic care, please call us directly.",
      emergencyTitle: "Emergency Care",
      emergencySubtitle: "Call Anytime",
      freeConsultTitle: "Free Consultation",
      freeConsultSubtitle: "First Visit",
      findUsTitle: "Find Us Here",
      directTitle: "Prefer direct communication? Reach us instantly!",
      callNow: "Call Now",
      whatsappUs: "WhatsApp Us",
    },
    footer: {
      tagline:
        "Compassionate, natural homeopathic care for women and children — dedicated to your family's health with personalized treatment plans.",
      quickLinksTitle: "Quick Links",
      servicesTitle: "Services",
      contactTitle: "Contact Info",
      rights: "All rights reserved.",
    },
    modal: {
      title: "Book Appointment",
      subtitle: "Fill the form and we'll confirm your slot on WhatsApp",
      name: "Your Name",
      namePlaceholder: "e.g. Priya Sharma",
      phone: "Phone Number",
      phonePlaceholder: "10-digit mobile number",
      service: "Select Service",
      selectService: "-- Select a service --",
      date: "Preferred Date",
      time: "Preferred Time",
      message: "Additional Details (optional)",
      messagePlaceholder: "Briefly describe your concern...",
      submit: "Send via WhatsApp",
      note: "On submit, WhatsApp will open and your details will be sent directly to the doctor.",
      close: "Close",
    },
  },
};
