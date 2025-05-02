
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-secondary py-6 text-secondary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Profile Canvas. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-4 md:mt-0">
          <Link href="https://github.com/alexjohnsondev" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-6 w-6 text-muted-foreground transition-transform hover:scale-110 hover:text-foreground" />
          </Link>
          <Link href="https://linkedin.com/in/alexjohnsondev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-transform hover:scale-110 hover:text-foreground" />
          </Link>
          {/* Add other social links if needed */}
        </div>
      </div>
    </footer>
  );
}
