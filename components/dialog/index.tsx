import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Index = ({ visible, onCancel, children }) => (
  <Transition appear show={visible} as="div">
    <Dialog as="div" onClose={() => onCancel?.()} className="fixed  inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen text-center xl:mr-15">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20 dark:bg-slate-900 dark:bg-opacity-80 backdrop-blur-sm" />
        </Transition.Child>
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className="transition-all transform bg-white dark:bg-slate-800 shadow-xl
              inline-block text-left align-middle rounded-2xl"
          >
            {children}
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

export default Index;
