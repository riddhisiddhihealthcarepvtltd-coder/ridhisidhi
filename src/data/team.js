import { imageConfig } from "./company";

export const teamMembers = [
  {
    id: "chairman",
    name: "Dilopp Kumar Mahsaah",
    role: "Chairman & Registered Pharmacist",
    image: imageConfig.chairman,
    description: "Leading Riddhi Siddhi Health Care Pvt. Ltd. with a focus on patient welfare, professional ethics, and quality pharmaceutical guidance in Kathmandu.",
    badge: "Leadership & Pharmacy",
    isLeadership: true,
  },
  {
    id: "lab-technologist",
    name: "Mrs. Pooja Karna",
    role: "Medical Lab Technologist",
    image: imageConfig.labTechnician,
    description: "Experienced in clinical diagnostic procedures, sample analysis, and maintaining quality lab protocols for accurate patient diagnostic reporting.",
    badge: "Clinical Diagnostics",
    isLeadership: false,
  },
  {
    id: "lab-technician",
    name: "Clinical Lab Technician",
    role: "Lab Specialist",
    image: imageConfig.labTechnologist,
    description: "Dedicated lab technician responsible for safe specimen handling, hygiene protocols, and diagnostic testing support.",
    badge: "Laboratory Care",
    isLeadership: false,
  },
  {
    id: "doctor-consultant",
    name: "Dr. Rakesh Verma, MBBS, MD",
    role: "Medical Consultant (Placeholder / Visiting)",
    image: imageConfig.doctor,
    description: "Representative profile placeholder for visiting medical consultants and general practice physicians.",
    badge: "Medical Practice",
    isLeadership: false,
    isPlaceholder: true,
  }
];

export const leadershipNote = {
  title: "A Message from Our Leadership",
  subtitle: "Committed to Ethical, Patient-Centered Healthcare in Gokarneshwor",
  quote: "At Riddhi Siddhi Health Care Pvt. Ltd., our daily effort is centered around trust, genuine care, and prompt service for every individual who walks through our doors.",
  author: "Dilopp Kumar Mahsaah",
  designation: "Chairman, Riddhi Siddhi Health Care Pvt. Ltd."
};
