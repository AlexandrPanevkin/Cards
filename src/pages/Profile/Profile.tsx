import { EditProfile } from '../../components/auth/edit-profile/edit-profile.tsx'
import { useMeQuery, useUpdateMeMutation } from '../../services/auth/auth.api.ts'

export const Profile = () => {
  const { data } = useMeQuery()
  const [updateMe] = useUpdateMeMutation()
  const replaceAvatar = (data: string | Blob) => {
    const form = new FormData()

    form.append('avatar', data)
    updateMe(form)
  }

  return <EditProfile replaceAvatar={replaceAvatar} data={data} />
}
