# Getting Started - Accordion

## Overview
A React TypeScript application that displays an expandable/collapsible accordion (FAQ-style questions). The project demonstrates two different approaches: **independent accordions** and **radio-style accordions** (only one open at a time).

## Features

- 📋 Display questions/answers in accordion format
- ⬆️ ⬇️ Expand and collapse items with smooth animations
- 🔘 Two implementation approaches:
  - **Questions**: Each item manages its own state independently
  - **QuestionsRadio**: Radio-style - only one item open at a time
- 🎨 Plus/Minus icons to indicate expand/collapse state
- 📱 Responsive design
- ⚡ Built with React and TypeScript

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React with TypeScript
- `react-icons` library for icons

## Installation

```bash
cd 04_accordion
npm install
```

or

```bash
yarn install
```

## Running the Application

```bash
npm start
```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── App.tsx                 # Main component (renders both versions)
├── Questions.tsx           # Independent accordion version
├── SingleQuestion.tsx      # Individual question component (independent)
├── QuestionsRadio.tsx      # Radio-style accordion version
├── SingleQuestionRadio.tsx # Individual question component (radio-style)
├── data.ts                 # Question data
├── App.css                 # Styling
└── index.tsx               # Entry point
```

## Data Structure

Expected format in `data.ts`:

```typescript
interface Question {
  id: number;
  title: string;
  info: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "What is React?",
    info: "React is a JavaScript library for building user interfaces..."
  },
  {
    id: 2,
    title: "What are hooks?",
    info: "Hooks are functions that let you use state in functional components..."
  },
  // More questions...
];

export default questions;
```

## Implementation Steps

### Approach 1: Independent Accordions

#### Step 1: Create SingleQuestion Component
Each question manages its own expanded/collapsed state:

```typescript
// filepath: src/SingleQuestion.tsx
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }: { title: string; info: string }) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
```

#### Step 2: Create Questions Container
Map over question data and render individual questions:

```typescript
// filepath: src/Questions.tsx
import SingleQuestion from './SingleQuestion';
import questions from './data';

const Questions = () => {
  return (
    <section className='container'>
      <h1>questions</h1>
      {questions.map((question) => {
        return <SingleQuestion {...question} key={question.id} />;
      })}
    </section>
  );
};

export default Questions;
```

---

### Approach 2: Radio-Style Accordions (Only One Open)

#### Step 1: Set Up Parent State
Parent component manages which question is active:

```typescript
// filepath: src/QuestionsRadio.tsx
import { useState } from 'react';
import SingleQuestionRadio from './SingleQuestionRadio';
import questions from './data';

const QuestionsRadio = () => {
  const [activeId, setActiveId] = useState<null | number>(null);

  const toggleQuestion = (id: number) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <section className='container'>
      <h1>question (Radio)</h1>
      {questions.map((question) => {
        return (
          <SingleQuestionRadio
            {...question}
            key={question.id}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default QuestionsRadio;
```

#### Step 2: Create SingleQuestionRadio Component
Child component receives active state and toggle function as props:

```typescript
// filepath: src/SingleQuestionRadio.tsx
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface QuestionsProps {
  id: number;
  title: string;
  info: string;
  activeId: number | null;
  toggleQuestion: (id: number) => void;
}

const SingleQuestionRadio = ({
  id,
  title,
  info,
  activeId,
  toggleQuestion,
}: QuestionsProps) => {
  const isActive = activeId === id;
  
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestionRadio;
```

#### Step 3: Understand Toggle Logic
When a question button is clicked:
- If it's the active one → close it (set to `null`)
- If it's not active → open it (set its `id`)

```typescript
const toggleQuestion = (id: number) => {
  const newActiveId = id === activeId ? null : id;
  setActiveId(newActiveId);
};
```

---

### Step 4: Render Both Versions
Display both accordion types in `App.tsx`:

```typescript
// filepath: src/App.tsx
import './App.css';
import Questions from './Questions';
import QuestionsRadio from './QuestionsRadio';

function App() {
  return (
    <main>
      <Questions />
      <QuestionsRadio />
    </main>
  );
}

export default App;
```

## Key Concepts

### 1. Independent State Management
In `SingleQuestion.tsx`, each component has its own `showInfo` state:
- Multiple items can be open simultaneously
- Each component controls only itself
- Simple, local state management

### 2. Lifted State Management
In `QuestionsRadio.tsx`, state is "lifted" to parent component:
- Parent manages which question is active
- Only one question can be open at a time
- Child components are "controlled components"
- Props are passed down to control behavior

### 3. Conditional Rendering
Content only displays when the item is active:
```typescript
{isActive && <p>{info}</p>}
{showInfo && <p>{info}</p>}
```

### 4. Icon Toggling
Icons change based on expanded/collapsed state:
```typescript
{isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
```

## Comparison: Independent vs Radio-Style

| Feature        | Independent | Radio-Style |
| -------------- | ----------- | ----------- |
| Multiple open  | ✅ Yes       | ❌ No        |
| State location | Child       | Parent      |
| Complexity     | Lower       | Higher      |
| Use case       | Checklists  | FAQs, Menus |

## Summary

This project demonstrates two powerful React patterns:
- **Local State**: Each component manages itself
- **Lifted State**: Parent manages multiple children

Both approaches are useful depending on your requirements. The independent version is simpler, while the radio-style provides more control over user experience.

## Next Steps

- Add smooth CSS transitions for expand/collapse
- Add keyboard navigation (Enter/Space to toggle)
- Add search/filter functionality
- Persist active state with localStorage
- Add animations with Framer Motion