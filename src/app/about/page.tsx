import { AboutHero } from '@/components/AboutHero'
import { AboutMission } from '@/components/AboutMission'
import { AboutStory } from '@/components/AboutStory'
import { AboutTeam } from '@/components/AboutTeam'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AboutHero />
      <AboutMission />
      <AboutStory />
      <AboutTeam />
    </div>
  )
}

