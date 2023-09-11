import { EditProfile } from '../../components/auth/edit-profile/edit-profile.tsx'
import { useMeQuery } from '../../services/auth/auth.api.ts'

export const Profile = () => {
  const { data } = useMeQuery()

  return <EditProfile data={data} />
}
