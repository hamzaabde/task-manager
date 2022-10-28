import { useReducer } from "react";

import type { Task, TaskColumn } from "../types/data-types";

import { dataReducer } from "./data-reducers";

export default function useDataContext() {
  const [state, dispatch] = useReducer(dataReducer, []);

  return [state, dispatch];
}
