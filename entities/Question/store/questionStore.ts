import type { IQuestion } from "../interface/IQuestion";

export const useQuestionStore = defineStore("questionStore", () => {
  const questions = ref<IQuestion[]>([
    {
      id: 1,
      title: "Как быстро активируется сервер после оплаты?",
      answer:
        "Сервер активируется автоматически в течение 1-5 минут после подтверждения оплаты. При использовании криптовалюты активация может занять до 15 минут.",
      isOpened: false,
    },
    {
      id: 2,
      title: "Какие способы оплаты вы принимаете?",
      answer:
        "Принимаем банковские карты (Visa/Mastercard/Мир), электронные кошельки (QIWI, ЮMoney), криптовалюту (BTC, ETH, USDT) и банковские переводы. Для юридических лиц доступна оплата по счету.",
      isOpened: false,
    },
    {
      id: 3,
      title: "Есть ли защита от DDoS-атак?",
      answer:
        "Да, все серверы защищены базовой DDoS-защитой на уровне 10 Гбит/с бесплатно. Для тарифов 'Бизнес' и выше доступна расширенная защита до 1 Тбит/с.",
      isOpened: false,
    },
    {
      id: 4,
      title: "Можно ли перенести существующий сервер к вам?",
      answer:
        "Да, предоставляем бесплатную миграцию с других хостингов. Наши специалисты помогут перенести данные, настройки и домены. Миграция занимает от 2 до 24 часов в зависимости от объема данных.",
      isOpened: false,
    },
  ]);

  const toggleQuestion = (id: number) => {
    const target = questions.value.find((item) => item.id === id);
    if (!target) return;

    target.isOpened = !target.isOpened;
  };

  return {
    questions,
    toggleQuestion,
  };
});
