interface Person {
    count: number;
    name: string;
    age: number;
}

export interface AgeSchema {
    person?: Person;
    isLoading: boolean;
    error?: string;
    name?: string;
}