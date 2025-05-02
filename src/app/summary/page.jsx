
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, Users, Award, GraduationCap, Smile } from 'lucide-react'; // Added Smile icon

// Placeholder data - replace with actual content
const summaryData = {
  professionalSummary: "Highly motivated and detail-oriented Software Engineer with 5+ years of experience in designing, developing, and maintaining scalable web applications. Proven ability to work effectively in fast-paced environments and collaborate with cross-functional teams to deliver high-quality software solutions. Passionate about learning new technologies and applying them to solve complex problems.",
  technicalStrengths: [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js",
    "Express", "Python", "Django", "SQL", "NoSQL (MongoDB)",
    "Docker", "Kubernetes", "AWS", "Git", "CI/CD", "REST APIs", "GraphQL"
  ],
  softSkills: [
    "Problem Solving", "Communication", "Teamwork", "Adaptability",
    "Time Management", "Leadership", "Critical Thinking"
  ],
  hobbies: [ // Added Hobbies section data
    "Open Source Contribution", "Tech Blogging", "Hiking", "Photography", "Cooking"
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "Jan 2021 - Present",
      description: "Led development of key features for a large-scale e-commerce platform using React, Node.js, and AWS. Mentored junior engineers and improved code quality through code reviews and pair programming.",
    },
    {
      title: "Software Engineer",
      company: "Web Innovators LLC",
      period: "Jun 2018 - Dec 2020",
      description: "Developed and maintained client websites using JavaScript, Python/Django, and various CMS platforms. Collaborated with designers to implement responsive UI/UX.",
    },
  ],
  certifications: [
    "AWS Certified Solutions Architect - Associate",
    "Certified Kubernetes Application Developer (CKAD)",
    "Professional Scrum Master™ I (PSM I)"
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      period: "Sep 2016 - May 2018",
      description: "Focused on machine learning and distributed systems. Thesis on scalable microservices architecture.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      period: "Sep 2012 - May 2016",
      description: "Graduated with honors. Active member of the coding club.",
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
