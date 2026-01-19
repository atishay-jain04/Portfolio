📄 Product Requirements Document (PRD)
Personal Portfolio Website – Atishay Jain
1. Project Overview

Project Name: Atishay Jain – Personal Portfolio
Goal: Develop a modern, animated, and responsive portfolio website to showcase full-stack development skills, projects, resume, and contact details through a visually appealing UI.

The website serves as an interactive alternative to traditional resumes, helping recruiters and collaborators quickly understand Atishay’s technical and design abilities.

2. Problem Statement

Recruiters rely on static resumes that fail to demonstrate interactive skills, UI expertise, or real project experiences.
This portfolio solves that by offering:

A dynamic, interactive showcase of skills and projects.

A visual demonstration of React, Tailwind, and animation abilities.

A single, frictionless place to view demos, resume, and contact details.

3. Objectives

Present a strong identity as a Full-Stack Developer & AIML Enthusiast.

Build a clean, modern, animated, and responsive UI.

Implement Framer Motion animations throughout the site.

Add light/dark theme toggle with persistence (localStorage).

Ensure 100% responsiveness across mobile, tablet, and desktop.

4. Project Phases
Phase 1 – Setup & Foundation

Tech: React (Vite), Tailwind CSS, Framer Motion
Tasks:

Initialize project (Vite + React)

Configure Tailwind (fonts, colors, theme settings)

Add utils:

theme.js → theme persistence

motionVariants.js → shared animations
Deliverables:

Base project running

File structure created


Phase 2 – Core UI & Components

Tasks:

Floating Glassmorphic Navbar (centered island-style)

Theme Toggle component

Reusable Components:

ProjectCard

TechBadge

Footer

Responsive layout structure
Deliverables:

Complete navbar

Component library

App layout foundational UI

Phase 3 – Content Sections

Sections to Build:

Hero Section: intro text, animated avatar, CTAs

About Section: bio + description

Tech Stack Section: categorized badges

Projects Section: grid using ProjectCard

Resume Section: preview + download button

Contact Section: email + socials
Deliverables:

Fully implemented page sections

Smooth animations: fade, slide, hover-tilt, stagger

Phase 4 – Optimization & Deployment

Tasks:

Image optimization & lazy loading

Accessibility improvements (ARIA, contrast)

Cross-browser testing

Deploy to Vercel
Deliverables:

Live, optimized portfolio website

High Lighthouse scores

Final README.md

5. Core Features Summary
Feature	Description
Floating Island Navbar	Glassmorphic, centered, animated
Hero Section	Animated avatar + call-to-action buttons
About Me	Clean bio with subtle animations
Tech Stack	Categorized skills with hover effects
Projects	Interactive project cards with tilt effects
Resume Section	Resume preview + download
Contact Section	Contact details + social icons
Theme Toggle	Persistent light/dark mode
Framer Motion Animations	Throughout the website
Responsive UI	Mobile, tablet, and desktop
6. Tech Stack Overview
Component	Technology
Frontend	React (Vite) + JavaScript
Styling	Tailwind CSS
Animations	Framer Motion
Deployment	Vercel
Version Control	Git + GitHub
Fonts	Inter, Sora
Design	Custom color palette
7. User Roles
Primary User – Recruiter

Quickly understands skills

Views project demos

Downloads resume

Accesses contact/socials

Secondary User – Developer / Collaborator

Evaluates UI/UX quality

Visits GitHub repos

Reviews code philosophy