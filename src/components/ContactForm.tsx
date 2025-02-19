import { useState } from 'react';
import { Mail } from 'lucide-react';

interface ContactFormProps {
  darkMode: boolean;
}

export const ContactForm = ({ darkMode }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Vérification de l'email
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Gestion du changement des champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation en temps réel
    let errorMsg = '';
    if (name === 'name' && value.trim().length < 2) {
      errorMsg = 'Le nom doit contenir au moins 2 caractères.';
    } else if (name === 'email' && !isValidEmail(value)) {
      errorMsg = 'Adresse email invalide.';
    } else if (name === 'message' && value.trim().length < 10) {
      errorMsg = 'Le message doit contenir au moins 10 caractères.';
    }

    setErrors({ ...errors, [name]: errorMsg });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérifier si des erreurs existent
    if (errors.name || errors.email || errors.message) {
      setStatus('Veuillez corriger les erreurs avant d’envoyer.');
      return;
    }

    // Vérification finale des champs
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('Tous les champs sont obligatoires.');
      return;
    }

    setStatus('Envoi en cours...');

    try {
      const response = await fetch('https://formspree.io/f/xrbeaovo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        setStatus('Échec de l’envoi du message.');
      }
    } catch (error) {
      setStatus('Échec de l’envoi du message.');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-600  mb-8 text-center">🤙 Contact Me</h2>
      <form
        className={`max-w-lg mx-auto sm:space-y-4 space-y-6 p-8 rounded-lg shadow-lg ${
          darkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-gray-900'
        }`}
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <label className={`block mb-2 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Name
          </label>
          <input
            type="text"
            className={`w-full p-3 rounded-lg border ${
              darkMode ? 'border-gray-600 bg-[#1e293b] text-white' : 'border-gray-300 bg-gray-100 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-[#00bcff] transition`}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="relative">
          <label className={`block mb-2 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            type="email"
            className={`w-full p-3 rounded-lg border ${
              darkMode ? 'border-gray-600 bg-[#1e293b] text-white' : 'border-gray-300 bg-gray-100 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-[#00bcff] transition`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <label className={`block mb-2 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Message
          </label>
          <textarea
            rows={4}
            className={`w-full p-3 rounded-lg border ${
              darkMode ? 'border-gray-600 bg-[#1e293b] text-white' : 'border-gray-300 bg-gray-100 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-[#00bcff] transition`}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-[#01425a] hover:bg-[#009edb] transition-all duration-300 text-white py-3 rounded-lg flex items-center justify-center gap-2 shadow-md"
        >
          <Mail size={20} />
          Send Message
        </button>

        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </section>
  );
};
