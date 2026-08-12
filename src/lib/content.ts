export type Language = "hi" | "en";

// Doctor identity stays in English regardless of selected language.
export const DOCTOR = {
  name: "Dr. Gajala Parween",
  degree: "BHMS (MU), DMT",
  phone: "9161687595",
  phoneDisplay: "+91 91616 87595",
  whatsappNumber: "919161687595",
  email: "familyhomeoclinic@gmail.com",
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
      badge: "महिलाओं और बच्चों के लिए विशेषज्ञ होम्योपैथिक देखभाल",
      title: "प्राकृतिक इलाज से",
      titleHighlight: "बेहतर स्वास्थ्य की ओर",
      subtitle:
        "व्यक्तिगत उपचार योजनाओं के साथ करुणामय होम्योपैथिक देखभाल का अनुभव करें। हम महिलाओं के स्वास्थ्य, बाल चिकित्सा और संपूर्ण पारिवारिक कल्याण के लिए प्राकृतिक उपचार में विशेषज्ञ हैं।",
      ctaBook: "अपॉइंटमेंट बुक करें",
      ctaWhatsapp: "WhatsApp पर बुक करें",
      statYears: "वर्षों का अनुभव",
      statPatients: "मरीज़ों का इलाज",
      statSuccess: "सफलता दर",
    },
    about: {
      sectionTag: "डॉक्टर से मिलें",
      title: "आपकी भरोसेमंद होम्योपैथिक डॉक्टर",
      subtitle:
        "महिलाओं और बच्चों के स्वास्थ्य में विशेषज्ञता के साथ करुणामय होम्योपैथिक देखभाल प्रदान करने के लिए समर्पित",
      specialistTag: "महिलाओं और बच्चों के रोगों की विशेषज्ञ",
      bioText:
        "5 से अधिक वर्षों के समर्पित होम्योपैथिक अभ्यास के साथ, डॉ. गजाला परवीन ने महिलाओं के स्वास्थ्य और बाल चिकित्सा देखभाल में विशेषज्ञता रखने वाली एक भरोसेमंद स्वास्थ्य सेवा प्रदाता के रूप में अपनी पहचान बनाई है। उनके करुणामय दृष्टिकोण और प्राकृतिक उपचार विधियों की गहरी समझ ने हजारों परिवारों को बेहतर स्वास्थ्य और कल्याण प्राप्त करने में मदद की है।",
      expertiseTitle: "विशेषज्ञता के क्षेत्र",
      expertiseItems: [
        {
          title: "महिलाओं का स्वास्थ्य",
          desc: "महिलाओं के सभी स्वास्थ्य मुद्दों के लिए व्यापक देखभाल",
        },
        {
          title: "बाल चिकित्सा देखभाल",
          desc: "बच्चों की बीमारियों के लिए सौम्य, प्राकृतिक उपचार",
        },
        {
          title: "प्राकृतिक उपचार",
          desc: "होम्योपैथिक सिद्धांतों का उपयोग करते हुए समग्र दृष्टिकोण",
        },
        {
          title: "पुरानी बीमारियाँ",
          desc: "दीर्घकालिक स्वास्थ्य समस्याओं का प्रबंधन",
        },
      ],
      missionTitle: "हमारा उद्देश्य",
      missionText:
        "“व्यक्तिगत, करुणामय होम्योपैथिक देखभाल प्रदान करना जो प्राकृतिक उपचार और समग्र कल्याण को बढ़ावा देते हुए बीमारी के मूल कारण को दूर करे। हम केवल बीमारी का नहीं, बल्कि व्यक्ति का इलाज करने में विश्वास रखते हैं, महिलाओं के स्वास्थ्य और बच्चों की भलाई पर विशेष ध्यान देते हुए।”",
    },
    whyUs: {
      sectionTag: "हमें क्यों चुनें",
      title: "हमारे साथ अंतर महसूस करें",
      subtitle:
        "हमारी व्यापक होम्योपैथिक देखभाल, समर्पित विशेषज्ञता और आपके परिवार के स्वास्थ्य के प्रति प्रतिबद्धता का अनुभव करें",
      items: [
        {
          title: "अनुभवी होम्योपैथिक डॉक्टर",
          desc: "डॉ. गजाला परवीन एक योग्य BHMS (MU), DMT हैं जिन्हें महिलाओं और बच्चों के स्वास्थ्य में वर्षों की विशेषज्ञता है। सुरक्षित और प्रभावी इलाज के लिए हजारों परिवारों का भरोसा।",
        },
        {
          title: "समग्र उपचार दृष्टिकोण",
          desc: "हम केवल लक्षणों का नहीं, बल्कि बीमारी के मूल कारण का इलाज करने पर ध्यान केंद्रित करते हैं। हमारा व्यापक दृष्टिकोण पूर्ण उपचार के लिए शारीरिक, मानसिक और भावनात्मक कल्याण को संबोधित करता है।",
        },
        {
          title: "सुरक्षित और प्राकृतिक दवाइयाँ",
          desc: "बिना किसी हानिकारक दुष्प्रभाव के 100% प्राकृतिक होम्योपैथिक दवाइयाँ। हमारी सावधानी से चुनी गई दवाइयाँ आपके शरीर की प्राकृतिक उपचार प्रक्रिया के साथ सौम्य रूप से काम करती हैं।",
        },
        {
          title: "व्यक्तिगत देखभाल",
          desc: "प्रत्येक मरीज़ को उनकी विशिष्ट स्वास्थ्य आवश्यकताओं के अनुरूप उपचार मिलता है। हम समझते हैं कि हर व्यक्ति अद्वितीय है और उसे विशेष रूप से डिज़ाइन की गई उपचार योजना का हकदार है।",
        },
        {
          title: "महिलाओं और बच्चों के स्वास्थ्य में विशेषज्ञ",
          desc: "मातृ स्वास्थ्य, हार्मोनल समस्याओं और बचपन की बीमारियों के लिए भरोसेमंद देखभाल। गर्भावस्था सहायता से लेकर बाल चिकित्सा तक, सौम्य और प्रभावी उपचार।",
        },
        {
          title: "मरीज़-केंद्रित सेवा",
          desc: "मित्रवत परामर्श, आसान अपॉइंटमेंट बुकिंग और निरंतर फॉलो-अप सहायता। हम केवल इलाज सत्रों से परे स्थायी संबंध बनाने में विश्वास रखते हैं।",
        },
      ],
      cta: "आज ही शुरुआत करें",
    },
    services: {
      sectionTag: "हमारी सेवाएँ",
      title: "विशेष होम्योपैथिक सेवाएँ",
      subtitle: "आपके पूरे परिवार के स्वास्थ्य के लिए व्यापक होम्योपैथिक समाधान",
      initialLabel: "पहली विज़िट",
      followupLabel: "फॉलो-अप",
      durationSuffix: "मिनट",
      conditionsLabel: "इलाज की जाने वाली बीमारियाँ",
      items: [
        {
          title: "महिलाओं का स्वास्थ्य एवं स्त्री रोग",
          desc: "महिलाओं के प्रजनन और हार्मोनल स्वास्थ्य के लिए संपूर्ण देखभाल",
          conditions: [
            "PCOS और ओवेरियन सिस्ट",
            "अनियमित मासिक धर्म",
            "प्रजनन क्षमता में सुधार",
            "गर्भावस्था सहायता",
            "मेनोपॉज़ की समस्याएँ",
            "थायरॉइड असंतुलन",
          ],
        },
        {
          title: "बाल चिकित्सा एवं शिशु देखभाल",
          desc: "बच्चों के स्वास्थ्य और विकास के लिए सौम्य उपचार समाधान",
          conditions: [
            "बार-बार जुकाम और खांसी",
            "एलर्जी और त्वचा की समस्याएँ",
            "पाचन संबंधी समस्याएँ",
            "विकास संबंधी सहायता",
            "टीकाकरण के बाद देखभाल",
            "व्यवहार संबंधी समस्याएँ",
          ],
        },
        {
          title: "पुरानी बीमारियों का प्रबंधन",
          desc: "स्थायी स्वास्थ्य स्थितियों के लिए दीर्घकालिक देखभाल",
          conditions: [
            "डायबिटीज़ प्रबंधन",
            "उच्च रक्तचाप नियंत्रण",
            "गठिया और जोड़ों का दर्द",
            "माइग्रेन का इलाज",
            "त्वचा संबंधी विकार",
            "श्वसन संबंधी समस्याएँ",
          ],
        },
        {
          title: "पाचन स्वास्थ्य",
          desc: "पाचन और आंत संबंधी समस्याओं के लिए प्राकृतिक समाधान",
          conditions: [
            "IBS और पाचन समस्याएँ",
            "एसिडिटी और GERD",
            "कब्ज़",
            "फूड एलर्जी",
            "लीवर की समस्याएँ",
            "भूख न लगना",
          ],
        },
        {
          title: "मानसिक स्वास्थ्य एवं कल्याण",
          desc: "भावनात्मक और मानसिक कल्याण के लिए समग्र दृष्टिकोण",
          conditions: [
            "चिंता और पैनिक डिसऑर्डर",
            "डिप्रेशन और मूड स्विंग्स",
            "तनाव प्रबंधन",
            "नींद न आने की समस्या",
            "याददाश्त कमज़ोर होना",
            "व्यवहार संबंधी परिवर्तन",
          ],
        },
        {
          title: "निवारक देखभाल एवं इम्यूनिटी",
          desc: "प्राकृतिक रूप से मज़बूत इम्यूनिटी बनाना और बीमारी की रोकथाम",
          conditions: [
            "इम्यूनिटी बढ़ाना",
            "मौसमी बीमारियों की रोकथाम",
            "टीकाकरण सहायता",
            "स्वास्थ्य जांच",
            "जीवनशैली परामर्श",
            "तनाव मुक्त जीवन",
          ],
        },
      ],
      ctaBook: "परामर्श शेड्यूल करें",
      ctaWhatsapp: "WhatsApp पर बुक करें",
    },
    testimonials: {
      sectionTag: "मरीज़ों की राय",
      title: "हमारे मरीज़ क्या कहते हैं",
      subtitle:
        "उन परिवारों के वास्तविक अनुभव जिन्होंने हमारी होम्योपैथिक देखभाल से उपचार और आशा पाई",
      items: [
        {
          name: "प्रिया शर्मा",
          age: 32,
          location: "मुंबई",
          condition: "PCOS और अनियमित मासिक धर्म",
          text: "डॉ. गजाला परवीन ने मेरी ज़िंदगी पूरी तरह बदल दी! वर्षों से PCOS से जूझने के बाद, उनके होम्योपैथिक इलाज ने न केवल मेरे पीरियड्स को नियमित किया बल्कि मुझे प्राकृतिक रूप से गर्भधारण करने में भी मदद की। उनके देखभाल भरे दृष्टिकोण और प्रभावी दवाइयों ने मुझे उम्मीद दी जब मेरे पास कोई नहीं थी।",
        },
        {
          name: "राजेश कुमार",
          age: 45,
          location: "दिल्ली",
          condition: "डायबिटीज़ प्रबंधन",
          text: "मेरा शुगर लेवल कई सालों से अनियंत्रित था। डॉक्टर साहिबा की व्यक्तिगत उपचार योजना और नियमित फॉलो-अप की वजह से अब यह पूरी तरह नियंत्रण में है। बहुत ही धैर्यवान और भरोसेमंद डॉक्टर।",
        },
        {
          name: "सुनीता देवी",
          age: 8,
          location: "पटना",
          condition: "बार-बार जुकाम और खांसी",
          text: "मेरी बेटी को बार-बार सर्दी-खांसी हो जाती थी। डॉक्टर साहिबा की दवाइयों से न केवल आराम मिला बल्कि उसकी इम्यूनिटी भी काफी बेहतर हो गई। अब वह बहुत कम बीमार पड़ती है।",
        },
        {
          name: "अनिता वर्मा",
          age: 29,
          location: "कोलकाता",
          condition: "चिंता और तनाव प्रबंधन",
          text: "काम के तनाव और चिंता से मैं बहुत परेशान थी। होम्योपैथिक इलाज ने बिना किसी साइड इफेक्ट के मुझे शांत और संतुलित महसूस करने में मदद की। बहुत आभारी हूँ।",
        },
        {
          name: "विक्रम सिंह",
          age: 52,
          location: "लखनऊ",
          condition: "गठिया और जोड़ों का दर्द",
          text: "जोड़ों के दर्द की वजह से चलना मुश्किल हो गया था। कुछ महीनों के इलाज के बाद अब मैं बिना किसी परेशानी के चल-फिर सकता हूँ। धन्यवाद डॉक्टर साहिबा।",
        },
        {
          name: "कविता नायर",
          age: 35,
          location: "बेंगलुरु",
          condition: "थायरॉइड असंतुलन",
          text: "थायरॉइड की समस्या के लिए मैंने कई डॉक्टरों से सलाह ली थी, पर आराम यहीं मिला। डॉक्टर साहिबा हर मरीज़ को पूरा समय और ध्यान देती हैं।",
        },
      ],
    },
    stats: {
      patients: "खुश परिवार",
      success: "सफलता दर",
      years: "वर्षों का अनुभव",
      support: "सहायता उपलब्ध",
    },
    cta: {
      title: "क्या आप अपनी उपचार यात्रा शुरू करने के लिए तैयार हैं?",
      ctaBook: "अपॉइंटमेंट बुक करें",
      ctaWhatsapp: "WhatsApp पर बुक करें",
    },
    contact: {
      sectionTag: "संपर्क करें",
      title: "जुड़े रहें",
      subtitle:
        "करुणामय होम्योपैथिक देखभाल का अनुभव करने के लिए तैयार हैं? अपॉइंटमेंट, परामर्श या किसी भी स्वास्थ्य समस्या के लिए हमसे संपर्क करें।",
      visitTitle: "हमारे क्लिनिक पर आएं",
      addressLabel: "पता",
      address: "लाभा, ज़ीरो माइल से पश्चिम, दानी हॉस्पिटल के ऊपर (मोजिबुर कॉम्प्लेक्स), कटिहार, बिहार 854116",
      phoneLabel: "फ़ोन नंबर",
      emailLabel: "ईमेल पता",
      hoursLabel: "परामर्श का समय",
      hours: [
        { day: "सोम - शनि", time: "सुबह 9:00 - रात 8:00" },
        { day: "रविवार", time: "सुबह 10:00 - दोपहर 2:00" },
        { day: "आपातकाल", time: "किसी भी समय कॉल करें" },
      ],
      formTitle: "संदेश भेजें",
      formName: "आपका नाम",
      formPhone: "फ़ोन नंबर",
      formService: "सेवा चुनें",
      formMessage: "अपना संदेश लिखें",
      formSubmit: "संदेश भेजें",
      guaranteeTitle: "त्वरित जवाब की गारंटी",
      guaranteeText:
        "हम आमतौर पर परामर्श के समय के दौरान 2-4 घंटों के भीतर जवाब देते हैं। आपातकालीन होम्योपैथिक देखभाल के लिए, कृपया हमें सीधे कॉल करें।",
      emergencyTitle: "आपातकालीन देखभाल",
      emergencySubtitle: "कभी भी कॉल करें",
      freeConsultTitle: "मुफ़्त परामर्श",
      freeConsultSubtitle: "पहली विज़िट",
      findUsTitle: "हमें यहाँ खोजें",
      directTitle: "सीधे संपर्क करना चाहते हैं? हमसे तुरंत जुड़ें!",
      callNow: "अभी कॉल करें",
      whatsappUs: "WhatsApp करें",
    },
    footer: {
      tagline:
        "महिलाओं और बच्चों के लिए करुणामय, प्राकृतिक होम्योपैथिक देखभाल — व्यक्तिगत उपचार योजनाओं के साथ आपके परिवार के स्वास्थ्य के लिए समर्पित।",
      quickLinksTitle: "त्वरित लिंक",
      servicesTitle: "सेवाएँ",
      contactTitle: "संपर्क जानकारी",
      rights: "सर्वाधिकार सुरक्षित।",
    },
    modal: {
      title: "अपॉइंटमेंट बुक करें",
      subtitle: "फॉर्म भरें, हम आपको WhatsApp पर कन्फर्म करेंगे",
      name: "आपका नाम",
      namePlaceholder: "जैसे: प्रिया शर्मा",
      phone: "फ़ोन नंबर",
      phonePlaceholder: "10 अंकों का मोबाइल नंबर",
      service: "सेवा चुनें",
      selectService: "-- सेवा चुनें --",
      date: "पसंदीदा तारीख",
      time: "पसंदीदा समय",
      message: "अतिरिक्त जानकारी (वैकल्पिक)",
      messagePlaceholder: "अपनी समस्या के बारे में संक्षेप में बताएं...",
      submit: "WhatsApp पर भेजें",
      note: "सबमिट करने पर WhatsApp खुलेगा और आपकी जानकारी सीधे डॉक्टर को भेज दी जाएगी।",
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
