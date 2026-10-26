export const MAP_IMAGE = "/campus-map.png";

export const buildings = [
  {
    id: 1,
    name: "Hello Future",
    type: "Academic Fees",
    room: "Block A",
    x: 24,
    y: 42,
    color: "#e31b23",
    description:
      "Give all information of university and faculty rooms."
  },

  {
    id: 2,
    name: "Turing Block",
    type: "Academic",
    room: "Block B",
    x: 39,
    y: 37,
    color: "#f97316",
    description:
      "Engineering classrooms and laboratories."
  },

  {
    id: 3,
    name: "Learning Content",
    type: "Library",
    room: "Library",
    x: 45.5,
    y: 47.5,
    color: "#7c3aed",
    description:
      "Central library with books, digital resources and study spaces."
  },

  {
    id: 4,
    name: "Hostels",
    type: "Student Life",
    room: "Student Centre",
    x: 61,
    y: 55,
    color: "#0891b2",
    description:
      "Student services, and student activity areas."
  },

  {
    id: 5,
    name: "Sportorium",
    type: "Sports",
    room: "Sports Complex",
    x: 25.2,
    y: 70,
    color: "#16a34a",
    description:
      "Sports facilities including outdoor and indoor activities."
  },

  {
    id: 6,
    name: "Explotorium",
    type: "Events",
    room: "Explotorium",
    x: 19.2,
    y: 82,
    color: "#ca8a04",
    description:
      "Main venue for seminars, cultural programs and guest lectures."
  },

  {
    id: 7,
    name: "Innovation Hub",
    type: "Innovation",
    room: "Innovation Hub",
    x: 55,
    y: 28,
    color: "#db2777",
    description:
      "Innovation, startup and project development centre."
  },

  {
    id: 8,
    name: "Square One",
    type: "Food",
    room: "Food Court",
    x: 38,
    y: 66,
    color: "#0d9488",
    description:
      "Campus food court serving meals, snacks and beverages."
  },

  {
    id: 9,
    name: "Martin Luther Block",
    type: "Academic",
    room: "Block B",
    x: 50.5,
    y: 64,
    color: "grey",
    description:
      "Learning Artificial Intelligence and Machine Learning."
  },

  {
    id: 10,
    name: "Rockfeller Block",
    type: "Academic",
    room: "Block B",
    x: 47,
    y: 68,
    color: "brown",
    description:
      "It Develops Business Management, Marketing, Finance, Entrepreneurship"
  }
];

export const classrooms = [
  {
    id: "Tg-101",
    building: "Turing Block",
    floor: "Ground Floor",
    capacity: 60,
    department: "CSE"
  },

  {
    id: "Tg-201",
    building: "Turing Block",
    floor: "First Floor",
    capacity: 50,
    department: "CSE"
  },

  {
    id: "LH-201",
    building: "Martin Luther Block",
    floor: "Second Floor",
    capacity: 80,
    department: "CSE AI&ML"
  },

  {
    id: "LH-102",
    building: "Martin Luther Block",
    floor: "Ground Floor",
    capacity: 80,
    department: "CSE AI&ML"
  },

  {
    id: "Tg-202",
    building: "Turing Block",
    floor: "First Floor",
    capacity: 60,
    department: "CSE"
  },

  {
    id: "LH-302",
    building: "Martin Luther Block",
    floor: "Second Floor",
    capacity: 45,
    department: "CSE AI&ML"
  },

  {
    id: "LH-01",
    building: "Central Library",
    floor: "Ground Floor",
    capacity: 120,
    department: "Common"
  },

  {
    id: "IH-12",
    building: "Innovation Hub",
    floor: "First Floor",
    capacity: 40,
    department: "Innovation"
  },

  {
    id: "SC-07",
    building: "Student Centre",
    floor: "Ground Floor",
    capacity: 70,
    department: "Common"
  },
  {
    id: "MH-8",
    building: "RockFeller Block",
    floor: "Ground Floor",
    capacity: 60,
    department: "BBA"
  }

];


export const events = [
  {
    id: 1,
    title: "Tech Innovation Expo",
    date: "18 Aug 2026",
    time: "10:00 AM",
    location: "Innovation Hub",
    category: "Technology"
  },

  {
    id: 2,
    title: "Coding Club Meetup",
    date: "19 Aug 2026",
    time: "2:00 PM",
    location: "C-101",
    category: "Club"
  },

  {
    id: 3,
    title: "Guest Lecture on Artificial Intelligence",
    date: "21 Aug 2026",
    time: "11:30 AM",
    location: "Main Auditorium",
    category: "Lecture"
  },

  {
    id: 4,
    title: "Inter College Football",
    date: "23 Aug 2026",
    time: "4:00 PM",
    location: "Sports Complex",
    category: "Sports"
  },

  {
    id: 5,
    title: "hackathon",
    date: "26 Aug 2026",
    time: "1:00 AM",
    location: "Innovation Hub",
    category: "Technology"
  }
];


export const faculty = [
  {
    id: 1,
    name: "Mr Sourabh",
    department: "CSE AI&ML",
    room: "A-214",
    building: "Martin Luther Block",
    available: true
  },

  {
    id: 2,
    name: "Mr sangam sharma",
    department: "CSE AI&ML",
    room: "A-218",
    building: "Martin Luther Block",
    available: false
  },

  {
    id: 3,
    name: "Mr Himanshu",
    department: "CSE AI&ML",
    room: "B-206",
    building: "Martin Luther Block",
    available: false
  },

  {
    id: 4,
    name: "Mr Hemant",
    department: "CSE AI&ML",
    room: "B-311",
    building: "Martin Luther Block",
    available: true
  },

  {
    id: 5,
    name: "Mr Rishabh",
    department: "CSE AI&ML",
    room: "SC-03",
    building: "Martin Luther Block",
    available: true
  },

  {
    id: 6,
    name: "Dr.Kamal",
    department: "CSE",
    room: "A-204",
    building: "Turing Block",
    available: true
  },

  {
    id: 7,
    name: "Dr Aman",
    department: "CSE",
    room: "A-206",
    building: "Turing Block",
    available: true
  },

  {
    id: 8,
    name: "Er.Tejraj",
    department: "CSE",
    room: "A-207",
    building: "Turing Block",
    available: false
  }
];

export const defaultLostFound = [
  {
    id: 1,
    title: "Black Water Bottle",
    type: "Lost",
    location: "Library",
    date: "16 Aug 2026",
    contact: "Security Desk"
  },

  {
    id: 2,
    title: "Blue ID Card Holder",
    type: "Found",
    location: "Canteen",
    date: "15 Aug 2026",
    contact: "Student Centre"
  }
];
