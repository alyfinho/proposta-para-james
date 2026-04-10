import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Video, Instagram, CheckCircle2, ArrowRight, CreditCard, Wallet, Sparkles } from 'lucide-react';

export default function App() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-24">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-lg flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            Studio Digital
          </div>
          <a 
            href="#investimento" 
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Ver Investimento
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
            <Sparkles className="w-4 h-4" />
            Apresentação de Serviços
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            PROPOSTA COMERCIAL <br className="hidden md:block" />
            <span className="text-blue-500">ESTRUTURAÇÃO DIGITAL</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Uma solução completa e estratégica para elevar a presença online da sua loja, 
            destacar seus produtos e gerar mais desejo de compra nos seus clientes.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">O que está incluso</h2>
          <p className="text-slate-400">Detalhes dos serviços que transformarão seu posicionamento.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Service 1 */}
          <motion.div variants={fadeIn} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Site Profissional</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Criação de um site completo para a loja, focado na exposição dos produtos e facilidade de acesso para os clientes através do link na bio.
            </p>
            <div className="pt-6 border-t border-slate-800 mt-auto">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block mb-1">Investimento</span>
              <span className="text-lg font-medium text-white">R$ 2.499,00</span>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div variants={fadeIn} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Produção Audiovisual</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Produção de 6 vídeos profissionais segmentados, focados em destacar os produtos principais da loja e gerar desejo de compra.
            </p>
            <div className="pt-6 border-t border-slate-800 mt-auto">
              <div className="flex justify-between items-end mb-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Investimento</span>
                <span className="text-xs text-slate-500">6x R$ 350,00</span>
              </div>
              <span className="text-lg font-medium text-white">R$ 2.100,00</span>
            </div>
          </motion.div>

          {/* Service 3 (Bonus) */}
          <motion.div variants={fadeIn} className="bg-gradient-to-br from-blue-900/40 to-blue-950 p-8 rounded-3xl border border-blue-800/50 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-300">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Bônus Exclusivo
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Estrutura do Instagram</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
                Organização completa do Instagram da loja, incluindo a identidade visual, estruturação de bio, destaques e postagens iniciais para passar credibilidade.
              </p>
              <div className="pt-6 border-t border-blue-800/50 mt-auto">
                <span className="text-xs text-blue-300/70 uppercase tracking-wider font-semibold block mb-1">Investimento</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium line-through text-blue-400/50">R$ 400,00</span>
                  <span className="text-lg font-bold text-white">R$ 0,00</span>
                </div>
                <p className="text-xs text-blue-300/70 mt-2">Sem custo adicional fechando o pacote Site + Vídeos.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Summary Section */}
      <section id="investimento" className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Resumo do Investimento</h2>
            <p className="text-slate-400">Transparência total sobre os valores do projeto.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-slate-900 rounded-3xl p-2 md:p-8 border border-slate-800"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 px-6 text-sm font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-800">Serviço</th>
                    <th className="py-4 px-6 text-sm font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-800 text-right">Valor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-slate-200">Plataforma Digital (Site)</td>
                    <td className="py-5 px-6 text-right text-slate-300">R$ 2.499,00</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-slate-200">Produção de Conteúdo <span className="text-slate-500 font-normal text-sm ml-1">(6 Vídeos)</span></td>
                    <td className="py-5 px-6 text-right text-slate-300">R$ 2.100,00</td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-blue-400 flex items-center gap-2">
                      Estrutura do Instagram
                    </td>
                    <td className="py-5 px-6 text-right font-semibold text-blue-400">BÔNUS</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-6 px-6 text-lg font-bold text-white">Total do Projeto</td>
                    <td className="py-6 px-6 text-right text-2xl font-bold text-white">R$ 4.599,00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Conditions */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Condições de Pagamento</h2>
          <p className="text-slate-400">Escolha a melhor opção para o seu negócio.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Installments */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-slate-900 p-8 rounded-3xl border border-slate-800 flex flex-col"
          >
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-blue-400 mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Parcelado no Cartão</h3>
            <p className="text-slate-400 text-sm mb-8 flex-grow">
              Parcele o valor total do projeto em até 12 vezes para maior flexibilidade no seu fluxo de caixa.
            </p>
            <div>
              <div className="text-sm text-slate-500 mb-1">Em até 12x de</div>
              <div className="text-4xl font-bold text-white mb-4">R$ 437,40</div>
              <p className="text-xs text-slate-500 leading-relaxed">
                * O valor total da operação parcelada é de R$ 5.248,80, referente ao valor dos serviços somado às taxas de parcelamento da operadora.
              </p>
            </div>
          </motion.div>

          {/* Upfront */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10 -mr-20 -mt-20"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-300 mb-6 border border-slate-600/50">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Pagamento à Vista</h3>
              <p className="text-slate-400 text-sm mb-8 flex-grow">
                Condição especial com desconto para pagamento integral via PIX ou Transferência Bancária.
              </p>
              <div>
                <div className="text-sm text-slate-400 mb-1">Valor com desconto</div>
                <div className="text-4xl font-bold text-white mb-4">R$ 4.500,00</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    Economia de R$ 99,00
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    Sem taxas adicionais
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-slate-900 rounded-3xl p-12 border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Vamos iniciar o projeto?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Ao aprovar esta proposta, daremos início imediato ao planejamento e execução da sua nova estrutura digital.
            </p>
            <a 
              href="https://wa.me/5594984419080?text=Olá! Gostaria de aprovar a proposta de Estruturação Digital." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all inline-flex items-center gap-2 mx-auto shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5"
            >
              Aprovar Proposta
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
