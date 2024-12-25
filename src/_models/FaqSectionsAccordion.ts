export interface FaqSectionsAccordion {
    title: string;
    sections: Section[];
    // ... rest of the interface
}

export interface Section {
    title: string;
    items: Item[];
}

export interface Item {
    question: string;
    answer: string;
}
