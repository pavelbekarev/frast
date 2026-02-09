import type { ISubmitData } from "~/entities/SubmitData/types/ISubmitData";
import type { ContactFormValues } from "../types/IContactFormValues";

export function useFeedbackForm() {
  const submitContactForm = async (data: ISubmitData<ContactFormValues>) => {
    console.debug("На сервер отправлены данные: ", data);
  };

  function onSubmit(values: Record<string, unknown>) {
    const submitData: ISubmitData<ContactFormValues> = {
      submitId: 1,
      values: values as ContactFormValues,
    };

    submitContactForm(submitData);
  }

  return {
    onSubmit,
  };
}
