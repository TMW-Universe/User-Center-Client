import { useMutation } from "react-query";
import { useAuthenticatedRequest } from "../../../networking/use-authenticated-request";

interface EditUserProfileNameDTO {
  name: string;
  firstSurname: string;
  secondSurname: string;
}

export function useEditUserName() {
  const { request } = useAuthenticatedRequest();

  return useMutation({
    mutationFn: async (data: EditUserProfileNameDTO) =>
      await request({
        url: `${import.meta.env.VITE_AUTH_HOST}/users/profile/name`,
        method: "put",
        data,
      }),
    mutationKey: ["users", "profile", "name"],
  });
}
