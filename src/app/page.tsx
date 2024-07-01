import IntroductionSection from '@/components/introduction-section'
import ExperienceSection from '@/components/experience-section'
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 mx-auto max-w-7xl">
      <IntroductionSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
