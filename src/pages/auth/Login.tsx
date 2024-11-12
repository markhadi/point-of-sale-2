import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginSchema, type LoginSchema } from '@/lib/schemas/auth';
import bgLogin from '@/assets/images/bg-login.png';
import logo from '@/assets/images/logo-login.png';

/**
 * Styles object containing Tailwind CSS classes for Login page components
 * @constant
 */
const styles = {
  // Layout
  pageWrapper: 'relative min-h-screen flex items-center justify-center p-4',

  // Card
  loginCard: 'relative z-10 bg-white w-full max-w-[487px] p-10 space-y-7 rounded-[20px]',

  // Logo Section
  logoSection: 'text-center space-y-2',
  logoImage: 'w-[88px] mx-auto',
  brandName: 'font-bold text-[27.39px] text-[#252525] font-poppins',
  brandSpan: 'text-[#818181]',
  brandTagline: 'text-[12.17px] text-[#252525] font-poppins -mt-2 pb-[46px] tracking-[0.16em]',

  // Form
  formWrapper: 'space-y-7',

  // Form Elements
  label: 'text-[#252525] text-[16px] font-normal font-roboto leading-[1.2em]',
  input: 'text-[#252525] text-[16px] font-normal font-roboto h-12 p-[10px] rounded-[8px]',

  // Button
  submitButton: 'w-full bg-[#1E293B] hover:bg-[#1E293B]/90 rounded-[8px] font-normal font-roboto text-[16px] text-[#fff] h-12 leading-[1.2em]',
} as const;

/**
 * Login page component
 * Handles user authentication through a form interface
 */
const Login = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginSchema) => {
    console.log(values);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgLogin})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" />
      </div>

      {/* Login Card */}
      <div className={styles.loginCard}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <img
            src={logo}
            alt="logo"
            className={styles.logoImage}
          />
          <div>
            <h1 className={styles.brandName}>
              <span className={styles.brandSpan}>BLANK</span>SYS
            </h1>
            <p className={styles.brandTagline}>Point of Sales</p>
          </div>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={styles.formWrapper}
          >
            <FormFields form={form} />
            <SubmitButton isSubmitting={form.formState.isSubmitting} />
          </form>
        </Form>
      </div>
    </div>
  );
};

/**
 * Form fields component for login form
 * @param {Object} props - Component props
 * @param {UseFormReturn<LoginSchema>} props.form - React Hook Form instance
 */
const FormFields = ({ form }: { form: UseFormReturn<LoginSchema> }) => {
  /** Configuration for form fields */
  const fields = [
    {
      name: 'username' as const,
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
    },
    {
      name: 'password' as const,
      label: 'Password',
      type: 'password',
      placeholder: '••••••••',
    },
  ];

  return (
    <>
      {fields.map(field => (
        <FormField
          key={field.name}
          control={form.control}
          name={field.name}
          render={({ field: fieldProps }) => (
            <FormItem className="space-y-1">
              <FormLabel className={styles.label}>{field.label}</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type={field.type}
                  className={styles.input}
                  placeholder={field.placeholder}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
};

/**
 * Submit button component for login form
 * @param {Object} props - Component props
 * @param {boolean} props.isSubmitting - Form submission status
 */
const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <Button
    type="submit"
    className={styles.submitButton}
    disabled={isSubmitting}
  >
    {isSubmitting ? 'Signing in...' : 'Sign in'}
  </Button>
);

export default Login;
