import { PublicHeader } from "@/components/public-header";
import banner from "@/assets/banner.png";
import { LoginForm } from "@/components/login-form";

function Login() {
  return (
    <div className="min-h-svh flex flex-col">
      <PublicHeader />
      <div className="flex-1 grid lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <img
            src={banner}
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
