import { z } from 'zod'

export const forgotPasswordScheme = z.object({
  email: z.string().nonempty('Enter email').email({ message: 'Invalid email address' }),
})
