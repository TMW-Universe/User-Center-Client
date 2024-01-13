import ManagedDrawer from "../../../common/ui/drawer/managed-drawer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function UserInfoEditDrawer({ children }: Props) {
  return <ManagedDrawer>{children}</ManagedDrawer>;
}
