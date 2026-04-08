import { motion } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  Target, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  MessageCircle, 
  Mail, 
  Phone, 
  Globe, 
  Filter, 
  BrainCircuit,
  Rocket,
  Layers
} from 'lucide-react';

const cases = [
  {
    id: 1,
    title: "EdTech: Масштабирование IT-профессий",
    niche: "Онлайн-образование (IT)",
    budget: "~700 000 ₽ / мес",
    highlight: "Рост ROAS до 340%, внедрение AI-скоринга, x4 в объеме лидов.",
    icon: <BrainCircuit className="text-blue-400" size={28} />,
    color: "from-blue-500/20 to-transparent",
    stack: ["Яндекс Директ", "VK Реклама", "AmoCRM", "Roistat", "SaleBot", "Яндекс Метрика"],
    before: [
      "450 лидов / мес (CPL ~$12 / ~1 080 ₽)",
      "CR лид → оплата ~3–4%, ROAS ~180–200%",
      "Проблема: Отдел продаж выгорал от «сырых» MQL. Лиды шли, но квалификация (SQL) проседала."
    ],
    after: [
      "1 800 лидов / мес (CPL ~$7.5 / ~675 ₽)",
      "CR лид → оплата ~6–8%, ROAS 340%",
      "Результат: Доля SQL выросла на 40% за счет автоматической фильтрации и прогрева."
    ],
    strategy: [
      "Архитектура воронки: Сменили лобовой вход с «Вебинара» на связку «Лид-магнит (Гайд) + Тест-драйв профессии».",
      "Трафик: Масштабировали Яндекс Директ (Поиск + РСЯ) с оптимизацией по ROI через Roistat. Подключили VK Рекламу для ретаргетинга по сегментам.",
      "Автоматизация и AI: Внедрили Telegram-бота (SaleBot) для AI-скоринга. Бот квалифицировал лидов по цели, уровню и бюджету до передачи в AmoCRM.",
      "Аналитика: Настроили сквозную аналитику Roistat + AmoCRM для отслеживания ROMI вплоть до ключевого слова и креатива."
    ],
    why: "Снижение порога входа (тест-драйв) дало объем, а жесткий AI-скоринг защитил отдел продаж от нецелевых лидов. Управление ставками на основе сквозной аналитики позволило снизить CPL."
  },
  {
    id: 2,
    title: "Психология: Качество важнее количества",
    niche: "Психология / Личностный рост (Омск)",
    budget: "~400 000 ₽ / мес",
    highlight: "Рост CR в консультацию до 55%. Очистка воронки от «мусорных» лидов.",
    icon: <Filter className="text-purple-400" size={28} />,
    color: "from-purple-500/20 to-transparent",
    stack: ["VK Реклама", "Telegram Ads", "Битрикс24", "Marquiz", "Senler"],
    before: [
      "~300 лидов / мес (CPL 700–900 ₽)",
      "CR лид → консультация ~25–30%, CR в оплату ~10–15%",
      "Проблема: Много нецелевых MQL, низкий SQL. Менеджеры тратили время на «просто спросить»."
    ],
    after: [
      "220–250 лидов / мес (объем ниже, но качество премиальное)",
      "CR лид → консультация ~45–55%, CR в оплату ~20–25%",
      "Результат: Стоимость привлечения платящего клиента (CAC) снизилась на 35%."
    ],
    strategy: [
      "Архитектура воронки: Трафик → Marquiz (Квалификация) → Senler/TG-бот → Контентная цепочка (3 дня) → Клоуз на диагностику.",
      "Трафик: Сфокусировались на парсинге узких сегментов в VK Рекламе и посевах в целевых Telegram-каналах. Отказались от широких аудиторий.",
      "Прогрев: Внедрили SMM-трафик. Лиды, не готовые к покупке сразу, «оседали» в соцсетях и прогревались контентом.",
      "Аналитика: Настроили Битрикс24 для трекинга конверсии каждого ответа из квиза в финальную продажу."
    ],
    why: "Мы осознанно усложнили вход через квиз, отсеяв «мусорный» трафик. Интеграция прогрева через соцсети увеличила LTV и конверсию в отложенные продажи."
  },
  {
    id: 3,
    title: "Масштабный запуск: Вебинарная воронка",
    niche: "Онлайн-образование (Психология)",
    budget: "~400 000 ₽ / мес",
    highlight: "Рост доходимости до 55%, стабильный ROMI ~250%.",
    icon: <Rocket className="text-indigo-400" size={28} />,
    color: "from-indigo-500/20 to-transparent",
    stack: ["Яндекс Директ", "GetCourse", "AmoCRM", "Roistat", "BotHelp"],
    before: [
      "Регистрации: ~2 500–3 000 / мес (CPL: 650–900 ₽)",
      "Доходимость до вебинара: 25–30%, CR в оплату: 3–5%",
      "Проблема: Высокая доля «туристов» (нецелевых MQL). Слабый SQL, лиды остывали после эфира."
    ],
    after: [
      "Регистрации: ~2 000–2 400 / мес (глубоко квалифицированные)",
      "Доходимость: 30% → 45–55%, CR в оплату: 3–5% → 7–10%",
      "Результат: Выровнялась экономика запусков, стабильный ROMI ~180–250%."
    ],
    strategy: [
      "Архитектура воронки: Ушли от «общего вебинара». Создали 4 сегментированных входа (выгорание, отношения, деньги, самооценка) → TG-бот (Диагностика) → Вебинар.",
      "Трафик: Основной объем — Яндекс Директ (РСЯ) с гиперсегментированными креативами. Ретаргет на вовлеченных через Директ и SMM.",
      "Прогрев: Многоканальная коммуникация до вебинара (Email-цепочки, Telegram-рассылки через BotHelp, разборы кейсов).",
      "Аналитика: Связка Roistat + GetCourse + AmoCRM. Контролировали сквозную конверсию (CR клик → рега → доходимость → SQL → оплата) по каждому сегменту."
    ],
    why: "Психология покупки = доверие + релевантный оффер. Разделение трафика по JTBD и жесткая фильтрация до вебинара резко подняли качество аудитории на эфире (SQL)."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8 text-sm font-medium text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Zap size={16} />
            <span>EdTech Funnel Architect</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Архитектор воронки продаж <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              из лидов в деньги
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Специализируюсь на оптимизации пути <strong className="text-slate-200 font-semibold">MQL → SQL</strong> и масштабировании онлайн-школ через глубокую аналитику и AI-инструменты.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/Ser4et"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Связаться в Telegram
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all backdrop-blur-sm hover:-translate-y-1"
            >
              Смотреть кейсы
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему мой маркетинг работает?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Я не просто лью трафик. Я выстраиваю систему, которая конвертирует интерес в оплату.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="text-blue-400" size={32} />,
              title: "JTBD & Сегментация",
              desc: "Глубокое понимание мотивов аудитории. Разделение трафика по интенту и создание релевантных офферов под каждую боль."
            },
            {
              icon: <Filter className="text-purple-400" size={32} />,
              title: "MQL → SQL Фильтрация",
              desc: "Очистка воронки от «мусорных» лидов до отдела продаж с помощью квизов, AI-ботов и квалифицирующих вопросов."
            },
            {
              icon: <TrendingUp className="text-indigo-400" size={32} />,
              title: "Фокус на Доходимость",
              desc: "Выстраивание многоканальных цепочек касаний (Email, TG, SMS) для максимальной конверсии в ключевой этап воронки."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1e293b]/60 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-md hover:border-slate-600 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-6 border border-slate-700/50 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Кейсы: От трафика к окупаемости</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Глубокая аналитика, performance-маркетинг и выстраивание пути клиента.</p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative bg-[#1e293b]/40 border border-slate-700/50 rounded-[2rem] overflow-hidden backdrop-blur-xl"
            >
              {/* Card Header Gradient */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${c.color} opacity-50 pointer-events-none`} />
              
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700/50 shadow-inner shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold">{c.title}</h3>
                        <p className="text-slate-400 mt-1">{c.niche} • Бюджет: {c.budget}</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium text-sm mb-4">
                      <Zap size={14} />
                      {c.highlight}
                    </div>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {c.stack.map((tech, idx) => (
                        <span key={idx} className="inline-flex items-center px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-10">
                  {/* Before / After */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-500" />
                        Было (Старт)
                      </h4>
                      <ul className="space-y-3">
                        {c.before.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-400">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                        Стало (Результат)
                      </h4>
                      <ul className="space-y-3">
                        {c.after.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-200">
                            <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Strategy & Why */}
                  <div className="bg-slate-800/30 rounded-3xl p-6 md:p-8 border border-slate-700/30">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Layers size={20} className="text-purple-400" />
                      Стратегия и Воронка
                    </h4>
                    <ul className="space-y-4 mb-8">
                      {c.strategy.map((item, idx) => {
                        const [boldPart, ...rest] = item.split(': ');
                        return (
                          <li key={idx} className="flex items-start gap-3 text-slate-300">
                            <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-purple-400 text-xs font-bold">{idx + 1}</span>
                            </div>
                            <span className="leading-relaxed">
                              <strong className="text-slate-200">{boldPart}:</strong> {rest.join(': ')}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5">
                      <h5 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">Почему сработало</h5>
                      <p className="text-slate-300 text-sm leading-relaxed">{c.why}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="relative py-24 px-6 border-t border-slate-800 mt-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готов обсудить ваш проект?</h2>
          <p className="text-xl text-slate-400 mb-12">Свяжитесь со мной удобным способом, чтобы разобрать вашу воронку.</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="https://t.me/Ser4et" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#1e293b] border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors text-blue-400">
                <MessageCircle size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">Telegram</div>
                <div className="font-semibold text-slate-200">@Ser4et</div>
              </div>
            </a>

            <a href="https://wa.me/79883447107" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#1e293b] border border-slate-700 hover:border-green-500/50 hover:bg-slate-800 transition-all group">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors text-green-400">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">WhatsApp</div>
                <div className="font-semibold text-slate-200">+7 (988) 344-71-07</div>
              </div>
            </a>

            <a href="mailto:s74001468@gmail.com" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#1e293b] border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition-all group">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors text-purple-400">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">Email</div>
                <div className="font-semibold text-slate-200">s74001468@gmail.com</div>
              </div>
            </a>

            <a href="https://max.ru/u" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#1e293b] border border-slate-700 hover:border-slate-400/50 hover:bg-slate-800 transition-all group">
              <div className="w-10 h-10 rounded-full bg-slate-500/10 flex items-center justify-center group-hover:bg-slate-500 group-hover:text-white transition-colors text-slate-400">
                <Globe size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">Портфолио</div>
                <div className="font-semibold text-slate-200">max.ru/u</div>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
