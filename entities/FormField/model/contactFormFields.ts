import type { IFormField } from "../types/IFormField";

export const contactFormFields: IFormField[] = [
  {
    id: "name",
    name: "name",
    label: "Ваше имя",
    type: "text",
    placeholder: "Введите имя",
    required: true,
  },
  {
    id: "phone",
    name: "phone",
    label: "Ваш номер",
    type: "text",
    required: true,
  },
  {
    id: "question",
    name: "question",
    label: "Ваш вопрос",
    type: "textarea",
  },
  {
    id: "file",
    name: "file",
    label: "",
    type: "file",
  },
  {
    id: "agreePolicy",
    name: "agreePolicy",
    label:
      "Я даю согласие на обработку персональных данных в соответствии с политикой конфиденциальности",
    type: "checkbox",
    required: true,
  },
];
