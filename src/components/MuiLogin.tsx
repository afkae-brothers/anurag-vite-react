import { Stack, TextField, Typography, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import {zodResolver } from '@hookform/resolvers/zod';

export const MuiLogin = () => {
    type FormData = {
        email: string,
        password: string
    }
    
    const UserSchema: ZodType<FormData> = z.object({
        email: z.string().email("Invalid email").min(1, "Email is required"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must have more than 8 characters"),
    });
    
    const { register, handleSubmit, formState:{errors} } = useForm<FormData>({ resolver: zodResolver(UserSchema) });

    const submitData = (data: FormData) => {
        console.log(data);
        console.log("Validation Worked")
    }

    return (
        <form onSubmit={handleSubmit(submitData)}>
            
            
            <Stack spacing={4}>

                <Stack direction='column' spacing={2}>
                    <Typography variant='h5'>Login Form</Typography>

                    <TextField label='Email' {...register("email")} variant='outlined' style={{ width: "300px"}}></TextField>

                    {errors.email && <span style={{margin: "5px" }}>{errors.email.message}</span>}

                    <TextField label='Password' {...register("password")} variant='outlined' type='password' style={{ width: "300px"}}></TextField>

                    {errors.password && <span style={{ margin: "5px" }}>{errors.password.message}</span>}

                    <Button color='primary' type="submit" variant='contained'>Login</Button>
                </Stack>

            </Stack>
        </form >
    )
}
