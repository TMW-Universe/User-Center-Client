import { Drawer, DrawerProps } from "antd";

type Props = DrawerProps;

export default function ManagedDrawer(props: Props) {
  return <Drawer {...props} />;
}
