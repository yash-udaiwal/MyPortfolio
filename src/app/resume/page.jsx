
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export default function ResumePage() {
  // IMPORTANT: Replace with the actual path to your resume PDF file in the /public directory
  const resumePdfPath = '/YashUdaiwalResume.pdf';

  return (
    <div className="space-y-8 fade-in">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">My Resume</h1>

      <div className="flex justify-center mb-8">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
          <a href={resumePdfPath} download="AlexJohnson_Resume.pdf">
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> Download Resume
          </a>
        </Button>
      </div>

      <Alert className="mb-8 subtle-hover">
        <FileText className="h-4 w-4 hover:scale-110 transition-transform" />
        <AlertTitle>Resume Viewer</AlertTitle>
        <AlertDescription>
          Your resume is embedded below. You might need to scroll within the frame to see the full document. If the embed doesn't load, please use the download button above.
        </AlertDescription>
      </Alert>

      {/* Embedded PDF Viewer using iframe */}
      <div className="aspect-[8.5/11] w-full max-w-4xl mx-auto border rounded-lg overflow-hidden shadow-md bg-muted subtle-hover">
        {/*
          NOTE: Ensure your resume PDF ('resume-placeholder.pdf' or your actual file name)
          is placed in the `public` directory of your Next.js project.
          The `src` attribute should be the relative path from the public directory.
        */}
        <iframe
          src={resumePdfPath}
          title="Resume PDF Viewer"
          width="100%"
          height="100%"
          className="border-0"
          aria-label="Embedded Resume PDF"
        >
          <p className="p-4 text-center text-muted-foreground">
            Your browser does not support embedded PDFs. Please <a href={resumePdfPath} download="YashUdaiwal_Resume.pdf" className="text-primary underline">download the PDF</a> to view it.
          </p>
        </iframe>
      </div>
    </div>
  );
}
