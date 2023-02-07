import { useState } from "react";
import { Listbox as HUIListBox, Transition } from "@headlessui/react";

export type option = {
  id: string | number;
  name: string;
  value: string | number;
};

type props = {
  label: string;
  className?: string;
  options: Array<option>;
};

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

const OPT_ACTIVE_CLASS = "bg-gray-100 text-gray-600 ring-gray-300/50 ring-1";
const OPT_SELECTED_CLASS = "bg-gray-200 text-gray-700 ring-gray-400/50 ring-1";

export default function ListBox({ label, options }: props) {
  const [selected, setSelected] = useState<option>(options[0]);

  return (
    <HUIListBox
      value={selected}
      onChange={setSelected}
    >
      {({ open }) => (
        <div className='form-control relative'>
          <HUIListBox.Label className='label font-semibold capitalize text-gray-500'>
            {label}
          </HUIListBox.Label>
          <HUIListBox.Button className='select-bordered select block text-left'>
            {selected.name}
          </HUIListBox.Button>

          <Transition
            show={open}
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <HUIListBox.Options
              as='ul'
              className='absolute top-full mt-2 flex w-full flex-col gap-2 rounded-lg border bg-gray-50 p-2 focus-within:outline-primary-focus focus-within:outline focus:outline-primary-focus focus:outline'
            >
              {options.map((selectedOption) => (
                <HUIListBox.Option
                  key={selectedOption.id}
                  value={selectedOption}
                >
                  {({ active, selected }) => (
                    <div
                      className={`
                        cursor-pointer rounded-lg p-2 text-sm font-semibold transition-all
                        ${(selected || active) && OPT_SELECTED_CLASS}
                        ${active && !selected && OPT_ACTIVE_CLASS}
                    `}
                    >
                      {selectedOption.name}
                    </div>
                  )}
                </HUIListBox.Option>
              ))}
            </HUIListBox.Options>
          </Transition>
        </div>
      )}
    </HUIListBox>
  );
}
