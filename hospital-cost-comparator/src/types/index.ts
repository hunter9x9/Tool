export interface Hospital {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    website?: string;
}

export interface CostData {
    hospitalId: string;
    healthcareCost: number;
    surgeryCost: number;
    checkupCost: number;
}

export interface ComparisonResult {
    hospitalName: string;
    totalCost: number;
    surgeryCost: number;
    checkupCost: number;
}