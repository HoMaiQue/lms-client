"use client";
import { Header } from "@/components/header";
import Heading from "@/components/heading";
import React, { useState } from "react";
import { Hero } from "./_component/hero";

const HomePage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    return (
        <div>
            <Heading
                title="ELearning"
                keywords="Programming, MERN, Redux, "
                description="ELearning is a platform for students to learn and get help from teacher"
            />

            <Header  activeItem={activeItem} />
            <Hero />

        </div>
    );
};

export default HomePage;
