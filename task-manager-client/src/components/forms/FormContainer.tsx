import type { ReactElement, SyntheticEvent } from "react";
import type { IChildrenProp } from "../../types/prop-types";

type props = {
  submit: (event: SyntheticEvent, data: Record<string, any>) => void;
};

export default function FormContainer(): ReactElement {
  return <form></form>;
}
