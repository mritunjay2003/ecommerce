import { headerMiddleList } from "../../../utils/constants";
import styles from "./styles";

const helpOptions = [
  {
    name: "Payment Options",
  },
  { name: "returns" },
  { name: "Privacy Policies" },
];

const FooterList = [
  {
    name: "Online Shopping",
    props: {
      sx: styles.appName,
    },
    menu: [
      {
        name: "USA",
        props: {
          sx: styles.title,
        },
      },
    ],
  },
  {
    name: "Links",
    props: {
      sx: styles.title,
    },
    menu: headerMiddleList,
  },
  {
    name: "Help",
    props: {
      sx: {
        color: styles.title,
      },
    },

    menu: helpOptions,
  },
];

export { FooterList };
