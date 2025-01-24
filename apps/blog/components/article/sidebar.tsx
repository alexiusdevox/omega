import { useState } from 'react'

export function Sidebar() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementa qui la logica per l'iscrizione alla newsletter
    console.log('Iscrizione newsletter:', email)
    setEmail('')
  }

  return (
    <aside className="w-full md:w-64 space-y-8 md:sticky md:top-4 md:self-start">
      {/* Newsletter */}
      <div className="bg-gray-100 p-4">
        <h3 className="font-bold text-lg mb-2">Iscriviti alla Newsletter</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="La tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2"
            required
          />
          <button type="submit" className="w-full">Iscriviti</button>
        </form>
      </div>

      {/* Video YouTube */}
      <div>
        <h3 className="font-bold text-lg mb-2">Video in Evidenza</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Articoli Recenti */}
      <div>
        <h3 className="font-bold text-lg mb-2">Articoli Recenti</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">L'ascesa dei chatbot IA</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Machine Learning per principianti</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Etica e IA: un dibattito aperto</a></li>
        </ul>
      </div>
    </aside>
  )
}
