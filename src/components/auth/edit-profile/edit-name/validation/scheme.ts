import { z } from 'zod'

export const nickNameScheme = z.object({
  nickname: z.string().trim().min(2).nonempty(),
})
