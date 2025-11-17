export interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  description: string[]
  achievements?: string[]
  skills?: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  achievements?: string[]
  honors?: string[]
  description?: string
}

export interface Achievement {
  title: string
  description: string
  year?: string
  type: 'patent' | 'award' | 'recognition' | 'publication'
  link?: string
}

export interface Project {
  title: string
  description: string
  businessImpact?: string
  skills: string[]
}

export interface ProfileData {
  name: string
  title: string
  bio: string
  image: string
  email?: string
  phone?: string
  linkedin?: string
  github?: string
  website?: string
  location?: string
  objective?: string
  about?: string
  experiences: ExperienceItem[]
  education: EducationItem[]
  achievements: Achievement[]
  projects?: Project[]
  skills?: {
    core?: string[]
    ml?: string[]
    dataEngineering?: string[]
    infra?: string[]
    cloud?: string[]
    llm?: string[]
    databases?: string[]
    frameworks?: string[]
  }
  certifications?: string[]
  datagenie: {
    role: string
    description: string
    contributions: string[]
    mission?: string
  }
}

export const profileData: ProfileData = {
  name: 'Ashish K',
  title: 'Data Scientist | Founding Engineer at DataGenie',
  bio: 'I\'m a builder at heart—driven by curiosity, fueled by challenges, and obsessed with turning ideas into impact. For me, growth has always been less about titles and more about trajectory. That\'s why I chose the path where I could get my hands dirty, own the outcomes, and learn every part of the game—not just the code.\n\nBig tech taught me scale. Startups are teaching me speed. And every day, I\'m building toward the future I want to create.',
  about: 'I\'m a passionate data scientist and engineer who genuinely loves what I do. There\'s something magical about turning complex problems into elegant code solutions, and I find joy in every debugging session and every "aha!" moment when a system finally clicks. When I\'m not coding, you\'ll find me on the badminton court perfecting my serve, hiking through trails to clear my mind, or diving into hackathons where I can build something cool in 48 hours. I have a particular obsession with automating repetitive tasks - if I have to do something more than twice, you bet I\'m writing a script for it! Life\'s too short for manual work when code can do it better. I bring this same energy and enthusiasm to every project, whether it\'s building analytics systems at DataGenie or contributing to open-source projects. At the end of the day, I\'m just a guy who loves solving problems, writing clean code, and having fun while doing it.',
  image: '/images/ashish.jpg',
  email: 'ashish.kumaraswamy@outlook.com',
  phone: '+91-88709-33696',
  linkedin: 'https://www.linkedin.com/in/ashish-kumaraswamy/',
  github: 'https://github.com/Ashishkumaraswamy',
  location: 'Coimbatore, Tamil Nadu',
  objective: 'Data Scientist with hands-on experience in analytics systems, LLM interfaces, and scalable data pipelines. Seeking roles to build impactful ML systems end-to-end.',
  experiences: [
    {
      company: 'DataGenie',
      role: 'Data Scientist (Founding Engineer)',
      period: 'Jan 2024 – Present',
      location: 'Coimbatore, Tamil Nadu',
      description: [
        'Engineered a low-latency analytics layer using FastAPI + MongoDB with rollups, exclusions & complex filters; improved retrieval speed by 70%. Designed and implemented a sophisticated data aggregation system that pre-computes metrics at multiple granularities (hourly, daily, weekly) to enable sub-second query responses. The system handles complex filtering logic including multi-dimensional exclusions, time-range queries, and custom metric calculations. Implemented intelligent caching strategies and optimized MongoDB indexes to reduce query latency from 2-3 seconds to under 500ms, directly improving user experience and enabling real-time analytics dashboards.',
        'Built modular ETL pipelines in Airflow + Databricks processing 10M+ records/day, enabling dynamic metric layer transformations. Architected a scalable data processing framework that transforms raw event data into business-ready metrics. The pipeline architecture supports incremental processing, error handling, and data quality checks at each stage. Implemented dynamic metric definitions that allow business users to define custom metrics without code changes, significantly reducing time-to-insight from weeks to hours. The system processes terabytes of data daily while maintaining 99.9% uptime and handles schema evolution gracefully.',
        'Developed an LLM-based analytics chat interface using RAG + MCP, improving user-driven reporting coverage by 60%. Created an innovative natural language interface that allows users to query analytics data using conversational language. The system uses Retrieval-Augmented Generation (RAG) to pull relevant context from data documentation and historical queries, combined with Model Context Protocol (MCP) for structured data access. Users can now ask questions like "What was our revenue last quarter?" and receive accurate, formatted responses with supporting visualizations. This democratized data access, reducing dependency on data analysts for routine queries and enabling faster decision-making across the organization.'
      ],
      achievements: [
        '70% improvement in retrieval speed',
        'Processing 10M+ records/day',
        '60% improvement in reporting coverage'
      ],
      skills: ['Python', 'FastAPI', 'MongoDB', 'Apache Airflow', 'Databricks', 'LangChain', 'RAG', 'MCP']
    },
    {
      company: 'PayPal India',
      role: 'Data Analyst Intern',
      period: 'May 2023 – Jul 2023',
      location: 'India',
      description: [
        'Contributed to RARIM, a Rule-Agnostic Reject Inferencing method for credit decisions (patent filed). Worked as part of a research team to develop a novel machine learning approach that infers creditworthiness from rejected loan applications. The method addresses a critical limitation in credit risk modeling where traditional systems lack data on rejected applicants. I contributed to feature engineering, model architecture design, and validation framework development. The RARIM method uses advanced statistical techniques to learn patterns from approved applications and infer characteristics of rejected ones, potentially expanding credit access to underserved populations. The patent application represents a significant advancement in financial inclusion technology.',
        'Built and evaluated LightGBM-based fraud detection models for credit products. Developed and deployed machine learning models to identify fraudulent credit card transactions and loan applications in real-time. Engineered features from transaction patterns, user behavior, and historical data to improve model accuracy. Implemented model monitoring and retraining pipelines to maintain performance as fraud patterns evolved. The models achieved 95%+ precision in fraud detection while maintaining low false positive rates, directly protecting millions of dollars in potential losses. Collaborated with risk management teams to integrate model predictions into decision workflows, balancing fraud prevention with customer experience.'
      ],
      achievements: [
        'Patent filed for RARIM method',
        'Built fraud detection models'
      ],
      skills: ['Python', 'LightGBM', 'Credit Risk Modeling']
    },
    {
      company: 'Goldman Sachs',
      role: 'Software Developer Intern',
      period: 'Jun 2022 – Nov 2022',
      location: 'India',
      description: [
        'Built an OCR-driven CRM automation tool using Java + ReactJS + Python, reducing manual review workload by 80%. Developed a comprehensive document processing system that automatically extracts and structures information from various document formats (PDFs, images, scanned documents) using Optical Character Recognition (OCR) technology. The system integrates with the CRM to automatically populate client records, reducing manual data entry time from hours to minutes per client. Implemented intelligent document classification, data validation, and exception handling workflows. The ReactJS frontend provides an intuitive interface for reviewing and correcting extracted data, while the Java backend handles heavy processing tasks. This automation enabled the team to process 5x more client documents with the same resources, directly improving operational efficiency.',
        'Automated research summary deck generation using AWS Lambda, cutting reporting time by 60%. Created an automated pipeline that aggregates data from multiple sources (market databases, news feeds, financial APIs) and generates comprehensive research summary presentations. The system uses AWS Lambda for serverless execution, triggered by scheduled events or manual requests. Implemented natural language generation to create executive summaries, data visualization generation for charts and graphs, and automated formatting to match company templates. The solution reduced the time required to create research decks from 4-6 hours to under 2 hours, allowing analysts to focus on high-value research activities. The system processes data from 50+ sources and generates 100+ slides automatically, ensuring consistency and accuracy across all reports.'
      ],
      achievements: [
        '80% reduction in manual workload',
        '60% reduction in reporting time'
      ],
      skills: ['Java', 'Python', 'ReactJS', 'AWS Lambda', 'Automation']
    }
  ],
  education: [
    {
      institution: 'PSG College of Technology, Coimbatore',
      degree: 'Integrated M.Sc. in Data Science',
      period: '2019–2024',
      achievements: [
        'CGPA: 9.5 / 10',
        'Gold Medalist',
        'Best Outgoing Student'
      ],
      description: 'Completed an intensive 5-year integrated program in Data Science, combining rigorous mathematical foundations with hands-on experience in machine learning, statistical analysis, and data engineering. The curriculum covered advanced topics including deep learning, natural language processing, big data technologies, and cloud computing. Throughout the program, I worked on numerous projects applying data science principles to real-world problems, from building predictive models to developing end-to-end data pipelines. The program emphasized both theoretical understanding and practical implementation, preparing me for the challenges of building production-grade ML systems.'
    },
    {
      institution: 'National Model, Coimbatore',
      degree: 'High School',
      period: '2004-2019',
      achievements: [
        '10th std - 498/500',
        '12th std - 563/600',
        'State Level 2nd and National Level 5th in yoga competition',
        'School team vice captain and captain'
      ],
      description: 'Completed high school education with strong academic performance across both 10th and 12th standard board examinations. Beyond academics, I was actively involved in sports and leadership roles, serving as vice captain and captain of the school team. My participation in yoga competitions at state and national levels taught me discipline, focus, and the importance of maintaining physical and mental well-being alongside academic pursuits. These formative years instilled in me a strong work ethic, time management skills, and the ability to balance multiple responsibilities—qualities that continue to serve me well in my professional journey.'
    }
  ],
  achievements: [
    {
      title: 'IntersectX – Agno Hackathon Winner',
      description: 'Developed an AI-powered platform that revolutionizes the investor-startup connection process. The system uses advanced LLM capabilities via Perplexity Sonar APIs to automatically generate comprehensive, investor-grade memos from pitch decks, saving VCs hours of manual analysis. The platform also performs intelligent VC-startup matchmaking based on investment thesis, stage preferences, and industry focus. This solution addresses a critical pain point in the venture capital ecosystem, where time-constrained investors struggle to efficiently evaluate numerous opportunities. The platform has the potential to increase deal flow efficiency by 70% and help startups find the right investors faster.',
      year: '2024',
      type: 'award',
      link: 'https://github.com/global-agent-hackathon/global-agent-hackathon-may-2025/pull/126'
    },
    {
      title: 'CodeForHer – Locus Hackathon Winner',
      description: 'Created an AI-powered women safety companion application called "Guardian Agents" that provides real-time risk assessment and intelligent route planning. The system analyzes multiple data points including time of day, location safety scores, traffic patterns, and historical incident data to calculate risk scores for different routes. Users receive personalized recommendations for the safest path to their destination, along with emergency contact features and real-time alerts. Built using Agentic AI frameworks, the app acts like a protective presence on every journey. The application addresses the critical need for accessible safety solutions, particularly in urban environments. With the potential to reach millions of users, this technology can significantly contribute to women\'s safety and empowerment, making cities more navigable and secure.',
      year: '2024',
      type: 'award',
      link: 'https://www.hindustantimes.com/genesis/safer-roads-by-code-india-s-next-gen-hack-transforming-safety-101750678135616.html'
    },
    {
      title: 'RARIM Patent Filed',
      description: 'Co-invented a Rule-Agnostic Reject Inferencing Method (RARIM) for credit decision-making at PayPal. This innovative approach addresses a fundamental challenge in credit risk assessment where traditional rule-based systems often reject qualified applicants. RARIM uses advanced machine learning techniques to infer creditworthiness from rejected applications, potentially expanding credit access to underserved populations while maintaining risk management standards. The patent represents a significant advancement in financial inclusion technology and has the potential to impact millions of credit decisions, improving access to financial services globally.',
      year: '2023',
      type: 'patent'
    }
  ],
  projects: [
    {
      title: 'DoodleDraw (CNN Game)',
      description: 'Developed an interactive drawing classification game that uses convolutional neural networks to recognize user-drawn sketches in real-time. The application provides an engaging way for users to test their drawing skills while the AI attempts to identify their sketches. Built with a robust Django backend that handles model inference and game state management, the platform achieved high user engagement with an average session duration of 15+ minutes. The CNN model was trained on a diverse dataset and achieved 85%+ accuracy across multiple sketch categories, demonstrating the practical application of deep learning in entertainment technology.',
      businessImpact: 'Created an engaging educational tool that demonstrates AI capabilities to non-technical users, potentially serving as a proof-of-concept for AI-powered interactive applications.',
      skills: ['Python', 'Django', 'TensorFlow', 'CNN', 'OpenCV', 'JavaScript', 'HTML/CSS']
    },
    {
      title: 'Activity Monitor (LSTM)',
      description: 'Built a comprehensive mobile activity detection system that uses LSTM neural networks to classify physical activities from smartphone sensor data. The application processes accelerometer and gyroscope readings in real-time to identify activities such as walking, running, cycling, and stationary states. The system was deployed as a React Native mobile app with a Flask backend API, enabling seamless data collection and activity tracking. The LSTM model achieved 92% accuracy in activity classification, providing users with accurate fitness tracking without requiring additional wearable devices. The solution addresses the growing demand for accessible health monitoring tools.',
      businessImpact: 'Provides a cost-effective alternative to expensive fitness trackers, making health monitoring accessible to a broader user base. The technology can be integrated into existing health apps to enhance user engagement and provide valuable insights.',
      skills: ['Flask', 'LSTM', 'TensorFlow', 'React Native', 'Sensor Data Processing', 'REST API']
    }
  ],
  skills: {
    core: ['Python 3.11+', 'SQL', 'JavaScript', 'TypeScript'],
    ml: ['Scikit-learn', 'TensorFlow 2.x', 'PyTorch', 'LightGBM', 'XGBoost', 'Time Series Analysis', 'Anomaly Detection'],
    dataEngineering: ['Apache Airflow 2.8+', 'Apache Spark 3.5+', 'Spark Big Data', 'Databricks', 'Pandas', 'NumPy'],
    infra: ['Kubernetes', 'Docker', 'Git', 'CI/CD'],
    cloud: ['Azure', 'AWS'],
    llm: ['LangChain', 'LangGraph', 'MCP (Model Context Protocol)', 'OpenAI API', 'Anthropic Claude API', 'Agentic AI', 'Agno', 'Memory Providers', 'Vector Databases', 'RAG', 'LLM Orchestration'],
    databases: ['MongoDB', 'PostgreSQL', 'Redis'],
    frameworks: ['FastAPI', 'Django', 'Flask', 'React', 'Next.js']
  },
  certifications: [
    'Google Cloud: Preparing for Data Engineer Certification',
    'Applied Data Science with Python – University of Michigan',
    'Neural Networks and Deep Learning – deeplearning.ai'
  ],
  datagenie: {
    role: 'Founding Engineer',
    description: 'DataGenie is a cutting-edge data analytics platform that empowers businesses to make data-driven decisions. As a founding engineer, I played a pivotal role in building the core infrastructure and product from the ground up.',
    mission: 'To democratize data analytics and make advanced insights accessible to businesses of all sizes.',
    contributions: [
      'Engineered low-latency analytics layer with 70% speed improvement',
      'Built ETL pipelines processing 10M+ records/day',
      'Developed LLM-based analytics chat interface with RAG + MCP',
      'Established engineering best practices and coding standards',
      'Collaborated with founders on product strategy and technical roadmap'
    ]
  }
}

