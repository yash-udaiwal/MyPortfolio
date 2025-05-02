
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  // Replace with actual data
  const name = "Yash Udaiwal";
  const jobTitle = "Backend Developer";
  const tagline = "Building scalable web applications with modern technologies.";

  return (
    <section className="flex flex-col items-center justify-center text-center fade-in min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-15rem)]">
      <div className="mb-8">
        <Image
          src="https://picsum.photos/160/160"
          alt="Professional Avatar"
          width={160}
          height={160}
          className="rounded-full border-4 border-primary shadow-lg"
          data-ai-hint="professional avatar man"
          priority // Load image eagerly as it's above the fold
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl mb-4">
        {name}
      </h1>
      <h2 className="text-2xl font-medium text-secondary-foreground sm:text-3xl md:text-4xl mb-6">
        {jobTitle}
      </h2>
      {/* Placeholder for typing effect - implement with a client component if needed */}
      <p className="text-lg text-muted-foreground md:text-xl mb-8 max-w-2xl mx-auto">
        {tagline}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
          <Link href="/projects">
            View Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">
            Get In Touch
          </Link>
        </Button>
      </div>
    </section>
  );
}
