const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Portfolio Knowledge Base with full resume data
const portfolioData = {
  experience: {
    idrive: {
      company: "iDrive",
      role: "AI Engineer",
      timeline: "March 2025 - Present",
      location: "Los Angeles, California, USA",
      technologies: "Python, PyTorch, OpenCV, LLM, FastAPI",
      highlights: [
        "Collaborated on mimicking Comma.ai's perception and planning stack using open datasets and vision-based lane detection models integrated with LLM-based driver assistance.",
        "Developed real-time pipelines for camera-based drivable area segmentation and object detection, optimizing performance for in-vehicle deployment.",
        "Contributed to interactive driving assistance features by integrating LLMs to reason about road geometry, object context, and route planning."
      ]
    },
    nexquared: {
      company: "Nexquared",
      role: "Founder and AI Engineer",
      timeline: "Sep 2024 - Present",
      location: "Los Angeles, USA",
      technologies: "Python, PostgreSQL, Ollama, LLMs",
      highlights: [
        "Launched a job-matching platform that uses LLMs to extract skills, visa, and clearance data from job descriptions and match candidates in near real-time.",
        "Built and deployed a multi-threaded metadata extractor and skill matcher using Ollama on consumer GPUs, processing 10,000+ job postings per day.",
        "Implemented a PostgreSQL backend with full audit tracking and candidate scoring logic, enabling scalable client-side usage with React/Next.js frontend."
      ]
    },
    ub: {
      company: "University at Buffalo",
      role: "Research Assistant",
      timeline: "August 2023 - December 2024",
      location: "New York, USA",
      technologies: "Python, C++, PyTorch, HuggingFace",
      highlights: [
        "Designed a new approach using deep cross-attention frameworks that strengthened connections between images and text formats, resulting in 10% improvement in model.",
        "Developed a multi-modal architecture for Visual Question Answering (VQA) by integrating self-attention and guided attention mechanisms, leading to a 7% improvement in answer accuracy.",
        "Integrated LiDAR and GPS data into the Autoware pipeline, optimizing vehicle localization by increasing precision by 12% and reducing drift error for NDT scan matcher."
      ]
    },
    tcs: {
      company: "Tata Insights and Quants",
      role: "Deep Learning, Assistant Manager",
      timeline: "June 2021 - August 2023",
      location: "Bangalore, India",
      technologies: "Python, PyTorch, OpenCV, HuggingFace, AWS",
      highlights: [
        "Innovated real-time license plate detection technology that processed up to 20 vehicles per hour while maintaining a consistent accuracy level above 90%.",
        "Launched a YOLOv8 model to enhance safety protocols on construction sites, achieving 98% accuracy in identifying individuals wearing protective equipment.",
        "Optimized workflow efficiency by deploying a two-stage detection and classification pipeline for the recognition of handwritten text on metal slabs, processing 1K slabs per hour.",
        "Engineered a real-time surveillance solution to identify graffiti on walls while capturing the identity of individuals; enhanced community safety protocols increased detection accuracy by 10%.",
        "Generated synthetic datasets for enhancing automatic number plate recognition and detecting instances of littering on roadways, using advanced image processing techniques, resulting in a 15% improvement in detection accuracy.",
        "Cultivated talent among a cohort exceeding 15 interns over two years; guided innovative design processes leading to substantial advancements in computer vision solutions."
      ]
    },
    fluxauto: {
      company: "Flux Auto",
      role: "Deep Learning Engineer",
      timeline: "June 2019 - June 2021",
      location: "Bangalore, India",
      technologies: "Python, C++, PyTorch, TensorFlow, CUDA, ROS",
      highlights: [
        "Designed, trained, optimized, and tested object detector ConvNet for autonomous driving perception stack inspired by YoloV3 on the Berkeley Deep-Drive dataset and improved original YoloV3 MAP@75 at 38%.",
        "Built a novel architecture that can simultaneously detect objects and segments using a single backbone, reducing the computational complexity and memory requirements by 50%.",
        "Created tools for corrective data sourcing and training pipeline for handling edge cases for object detection which improved the model performance and reduced the false positives by 25%.",
        "Maximized prediction efficiency by integrating camera and radar data streams, resulting in accurate trajectory forecasts for neighboring vehicles near the ego vehicle with 75% reliability.",
        "Enhanced performance of the Yolov3 model through optimization using the TensorRT library, resulting in a significant increase in fps and deployed on the Jetson AGX platform.",
        "Conducted a thorough performance assessment of various Deep Learning frameworks by employing Convolutional Neural Networks (CNN) on diverse Nvidia GPU architectures."
      ]
    }
  },
  skills: {
    "Programming Languages": ["Python", "C++", "SQL"],
    "Deep Learning & AI": ["PyTorch", "TensorFlow", "Keras", "HuggingFace", "Transformers", "LLM", "AI", "ML"],
    "Computer Vision": ["OpenCV", "TensorRT"],
    "Data & Analytics": ["Pandas", "PySpark", "NLTK", "NLP"],
    "DevOps & Cloud": ["Docker", "AWS", "GCP", "CI/CD", "MLOps"],
    "Tools & Frameworks": ["Git", "Kafka", "FastAPI"]
  },
  projects: {
    academic: [
      {
        title: "Enhanced Latent Diffusion (GANs)",
        description: "Enhanced Latent Diffusion model performance by training the text encoder on enriched contextual data, significantly improving Image generation."
      },
      {
        title: "Path Planning Algorithms",
        description: "Developed and implemented RRT and A* algorithms, reducing path planning computation time by 25% and improving route efficiency in autonomous simulations."
      },
      {
        title: "Gap Follow & Localization",
        description: "Enhanced vehicle path-following and obstacle avoidance strategies by applying Pure Pursuit and Gap Follow methods, achieving a 20% increase in navigation accuracy and enabling safe autonomous operation in dynamic environments."
      },
      {
        title: "Localization and Planning",
        description: "Leveraged AMCL localization algorithm to improve pose estimation accuracy by 30% in simulation, crucial for enhancing vehicle stability and control in real-time navigation."
      }
    ]
  },
  education: {
    masters: "Masters in Robotics, State University of New York at Buffalo, USA (August 2023 - December 2024)",
    bachelors: "Bachelor of Technology in Electronics & Communication Engineering, Indian Institute of Information Technology, Guwahati (August 2015 - May 2019)"
  },
  publications: [
    "Daniel Vadranapu, \"An Old Dog with New Tricks: Lessons from Building an AV Testbed with Autoware\", IEEE Intelligent Vehicles Symposium (MOST), 2025.",
    "Daniel Vadranapu, \"MEDVLAT: A Novel Vision Language Attention Transformer for Medical Visual Question Answering in Clinical Decision Support Systems\", under review at Image and Vision Computing (IVC), Elsevier."
  ],
  summary: "AI Engineer with 6+ years of experience developing multimodal systems, fine-tuning LLMs, and deploying deep learning models in production. Specializing in parameter-efficient training, generative AI, and real-time vision pipelines."
};

// GPT Integration (primary response system)
async function generateGPTResponse(userMessage) {
  // Check if OpenAI API key is available
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
    return generateFallbackResponse(userMessage);
  }

  // Handle contact queries with fallback system for better reliability
  const message = userMessage.toLowerCase();
  if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('connect') || message.includes('linkedin') || message.includes('phone') || message.includes('social') || message.includes('daniel')) {
    return generateFallbackResponse(userMessage);
  }

  try {
    const OpenAI = require('openai');
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const systemPrompt = `You are Daniel Vadranapu's AI assistant. You have access to his complete professional information and should provide exact, specific answers based on his resume data.

IMPORTANT: Always provide exact, specific information from Daniel's resume. Don't give generic responses - give precise details, exact contact information, specific numbers, percentages, and technologies. When someone asks for contact information, LinkedIn, email, or phone number, provide the exact details from Daniel's resume.

CONTACT INFORMATION: When asked for contact details, provide these exact details with clickable links in this format:
<div style="font-family: Arial, sans-serif; line-height: 1.8;">
  <h3 style="color: #667eea; margin-bottom: 20px; text-align: center;">Daniel's Contact Information</h3>
  
  <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
    <strong style="color: #333;">Email:</strong><br>
    <a href="mailto:daniel.vadranapu@gmail.com" style="color: #667eea; text-decoration: none; font-weight: 500;">daniel.vadranapu@gmail.com</a>
  </div>
  
  <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
    <strong style="color: #333;">LinkedIn:</strong><br>
    <a href="https://www.linkedin.com/in/daniel-vadranapu/" target="_blank" style="color: #667eea; text-decoration: none; font-weight: 500;">https://www.linkedin.com/in/daniel-vadranapu/</a>
  </div>
  
  <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
    <strong style="color: #333;">Phone:</strong><br>
    <a href="tel:+17163484581" style="color: #667eea; text-decoration: none; font-weight: 500;">+1 716-3484581</a>
  </div>
  
  <div style="margin-bottom: 20px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
    <strong style="color: #333;">GitHub:</strong><br>
    <a href="https://github.com/danielvadranapuUB" target="_blank" style="color: #667eea; text-decoration: none; font-weight: 500;">https://github.com/danielvadranapuUB</a>
  </div>
  
  <p style="color: #666; font-style: italic; text-align: center; margin-top: 20px; padding: 15px; background: rgba(102, 126, 234, 0.05); border-radius: 8px;">
    Daniel is available for professional inquiries, AI project discussions, research collaborations, and opportunities in computer vision and autonomous systems.
  </p>
</div>

RESPONSE FORMATTING: Always format your responses with clear structure:
- Use HTML div containers with proper styling
- Include line breaks (<br>) for better readability
- Use bullet points and lists for multiple items
- Add proper spacing and margins
- Use color coding for headers and important information
- Make contact information clearly clickable with proper styling
- DO NOT use any emojis in your responses - keep them professional and clean
- DO NOT use markdown bold formatting (asterisks) - use plain text only
- Use HTML <strong> tags for emphasis when needed, not markdown
- NEVER use ** or * for formatting - only use plain text

RESUME DATA:
${JSON.stringify(portfolioData, null, 2)}

INSTRUCTIONS:
- Always provide exact, specific information from the resume data
- Include specific numbers, percentages, and technologies when relevant
- Use bullet points and lists for better readability
- Give actionable, precise details
- Handle any type of question about experience, skills, projects, etc.
- For contact queries, provide clickable links in HTML format with proper styling
- Format all responses with clear line breaks and structure
- Be conversational but professional
- DO NOT use any emojis in your responses
- DO NOT use markdown bold formatting (asterisks) - use plain text
- NEVER use ** or * for formatting - only use plain text
- Don't be overly cautious about sharing professional contact information`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    // Post-process the response to remove any remaining markdown formatting
    let processedResponse = response.choices[0].message.content;
    
    // Remove markdown bold formatting
    processedResponse = processedResponse.replace(/\*\*(.*?)\*\*/g, '$1');
    
    // Remove single asterisks
    processedResponse = processedResponse.replace(/\*(.*?)\*/g, '$1');

    return processedResponse;
  } catch (error) {
    console.error('GPT API error:', error);
    return generateFallbackResponse(userMessage);
  }
}

// Fallback response system (simplified - only used when GPT fails)
function generateFallbackResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Contact queries - provide exact information with clickable links
  if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('connect') || message.includes('linkedin') || message.includes('phone') || message.includes('social') || (message.includes('daniel') && message.includes('contact'))) {
    return `<div style="font-family: Arial, sans-serif; line-height: 1.8;">
      <h3 style="color: #667eea; margin-bottom: 20px; text-align: center;">Daniel's Contact Information</h3>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong style="color: #333;">Email:</strong><br>
        <a href="mailto:daniel.vadranapu@gmail.com" style="color: #667eea; text-decoration: none; font-weight: 500;">daniel.vadranapu@gmail.com</a>
      </div>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong style="color: #333;">LinkedIn:</strong><br>
        <a href="https://www.linkedin.com/in/daniel-vadranapu/" target="_blank" style="color: #667eea; text-decoration: none; font-weight: 500;">https://www.linkedin.com/in/daniel-vadranapu/</a>
      </div>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong style="color: #333;">Phone:</strong><br>
        <a href="tel:+17163484581" style="color: #667eea; text-decoration: none; font-weight: 500;">+1 716-3484581</a>
      </div>
      
      <div style="margin-bottom: 20px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong style="color: #333;">GitHub:</strong><br>
        <a href="https://github.com/danielvadranapuUB" target="_blank" style="color: #667eea; text-decoration: none; font-weight: 500;">https://github.com/danielvadranapuUB</a>
      </div>
      
      <p style="color: #666; font-style: italic; text-align: center; margin-top: 20px; padding: 15px; background: rgba(102, 126, 234, 0.05); border-radius: 8px;">
        Daniel is available for professional inquiries, AI project discussions, research collaborations, and opportunities in computer vision and autonomous systems.
      </p>
    </div>`;
  }
  
  // Experience queries - provide specific details
  if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('career')) {
    if (message.includes('idrive') || message.includes('current') || message.includes('present')) {
      return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h3 style="color: #667eea; margin-bottom: 15px;">iDrive - AI Engineer</h3>
        <p style="color: #666; margin-bottom: 15px;"><strong>Timeline:</strong> March 2025 - Present</p>
        <p style="color: #666; margin-bottom: 15px;"><strong>Location:</strong> Los Angeles, California, USA</p>
        
        <h4 style="color: #333; margin: 20px 0 10px 0;">Key Contributions:</h4>
        <ul style="margin-left: 20px; color: #333;">
          <li style="margin-bottom: 8px;">Collaborated on mimicking Comma.ai's perception and planning stack using open datasets and vision-based lane detection models integrated with LLM-based driver assistance</li>
          <li style="margin-bottom: 8px;">Developed real-time pipelines for camera-based drivable area segmentation and object detection, optimizing performance for in-vehicle deployment</li>
          <li style="margin-bottom: 8px;">Contributed to interactive driving assistance features by integrating LLMs to reason about road geometry, object context, and route planning</li>
        </ul>
        
        <p style="margin-top: 15px;"><strong>Technologies:</strong> Python, PyTorch, OpenCV, LLM, FastAPI</p>
      </div>`;
    }
    if (message.includes('nexquared') || message.includes('nex')) {
      return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h3 style="color: #667eea; margin-bottom: 15px;">Nexquared - Founder and AI Engineer</h3>
        <p style="color: #666; margin-bottom: 15px;"><strong>Timeline:</strong> Sep 2024 - Present</p>
        <p style="color: #666; margin-bottom: 15px;"><strong>Location:</strong> Los Angeles, USA</p>
        
        <h4 style="color: #333; margin: 20px 0 10px 0;">Key Contributions:</h4>
        <ul style="margin-left: 20px; color: #333;">
          <li style="margin-bottom: 8px;">Launched a job-matching platform that uses LLMs to extract skills, visa, and clearance data from job descriptions and match candidates in near real-time</li>
          <li style="margin-bottom: 8px;">Built and deployed a multi-threaded metadata extractor and skill matcher using Ollama on consumer GPUs, processing 10,000+ job postings per day</li>
          <li style="margin-bottom: 8px;">Implemented a PostgreSQL backend with full audit tracking and candidate scoring logic, enabling scalable client-side usage with React/Next.js frontend</li>
        </ul>
        
        <p style="margin-top: 15px;"><strong>Technologies:</strong> Python, PostgreSQL, Ollama, LLMs</p>
      </div>`;
    }
    return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h3 style="color: #667eea; margin-bottom: 15px;">Professional Experience</h3>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong>iDrive</strong> (March 2025 - Present)<br>
        <span style="color: #666;">AI Engineer in Los Angeles, CA</span><br>
        <span style="color: #666;">Working on autonomous vehicle perception and computer vision systems</span>
      </div>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong>Nexquared</strong> (Sep 2024 - Present)<br>
        <span style="color: #666;">Founder and AI Engineer in Los Angeles, USA</span><br>
        <span style="color: #666;">Developing AI solutions and job-matching platforms</span>
      </div>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong>University at Buffalo</strong> (August 2023 - December 2024)<br>
        <span style="color: #666;">Research Assistant in New York, USA</span><br>
        <span style="color: #666;">Academic research in AI and robotics</span>
      </div>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong>Tata Insights and Quants</strong> (June 2021 - August 2023)<br>
        <span style="color: #666;">Deep Learning Assistant Manager in Bangalore, India</span><br>
        <span style="color: #666;">Computer vision and data science</span>
      </div>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong>Flux Auto</strong> (June 2019 - June 2021)<br>
        <span style="color: #666;">Deep Learning Engineer in Bangalore, India</span><br>
        <span style="color: #666;">Autonomous vehicle technology</span>
      </div>
      
      <p style="color: #666; font-style: italic; text-align: center; margin-top: 15px;">
        Which company would you like to know more about?
      </p>
    </div>`;
  }
  
  // Skills queries
  if (message.includes('skill') || message.includes('technology') || message.includes('framework') || message.includes('expertise')) {
    if (message.includes('vision') || message.includes('computer vision') || message.includes('opencv')) {
      return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h3 style="color: #667eea; margin-bottom: 15px;">Computer Vision Expertise</h3>
        
        <h4 style="color: #333; margin: 15px 0 10px 0;">Technologies:</h4>
        <ul style="margin-left: 20px; color: #333;">
          <li style="margin-bottom: 8px;">OpenCV</li>
          <li style="margin-bottom: 8px;">TensorRT</li>
        </ul>
        
        <h4 style="color: #333; margin: 15px 0 10px 0;">Experience:</h4>
        <ul style="margin-left: 20px; color: #333;">
          <li style="margin-bottom: 8px;">Extensive work with OpenCV, TensorRT, and YOLO for autonomous vehicle applications</li>
          <li style="margin-bottom: 8px;">Specialize in real-time object detection and tracking systems</li>
          <li style="margin-bottom: 8px;">Developed computer vision models for autonomous driving perception</li>
        </ul>
      </div>`;
    }
    if (message.includes('deep learning') || message.includes('ai') || message.includes('ml') || message.includes('neural')) {
      return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h3 style="color: #667eea; margin-bottom: 15px;">Deep Learning & AI Skills</h3>
        
        <h4 style="color: #333; margin: 15px 0 10px 0;">Technologies:</h4>
        <ul style="margin-left: 20px; color: #333;">
          <li style="margin-bottom: 8px;">PyTorch</li>
          <li style="margin-bottom: 8px;">TensorFlow</li>
          <li style="margin-bottom: 8px;">Keras</li>
          <li style="margin-bottom: 8px;">HuggingFace</li>
          <li style="margin-bottom: 8px;">Transformers</li>
          <li style="margin-bottom: 8px;">LLM</li>
        </ul>
        
        <h4 style="color: #333; margin: 15px 0 10px 0;">Expertise:</h4>
        <ul style="margin-left: 20px; color: #333;">
          <li style="margin-bottom: 8px;">Specialize in PyTorch, transformers, and large language models</li>
          <li style="margin-bottom: 8px;">Worked on computer vision models, NLP systems, and generative AI applications</li>
          <li style="margin-bottom: 8px;">Experience with parameter-efficient training and real-time AI systems</li>
        </ul>
      </div>`;
    }
    return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h3 style="color: #667eea; margin-bottom: 15px;">Technical Skills</h3>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong>Programming Languages:</strong><br>
        <span style="color: #333;">Python, C++, SQL</span>
      </div>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong>Deep Learning & AI:</strong><br>
        <span style="color: #333;">PyTorch, TensorFlow, Keras, HuggingFace, Transformers, LLM, AI, ML</span>
      </div>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong>Computer Vision:</strong><br>
        <span style="color: #333;">OpenCV, TensorRT</span>
      </div>
      
      <div style="margin-bottom: 15px; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
        <strong>Cloud & Deployment:</strong><br>
        <span style="color: #333;">Docker, AWS, GCP, CI/CD, MLOps</span>
      </div>
      
      <p style="color: #666; font-style: italic; text-align: center; margin-top: 15px;">
        What specific area would you like to know more about?
      </p>
    </div>`;
  }
  
  // General fallback - direct users to ask specific questions
  return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h3 style="color: #667eea; margin-bottom: 15px;">How Can I Help?</h3>
    
    <p style="color: #333; margin-bottom: 15px;">I can help you learn about Daniel's experience, skills, projects, education, and contact information.</p>
    
    <h4 style="color: #333; margin: 15px 0 10px 0;">Try asking specific questions like:</h4>
    <ul style="margin-left: 20px; color: #333;">
      <li style="margin-bottom: 8px;">"Tell me about Daniel's work at iDrive"</li>
      <li style="margin-bottom: 8px;">"What are Daniel's computer vision skills?"</li>
      <li style="margin-bottom: 8px;">"Share Daniel's contact information"</li>
      <li style="margin-bottom: 8px;">"What projects has Daniel worked on?"</li>
      <li style="margin-bottom: 8px;">"Tell me about Daniel's education"</li>
    </ul>
    
    <p style="color: #666; font-style: italic; text-align: center; margin-top: 15px;">
      For the best experience, please ask specific questions and I'll provide detailed, exact information from Daniel's resume.
    </p>
  </div>`;
}

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    // Generate response using GPT or fallback
    const response = await generateGPTResponse(message);
    
    // Simulate processing time
    setTimeout(() => {
      res.json({ response });
    }, 1000);
    
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Chat API is running',
    gpt_available: !!(process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here')
  });
});

app.listen(PORT, () => {
  console.log(`Chat server running on port ${PORT}`);
  console.log(`GPT Status: ${process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here' ? 'Available' : 'Not configured - using fallback responses'}`);
}); 