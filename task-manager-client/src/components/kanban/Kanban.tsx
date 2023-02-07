import React from "react";

import Columns from "../column/Columns";
import AddColumnBtn from "../column/AddColumn";

export default function Kanban(): React.ReactElement {
  return (
    <main className='flex grow overflow-auto p-4 pb-2 scrollbar-hide'>
      <div className='flex flex-nowrap gap-8 self-stretch'>
        <Columns />
        <AddColumnBtn />
      </div>
    </main>
  );
}
