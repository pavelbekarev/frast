import russia from "~/public/assets/russia.png";
import kz from "~/public/assets/kz.png";
import oae from "~/public/assets/oae.png";
import sing from "~/public/assets/sing.png";
import turkey from "~/public/assets/turkey.png";

export interface ServerDetail {
  label: string;
  value: string;
  description?: string;
}

export interface CountryDetails {
  ping: string;
  uptime: string;
  serverTypes: string[];
  dataCenters: Array<{
    name: string;
    tier: string;
    location: string;
  }>;
  networkSpeed: string;
  securityFeatures: string[];
  compliance: string[];
  pricing: {
    vps: string;
    dedicated: string;
    storage: string;
  };
  bestFor: string[];
  advantages: ServerDetail[];
  disadvantages: ServerDetail[];
  recommendedPlan: string;
}

export interface CountryConfig {
  id: number;
  countryTitle: string;
  countryCapital: string;
  img: any;
  flagEmoji: string;
  timezone: string;
  details: CountryDetails;
}

export const countryConfig: CountryConfig[] = [
  {
    id: 1,
    countryTitle: "Россия",
    countryCapital: "Москва",
    img: russia,
    flagEmoji: "🇷🇺",
    timezone: "MSK (UTC+3)",
    details: {
      ping: "5-15 мс (по РФ)",
      uptime: "99.95%",
      serverTypes: ["Выделенные серверы", "VDS", "GPU-серверы", "Хостинг"],
      dataCenters: [
        { name: "DataLine", tier: "Tier III", location: "Москва" },
        { name: "Selectel", tier: "Tier III", location: "Санкт-Петербург" },
        { name: "Rostelecom", tier: "Tier II", location: "Екатеринбург" },
      ],
      networkSpeed: "10 Гбит/с",
      securityFeatures: [
        "Защита от DDoS",
        "VLAN",
        "Антивирус Kaspersky",
        "SSL",
      ],
      compliance: ["ФЗ-152", "ГОСТ Р", "Требования ЦБ РФ"],
      pricing: {
        vps: "от 890 ₽/мес",
        dedicated: "от 4 990 ₽/мес",
        storage: "от 5 ₽/ГБ в месяц",
      },
      bestFor: ["Российский трафик", "Госпроекты", "Финтех", "E-commerce"],
      advantages: [
        {
          label: "Низкий пинг",
          value: "5-15 мс",
          description: "Для пользователей из РФ",
        },
        {
          label: "Поддержка",
          value: "24/7 на русском",
          description: "Техническая и юридическая",
        },
        {
          label: "Соответствие",
          value: "ФЗ-152",
          description: "Защита персональных данных",
        },
        {
          label: "Стоимость",
          value: "Экономичная",
          description: "Лучшее соотношение цена/качество",
        },
      ],
      disadvantages: [
        {
          label: "Международный пинг",
          value: "80-120 мс",
          description: "В Европу",
        },
        {
          label: "Санкции",
          value: "Ограничения",
          description: "Некоторые международные сервисы",
        },
      ],
      recommendedPlan: "Business VDS (4 ядра, 8 ГБ RAM, 100 ГБ SSD)",
    },
  },
  {
    id: 2,
    countryTitle: "Турция",
    countryCapital: "Стамбул",
    img: turkey,
    flagEmoji: "🇹🇷",
    timezone: "TRT (UTC+3)",
    details: {
      ping: "40-60 мс (Европа), 90-110 мс (Россия)",
      uptime: "99.9%",
      serverTypes: ["VPS", "Выделенные серверы", "Реселлер-хостинг"],
      dataCenters: [
        { name: "Turkcell", tier: "Tier III", location: "Стамбул" },
        { name: "Natro", tier: "Tier II", location: "Анкара" },
      ],
      networkSpeed: "5 Гбит/с",
      securityFeatures: ["DDoS защита", "WAF", "Резервное копирование"],
      compliance: ["KVKK", "GDPR совместимость"],
      pricing: {
        vps: "от $12/мес",
        dedicated: "от $85/мес",
        storage: "от $0.07/ГБ в месяц",
      },
      bestFor: ["Европейский трафик", "Туризм", "Торговые площадки", "СМИ"],
      advantages: [
        {
          label: "Геопозиция",
          value: "Мост между Европой и Азией",
          description: "Оптимально для международных проектов",
        },
        {
          label: "Стоимость",
          value: "Дешевле Европы",
          description: "При аналогичном качестве",
        },
        {
          label: "Свобода контента",
          value: "Минимальные ограничения",
          description: "По сравнению с ЕС",
        },
      ],
      disadvantages: [
        {
          label: "Стабильность",
          value: "Возможны перебои",
          description: "В периоды высокой нагрузки",
        },
        {
          label: "Документация",
          value: "Частично на турецком",
          description: "Техническая документация",
        },
      ],
      recommendedPlan: "Pro VPS (2 ядра, 4 ГБ RAM, 80 ГБ NVMe)",
    },
  },
  {
    id: 3,
    countryTitle: "Казахстан",
    countryCapital: "Астана",
    img: kz,
    flagEmoji: "🇰🇿",
    timezone: "ALMT (UTC+6)",
    details: {
      ping: "20-40 мс (СНГ), 70-90 мс (Китай)",
      uptime: "99.93%",
      serverTypes: ["VDS", "Виртуальный хостинг", "1С-хостинг"],
      dataCenters: [
        { name: "KazTransCom", tier: "Tier III", location: "Астана" },
        { name: "Telecom.kz", tier: "Tier II", location: "Алматы" },
      ],
      networkSpeed: "2.5 Гбит/с",
      securityFeatures: ["Базовый DDoS", "VPN", "Межсетевой экран"],
      compliance: ["Законы РК", "Совместимость с ЕАЭС"],
      pricing: {
        vps: "от 6 500 ₸/мес",
        dedicated: "от 45 000 ₸/мес",
        storage: "от 20 ₸/ГБ в месяц",
      },
      bestFor: [
        "Казахстанский рынок",
        "СНГ",
        "Китайские проекты",
        "Бизнес в ЕАЭС",
      ],
      advantages: [
        {
          label: "СНГ + Китай",
          value: "Идеальная связка",
          description: "Низкий пинг в обе стороны",
        },
        {
          label: "Стабильность",
          value: "Политически стабильно",
          description: "Важно для долгосрочных проектов",
        },
        {
          label: "Экономика",
          value: "Низкие налоги",
          description: "Для IT-компаний",
        },
      ],
      disadvantages: [
        {
          label: "Скорость",
          value: "Ниже чем в РФ",
          description: "Международные каналы",
        },
        {
          label: "Выбор",
          value: "Ограниченный",
          description: "Меньше провайдеров",
        },
      ],
      recommendedPlan: "Standard VDS (2 ядра, 4 ГБ RAM, 60 ГБ SSD)",
    },
  },
  {
    id: 4,
    countryTitle: "Сингапур",
    countryCapital: "Сингапур",
    img: sing,
    flagEmoji: "🇸🇬",
    timezone: "SGT (UTC+8)",
    details: {
      ping: "5-30 мс (Азия), 150-180 мс (Европа)",
      uptime: "99.99%",
      serverTypes: ["High-performance VPS", "GPU для AI", "Blockchain ноды"],
      dataCenters: [
        { name: "Equinix SG1", tier: "Tier IV", location: "Сингапур" },
        { name: "Digital Realty", tier: "Tier III+", location: "Сингапур" },
      ],
      networkSpeed: "40 Гбит/с",
      securityFeatures: [
        "Продвинутый DDoS",
        "Zero Trust",
        "Аудит безопасности",
        "KMS",
      ],
      compliance: ["GDPR", "HIPAA", "PCI DSS", "ISO 27001"],
      pricing: {
        vps: "от $25/мес",
        dedicated: "от $200/мес",
        storage: "от $0.10/ГБ в месяц",
      },
      bestFor: [
        "Азиатский рынок",
        "Финтех",
        "Крипто",
        "Высоконагруженные проекты",
      ],
      advantages: [
        {
          label: "Инфраструктура",
          value: "Лучшая в Азии",
          description: "Tier IV дата-центры",
        },
        {
          label: "Скорость",
          value: "Сверхбыстрая",
          description: "40 Гбит/с каналы",
        },
        {
          label: "Безопасность",
          value: "Максимальная",
          description: "Полный compliance пакет",
        },
      ],
      disadvantages: [
        { label: "Стоимость", value: "Высокая", description: "Премиум-цены" },
        {
          label: "Цензура",
          value: "Строгая",
          description: "Жесткие законы о контенте",
        },
      ],
      recommendedPlan: "Enterprise VPS (8 ядер, 16 ГБ RAM, 200 ГБ NVMe)",
    },
  },
  {
    id: 5,
    countryTitle: "ОАЭ",
    countryCapital: "Дубай",
    img: oae,
    flagEmoji: "🇦🇪",
    timezone: "GST (UTC+4)",
    details: {
      ping: "50-70 мс (Ближний Восток), 100-130 мс (Европа)",
      uptime: "99.97%",
      serverTypes: [
        "Enterprise серверы",
        "Облачные решения",
        "Disaster Recovery",
      ],
      dataCenters: [
        {
          name: "Khazna Data Centers",
          tier: "Tier III+",
          location: "Абу-Даби",
        },
        { name: "Dubai Data Center", tier: "Tier III", location: "Дубай" },
      ],
      networkSpeed: "20 Гбит/с",
      securityFeatures: [
        "Военная защита",
        "Биометрический доступ",
        "Двойное шифрование",
      ],
      compliance: ["UAE Laws", "ISO 27001", "Налоговые free zones"],
      pricing: {
        vps: "от $35/мес",
        dedicated: "от $150/мес",
        storage: "от $0.08/ГБ в месяц",
      },
      bestFor: [
        "Ближний Восток",
        "Нефтегаз",
        "Люкс проекты",
        "Корпоративные решения",
      ],
      advantages: [
        {
          label: "Налоги",
          value: "0% для IT",
          description: "В свободных зонах",
        },
        {
          label: "Безопасность",
          value: "Максимальный уровень",
          description: "Государственная защита",
        },
        {
          label: "Стабильность",
          value: "Абсолютная",
          description: "Политически и экономически",
        },
      ],
      disadvantages: [
        {
          label: "Контент",
          value: "Строгие законы",
          description: "Религиозные ограничения",
        },
        {
          label: "Стоимость",
          value: "Выше среднего",
          description: "Премиум-локация",
        },
      ],
      recommendedPlan:
        "Corporate Dedicated (12 ядер, 32 ГБ RAM, 2×500 ГБ SSD RAID)",
    },
  },
];

// Вспомогательные функции для работы с конфигом
export const getCountryById = (id: number) =>
  countryConfig.find((country) => country.id === id);

export const getCountriesByRegion = (
  region: "europe" | "asia" | "middle-east" | "cis",
) => {
  const regions = {
    cis: [1, 3], // Россия, Казахстан
    "middle-east": [2, 5], // Турция, ОАЭ
    asia: [4], // Сингапур
    europe: [2], // Турция (частично)
  };

  return countryConfig.filter((country) =>
    regions[region].includes(country.id),
  );
};

// Типы для фильтрации
export type ServerType =
  | "vps"
  | "dedicated"
  | "gpu"
  | "hosting"
  | "enterprise"
  | "cloud";

export const filterByServerType = (type: ServerType) => {
  return countryConfig.filter((country) =>
    country.details.serverTypes.some((serverType) =>
      serverType.toLowerCase().includes(type.toLowerCase()),
    ),
  );
};
