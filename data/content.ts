export const site = {
  name: "peaq GmbH",
  tagline: "Analytics & automation",
  heroHeadline: "Get the most out of your Hitachi storage arrays",
  ctaPrimary: "Talk to us",
  ctaSecondary: "Explore solutions",
  email: "info@peaq.ch",
  address: "Neugutstrasse 12\n8304 Wallisellen\nSwitzerland",
  phone: "+41 44 586 20 40",
  supportUrl: "https://service-desk.peaq.ch",
  copyright: "© 2026 peaq GmbH All rights reserved"
};

export const nav = [
  { label: "SAM4H", href: "/solutions/sam4h" },
  { label: "IOportal", href: "/solutions/ioportal" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "https://service-desk.peaq.ch", external: true },
  { label: "Blog", href: "/blog" }
];

export const home = {
  intro:
    "peaq builds analytics-driven automation for enterprise storage teams. Our products help you provision, monitor, and govern Hitachi storage environments with clarity and speed.",
  highlights: [
    {
      title: "SAM4H · Smart Storage Provisioning",
      summary:
        "The peaq Smart Automation Manager (SAM4H) allows customers with limited IT budgets to manage midrange and high-end storage systems without the necessity of long-time storage expertise in their IT department. SAM4H allows for fast and secure management of volumes and replications at the highest level of quality and robustness. Even less experienced users can manage the most complex management tasks without the risk of handling errors. It drives cost cutting thanks to its fully integrated automation engine that comes out of the box.",
      image: "/assets/images/sam4h/sam4h_screenshot1_ipad2.png",
      href: "/solutions/sam4h"
    },
    {
      title: "IOportal · Performance Monitoring",
      summary:
        "The peaq IOportal is a storage system monitoring tool, fully developed and operated as a cloud service by peaq. It features easy navigation and intuitive graphs and reports based on analytical features that are fully automatically applied. This allows novice users much like expert users to visually identify the root cause of performance bottlenecks of their storage systems. The \"Proactive Service\", based on the IOportal, ensures customers get the most out of their storage systems.",
      image: "/assets/images/ioportal/ioportal_home.png",
      href: "/solutions/ioportal"
    },
    {
      title: "X-Charging · Cost Transparency",
      summary:
        "The peaq Cross-Charging solution provides end-to-end transparency of IT infrastructure costs. The fully customised cross-charging service combines up-to-date customer-specific cost center information enriched with dynamical infrastructure consumption data. The reports created are adapted to every customer's specific cross-charging processes and provide detailed and granular views of the infrastructure consumption of any cost center.",
      image: "/assets/images/x-charging/x-charging-w-logo.png",
      href: "/contact"
    }
  ]
};

export const sam4h = {
  heroTitle: "Storage Automation",
  heroSubtitle: "Get the most out of your Hitachi Storage systems with SAM4H by peaq.",
  intro:
    "Volumes and replications are the “bread and butter” business of the storage management team. Therefore, it is absolutely vital for the storage management tool to execute these tasks in an easy, fast and secure manner.",
  valueProps: [
    {
      title: "Volumes / Replications",
      subtitle: "Accelerate your daily provisioning business",
      description:
        "Providing automation of storage management tasks “out of the box” avoids the need for additional tools and customizations, reduces complexity and unnecessary costs and ensures that standardization is applied."
    },
    {
      title: "Automation",
      subtitle: "From A to Z with one tool",
      description:
        "SAM4H provisions storage based on predefined rules, that guarantee consistent quality of all managed volumes and replications. This allows separating engineering from operational tasks."
    },
    {
      title: "Rule-based Provisioning",
      subtitle: "Set your policies once, apply them daily",
      description:
        "SAM4H enables repeatable, policy-based provisioning to keep service quality stable across teams and sites."
    }
  ],
  quickStart: [
    { title: "Install", detail: "Install SAM4H in less than 30 minutes." },
    { title: "Discover", detail: "Discover your storage arrays and save their configuration details in a couple of minutes." },
    { title: "Define", detail: "Define your storage service catalogue as rules/templates within an hour." },
    { title: "Provision", detail: "Within 2–3 hours after starting the installation you’re ready to provision volumes and replications." }
  ],
  features: [
    "Scalable — Fast parallel execution of tasks on several arrays, suitable for large IT environments",
    "Easy — Easy to learn and operate, no SME knowledge required",
    "Efficient — Increase operational efficiency and reduce operational risk",
    "Cost saving — Reduce complexity and cost via rules based approach and out-of-the-box automation",
    "Agile — Catalyse business agility with rapid and standardized provisioning",
    "Compliant — Support compliance processes through audit features and reports",
    "Divide et impera — Clearly separated engineering and operational tasks and responsibilities",
    "Multiuser and Multitenant — Group storage management tasks by servers (multitenant) to be managed by tenant members simultaneously as a self service",
    "Fully Automated Replications — Manage GAD, 3DC, TrueCopy and HUR replications as simple as a webshop"
  ],
  quotes: [
    {
      quote:
        "We got very excited about SAM4H allowing us to execute our provisioning tasks of our large and highly complex storage setup in an easy, fast and extremely robust manner. When we asked peaq to add support for our 3-data-center (3DC) setup, they responded quickly exceeding our expectations by far and large. We highly appreciate peaq’s ability to react to customer needs.",
      author: "Enterprise Storage Lead"
    },
    {
      quote:
        "Before SAM4H we were faced with severe challenges trying to execute our day-to-day provisioning tasks. The first day we tested SAM4H it immediately became evident that SAM4H would solve all our issues as we were able to catch up within a day with all the tasks that were still waiting in our task list, unable to be executed due to lack of functionality, stability, robustness and execution speed of our existing tool set.",
      author: "Operations Manager"
    }
  ],
  screenshots: [
    {
      title: "Dashboard",
      description: "A new landing page provides a capacity overview over all arrays as well as a replication status summary.",
      image: "/assets/images/sam4h/screenshot_dashboard.png"
    },
    {
      title: "Timeline",
      description: "The improved task timeline is more readable and provides the ability of a full-text search powered by Elastic.",
      image: "/assets/images/sam4h/screenshot_array_mgmt.png"
    },
    {
      title: "Cluster Report",
      description: "View all relevant information on one page. Easily select LUNs and trigger actions.",
      image: "/assets/images/sam4h/screenshot_cluster_lun_report.png"
    },
    {
      title: "Cluster / Fabric Report",
      description:
        "This graphical representation of Host objects provides an intuitive way for verifying configurations, as well as exploring Host Groups, WWNs, fabrics and port status.",
      image: "/assets/images/sam4h/screenshot_cluster_fabric_report.png"
    },
    {
      title: "Dp Volume Configuration Template",
      description: "Create templates that reflect your organizations' policies. Apply them daily in a standardized fashion.",
      image: "/assets/images/sam4h/screenshot_dpv_config_template.png"
    },
    {
      title: "REST API",
      description: "Integrate SAM4H in your IT landscape via REST API.",
      image: "/assets/images/sam4h/screenshot_rest_api.png"
    }
  ],
  cta: {
    title: "Free Trial License",
    description: "Experience SAM4H quickly with a free trial license. We'll guide you through setup and best practices.",
    action: "Request a trial"
  }
};

export const ioportal = {
  heroTitle: "Cloud based Capacity and Performance Monitoring",
  heroSubtitle: "Get the most out of your Hitachi Storage systems with the peaq IOportal.",
  intro:
    "With its intuitive navigation, comprehensive graphs and reports the cloud based IOportal is the ideal capacity and performance management tool for any small to large and very large sized customers. Thanks to its easy, fast implementation customers get immediate return on investment.",
  valueProps: [
    {
      title: "Capacity & Performance Monitoring",
      subtitle: "Measure what matters",
      description:
        "You can only improve your storage system services if you measure and understand their capacity and performance."
    },
    {
      title: "Visual Root Cause Analysis",
      subtitle: "Find bottlenecks fast",
      description:
        "IOportal unique analytical methods allow for fast, reliable and visual root cause identification."
    },
    {
      title: "Health Checks",
      subtitle: "Stay ahead of degradation",
      description:
        "Identify and mitigate slow creeping performance degradations with the IOportal Health Checks."
    }
  ],
  detail:
    "Integrated visual root cause identification, inherent data aggregation specifically for storage system analysis, dedicated server graphs independent of their underlying operating system, and a smart, artificial intelligence based anomaly detection system in combination with the new dashboard that guides you from the automatic detection of an anomaly allow reduced size storage management teams to manage a large and very large number of storage systems with ease.",
  healthCheck:
    "The IOportal complementary Health Check Service helps identify slow creeping performance degradations and capacity constraints that are otherwise difficult to detect on a day-to-day basis. With a fixed document structure the customer gets a standard Health Check report that is discussed face-to-face including findings, conclusions and corrective action with the goal to fix any issue before the storage consumers are faced with performance degradations. The Health Check reports cover long term evolution of system workload, resource utilisation, performance (that is response times) and threshold excess. For the critical resources, like ports, crossbar or the VSP5x00 interconnect, dedicated reports help identify hotspots and recommendations allow to balance resource utilisation in order to achieve maximum scalability of the storage system. Thus, the IOportal Health Check service ensures long time stability and optimum performance giving customers the peace of mind to focus on their day-to-day business tasks.",
  quickStart: [
    { title: "Install", detail: "Install IOportal Agent." },
    { title: "Configure", detail: "Configure agent, firewall and Cloud Service." },
    { title: "Log In", detail: "Generate insights from day 1." }
  ],
  features: [
    "Cloud Service — Accessible from anywhere and any device",
    "Analytics — Integrated analytics functions",
    "Scalable — Manage very large number of storage systems from anywhere",
    "Easy to use — Rapid deployment and fast learning curve",
    "Versatile — Monitor Open and Mainframe systems",
    "Efficient — Increase infrastructure efficiency and reduce operational risk",
    "Made for Hitachi — Supports Hitachi block storage",
    "Proactive — Proactive Health Checks are available as an add-on service",
    "Open — REST API for integration with 3rd party systems"
  ],
  quotes: [
    {
      quote:
        "One of our central storage systems with 500 connected servers was hit by severe performance degradations threatening all connected servers and business critical applications. After several months of failed attempts at identifying the root cause and mitigating the impact by a countless series of unsuccessful hardware, firmware and software component upgrades, leaving a long trail of blood, sweat and tears behind, the data was eventually uploaded to the IOportal cloud service and the root cause could be identified within 30 mins, the involved server/database was shut down and the nightmare stopped immediately.",
      author: "Enterprise Storage Manager"
    },
    {
      quote:
        "Thanks to the IOportal we could work out a storage landscape refresh of our 300+ storage systems within a weekend. With the level of aggregation and the concise and meaningful graphs the IOportal offers it was minimum effort to work out the requirements in terms of capacity and performance and plan new storage infrastructure accordingly.",
      author: "Infrastructure Architect"
    }
  ],
  screenshots: [
    {
      title: "Anomaly Radar",
      description:
        "Upon entering the IOportal, find out easily whether one or more arrays experienced a performance anomaly during the previous day. Start your IOportal journey from this page and delve into further details on the following dashboard views.",
      image: "/assets/images/ioportal/dashboard-anomalies.png"
    },
    {
      title: "Array Details",
      description:
        "Get a deep analysis on all relevant KPIs during the past 3 months. Explore the most important aspects of each system, understand trends and slow creeping problems.",
      image: "/assets/images/ioportal/dashboard-array-details.png"
    },
    {
      title: "KPI Trends",
      description: "Get an overview of all storage arrays, their KPIs and the KPI evolution during the last 3 months.",
      image: "/assets/images/ioportal/dashboard-kpis.png"
    },
    {
      title: "Performance",
      description: "Get high-quality timeseries graphics of all important storage array metrics and resources, enhanced with rankings and worktime evaluations.",
      image: "/assets/images/ioportal/performance.png"
    },
    {
      title: "Array Comparison",
      description:
        "Compare all storage arrays with each other with respect to KPIs resource utilisation and capacity, using interactive graphics that allow the user to enable/disable dimensions and sorting order.",
      image: "/assets/images/ioportal/dashboard-comparison.png"
    },
    {
      title: "Benchmark",
      description:
        "Compare your systems with all other systems in the IOportal ecosystem during the previous day. This unique and anonymous real-world benchmark sheds light into how different customers use their Hitachi arrays in the field and how different machine types perform with respect to each other.",
      image: "/assets/images/ioportal/benchmark.png"
    },
    {
      title: "Capacity Overview",
      description: "Overview of all storage arrays and their pools.",
      image: "/assets/images/ioportal/capacity1.png"
    },
    {
      title: "Capacity Details",
      description: "Storage array details: listing of all pools, their key figures and capacity evolution.",
      image: "/assets/images/ioportal/capacity2.png"
    },
    {
      title: "Top 10 Servers",
      description: "Get an invaluable top10 server graphic computed on-the-fly according to the user-selected time range.",
      image: "/assets/images/ioportal/top10-servers.png"
    },
    {
      title: "Server Cluster Report",
      description: "Interactive server cluster report with cross-system correlation.",
      image: "/assets/images/ioportal/server_clusters.png"
    },
    {
      title: "Alarms",
      description: "Alarms home page: view alarms related to pool capacity, missing export/horcm data or expiring contracts.",
      image: "/assets/images/ioportal/alarms.png"
    }
  ]
};

export const posts = [
  {
    slug: "sam4h-webinar",
    title: "Get Up to Speed with SAM4H 2.4 - Join Our Webinar",
    date: "2025-11-13",
    heroImage: "/assets/images/blog/shutterstock_2509721977.jpg",
    summary:
      "The latest SAM4H 2.4 release is here, bringing exciting new capabilities that make managing and monitoring your infrastructure even more efficient. Join one of our two 30-minute webinars for highlights, improvements, and the roadmap ahead.",
    author: {
      name: "Georgios Psaltopoulos",
      role:
        "Georgios is the living incarnation of an infallible error detector with the perfect state of mind to create robust, error-free monitoring software. Besides maintaining the IOportal Health Check graphs and reports and the new V2 IOportal dashboard and anomaly radar, he manages the development of the peaq Service portal, which complements our tools to facilitate roll-out of new versions and administration of quotes and licenses.",
      image: "/assets/images/authors/GeorgiosPsaltopoulos.jpg"
    },
    content: [
      "The latest SAM4H 2.4 release is here, bringing exciting new capabilities that make managing and monitoring your infrastructure even more efficient. If you want a quick overview of the highlights, improvements, and what’s coming next, join one of our two identical 30-minute webinars.",
      "In this compact and informative session, our experts will present the core value proposition of SAM4H, walk you through the key updates in version 2.4, offer an exclusive glimpse at the roadmap ahead, and answer your questions live in an interactive Q&A.",
      "Choose the session that best fits your schedule and secure your spot today: Wednesday, 26.11.2025, 16:00–16:30 (CET) or Thursday, 27.11.2025, 9:30–10:00 (CET).",
      "Read more about the new release and see you in the webinar."
    ]
  },
  {
    slug: "sam4h-2-4-release",
    title: "SAM4H Release v2.4",
    date: "2025-11-03",
    heroImage: "/assets/images/blog/shutterstock_1390125509-lock_2000x1080.png",
    summary:
      "SAM4H version 2.4 marks a major leap forward in enterprise storage management, with over 100 improvements in automation, security, integration, and usability.",
    author: {
      name: "Philip Kurmann",
      role:
        "Developing software to manage storage infrastructure for business critical customer environments, that is easy to use and yet robust and error free, requires excellent knowledge in both software development and storage infrastructure. Philip possesses both in a unique way combined with the strive to deliver best-of-breed solutions that are fun to use.",
      image: "/assets/images/authors/PhilipKurmann.jpg"
    },
    content: [
      "SAM4H version 2.4 marks a major leap forward in enterprise storage management. Designed with direct input from administrators and presales engineers, this release brings over 100 improvements for automation, security, integration, and usability—enhancing control without sacrificing speed.",
      "Strengthened security includes a Four Eyes approval workflow with full auditability, SAML 2.0 single sign-on integration, and additional governance enhancements such as role-based API access and account lockout policies.",
      "Smarter, safer automation delivers automated HBA replacement, zero-downtime volume expansion for GAD and HUR, DRD to DRS migration, and advanced port management with validation workflows.",
      "Visibility and monitoring are improved with a Snapshot Policy Dashboard and enhanced replication and volume reports. Integrations now include HPE XP arrays and an expanded REST API for infrastructure-as-code workflows.",
      "The IOportal Agent Integration collects performance data from Hitachi block storage arrays and uploads it to the IOportal cloud service, creating a unified monitoring experience.",
      "SAM4H 2.4 also delivers UX improvements like responsive layouts, universal search, dark mode refinements, and full UI translations in English, German, French, Spanish, and Portuguese.",
      "Infrastructure upgrades introduce automatic service health checks, improved job scheduling, and faster time-based reporting. Upgrading from SAM4H 2.3 is straightforward with minimal downtime.",
      "SAM4H 2.4 is available now. Visit the peaq Service Portal to download the latest package."
    ]
  },
  {
    slug: "hitachi-exchange-2025",
    title: "peaq Powers Up Hitachi Exchange 2025 - Simplicity Meets Performance in Bonn",
    date: "2025-04-08",
    heroImage: "/assets/images/blog/hitachiexchange2025.jpg",
    summary:
      "peaq is proud to be a main sponsor of Hitachi Vantara Exchange 2025 in Bonn, featuring a session on SAM4H and modern storage automation.",
    author: {
      name: "Georgios Psaltopoulos",
      role:
        "Georgios is the living incarnation of an infallible error detector with the perfect state of mind to create robust, error-free monitoring software. Besides maintaining the IOportal Health Check graphs and reports and the new V2 IOportal dashboard and anomaly radar, he manages the development of the peaq Service portal, which complements our tools to facilitate roll-out of new versions and administration of quotes and licenses.",
      image: "/assets/images/authors/GeorgiosPsaltopoulos.jpg"
    },
    content: [
      "On July 2nd, 2025, the Kameha Grand Hotel in Bonn will host the Hitachi Vantara Exchange, a key event for IT professionals and industry leaders. This year, peaq is proud to be a main sponsor, highlighting its commitment to driving innovation and efficiency in enterprise IT.",
      "The Hitachi Vantara Exchange is a premier platform for exploring the latest in IT infrastructure, artificial intelligence, and sustainable digital strategies. The Partner Day on July 1st features networking, expert talks, and insights into the future of enterprise technology.",
      "A major highlight will be peaq’s session, “SAM4H – Maximum Performance, Minimal Complexity”, presented by Max Baumann, Head of Sales and Marketing at peaq. This talk will showcase how peaq’s SAM4H solution optimizes Hitachi storage management, delivering top performance while minimizing operational complexity.",
      "Key topics include simplifying onboarding and daily operations for Hitachi storage, real-world examples of efficiency gains and cost savings, and the impact of automation and user-friendly interfaces in IT management.",
      "Register now and secure your spot at the Hitachi Vantara Exchange Event 2025. Mark your calendar for July 2nd, 2025, and join peaq in Bonn for a day of learning, networking, and innovation."
    ]
  }
];

export const popularPosts = [
  { title: "Get Up to Speed with SAM4H...", date: "13 Nov 2025", href: "/blog/sam4h-webinar" },
  { title: "SAM4H Release v2.4", date: "03 Nov 2025", href: "/blog/sam4h-2-4-release" },
  { title: "peaq Powers Up Hitachi Exchange 2025...", date: "08 Apr 2025", href: "/blog/hitachi-exchange-2025" }
];
