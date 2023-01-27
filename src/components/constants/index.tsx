import { FaChalkboardTeacher } from "react-icons/fa";
import {
  RiSuitcase2Line,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import { GiTeacher, GiRuleBook } from "react-icons/gi";
import { MdHotelClass, MdOutlineQueryStats } from "react-icons/md";
import { BsClouds, BsListCheck, BsCodeSlash } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

export const Links = [
  { name: "Home", link: "/" },
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
];

export const points = [
  {
    icon: <BsClouds className="h-10 w-10" />,
    desc: "We stay curious, and seek out new solutions.",
  },
  {
    icon: <BsListCheck className="h-10 w-10" />,
    desc: "We work relentlessly to produce fruitful results.",
  },
  {
    icon: <FaHandsHelping className="h-12 w-12" />,
    desc: "We support each other to grow, with a positive spirit, and embrace our diversities.",
  },
];

export const perks = [
  {
    icon: <FaChalkboardTeacher className="h-10 w-10 text-yellow-500" />,
    title: "Workshops",
    desc: "The members get free access to all the events and workshops conducted by the Finite Loop club.",
  },
  {
    icon: <RiSuitcase2Line className="h-10 w-10 text-yellow-500" />,
    title: "Internships",
    desc: "Get a chance to grab internships and put your skills into use.",
  },
  {
    icon: <GiTeacher className="h-10 w-10 text-yellow-500" />,
    title: "Peer to Peer Learning",
    desc: "Explain your ideas to others and participate in activities through which you can learn from your peers.",
  },
  {
    icon: <MdHotelClass className="h-10 w-10 text-yellow-500" />,
    title: "Guest Lecture",
    desc: "Get an opportunity to listen to some of the renowned experts, and engage in discussions.",
  },
  {
    icon: <MdOutlineQueryStats className="h-10 w-10 text-yellow-500" />,
    title: "Real-Time Projects",
    desc: "Being in this club, you get to work on real time projects, which allows you to bring out your creative side.",
  },
  {
    icon: <BsCodeSlash className="h-10 w-10 text-yellow-500" />,
    title: "Coding Contest",
    desc: "We ensure to conduct biweekly coding contests, to improve your analytical and problem solving skills.",
  },
];

export const social = [
  {
    link: "https://www.instagram.com/finiteloop_club_nmamit/",
    icon: <AiOutlineInstagram className="h-7 w-7 hover:text-yellow-500" />,
    name: "Instagram",
  },
  {
    link: "https://www.facebook.com/FiniteLoopClub.Nmamit/",
    icon: <AiOutlineFacebook className="h-7 w-7 hover:text-yellow-500" />,
    name: "Facebook",
  },
  {
    link: "https://www.linkedin.com/showcase/finite-loop-club",
    icon: <AiOutlineLinkedin className="h-7 w-7 hover:text-yellow-500" />,
    name: "LinkedIn",
  },
  {
    link: "mailto:finiteloopclub@gmail.com",
    icon: <AiOutlineMail className="h-7 w-7 hover:text-yellow-500" />,
    name: "E-mail",
  },
  {
    link: "tel:8197903771",
    icon: <AiOutlinePhone className="h-7 w-7 hover:text-yellow-500" />,
    name: "Call Us",
  },
];

export const eventTabs = ["All", "2022-23", "2021-22", "2020-21", "2017-20"];

export const teamTabs = [
  "Year2017to2020",
  "Year2020to2021",
  "Year2021to2022",
  "Year2022to2023",
  "Faculty",
];

export const events = [
  {
    name: "DSA with JAVA workshop",
    date: "12/11/2022",
    attended: "70+ Participants",
    type: "Hands-On Workshop",
    image: "/events/DSA_with_JAVA/dsa_with_java_akash.png",
    organizer: "Amogh Mayya",
    desc: "The Placement Season is on and so is the anxiety to be placed! We hear that Twilio is around the corner and the pre-final year students are being geared up. Are you unsure where to start your preparations from? What are the topics that need to be focused on  Which language to code in Not to worry. Finite Loop Club, NMAMIT is here with a workshop on 'Data Structures and Algorithms with Java' (Theory + Problem Solving) !! That's right",
    year: "2022-23",
  },
  {
    name: "Web Application Security & Bug Bounty Hunting",
    date: "05/11/2022",
    attended: "70+ Participants",
    type: "Hands-On Workshop",
    image: "/events/Web Application Security/Web Application Security.png",
    organizer: " P Ashwini Acharya and Padmashree Shetty",
    year: "2022-23",
    desc: `⚡Are you someone who is curious about Ethical Hacking, Are you inclined towards technological security and networks or system infrastructure ?⚡

    ⚡If these things resonates with your area of interest then,
    Finite Loop Club(FLC) welcomes all the technophiles to an interesting opportunity.⚡
    
    📢 FLC is organizing a "beginner-friendly hands-on guide to Application Security (Ethical Hacking)" where all the participants will be upskilled by taking them through the topics like : 2FA Bypass ,Broken Authentication,HTML Injection,Brute Force Attacks,HTTP Parameter Pollution,OAuth Misconfiguration,Host Header Injection.
    
    Then Let's hunt the bugs, like thugs;
    Let's have some fun, with Trojan;
    Let's get the code fix, but keeping our ethics`,
  },
  {
    name: "Induction programme",
    date: "13/10/2022",
    attended: "200+ Participants",
    type: "Hands-On Workshop",
    image: "/events/induction 22/induction 22.png",
    organizer: "FLC Team",
    year: "2022-23",
    desc: `At the Induction Program held on October 13, 2022, Finite Loop Club, NMAMIT, effectively orientated the new batch of FLCians to the club culture and the activities intended to be continued.
    Ms. Shambhavi Bhandarkar, CEO of Chipsy IT Services Pvt. Ltd., served as the event's Chief Guest.
    A huge welcome to our new members, let's stay in the loop`,
  },
  {
    name: "Kickstart Open source journey with Hacktoberfest",
    date: "24/09/2022",
    attended: "70+ Participants",
    type: "Hands-On Workshop",
    image: "/events/hacktoberfest/hacktoberfest.png",
    organizer: "Padmashree",
    desc: 'The festival of coding and open source contribution is almost nearing, and on September 24, 2022, Finite Loop Club had a successful session titled "Kickstart the Journey of Open Source Contribution with Hacktoberfest." An extensive walkthrough on open source contributions with a demonstration of how to create a valid pull request was delivered with the active participation of more than 70 students. Nagaraj Pandith, vice president of the Finite Loop Club, handled the session.',
    year: "2022-23",
  },
  {
    name: "DSA in Python",
    date: "14/09/2022",
    attended: "84 Participants",
    type: "Hands-On Workshop",
    image: "/events/python/Python.png",
    organizer: "Bhargavi, Nagaraj Pandith",
    desc: "The Finite Loop Club, NMAMIT in association with Abhyuday - the Department of Counselling, Welfare, Training and Placement of NMAMIT successfully conducted a two-day (14th & 15th Sep) Hands-On Workshop on Python Programming with a focus on cracking coding interview rounds for the Final Year Students of Electronics and Communication Dept. of NMAMIT. ",
    year: "2022-23",
  },
  {
    name: "Git and Github - Hands on Workshop",
    date: "21/05/2022",
    attended: "75+ Participants",
    type: "Hands-On Workshop",
    image: "/events/github/picture1.jpg",
    organizer: "Anjuman Raj, Bhargavi Nayak",
    desc: "Finite Loop Club, NMAMIT, Nitte successfully conducted yet another hands-on session, “Git and Github”, on 21st May 2022. The organizers of the event were Mr. Nagaraj Pandith, 2nd year, CSE, and Mr. Swasthik Shetty, 2nd year, CSE.",
    year: "2021-22",
  },
  {
    name: "Javascript Mastery",
    date: "12/03/2022",
    attended: "70+ Participants",
    type: "Hands-On Workshop",
    image: "/events/jsMastery/picture1.jpeg",
    organizer: "Shrilakshmi Pai",
    desc: "Finite Loop Club, NMAMIT, Nitte successfully conducted a workshop on “Javascript Mastery” by our alumni, Mr. Shashank S Shetty on March 12, 2022. ",
    year: "2021-22",
  },
  {
    name: " WAR ZONE",
    date: "26/11/2021",
    attended: "10+ Teams",
    type: "Gaming",
    image: "/events/warzone/warzone.jpeg",
    organizer: "Thejas Kumar, Dhanish S Suvarna",
    desc: "Call of Duty (COD) was played by the registered teams based on the maps, FiringRange, Standoff, Summit, Nuketown. Teams were made to compete against each other based on toss and after a great fight, Team DPH could battle through excel! Winners: Shravan P, Aravinda Krishna U, Rathan B, M Ankur Baliga, Achal Rai.",
    year: "2021-22",
  },

  {
    name: " Website Launch and Invited Talk on “Company Fit Culture”:",
    date: "03/03/2022",
    attended: "60+ Participants",
    type: "Invited Talk",
    image: "/events/websiteLaunch/picture1.jpeg",
    organizer: "Finite Loop Team",
    desc: "Finite Loop Club, NMAMIT, Nitte successfully launched its new website at the event held at Shambhavi Seminar Hall on 3rd March 2022. Mr. Sumukh Bhandarkar, a Software Developer at Oracle was the Chief guest. The core members of Finite Loop Club were handed over their Identity Cards by the Principal on this occasion. The launch was followed by a talk on 'Company Fit Culture' by Mr. Sumukh Bhandarkar. The importance of Test Cases and Open source contributions were the main highlights.",
    year: "2021-22",
  },

  {
    name: "Web Appilcation Hacking and Penetration Testing",
    date: "16/12/2021",
    attended: "40+ Teams",
    type: "Cyber Security",
    image: "/events/hacking/hacking.jpeg",
    organizer: "Abdeali",
    desc: "This workshop was conducted by Abdeali, 3rd CSE, NMAMIT. It had a positive impact among the participants and gave the newbies the required knowledge and resources to kickstart their journey in the field of Cyber Security.",
    year: "2021-22",
  },

  {
    name: "Cyhack",
    date: "26/05/2021",
    attended: "60+ Teams",
    type: "Cyber Security",
    image: "/events/cyhack/picture1.png",
    organizer: "Sanath R Pai, Shravya S Rao , Shrilakshmi Pai N",
    desc: "Information Security competition that challenges the contestants to solve a variety of tasks ranging from a scavenger hunt on Wikipedia to basic programming exercises, to hack their way into a server to steal the data.",
    year: "2020-21",
  },

  {
    name: "Kurukshetra",
    date: "11/03/2021",
    attended: "150+ participants",
    type: "Cyber Security",
    image: "/events/kurukshetra/picture1.png",
    organizer: "Finite Loop Team",
    desc: "Finite Loop club, NMAMIT, Nitte, successfully conducted a gaming event on 11th March, 2021. It was a fun and a lively event. More than 150 students competed to obtain the title of Ultimate Champions. The event consisted of three games, which were Call of Duty, NFS, eFootballPes",
    year: "2020-21",
  },
  {
    name: "CODE INNOVATION SERIES",
    date: "28-30 October, 2020",
    attended: "80+ Teams",
    type: "Open source Hackathon",
    image: "/events/code_innovation/picture2.png",
    organizer: "Finite Loop Team",
    desc: "Finite Loop Club under the Centre for Student Innovation (CFSI) in association with the New Age Innovation Network (NAIN), KITS, Dept. of Electronics, IT, BT and S&T, Govt. of Karnataka organized “CODE INNOVATION SERIES - NMAMIT” hosted by IncubateIND under the GitHub Campus Program in collaboration with our college, and thus was a part of India's largest open source Hackathon.",
    year: "2020-21",
  },
  {
    name: "Naari Tattva",
    date: "13/03/2021",
    attended: "100+ Participants",
    type: "Seminar",
    image: "/events/naritatva/picture.png",
    organizer: "Finite Loop Team",
    desc: "Finite Loop NMAMIT, Nitte, organized an event, 'Naari Tattva', on 13th of March, 2021. This event glorified the achievements of women in various fields. The session consisted of Inspirational talk by women achievers, Stand-up comedy, Poetry, Shayari, narrating short stories and The grand quiz.",
    year: "2020-21",
  },
  {
    name: "DEBUNKER 101",
    date: "26/04/2021",
    attended: "150+ Participants",
    type: "Seminar",
    image: "/events/debunker/picture1.png",
    organizer: "Sanath R Pai, Shravya S Rao, Rahul S",
    desc: "Finite Loop Club-NMAMIT in association with the Dept. of Electrical and Electronics Engineering, conducted the virtual debugging workshop Debunker 101 on 26th April 2021 from 2-5 pm. The workshop was conducted to provide placement related tips on debugging and coding in C/C++ for pre-final year students of the EEE dept.",
    year: "2020-21",
  },
  {
    name: "Importance of Web in the era of AI",
    date: "10/10/2020",
    attended: "200+ Participants",
    type: "Seminar",
    image: "/events/imp_web_ai_era/crp_pic.png",
    organizer: "Finite Loop Team",
    desc: "Dr. Gokul S Krishnan in his guest lecture, spoke about the evolution of the web. He discussed various versions through which the web has evolved. He also went on to talk about Machine Learning, Internet of Things, and the role of web and web services. The two hours of the session provided glimpses of the research direction of various trending technologies.",
    year: "2020-21",
  },
  {
    name: "A hands on session on DevOps",
    date: "24-25th February 2018",
    attended: "30+ Participants",
    type: "Workshop",
    image: "/events/devops/picture1.png",
    organizer: "Finite Loop Team",
    desc: "Finite Loop had successfully conducted a two-day workshop on “A hands on session on DevOps“. Students from various semesters actively took part in the workshop. The session started off with Introduction to DevOps. The session then continued with Git, a version control system for tracking changes in computer files and coordination. The usage of GitHub and remote connection to GitHub was taught in the session. The second day began with the second session of DevOps workshop. The testing of code (i.e. project) by an automated build (Travis CI) was taught in the session. Docker, a computer program performing OS level virtualization was introduced. Dockerizing a project was taught and we deployed our own web server using docker and Django, a high-level python framework. This marked the end of the 2-day workshop on “A hands on session on DevOps”",
    year: "2017-20",
  },
  {
    name: "Screening Test",
    date: "12/01/2018",
    attended: "40+ Participants",
    type: "Workshop",
    image: "/events/screening_test/Picture1.jpg",
    organizer: "Finite Loop Team",
    desc: "A screening test was conducted for those who wished to be a part of this club. In the first round, 20 objective type questions on C and C++ were to be answered by the students. Students from various branches took part in it. For the second round, the short listed students were asked to solve two questions, one of them being a problem statement, and another, a web development question. 9 contestants were selected as the new members of Finite Loop, based on their style, creativity and problem solving ability.",
    year: "2017-20",
  },
  {
    name: "Android App development",
    date: "28-29th October 2017",
    attended: "30+ Participants",
    type: "Android Development",
    image: "/events/android_dev/picture3.png",
    organizer: "Finite Loop Team",
    desc: "Finite Loop in association with Centre For Student Innovation(CFSI), had conducted a 2-day Workshop on “Android App Development”. The students were taught the basics of Android, its life cycles, coding with Android studio. The students were able to develop a small scale android application at the end of the sessions.",
    year: "2017-20",
  },
  {
    name: "Introduction to Web Development",
    date: "16-17th September 2017",
    attended: "60+ Participants",
    type: "Web Development",
    image: "/events/intro_to_web/Picture3.png",
    organizer: "Finite Loop Team",
    desc: "Finite loop in association with Centre For Student Innovation(CFSI), had conducted a 2-day Workshop on “Introduction to Web Designing”. The sessions covered topics on basic Html, CSS and JavaScript.",
    year: "2017-20",
  },
  {
    name: "Backend Development using PHP",
    date: "23-24th September 2017",
    attended: "50+ Participants",
    type: "Web Development",
    image: "/events/backend_dev/Picture2.jpg",
    organizer: "Finite Loop Team",
    desc: "Finite Loop in association with Centre For Student Innovation(CFSI), has conducted a 2-day Workshop on “Backend Development using PHP”. The sessions covered topics on server side programming concepts using PHP.",
    year: "2017-20",
  },
];

export const members = [
  //Faculty
  {
    name: "Mr. NIRANJAN N CHIPLUNKAR",
    role: "PRINCIPAL",
    img: "/team/faculty/principal.jpg",
    // github: "https://github.com/ShrilakshmiPai",
    linkedin: "https://www.linkedin.com/in/niranjan-chiplunkar-47b302a/",
    year: "Faculty",
  },
  {
    name: "Mr. Shashank Shetty",
    role: "Assistant Professor-CSE",
    img: "/team/faculty/shashank_sir.png",
    // github: "https://github.com/ShrilakshmiPai",
    linkedin: "https://www.linkedin.com/in/shashank-shetty-a920a573/",
    year: "Faculty",
  },
  {
    name: "Mr. Krishna Prasad Rao",
    role: "Assistant Professor-CSE",
    img: "/team/faculty/kp_sir.jpg",
    // github: "https://github.com/ShrilakshmiPai",
    linkedin: "https://www.linkedin.com/in/krishna-prasad-n-rao-2367a523/",
    year: "Faculty",
  },
  {
    name: "Mr. Puneeth R P",
    role: "Assistant Professor-CSE",
    img: "/team/faculty/puneet_sir.jpg",
    // github: "https://github.com/ShrilakshmiPai",
    linkedin: "https://www.linkedin.com/in/puneethrp/",
    year: "Faculty",
  },
  //Team2022-23

  {
    name: "Bhargavi Nayak",
    role: "President",
    img: "/team/team2022/bhargavi.jpg",
    github: "https://github.com/Bhargavi09",
    linkedin:
      "https://www.linkedin.com/in/bhargavi-nayak/?original_referer=https%3A%2F%2Ffiniteloop.co.in%2F",
    year: "2022-23",
  },
  {
    name: "Nagaraj Pandith",
    role: "Vice-President",
    img: "/team/team2022/nagaraj.png",
    github: "https://github.com/nagarajpandith",
    linkedin: "https://www.linkedin.com/in/nagaraj-pandith/",
    year: "2022-23",
  },
  ,
  {
    name: "Apoorva Prabhu",
    role: "Secretary",
    img: "/team/team2022/apoorva.jpg",
    github: "https://github.com/Apoorva77",
    linkedin: "https://www.linkedin.com/in/apoorva-prabhu-r/",
    year: "2022-23",
  },
  {
    name: "Padmashree ",
    role: "Joint Secretary",
    img: "/team/team2023/Padmashree.jpg",
    github: "https://github.com/padmashreeshetty123",
    linkedin: "https://www.linkedin.com/in/padmashree-shetty-1298b2228/",
    year: "2022-23",
  },
  {
    name: "Bhoomika Prabhu",
    role: "Events Head",
    img: "/team/team2022/bhoomika.jpg",
    github: "https://github.com/Bhoomika-05",
    linkedin: "https://www.linkedin.com/in/bhoomika-prabhu-9b36a61a8/",
    year: "2022-23",
  },
  {
    name: "Thejas Kumar",
    role: "Events Head",
    img: "/team/team2022/thejas.jpeg",
    linkedin: "https://www.linkedin.com/in/thejas-kumar-k-778a4220a",
    year: "2022-23",
  },
  {
    name: "Vaishnavi Salvankar",
    role: "Talent Acquisition Lead",
    img: "/team/team2022/vaishnavi.jpg",
    github: "https://github.com/Vaishnavi031",
    linkedin: "https://www.linkedin.com/in/vaishnavisalvankar/",
    year: "2022-23",
  },

  {
    name: "Swasthik Shetty",
    role: "Technical Head",
    img: "/team/team2022/swastik.jpeg",
    github: "https://github.com/swasthikshetty10",
    linkedin: "https://www.linkedin.com/in/swasthikshetty10/",
    year: "2022-23",
  },
  {
    name: "Anjuman Raj",
    role: "Technical Head",
    img: "/team/team2022/anjuman.png",
    github: "https://github.com/ayusmann/",
    linkedin: "https://www.linkedin.com/in/anjuman-raj-ba390b1b5/",
    year: "2022-23",
  },
  {
    name: "Vidyesh Kumar",
    role: "Digital Tech lead",
    img: "/team/team2022/Vidyesh.png",
    github: "https://github.com/vidyesh-kumar",
    linkedin: "hhttps://www.linkedin.com/in/vidyesh-kumar-83667221a/",
    year: "2022-23",
  },
  {
    name: "Abdeali",
    role: "Ethical Hacking Head",
    img: "/team/team2023/Abdeali.jpg",
    linkedin: "https://www.linkedin.com/in/abdeali-hm-211105210/",
    year: "2022-23",
  },
  {
    name: "Dhanish Suvarna",
    role: "Program Advisor",
    img: "/team/team2022/dhanish.jpg",
    github: "https://github.com/dhanishssuvarna",
    linkedin: "https://www.linkedin.com/in/dhanishssuvarna",
    year: "2022-23",
  },
  {
    name: "Amogha Mayya",
    role: "Program Advisor",
    img: "/team/team2022/Amogha.png",
    github: "https://github.com/Amogha-Maiya",
    linkedin: "https://www.linkedin.com/in/amogha-mayya",
    year: "2022-23",
  },
  {
    name: "Karthik Acharya",
    role: "Program Advisor",
    img: "/team/team2022/karthikA.jpg",
    github: "https://github.com/Karthikg09",
    linkedin: "https://www.linkedin.com/in/gkarthikacharya",
    year: "2022-23",
  },
  {
    name: "Akash Rao",
    role: "Program Advisor",
    img: "/team/team2023/AkashRao.jpg",
    linkedin: "https://www.linkedin.com/in/akash-rao-4801771bb/",
    year: "2022-23",
  },
  {
    name: "Prajwal Suvarna",
    role: "Program Lead",
    img: "/team/team2023/Prajwal Suvarna.jpg",
    linkedin: "https://www.linkedin.com/in/prajwal-suvarna-43446a218/",
    github: "https://github.com/prajwalsuvarna",
    year: "2022-23",
  },
  {
    name: "Pavan A B",
    role: "Program Lead",
    img: "/team/team2023/PAVAN A B.jpg",
    year: "2022-23",
  },
  {
    name: "Nidheesha T",
    role: "Program Lead",
    img: "/team/team2023/NIDHEESHA T.jpg",
    linkedin: "https://www.linkedin.com/in/nidheesha-t-8b6685246/",
    github: "https://github.com/NidheeshaT",
    year: "2022-23",
  },
  {
    name: "Ashwini Acharya",
    role: "Program Lead",
    img: "/team/team2023/ASHWINIACHARYA.jpg",
    linkedin: "https://www.linkedin.com/in/p-ashwini-acharya-73a631229/",
    github: "https://github.com/acharyaashwini/",
    year: "2022-23",
  },
  {
    name: "Shruthi Poojary",
    role: "Program Lead",
    img: "/team/team2023/ShruthiPoojari.jpg",
    linkedin: "https://www.linkedin.com/in/shruthi-poojari-76a7131ab/",
    year: "2022-23",
  },
  {
    name: "Vaishnavi Prasad",
    role: "Program Lead",
    img: "/team/team2023/VAISHNAVI PRASAD.jpg",
    linkedin: "https://www.linkedin.com/in/vaishnavi-prasad-bb4504211/",
    year: "2022-23",
  },
  {
    name: "Vaishnavi K",
    role: "Program Lead",
    img: "/team/team2023/vaishnavi k.jpeg",
    linkedin: "https://www.linkedin.com/in/vaishnavi-k-a35860246/",
    year: "2022-23",
  },
  {
    name: "Bhushan Nayak",
    role: "Program Lead",
    img: "/team/team2023/Bhushan Nayak.jpg",
    linkedin: "https://www.linkedin.com/in/bhushan-nayak/",
    github: "https://github.com/Bhushan-code/",
    year: "2022-23",
  },
  {
    name: "Swasthik A Shetty",
    role: "Program Lead",
    img: "/team/team2023/Swasthik Shetty.jpg",
    linkedin: "https://www.linkedin.com/in/swasthik-shetty-726809233/",
    year: "2022-23",
  },
  {
    name: "Daivik Shetty",
    role: "Program Lead",
    img: "/team/team2023/Daivik Shetty.jpg",
    linkedin: "https://www.linkedin.com/in/daivik-shetty-a4537521b/",
    github: "https://github.com/daivikshetty/",
    year: "2022-23",
  },
  {
    name: "Rahul Pai",
    role: "Program Lead",
    img: "/team/team2023/Rahul Pai.jpg",
    linkedin: "https://www.linkedin.com/in/rahul-pai-682910202/",
    year: "2022-23",
  },
  {
    name: "Gagan G Nayak",
    role: "UI/UX Lead",
    img: "/team/team2023/gagan.png",
    linkedin: "https://www.linkedin.com/in/gagan-nayak-12922920b/",
    year: "2022-23",
  },
  {
    name: "Ashish Shankar",
    role: "UI/UX Co-Lead",
    img: "/team/team2023/Ashish.jpg",
    linkedin: "https://www.linkedin.com/in/ashish-shankar-089b67220/",
    year: "2022-23",
  },
  {
    name: "Rajath J",
    role: "Social Media Head",
    img: "/team/team2023/rajath.png",
    linkedin: "https://www.linkedin.com/in/rajath-01b605213/",
    year: "2022-23",
  },
  {
    name: "Shetty Ritesh",
    role: "Social Media Co-Head",
    img: "/team/team2023/RITESH_SHETTY.jpg",
    linkedin: "https://www.linkedin.com/in/ritesh-shetty-7550551a7/",
    year: "2022-23",
  },
  {
    name: "Suryanshu Choudhary",
    role: "Content Head",
    img: "/team/team2023/suryanshu.png",
    linkedin: "https://www.linkedin.com/in/suryanshu-choudhary-26a436166/",
    year: "2022-23",
  },
  {
    name: "B Atul V Pai",
    role: "Content Co-Head",
    img: "/team/team2023/Atul.jpg",
    year: "2022-23",
  },
  {
    name: "Nibha Rajesh Belle",
    role: "Graphics team",
    img: "/team/team2023/nibha.png",
    year: "2022-23",
  },
  {
    name: "Raksha Kamath",
    role: "Graphics team",
    img: "/team/team2023/raksha.png",
    year: "2022-23",
  },
  {
    name: "Prajwal",
    role: "Graphics team",
    img: "/team/team2023/prajwal.png",
    year: "2022-23",
  },
  {
    name: "Shishir Shetty",
    role: "Graphics team",
    img: "/team/team2023/shishir.png",
    year: "2022-23",
  },
  {
    name: "Samanwitha K",
    role: "Social Media team",
    img: "/team/team2023/samanwitha.png",
    year: "2022-23",
  },
  {
    name: "Akash A Bhandary",
    role: "Social Media team",
    img: "/team/team2023/akash.png",
    year: "2022-23",
  },
  {
    name: "Ananya Pai",
    role: "Social Media team",
    img: "/team/team2023/ananya.png",
    year: "2022-23",
  },
  {
    name: "Ashwini M",
    role: "Social Media team",
    img: "/team/team2023/ashwini.png",
    year: "2022-23",
  },
  {
    name: "Deepshika Poojary",
    role: "Social Media team",
    img: "/team/team2023/deepshika.png",
    year: "2022-23",
  },
  {
    name: "Fathima Thaskeen",
    role: "Social Media team",
    img: "/team/team2023/fathima.png",
    year: "2022-23",
  },
  {
    name: "Minal Assadi",
    role: "Social Media team",
    img: "/team/team2023/minal.png",
    year: "2022-23",
  },
  {
    name: "Shreyas Pai Atkere",
    role: "Social Media team",
    img: "/team/team2023/shreyas.png",
    year: "2022-23",
  },

  //Team 2021-22
  {
    name: "Shrilakshmi Pai",
    role: "President",
    img: "/team/team2022/shrilaxmi.png",
    github: "https://github.com/ShrilakshmiPai",
    linkedin: "https://www.linkedin.com/in/shrilakshmipai",
    year: "2021-22",
  },
  {
    name: "Bhargavi Nayak",
    role: "Vice-President",
    img: "/team/team2022/bhargavi.jpg",
    github: "https://github.com/Bhargavi09",
    linkedin:
      "https://www.linkedin.com/in/bhargavi-nayak/?original_referer=https%3A%2F%2Ffiniteloop.co.in%2F",
    year: "2021-22",
  },
  {
    name: "Rahul Bhat",
    role: "Secretary",
    img: "/team/team2022/rahul.jpg",
    github: "https://github.com/rahulbhat02",
    linkedin: "https://www.linkedin.com/in/rahul-bhat-a050731a9/",
    year: "2021-22",
  },
  {
    name: "Dhanish Suvarna",
    role: "Joint Secretary",
    img: "/team/team2022/dhanish.jpg",
    github: "https://github.com/dhanishssuvarna",
    linkedin: "https://www.linkedin.com/in/dhanishssuvarna",
    year: "2021-22",
  },
  {
    name: "Apoorva Prabhu",
    role: "Events-Head",
    img: "/team/team2022/apoorva.jpg",
    github: "https://github.com/Apoorva77",
    linkedin: "https://www.linkedin.com/in/apoorva-prabhu-r/",
    year: "2021-22",
  },
  {
    name: "Thejas Kumar",
    role: "Events Co-Head",
    img: "/team/team2022/thejas.jpeg",
    // github: "https://github.com/ShrilakshmiPai",
    linkedin: "https://www.linkedin.com/in/thejas-kumar-k-778a4220a",
    year: "2021-22",
  },
  {
    name: "Saishree",
    role: "Graphics Design Head",
    img: "/team/team2022/saishree.png",
    // github: "https://github.com/ShrilakshmiPai",
    linkedin: "https://www.linkedin.com/in/sai-shree",
    year: "2021-22",
  },
  {
    name: "Vidyesh Kumar",
    role: "Graphics Design Co-Head",
    img: "/team/team2022/Vidyesh.png",
    github: "https://github.com/vidyesh-kumar",
    linkedin: "hhttps://www.linkedin.com/in/vidyesh-kumar-83667221a/",
    year: "2021-22",
  },
  {
    name: "Anjuman Raj",
    role: "Technical Head",
    img: "/team/team2022/anjuman.png",
    github: "https://github.com/ayusmann/",
    linkedin: "https://www.linkedin.com/in/anjuman-raj-ba390b1b5/",
    bgImage: "/team/bg/bgBlue.jpg",
    year: "2021-22",
  },
  {
    name: "Bhoomika Prabhu",
    role: "Social Media Head",
    img: "/team/team2022/bhoomika.jpg",
    github: "https://github.com/Bhoomika-05",
    linkedin: "https://www.linkedin.com/in/bhoomika-prabhu-9b36a61a8/",
    year: "2021-22",
  },
  {
    name: "Vaishnavi Salvankar",
    role: "Content Writing Head",
    img: "/team/team2022/vaishnavi.jpg",
    github: "https://github.com/Vaishnavi031",
    linkedin: "https://www.linkedin.com/in/vaishnavisalvankar/",
    year: "2021-22",
  },
  {
    name: "Nagaraj Pandith",
    role: "Technical Content Head",
    img: "/team/team2022/nagaraj.png",
    github: "https://github.com/nagarajpandith",
    linkedin: "https://www.linkedin.com/in/nagaraj-pandith/",
    year: "2021-22",
  },
  {
    name: "Swasthik Shetty",
    role: "Technical Team",
    img: "/team/team2022/swastik.jpeg",
    github: "https://github.com/swasthikshetty10",
    linkedin: "https://www.linkedin.com/in/swasthikshetty10/",
    year: "2021-22",
  },
  {
    name: "Rachana Prabhu",
    role: "Technical Team",
    img: "/team/team2022/Rachana.jpg",
    github: "https://www.github.com/Rachana-27",
    linkedin: "https://www.linkedin.com/in/rachana-prabhu-65685118a",
    year: "2021-22",
  },
  {
    name: "Rashmi Baliga P",
    role: "Technical Team",
    img: "/team/team2022/Rashmi.jpg",
    github: "https://github.com/Rashmibaliga",
    linkedin: "https://www.linkedin.com/in/rashmi-baliga-0aa082172/",
    year: "2021-22",
  },
  {
    name: "Karthik Acharya",
    role: "Technical Team",
    img: "/team/team2022/karthikA.jpg",
    github: "https://github.com/Karthikg09",
    linkedin: "https://www.linkedin.com/in/gkarthikacharya",
    year: "2021-22",
  },
  {
    name: "Samantri Vinay",
    role: "Technical Team",
    img: "/team/team2021/Vinay_Samantri.jpg",
    github: "https://github.com/ViNi57",
    linkedin: "https://www.linkedin.com/in/vinay-samantri-15845a201/",
    year: "2021-22",
  },
  {
    name: "Pratheeksha P",
    role: "Technical Team",
    img: "/team/team2022/Pratheeksha.jpg",
    github: "https://github.com/Pratheeksha29",
    linkedin: "https://www.linkedin.com/in/pratheeksha-p-8ba0501b4/",
    year: "2021-22",
  },
  {
    name: "Amogha Mayya",
    role: "Technical Team",
    img: "/team/team2022/Amogha.png",
    github: "https://github.com/Amogha-Maiya",
    linkedin: "https://www.linkedin.com/in/amogha-mayya",
    year: "2021-22",
  },

  //Team 2021-20
  {
    name: "Sanath R Pai",
    role: "President",
    img: "/team/team2021/sanath.jpg",
    github: "https://github.com/sanathpai",
    linkedin: "https://www.linkedin.com/in/sanath-r-pai-0a415118a",
    year: "2020-21",
  },
  {
    name: "Shrilakshmi Pai N",
    role: "Vice President",
    img: "/team/team2022/shrilaxmi.png",
    github: "https://github.com/ShrilakshmiPai",
    linkedin: "https://www.linkedin.com/in/shrilakshmipai",
    year: "2020-21",
  },

  {
    name: "Saheer Abdul Rehman",
    role: "Core Member",
    img: "/team/team2021/Saheer Rehman.jpg",
    github: "https://github.com/Saheer555",
    linkedin: "https://www.linkedin.com/in/saheer-a-r",
    year: "2020-21",
  },

  {
    name: "Melroy Neil Dsouza",
    role: "Core Member",
    img: "/team/team2021/melroy.jpeg",
    github: "https://github.com/meldsza",
    linkedin: "https://www.linkedin.com/in/melroy-dsouza-9a0752170/",
    year: "2020-21",
  },
  {
    name: "Rahul Bhat",
    role: "Secrectary",
    img: "/team/team2022/rahul.jpg",
    github: "https://github.com/rahulbhat02",
    linkedin: "https://www.linkedin.com/in/rahul-bhat-a050731a9/",
    year: "2020-21",
  },
  {
    name: "Shravya S Rao",
    role: "Content Writing Head",
    img: "/team/team2021/shravya.jpg",
    github: "https://github.com/shravya-s-rao",
    linkedin: "https://www.linkedin.com/in/shravya-s-rao/",
    year: "2020-21",
  },
  {
    name: "Shreelata Kini",
    role: "Joint Secrectary",
    img: "/team/team2021/Shreelata Kini.jpeg",
    year: "2020-21",
  },
  {
    name: "Rishika Kalappa",
    role: "Treasurer",
    img: "/team/team2021/Rishika Kalappa.jpg",
    year: "2020-21",
  },
  {
    name: "Vaishnavi Salvankar",
    role: "Documentation Head",
    img: "/team/team2022/vaishnavi.jpg",
    github: "https://github.com/Vaishnavi031",
    linkedin: "https://www.linkedin.com/in/vaishnavisalvankar",
    year: "2020-21",
  },
  {
    name: "Rahul Sheregar",
    role: "Publicity Head",
    img: "/team/team2021/rahul s.jpeg",
    linkedin: "https://www.linkedin.com/in/rahul-sheregar-9655a51a7/",
    year: "2020-21",
  },
  {
    name: "Thejalaxmi",
    role: "Publicity Head",
    img: "/team/team2022/thejalaxmi.jpg",
    github: "https://github.com/Thejalakshmi28",
    linkedin: "https://www.linkedin.com/in/theja-lakshmi-41689a1ab/",
    year: "2020-21",
  },
  {
    name: "Samantri Vinay",
    role: "Publicity Head",
    img: "/team/team2021/Vinay_Samantri.jpg",
    github: "https://github.com/ViNi57",
    linkedin: "https://www.linkedin.com/in/vinay-samantri-15845a201/",
    year: "2020-21",
  },
  {
    name: "Rachana Prabhu",
    role: "Social Media Head",
    img: "/team/team2022/Rachana.jpg",
    github: "https://www.github.com/Rachana-27",
    linkedin: "https://www.linkedin.com/in/rachana-prabhu-65685118a",
    year: "2020-21",
  },
  {
    name: "Moghe Sudheesh Rao",
    role: "Social Media Head",
    img: "/team/team2021/Moghe Sudheesh Rao.jpeg",
    year: "2020-21",
  },
  {
    name: "Rashmi Baliga",
    role: "Social Media Head",
    img: "/team/team2022/Rashmi.jpg",
    github: "https://github.com/Rashmibaliga",
    linkedin: "https://www.linkedin.com/in/rashmi-baliga-0aa082172",
    year: "2020-21",
  },

  //Team 2020-2017
  {
    name: "Ms. Pooja Shetty",
    role: "Core Member",
    img: "/team/team17/pooja.jpg",
    linkedin: "https://www.linkedin.com/in/pooja-shetty-16b311161/",
    year: "2017-20",
  },
  {
    name: "Mr. Venkatesh Prasad M Pai",
    role: "Core Member",
    img: "/team/team17/venkatesh.jpg",
    linkedin: "https://www.linkedin.com/in/paivenky191/",
    year: "2017-20",
  },
  {
    name: "Mr. Mukul H S",
    role: "Core Member",
    img: "/team/team17/mukul.jpg",
    linkedin: "https://www.linkedin.com/in/hsmukul22/",
    year: "2017-20",
  },
  {
    name: "Mr. Manjunatha U",
    role: "Core Member",
    img: "/team/team17/Manjunath.jpg",
    linkedin:
      "hhttps://www.linkedin.com/in/manjunatha-u-a5bbb715b/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Gurudeep U J",
    role: "Core Member",
    img: "/team/team17/guru.jpg",
    linkedin: "https://www.linkedin.com/in/gurudeep-u-j-206709129/",
    year: "2017-20",
  },
  {
    name: "Mr. Aneesh Mathai",
    role: "Core Member",
    img: "/team/team17/aneesh.jpg",
    linkedin: "https://www.linkedin.com/in/aneesh-mathai-1b0780a9/",
    year: "2017-20",
  },
  {
    name: "Mr. Pawan Raj",
    role: "Core Member",
    img: "/team/team17/pawan.jpg",
    linkedin: "https://www.linkedin.com/in/pawan-raj-300994/",
    year: "2017-20",
  },
  {
    name: "Mr. Akshay Devadiga",
    role: "Core Member",
    img: "/team/team17/akshay.jpg",
    linkedin: "https://www.linkedin.com/in/akshay-devadiga-652687115/",
    year: "2017-20",
  },
  {
    name: "Mr. Mohammad Sabith",
    role: "Core Member",
    img: "/team/team17/sabith.jpg",
    linkedin:
      "https://www.linkedin.com/in/mohammedsabith/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Rajath Aithal",
    role: "Core Member",
    img: "/team/team17/rajath.jpg",
    linkedin: "https://www.linkedin.com/in/rajathaithal/",
    year: "2017-20",
  },
  {
    name: "Mr. B. Anudeep",
    role: "Core Member",
    img: "/team/team17/anudeep.jpg",
    linkedin: "https://www.linkedin.com/in/anudeep07/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Sriharivishnu",
    role: "Core Member",
    img: "/team/team17/srihari.jpg",
    linkedin:
      "https://www.linkedin.com/in/srihari-vishnu-2456921a5/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Sachin Prabhu",
    role: "Core Member",
    img: "/team/team17/Sachin.jpg",
    linkedin: "https://www.linkedin.com/in/sachinprabhuk/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. G Amar Prabhu",
    role: "Core Member",
    img: "/team/team17/amar.jpg",
    linkedin: "https://www.linkedin.com/in/g-amar-prabhu/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Shrikantha Budya",
    role: "Core Member",
    img: "/team/team17/shrikanth.jpg",
    linkedin:
      "https://www.linkedin.com/in/shrikanth-budya/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Ashwin P M",
    role: "Core Member",
    img: "/team/team17/Ashwin.jpg",
    linkedin:
      "https://www.linkedin.com/in/ashwin-p-m-0126471b9/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Rameez Shuhaib",
    role: "Core Member",
    img: "/team/team17/rameez.jpg",
    linkedin:
      "https://www.linkedin.com/in/rameez-shuhaib-505a29106/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Puneeth Kumar S R",
    role: "Core Member",
    img: "/team/team17/punith.jpg",
    linkedin: "https://www.linkedin.com/in/punithsr27/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Muthaheer Mohammed",
    role: "Core Member",
    img: "/team/team17/muthaheer.jpg",
    linkedin:
      "https://www.linkedin.com/in/muthaheer-mohammed-15435a12b/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Mohammed Kashif Minhaj",
    role: "Core Member",
    img: "/team/team17/kashif.jpg",
    linkedin:
      "https://www.linkedin.com/in/kashif-minhaj-84147129/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Mr. Shashank S Shetty",
    role: "Core Member",
    img: "/team/team17/shashank.jpg",
    linkedin:
      "https://www.linkedin.com/in/imshashanksshetty/?originalSubdomain=in",
    year: "2017-20",
  },
  {
    name: "Ms. Shraddha Bhat",
    role: "Core Member",
    img: "/team/team17/shraddha.jpg",
    linkedin: "https://www.linkedin.com/in/shraddha-bhat-49236015b/",
    year: "2017-20",
  },
  {
    name: "Mr. Muhammad Junaid",
    role: "Core Member",
    img: "/team/team17/junaid.jpg",
    linkedin: "https://www.linkedin.com/in/junaid1460/",
    year: "2017-20",
  },
  {
    name: "Ms. Priyadarshini Kumari",
    role: "Core Member",
    img: "/team/team17/priyadarshini.jpg",
    linkedin: "https://www.linkedin.com/in/priyadarshini-kumari-78b229190/",
    year: "2017-20",
  },
];

export const HackFestPhases = [
  {
    title: "Kickstart",
    description: `Meet your teammates and
    understand their qualities, strengths & weaknesses.
    Shoot a candid video of your discussion spanning 30
    seconds introducing your teammates  . Brainstorm and choose
    a team name & problem statement. One of our core
    team members will join you during the meet. Once you
    are done with choosing a problem statement, spend rest
    of your week in making a presentation of your
    idea/solution to the problem and how you are going to
    implement it.`,
    icon: <RiNumber1 className="inline text-3xl text-yellow-500" />,
    date: "11-18th Nov",
    link: false,
    id: 1,
  },
  {
    title: "Ideathon",
    description: `Teams need to pitch in their ideas which they have
    planned in the previous phase by presenting us on what
    they're planning to build. This can include the features,
    planned UI, etc of their end product. Must be shown to
    the assigned advisor by setting up a meet on any of the 2
    days to get the feedbacks.`,
    icon: <RiNumber2 className="inline text-3xl text-yellow-500" />,
    date: "19th-20th Nov",
    link: false,
    id: 2,
  },
  {
    title: "Hackathon",
    description: `Team must work on building the project along with
    learning the tech simultaneously. Team is expected to
    report the project progress to the advisor every
    weekend called as 'Retro/Retrospection' by setting up a
    meet to discuss what they have done so far, this is
    counted as 1 sprint. 4 such sprints must happen in the
    month of December.`,
    icon: <RiNumber3 className="inline text-3xl text-yellow-500" />,
    date: "21 Nov - 25 Dec",
    link: false,
    id: 3,
  },
  {
    title: "Expo Prep",
    description: `Team is expected to stop development, and must focus
    on preparing themselves for presenting the project on
    Project expo. No commits at this stage will be
    considered. Ppt or any other valid ways can be used to
    present your project to the judges.`,
    icon: <RiNumber4 className="inline text-3xl text-yellow-500" />,
    date: "25th Dec onwards",
    link: false,
    id: 4,
  },
  {
    title: "Project Expo",
    description: ` Final offline stage to showcase the projects at College
    to our judges. Winning team and Runner-up team will be
    announced on the same day. Each team member of
    Winning and Runner up team will be awarded with
    exciting prizes.`,
    date: "Coming Soon",
    icon: <RiNumber5 className="inline text-3xl text-yellow-500" />,
    link: false,
    id: 5,
  },
  {
    title: "Brochure",
    description: `Hackfest Brochure explaining the whole rules and timeline in the detail.`,
    icon: <GiRuleBook className="inline text-3xl text-yellow-500" />,
    link: true,
    id: 6,
  },
];

export const DSAPhases = [
  {
    title: "The Gateway",
    description: (
      <>
        Topics covered in this phase are:
        <ul className="list-inside list-disc">
          <li>Arrays</li>
          <li>Strings</li>
          <li>Hashmap</li>
          <li>Linked List</li>
        </ul>
      </>
    ),
    icon: <RiNumber1 className="inline text-3xl text-yellow-500" />,
    date: `20th Nov - 1st Jan '23`,
    link: false,
    id: 1,
  },
  {
    title: "The Next Milestone",
    description: (
      <>
        Topics covered in this phase are:
        <ul className="list-inside list-disc">
          <li>Stacks and Queues</li>
          <li>Trees</li>
          <li>Priority Queues</li>
          <li className="font-bold ">DS Main test</li>
        </ul>
      </>
    ),
    icon: <RiNumber2 className="inline text-3xl text-yellow-500" />,
    date: "15th Jan-26th Feb",
    link: false,
    id: 2,
  },
  {
    title: "The Summit",
    description: (
      <>
        Topics covered in this phase are:
        <ul className="list-inside list-disc">
          <li>Recursion /Backtracking</li>
          <li>Searching</li>
          <li>Sorting</li>
          <li>Two Pointer/Sliding Window Problems</li>
        </ul>
      </>
    ),
    icon: <RiNumber3 className="inline text-3xl text-yellow-500" />,
    date: "12th Mar - 23rd Apr",
    link: false,
    id: 3,
  },
  {
    title: "The Pinnacle",
    description: (
      <>
        Topics covered in this phase are:
        <ul className="list-inside list-disc">
          <li>Graphs</li>
          <li>Greedy Algorithms </li>
          <li>Dynamic Programming</li>
          <li className="font-bold ">Algorithms Main Test </li>
        </ul>
      </>
    ),
    icon: <RiNumber4 className="inline text-3xl text-yellow-500" />,
    date: "7th May - 18th June ",
    link: false,
    id: 4,
  },
  {
    title: "The Apex",
    description: (
      <>
        Topics covered in this phase are:
        <ul className="list-inside list-disc">
          <li className="font-bold ">DSA Test 1</li>
          <li className="font-bold ">DSA Test 2</li>
          <li className="font-bold ">DSA Test 3</li>
        </ul>
      </>
    ),
    icon: <RiNumber5 className="inline text-3xl text-yellow-500" />,
    date: "16th july - 30th Jul ",
    link: false,
    id: 5,
  },
  {
    title: "Brochure",
    description: `DSA Sprint Brochure explaining event and timeline in the detail.`,
    icon: <GiRuleBook className="inline text-3xl text-yellow-500" />,
    link: true,
    id: 6,
  },
];

export const sprintPhases = [
  {
    id: 1,
    isCompleted: true,
    isNext: false,
  },
  {
    id: 2,
    isCompleted: false,
    isNext: true,
  },
  {
    id: 3,
    isCompleted: false,
    isNext: false,
  },
  {
    id: 4,
    isCompleted: false,
    isNext: false,
  },
  {
    id: 5,
    isCompleted: false,
    isNext: false,
  },
];

export const hackfestPhases = [
  {
    id: 1,
    isCompleted: true,
    isNext: false,
  },
  {
    id: 2,
    isCompleted: true,
    isNext: true,
  },
  {
    id: 3,
    isCompleted: true,
    isNext: false,
  },
  {
    id: 4,
    isCompleted: true,
    isNext: false,
  },
  {
    id: 5,
    isCompleted: false,
    isNext: false,
  },
];
