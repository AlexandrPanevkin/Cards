import { z } from 'zod'

export const signInScheme = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3),
  rememberMe: z.boolean(),
})
