import React, { useState } from "react";
import { Overlay } from '../components/overlay/Overlay';

export function Home() {

const [isOpen, setIsOpen] = useState(false);

const handleOpen = () => {
setIsOpen(true);
};

const handleClose = () => {
setIsOpen(false);
};
    return (
        <>
        <section className="OverlayPage">
      <button onClick={handleOpen}>Home</button>
      <Overlay isActive={isOpen} onClick={handleClose} />
    </section>
        </>
    )
}