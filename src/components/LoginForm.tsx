import { Stack, TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Parse from "parse/dist/parse.min.js";
export const ZLoginForm = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});

export const LoginForm: React.FC = () => {
  const loginForm = useForm<z.infer<typeof ZLoginForm>>({
    resolver: zodResolver(ZLoginForm),
  });

  return (
    <form
      onSubmit={loginForm.handleSubmit(async (data) => {
        const user = new Parse.User();
        user.set("username", data.email);

        user.set("password", data.password);
        user.set("email", data.email);

        try {
          await user.signUp();
          console.log(user)
          alert("signup success")

        } catch (error) {
          console.log(error);
        }
      })}
    >
      <Typography variant="h5">Login Form</Typography>

      <TextField
        label="Email"
        {...loginForm.register("email")}
        variant="outlined"
        error={!!loginForm.formState.errors.email}
        helperText={loginForm.formState.errors.email?.message}
        fullWidth
        margin="dense"
      ></TextField>

      <TextField
        label="Password"
        {...loginForm.register("password")}
        variant="outlined"
        type="password"
        error={!!loginForm.formState.errors.password}
        helperText={loginForm.formState.errors.password?.message}
        fullWidth
        margin="normal"
      ></TextField>

      <Button fullWidth color="primary" type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};
