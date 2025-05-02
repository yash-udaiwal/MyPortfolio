
// Removed "use client" as state is no longer needed

import { ProjectCard } from '@/components/project-card';
// Removed Button and Select imports as they are no longer used for filtering

// Placeholder project data - replace with actual projects
const allProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and Stripe integration.",
    role: "Lead Developer",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveDemoLink: "https://ecommerce-demo.example.com",
    imageUrl: "https://picsum.photos/400/250?random=1",
    category: "Web",
    dataAiHint: "ecommerce online store shopping",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive Kanban-style task management tool built with Next.js and Firebase for real-time updates.",
    role: "Full Stack Developer",
    techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", " Zustand"],
    githubLink: "https://github.com/yourusername/task-app",
    // liveDemoLink: "https://task-app-demo.example.com", // Optional
    imageUrl: "https://picsum.photos/400/250?random=2",
    category: "Web",
    dataAiHint: "task management kanban board",
  },
  {
    id: 3,
    title: "Portfolio Website V2",
    description: "The previous version of my personal portfolio website, built using vanilla JavaScript and SCSS.",
    role: "Designer & Developer",
    techStack: ["HTML", "CSS", "JavaScript", "SCSS"],
    githubLink: "https://github.com/yourusername/portfolio-v2",
    liveDemoLink: "https://portfolio-v2-demo.example.com",
    imageUrl: "https://picsum.photos/400/250?random=3",
    category: "Web",
    dataAiHint: "portfolio website design",
  },
  {
    id: 4,
    title: "AI Article Summarizer",
    description: "A tool that uses a third-party AI API to summarize long articles or text inputs.",
    role: "Backend Developer",
    techStack: ["Python", "Flask", "OpenAI API", "Docker"],
    githubLink: "https://github.com/yourusername/ai-summarizer",
    // imageUrl: "https://picsum.photos/400/250?random=4", // Optional
    category: "AI",
    dataAiHint: "ai summarizer text analysis",
  },
   {
    id: 5,
    title: "Mobile Weather App",
    description: "Simple weather application for iOS and Android using React Native.",
    role: "Mobile Developer",
    techStack: ["React Native", "Expo", "OpenWeatherMap API"],
    githubLink: "https://github.com/yourusername/weather-app-mobile",
    imageUrl: "https://picsum.photos/400/250?random=5",
    category: "Mobile",
    dataAiHint: "mobile app weather forecast",
  },
];

// Removed categories calculation and filtering logic

export default function ProjectsPage() {
  // Removed useState for selectedCategory

  return (
    <div className="space-y-8 fade-in">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">My Projects</h1>

      {/* Removed Category Filter Section */}

      {/* Project Grid - Directly uses allProjects */}
      {allProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
         <p className="text-center text-muted-foreground">No projects found.</p> // Updated message
      )}
    </div>
  );
}
