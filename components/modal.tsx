"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Children, Fragment, useState } from "react";
interface ModalProps {
    open: boolean;
    onToggle: () => void;
    title?: string;
    setRoute: (route: string) => void;
    children: React.ReactNode
}
export const Modal: React.FC<ModalProps> = ({
    open,
    onToggle,
    title,
    setRoute,
    children
}) => {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10 dark:bg-slate-900"
                onClose={onToggle}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto ">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-blue-100 bg-orange-100 p-6 text-left align-middle shadow-xl transition-all ">
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl font-bold text-center leading-6 text-white font-Poppins "
                                >
                                    {title}
                                </Dialog.Title>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
