
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';


export function ProjectCard({ project }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-md subtle-hover">
      {project.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill // Use fill instead of layout
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Provide sizes attribute
            style={{ objectFit: 'cover' }} // Use style for objectFit
            className="bg-muted"
            data-ai-hint={project.dataAiHint || "project screenshot technology"} // Use provided hint or default
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.role}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 border-t pt-4">
        {project.githubLink && (
          <Button variant="outline" size="sm" asChild className="group">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveDemoLink && (
          <Button variant="default" size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 group">
            <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
