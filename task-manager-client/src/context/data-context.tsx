import type { ReactElement } from "react";
import type { ITaskColumn } from "../types/data-types";

import { createContext } from "react";

export const DataContext = createContext<ITaskColumn[]>([]);

export function DateProvider(): ReactElement {
  return <></>;
}
