import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    console.log('🚀 ~ file: ContactUsForm.tsx:33 ~ onSubmit ~ data', data);
  };

  return (
    <form
      className="mx-auto mb-10 w-[300px] bg-customLightGray md:w-[500px] lg:w-[500px]"
      autoComplete="off"
      id="form-login"
      aria-label="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="my-4 flex flex-col">
        <label className="required text-customNeutral200 text-sm" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className="mt-1 flex-grow rounded-[2px] border border-customNeutral500 bg-customLightGray p-2 text-base leading-normal placeholder-customNeutral700 focus:border-customNeutral800 focus:outline-none"
          type="name"
          placeholder={'Insert your name' || ''}
          {...register('name', {
            required: 'Name is required',
          })}
        />
        {errors.name && (
          <div className="form-error">
            <span className="text-customError" role="alert">
              {errors.name.message}
            </span>
          </div>
        )}
      </div>
      <div className="my-4 flex flex-col">
        <label className="required text-customNeutral200 text-sm" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="mt-1 flex-grow rounded-[2px] border border-customNeutral500 bg-customLightGray p-2 text-base leading-normal placeholder-customNeutral700 focus:border-customNeutral800 focus:outline-none"
          type="email"
          placeholder={'Insert your email' || ''}
          {...register('email', {
            required: 'Email is required' || '',
            pattern: {
              value:
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message: 'Not valid email' || '',
            },
          })}
        />
        {errors.email && (
          <div className="form-error">
            <span className="text-customError" role="alert">
              {errors.email.message}
            </span>
          </div>
        )}
      </div>
      <div className="my-4 flex flex-col">
        <label className="required text-customNeutral200 text-sm" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          className="mt-1 flex-grow rounded-[2px] border border-customNeutral500 bg-customLightGray p-2 text-base leading-normal placeholder-customNeutral700 focus:border-customNeutral800 focus:outline-none"
          type="subject"
          placeholder={'Insert the subject' || ''}
          {...register('subject', {
            required: 'Subject is required' || '',
          })}
        />
        {errors.subject && (
          <div className="form-error">
            <span className="text-customError" role="alert">
              {errors.subject.message}
            </span>
          </div>
        )}
      </div>
      <div className="my-4 flex flex-col">
        <label className="required text-customNeutral200 text-sm" htmlFor="message">
          Message
        </label>
        <input
          id="message"
          className="mt-1 flex-grow rounded-[2px] border border-customNeutral500 bg-customLightGray p-2 text-base leading-normal placeholder-customNeutral700 focus:border-customNeutral800 focus:outline-none"
          type="message"
          placeholder={'Insert your message' || ''}
          {...register('message', {
            required: 'Message is required' || '',
          })}
        />
        {errors.message && (
          <div className="form-error">
            <span className="text-customError" role="alert">
              {errors.message.message}
            </span>
          </div>
        )}
      </div>
      <button
        className="mt-10 w-full bg-blue-300 p-3 text-xl font-semibold text-white"
        type="submit"
        disabled={isSubmitting || !isDirty || !isValid}
      >
        Send
      </button>
    </form>
  );
};

export default ContactUsForm;
