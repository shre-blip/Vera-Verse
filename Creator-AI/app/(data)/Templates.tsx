export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },

  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammer and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "Depends on user codeDescription write a code and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Product Description ",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Summarization",
    desc: "Quickly generate concise, clear, and accurate summaries from any given content using advanced summarization tools.",
    icon: "https://cdn-icons-png.flaticon.com/128/684/684930.png",
    category: "Utility",

    slug: "summarization",
    aiPrompt:
      "Summarize the following content in a clear and concise manner. Keep the summary objective and easy to understand. Output should be returned in rich text editor format.",
    form: [
      {
        label: "Title or Subject (optional)",
        field: "input",
        name: "title",
        required: false,
      },
      {
        label: "Content to Summarize",
        field: "textarea",
        name: "content",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },

  {
    name: "Quizzes",
    desc: "Generate quizzes based on provided content or create custom quizzes for training and educational purposes.",
    icon: "https://cdn-icons-png.flaticon.com/128/5344/5344600.png",
    category: "Education",
    slug: "quizzes",
    aiPrompt:
      "Generate a quiz based on the following content. The quiz should contain multiple-choice questions and answers.",
    form: [
      {
        label: "Content for Quiz",
        field: "textarea",
        name: "content",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Scripts and Stories",
    desc: "Create engaging scripts and stories for various mediums like films, TV shows, and more.",
    icon: "https://cdn-icons-png.flaticon.com/128/7069/7069924.png",
    category: "Creative Writing",
    slug: "scripts-and-stories",
    aiPrompt:
      "Generate a short script or story based on the given genre and plot details.",
    form: [
      {
        label: "Story Genre",
        field: "input",
        name: "genre",
        required: true,
      },
      {
        label: "Plot Details",
        field: "textarea",
        name: "plot",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Essay",
    desc: "Generate structured essays based on provided topics, including introduction, body, and conclusion.",
    icon: "https://cdn-icons-png.flaticon.com/128/2275/2275561.png",
    category: "Academic Writing",
    slug: "essay",
    aiPrompt:
      "Generate a detailed essay on the given topic. The essay should have an introduction, body, and conclusion.",
    form: [
      {
        label: "Essay Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Key Points or Arguments",
        field: "textarea",
        name: "arguments",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Ads Copy",
    desc: "Create catchy and impactful advertisements for your business, products, or services to boost conversions.",
    icon: "https://cdn-icons-png.flaticon.com/128/5358/5358485.png",
    category: "Marketing",
    slug: "ads-copy",
    aiPrompt:
      "Generate a creative and persuasive advertisement copy based on the provided details.",
    form: [
      {
        label: "Product or Service Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Ad Goal or Target Audience",
        field: "textarea",
        name: "targetAudience",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Reviews",
    desc: "Generate compelling product reviews to help businesses attract potential customers through authentic feedback.",
    icon: "https://cdn-icons-png.flaticon.com/128/1365/1365358.png",
    category: "Marketing",
    slug: "reviews",
    aiPrompt:
      "Generate a review for the following product or service. The review should be honest, helpful, and persuasive.",
    form: [
      {
        label: "Product or Service Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Review Details",
        field: "textarea",
        name: "reviewDetails",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "News Article",
    desc: "Generate well-researched and engaging news articles that are relevant and impactful to your audience.",
    icon: "https://cdn-icons-png.flaticon.com/128/2540/2540832.png",
    category: "Content Creation",
    slug: "news-article",
    aiPrompt:
      "Write a detailed news article on the provided topic. Make sure the article is informative, well-structured, and up-to-date.",
    form: [
      {
        label: "Article Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Key Points or Details",
        field: "textarea",
        name: "details",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Social Media Post Captions",
    desc: "Generate attention-grabbing social media post captions to increase engagement and reach on platforms like Instagram, Twitter, and Facebook.",
    icon: "https://cdn-icons-png.flaticon.com/128/1968/1968666.png",
    category: "Social Media",
    slug: "social-media-post-captions",
    aiPrompt:
      "Generate an engaging social media post caption for the following content. Ensure it’s catchy, concise, and fits the platform's tone.",
    form: [
      {
        label: "Post Content/Idea",
        field: "textarea",
        name: "content",
        required: true,
      },
      {
        label: "Platform (optional)",
        field: "input",
        name: "platform",
        required: false,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Email Campaign",
    desc: "Generate highly engaging and personalized email campaigns to reach your audience effectively.",
    icon: "https://cdn-icons-png.flaticon.com/128/847/847835.png",
    category: "Marketing",
    slug: "email-campaign",
    aiPrompt:
      "Create a catchy email campaign subject and body content based on the provided outline. Make sure the tone is persuasive and engaging.",
    form: [
      {
        label: "Campaign Subject",
        field: "input",
        name: "subject",
        required: true,
      },
      {
        label: "Campaign Outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Reports",
    desc: "Generate professional and comprehensive reports based on data or research inputs.",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
    category: "Business",
    slug: "reports",
    aiPrompt:
      "Generate a detailed report based on the provided information. Organize it in sections, including an introduction, body, and conclusion.",
    form: [
      {
        label: "Report Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Report Data or Insights",
        field: "textarea",
        name: "data",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Study Material",
    desc: "Generate high-quality, structured study material for students, teachers, or anyone looking to learn.",
    icon: "https://cdn-icons-png.flaticon.com/512/801/801138.png",
    category: "Education",
    slug: "study-material",
    aiPrompt:
      "Generate study material for the given topic. Include definitions, examples, and explanations to help learners understand.",
    form: [
      {
        label: "Topic or Subject",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Key Points or Details",
        field: "textarea",
        name: "details",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  },
  {
    name: "Formal Document Formatter",
    desc: "Autoformat formal documents like applications, letters, and official communication in a professional layout.",
    icon: "https://cdn-icons-png.flaticon.com/512/9746/9746243.png",
    category: "Utility",
    slug: "formal-documents",
    aiPrompt:
      "Format the following formal document correctly with proper layout, tone, and structure based on the input type.",
    form: [
      {
        label: "Document Type (e.g., Application, Leave Letter)",
        field: "input",
        name: "docType",
        required: true,
      },
      {
        label: "Content/Details",
        field: "textarea",
        name: "details",
        required: true,
      },
      {
        label: "Advanced Option",
        field: "checkbox",
        name: "checkPlagiarism",
        required: false,
      },
    ],
  } ,
  {
    name: "Voice to Text",
    desc: "Convert spoken words into accurate written text for fast and easy content input.",
    icon: "https://cdn-icons-png.flaticon.com/512/8393/8393565.png",
    category: "Utility",
    slug: "voice-to-text",
    aiPrompt:
      "Convert the following audio input into written text. Ensure accuracy and natural formatting of spoken language.",
    form: [
     
    ],
  }
  
  
  
];
