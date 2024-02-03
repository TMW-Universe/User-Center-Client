import { useMutation } from "react-query";
import { useAuthenticatedRequest } from "../../../networking/use-authenticated-request";

interface EditUserProfileBirthdateDTO {
  birthdate: Date;
}

export function useEditUserBirthdate() {
  const { request } = useAuthenticatedRequest();

  return useMutation({
    mutationFn: async (data: EditUserProfileBirthdateDTO) =>
      await request({
        url: `${import.meta.env.VITE_AUTH_HOST}/api/users/profile/birthdate`,
        method: "put",
        data,
      }),
    mutationKey: ["users", "profile", "birthdate"],
  });
}
