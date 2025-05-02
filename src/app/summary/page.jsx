
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, Users, Award, GraduationCap, Smile } from 'lucide-react'; // Added Smile icon

// Placeholder data - replace with actual content
const summaryData = {
  professionalSummary: "🚀 Passionate Java Developer | Spring Boot | Microservices | Kafka | Scalable API Solutions With over 2 years of experience in backend development, I specialize in building scalable, high-performance microservices using Java, Spring Boot, and Kafka. My expertise lies in designing event-driven architectures, optimizing API performance, and leveraging multi-threading for efficient data processing. Currently, at Evernorth, I am working on Pharmacy APIs, developing scalable solutions using Spring Boot, Kafka, and microservices while utilizing Splunk and Argo for monitoring and CI/CD automation. Previously, at Capgemini, I contributed to reducing bug rates by 25%, streamlining microservices architecture, and enhancing system reliability. 🔹 Tech Stack: Java | Spring Boot | Microservices | Kafka | REST APIs | Multi-threading | PostgreSQL | OracleSQL | Docker | Kubernetes | Jenkins | Argo | OpenShift | Splunk | Agile💡 Always eager to optimize system performance, solve complex problems, and collaborate with teams to deliver robust and scalable solutions.",
  technicalStrengths: [
    "Java", "Spring Boot", "Microservices", "Kafka", "REST APIs","Docker","Kubernetes","Orchestration","PostgreSQL","OracleSQL",
    "CI/CD", "Agile Methodologies", "Event-Driven Architecture", "Multi-threading", "Splunk", "Argo", "OpenShift","Jenkins"
  ],
  softSkills: [
    "Problem Solving", "Communication", "Teamwork", "Adaptability",
    "Time Management", "Leadership", "Critical Thinking"
  ],
  hobbies: [ // Added Hobbies section data
    "Tech Blogging", "Hiking", "Photography", "Cooking"
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Evernorth Health Services", 
      period: "Dec 2024 - Present",
      description: "Led development of key features for a large-scale e-commerce platform using React, Node.js, and AWS. Mentored junior engineers and improved code quality through code reviews and pair programming.",
    },
    {
      title: "Senior Software Engineer",
      company: "Capgemini",
      period: "Oct 2022 - Dec 2024",
      description: "Developed and maintained client websites using JavaScript, Python/Django, and various CMS platforms. Collaborated with designers to implement responsive UI/UX.",
    },
  ],
  certifications: [
    "AWS Certified Cloud Practitioner",
    "Salesforce PD1"
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Amritsar College of Engineering and Technology",
      period: "Aug 2018 - May 2012",
      description: "Focused on Java Programming Language and distributed system that is scalable microservices architecture.",
    },
    {
      degree: "12th",
      institution: "Saint Soldier Public School",
      period: "Apr 2017 - Mar 2018",
      description: "cleared 12th with 89% in Science stream.",
    },
  ]
};

export default function SummaryPage() {
  return (
    <div className="space-y-8 fade-in">
      <h1 className="text-3xl font-bold text-primary text-center mb-12">About Me</h1>

      {/* Professional Summary */}
      <Card className="shadow-md subtle-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round hover:scale-110 transition-transform"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{summaryData.professionalSummary}</p>
        </CardContent>
      </Card>

      {/* Experience Timeline */}
      <Card className="shadow-md subtle-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
             <Briefcase className="hover:scale-110 transition-transform" /> Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
           <div className="relative border-l border-primary pl-6 space-y-8">
             {summaryData.experience.map((job, index) => (
               <div key={index} className="relative">
                 <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary border-2 border-background"></div>
                 <h3 className="text-lg font-semibold">{job.title}</h3>
                 <p className="font-medium text-primary">{job.company}</p>
                 <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                 <p className="text-muted-foreground">{job.description}</p>
               </div>
             ))}
           </div>
        </CardContent>
      </Card>

      {/* Grid for Technical Strengths and Soft Skills */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Technical Strengths */}
         <Card className="shadow-md subtle-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Code className="hover:scale-110 transition-transform" /> Technical Strengths
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {summaryData.technicalStrengths.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </CardContent>
        </Card>

        {/* Soft Skills */}
         <Card className="shadow-md subtle-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
               <Users className="hover:scale-110 transition-transform" /> Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {summaryData.softSkills.map((skill) => (
              <Badge key={skill} variant="outline">{skill}</Badge>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Grid for Certifications and Hobbies */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
         {/* Certifications */}
         <Card className="shadow-md subtle-hover">
           <CardHeader>
             <CardTitle className="flex items-center gap-2 text-xl">
                <Award className="hover:scale-110 transition-transform" /> Certifications
             </CardTitle>
           </CardHeader>
           <CardContent className="flex flex-wrap gap-2">
             {summaryData.certifications.map((cert) => (
               <Badge key={cert} variant="default" className="bg-accent text-accent-foreground">{cert}</Badge>
             ))}
           </CardContent>
         </Card>

        {/* Hobbies & Interests */}
         <Card className="shadow-md subtle-hover">
           <CardHeader>
             <CardTitle className="flex items-center gap-2 text-xl">
                <Smile className="hover:scale-110 transition-transform" /> Hobbies &amp; Interests
             </CardTitle>
           </CardHeader>
           <CardContent className="flex flex-wrap gap-2">
             {summaryData.hobbies.map((hobby) => (
               <Badge key={hobby} variant="secondary">{hobby}</Badge>
             ))}
           </CardContent>
         </Card>
      </div>

      {/* Education Timeline (Full Width) */}
      <Card className="shadow-md subtle-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <GraduationCap className="hover:scale-110 transition-transform" /> Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
           <div className="relative border-l border-primary pl-6 space-y-8">
              {summaryData.education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary border-2 border-background"></div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="font-medium text-primary">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  {edu.description && <p className="text-muted-foreground">{edu.description}</p>}
                </div>
              ))}
            </div>
        </CardContent>
      </Card>

    </div>
  );
}
