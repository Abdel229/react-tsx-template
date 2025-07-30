import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { usePosts } from '../hooks/usePosts';
import { useTranslation } from 'react-i18next';
import { 
  Spinner, 
  Card, 
  Button, 
  Modal, 
  Input, 
  Textarea, 
  Checkbox, 
  RadioGroup, 
  Select 
} from '../components';

// Define the validation schema with Zod
const formSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  country: z.string().min(1, "Please select a country"),
  notification: z.enum(['email', 'sms']).refine(val => val !== undefined, { message: "Please choose a notification method" }),
  message: z.string().optional(),
  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
});

type FormData = z.infer<typeof formSchema>;

/**
 * Home page of the application.
 * Displays a list of posts and a demonstration form in a modal.
 *
 * @returns {JSX.Element} The home page.
 */
const HomePage = () => {
  const { t } = useTranslation();
  const { data: posts, isLoading } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  /**
   * Handles the submission of the demonstration form.
   * @param {FormData} data The validated form data.
   */
  const onSubmit = (data: FormData) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
    setIsModalOpen(false);
  };

  const countryOptions = [
    { value: '', label: t('select_country_placeholder') }, // Default option
    { value: 'fr', label: t('france_option') },
    { value: 'ca', label: t('canada_option') },
    { value: 'us', label: t('usa_option') },
  ];

  const notificationOptions = [
    { value: 'email', label: t('email_option') },
    { value: 'sms', label: t('sms_option') },
  ];

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">{t('welcome_message')}</h1>
        <Button onClick={() => setIsModalOpen(true)}>{t('open_form_button')}</Button>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={t('form_title')}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input 
            label={t('email_label')}
            id="email"
            type="email"
            placeholder={t('email_placeholder')}
            {...register('email')}
            error={errors.email?.message}
          />
          <Input 
            label={t('password_label')}
            id="password"
            type="password"
            placeholder={t('password_placeholder')}
            {...register('password')}
            error={errors.password?.message}
          />
          <Select 
            label={t('country_label')}
            id="country"
            options={countryOptions}
            {...register('country')}
            error={errors.country?.message}
          />
          <RadioGroup 
            label={t('notification_method_label')}
            options={notificationOptions}
            {...register('notification')}
          />
          {errors.notification && <p className="text-sm text-red-600">{errors.notification.message}</p>}
          
          <Textarea 
            label={t('message_label')}
            id="message"
            placeholder={t('message_placeholder')}
            {...register('message')}
          />
          <Checkbox 
            label={t('terms_checkbox')}
            id="terms"
            {...register('terms')}
          />
          {errors.terms && <p className="text-sm text-red-600">{errors.terms.message}</p>}

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>{t('cancel_button')}</Button>
            <Button type="submit">{t('submit_button')}</Button>
          </div>
        </form>
      </Modal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {posts?.map((post) => ( */}
          <Card>
            <h2 className="text-2xl font-bold mb-2 text-blue-600">ok</h2>
            <p className="text-gray-700">ok</p>
          </Card>
        {/* ))} */}
      </div>
    </div>
  );
};

export default HomePage;