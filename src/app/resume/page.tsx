// src/app/resume/page.tsx
export const metadata = {
  title: 'Resume - Adrian Velazquez-Martinez',
  description: 'Downloadable resume and HTML snapshot.',
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Resume</h1>

      {/* Optional inline viewer */}
      <object
        data="/Adrian Velazquez-Martinez DSP (Starlink).pdf#toolbar=0"
        type="application/pdf"
        className="mt-6 h-[80vh] w-full rounded-lg border"
      >
        <p>PDF viewer not supported. <a href="/Adrian Velazquez-Martinez DSP (Starlink).pdf">Download the PDF</a>.</p>
      </object>
    </main>
  );
}
