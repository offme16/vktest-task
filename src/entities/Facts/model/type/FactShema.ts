interface Fact {
    fact: string;
    length: number;
}

export interface FactSchema {
    result?: Fact;
    isLoading: boolean;
    error?: string;
}