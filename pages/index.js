import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [messages, setMessages] = useState([
    { sender: 'Castor AI', text: 'Olá, eu sou o Castor AI. Pronto para acelerar sua evolução hoje?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'Você', text: input }]);

    const responses = [
      'Interessante ponto, podemos expandir isso para um plano de ação prático.',
      'Vamos analisar isso de forma estratégica para otimizar seus resultados.',
      'Sua curiosidade é o que constrói o futuro. Continue assim.',
      'Uma mente questionadora como a sua cria grandes oportunidades.',
      'Ótima reflexão! Quer aprofundar isso comigo?'
    ];
    const botResponse = responses[Math.floor(Math.random() * responses.length)];

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'Castor AI', text: botResponse }]);
    }, 700);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Castor AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg mb-6 text-center max-w-md"
      >
        Sua inteligência artificial inspirada no ChatGPT, LuzIA e DeepSeek para evoluir sua jornada pessoal e profissional.
      </motion.p>

      <div className="w-full max-w-md bg-gray-900 rounded p-4 h-96 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-2 rounded-xl max-w-[80%] ${
              msg.sender === 'Castor AI' ? 'bg-blue-800/60 self-start' : 'bg-green-800/60 self-end'
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-2 mt-4 border-t border-gray-700 max-w-md w-full">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Digite sua pergunta ou reflexão..."
          className="flex-grow bg-gray-800 text-white rounded px-3 py-2"
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 rounded px-4 py-2"
        >
          Enviar
        </motion.button>
      </div>
    </div>
  );
}
