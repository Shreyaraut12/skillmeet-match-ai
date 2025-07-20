import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, Globe, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
import { RadioGroup } from "@/components/ui/radio-group";

const SignUp = () => {
  const form = useForm({
    defaultValues: { name: '', email: '', password: '', confirmPassword: '', role: '' },
    mode: 'onTouched'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data: { name: string; email: string; password: string; confirmPassword: string; role: string }) => {
    if (data.password !== data.confirmPassword) {
      form.setError('confirmPassword', { type: 'manual', message: 'Passwords do not match' });
      return;
    }
    localStorage.setItem('userName', data.name);
    setSuccess(true);
    setTimeout(() => {
      if (data.role === 'student') {
        navigate('/student-dashboard');
      } else if (data.role === 'startup') {
        navigate('/startup-dashboard');
      }
    }, 2000);
  };
  const handleGoogleSignIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Signed in as: ${user.email}`);
    } catch (error) {
      alert("Google sign-in failed");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#eef2fb] to-[#e6ecf7] py-8">
      {/* Logo and App Name */}
      <div className="flex flex-col items-center mb-6">
        <Link to="/" className="flex flex-col items-center group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Globe className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold text-indigo-500 group-hover:text-indigo-600">SkillMatch</span>
        </Link>
        <span className="text-muted-foreground mt-1">Find your next startup opportunity</span>
      </div>
      {/* Card */}
      <Card className="w-full max-w-md shadow-glow">
        <CardHeader className="text-center">
          <CardTitle className="mb-2 text-2xl">Welcome</CardTitle>
          <CardDescription className="mb-4">Create your account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField name="name" control={form.control} rules={{ required: 'Full name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input type="text" placeholder="Enter your full name" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField name="email" control={form.control} rules={{ required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input type="email" placeholder="Enter your email" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField name="password" control={form.control} rules={{ required: 'Password is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input type={showPassword ? 'text' : 'password'} placeholder="Create a password" className="pl-10 pr-10" {...field} />
                        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" onClick={() => setShowPassword(v => !v)} tabIndex={-1}>
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField name="confirmPassword" control={form.control} rules={{ required: 'Please confirm your password' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input type={showPassword ? 'text' : 'password'} placeholder="Confirm your password" className="pl-10 pr-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField name="role" control={form.control} rules={{ required: 'Please select a role' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Register as</FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="flex flex-row gap-4"
                      >
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" value="student" checked={field.value === 'student'} onChange={() => field.onChange('student')} className="accent-indigo-500" />
                          Student
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" value="startup" checked={field.value === 'startup'} onChange={() => field.onChange('startup')} className="accent-indigo-500" />
                          Startup
                        </label>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end -mt-2 mb-2">
                <Link to="#" className="text-indigo-500 text-sm hover:underline">Forgot password?</Link>
              </div>
              <Button type="submit" className="w-full" variant="gradient">Create Account</Button>
            </form>
          </Form>
          {success && (
            <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded text-green-800 text-center">
              Successfully signed in! Redirecting to dashboard...
            </div>
          )}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-muted" />
            <span className="mx-3 text-muted-foreground text-sm">Or continue with</span>
            <div className="flex-1 h-px bg-muted" />
          </div>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 mb-2" onClick={handleGoogleSignIn}>
            <Globe className="w-5 h-5" /> Google
          </Button>
          <div className="text-center text-sm mt-2 text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/sign-up" className="text-indigo-600 hover:underline">Sign up</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp; 