import { Drawer } from "antd";

type Props = {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  onClose: () => void;
  title: string;
};

export default function UserInfoEditDrawer({
  children,
  open,
  onClose,
  title,
}: Props) {
  return (
    <Drawer open={open} onClose={onClose} title={title}>
      {children}
    </Drawer>
  );
}
