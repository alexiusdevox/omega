export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Gestisci l'invio del modulo (salvando i dati o inviandoli via email)
      // Ad esempio, usando nodemailer per inviare un'email
      try {
        // Fai il necessario per processare il modulo, ad esempio inviare un'email
        console.log('Modulo inviato:', { name, email, message });
  
        // Risposta di successo
        return res.status(200).json({ message: 'Messaggio ricevuto!' });
      } catch (error) {
        return res.status(500).json({ message: 'Errore durante l\'invio.' });
      }
    } else {
      return res.status(405).json({ message: 'Metodo non permesso' });
    }
  }
  