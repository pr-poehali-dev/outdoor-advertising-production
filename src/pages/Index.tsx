import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/fc5fc135-a18d-4450-a481-08576d6e633c/files/b0864751-5e05-46d8-8815-9f1341614280.jpg";

const services = [
  {
    icon: "Megaphone",
    title: "Контекстная реклама",
    desc: "Яндекс Директ и Google Ads — точное попадание в целевую аудиторию с первого дня запуска.",
    tag: "Быстрый результат",
  },
  {
    icon: "TrendingUp",
    title: "Продвижение в соцсетях",
    desc: "SMM-стратегия, контент-план и таргетированная реклама во ВКонтакте, Telegram и Instagram.",
    tag: "Узнаваемость бренда",
  },
  {
    icon: "Search",
    title: "SEO-продвижение",
    desc: "Выход в топ поисковой выдачи. Органический трафик без постоянных затрат на рекламу.",
    tag: "Долгосрочный эффект",
  },
  {
    icon: "PenTool",
    title: "Брендинг и дизайн",
    desc: "Разработка фирменного стиля, логотипа и визуальных материалов для всех каналов.",
    tag: "Профессиональный образ",
  },
  {
    icon: "BarChart2",
    title: "Аналитика и отчётность",
    desc: "Прозрачные отчёты: что работает, что приносит клиентов, куда направить бюджет.",
    tag: "Контроль и ROI",
  },
  {
    icon: "Globe",
    title: "Разработка сайтов",
    desc: "Лендинги и корпоративные сайты, настроенные на конверсию и продажи.",
    tag: "Под ключ",
  },
];

const portfolio = [
  {
    title: "ТопМебель",
    category: "Контекстная реклама",
    result: "+340% заявок за 3 месяца",
    color: "from-amber-900/40",
  },
  {
    title: "ФрешФуд",
    category: "SMM + Таргет",
    result: "×5 подписчиков за 60 дней",
    color: "from-slate-800/60",
  },
  {
    title: "АвтоПремиум",
    category: "SEO + Брендинг",
    result: "Топ-3 по ключевым запросам",
    color: "from-zinc-900/60",
  },
  {
    title: "МедицинаПро",
    category: "Комплексный маркетинг",
    result: "CPA снижен на 58%",
    color: "from-stone-800/60",
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const navItems = [
    { label: "Главная", href: "#home" },
    { label: "Услуги", href: "#services" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-primary" />
            <span className="font-['Oswald'] font-600 text-lg tracking-widest uppercase text-foreground">
              Agency
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contacts"
            className="hidden md:block bg-primary text-primary-foreground px-5 py-2 text-xs font-['Oswald'] tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Заказать
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="bg-primary text-primary-foreground px-5 py-2 text-xs font-['Oswald'] tracking-widest uppercase text-center"
              onClick={() => setMenuOpen(false)}
            >
              Заказать
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 border border-primary/40 px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-primary text-xs font-['Oswald'] tracking-widest uppercase">
                Рекламное агентство полного цикла
              </span>
            </div>
          </div>

          <h1 className="animate-fade-up-d1 font-['Oswald'] text-5xl md:text-7xl lg:text-8xl font-600 leading-none tracking-tight mb-6 text-foreground uppercase">
            Реклама,<br />
            <span className="text-primary">которая</span><br />
            работает
          </h1>

          <p className="animate-fade-up-d2 text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 font-['IBM_Plex_Sans'] font-light leading-relaxed">
            Привлекаем клиентов через все каналы. Прозрачная аналитика, измеримый результат, честная отчётность.
          </p>

          <div className="animate-fade-up-d3 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacts"
              className="bg-primary text-primary-foreground px-8 py-4 font-['Oswald'] text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Получить консультацию
            </a>
            <a
              href="#services"
              className="border border-border text-foreground px-8 py-4 font-['Oswald'] text-sm tracking-widest uppercase hover:border-primary/60 transition-colors"
            >
              Наши услуги
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-primary" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "120+", label: "Клиентов" },
            { num: "8 лет", label: "На рынке" },
            { num: "3.5×", label: "Средний ROI" },
            { num: "24/7", label: "Поддержка" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-['Oswald'] text-4xl font-600 text-primary mb-1">{s.num}</div>
              <div className="text-muted-foreground text-sm uppercase tracking-widest font-['Oswald'] font-300">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs font-['Oswald'] tracking-widest uppercase">Услуги</span>
          </div>
          <h2 className="font-['Oswald'] text-4xl md:text-5xl font-500 text-foreground uppercase leading-tight">
            Полный спектр<br />рекламных решений
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card p-8 border border-border cursor-default"
            >
              <div className="w-10 h-10 border border-primary/30 flex items-center justify-center mb-5">
                <Icon name={s.icon} fallback="Star" size={18} className="text-primary" />
              </div>
              <h3 className="font-['Oswald'] text-xl font-500 text-foreground mb-3 uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <span className="text-xs font-['Oswald'] tracking-widest text-primary/70 uppercase border border-primary/20 px-2 py-0.5">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-['Oswald'] tracking-widest uppercase">Портфолио</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl font-500 text-foreground uppercase leading-tight">
              Результаты,<br />которые говорят сами
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolio.map((p, i) => (
              <div
                key={i}
                className="portfolio-item relative h-56 md:h-72 border border-border cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} to-background`} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-primary text-xs font-['Oswald'] tracking-widest uppercase mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-['Oswald'] text-2xl font-500 text-foreground uppercase mb-2">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-px bg-primary" />
                    <span className="text-primary text-sm font-light">{p.result}</span>
                  </div>
                </div>
                <div className="portfolio-overlay absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <div className="border border-primary/60 px-5 py-2">
                    <span className="text-primary text-xs font-['Oswald'] tracking-widest uppercase">
                      Подробнее
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ORDER FORM */}
      <section id="contacts" className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-['Oswald'] tracking-widest uppercase">Контакты</span>
            </div>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl font-500 text-foreground uppercase leading-tight mb-6">
              Начнём<br />работу вместе
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm">
              Оставьте заявку — мы свяжемся в течение 30 минут в рабочее время и подберём оптимальное решение для вашего бизнеса.
            </p>

            <div className="space-y-6">
              {[
                { icon: "Phone", text: "+7 (999) 000-00-00" },
                { icon: "Mail", text: "info@agency.ru" },
                { icon: "MapPin", text: "Москва, Пресненская наб., 12" },
                { icon: "Clock", text: "Пн–Пт: 9:00–19:00" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} fallback="Info" size={15} className="text-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-primary/20 bg-primary/5">
                <div className="w-12 h-12 bg-primary/10 border border-primary/40 flex items-center justify-center mb-5">
                  <Icon name="Check" size={22} className="text-primary" />
                </div>
                <h3 className="font-['Oswald'] text-2xl font-500 text-foreground uppercase mb-3">
                  Заявка отправлена
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Мы свяжемся с вами в течение 30 минут. Спасибо за обращение!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-primary text-xs font-['Oswald'] tracking-widest uppercase hover:text-primary/70 transition-colors"
                >
                  Отправить ещё раз
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-['Oswald'] tracking-widest uppercase text-muted-foreground mb-2">
                    Ваше имя *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Александр Петров"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-['Oswald'] tracking-widest uppercase text-muted-foreground mb-2">
                    Телефон *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-['Oswald'] tracking-widest uppercase text-muted-foreground mb-2">
                    Услуга
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Выберите услугу</option>
                    <option>Контекстная реклама</option>
                    <option>Продвижение в соцсетях</option>
                    <option>SEO-продвижение</option>
                    <option>Брендинг и дизайн</option>
                    <option>Разработка сайта</option>
                    <option>Комплексный маркетинг</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-['Oswald'] tracking-widest uppercase text-muted-foreground mb-2">
                    Комментарий
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Расскажите о вашем проекте или задайте вопрос..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 font-['Oswald'] text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors flex items-center justify-center gap-3"
                >
                  <span>Отправить заявку</span>
                  <Icon name="ArrowRight" size={16} />
                </button>

                <p className="text-muted-foreground/50 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-primary" />
            <span className="font-['Oswald'] font-500 tracking-widest uppercase text-foreground text-sm">Agency</span>
          </div>
          <p className="text-muted-foreground text-xs text-center">
            © 2026 Рекламное агентство. Все права защищены.
          </p>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-muted-foreground/60 hover:text-foreground text-xs transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}