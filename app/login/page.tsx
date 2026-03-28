import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Log In — JobFlow",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your JobFlow account"
      footerText="Don't have an account?"
      footerLinkText="Sign up free"
      footerLinkHref="/signup"
    >
      <LoginForm />
    </AuthLayout>
  );
}
