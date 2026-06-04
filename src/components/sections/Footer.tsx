import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/SocialIcons'

export function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Separator className="bg-border mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-lg text-foreground">Aaron Elkin</p>
            <p className="text-sm text-muted-foreground mt-1">
              Software Engineer · MS CS @ JHU
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-secondary">
              <a href="mailto:aelkin3@jhu.edu" aria-label="Email">
                <Mail size={18} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-secondary">
              <a href="https://github.com/AaronElk4124" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon size={18} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-secondary">
              <a href="https://linkedin.com/in/aaronelkin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon size={18} />
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground/50">
            248-318-8361
          </p>
        </div>
      </div>
    </footer>
  )
}
