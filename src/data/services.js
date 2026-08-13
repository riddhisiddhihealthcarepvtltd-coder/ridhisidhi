export const servicesData = [
  {
    id: "opd-service",
    number: "01",
    title: "ओ.पि.डि. सेवा (O.P.D.)",
    shortDesc: "Outpatient Department services providing expert consultations and personalized medical care for all patients.",
    fullDesc: "Our OPD service provides comprehensive outpatient medical consultations by qualified doctors. Patients can walk in for diagnosis, treatment advice, prescriptions, and follow-up care without requiring hospital admission.",
    image: "/assets/opd.jpeg",
    badge: "Primary Care",
    features: [
      "Walk-in patient consultations",
      "Expert medical diagnosis",
      "Prescription & treatment planning",
      "Follow-up care & monitoring"
    ]
  },
  {
    id: "pathology-service",
    number: "02",
    title: "प्याथोलोजी सेवा (Pathology)",
    shortDesc: "Accurate and reliable pathology testing for blood, urine, and other diagnostic specimens.",
    fullDesc: "Our pathology department handles all types of clinical laboratory tests with precision and care. From routine blood tests to specialized diagnostic panels, results are delivered promptly with high accuracy.",
    image: "/assets/pathologyroom.jpeg",
    badge: "Diagnostics",
    features: [
      "Blood & urine analysis",
      "Routine diagnostic panels",
      "Hygienic specimen collection",
      "Timely & accurate reporting"
    ]
  },
  {
    id: "xray-service",
    number: "03",
    title: "एक्स-रे सेवा (X-Ray)",
    shortDesc: "Modern X-ray imaging services for quick and accurate bone, chest, and internal organ diagnosis.",
    fullDesc: "We offer digital X-ray services for a wide range of diagnostic needs including chest X-rays, bone fractures, and joint assessments. Our X-ray unit operates with trained radiographers ensuring patient safety.",
    image: "/assets/xray.jpeg",
    badge: "Imaging",
    features: [
      "Digital chest & bone X-rays",
      "Safe low-radiation imaging",
      "Trained radiography staff",
      "Rapid diagnostic reporting"
    ]
  },
  {
    id: "emergency-service",
    number: "04",
    title: "आकस्मिक सेवा (Emergency)",
    shortDesc: "Immediate emergency medical care available for urgent health situations and critical cases.",
    fullDesc: "Our emergency service is equipped to handle urgent medical situations with prompt attention. Trained staff provide immediate first-aid, stabilization, and necessary referral for critical conditions.",
    image: "/assets/emergencyroom.jpeg",
    badge: "Emergency",
    features: [
      "Immediate patient stabilization",
      "First-aid & wound care",
      "Urgent case management",
      "Critical referral support"
    ]
  },
  {
    id: "ecg-service",
    number: "05",
    title: "ई.सि.जी. सेवा (E.C.G.)",
    shortDesc: "Electrocardiogram (ECG) testing for accurate heart rhythm and cardiac health assessment.",
    fullDesc: "Our ECG service provides rapid electrocardiogram testing to evaluate heart health, detect arrhythmias, and assess cardiac conditions. Results are reviewed by experienced medical professionals.",
    image: "/assets/restroom.jpeg",
    badge: "Cardiac Care",
    features: [
      "12-lead ECG testing",
      "Heart rhythm analysis",
      "Arrhythmia detection",
      "Cardiologist-reviewed reports"
    ]
  },
  {
    id: "home-service",
    number: "06",
    title: "होम सर्भिस (Home Service)",
    shortDesc: "Convenient at-home medical services including sample collection, ECG, and nursing care.",
    fullDesc: "We bring quality healthcare to your doorstep. Our home service team provides sample collection, basic diagnostics, wound dressing, and nursing care for patients who cannot visit the clinic.",
    image: "/assets/homeservices.jpeg",
    badge: "Home Care",
    features: [
      "Home sample collection",
      "At-home nursing care",
      "Wound dressing & IV therapy",
      "Elderly & bedridden patient care"
    ]
  }
];

export const quickActions = [
  {
    title: "Appointment Booking",
    description: "Schedule a visit or consultation easily via telephone or WhatsApp.",
    icon: "CalendarCheck",
    actionText: "Book Visit",
    link: "/contact"
  },
  {
    title: "OPD Consultation",
    description: "Get evaluated by trained healthcare professionals in a comfortable setting.",
    icon: "UserCheck",
    actionText: "Learn More",
    link: "/services#opd-service"
  },
  {
    title: "Pathology Testing",
    description: "Accurate specimen testing and reliable lab reporting support.",
    icon: "FlaskConical",
    actionText: "Lab Details",
    link: "/services#pathology-service"
  },
  {
    title: "Home Service",
    description: "We bring quality healthcare directly to your home for your convenience.",
    icon: "Home",
    actionText: "Home Care",
    link: "/services#home-service"
  },
  {
    title: "Direct Contact",
    description: "Reach our clinic quickly by phone, email, or direct location map.",
    icon: "PhoneCall",
    actionText: "Contact Us",
    link: "/contact"
  }
];
