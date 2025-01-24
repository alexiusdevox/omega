import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from "@repo/ui/button"

export function ShareButtons() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = "Il Futuro dell'Intelligenza Artificiale: Opportunità e Sfide"

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank')
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank')
  }

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="icon" onClick={shareOnFacebook}>
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Condividi su Facebook</span>
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnTwitter}>
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Condividi su Twitter</span>
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnLinkedIn}>
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Condividi su LinkedIn</span>
      </Button>
    </div>
  )
}

