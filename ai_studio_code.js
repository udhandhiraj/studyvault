/**
 * STUDYVAULT — Comprehensive Pure Vanilla JavaScript Application Core
 * Single Page Architecture, Client Router, LocalStorage State Management,
 * Mock Purchase Engine, Admin CRUD, and Seed Data.
 */

// ==========================================
// 1. Initial Mock / Seed Data
// ==========================================
const SEED_PRODUCTS = [
  {
    id: "sv-101",
    title: "CS 161: Complete Algorithms & Data Structures Blueprint",
    category: "Computer Science",
    author: "Elena Rostova (MIT '24)",
    price: 18.99,
    rating: 4.9,
    reviewsCount: 128,
    pages: 142,
    badge: "Bestseller",
    format: "PDF (Vector Searchable)",
    description: "Battle-tested visual outlines, Big-O cheat sheets, Dijkstra, Dynamic Programming memoization tables, and LeetCode pattern breakdowns that helped 400+ students ace tech rounds.",
    toc: [
      "Asymptotic Analysis & Master Theorem",
      "Trees, AVL Rotations & Red-Black Trees",
      "Graph Traversal (BFS, DFS, Dijkstra, A*)",
      "Dynamic Programming: 14 Foundational Patterns",
      "Greedy Algorithms & Divide and Conquer"
    ]
  },
  {
    id: "sv-102",
    title: "USMLE Step 1: High-Yield Organ Systems & Pharmacology Map",
    category: "Medicine",
    author: "Dr. Marcus Thorne (Johns Hopkins)",
    price: 29.50,
    rating: 5.0,
    reviewsCount: 215,
    pages: 260,
    badge: "Top Rated",
    format: "GoodNotes / Notability Pack",
    description: "High-yield pathology slides, autonomic pharmacology mechanisms, renal physiology flowcharts, and rapid mnemonics curated specifically for boards prep.",
    toc: [
      "Autonomic Nervous System Drug Matrix",
      "Cardiovascular Pathology & Murmur Guides",
      "Renal Electrolyte & Acid-Base Flowcharts",
      "Hematology & Oncology Diagnostic Cascades",
      "Microbiology Gram-Positive/Negative Flow Charts"
    ]
  },
  {
    id: "sv-103",
    title: "Constitutional Law & 1L Civil Procedure Master Outlines",
    category: "Law",
    author: "Sarah Sterling (Harvard Law '23)",
    price: 24.00,
    rating: 4.8,
    reviewsCount: 94,
    pages: 195,
    badge: "High Yield",
    format: "LaTeX + PDF Bundle",
    description: "Exhaustive legal outlines organized for open-book exams. Includes doctrine rule matrices, landmark Supreme Court case holdings, and CivPro jurisdictional flowcharts.",
    toc: [
      "Personal Jurisdiction & Subject Matter Jurisdiction",
      "The Erie Doctrine Step-by-Step Matrix",
      "Commerce Clause & Separation of Powers",
      "Due Process & Equal Protection Standards",
      "First Amendment Speech & Religion Clauses"
    ]
  },
  {
    id: "sv-104",
    title: "Multivariable Calculus & Differential Equations Visual Deck",
    category: "Mathematics",
    author: "Prof. Leo Chen (Caltech)",
    price: 14.99,
    rating: 4.9,
    reviewsCount: 88,
    pages: 82,
    badge: "Visual Notes",
    format: "PDF (Vector Searchable)",
    description: "Full color 3D vector calculus projections, Green's & Stokes' Theorems explained intuitively, and differential equation Laplace transform lookups.",
    toc: [
      "Double and Triple Integrals in Cylindrical/Spherical",
      "Vector Fields, Gradient, Divergence, and Curl",
      "Line & Surface Integrals Illustrated",
      "Green's, Stokes', and Divergence Theorems",
      "Second-Order Linear ODEs & Laplace Transforms"
    ]
  },
  {
    id: "sv-105",
    title: "Corporate Finance & DCF Financial Modeling Handbook",
    category: "Business",
    author: "Julian Vance (Wharton / ex-Goldman)",
    price: 22.50,
    rating: 4.7,
    reviewsCount: 76,
    pages: 120,
    badge: "Career Ready",
    format: "PDF + Excel Templates",
    description: "Walks through discount rate derivations (WACC, CAPM), 3-statement modeling bridges, LBO transaction math, and valuation comps with sample corporate case studies.",
    toc: [
      "3-Statement Integrated Linkage Formulas",
      "WACC, Cost of Equity & Terminal Value Calculations",
      "Discounted Cash Flow (DCF) Step-by-Step",
      "Comparable Company & Precedent Transaction Analysis",
      "LBO Capital Structure & Returns Sensitivity Tables"
    ]
  },
  {
    id: "sv-106",
    title: "Organic Chemistry II: Complete Reaction Mechanisms Map",
    category: "Chemistry",
    author: "Amina Al-Mansoor (Oxford '22)",
    price: 16.00,
    rating: 4.9,
    reviewsCount: 162,
    pages: 94,
    badge: "Exam Cram",
    format: "PDF (Vector Searchable)",
    description: "Color-coded arrow-pushing mechanisms for carbonyl additions, enolate chemistry, Diels-Alder stereochemistry, and multi-step retrosynthesis strategies.",
    toc: [
      "Aldol, Claisen, and Michael Reaction Mechanisms",
      "Aromatic Substitution (EAS & NAS) Selectivity",
      "Stereochemistry in Pericyclic Reactions",
      "NMR & IR Spectroscopy Quick Identification Keys",
      "30 Practical Retrosynthesis Exam Problem Solutions"
    ]
  },
  {
    id: "sv-107",
    title: "Cognitive Neuroscience & Behavioral Systems Compendium",
    category: "Psychology",
    author: "Dr. Rachel Bloom (Columbia)",
    price: 17.50,
    rating: 4.6,
    reviewsCount: 49,
    pages: 110,
    badge: "Updated 2025",
    format: "PDF (Vector Searchable)",
    description: "Detailed neural anatomy diagrams, synaptic plasticity models, neuroimaging techniques (fMRI, EEG), and cognitive disorder pathologies.",
    toc: [
      "Action Potential Mechanics & Neurotransmitter Systems",
      "Visual and Auditory Processing Pathways",
      "Memory Systems: Hippocampus, LTP, and Encoding",
      "Executive Function and Prefrontal Cortex Networks",
      "Neurological & Psychiatric Case Dissections"
    ]
  },
  {
    id: "sv-108",
    title: "Thermodynamics & Fluid Dynamics Principles Crash Deck",
    category: "Engineering",
    author: "Marcus Vance, PE (Purdue)",
    price: 15.00,
    rating: 4.8,
    reviewsCount: 63,
    pages: 88,
    badge: "FE Exam Prep",
    format: "PDF (Vector Searchable)",
    description: "Rankine, Carnot, and Brayton cycle state points, Navier-Stokes simplified equation sheets, and Bernoulli head-loss calculations for mechanical engineers.",
    toc: [
      "First and Second Laws of Thermodynamics Formulations",
      "Rankine, Otto, Diesel, and Brayton Power Cycles",
      "Continuity, Momentum, and Energy Conservation Equations",
      "Pipe Flow, Moody Chart, and Head Loss Estimations",
      "Boundary Layer Theory and Aerodynamic Drag/Lift"
    ]
  }
];

// Pre-seeded Demo Accounts
const DEFAULT_STUDENT_USER = {
  id: "usr-std-001",
  name: "Alex Rivera",
  email: "alex@stanford.edu",
  role: "student",
  purchases: ["sv-101"], // pre-owns CS 161
  wishlist: ["sv-104"]
};

const DEFAULT_ADMIN_USER = {
  id: "usr-adm-999",
  name: "Sarah Sterling (Admin)",
  email: "admin@studyvault.internal",
  role: "admin",
  purchases: [],
  wishlist: []
};

// ==========================================
// 2. Main Application Singleton
// ==========================================
class StudyVaultApp {
  constructor