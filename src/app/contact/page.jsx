
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import Link from 'next/link';

const contactDetails = {
  email: "alex.johnson.dev@email.com",
  phone: "+1 (555) 123-4567", // Optional
  linkedin: "https://linkedin.com/in/alexjohnsondev", // Replace with actual URL
  github: "https://github.com/alexjohnsondev", // Replace with actual URL
};

export default function ContactPage() {
  return (
    <div className="space-y-12 fade-in">
      <h1 className="text-3xl font-bold text-primary text-center">Get In Touch</h1>
      <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the form below or through my contact details.
      </p>

      {/* Contact Icons - Horizontal Layout */}
      <Card className="shadow-md subtle-hover">
        <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">Contact Information</CardTitle>
          </CardHeader>
        <CardContent className="flex flex-wrap justify-center items-center gap-8 pt-6">
           <Link href={`mailto:${contactDetails.email}`} className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
            <Mail className="h-10 w-10 mb-2 text-accent group-hover:scale-110 transition-transform" />
            <span className="text-sm">Email</span>
          </Link>
          {contactDetails.phone && (
             <div className="flex flex-col items-center text-muted-foreground group cursor-pointer"> {/* Added cursor-pointer */}
               <Phone className="h-10 w-10 mb-2 text-accent group-hover:scale-110 transition-transform" />
               <span className="text-sm">Phone</span>
              </div>
          )}
           <Link href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
            <Linkedin className="h-10 w-10 mb-2 text-accent group-hover:scale-110 transition-transform" />
            <span className="text-sm">LinkedIn</span>
          </Link>
           <Link href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
            <Github className="h-10 w-10 mb-2 text-accent group-hover:scale-110 transition-transform" />
             <span className="text-sm">GitHub</span>
          </Link>
        </CardContent>
      </Card>


      {/* Contact Form Card */}
      <Card className="shadow-md max-w-2xl mx-auto subtle-hover"> {/* Centered the card */}
        <CardHeader>
          <CardTitle className="text-2xl text-primary text-center">Send Me a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
