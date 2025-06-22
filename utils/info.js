// Personal Information
export const personalInfo = {
    name: "Nithesh",
    fullName: "Nitheshwaran",
    title: "Software Engineer",
    tagline: "Crafting digital solutions with code and creativity",
    email: "nitheshwaran003@gmail.com",
    phone: "+91 9976203099",
    location: "Dharmapuri, Tamil Nadu, India",
    website: "https://nithesh.dev",
    github: "https://github.com/Nithesh005",
    linkedin: "https://www.linkedin.com/in/nitheshwaran/",
    // twitter: "https://twitter.com/nithesh_kumar",
    about: "I'm a passionate Software Engineer with expertise in full-stack development, specializing in modern web technologies. I love solving complex problems and building scalable applications that make a difference.",
    summary: "Experienced software engineer with 2+ years in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering high-quality applications and mentoring junior developers.",
};

// Professional Experience
export const experiences = [
    {
        id: "wowelse",
        role: "Backend Developer",
        company: "Wowelse Branding Studio Technologies",
        companyUrl: "https://wowelse.com/",
        duration: "July 2024 - Present",
        location: "Coimbatore, India",
        type: "Full-time",
        description: "Leading backend development initiatives for a creative branding studio, focusing on scalable web applications and API development.",
        achievements: [
            "Developed and maintained RESTful APIs serving 10,000+ daily requests",
            "Implemented microservices architecture improving system performance by 40%",
            "Mentored 3 junior developers and conducted code reviews",
            "Reduced API response time by 60% through optimization and caching strategies",
            "Collaborated with design team to implement user-friendly interfaces"
        ],
        technologies: ["Python","MongoDB", "AWS", "REST APIs", "Redis", "Docker", "Git"],
        blogRoute: "/blogs/life-at-wowelse",
        image: "/assets/images/Wowelse/wowelseIndex.png",
        featured: true
    },
    {
        id: "quantanics",
        role: "PERN Stack Developer",
        company: "Quantanics Tech Serv Pvt Ltd",
        companyUrl: "https://quantanics.in/",
        duration: "March 2023 - April 2024",
        location: "Madurai, India",
        type: "Full-time",
        description: "Full-stack development role focusing on building comprehensive web applications using modern technologies.",
        achievements: [
            "Built 5+ full-stack applications from concept to deployment",
            "Implemented real-time features using WebSocket technology",
            "Optimized database queries reducing load times by 50%",
            "Integrated third-party APIs and payment gateways",
            "Participated in agile development processes and sprint planning"
        ],
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "WebSocket", "JWT", "Git"],
        blogRoute: "/blogs/life-at-quantanics",
        image: "/assets/images/Quantainics/quantanicsIndex.png",
        featured: true
    }
];

// Education
export const education = [
    {
        id: "bachelor",
        degree: "Bachelor of Engineering - Computer Science",
        institution: "Anna University Regional Campus",
        location: "Chennai, India",
        duration: "2019 - 2023",
        score: "GPA: 8.0/10",
        description: "Comprehensive computer science education with focus on software engineering, algorithms, and system design.",
        achievements: [
            "Final year project: AI-powered recommendation system",
            "Member of Computer Science Club",
            "Participated in hackathons and coding competitions"
        ],
        relevantCourses: [
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Software Engineering",
            "Web Technologies",
            "Machine Learning",
            "Computer Networks"
        ]
    },
    {
        id: "hsc",
        degree: "Higher Secondary Education (HSC)",
        institution: "Sri Vidya Mandir Matric Hr. Sec. School",
        location: "Chennai, India",
        duration: "2018 - 2019",
        score: "Percentage: 79%",
        description: "Science stream with focus on Mathematics and Computer Science.",
        achievements: [
            "School topper in Computer Science",
            "Member of Science Club"
        ]
    },
    {
        id: "sslc",
        degree: "Secondary Education (SSLC)",
        institution: "St. Lucy's Matric Hr. Sec. School",
        location: "Chennai, India",
        duration: "2016 - 2017",
        score: "Percentage: 94%",
        description: "Strong foundation in core subjects with excellent academic performance.",
        achievements: [
            "School topper with 94% marks",
            "Best student award"
        ]
    }
];

// Skills
export const skills = {
    programming: [
        { name: "JavaScript", level: 90, category: "language" },
        { name: "Python", level: 90, category: "language" },
        { name: "Java", level: 90, category: "language" },
        { name: "SQL", level: 85, category: "language" }
    ],
    frontend: [
        { name: "React", level: 90, category: "framework" },
        { name: "Next.js", level: 85, category: "framework" },
        { name: "Tailwind CSS", level: 90, category: "styling" },
        { name: "Material-UI", level: 85, category: "ui" }
    ],
    backend: [
        { name: "Flask", level: 98, category: "framework" },
        { name: "Express.js", level: 90, category: "framework" },
        { name: "REST APIs", level: 98, category: "api" },
        { name: "WebSocket", level: 90, category: "real-time" }
    ],
    database: [
        { name: "MongoDB", level: 90, category: "nosql" },
        { name: "PostgreSQL", level: 80, category: "sql" },
        { name: "Redis", level: 75, category: "cache" },
        { name: "MySQL", level: 80, category: "sql" }
    ],
    devops: [
        { name: "Git", level: 80, category: "version-control" },
        { name: "AWS", level: 75, category: "cloud" },
        { name: "Docker", level: 70, category: "containerization" }
    ],
    tools: [
        { name: "VS Code", level: 95, category: "editor" },
        { name: "Postman", level: 95, category: "api-testing" },
        { name: "Figma", level: 70, category: "design" },
        { name: "Jira", level: 70, category: "project-management" }
    ]
};

// Certifications
export const certifications = [
    {
        id: "ibm",
        title: "IBM Full Stack Software Developer",
        issuer: "IBM",
        date: "13-MAR-2023",
        credentialId: "IBM-FSSD-2024",
        image: "/assets/images/Honurs/Ibm.jpg",
        description: "Comprehensive full-stack development certification covering modern web technologies and best practices.",
        skills: ["Project Management", "Cloud Computing", "DevOps"],
        url: "https://courses.ictacademy.skillsnetwork.site/certificates/62f04e18f6b841848b29c4b2b8c1a2cc",
        featured: true
    },
    {
        id: "java",
        title: "Java Core Certification",
        issuer: "SoloLearn",
        date: "26-OCT-2022",
        credentialId: "CT-PL6PPEPM",
        image: "/assets/images/Honurs/JavaSololearn.png",
        description: "Advanced Java programming certification demonstrating proficiency in core Java concepts and OOP principles.",
        skills: ["Java", "Object-Oriented Programming", "Data Structures"],
        url: "https://www.sololearn.com/en/profile/15878400",
        featured: true
    },
    {
        id: "sql",
        title: "SQL Certification",
        issuer: "HackerRank",
        date: "14-FEB-2024",
        credentialId: "F8D5401A9C65",
        image: "/assets/images/Honurs/SqlHackerrank.jpg",
        description: "Database management and SQL querying certification showcasing expertise in data manipulation and optimization.",
        skills: ["SQL", "Database Design", "Query Optimization"],
        url: "https://www.hackerrank.com/certificates/f8d5401a9c65",
        featured: true
    }
];

// Projects
export const projects = [
    {
        id: "medi-remainder",
        title: "MediRemainder",
        description: "A comprehensive medication reminder application with AI-powered dosage recommendations and health tracking.",
        image: "/assets/images/Projects/MediRemainder.png",
        technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Mobile App"],
        github: "https://github.com/nithesh/medi-remainder",
        live: "https://mediremainder.app",
        featured: true,
        category: "healthcare"
    },
    {
        id: "room-rental",
        title: "RoomRental Platform",
        description: "Full-stack rental management system with payment integration, booking system, and user reviews.",
        image: "/assets/images/Projects/Roomrental.jpg",
        technologies: ["Next.js", "PostgreSQL", "Stripe", "Real-time Chat"],
        github: "https://github.com/nithesh/room-rental",
        live: "https://roomrental.com",
        featured: true,
        category: "e-commerce"
    },
    {
        id: "terion",
        title: "Terion IoT Platform",
        description: "Internet of Things platform for smart device management and data analytics.",
        image: "/assets/images/Projects/Terion.png",
        technologies: ["IoT", "React", "Node.js", "MQTT", "Data Analytics"],
        github: "https://github.com/nithesh/terion",
        live: "https://terion.io",
        featured: true,
        category: "iot"
    },
    {
        id: "sandj-rec",
        title: "S&J Recruitment System",
        description: "Comprehensive recruitment management system with candidate tracking and interview scheduling.",
        image: "/assets/images/Projects/SandJRec.png",
        technologies: ["React", "Express", "MongoDB", "Email Integration"],
        github: "https://github.com/nithesh/sandj-rec",
        live: "https://sandj-rec.com",
        featured: false,
        category: "hr"
    }
];

// Workshops & Events
export const workshops = [
    {
        id: "velammal",
        title: "Software Workflows & IoT Workshop",
        institution: "Velammal Engineering College",
        date: "2024",
        image: "/assets/images/Events/velammal.jpg",
        description: "Conducted comprehensive workshop on modern software development workflows and Internet of Things technologies.",
        attendees: "50+ students",
        topics: ["IoT Fundamentals", "Git Workflows", "Developemnt",  "Database Architecture"],
        featured: true
    },
    {
        id: "alagappa-python",
        title: "Python Programming Masterclass",
        institution: "Alagappa College of Engineering",
        date: "2024",
        image: "/assets/images/Events/alagappa.jpg",
        description: "Intensive Python programming workshop focusing on problem-solving and algorithmic thinking.",
        attendees: "200+ students",
        topics: ["Python Basics", "Data Structures", "Algorithms", "Problem Solving"],
        featured: true
    },
    {
        id: "national-college",
        title: "MOE Signature Event Speaker",
        institution: "National College of Engineering",
        date: "2024",
        image: "/assets/images/Events/NationalClg.jpg",
        description: "Represented organization at prestigious MOE Signature event, sharing insights on technology trends.",
        attendees: "500+ attendees",
        topics: ["Technology Trends", "Career Guidance", "Industry Insights"],
        featured: true
    },
    {
        id: "mamcet-java",
        title: "Java Programming Workshop",
        institution: "MAMCET College of Engineering",
        date: "2023",
        image: "/assets/images/Events/MamcetJava.jpg",
        description: "Large-scale Java programming workshop with hands-on coding sessions and project development.",
        attendees: "700+ students",
        topics: ["Java Core", "Object-Oriented Programming", "Project Development"],
        featured: true
    }
];

// Blog Posts
export const blogPosts = [
    {
        id: "life-at-wowelse",
        title: "Life at Wowelse: Building the Future of Digital Branding",
        excerpt: "Exploring my journey as a Backend Developer at Wowelse, where innovation meets creativity in the digital branding space.",
        content: "Detailed blog about work culture, technical challenges, and growth opportunities...",
        author: personalInfo.name,
        date: "2024-12-01",
        readTime: "5 min read",
        category: "Career",
        tags: ["Backend Development", "Company Culture", "Technology"],
        image: "/assets/images/Wowelse/wowelseIndex.png",
        featured: true
    },
    {
        id: "life-at-quantanics",
        title: "My PERN Stack Journey at Quantanics",
        excerpt: "A deep dive into my experience as a full-stack developer, working with cutting-edge technologies and building scalable applications.",
        content: "Comprehensive overview of technical challenges, team collaboration, and project achievements...",
        author: personalInfo.name,
        date: "2024-11-15",
        readTime: "7 min read",
        category: "Technology",
        tags: ["Full-Stack", "PERN Stack", "Web Development"],
        image: "/assets/images/Quantainics/quantanicsIndex.png",
        featured: true
    }
];

// Contact Information
export const contactInfo = {
    email: personalInfo.email,
    phone: personalInfo.phone,
    location: personalInfo.location,
    social: {
        github: personalInfo.github,
        linkedin: personalInfo.linkedin,
        twitter: personalInfo.twitter,
        email: personalInfo.email
    },
    availability: "Open to new opportunities",
    responseTime: "Within 24 hours"
};

// Navigation
export const navigation = [
    { name: "Home", href: "#home", current: true },
    { name: "About", href: "#about", current: false },
    { name: "Experience", href: "#experience", current: false },
    { name: "Skills", href: "#skills", current: false },
    { name: "Workshops", href: "#workshops", current: false },
    { name: "Certifications", href: "#certifications", current: false },
    { name: "Contact", href: "#contact", current: false }
];